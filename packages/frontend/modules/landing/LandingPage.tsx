import {InternalLink} from '@components';
import {Thumbnail} from '@components/Thumbnail';
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
			<div className="flex flex-wrap">
				{data?.movies?.map(movie => {
					return (
						<div key={movie.id}>
							<div className="p-5">
								<InternalLink href={`/movie/${movie.id}`}>
									<Thumbnail size="small" src={movie.thumbnail} />
								</InternalLink>
							</div>
						</div>
					);
				})}
			</div>
		</Layout>
	);
};
