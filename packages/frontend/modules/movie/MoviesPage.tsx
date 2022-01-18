import {Card} from '@components/Card/Card';
import {IconCard} from '@components/Card/IconCard';
import {InternalLink} from '@components/InternalLink';
import {useVerifyLoggedIn} from '@modules/auth/useVerifyLoggedIn';
import {Layout} from '@modules/layouts/Layout';
import {SortOrder, useMoviesQuery} from 'generated/graphql';
import React from 'react';
import {AiOutlinePlus} from 'react-icons/ai';

export const MoviesPage: React.FC = () => {
	useVerifyLoggedIn();

	const {data} = useMoviesQuery({
		variables: {
			orderBy: {
				createdAt: SortOrder.Desc,
			},
		},
	});
	console.log(data);

	return (
		<Layout>
			<div className='flex flex-wrap gap-5'>
				<InternalLink href='movies/create?next=/movies'>
					<IconCard icon={AiOutlinePlus} size='large' />
				</InternalLink>
				{data?.movies?.map(movie => (
					<div key={movie.id}>
						{/* eslint-disable-next-line @typescript-eslint/restrict-template-expressions */}
						<InternalLink href={`movie/${movie.id}`}>
							<Card src={movie.thumbnail} size='large' />
						</InternalLink>
					</div>
				))}
			</div>
		</Layout>
	);
};
