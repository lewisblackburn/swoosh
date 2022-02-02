import {Icon} from '@components/Icon';
import {useVerifyLoggedIn} from '@modules/auth/useVerifyLoggedIn';
import {Layout} from '@modules/layouts/Layout';
import {SortOrder, useMoviesQuery, usePeopleQuery} from 'generated/graphql';
import Link from 'next/link';
import React from 'react';
import {AiOutlinePlus} from 'react-icons/ai';

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
			<section>
				<div className="container px-4 mx-auto">
					<div className="max-w-lg mx-auto mb-12 text-center">
						<span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl">
							People
						</span>
					</div>
					<div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-10">
						<Link href="/person/create">
							<a className="w-full">
								<div className="grid place-items-center h-80 bg-gray-300 rounded filter hover:brightness-75 transition-all">
									<Icon icon={AiOutlinePlus} className="w-6 h-6" />
								</div>
							</a>
						</Link>
						{data?.people?.map(people => (
							// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
							<Link key={people.id} href={`/person/${people.id}` ?? 0}>
								<a>
									<img
										className="h-80 object-cover rounded filter hover:brightness-75 transition-all"
										src={people.poster}
										alt="poster"
									/>
								</a>
							</Link>
						))}
					</div>
				</div>
			</section>
		</Layout>
	);
};
