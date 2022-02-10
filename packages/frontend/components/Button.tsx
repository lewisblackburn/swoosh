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
				' inline-block px-4 py-3 leading-none text-xs text-center font-semibold text-white bg-blueGray-600 hover:bg-blueGray-700 rounded';
			break;
		case 'secondary':
			className +=
				' inline-block px-4 py-3 leading-none text-xs text-center font-semibold text-blueGray-500 hover:text-blueGray-800 text-center font-semibold leading-none bg-blueGray-50 hover:bg-blueGray-100 rounded';
			break;

		default:
			// This is the tertiary -> default
			className +=
				' inline-block px-4 py-3 leading-none text-xs text-center font-semibold text-gray-600 hover:text-gray-700 hover:bg-blueGray-100 border border-bray-200 hover:border-gray-300 rounded';
			break;
	}

	return (
		<button type="button" disabled={disabled ?? loading} className={className} {...props}>
			{loading ? <Spinner /> : children}
		</button>
	);
};
