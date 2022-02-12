import React from 'react';
import {Spinner} from './Spinner';

export const Loading: React.FC = () => {
	return (
		<div className="absolute w-full h-full grid place-items-center bg-white transform transition-all duration-1000">
			<Spinner />
		</div>
	);
};
