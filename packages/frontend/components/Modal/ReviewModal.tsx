import {Button} from '@components/Button';
import InputField from '@components/Form/InputField';
import {Dialog} from '@headlessui/react';
import {Form, Formik, FormikHelpers} from 'formik';
import {MeQuery, MeDocument, useCreateMovieReviewMutation} from 'generated/graphql';
import {toErrorMap} from 'lib/toErrorMap';
import React from 'react';
import {Modal, ModalProps} from './Modal';

interface ReviewModalProps extends ModalProps {
	movieId: number;
}

interface Values {
	rating: number;
	review: string;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({movieId, ...props}) => {
	const [createMovieReview] = useCreateMovieReviewMutation();

	return (
		<Modal {...props}>
			<Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
				Review
			</Dialog.Title>
			<Formik
				initialValues={{
					rating: 0,
					review: '',
				}}
				onSubmit={async (values: Values, {setSubmitting}: FormikHelpers<Values>) => {
					setSubmitting(true);
					await createMovieReview({
						variables: {
							data: {
								rating: values.rating,
								review: values.review,
								movie: {
									connect: {
										id: movieId,
									},
								},
								user: {
									connect: {
										id: 1,
									},
								},
							},
						},
						update: (cache, {data}) => {
							cache.writeQuery<MeQuery>({
								query: MeDocument,
								data: {
									__typename: 'Query',
									me: data?.login,
								},
							});
							cache.evict({fieldName: 'movies:{}'});
						},
					}).catch((e: any) => {
						// If graphql validation error
						// Else show other errors in modal
						if (e.graphQLErrors[0].extensions.exception.validationErrors) {
							const errors = toErrorMap(e);
							setModalError(errors[Object.keys(errors)[0]]);
							setIsOpen(true);
						} else {
							// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
							setModalError(e.message);
							setIsOpen(true);
						}
					});
					setSubmitting(false);
				}}
			>
				{({isSubmitting}) => (
					<Form className="my-12">
						<p className="text-sm text-blueGray-400 mb-6">Sign In</p>
						<div className="flex mb-4 px-4 bg-blueGray-50 rounded">
							<InputField type="email" name="email" placeholder="name@email.com" />
						</div>
						<div className="flex mb-6 px-4 bg-blueGray-50 rounded">
							<InputField type="password" name="password" placeholder="Enter your password" />
						</div>
						<Button type="submit">{isSubmitting ? 'Loading...' : 'Sign In'}</Button>
					</Form>
				)}
			</Formik>
			<Button className="mt-4" onClick={() => props.setIsOpen(false)}>
				Submit
			</Button>
			<Button variant="secondary" className="mt-4" onClick={() => props.setIsOpen(false)}>
				Cancel
			</Button>
		</Modal>
	);
};
