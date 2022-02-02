import {Button} from '@components/Button';
import InputField from '@components/Form/InputField';
import {Textarea} from '@components/Form/Textarea';
import {Icon} from '@components/Icon';
import {Form, Formik, FormikHelpers} from 'formik';
import {
	MoviesDocument,
	UploadType,
	useCreateMovieMutation,
	useUploadBackdropMutation,
	useUploadPosterMutation,
} from 'generated/graphql';
import {useRouter} from 'next/router';
import React, {useRef, useState} from 'react';
import {AiOutlinePlus} from 'react-icons/ai';
import {useVerifyLoggedIn} from '../auth/useVerifyLoggedIn';
import {Layout} from '../layouts/Layout';

interface Values {
	title: string;
	tagline: string;
	overview: string;
}

export const CreatePage: React.FC = () => {
	useVerifyLoggedIn();

	const router = useRouter();

	const [createMovie] = useCreateMovieMutation();

	const [uploadBackdrop] = useUploadBackdropMutation();
	const [uploadPoster] = useUploadPosterMutation();

	const [backdrop, setBackdrop] = useState();
	const [poster, setPoster] = useState();

	const backdropInput = useRef(null);
	const posterInput = useRef(null);

	const handleBackdropChange = (event: any) => setBackdrop(event.target.files[0]);
	const handlePosterChange = (event: any) => setPoster(event.target.files[0]);

	return (
		<Layout>
			<Formik
				initialValues={{
					title: '',
					tagline: '',
					overview: '',
				}}
				onSubmit={async (values: Values, {setSubmitting}: FormikHelpers<Values>) => {
					setSubmitting(true);
					await createMovie({
						variables: {
							data: {
								title: values.title,
								tagline: values.tagline,
								overview: values.overview,
							},
						},
						update: cache => {
							cache.evict({fieldName: 'movies:{}'});
						},
						refetchQueries: [MoviesDocument],
					})
						.then(res =>
							// eslint-disable-next-line @typescript-eslint/no-unsafe-return
							uploadBackdrop({
								variables: {
									id: res.data.createMovie.id,
									file: backdrop,
									type: UploadType.Movie,
								},
							}).then(() =>
								// eslint-disable-next-line @typescript-eslint/no-unsafe-return
								uploadPoster({
									variables: {
										id: res.data.createMovie.id,
										file: poster,
										type: UploadType.Movie,
									},
								})
							)
						)
						.then(() => setSubmitting(false))
						.then(async () => router.push('/movies'));
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
							<div className="flex space-x-5 max-w-5xl mx-auto mb-8">
								<div
									className="grid place-items-center cursor-pointer h-80 w-80 bg-blueGray-100/40 hover:bg-blueGray-100 transofrm transition-all rounded"
									// eslint-disable-next-line @typescript-eslint/no-unsafe-return
									onClick={() => posterInput.current.click()}
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
								</div>
								<div
									className="grid place-items-center cursor-pointer h-80 w-full bg-blueGray-100/40 hover:bg-blueGray-100 transofrm transition-all rounded"
									// eslint-disable-next-line @typescript-eslint/no-unsafe-return
									onClick={() => backdropInput.current.click()}
									onChange={handleBackdropChange}
								>
									<input
										ref={backdropInput}
										type="file"
										id="file"
										accept="images"
										style={{display: 'none'}}
									/>
									<Icon icon={AiOutlinePlus} />
								</div>
							</div>
							<div className="max-w-2xl mx-auto">
								<InputField type="text" name="tagline" />
								<Textarea name="overview" placeholder="overview" />
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
