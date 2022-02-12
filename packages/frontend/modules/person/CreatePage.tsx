import {Button} from '@components/Button';
import InputField from '@components/Form/InputField';
import {Textarea} from '@components/Form/Textarea';
import {Icon} from '@components/Icon';
import {PosterDiv} from '@components/PosterDiv';
import {Form, Formik, FormikHelpers} from 'formik';
import {PersonDocument, UploadType, useCreatePersonMutation, useUploadPosterMutation} from 'generated/graphql';
import {useRouter} from 'next/router';
import React, {useRef, useState} from 'react';
import {AiOutlinePlus} from 'react-icons/ai';
import {useVerifyLoggedIn} from '../auth/useVerifyLoggedIn';
import {Layout} from '../layouts/Layout';

interface Values {
	name: string;
	bio: string;
}

// WARN: There is a bug in Formik that causes the form to not submit if the poster is not set and it will create a person with empty values.

export const CreatePage: React.FC = () => {
	useVerifyLoggedIn();

	const router = useRouter();

	const [createPerson] = useCreatePersonMutation();

	const [uploadPoster] = useUploadPosterMutation();
	const [poster, setPoster] = useState();
	const posterInput = useRef(null as HTMLInputElement | null);
	const handlePosterChange = (event: any) => setPoster(event.target.files[0]);

	return (
		<Layout>
			<Formik
				initialValues={{
					name: '',
					bio: '',
				}}
				onSubmit={async (values: Values, {setSubmitting}: FormikHelpers<Values>) => {
					setSubmitting(true);
					await createPerson({
						variables: {
							data: {
								name: values.name,
								bio: values.bio,
							},
						},
						update: cache => {
							cache.evict({fieldName: 'people:{}'});
						},
						refetchQueries: [PersonDocument],
					})
						.then(res => {
							uploadPoster({
								variables: {
									id: res?.data?.createPerson?.id ?? -1,
									file: poster,
									type: UploadType.Person,
								},
							});
						})
						.then(() => setSubmitting(false))
						.then(async () => router.push('/people'));
				}}
			>
				{({isSubmitting}) => (
					<Form>
						<div className="container px-4 mx-auto">
							<div className="max-w-2xl mx-auto mb-6">
								<div className="flex flex-col items-center text-center mb-6">
									<InputField type="text" name="title" />
								</div>
							</div>
							<div className="flex justify-center space-x-5 max-w-5xl mx-auto mb-8">
								<PosterDiv
									src=""
									onClick={() => {
										if (posterInput.current) posterInput.current.click();
									}}
								>
									<input
										ref={posterInput}
										type="file"
										id="file"
										accept="images"
										style={{display: 'none'}}
										onChange={handlePosterChange}
									/>
									<Icon icon={AiOutlinePlus} />
								</PosterDiv>
							</div>
							<div className="max-w-2xl mx-auto">
								<Textarea name="description" placeholder="description" />
							</div>
						</div>
						<section className="py-20">
							<div className="container px-4 mx-auto text-center">
								<div className="flex space-x-5 justify-center">
									<Button type="submit">{isSubmitting ? 'Submitting...' : 'Save changes'}</Button>
									<Button variant="secondary" onClick={() => history.go(-1)}>
										Cancel
									</Button>
								</div>
							</div>
						</section>
					</Form>
				)}
			</Formik>
		</Layout>
	);
};
