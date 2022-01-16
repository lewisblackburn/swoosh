import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useMeQuery } from '../../generated/graphql';

export const useVerifyLoggedIn = () => {
	const { data, loading } = useMeQuery();
	const router = useRouter();

	useEffect(() => {
		// If not logged in push to login
		if (!loading && !data?.me) {
			// eslint-disable-next-line @typescript-eslint/no-floating-promises
			router.push('/login');
		}
	}, [loading, data, router]);
};
