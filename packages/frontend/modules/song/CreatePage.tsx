import {Button} from '@components/Button';
import InputField from '@components/Form/InputField';
import {Textarea} from '@components/Form/Textarea';
import {Icon} from '@components/Icon';
import {notify} from '@components/Notify';
import {PosterDiv} from '@components/PosterDiv';
import {Form, Formik, FormikHelpers} from 'formik';
import {
	SongDocument,
	SongsDocument,
	UploadType,
	useCreateSongMutation,
	useUploadPosterMutation,
} from 'generated/graphql';
import {useRouter} from 'next/router';
import React, {useRef, useState} from 'react';
import {AiOutlinePlus} from 'react-icons/ai';
import {useVerifyLoggedIn} from '../auth/useVerifyLoggedIn';
import {Layout} from '../layouts/Layout';

interface Values {
	title: string;
	description: string;
}

export const CreatePage: React.FC = () => {
	useVerifyLoggedIn();

	const router = useRouter();

	const [createSong] = useCreateSongMutation();

	const [uploadPoster] = useUploadPosterMutation();

	const [poster, setPoster] = useState();

	const posterInput = useRef(null as HTMLInputElement | null);

	const handlePosterChange = (event: any) => {
		setPoster(event.target.files[0]);
		notify('success', 'mutation', 'Poster ready to upload');
	};

	return (
		<Layout>
			<Formik
				initialValues={{
					title: '',
					description: '',
				}}
				onSubmit={async (values: Values, {setSubmitting}: FormikHelpers<Values>) => {
					setSubmitting(true);
					await createSong({
						variables: {
							data: {
								title: values.title,
								description: values.description,
							},
						},
						update: cache => {
							cache.evict({fieldName: 'songs:{}'});
						},
						refetchQueries: [SongsDocument],
					})
						.then(res => {
							uploadPoster({
								variables: {
									id: res?.data?.createSong?.id ?? -1,
									file: poster,
									type: UploadType.Song,
								},
							});
						})
						.then(() => setSubmitting(false))
						.then(async () => router.push('/songs'));
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
									src={undefined}
									onClick={() => {
										if (posterInput.current) posterInput.current.click();
									}}
									onChange={handlePosterChange}
								>
									<input
										ref={posterInput}
										type="file"
										id="file"
										accept="images"
										style={{display: 'none'}}
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
									<Button type="submit">{isSubmitting ? 'Creating...' : 'Create Song'}</Button>
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
