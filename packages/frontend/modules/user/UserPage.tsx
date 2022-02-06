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

	return <Layout>{data?.user?.id}</Layout>;
};
