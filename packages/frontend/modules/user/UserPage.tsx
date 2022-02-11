import {Grid} from '@components/Grid';
import {useGetStringId} from 'hooks/useGetStringId';
import React from 'react';
import {useUserQuery} from '../../generated/graphql';
import {Layout} from '../layouts/Layout';

export const UserPage: React.FC = () => {
	const username: string = useGetStringId();

	// May need: const [type, setType] = useState<'Followers' | 'Following'>('Following');

	const {data} = useUserQuery({
		variables: {
			username,
		},
	});

	return (
		<Layout>
			<Grid>
				<div className="flex px-4 py-3 leading-none text-sm font-semibold bg-white text-gray-600 hover:text-gray-700 hover:bg-blueGray-100 border border-bray-200 hover:border-gray-300 rounded">
					<div className="flex flex-col space-y-5 items-center w-full">
						<img src={data?.user?.avatar ?? ''} className="rounded-full w-24 h-24" />
						<h1>{data?.user?.displayname}</h1>
						<p>{data?.user?.bio}</p>
					</div>
				</div>
				{/* Need to add first five of each here */}
				<div className="flex px-4 py-3 leading-none text-sm font-semibold bg-white text-gray-600 hover:text-gray-700 hover:bg-blueGray-100 border border-bray-200 hover:border-gray-300 rounded">
					<h1>{data?.user?._count?.followers}</h1>
					<p>Followers</p>
				</div>
				<div className="flex px-4 py-3 leading-none text-sm font-semibold bg-white text-gray-600 hover:text-gray-700 hover:bg-blueGray-100 border border-bray-200 hover:border-gray-300 rounded">
					<h1>{data?.user?._count?.following}</h1>
					<p>Following</p>
				</div>
				<div className="flex px-4 py-3 leading-none text-sm font-semibold bg-white text-gray-600 hover:text-gray-700 hover:bg-blueGray-100 border border-bray-200 hover:border-gray-300 rounded">
					Notifications
				</div>
				<div className="flex px-4 py-3 leading-none text-sm font-semibold bg-white text-gray-600 hover:text-gray-700 hover:bg-blueGray-100 border border-bray-200 hover:border-gray-300 rounded">
					Watchlist
				</div>
				<div className="flex px-4 py-3 leading-none text-sm font-semibold bg-white text-gray-600 hover:text-gray-700 hover:bg-blueGray-100 border border-bray-200 hover:border-gray-300 rounded">
					Reviews
				</div>
			</Grid>
		</Layout>
	);
};
