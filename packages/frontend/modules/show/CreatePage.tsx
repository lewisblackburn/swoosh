import {BackdropDiv} from '@components/BackdropDiv';
import {Button} from '@components/Button';
import InputField from '@components/Form/InputField';
import {Textarea} from '@components/Form/Textarea';
import {Icon} from '@components/Icon';
import {PosterDiv} from '@components/PosterDiv';
import {Form, Formik, FormikHelpers} from 'formik';
import {
	ShowsDocument,
	UploadType,
	useCreateShowMutation,
	useUploadBackdropMutation,
	useUploadPosterMutation,
} from 'generated/graphql';
import handleInputClick from 'lib/handleInputClick';
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

	const [createShow] = useCreateShowMutation();

	const [uploadBackdrop] = useUploadBackdropMutation();
	const [uploadPoster] = useUploadPosterMutation();

	const [backdrop, setBackdrop] = useState();
	const [poster, setPoster] = useState();

	const backdropInput = useRef(null as HTMLInputElement | null);
	const posterInput = useRef(null as HTMLInputElement | null);

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
					await createShow({
						variables: {
							data: {
								title: values.title,
								tagline: values.tagline,
								overview: values.overview,
							},
						},
						update: cache => {
							cache.evict({fieldName: 'shows:{}'});
						},
						refetchQueries: [ShowsDocument],
					})
						.then(res =>
							// eslint-disable-next-line @typescript-eslint/no-unsafe-return
							uploadBackdrop({
								variables: {
									id: res?.data?.createShow.id ?? -1,
									file: backdrop,
									type: UploadType.Show,
								},
							}).then(() =>
								// eslint-disable-next-line @typescript-eslint/no-unsafe-return
								uploadPoster({
									variables: {
										id: res?.data?.createShow.id ?? -1,
										file: poster,
										type: UploadType.Show,
									},
								})
							)
						)
						.then(() => setSubmitting(false))
						.then(async () => router.push('/shows'));
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
								<PosterDiv
									src={undefined}
									onClick={() => {
										handleInputClick(posterInput);
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
								<BackdropDiv
									src={undefined}
									onClick={() => {
										handleInputClick(backdropInput);
									}}
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
								</BackdropDiv>
							</div>
							<div className="max-w-2xl mx-auto">
								<InputField type="text" name="tagline" />
								<Textarea name="overview" placeholder="overview" />
							</div>
						</div>
						<section className="py-20">
							<div className="container px-4 mx-auto text-center">
								<div className="flex space-x-5 justify-center">
									<Button type="submit">{isSubmitting ? 'Submitting...' : 'Submit'}</Button>
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
