import {InternalLink} from '@components';
import {SortOrder, useMoviesQuery, usePeopleQuery} from 'generated/graphql';
import React from 'react';
import {useVerifyLoggedIn} from '../auth/useVerifyLoggedIn';
import {Layout} from '../layouts/Layout';

export const PeoplePage: React.FC = () => {
	useVerifyLoggedIn();

	const {data} = usePeopleQuery({
		variables: {
			orderBy: {
				createdAt: SortOrder.Desc,
			},
		},
	});

	console.log(data);

	return (
		<Layout>
			<div className="flex flex-wrap justify-center">
				{data?.people?.map(person => {
					return (
						<div key={person.id}>
							<div className="p-5">
								<InternalLink href={`person/${person.id}`}>
									<img src={person.thumbnail} className="w-64 h-96" />
								</InternalLink>
							</div>
						</div>
					);
				})}
			</div>
		</Layout>
	);
};
