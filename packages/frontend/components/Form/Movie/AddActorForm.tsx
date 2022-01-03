import {Button} from '@components/Button';
import {Modal} from '@components/Modal';
import {Dialog} from '@headlessui/react';
import {Career, MovieDocument, QueryMode, useAddActorMutation, usePeopleLazyQuery} from 'generated/graphql';
import useDebounce from 'hooks/useDebounce';
import {useRouter} from 'next/router';
import React, {useEffect, useState} from 'react';

interface AddActorProps {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	movieId: number;
}

export const AddActor: React.FC<AddActorProps> = ({movieId, ...props}) => {
	const router = useRouter();
	const [search, setSearch] = useState('');
	const debouncedSearch: string = useDebounce<string>(search, 500);

	const [fetchPeople, {data}] = usePeopleLazyQuery({
		ssr: false,
		fetchPolicy: 'no-cache', // So the cache doesn't get overidden
		variables: {
			where: {
				career: {
					has: Career.Actor,
				},
				name: {
					contains: debouncedSearch,
					mode: QueryMode.Insensitive,
				},
			},
			take: 5,
		},
	});

	const [actorInMovie, setActorInMovie] = useState({
		movieId,
		personId: 0,
		role: '',
	});
	const [actorInMovieIsOpen, setActorInMovieIsOpen] = useState(false);
	const [addActor] = useAddActorMutation({
		refetchQueries: [MovieDocument],
	});

	useEffect(() => {
		// Only refetch if modal is open
		if (props.isOpen && debouncedSearch !== '') {
			fetchPeople();
		}
	}, [props.isOpen, debouncedSearch, fetchPeople]);

	return (
		<>
			<Modal {...props}>
				<Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
					Actors
				</Dialog.Title>
				<div className="mt-2">
					<p className="text-sm text-gray-500">If you can't find the person, create one!</p>
				</div>

				<input
					type="text"
					placeholder="search..."
					className="bg-gray-100 rounded-md p-1 my-4 w-full"
					value={search}
					onChange={(e: any) => setSearch(e.target.value)}
				/>

				<div className="flex flex-col space-y-5">
					{data?.people?.map(person => (
						<div
							key={person.id}
							className="flex items-center space-x-2 rounded-lg hover:bg-gray-100 p-2"
							onClick={() => {
								setActorInMovie({
									...actorInMovie,
									personId: person.id,
								});
								props.setIsOpen(false);
								setActorInMovieIsOpen(true);
							}}
						>
							<img src={person.thumbnail} alt="thumbnail" className="w-16 h-16 rounded-lg" />
							<p>{person.name}</p>
						</div>
					))}
					{data?.people?.length === 0 && (
						<Button onClick={async () => router.push(`/person/create?next=/movie/${movieId}`)}>Create Person</Button>
					)}
				</div>

				<div className="mt-4">
					<Button onClick={() => props.setIsOpen(false)}>No Thanks!</Button>
				</div>
			</Modal>

			<Modal isOpen={actorInMovieIsOpen} setIsOpen={setActorInMovieIsOpen}>
				<Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
					Add Actor
				</Dialog.Title>

				<input
					type="text"
					placeholder="role"
					className="bg-gray-100 rounded-md p-1 mt-4 w-full"
					onChange={(e: any) =>
						setActorInMovie({
							...actorInMovie,
							role: e.target.value,
						})
					}
				/>

				<div className="flex justify-between mt-4">
					<Button onClick={() => setActorInMovieIsOpen(false)}>No Thanks!</Button>
					<Button
						onClick={() => {
							addActor({
								variables: actorInMovie,
							});
							setActorInMovieIsOpen(false);
						}}
					>
						Add!
					</Button>
				</div>
			</Modal>
		</>
	);
};
