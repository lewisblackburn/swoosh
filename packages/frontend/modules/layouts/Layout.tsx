import {PaletteWrapper} from '@components/Form/Palette/PaletteWrapper';
import React from 'react';
import {Navigation} from '../../components/Navigation';

export const Layout: React.FC = ({children}) => {
	return (
		<>
			<PaletteWrapper />
			<div className="p-5 transition-all transform">
				<Navigation />
				<div>{children}</div>
			</div>
		</>
	);
};
