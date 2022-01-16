import { useApolloClient } from '@apollo/client';
import { useLogoutMutation } from 'generated/graphql';
import React from 'react';
import { AiOutlineLogout } from 'react-icons/ai';
import { IconButton } from './IconButton';

export const LogoutButton: React.FC = () => {
	const [logout, { loading }] = useLogoutMutation();
	const apolloClient = useApolloClient();

	return (
		<IconButton
			loading={loading}
			disabled={loading}
			icon={AiOutlineLogout}
			className="hover:bg-red-200/50 hover:text-red-500"
			// eslint-disable-next-line @typescript-eslint/no-unsafe-return
			onClick={async () => logout().then(async () => apolloClient.resetStore())}
		/>
	);
};
