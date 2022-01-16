import {useMovieQuery} from 'generated/graphql';
import {useRouter} from 'next/router';
import React, {useState} from 'react';
import {useVerifyLoggedIn} from '../auth/useVerifyLoggedIn';
import {Layout} from '../layouts/Layout';
import {FaPlus} from 'react-icons/fa';
import {InternalLink} from '@components/InternalLink';
import {AddActor} from '@components/Form/Movie/AddActorForm';
import {Thumbnail} from '@components/Card/Thumbnail';

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

	if (data?.movie) {
		return (
			<Layout>
				<div className="flex flex-col space-y-5 container mx-auto">
					<div className="flex">
						<div className="flex flex-col">
							<Thumbnail size="large" src={data?.movie?.thumbnail} />
							<div className="flex flex-col py-5">
								<h1 className="text-xl font-bold">{data?.movie?.title}</h1>
								<span>{data?.movie?.description}</span>
							</div>
						</div>

						{data?.movie?.locked}
						{data?.movie?.createdAt}
						{data?.movie?.updatedAt}
					</div>

					<AddActor movieId={data.movie.id} isOpen={open} setIsOpen={setOpen} />

					<h1>Actors</h1>
					<div className="flex space-x-5">
						{data?.movie?.actors.map(actor => (
							<div key={actor.person.id}>
								<InternalLink key={actor.person.id} href={`/person/${actor.person.id}`}>
									<Thumbnail size="small" src={actor.person.thumbnail} />
								</InternalLink>
								<p>{actor.person.name}</p>
								<p>{actor.role}</p>
							</div>
						))}
						<div
							className="grid place-items-center w-32 h-48 rounded-md p-2 bg-gray-500 cursor-pointer"
							onClick={() => {
								setOpen(true);
							}}
						>
							<FaPlus />
						</div>
					</div>
				</div>
			</Layout>
		);
	}

	return null;
};
