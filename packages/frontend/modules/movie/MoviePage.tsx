import {Avatar} from '@components/Avatar';
import {Button} from '@components/Button';
import {AddActor} from '@components/Form/Movie/AddActorForm';
import {Icon} from '@components/Icon';
import {IconButton} from '@components/IconButton';
import {useMovieQuery} from 'generated/graphql';
import {useRouter} from 'next/router';
import React from 'react';
import {AiFillEye, AiFillPlayCircle, AiOutlineEdit, AiOutlineHeart, AiOutlinePlus, AiOutlineStar} from 'react-icons/ai';
import {useVerifyLoggedIn} from '../auth/useVerifyLoggedIn';
import {Layout} from '../layouts/Layout';

function minutesToHours(hours: number): string {
	let h = 0;
	let m = 0;

	h = Math.floor(hours / 60);
	m = hours % 60;

	return `${h}h ${m}m`;
}

export const MoviePage: React.FC = () => {
	useVerifyLoggedIn();

	const router = useRouter();
	const {id: movieId} = router.query;

	const {data} = useMovieQuery({variables: {movieId: 1}});

	if (data?.movie) {
		return (
			<Layout>
				<div className="flex flex-col space-y-5 max-w-7xl mx-auto">
					<div className="flex space-x-5">
						{/* poster */}
						<img
							className="w-64 h-96 rounded-md filter hover:brightness-75 transition-all"
							src={data.movie.poster}
							alt="poster"
						/>
						{/* backdrop */}
						<div
							className="w-full h-96 rounded-md cursor-pointer bg-cover grid place-items-center filter hover:brightness-75 transition-all"
							style={{
								// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
								backgroundImage: `url(${data.movie.backdrop})`,
							}}
							onClick={async () => router.push(data.movie.trailer)}
						>
							<Icon icon={AiFillPlayCircle} className="w-16 h-16 text-white" />
						</div>
					</div>
					<div className="flex justify-between">
						<div className="flex space-x-5">
							{/* platforms */}
							<Button>Watch</Button>
							<IconButton icon={AiOutlineStar} className="bg-gray-100 hover:bg-gray-200" />
							<IconButton icon={AiOutlineHeart} className="bg-gray-100 hover:bg-gray-200" />
							<IconButton icon={AiOutlinePlus} className="bg-gray-100 hover:bg-gray-200" />
						</div>
						<div className="flex space-x-5 items-center">
							<div className="bg-gray-100 px-2 py-1 rounded-md">{data.movie.rating}</div>
							<div className="bg-gray-100 px-2 py-1 rounded-md">
								{new Date(data.movie.released).toLocaleDateString('en-gb', {
									dateStyle: 'full',
								})}
							</div>
							<div className="bg-gray-100 px-2 py-1 rounded-md">
								{/* eslint-disable-next-line @typescript-eslint/no-unsafe-return */}
								{data.movie.genres.map(genre => genre.name).join(', ')}
							</div>
							<div className="bg-gray-100 px-2 py-1 rounded-md">{minutesToHours(data.movie.runtime)}</div>
							<IconButton icon={AiOutlineEdit} className="bg-gray-100 hover:bg-gray-200" />
						</div>
					</div>
					<div className="flex flex-col space-y-2 w-3/4">
						{/* title and year */}
						<h1 className="font-bold text-xl">
							{data.movie.title}{' '}
							<span className="font-normal">
								({new Date(data.movie.released).toLocaleDateString('en-gb', {year: 'numeric'})})
							</span>
						</h1>
						{/* tagline */}
						<span className="text-gray-500 text-sm">
							You can erase someone from your mind. Getting them out of your heart is another story.
						</span>
						{/* overview */}
						<p>{data.movie.overview}</p>
					</div>

					<div className="flex truncate space-x-5">
						{data.movie.actors.map(actor => (
							<div key={actor.role} className="bg-gray-100 rounded-md">
								<img
									className="w-32 h-48 rounded-t-md filter hover:brightness-75 transition-all"
									src={actor.person.thumbnail}
								/>
								<div className="p-2">
									<h2 className="font-bold text-sm">{actor.person.name}</h2>
									<h3 className="text-xs">{actor.role}</h3>
								</div>
							</div>
						))}
						<div className="grid place-items-center w-32 h-48 rounded-t-md filter hover:brightness-75 transition-all bg-gray-100 rounded-md">
							<Icon icon={AiFillEye} className="w-12 h-12 text-white" />
						</div>
					</div>
					<div className="flex flex-col space-y-5">
						<div className="flex items-center space-x-5 bg-gray-100 rounded-md p-5">
							{/* timestamp */}
							<p>10mins</p>
							{/* song name and artist */}
							<h1>Everybody's Got to Learn Sometime - Beck</h1>
						</div>
					</div>
					<div className="flex flex-col space-y-5 bg-gray-100 rounded-md p-5">
						<div className="flex space-x-2 items-center">
							<Avatar url="https://a.ltrbxd.com/avatar/upload/1/2/0/3/7/7/7/shard/avtr?k=ff62b2f12e" />
							<span>James Schaffrillas</span>
							<div>star rating</div>
						</div>
						<p>
							Wish I could erase this film from my mind just so I can watch it for the first time all over
							again
						</p>
					</div>
					<div className="flex flex-col space-y-5 bg-gray-100 rounded-md p-5">
						<div className="flex space-x-2 items-center">
							<Avatar url="https://a.ltrbxd.com/avatar/upload/1/2/0/3/7/7/7/shard/avtr?k=ff62b2f12e" />
							<span>James Schaffrillas</span>
							<div>star rating</div>
						</div>
						<p>
							Wish I could erase this film from my mind just so I can watch it for the first time all over
							again
						</p>
					</div>
				</div>
				{/* eslint-disable-next-line @typescript-eslint/no-empty-function */}
			</Layout>
		);
	}

	return null;
};

{
	/* <AddActor movieId={data.movie.id} isOpen={open} setIsOpen={setOpen} /> */
}

// <div className="flex space-x-5">
// 	{data?.movie?.actors.map(actor => (
// 		<div key={actor.person.id}>
// 			<InternalLink key={actor.person.id} href={`/person/${actor.person.id}`}>
// 				<Card size="small" src={actor.person.thumbnail} />
// 			</InternalLink>
// 			<p>{actor.person.name}</p>
// 			<p>{actor.role}</p>
// 		</div>
// 	))}
// 	<div
// 		className="grid place-items-center w-32 h-48 rounded-md p-2 bg-gray-500 cursor-pointer"
// 		onClick={() => {
// 			setOpen(true);
// 		}}
// 	>
// 		<FaPlus />
// 	</div>
// </div>
