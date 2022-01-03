import {RegisterForm} from '@components/Form/RegisterForm';
import React from 'react';
import {useNotVerifyLoggedIn} from '../auth/useVerifyNotLoggedIn';

export const RegisterPage: React.FC = () => {
	useNotVerifyLoggedIn();

	return <RegisterForm />;
};
