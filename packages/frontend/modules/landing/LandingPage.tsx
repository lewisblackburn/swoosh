import {InternalLink} from '@components';
import {SortOrder, useMoviesQuery} from 'generated/graphql';
import React from 'react';
import {useVerifyLoggedIn} from '../auth/useVerifyLoggedIn';
import {Layout} from '../layouts/Layout';

export const LandingPage: React.FC = () => {
	useVerifyLoggedIn();

	const {data} = useMoviesQuery({
		variables: {
			orderBy: {
				createdAt: SortOrder.Desc,
			},
		},
	});

	return (
		<Layout>
			<div className="flex flex-wrap justify-center">
				{data?.movies?.map(movie => {
					return (
						<div key={movie.id}>
							<div className="p-5">
								<InternalLink href={`movie/${movie.id}`}>
									<img src={movie.thumbnail} className="w-64 h-96" />
								</InternalLink>
							</div>
						</div>
					);
				})}
			</div>
		</Layout>
	);
};
