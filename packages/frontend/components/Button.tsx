import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import {IconType} from 'react-icons/lib';
import {Spinner} from './Spinner';

export type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
	loading?: boolean;
	icon?: IconType;
};

export const Button: React.FC<ButtonProps> = ({children, disabled, loading, icon, className = '', ...props}) => {
	return (
		<button
			type="button"
			disabled={disabled ?? loading}
			className={`inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 ${className}`}
			{...props}
		>
			{loading ? (
				<Spinner />
			) : (
				<span className="flex items-center space-x-1">
					{children}
					{icon && <span>{icon({})}</span>}
				</span>
			)}
		</button>
	);
};
