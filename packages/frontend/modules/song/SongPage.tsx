import {useSongQuery} from 'generated/graphql';
import {useGetIntId} from 'hooks/useGetIntId';
import React from 'react';
import {useVerifyLoggedIn} from '../auth/useVerifyLoggedIn';
import {Layout} from '../layouts/Layout';

export const SongPage: React.FC = () => {
	useVerifyLoggedIn();

	const songId = useGetIntId();
	const {data} = useSongQuery({
		skip: songId === -1,
		variables: {
			songId,
		},
	});

	return (
		<Layout>
			<div className="flex flex-col space-y-5 container mx-auto py-20">
				<div className="flex">
					<div className="flex flex-col">
						<img src={data?.song?.poster} alt="" className="w-64 h-96" />
						<div className="flex flex-col py-5">
							<h1 className="text-xl font-bold">{data?.song?.title}</h1>
							<span>isLiked: {data?.song?.isLiked}</span>
							<span>id: {data?.song?.id}</span>
							<span>
								genres(s):{' '}
								{data?.song?.genres.map(song => (
									<div key={song.name}>{song.name}</div>
								))}
							</span>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};
