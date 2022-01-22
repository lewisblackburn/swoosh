import {useVerifyLoggedIn} from '@modules/auth/useVerifyLoggedIn';
import {Layout} from '@modules/layouts/Layout';
import React from 'react';

export const HomePage: React.FC = () => {
	useVerifyLoggedIn();

	return <Layout>test</Layout>;
};
