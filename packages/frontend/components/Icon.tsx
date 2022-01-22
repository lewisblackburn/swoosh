import React, {useMemo} from 'react';
import {IconContext, IconType} from 'react-icons';

interface IconProps {
	icon: IconType;
	className?: string;
}

export const Icon: React.FC<IconProps> = ({icon, className}) => {
	const cn = useMemo(() => className, [className]);

	// eslint-disable-next-line react/jsx-no-constructed-context-values
	return <IconContext.Provider value={{className: cn}}>{icon({})}</IconContext.Provider>;
};
