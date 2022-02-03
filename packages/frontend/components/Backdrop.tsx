import React from 'react';

interface BackdropProps {
	src: string | undefined;
}

export const Backdrop: React.FC<BackdropProps> = ({src}) => {
	return <img className="h-80 w-full object-cover rounded" src={src ?? ''} alt="backdrop" />;
};
