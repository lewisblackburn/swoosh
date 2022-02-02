/* eslint-disable react/button-has-type */
import {Transition} from '@headlessui/react';
import {useNotificationsQuery} from 'generated/graphql';
import {useRouter} from 'next/router';
import React, {Fragment, useState} from 'react';
import {AiOutlineBell, AiOutlineLeft, AiOutlineSetting} from 'react-icons/ai';
import {IconLink} from './IconLink';

interface NotifcationsProps {
	isOpen: boolean;
}

const Notifications: React.FC<NotifcationsProps> = ({isOpen}) => {
	const {data} = useNotificationsQuery();

	return (
		<Transition
			show={isOpen}
			enter="transform transition duration-[400ms]"
			enterFrom="opacity-0 scale-50"
			enterTo="opacity-100 scale-100"
			leave="transform duration-200 transition ease-in-out"
			leaveFrom="opacity-100 scale-100"
			leaveTo="opacity-0 scale-95"
			className="absolute top-20 bg-blueGray-50 rounded"
		>
			{data?.notifications.map(notification => (
				<div key={notification.id} className="p-5">
					{notification.message}
				</div>
			))}
		</Transition>
	);
};

export const Navbar: React.FC = () => {
	const router = useRouter();

	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="flex items-center justify-between m-5 p-5">
			<div className="flex items-center space-x-2">
				<IconLink icon={AiOutlineLeft} onClick={async () => router.back()} />
			</div>

			<div className="flex items-center space-x-5">
				<div className="flex flex-col items-center justify-center">
					<IconLink icon={AiOutlineBell} className="w-5 h-5" onClick={() => setIsOpen(prev => !prev)} />
					<Notifications isOpen={isOpen} />
				</div>
				<IconLink href="/preferences" icon={AiOutlineSetting} className="w-5 h-5" />
			</div>
		</nav>
	);
};
