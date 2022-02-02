import {Button} from '@components/Button';
import InputField from '@components/Form/InputField';
import {Textarea} from '@components/Form/Textarea';
import {Icon} from '@components/Icon';
import {IconButton} from '@components/IconButton';
import {Field, Form, Formik, FormikHelpers, move} from 'formik';
import {
	MovieDocument,
	MovieQuery,
	MoviesDocument,
	QueryMode,
	UploadType,
	useActorsInMovieQuery,
	useCreateActorInMovieMutation,
	useCreateSongInMovieMutation,
	useDeleteActorInMovieMutation,
	useDeleteSongInMovieMutation,
	useGenresQuery,
	useMovieQuery,
	usePeopleQuery,
	useSongsQuery,
	useUpdateGenreMutation,
	useUpdateMovieMutation,
	useUploadBackdropMutation,
	useUploadPosterMutation,
} from 'generated/graphql';
import useDebounce from 'hooks/useDebounce';
import {useGetIntId} from 'hooks/useGetIntId';
import {Router, useRouter} from 'next/router';
import movies from 'pages/movies';
import React, {useRef, useState} from 'react';
import {AiOutlineDelete, AiOutlinePlus} from 'react-icons/ai';
import {useVerifyLoggedIn} from '../auth/useVerifyLoggedIn';
import {Layout} from '../layouts/Layout';

interface TableProps {
	movie: MovieQuery | undefined;
}

const GenreTable: React.FC<TableProps> = ({movie}) => {
	const [genrePredicate, setGenrePrediate] = useState('');
	const [genrePredicateDebounced] = useDebounce(genrePredicate, 500);

	const {data: genres} = useGenresQuery({
		variables: {
			where: {
				name: {
					startsWith: genrePredicateDebounced,
					mode: QueryMode.Insensitive,
				},
			},
		},
	});

	const [updateGenre] = useUpdateGenreMutation();

	const addGenreEvent = (genreId: number) =>
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		updateGenre({
			variables: {
				data: {
					movies: {
						connect: [
							{
								id: movie?.movie?.id,
							},
						],
					},
				},
				where: {
					id: genreId,
				},
			},
			refetchQueries: [MovieDocument],
		});

	const removeGenreEvent = (genreId: number) => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		updateGenre({
			variables: {
				data: {
					movies: {
						disconnect: [
							{
								id: movie?.movie?.id,
							},
						],
					},
				},
				where: {
					id: genreId,
				},
			},
			refetchQueries: [MovieDocument],
		});
	};

	return (
		<section className="py-8">
			<div className="container px-4 mx-auto">
				<div className="flex flex-wrap items-center mb-6">
					<h3 className="text-xl font-bold">Genres</h3>
					<div className="w-full md:w-auto my-6 md:my-0 flex items-center ml-auto  bg-white border rounded">
						<input
							className="pl-2 py-3 text-sm focus:outline-none"
							type="text"
							placeholder="Type to search..."
							// eslint-disable-next-line @typescript-eslint/no-unsafe-return
							onChange={e => setGenrePrediate(e.target.value)}
						/>
					</div>
				</div>
				<div className="flex flex-col space-y-5">
					{genres?.genres.map(genre => (
						<div
							key={genre.name}
							className="flex items-center justify-between pl-4 pr-6 py-4 bg-white shadow rounded"
						>
							<h1>{genre.name}</h1>

							{movie?.movie?.genres.some(g => g.name === genre.name) ? (
								<IconButton
									icon={AiOutlineDelete}
									// eslint-disable-next-line @typescript-eslint/no-unsafe-return
									onClick={() => removeGenreEvent(genre.id)}
								/>
							) : (
								<IconButton
									icon={AiOutlinePlus}
									// eslint-disable-next-line @typescript-eslint/no-unsafe-return
									onClick={() => addGenreEvent(genre.id)}
								/>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

const ActorTable: React.FC<TableProps> = ({movie}) => {
	const [predicate, setPredicate] = useState('');
	const [predicateDebounced] = useDebounce(predicate, 500);

	// WARN: I need to figure out a way to see if actor is already in the movie

	const {data} = usePeopleQuery({
		fetchPolicy: 'no-cache',
		variables: {
			where: {
				name: {
					startsWith: predicateDebounced,
					mode: QueryMode.Insensitive,
				},
			},
			take: 20,
		},
	});

	// This is only needed for the ActorTable as the GenreTable will never have a movie over the limited amount of query take requests (20) unlike actors might
	const {data: actors} = useActorsInMovieQuery({
		fetchPolicy: 'no-cache',
		variables: {
			movieId: movie?.movie?.id ?? -1,
		},
	});

	const [addActorInMovie] = useCreateActorInMovieMutation();
	const [removeActorInMovie] = useDeleteActorInMovieMutation();

	const addActorEvent = (personId: number) =>
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		addActorInMovie({
			variables: {
				data: {
					movie: {
						connect: {
							id: movie?.movie?.id,
						},
					},
					person: {
						connect: {
							id: personId,
						},
					},
					role: 'Temp',
				},
			},
			refetchQueries: [MovieDocument],
		});

	const removeActorEvent = (personId: number) =>
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		removeActorInMovie({
			variables: {
				where: {
					personId_movieId: {
						movieId: movie?.movie?.id ?? 0,
						personId,
					},
				},
			},
			refetchQueries: [MovieDocument],
		});

	return (
		<section className="py-8">
			<div className="container px-4 mx-auto">
				<div className="flex flex-wrap items-center mb-6">
					<h3 className="text-xl font-bold">Actors</h3>
					<div className="w-full md:w-auto my-6 md:my-0 flex items-center ml-auto  bg-white border rounded">
						<input
							className="pl-2 py-3 text-sm focus:outline-none"
							type="text"
							placeholder="Type to search..."
							onChange={e => setPredicate(e.target.value)}
						/>
					</div>
				</div>
				<div className="flex flex-col space-y-5">
					{data?.people?.map(person => (
						<div
							key={person.id}
							className="flex items-center justify-between pl-4 pr-6 py-4 bg-white shadow rounded"
						>
							<h1>{person.name}</h1>

							{actors?.movie?.actors.some(actor => actor.personId === person.id) ? (
								<IconButton
									icon={AiOutlineDelete}
									// eslint-disable-next-line @typescript-eslint/no-unsafe-return
									onClick={() => removeActorEvent(person.id)}
								/>
							) : (
								<IconButton
									icon={AiOutlinePlus}
									// eslint-disable-next-line @typescript-eslint/no-unsafe-return
									onClick={() => addActorEvent(person.id)}
								/>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

const SongTable: React.FC<TableProps> = ({movie}) => {
	const [predicate, setPredicate] = useState('');
	const [predicateDebounced] = useDebounce(predicate, 500);

	const {data} = useSongsQuery({
		fetchPolicy: 'no-cache',
		variables: {
			where: {
				title: {
					startsWith: predicateDebounced,
					mode: QueryMode.Insensitive,
				},
			},
			take: 5,
		},
	});

	const [addSongInMovie] = useCreateSongInMovieMutation();
	const [removeSongInMovie] = useDeleteSongInMovieMutation();

	const addSongEvent = (songId: number) =>
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		addSongInMovie({
			variables: {
				data: {
					movie: {
						connect: {
							id: movie?.movie?.id ?? 0,
						},
					},
					song: {
						connect: {
							id: songId,
						},
					},
					description: 'Temp',
					timestamp: new Date().toISOString(),
				},
			},
			refetchQueries: [MovieDocument],
		});

	const removeSongEvent = (songId: number) =>
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		removeSongInMovie({
			variables: {
				where: {
					songId_movieId: {
						movieId: movie?.movie?.id ?? 0,
						songId,
					},
				},
			},
			refetchQueries: [MovieDocument],
		});

	return (
		<section className="py-8">
			<div className="container px-4 mx-auto">
				<div className="flex flex-wrap items-center mb-6">
					<h3 className="text-xl font-bold">Songs</h3>
					<div className="w-full md:w-auto my-6 md:my-0 flex items-center ml-auto  bg-white border rounded">
						<input
							className="pl-2 py-3 text-sm focus:outline-none"
							type="text"
							placeholder="Type to search..."
							onChange={e => setPredicate(e.target.value)}
						/>
					</div>
				</div>
				<div className="flex flex-col space-y-5">
					{data?.songs?.map(song => (
						<div
							key={song.title}
							className="flex items-center justify-between pl-4 pr-6 py-4 bg-white shadow rounded"
						>
							<h1>{song.title}</h1>

							{movie?.movie?.soundtrack.some(s => s.song.title === song.title) ? (
								<IconButton
									icon={AiOutlineDelete}
									// eslint-disable-next-line @typescript-eslint/no-unsafe-return
									onClick={() => removeSongEvent(song.id)}
								/>
							) : (
								<IconButton
									icon={AiOutlinePlus}
									// eslint-disable-next-line @typescript-eslint/no-unsafe-return
									onClick={() => addSongEvent(song.id)}
								/>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

interface Values {
	title: string;
	tagline: string;
	overview: string;
	rating: string;
	runtime: number;
	released: any;
	trailer: string;
}

export const EditPage: React.FC = () => {
	useVerifyLoggedIn();

	const movieId = useGetIntId();
	const {data: movie} = useMovieQuery({
		fetchPolicy: 'no-cache',
		skip: movieId === -1,
		variables: {
			movieId,
		},
	});

	// THE ACTOR TABLE IS STILL BROKE
	// fetchPolicy: 'no-cache', did not work

	const router = useRouter();

	const [updateMovie] = useUpdateMovieMutation();

	const [uploadBackdrop] = useUploadBackdropMutation();
	const [uploadPoster] = useUploadPosterMutation();

	const [backdrop, setBackdrop] = useState();
	const [poster, setPoster] = useState();

	const backdropInput = useRef(null);
	const posterInput = useRef(null);

	const handleBackdropChange = (event: any) => setBackdrop(event.target.files[0]);
	const handlePosterChange = (event: any) => setPoster(event.target.files[0]);

	return (
		<Layout>
			<Formik
				initialValues={{
					title: movie?.movie?.title ?? '',
					tagline: movie?.movie?.tagline ?? '',
					overview: movie?.movie?.overview ?? '',
					rating: movie?.movie?.rating ?? '',
					runtime: movie?.movie?.runtime ?? 0,
					released: new Date(movie?.movie?.released ?? 0).toISOString().split('T')[0] ?? 0,
					trailer: movie?.movie?.trailer ?? '',
				}}
				onSubmit={async (values: Values, {setSubmitting}: FormikHelpers<Values>) => {
					setSubmitting(true);
					await updateMovie({
						variables: {
							data: {
								title: {
									set: values.title,
								},
								tagline: {
									set: values.tagline,
								},
								overview: {
									set: values.overview,
								},
								rating: {
									set: values.rating,
								},
								runtime: {
									set: parseFloat(values.runtime.toString()),
								},
								released: {
									set: values.released,
								},
								trailer: {
									set: values.trailer,
								},
							},
							where: {
								id: movie?.movie?.id,
							},
						},
						refetchQueries: [MovieDocument],
					})
						.then(() => {
							if (backdrop) {
								uploadBackdrop({
									variables: {
										id: movieId,
										file: backdrop,
										type: UploadType.Movie,
									},
								});
							}

							if (poster) {
								uploadPoster({
									variables: {
										id: movieId,
										file: poster,
										type: UploadType.Movie,
									},
								});
							}
						})
						.then(() => setSubmitting(false))
						.then(async () => router.back());
				}}
			>
				{({isSubmitting}) => (
					<Form>
						<div className="container px-4 mx-auto">
							<div className="max-w-2xl mx-auto mb-6">
								<div className="flex flex-col items-center text-center mb-6">
									<InputField type="text" name="title" />
								</div>
							</div>
							<div className="flex space-x-5 max-w-5xl mx-auto mb-8">
								<div
									className="grid place-items-center cursor-pointer h-80 w-80 bg-blueGray-100/40 hover:bg-blueGray-100 bg-center bg-cover transofrm transition-all rounded"
									// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
									style={{backgroundImage: `url(${movie?.movie?.poster})`}}
									// eslint-disable-next-line @typescript-eslint/no-unsafe-return
									onClick={() => posterInput?.current?.click()}
									onChange={handlePosterChange}
								>
									<input
										ref={posterInput}
										type="file"
										id="file"
										accept="images"
										style={{display: 'none'}}
									/>
									<Icon icon={AiOutlinePlus} />
								</div>
								<div
									className="grid place-items-center cursor-pointer h-80 w-full bg-blueGray-100/40 hover:bg-blueGray-100 bg-center bg-cover transofrm transition-all rounded"
									// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
									style={{backgroundImage: `url(${movie?.movie?.backdrop})`}}
									// eslint-disable-next-line @typescript-eslint/no-unsafe-return
									onClick={() => backdropInput?.current?.click()}
									onChange={handleBackdropChange}
								>
									<input
										ref={backdropInput}
										type="file"
										id="file"
										accept="images"
										style={{display: 'none'}}
									/>
									<Icon icon={AiOutlinePlus} />
								</div>
							</div>
							<div className="max-w-2xl mx-auto">
								<InputField type="text" name="tagline" />
								<Textarea name="overview" placeholder="overview" />
								<InputField type="text" name="rating" />
								<InputField type="text" name="runtime" />
								<InputField type="date" name="released" />
								<InputField type="text" name="trailer" />
							</div>
						</div>
						<GenreTable movie={movie} />
						<ActorTable movie={movie} />
						<SongTable movie={movie} />
						<section className="py-20">
							<div className="container px-4 mx-auto text-center">
								<div className="flex space-x-5 justify-center">
									<Button type="submit">{isSubmitting ? 'Submitting...' : 'Save changes'}</Button>
									<Button variant="secondary" onClick={() => history.go(-1)}>
										Cancel
									</Button>
								</div>
							</div>
						</section>
					</Form>
				)}
			</Formik>
		</Layout>
	);
};
