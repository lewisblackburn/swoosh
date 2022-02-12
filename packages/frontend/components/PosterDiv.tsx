import React from 'react';

interface PosterDivProps extends React.HTMLAttributes<HTMLDivElement> {
	src: string | undefined;
}

export const PosterDiv: React.FC<PosterDivProps> = ({src, children, ...props}) => {
	return (
		<div
			className="grid place-items-center h-80 w-56 bg-gray-300 cursor-pointer rounded filter hover:brightness-75 transition-all bg-center bg-cover"
			style={{backgroundImage: `url(${src ?? ''})`}}
			{...props}
		>
			{children}
		</div>
	);
};
