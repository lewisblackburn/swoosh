import {ButtonProps} from '@components/Button';
import {Spinner} from '@components/Spinner';
import React from 'react';

export const DropdownButton: React.FC<ButtonProps> = ({children, disabled, loading, icon, className, ...props}) => {
	return (
		<button
			type="button"
			disabled={disabled || loading}
			{...props}
			// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
			className={`w-full p-4 text-left rounded-md cursor-pointer hover:bg-gray-100 ${className}`}
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
