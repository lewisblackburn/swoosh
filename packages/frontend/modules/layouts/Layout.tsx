import React from 'react';
import {Navigation} from '../../components/Navigation';

export const Layout: React.FC = ({children}) => {
	return (
		<div className="w-screen h-screen">
			<Navigation />
			{children}
		</div>
	);
};
