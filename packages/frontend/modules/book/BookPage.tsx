import {useBookQuery} from 'generated/graphql';
import {useGetIntId} from 'hooks/useGetIntId';
import React from 'react';
import {useVerifyLoggedIn} from '../auth/useVerifyLoggedIn';
import {Layout} from '../layouts/Layout';

export const BookPage: React.FC = () => {
	useVerifyLoggedIn();

	const bookId = useGetIntId();
	const {data} = useBookQuery({
		skip: bookId === -1,
		variables: {
			bookId,
		},
	});

	return (
		<Layout>
			<div className="flex flex-col space-y-5 container mx-auto py-20">
				<div className="flex">
					<div className="flex flex-col">
						<img src={data?.book?.poster} alt="" className="w-64 h-96" />
						<div className="flex flex-col py-5">
							<h1 className="text-xl font-bold">{data?.book?.title}</h1>
							<span>isLiked: {data?.book?.isLiked}</span>
							<span>id: {data?.book?.id}</span>
							<span>
								genres(s):{' '}
								{data?.book?.genres.map(genre => (
									<div key={genre.name}>{genre.name}</div>
								))}
							</span>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};
