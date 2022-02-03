import React from 'react';

interface BackdropDivProps extends React.HTMLAttributes<HTMLDivElement> {
	src: string | undefined;
}

export const BackdropDiv: React.FC<BackdropDivProps> = ({src, children, ...props}) => {
	return (
		<div
			className="grid place-items-center h-80 w-full bg-gray-300 cursor-pointer rounded filter hover:brightness-75 transition-all bg-center bg-cover"
			style={{backgroundImage: `url(${src ?? ''})`}}
			{...props}
		>
			{children}
		</div>
	);
};
