import {RegisterForm} from '@components/Form/RegisterForm';
import React from 'react';
import {useNotVerifyLoggedIn} from '../auth/useVerifyNotLoggedIn';
import {Layout} from '../layouts/Layout';

export const RegisterPage: React.FC = () => {
	useNotVerifyLoggedIn();

	return (
		<Layout>
			<RegisterForm />
		</Layout>
	);
};
