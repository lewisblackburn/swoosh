import {MovieCreateForm} from '@components/Form/Movie/MovieCreateForm';
import React from 'react';
import {useVerifyLoggedIn} from '../auth/useVerifyLoggedIn';
import {Layout} from '../layouts/Layout';

export const CreatePage: React.FC = () => {
	useVerifyLoggedIn();

	return (
		<Layout>
			<MovieCreateForm />
		</Layout>
	);
};