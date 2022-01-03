import React from 'react';
import {IconType} from 'react-icons/lib';

interface ItemProps {
	shortcut?: string[];
	command: () => void;
	icon?: IconType;
}

export const Item: React.FC<ItemProps> = ({shortcut, command, icon, children}) => {
	return (
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		<div className="p-2 text-sm" onClick={command}>
			<div className="px-3 py-2 rounded-lg hover:bg-gray-100">{children}</div>
		</div>
	);
};
