import Link from 'next/link';
import {useRouter} from 'next/router';
import React from 'react';
import {IconType} from 'react-icons';
import {Icon} from './Icon';

interface IconLinkProps {
	icon: IconType;
	href: string;
}

export const IconLink: React.FC<IconLinkProps> = ({icon, href}) => {
	const {pathname} = useRouter();
	const active = pathname === href;

	return (
		<Link href={href}>
			<a>
				{active ? (
					<Icon icon={icon} className="w-10 h-10 p-2 rounded-md bg-blue-200/50 text-blue-500" />
				) : (
					<Icon icon={icon} className="w-10 h-10 p-2 rounded-md hover:bg-blue-200/50 hover:text-blue-500" />
				)}
			</a>
		</Link>
	);
};
