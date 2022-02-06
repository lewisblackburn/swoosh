import {PreferencesLayout} from '@modules/layouts/PreferenceLayout';
import React from 'react';

export const PreferencesPage: React.FC = () => (
	<PreferencesLayout>
		<div className="flex items-center justify-between w-full">
			<span>username</span>
			<input
				className="w-full p-4 text-sm placeholder-blueGray-400 leading-none bg-blueGray-50 outline-none rounded"
				placeholder="Search"
				type="text"
			/>
		</div>
	</PreferencesLayout>
);
