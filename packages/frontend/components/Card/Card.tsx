import React from 'react';

export interface CardProps {
	size: 'small' | 'medium' | 'large';
	src?: string;
}

const resolution = {
	small: 'w-32 h-48',
	medium: 'w-48 h-54',
	large: 'w-64 h-96',
};

export const Card: React.FC<CardProps> = ({ size, src, children }) => {
	return (
		<div
			className={`grid place-items-center w-64 h-96 bg-gray-100 rounded-md bg-cover bg-center filter hover:brightness-75 transition-all ${resolution[size]}`}
			style={{ backgroundImage: `url(${src ? src : ''})` }}
		>
			{children}
		</div>
	);
};
