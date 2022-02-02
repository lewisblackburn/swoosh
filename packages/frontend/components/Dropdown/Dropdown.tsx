import React, { Fragment, ReactElement } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { IconType } from 'react-icons';

interface DropdownProps {
	title: ReactElement | IconType;
}

export const Dropdown: React.FC<DropdownProps> = ({ title, children }) => (
		<Menu as="div" className="relative inline-block text-left text-sm" style={{ zIndex: 1 }}>
			<div>
				<Menu.Button>{title}</Menu.Button>
			</div>
			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
					{children}
				</Menu.Items>
			</Transition>
		</Menu>
	);
