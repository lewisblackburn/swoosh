import {Grid} from '@components/Grid';
import {Poster} from '@components/Poster';
import {useVerifyLoggedIn} from '@modules/auth/useVerifyLoggedIn';
import {Layout} from '@modules/layouts/Layout';
import {useMoviesQuery} from 'generated/graphql';
import {limit} from 'lib/constants';
import Link from 'next/link';
import React, {useCallback, useEffect} from 'react';

export const MoviesPage: React.FC = () => {
	useVerifyLoggedIn();

	const {data, fetchMore} = useMoviesQuery({
		variables: {
			take: limit,
		},
	});

	const handleScroll = useCallback(() => {
		// @ts-expect-error this is a hack to get last element in the list
		// eslint-disable-next-line no-unsafe-optional-chaining
		const lastMovieInResults = data?.movies[data?.movies?.length - 1];
		const cursor = lastMovieInResults?.id;

		if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
			fetchMore({
				variables: {
					take: limit,
					skip: 1, // Skip the cursor
					cursor: {
						id: cursor,
					},
				},
			});
		}
	}, [data?.movies, fetchMore]);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [handleScroll]);

	return (
		<Layout>
			<section>
				<div className="container px-4 pb-10 mx-auto">
					<div className="max-w-lg mx-auto mb-12 text-center">
						<span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl">
							Movies
						</span>
					</div>
					<div className="flex flex-col space-y-5">
						<Grid>
							{data?.movies?.map(movie => (
								// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
								<Link key={movie.id} href={`/movie/${movie.id}` ?? 0}>
									<a>
										<Poster src={movie.poster} />
									</a>
								</Link>
							))}
						</Grid>
					</div>
				</div>
			</section>
		</Layout>
	);
};
