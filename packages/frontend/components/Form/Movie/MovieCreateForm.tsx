import {Button} from '@components/Button';
import {Form, Formik, FormikHelpers} from 'formik';
import {MovieCreateInput, useCreateMovieMutation, useUploadThumbnailMutation} from 'generated/graphql';
import {toErrorMap} from 'lib/toErrorMap';
import {useRouter} from 'next/router';
import React, {useEffect, useState} from 'react';
import InputField from '../InputField';

interface ThumbnailUpload {
	id: number;
}

export const MovieCreateForm: React.FC = () => {
	const router = useRouter();
	const [createMovie, {data, loading}] = useCreateMovieMutation();

	const [upload] = useUploadThumbnailMutation();
	const [file, setFile] = useState();

	const handleChange = (event: any) => setFile(event.target.files[0]);

	useEffect(() => {
		if (data?.createMovie?.id && !loading) {
			upload({
				variables: {id: data.createMovie.id, file},
			})
				.catch(error => {
					console.log(error.message);
				})
				.then(() => router.push(`/movie/${data!.createMovie!.id}`));
		}
	}, [data, loading]);

	return (
		<div>
			<Formik
				initialValues={{
					title: '',
					description: '',
					locked: false,
				}}
				onSubmit={async (values: MovieCreateInput, {setSubmitting, setErrors}: FormikHelpers<MovieCreateInput>) => {
					setSubmitting(true);
					const response = await createMovie({
						variables: {
							data: values,
						},
						update: cache => {
							cache.evict({fieldName: 'movies:{}'});
						},
					})
						.then(() => {
							if (typeof router.query.next === 'string') {
								router.push(router.query.next);
							}
						})
						.catch((e: any) => {
							// If graphql error
							if (e.graphQLErrors[0].extensions.exception.validationErrors) {
								setErrors(toErrorMap(e));
							}
							// Other error, password: as it is last input box
							else {
								console.log(e.message);
							}
						});
					setSubmitting(false);
				}}
			>
				{({isSubmitting, errors, touched}) => (
					<Form className="w-full container">
						<InputField name="title" placeholder="title" touched={touched.title} errors={errors.title} type="text" />
						<InputField
							name="description"
							placeholder="description"
							touched={touched.description}
							errors={errors.description}
							type="text"
						/>
						<InputField
							name="locked"
							placeholder="locked"
							touched={touched.locked}
							errors={errors.locked}
							type="text"
						/>
						<input type="file" onChange={(e: any) => handleChange(e)} />
						<Button type="submit" loading={isSubmitting}>
							Create Movie
						</Button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
