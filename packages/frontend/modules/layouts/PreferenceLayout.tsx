import React from 'react';
import { Layout } from './Layout';

export const PreferencesLayout: React.FC = ({ children }) => (
		<Layout>
			<div className="flex justify-between">
				<div>{children}</div>
				<div>radio form</div>
			</div>
		</Layout>
	);
