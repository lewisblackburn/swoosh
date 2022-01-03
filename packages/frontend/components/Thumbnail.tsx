import React from 'react';

interface ThumbnailProps {
	size: 'small' | 'medium' | 'large';
	src: string;
}

const resolution = {
	small: 'w-32 h-48',
	medium: 'w-48 h-60',
	large: 'w-64 h-96',
};

export const Thumbnail: React.FC<ThumbnailProps> = ({size, src}) => {
	return <img src={src} alt="thumbnail" className={`rounded-lg ${resolution[size]}`} />;
};
