import React from 'react';
import {LoginForm} from '../../components/Form/LoginForm';
import {useNotVerifyLoggedIn} from '../auth/useVerifyNotLoggedIn';

export const LoginPage: React.FC = () => {
	useNotVerifyLoggedIn();

	return <LoginForm />;
};
