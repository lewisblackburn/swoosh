import React from 'react';

// This is not currently used, but it is a good example of how to use withAuth
export const withAuth = <P extends Record<string, unknown>>(Component: React.ComponentType<P>) => {
	const WithAuth = (props: P) => {
		return <Component {...props} />;
	};

	return WithAuth;
};

export default withAuth;
