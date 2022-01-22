import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import {IconType} from 'react-icons/lib';
import {Spinner} from './Spinner';

export type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
	variant?: 'primary' | 'secondary' | 'tertiary';
	loading?: boolean;
	icon?: IconType;
};

export const Button: React.FC<ButtonProps> = ({
	variant = 'primary',
	children,
	disabled,
	loading,
	icon,
	className,
	...props
}) => {
	// The spaces in the classNames are intentional. They are used to separate the classNames from the rest of the props.
	switch (variant) {
		case 'primary':
			className +=
				'block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded';
			break;
		case 'secondary':
			className +=
				'block sm:inline-block py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-800 text-center font-semibold leading-none bg-blueGray-50 hover:bg-blueGray-100 rounded';
			break;

		default:
			// This is the tertiary -> default
			className +=
				' inline-block px-4 py-3 text-xs text-blue-600 hover:text-blue-700 font-semibold leading-none border border-blue-200 hover:border-blue-300 rounded';
			break;
	}

	return (
		<button type="button" disabled={disabled ?? loading} className={className} {...props}>
			{loading ? <Spinner /> : children}
		</button>
	);
};
