import React from 'react';

export const Card: React.FC = ({children}) => {
	return (
		<div className="grid place-items-center h-80 w-52 bg-gray-300 rounded filter hover:brightness-75 transition-all">
			{children}
		</div>
	);
};
