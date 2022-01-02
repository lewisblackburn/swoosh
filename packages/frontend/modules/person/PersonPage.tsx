import {useMovieQuery, usePersonQuery} from 'generated/graphql';
import {useRouter} from 'next/router';
import React, {Fragment, useState} from 'react';
import {useVerifyLoggedIn} from '../auth/useVerifyLoggedIn';
import {Layout} from '../layouts/Layout';

export const PersonPage: React.FC = () => {
	useVerifyLoggedIn();

	const router = useRouter();
	const {id: personId} = router.query;

	const {data} = usePersonQuery({
		variables: {
			where: {
				id: parseInt(personId!.toString()),
			},
		},
	});

	const [open, setOpen] = useState(false);

	return (
		<Layout>
			<div className="flex flex-col space-y-5 container mx-auto py-20">
				<div className="flex">
					<div className="flex flex-col">
						<img src={data?.person?.thumbnail} alt="" className="w-64 h-96" />
						<div className="flex flex-col py-5">
							<h1 className="text-xl font-bold">{data?.person?.name}</h1>
							<span>bio: {data?.person?.bio}</span>
							<span>age: {data?.person?.age}</span>
							<span>
								career(s):{' '}
								{data?.person?.career.map(c => (
									<div>{c}</div>
								))}
							</span>
							<span>age: {data?.person?.age}</span>
							<span>movies: {data?.person?._count?.movies}</span>
							<span>shows: {data?.person?._count?.shows}</span>
							<span>songs: {data?.person?._count?.songs}</span>
							<span>books: {data?.person?._count?.books}</span>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};
