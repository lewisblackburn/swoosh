import {Button} from '@components/Button';
import InputField from '@components/Form/InputField';
import {Textarea} from '@components/Form/Textarea';
import {notify} from '@components/Notify';
import {Form, Formik, FormikHelpers} from 'formik';
import {SongDocument, useCreateSongReviewMutation} from 'generated/graphql';
import React from 'react';
import {Modal, ModalProps} from './Modal';

interface ReviewModalProps extends ModalProps {
	songId: number;
}

interface Values {
	rating: number;
	review: string;
}

export const ReviewSongModal: React.FC<ReviewModalProps> = ({songId, ...props}) => {
	const [createSongReview] = useCreateSongReviewMutation({
		refetchQueries: [SongDocument],
	});

	return (
		<Modal {...props}>
			<Formik
				initialValues={{
					rating: 0,
					review: '',
				}}
				onSubmit={async (values: Values, {setSubmitting}: FormikHelpers<Values>) => {
					setSubmitting(true);
					await createSongReview({
						variables: {
							data: {
								rating: values.rating,
								review: values.review,
								song: {
									connect: {
										id: songId,
									},
								},
							},
						},
					})
						.then(() => {
							notify('success', 'mutation', 'Review created');
						})
						.catch(() => {
							notify('error', 'mutation', 'Review creation failed');
						})
						.then(() => {
							props.setIsOpen(false);
							setSubmitting(false);
						});
				}}
			>
				{({isSubmitting}) => (
					<Form>
						<p className="text-sm text-blueGray-400 mb-6">Review</p>
						<InputField type="number" name="rating" min={0} max={5} />
						<Textarea name="review" placeholder="optional" />
						<div className="flex items-center justify-between">
							<Button variant="secondary" className="mt-4" onClick={() => props.setIsOpen(false)}>
								Cancel
							</Button>
							<Button type="submit" className="mt-4">
								{isSubmitting ? 'Submitting...' : 'Submit'}
							</Button>
						</div>
					</Form>
				)}
			</Formik>
		</Modal>
	);
};
