import {IconButton} from '@components/IconButton';
import {notify} from '@components/Notify';
import {MovieReviewDocument, useDeleteMovieReviewMutation, useMovieReviewQuery} from 'generated/graphql';
import {useGetIntId} from 'hooks/useGetIntId';
import {useRouter} from 'next/router';
import React from 'react';
import {AiOutlineDelete} from 'react-icons/ai';
import {useVerifyLoggedIn} from '../auth/useVerifyLoggedIn';
import {Layout} from '../layouts/Layout';

export const MovieReviewPage: React.FC = () => {
	useVerifyLoggedIn();

	const router = useRouter();

	const movieId: number = useGetIntId();

	const {data} = useMovieReviewQuery({
		skip: movieId === -1,
		variables: {
			movieId,
		},
	});

	const [deleteMovieReview, {loading: deleteMovieReviewLoading}] = useDeleteMovieReviewMutation({
		refetchQueries: [MovieReviewDocument],
	});

	return (
		<Layout>
			<div className="container px-4 mx-auto">
				<section className="py-20">
					<div className="container px-4 mx-auto">
						<div className="max-w-lg mx-auto mb-12 text-center">
							<img className="mx-auto" src="/quote.svg" alt="" />
							<h2 className="my-2 text-3xl md:text-4xl font-bold font-heading">Review</h2>
						</div>
						<div className="flex flex-wrap max-w-5xl mx-auto mb-6">
							<div key={data?.movieReview?.user.username} className="w-full px-3 mb-6">
								<div className="p-8 bg-white shadow rounded">
									<div className="flex items-center justify-between mb-4">
										<div className="flex items-center">
											<img
												className="h-16 w-16 rounded-full object-cover"
												src={data?.movieReview?.user.avatar}
												alt=""
											/>
											<div className="pl-4">
												<p className="text-xl">{data?.movieReview?.user.username}</p>
												<p className="text-blue-600">{data?.movieReview?.rating} / 5</p>
											</div>
										</div>
										<IconButton
											icon={AiOutlineDelete}
											loading={deleteMovieReviewLoading}
											onClick={() => {
												deleteMovieReview({
													variables: {
														movieId,
													},
												})
													.then(() => {
														notify('success', 'delete', 'Review deleted');
													})
													.then(() => {
														void router.push(`/movie/${movieId}`);
													})
													.catch(() => {
														notify('error', 'delete', 'Error deleting review');
													});
											}}
										/>
									</div>
									<p className="leading-loose text-blueGray-400">{data?.movieReview?.review}</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</Layout>
	);
};
