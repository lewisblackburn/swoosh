import {Button} from '@components/Button';
import {Form, Formik, FormikHelpers} from 'formik';
import {MovieCreateInput, useCreateMovieMutation, useUploadThumbnailMutation} from 'generated/graphql';
import {toErrorMap} from 'lib/toErrorMap';
import {useRouter} from 'next/router';
import React from 'react';
import InputField from '../InputField';

interface ThumbnailUpload {
	id: number;
}

export const MovieCreateForm: React.FC = () => {
	const router = useRouter();
	const [createMovie, {data, loading}] = useCreateMovieMutation();

	const [upload] = useUploadThumbnailMutation();

	let fileUploaded: any = null;

	const hiddenFileInput: any = React.useRef(null);

	const handleClick = (_event: any) => {
		hiddenFileInput.current.click();
	};

	const handleChange = (event: any) => (fileUploaded = event.target.files[0]);

	return (
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
						} else {
							// this will probably want to go to the movie created
							// router.push('/');
							if (!loading && data?.createMovie) {
								upload({
									variables: {id: data.createMovie.id, file: fileUploaded},
								}).catch(error => {
									console.log(error.message);
								});
							}
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
					<InputField name="locked" placeholder="locked" touched={touched.locked} errors={errors.locked} type="text" />
					<Button type="submit" loading={isSubmitting}>
						Create Movie
					</Button>
				</Form>
			)}
		</Formik>
	);
};

{
	/* <input type="file" ref={hiddenFileInput} onChange={(e: any) => handleChange(e)} style={{display: 'none'}} /> */
}
