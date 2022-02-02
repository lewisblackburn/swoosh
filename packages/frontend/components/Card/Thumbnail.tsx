import React from 'react';
import {Card, CardProps} from './Card';

interface ThumbnailProps extends CardProps {
	src: string;
}

export const Thumbnail: React.FC<ThumbnailProps> = ({src, ...props}) => {
	return (
		<Card {...props}>
			<img src={src} alt="thumbnail" className="object-fill" />
		</Card>
	);
};
