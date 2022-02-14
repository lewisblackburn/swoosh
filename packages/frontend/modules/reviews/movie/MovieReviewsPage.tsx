import {Loading} from '@components/Loading';
import {useMovieReviewsQuery} from 'generated/graphql';
import {useGetIntId} from 'hooks/useGetIntId';
import {limit} from 'lib/constants';
import Link from 'next/link';
import React, {useCallback, useEffect} from 'react';
import {useVerifyLoggedIn} from '../../auth/useVerifyLoggedIn';
import {Layout} from '../../layouts/Layout';

export const MovieReviewsPage: React.FC = () => {
	useVerifyLoggedIn();

	const movieId: number = useGetIntId();

	const {data, fetchMore} = useMovieReviewsQuery({
		variables: {
			take: limit,
			where: {
				movieId: {
					equals: movieId,
				},
			},
		},
	});

	const handleScroll = useCallback(() => {
		if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
			fetchMore({
				variables: {
					take: limit,
					skip: limit,
				},
			});
		}
	}, [fetchMore]);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [handleScroll]);

	if (!data?.movieReviews) return <Loading />;

	return (
		<Layout>
			<div className="container px-4 mx-auto">
				<section className="py-20">
					<div className="container px-4 mx-auto">
						<div className="max-w-lg mx-auto mb-12 text-center">
							<img className="mx-auto" src="/quote.svg" alt="" />
							<h2 className="my-2 text-3xl md:text-4xl font-bold font-heading">Reviews</h2>
						</div>
						<div className="flex flex-wrap max-w-5xl mx-auto mb-6">
							{data?.movieReviews.map(review => (
								<Link key={review.user.username} href={`/movie/review/${movieId}`}>
									<a className="w-full px-3 mb-6">
										<div className="p-8 bg-white shadow rounded">
											<div className="flex items-center justify-between mb-4">
												<div className="flex items-center">
													<img
														className="h-16 w-16 rounded-full object-cover"
														src={review.user.avatar}
														alt=""
													/>
													<div className="pl-4">
														<p className="text-xl">{review.user.username}</p>
														<p className="text-blue-600">{review.rating} / 5</p>
													</div>
												</div>
											</div>
											<p className="leading-loose text-blueGray-400">{review.review}</p>
										</div>
									</a>
								</Link>
							))}
						</div>
					</div>
				</section>
			</div>
		</Layout>
	);
};
