import React from 'react';

interface PosterProps {
	src: string | undefined;
}

export const Poster: React.FC<PosterProps> = ({src}) => {
	return (
		<img
			className="h-80 w-72 object-cover rounded filter hover:brightness-75 transition-all"
			src={src ?? ''}
			alt="poster"
		/>
	);
};
