import React from 'react';

export const Grid: React.FC = ({children}) => {
	return (
		<div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-10">
			{children}
		</div>
	);
};
