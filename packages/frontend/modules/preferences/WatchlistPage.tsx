import {Button} from '@components/Button';
import {PreferencesLayout} from '@modules/layouts/PreferenceLayout';
import {useWatchlistQuery} from 'generated/graphql';
import Link from 'next/link';
import React from 'react';

export const WatchlistPage: React.FC = () => {
	const {data: watchlist} = useWatchlistQuery({
		fetchPolicy: 'no-cache',
	});

	return (
		<PreferencesLayout>
			<div className="flex flex-col space-y-2 w-full">
				{watchlist?.watchlist?.movies.map(movie => (
					// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
					<Link key={movie.title} href={`/movie/${movie.id}`}>
						<a>
							<Button variant="tertiary" className="flex w-full">
								{movie.title}
							</Button>
						</a>
					</Link>
				))}
				{watchlist?.watchlist?.shows.map(show => (
					// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
					<Link key={show.title} href={`/show/${show.id}`}>
						<a>
							<Button variant="tertiary" className="flex w-full">
								{show.title}
							</Button>
						</a>
					</Link>
				))}
			</div>
		</PreferencesLayout>
	);
};
