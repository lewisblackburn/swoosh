import {BackdropDiv} from '@components/BackdropDiv';
import {Button} from '@components/Button';
import InputField from '@components/Form/InputField';
import {Textarea} from '@components/Form/Textarea';
import {IconButton} from '@components/IconButton';
import {Modal} from '@components/Modal/Modal';
import {PosterDiv} from '@components/PosterDiv';
import {Form, Formik, FormikHelpers} from 'formik';
import {
	ActorsInShowDocument,
	QueryMode,
	ShowDocument,
	ShowQuery,
	UploadType,
	useActorsInShowQuery,
	useCreateActorInShowMutation,
	useCreateSongInShowMutation,
	useDeleteActorInShowMutation,
	useDeleteSongInShowMutation,
	useGenresQuery,
	usePeopleQuery,
	useShowQuery,
	useSongsQuery,
	useUpdateGenreMutation,
	useUpdateShowMutation,
	useUploadBackdropMutation,
	useUploadPosterMutation,
} from 'generated/graphql';
import useDebounce from 'hooks/useDebounce';
import {useGetIntId} from 'hooks/useGetIntId';
import handleInputClick from 'lib/handleInputClick';
import {useRouter} from 'next/router';
import React, {useRef, useState} from 'react';
import {AiOutlineDelete, AiOutlinePlus} from 'react-icons/ai';
import {useVerifyLoggedIn} from '../auth/useVerifyLoggedIn';
import {Layout} from '../layouts/Layout';

interface TableProps {
	show: ShowQuery | undefined;
}

const GenreTable: React.FC<TableProps> = ({show}) => {
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

	const addGenreEvent = (genreId: number) => {
		updateGenre({
			variables: {
				data: {
					shows: {
						connect: [
							{
								id: show?.show?.id,
							},
						],
					},
				},
				where: {
					id: genreId,
				},
			},
			refetchQueries: [ShowDocument],
		});
	};

	const removeGenreEvent = (genreId: number) => {
		updateGenre({
			variables: {
				data: {
					shows: {
						disconnect: [
							{
								id: show?.show?.id,
							},
						],
					},
				},
				where: {
					id: genreId,
				},
			},
			refetchQueries: [ShowDocument],
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

							{show?.show?.genres.some(g => g.name === genre.name) ? (
								<IconButton icon={AiOutlineDelete} onClick={() => removeGenreEvent(genre.id)} />
							) : (
								<IconButton icon={AiOutlinePlus} onClick={() => addGenreEvent(genre.id)} />
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

const ActorTable: React.FC<TableProps> = ({show}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [role, setRole] = useState('');
	const [personId, setPersonId] = useState(-1);
	const [predicate, setPredicate] = useState('');
	const [predicateDebounced] = useDebounce(predicate, 500);

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

	const {data: actors} = useActorsInShowQuery({
		fetchPolicy: 'no-cache',
		variables: {
			showId: show?.show?.id ?? -1,
		},
	});

	const [addActorInShow] = useCreateActorInShowMutation();
	const [removeActorInShow] = useDeleteActorInShowMutation();

	const addActorEvent = (personId: number, role: string) => {
		addActorInShow({
			variables: {
				data: {
					show: {
						connect: {
							id: show?.show?.id,
						},
					},
					person: {
						connect: {
							id: personId,
						},
					},
					role,
				},
			},
			refetchQueries: [ShowDocument, ActorsInShowDocument],
		});
	};

	const removeActorEvent = (personId: number) => {
		removeActorInShow({
			variables: {
				where: {
					personId_showId: {
						showId: show?.show?.id ?? -1,
						personId,
					},
				},
			},
			refetchQueries: [ShowDocument, ActorsInShowDocument],
		});
	};

	return (
		<>
			<Modal isOpen={isOpen} setIsOpen={setIsOpen}>
				<input
					autoFocus
					className="w-full mb-4 p-4 text-sm placeholder-blueGray-400 leading-none bg-blueGray-50 outline-none rounded"
					placeholder="Search"
					type="text"
					value={role}
					onChange={e => setRole(e.currentTarget.value)}
				/>
				<div className="flex items-center justify-between">
					<Button variant="secondary" className="mt-4" onClick={() => setIsOpen(false)}>
						Cancel
					</Button>
					<Button
						className="mt-4"
						onClick={() => {
							addActorEvent(personId, role);
							setIsOpen(false);
							setRole('');
						}}
					>
						Submit
					</Button>
				</div>
			</Modal>
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

								{actors?.show?.actors.some(actor => actor.personId === person.id) ? (
									<IconButton
										icon={AiOutlineDelete}
										onClick={() => {
											removeActorEvent(person.id);
										}}
									/>
								) : (
									<IconButton
										icon={AiOutlinePlus}
										onClick={() => {
											setIsOpen(true);
											setPersonId(person.id);
										}}
									/>
								)}
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

const SongTable: React.FC<TableProps> = ({show}) => {
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

	const [addSongInShow] = useCreateSongInShowMutation();
	const [removeSongInShow] = useDeleteSongInShowMutation();

	const addSongEvent = (songId: number) => {
		addSongInShow({
			variables: {
				data: {
					show: {
						connect: {
							id: show?.show?.id ?? -1,
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
			refetchQueries: [ShowDocument],
		});
	};

	const removeSongEvent = (songId: number) => {
		removeSongInShow({
			variables: {
				where: {
					songId_showId: {
						showId: show?.show?.id ?? -1,
						songId,
					},
				},
			},
			refetchQueries: [ShowDocument],
		});
	};

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

							{show?.show?.soundtrack.some(s => s.song.title === song.title) ? (
								<IconButton icon={AiOutlineDelete} onClick={() => removeSongEvent(song.id)} />
							) : (
								<IconButton icon={AiOutlinePlus} onClick={() => addSongEvent(song.id)} />
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
	released: any;
	trailer: string;
}

export const EditPage: React.FC = () => {
	useVerifyLoggedIn();

	const showId = useGetIntId();
	const {data: show} = useShowQuery({
		fetchPolicy: 'no-cache',
		skip: showId === -1,
		variables: {
			showId,
		},
	});

	const router = useRouter();

	const [updateShow] = useUpdateShowMutation();

	const [uploadBackdrop] = useUploadBackdropMutation();
	const [uploadPoster] = useUploadPosterMutation();

	const [backdrop, setBackdrop] = useState();
	const [poster, setPoster] = useState();

	const backdropInput = useRef(null);
	const posterInput = useRef(null);

	const handleBackdropChange = (event: any) => setBackdrop(event.target.files[0]);
	const handlePosterChange = (event: any) => setPoster(event.target.files[0]);

	if (show?.show) {
		return (
			<Layout>
				<Formik
					initialValues={{
						title: show?.show?.title ?? '',
						tagline: show?.show?.tagline ?? '',
						overview: show?.show?.overview ?? '',
						rating: show?.show?.rating ?? '',
						released: new Date(show?.show?.released ?? 0).toISOString().split('T')[0] ?? 0,
						trailer: show?.show?.trailer ?? '',
					}}
					onSubmit={async (values: Values, {setSubmitting}: FormikHelpers<Values>) => {
						setSubmitting(true);
						await updateShow({
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
									released: {
										set: values.released,
									},
									trailer: {
										set: values.trailer,
									},
								},
								where: {
									id: show?.show?.id,
								},
							},
							refetchQueries: [ShowDocument],
						})
							.then(() => {
								if (backdrop) {
									uploadBackdrop({
										variables: {
											id: showId,
											file: backdrop,
											type: UploadType.Show,
										},
									});
								}

								if (poster) {
									uploadPoster({
										variables: {
											id: showId,
											file: poster,
											type: UploadType.Show,
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
									<PosterDiv
										src={show?.show?.poster}
										onClick={() => {
											handleInputClick(posterInput);
										}}
										onChange={handlePosterChange}
									>
										<input
											ref={posterInput}
											type="file"
											id="file"
											accept="images"
											style={{display: 'none'}}
										/>
									</PosterDiv>
									<BackdropDiv
										src={show?.show?.backdrop}
										onClick={() => {
											handleInputClick(backdropInput);
										}}
										onChange={handleBackdropChange}
									>
										<input
											ref={backdropInput}
											type="file"
											id="file"
											accept="images"
											style={{display: 'none'}}
										/>
									</BackdropDiv>
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
							<GenreTable show={show} />
							<ActorTable show={show} />
							<SongTable show={show} />
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
	}

	return null;
};
