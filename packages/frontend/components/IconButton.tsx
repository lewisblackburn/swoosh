import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { IconType } from 'react-icons';
import { Icon } from './Icon';
import { Spinner } from './Spinner';

interface IconButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	icon: IconType;
	className?: string;
	loading?: boolean;
}

export const IconButton: React.FC<IconButtonProps> = ({ icon, className, loading, ...props }) => {
	return (
		<button type="button" {...props}>
			{loading ? (
				<Spinner />
			) : (
				<Icon icon={icon} className={`w-10 h-10 p-2 rounded-md ${className ? className : ''}`} />
			)}
		</button>
	);
};
