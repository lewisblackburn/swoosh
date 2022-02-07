import {Backdrop} from '@components/Backdrop';
import {Icon} from '@components/Icon';
import {IconButton} from '@components/IconButton';
import {ReviewShowModal} from '@components/Modal/ReviewShowModal';
import {Poster} from '@components/Poster';
import {
	ShowDocument,
	useDeleteShowReviewMutation,
	useLikeShowMutation,
	useShowQuery,
	useUnlikeShowMutation,
} from 'generated/graphql';
import {useGetIntId} from 'hooks/useGetIntId';
import {floatToTime} from 'lib/floatToTime';
import Link from 'next/link';
import React, {useState} from 'react';
import {
	AiFillHeart,
	AiOutlineCheckCircle,
	AiOutlineDelete,
	AiOutlineEdit,
	AiOutlineHeart,
	AiOutlineHourglass,
	AiOutlinePlus,
	AiOutlineStar,
} from 'react-icons/ai';
import {useVerifyLoggedIn} from '../auth/useVerifyLoggedIn';
import {Layout} from '../layouts/Layout';

export const ShowPage: React.FC = () => {
	useVerifyLoggedIn();

	const showId: number = useGetIntId();
	const {data} = useShowQuery({
		skip: showId === -1,
		variables: {
			showId,
		},
	});

	const [likeShow] = useLikeShowMutation({
		variables: {
			data: {
				show: {
					connect: {
						id: showId,
					},
				},
			},
		},
		refetchQueries: [ShowDocument],
	});

	const [unlikeShow] = useUnlikeShowMutation({
		variables: {
			showId,
		},
		refetchQueries: [ShowDocument],
	});

	const [deleteShowReview, {loading: deleteShowReviewLoading}] = useDeleteShowReviewMutation({
		refetchQueries: [ShowDocument],
	});

	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<ReviewShowModal isOpen={isOpen} setIsOpen={setIsOpen} showId={showId} />
			<Layout>
				<div className="container px-4 mx-auto">
					<div className="max-w-2xl mx-auto mb-6">
						<div className="flex flex-col items-center text-center mb-6">
							<h2 className="text-2xl md:text-4xl my-2 font-bold font-heading">{data?.show?.title}</h2>
							<div className="flex space-x-5">
								<IconButton icon={AiOutlinePlus} />
								<IconButton
									icon={data?.show?.isLiked ? AiFillHeart : AiOutlineHeart}
									className={data?.show?.isLiked ? 'text-red-500' : ''}
									onClick={() => {
										likeShow().catch(() => {
											unlikeShow();
										});
									}}
								/>
								<IconButton icon={AiOutlineStar} onClick={() => setIsOpen(prev => !prev)} />
								<Link href={`/show/edit/${showId}`}>
									<a>
										<IconButton icon={AiOutlineEdit} />
									</a>
								</Link>
							</div>
						</div>
					</div>
					<div className="flex max-w-5xl mx-auto mb-8">
						<Backdrop src={data?.show?.backdrop} />
					</div>
					<div className="max-w-2xl mx-auto mb-6">
						<div className="text-center">
							<span className="text-xs text-gray-500 font-semibold">
								{data?.show?.genres.map(genre => genre.name).join(' / ')}
							</span>
						</div>
					</div>
					<div className="max-w-2xl mx-auto">
						<p className="mb-6 leading-loose text-blueGray-400">{data?.show?.tagline}</p>
						<p className="mb-6 leading-loose text-blueGray-400">{data?.show?.overview}</p>
					</div>
				</div>
				<section className="py-8">
					<div className="container px-4 mx-auto">
						<div className="flex flex-wrap justify-between">
							<div className="flex w-1/2 lg:w-auto py-4">
								<div className="flex justify-center items-center bg-blueGray-50 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
									<Icon icon={AiOutlineStar} className="w-6 h-6" />
								</div>
								<div className="sm:py-2 ml-2 sm:ml-6">
									<span className="sm:text-2xl font-bold font-heading">
										{data?.show?.aggregateShowReview._avg?.rating ?? 0}
									</span>
									<p className="text-xs sm:text-base text-blueGray-400">Avg. Rating</p>
								</div>
							</div>
							<div className="flex w-1/2 lg:w-auto py-4">
								<div className="flex justify-center items-center bg-blueGray-50 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
									<Icon icon={AiOutlineHourglass} className="w-6 h-6" />
								</div>
								<div className="sm:py-2 ml-2 sm:ml-6">
									<span className="sm:text-2xl font-bold font-heading">
										{floatToTime(data?.show?.runtime ?? 0)}
									</span>
									<p className="text-xs sm:text-base text-blueGray-400">Runtime</p>
								</div>
							</div>
							<div className="flex w-1/2 lg:w-auto py-4">
								<div className="flex justify-center items-center bg-blueGray-50 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
									<Icon icon={AiOutlineCheckCircle} className="w-6 h-6" />
								</div>
								<div className="sm:py-2 ml-2 sm:ml-6">
									<span className="sm:text-2xl font-bold font-heading">
										{new Date(data?.show?.released).toLocaleDateString('en-gb', {
											year: 'numeric',
										}) ?? 0}
									</span>
									<p className="text-xs sm:text-base text-blueGray-400">Released</p>
								</div>
							</div>
							<div className="flex w-1/2 lg:w-auto py-4">
								<div className="flex justify-center items-center bg-blueGray-50 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
									<Icon icon={AiOutlineHeart} className="w-6 h-6" />
								</div>
								<div className="sm:py-2 ml-2 sm:ml-6">
									<span className="sm:text-2xl font-bold font-heading">
										{data?.show?._count?.likes ?? 0}
									</span>
									<p className="text-xs sm:text-base text-blueGray-400">Likes</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="py-20">
					<div className="container px-4 mx-auto text-center">
						<div className="max-w-lg mx-auto mb-12">
							<span className="inline-block py-1 px-3 mb-4 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl">
								The Cast
							</span>
							<p className="text-blueGray-400 leading-loose mt-2 ">
								This will only include the major cast, not the extras i.e the crew, etc.
							</p>
						</div>
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-12">
							{data?.show?.actors.map(actor => (
								<div key={actor.person.id} className="flex flex-col items-center">
									<Poster src={actor.person.poster} />
									<p className="mt-6 text-xl">{actor.person.name}</p>
									<p className="mt-2 mb-4 text-blue-600">{actor.role}</p>
								</div>
							))}
						</div>
					</div>
					<div className="text-center">
						<a
							className="inline-block py-4 px-8 text-xs text-white font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded"
							href="#"
						>
							{data?.show?.actors.length === 0 ? 'No actors' : 'Show more'}
						</a>
					</div>
				</section>
				<section className="py-20">
					<div className="container px-4 mx-auto">
						<table className="w-full bg-white rounded shadow">
							<thead>
								<tr className="text-left text-xs">
									<th className="pl-6 py-4 font-normal">Song</th>
									<th className="px-4 py-4 font-normal">Timestamp</th>
									<th className="px-4 py-4 font-normal">Description</th>
								</tr>
							</thead>
							<tbody>
								{data?.show?.soundtrack.length === 0 && (
									<tr className="border-t border-blueGray-100">
										<td className="flex px-6 py-4 text-xs">No songs found...</td>
									</tr>
								)}
								{data?.show?.soundtrack.map((song, index) => (
									<tr key={song.song.title} className="border-t border-blueGray-100">
										<td className="flex px-6 py-4 text-xs">
											<img className="w-8" src={song.song.poster} />
											<div className="pl-4">
												<p className="font-semibold">{song.song.title}</p>
												<a className="text-blueGray-400" href="#">
													{song?.song?.artists.map(artist => artist.name).join(', ')}
												</a>
											</div>
										</td>
										<td className="px-4 py-2 text-xs font-semibold">
											{song.song.songInShow[index].timestamp}
										</td>
										<td className="px-4 py-2 text-xs font-semibold">
											{song.song.songInShow[index].description}
										</td>
										<td className="px-4 py-2 text-xs font-semibold">{song.song.description}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</section>
				<section className="py-20">
					<div className="container px-4 mx-auto">
						<div className="max-w-lg mx-auto mb-12 text-center">
							<img className="mx-auto" src="/quote.svg" alt="" />
							<h2 className="my-2 text-3xl md:text-4xl font-bold font-heading">Reviews</h2>
							<p className="text-blueGray-400 leading-loose">
								This will only include the first eight most recent reviews.
							</p>
						</div>
						<div className="flex flex-wrap max-w-5xl mx-auto mb-6">
							{data?.show?.reviews.map(review => (
								<div key={review.user.username} className="w-full px-3 mb-6">
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
											<IconButton
												icon={AiOutlineDelete}
												loading={deleteShowReviewLoading}
												onClick={() => {
													deleteShowReview({
														variables: {
															showId,
														},
													});
												}}
											/>
										</div>
										<p className="leading-loose text-blueGray-400">{review.review}</p>
									</div>
								</div>
							))}
						</div>
						<div className="text-center">
							<a
								className="inline-block py-4 px-8 text-xs text-white font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded"
								href="#"
							>
								{data?.show?.reviews.length === 0 ? 'No reviews' : 'Show more'}
							</a>
						</div>
					</div>
				</section>
			</Layout>
		</>
	);
};
