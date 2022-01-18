import {InternalLink} from '@components';
import {Card} from '@components/Card/Card';
import {IconCard} from '@components/Card/IconCard';
import {SortOrder, usePeopleQuery} from 'generated/graphql';
import React from 'react';
import {AiOutlinePlus} from 'react-icons/ai';
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

	return (
		<Layout>
			<div className="flex flex-wrap gap-5">
				<InternalLink href="person/create?next=/people">
					<IconCard icon={AiOutlinePlus} size="large" />
				</InternalLink>
				{data?.people?.map(person => (
					<div key={person.id}>
						{/* eslint-disable-next-line @typescript-eslint/restrict-template-expressions */}
						<InternalLink href={`person/${person.id}`}>
							<Card src={person.thumbnail} size="large" />
						</InternalLink>
					</div>
				))}
			</div>
		</Layout>
	);
};
