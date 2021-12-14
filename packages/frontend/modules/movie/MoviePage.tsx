import {useMovieQuery} from 'generated/graphql';
import {useRouter} from 'next/router';
import React, {Fragment, useState} from 'react';
import {useVerifyLoggedIn} from '../auth/useVerifyLoggedIn';
import {Layout} from '../layouts/Layout';
import {FaPlus} from 'react-icons/fa';
import {AddActor} from '@components/Actor/AddActor';

export const MoviePage: React.FC = () => {
	useVerifyLoggedIn();

	const router = useRouter();
	const {id: movieId} = router.query;

	const {data} = useMovieQuery({
		variables: {
			movieId: parseInt(movieId!.toString()),
		},
	});

	const [open, setOpen] = useState(false);

	return (
		<Layout>
			<div className="flex flex-col space-y-5 container mx-auto py-20">
				<div className="flex">
					<div className="flex flex-col">
						<img src={data?.movie?.thumbnail} alt="" className="w-64 h-96" />
						<div className="flex flex-col py-5">
							<h1 className="text-xl font-bold">{data?.movie?.title}</h1>
							<span>{data?.movie?.description}</span>
						</div>
					</div>

					{data?.movie?.locked}
					{data?.movie?.createdAt}
					{data?.movie?.updatedAt}
				</div>

				<AddActor open={open} setOpen={setOpen} />

				{data?.movie?.actors.length === 0 ? (
					<div
						onClick={() => setOpen(true)}
						className="grid place-items-center w-32 h-48 rounded-md p-2 bg-gray-500 cursor-pointer"
					>
						<FaPlus />
					</div>
				) : (
					<Fragment>
						{data?.movie?.actors.map(actor => (
							<div key={actor.personId}>{actor.role}</div>
						))}
					</Fragment>
				)}
			</div>
		</Layout>
	);
};
