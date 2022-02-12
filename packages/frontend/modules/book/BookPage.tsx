import {Icon} from '@components/Icon';
import {IconButton} from '@components/IconButton';
import {Loading} from '@components/Loading';
import {ReviewBookModal} from '@components/Modal/ReviewBookModal';
import {notify} from '@components/Notify';
import {Poster} from '@components/Poster';
import {
	BookDocument,
	useBookQuery,
	useDeleteBookReviewMutation,
	useLikeBookMutation,
	useUnlikeBookMutation,
} from 'generated/graphql';
import {useGetIntId} from 'hooks/useGetIntId';
import Link from 'next/link';
import React, {useState} from 'react';
import {
	AiFillHeart,
	AiOutlineCheckCircle,
	AiOutlineDelete,
	AiOutlineEdit,
	AiOutlineHeart,
	AiOutlineHourglass,
	AiOutlineStar,
} from 'react-icons/ai';
import {useVerifyLoggedIn} from '../auth/useVerifyLoggedIn';
import {Layout} from '../layouts/Layout';

export const BookPage: React.FC = () => {
	useVerifyLoggedIn();

	const bookId: number = useGetIntId();
	const {data} = useBookQuery({
		skip: bookId === -1,
		variables: {
			bookId,
		},
	});

	const [likeBook] = useLikeBookMutation({
		variables: {
			data: {
				book: {
					connect: {
						id: bookId,
					},
				},
			},
		},
		refetchQueries: [BookDocument],
	});

	const [unlikeBook] = useUnlikeBookMutation({
		variables: {
			bookId,
		},
		refetchQueries: [BookDocument],
	});

	const [deleteBookReview, {loading: deleteBookReviewLoading}] = useDeleteBookReviewMutation({
		refetchQueries: [BookDocument],
	});

	const [isOpen, setIsOpen] = useState(false);

	if (!data?.book) return <Loading />;

	return (
		<>
			<ReviewBookModal isOpen={isOpen} setIsOpen={setIsOpen} bookId={bookId} />
			<Layout>
				<div className="container px-4 mx-auto">
					<div className="max-w-2xl mx-auto mb-6">
						<div className="flex flex-col items-center text-center mb-6">
							<h2 className="text-2xl md:text-4xl my-2 font-bold font-heading">{data?.book?.title}</h2>
							<div className="flex space-x-5">
								<IconButton
									icon={data?.book?.isLiked ? AiFillHeart : AiOutlineHeart}
									className={data?.book?.isLiked ? 'text-red-500' : ''}
									onClick={() => {
										likeBook()
											.then(() => {
												notify('success', 'mutation', 'Liked book');
											})
											.catch(() => {
												unlikeBook()
													.then(() => {
														notify('success', 'mutation', 'Unliked book');
													})
													.catch(() => {
														notify(
															'error',
															'mutation',
															'Failed to either like or unlike book'
														);
													});
											});
									}}
								/>
								<IconButton icon={AiOutlineStar} onClick={() => setIsOpen(prev => !prev)} />
								<Link href={`/book/edit/${bookId}`}>
									<a>
										<IconButton icon={AiOutlineEdit} />
									</a>
								</Link>
							</div>
						</div>
					</div>
					<div className="flex items-center justify-center max-w-5xl mx-auto mb-8">
						<Poster src={data?.book?.poster} />
					</div>
					<div className="max-w-2xl mx-auto mb-6">
						<div className="text-center">
							<span className="text-xs text-gray-500 font-semibold">
								{data?.book?.genres.map(genre => genre.name).join(' / ')}
							</span>
						</div>
					</div>
					<div className="text-center max-w-2xl mx-auto">
						<p className="mb-6 leading-loose text-blueGray-400">{data?.book?.description}</p>
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
										{data?.book?.aggregateBookReview._avg?.rating ?? 0}
									</span>
									<p className="text-xs sm:text-base text-blueGray-400">Avg. Rating</p>
								</div>
							</div>
							<div className="flex w-1/2 lg:w-auto py-4">
								<div className="flex justify-center items-center bg-blueGray-50 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
									<Icon icon={AiOutlineHourglass} className="w-6 h-6" />
								</div>
								<div className="sm:py-2 ml-2 sm:ml-6">
									<span className="sm:text-2xl font-bold font-heading">test</span>
									<p className="text-xs sm:text-base text-blueGray-400">idk yet</p>
								</div>
							</div>
							<div className="flex w-1/2 lg:w-auto py-4">
								<div className="flex justify-center items-center bg-blueGray-50 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
									<Icon icon={AiOutlineCheckCircle} className="w-6 h-6" />
								</div>
								<div className="sm:py-2 ml-2 sm:ml-6">
									<span className="sm:text-2xl font-bold font-heading">
										{new Date(data?.book?.released).toLocaleDateString('en-gb', {
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
										{data?.book?._count?.likes ?? 0}
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
								Authors
							</span>
							<p className="text-blueGray-400 leading-loose mt-2 ">
								This will only include major authors, not the extras i.e the producer, etc.
							</p>
						</div>
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-12">
							{data?.book?.authors.map(author => (
								<div key={author.person.id} className="flex flex-col items-center">
									<Poster src={author.person.poster} />
									<p className="mt-6 text-xl">{author.person.name}</p>
								</div>
							))}
						</div>
					</div>
					<div className="text-center">
						<a
							className="inline-block py-4 px-8 text-xs text-white font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded"
							href="#"
						>
							{data?.book?.authors.length === 0 ? 'No authors' : 'Show more'}
						</a>
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
							{data?.book?.reviews.map(review => (
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
												loading={deleteBookReviewLoading}
												onClick={() => {
													deleteBookReview({
														variables: {
															bookId,
														},
													})
														.then(() => {
															notify('success', 'delete', 'Review deleted');
														})
														.catch(() => {
															notify('error', 'delete', 'Error deleting review');
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
								{data?.book?.reviews.length === 0 ? 'No reviews' : 'Show more'}
							</a>
						</div>
					</div>
				</section>
			</Layout>
		</>
	);
};
