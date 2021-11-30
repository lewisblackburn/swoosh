import React from 'react';
import {useVerifyLoggedIn} from '../auth/useVerifyLoggedIn';
import {Layout} from '../layouts/Layout';

export const LandingPage: React.FC = () => {
	useVerifyLoggedIn();

	return (
		<Layout>
			test
		</Layout>
	);
};

