import {useMovieQuery} from 'generated/graphql';
import {useRouter} from 'next/router';
import React from 'react';
import {useVerifyLoggedIn} from '../auth/useVerifyLoggedIn';
import {Layout} from '../layouts/Layout';

export const MoviePage: React.FC = () => {
	useVerifyLoggedIn();

	const router = useRouter();
	const {id: movieId} = router.query;

	const {data} = useMovieQuery({
		variables: {
			movieId: parseInt(movieId!.toString()),
		},
	});

	return (
		<Layout>
			<div className="flex flex-col space-y-5 container mx-auto py-20">
				<div className="flex">
					<div className="flex flex-col">
						<img src={data?.movie?.thumbnail} alt="" />
						<div className="flex flex-col py-5">
							<h1 className="text-xl font-bold">{data?.movie?.title}</h1>
							<span>{data?.movie?.description}</span>
						</div>
					</div>

					{data?.movie?.locked}
					{data?.movie?.createdAt}
					{data?.movie?.updatedAt}
				</div>

				{data?.movie?.actors.map(actor => (
					<div key={actor.personId}>{actor.role}</div>
				))}
			</div>
		</Layout>
	);
};
