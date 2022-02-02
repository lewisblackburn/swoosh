import {Icon} from '@components/Icon';
import {Layout} from '@modules/layouts/Layout';
import {SortOrder, useMoviesQuery} from 'generated/graphql';
import Link from 'next/link';
import React from 'react';
import {AiOutlineArrowRight} from 'react-icons/ai';

export const HomePage: React.FC = () => {
	const {data: movies} = useMoviesQuery({
		variables: {
			orderBy: {
				createdAt: SortOrder.Desc,
			},
			take: 5,
		},
	});

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
						{movies?.movies?.map(movie => (
							// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
							<Link key={movie.id} href={`/movie/${movie.id}` ?? 0}>
								<a>
									<img
										className="h-80 object-cover rounded filter hover:brightness-75 transition-all"
										src={movie.poster}
										alt="poster"
									/>
								</a>
							</Link>
						))}
						<Link href="/movies">
							<a className="w-full">
								<div className="grid place-items-center h-80 bg-gray-300 rounded filter hover:brightness-75 transition-all">
									<Icon icon={AiOutlineArrowRight} className="w-6 h-6" />
								</div>
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
						{movies?.movies?.map(movie => (
							// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
							<Link key={movie.id} href={`/movie/${movie.id}` ?? 0}>
								<a>
									<img className="h-80 object-cover rounded" src={movie.poster} alt="poster" />
								</a>
							</Link>
						))}
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
						{movies?.movies?.map(movie => (
							// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
							<Link key={movie.id} href={`/movie/${movie.id}` ?? 0}>
								<a>
									<img className="h-80 object-cover rounded" src={movie.poster} alt="poster" />
								</a>
							</Link>
						))}
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
						{movies?.movies?.map(movie => (
							// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
							<Link key={movie.id} href={`/movie/${movie.id}` ?? 0}>
								<a>
									<img className="h-80 object-cover rounded" src={movie.poster} alt="poster" />
								</a>
							</Link>
						))}
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
						{movies?.movies?.map(movie => (
							// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
							<Link key={movie.id} href={`/movie/${movie.id}` ?? 0}>
								<a>
									<img className="h-80 object-cover rounded" src={movie.poster} alt="poster" />
								</a>
							</Link>
						))}
					</div>
				</div>
			</section>
		</Layout>
	);
};
