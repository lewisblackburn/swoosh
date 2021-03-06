import {Card} from '@components/Card';
import {Icon} from '@components/Icon';
import {Loading} from '@components/Loading';
import {Poster} from '@components/Poster';
import {Layout} from '@modules/layouts/Layout';
import {
	SortOrder,
	useBooksQuery,
	useMoviesQuery,
	usePeopleQuery,
	useShowsQuery,
	useSongsQuery,
} from 'generated/graphql';
import Link from 'next/link';
import React from 'react';
import {AiOutlineArrowRight} from 'react-icons/ai';

export const HomePage: React.FC = () => {
	const {data: movies} = useMoviesQuery({
		fetchPolicy: 'no-cache', // Necessary to avoid caching issues with /movies page when using infinite scroll etc...
		variables: {
			orderBy: {
				createdAt: SortOrder.Asc, // Only for video
			},
			take: 5,
		},
	});

	const {data: shows} = useShowsQuery({
		fetchPolicy: 'no-cache',
		variables: {
			orderBy: {
				createdAt: SortOrder.Desc,
			},
			take: 5,
		},
	});

	const {data: books} = useBooksQuery({
		fetchPolicy: 'no-cache',
		variables: {
			orderBy: {
				createdAt: SortOrder.Desc,
			},
			take: 5,
		},
	});

	const {data: songs} = useSongsQuery({
		fetchPolicy: 'no-cache',
		variables: {
			orderBy: {
				createdAt: SortOrder.Desc,
			},
			take: 5,
		},
	});

	const {data: people} = usePeopleQuery({
		fetchPolicy: 'no-cache',
		variables: {
			orderBy: {
				createdAt: SortOrder.Desc,
			},
			take: 5,
		},
	});

	if (!movies?.movies || !shows?.shows || !books?.books || !songs?.songs || !people?.people) return <Loading />;

	return (
		<Layout>
			<section>
				<div className="container px-4 mx-auto">
					<div className="max-w-lg mx-auto mb-12 text-center">
						<span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl">
							Movies
						</span>
					</div>
					<div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-10">
						{/* Due to apollo caching it means that if 20 movies have been loaded from the path
						 /movies it will render them here but I only won't the first five, so instead of fetching with the
						  no-cache parameter which would be a wastful query I just render the first fiive from cache
						*/}
						{movies?.movies?.slice(0, 5).map(movie => (
							// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
							<Link key={movie.id} href={`/movie/${movie.id}` ?? 0}>
								<a>
									<Poster src={movie.poster} />
								</a>
							</Link>
						))}
						<Link href="/movies">
							<a>
								<Card>
									<Icon icon={AiOutlineArrowRight} className="w-6 h-6" />
								</Card>
							</a>
						</Link>
					</div>
				</div>
			</section>
			<section className="py-20">
				<div className="container px-4 mx-auto">
					<div className="max-w-lg mx-auto mb-12 text-center">
						<span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl">
							Television
						</span>
					</div>
					<div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-10">
						{shows?.shows?.slice(0, 5).map(show => (
							// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
							<Link key={show.id} href={`/show/${show.id}` ?? 0}>
								<a>
									<Poster src={show.poster} />
								</a>
							</Link>
						))}
						<Link href="/shows">
							<a className="w-full">
								<Card>
									<Icon icon={AiOutlineArrowRight} className="w-6 h-6" />
								</Card>
							</a>
						</Link>
					</div>
				</div>
			</section>
			<section className="py-20">
				<div className="container px-4 mx-auto">
					<div className="max-w-lg mx-auto mb-12 text-center">
						<span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl">
							Books
						</span>
					</div>
					<div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-10">
						{books?.books?.slice(0, 5).map(book => (
							// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
							<Link key={book.id} href={`/book/${book.id}` ?? 0}>
								<a>
									<Poster src={book.poster} />
								</a>
							</Link>
						))}
						<Link href="/books">
							<a className="w-full">
								<Card>
									<Icon icon={AiOutlineArrowRight} className="w-6 h-6" />
								</Card>
							</a>
						</Link>
					</div>
				</div>
			</section>
			<section className="py-20">
				<div className="container px-4 mx-auto">
					<div className="max-w-lg mx-auto mb-12 text-center">
						<span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl">
							Music
						</span>
					</div>
					<div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-10">
						{songs?.songs?.slice(0, 5).map(song => (
							// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
							<Link key={song.id} href={`/song/${song.id}` ?? 0}>
								<a>
									<Poster src={song.poster} />
								</a>
							</Link>
						))}
						<Link href="/songs">
							<a className="w-full">
								<Card>
									<Icon icon={AiOutlineArrowRight} className="w-6 h-6" />
								</Card>
							</a>
						</Link>
					</div>
				</div>
			</section>
			<section className="py-20">
				<div className="container px-4 mx-auto">
					<div className="max-w-lg mx-auto mb-12 text-center">
						<span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl">
							People
						</span>
					</div>
					<div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-10">
						{people?.people?.slice(0, 5).map(person => (
							// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
							<Link key={person.id} href={`/person/${person.id}` ?? 0}>
								<a>
									<Poster src={person.poster} />
								</a>
							</Link>
						))}
						<Link href="/people">
							<a className="grid place-items-center h-80 bg-gray-300 rounded filter hover:brightness-75 transition-all">
								<Card>
									<Icon icon={AiOutlineArrowRight} className="w-6 h-6" />
								</Card>
							</a>
						</Link>
					</div>
				</div>
			</section>
		</Layout>
	);
};
