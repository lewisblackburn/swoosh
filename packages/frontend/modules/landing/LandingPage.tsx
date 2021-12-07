import {InternalLink} from '@components/InternalLink';
import {useMoviesQuery} from 'generated/graphql';
import React from 'react';
import {useVerifyLoggedIn} from '../auth/useVerifyLoggedIn';
import {Layout} from '../layouts/Layout';

export const LandingPage: React.FC = () => {
	useVerifyLoggedIn();
	const {data} = useMoviesQuery();

	return (
		<Layout>
			<div className="flex flex-wrap justify-center">
				{data?.movies?.map(movie => {
					return (
						<div key={movie.id}>
							<div className="p-5">
								{movie.title}
								{movie.description}
								<InternalLink href={`movie/${movie.id}`}>
									<img src={movie.thumbnail} />
								</InternalLink>
							</div>
						</div>
					);
				})}
			</div>
		</Layout>
	);
};
