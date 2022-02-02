import React, {useMemo} from 'react';
import {IconContext, IconType} from 'react-icons';

interface IconProps {
	icon: IconType;
	onClick?: () => void;
	className?: string;
}

export const Icon: React.FC<IconProps> = ({icon, onClick, className}) => {
	const cn = useMemo(() => className, [className]);

	return (
		<div onClick={onClick}>
			{/* eslint-disable-next-line react/jsx-no-constructed-context-values */}
			<IconContext.Provider value={{className: cn}}>{icon({})}</IconContext.Provider>
		</div>
	);
};
