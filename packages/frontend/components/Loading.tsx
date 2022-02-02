import React, {Fragment} from 'react';
import {Spinner} from './Spinner';

interface LoadingProps {
	loading: boolean;
}

export const Loading: React.FC<LoadingProps> = ({loading}) => {
	return (
		<div className="absolute w-full h-full grid place-items-center bg-gray-300">
			<Spinner />
		</div>
	);
};
