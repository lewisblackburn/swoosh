import { Button } from '@components/Button';
import { Form, Formik, FormikHelpers } from 'formik';
import {
	Career,
	MovieCreateInput,
	PersonCreateInput,
	UploadType,
	useCreateMovieMutation,
	useCreatePersonMutation,
	useUploadThumbnailMutation,
} from 'generated/graphql';
import { toErrorMap } from 'lib/toErrorMap';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import InputField from '../InputField';

interface ThumbnailUpload {
	id: number;
}

export const PersonCreateForm: React.FC = () => {
	const router = useRouter();
	const [createPerson, { data, loading }] = useCreatePersonMutation();

	const [upload] = useUploadThumbnailMutation();
	const [file, setFile] = useState();

	const handleChange = (event: any) => setFile(event.target.files[0]);

	useEffect(() => {
		if (data?.createPerson?.id && !loading) {
			upload({
				variables: { id: data.createPerson.id, file, type: UploadType.Person },
			})
				.catch(error => {
					console.log(error.message);
				})
				.then(() => {
					if (typeof router.query.next === 'string') {
						router.push(router.query.next);
					} else router.push(`/person/${data!.createPerson!.id}`);
				});
		}
	}, [data, loading]);

	return (
		<div>
			<Formik
				initialValues={{
					name: '',
					age: 0,
					bio: '',
					career: {
						set: [Career.Actor],
					},
				}}
				onSubmit={async (
					values: PersonCreateInput,
					{ setSubmitting, setErrors }: FormikHelpers<PersonCreateInput>
				) => {
					setSubmitting(true);
					const response = await createPerson({
						variables: {
							data: values,
						},
						update: cache => {
							cache.evict({ fieldName: 'people:{}' });
						},
					}).catch((e: any) => {
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
				{({ isSubmitting, errors, touched }) => (
					<Form className="w-full container">
						<InputField name="name" placeholder="name" touched={touched.name} errors={errors.name} type="text" />
						<InputField name="age" placeholder="age" touched={touched.age} errors={errors.age} type="number" />
						<InputField name="bio" placeholder="bio" touched={touched.bio} errors={errors.bio} type="text" />
						<input type="file" onChange={(e: any) => handleChange(e)} />
						<Button type="submit" loading={isSubmitting}>
							Create Person
						</Button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
