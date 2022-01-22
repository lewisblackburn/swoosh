import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import {IconType} from 'react-icons';
import {Icon} from './Icon';
import {Spinner} from './Spinner';

interface IconButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	icon: IconType;
	className?: string;
	loading?: boolean;
}

export const IconButton: React.FC<IconButtonProps> = ({icon, className, loading, ...props}) => (
	<button
		type="button"
		className="grid place-items-center cursor-pointer bg-blueGray-50 hover:bg-blueGray-100 w-12 h-12 rounded-md "
		{...props}
	>
		<Icon icon={icon} />
	</button>
);
