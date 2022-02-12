import {Button} from '@components/Button';
import InputField from '@components/Form/InputField';
import {Textarea} from '@components/Form/Textarea';
import {Loading} from '@components/Loading';
import {notify} from '@components/Notify';
import {PosterDiv} from '@components/PosterDiv';
import {Form, Formik, FormikHelpers} from 'formik';
import {
	PersonDocument,
	PeopleDocument,
	UploadType,
	usePersonQuery,
	useUploadPosterMutation,
	useUpdatePersonMutation,
} from 'generated/graphql';
import {useGetIntId} from 'hooks/useGetIntId';
import handleInputClick from 'lib/handleInputClick';
import {useRouter} from 'next/router';
import React, {useEffect, useRef, useState} from 'react';
import {useVerifyLoggedIn} from '../auth/useVerifyLoggedIn';
import {Layout} from '../layouts/Layout';

interface Values {
	name: string;
	bio: string;
}

export const EditPage: React.FC = () => {
	useVerifyLoggedIn();

	const personId = useGetIntId();
	const {data: person} = usePersonQuery({
		fetchPolicy: 'no-cache',
		skip: personId === -1,
		variables: {
			personId,
		},
	});

	const router = useRouter();

	const [updatePerson] = useUpdatePersonMutation();

	const [uploadPoster] = useUploadPosterMutation();
	const [poster, setPoster] = useState();
	const posterInput = useRef(null as HTMLInputElement | null);
	const handlePosterChange = (event: any) => setPoster(event.target.files[0]);

	useEffect(() => {
		if (poster !== undefined) {
			uploadPoster({
				variables: {
					id: personId,
					file: poster,
					type: UploadType.Person,
				},
				refetchQueries: [PersonDocument],
			})
				.then(() => {
					notify('success', 'mutation', 'poster uploaded successfully');
				})
				.catch(() => {
					notify('error', 'mutation', 'poster upload failed');
				});
		}
	}, [poster, personId, uploadPoster]);

	if (!person?.person) return <Loading />;

	return (
		<Layout>
			<Formik
				initialValues={{
					name: person?.person?.name ?? '',
					bio: person?.person?.bio ?? '',
				}}
				onSubmit={async (values: Values, {setSubmitting}: FormikHelpers<Values>) => {
					setSubmitting(true);
					await updatePerson({
						variables: {
							data: {
								name: {
									set: values.name,
								},
								bio: {
									set: values.bio,
								},
							},
							where: {
								id: person?.person?.id,
							},
						},
						refetchQueries: [PeopleDocument],
					})
						.then(() => {
							// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
							notify('success', 'mutation', `${person.person?.name} updated successfully`);
						})
						.catch(() => {
							// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
							notify('error', 'mutation', `${person.person?.name} update failed`);
						})
						.then(() => {
							setSubmitting(false);
							router.back();
						});
				}}
			>
				{({isSubmitting}) => (
					<Form>
						<div className="container px-4 mx-auto">
							<div className="max-w-2xl mx-auto mb-6">
								<div className="flex flex-col items-center text-center mb-6">
									<InputField type="text" name="name" />
								</div>
							</div>
							<div className="flex items-center justify-center space-x-5 max-w-5xl mx-auto mb-8">
								<PosterDiv
									src={person?.person?.poster ?? ''}
									onClick={() => {
										handleInputClick(posterInput);
									}}
								/>
								<input
									ref={posterInput}
									type="file"
									id="file"
									accept="images"
									style={{display: 'none'}}
									onChange={handlePosterChange}
								/>
							</div>
							<div className="max-w-2xl mx-auto">
								<Textarea name="bio" />
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
