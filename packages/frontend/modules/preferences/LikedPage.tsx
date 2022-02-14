import {Button} from '@components/Button';
import {PreferencesLayout} from '@modules/layouts/PreferenceLayout';
import {useLikedBooksQuery, useLikedMoviesQuery, useLikedShowsQuery, useLikedSongsQuery} from 'generated/graphql';
import Link from 'next/link';
import React from 'react';

export const LikedPage: React.FC = () => {
	const {data: movies} = useLikedMoviesQuery({
		fetchPolicy: 'no-cache',
	});

	const {data: shows} = useLikedShowsQuery({
		fetchPolicy: 'no-cache',
	});
	const {data: songs} = useLikedSongsQuery({
		fetchPolicy: 'no-cache',
	});
	const {data: books} = useLikedBooksQuery({
		fetchPolicy: 'no-cache',
	});
	return (
		<PreferencesLayout>
			<div className="flex flex-col space-y-10 w-full">
				<div className="flex flex-col space-y-2">
					{movies?.likedMovies?.map(movie => (
						// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
						<Link key={movie.movie.id} href={`/movie/${movie.movie.id}`}>
							<a>
								<Button variant="tertiary" className="flex w-full">
									{movie.movie.title}
								</Button>
							</a>
						</Link>
					))}
				</div>

				<div className="flex flex-col space-y-2">
					{shows?.likedShows?.map(show => (
						// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
						<Link key={show.show.id} href={`/show/${show.show.id}`}>
							<a>
								<Button variant="tertiary" className="flex w-full">
									{show.show.title}
								</Button>
							</a>
						</Link>
					))}
				</div>

				<div className="flex flex-col space-y-2">
					{songs?.likedSongs?.map(song => (
						// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
						<Link key={song.song.id} href={`/song/${song.song.id}`}>
							<a>
								<Button variant="tertiary" className="flex w-full">
									{song.song.title}
								</Button>
							</a>
						</Link>
					))}
				</div>

				<div className="flex flex-col space-y-2">
					{books?.likedBooks?.map(book => (
						// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
						<Link key={book.book.id} href={`/book/${book.book.id}`}>
							<a>
								<Button variant="tertiary" className="flex w-full">
									{book.book.title}
								</Button>
							</a>
						</Link>
					))}
				</div>
			</div>
		</PreferencesLayout>
	);
};
