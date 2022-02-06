import React from 'react';

interface AlertProps {
	type: 'success' | 'warn' | 'error';
}

export const Alert: React.FC<AlertProps> = ({type = 'success', children}) => {
	return (
		<div>
			{type}
			{children}
		</div>
	);
};
