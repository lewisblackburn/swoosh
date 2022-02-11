import {useVerifyLoggedIn} from '@modules/auth/useVerifyLoggedIn';
import {useMeQuery} from 'generated/graphql';
import Link from 'next/link';
import {useRouter} from 'next/router';
import React from 'react';
import {
	AiOutlineBell,
	AiOutlineFire,
	AiOutlineLineHeight,
	AiOutlineMacCommand,
	AiOutlineSetting,
	AiOutlineShoppingCart,
} from 'react-icons/ai';
import {Button} from './Button';
import {Icon} from './Icon';
import {IconLink} from './IconLink';

const NavButton: React.FC<{href: string}> = ({href, children}) => {
	const router = useRouter();

	const isActive = router.pathname === href;

	if (isActive) {
		return (
			<Link href={href}>
				<a className="inline-block px-4 py-3 text-sm text-gray-600 bg-blueGray-50 font-semibold leading-none rounded transform transition-all">
					{children}
				</a>
			</Link>
		);
	}

	return (
		<Link href={href}>
			<a className="inline-block px-4 py-3 text-sm text-gray-600 hover:bg-blueGray-100 font-semibold leading-none rounded transform transition-all">
				{children}
			</a>
		</Link>
	);
};

export const Navbar: React.FC = () => {
	// I could maybe add useVerifyLoggedIn() here instead of having it in all the pages.

	const {data: me} = useMeQuery();

	return (
		<nav className="p-10">
			<div className="flex items-center justify-between">
				<Link href="/home">
					<a className="flex space-x-1 p-3 text-sm text-gray-600 hover:text-gray-700 hover:bg-blueGray-100 font-semibold leading-none border border-bray-200 hover:border-gray-300 rounded">
						<Icon icon={AiOutlineMacCommand} className="w-4 h-4" />
						<h1>K</h1>
					</a>
				</Link>
				<div className="flex items-center space-x-5">
					<Button variant="tertiary" className="flex items-center space-x-2">
						<Icon icon={AiOutlineFire} className="w-4 h-4" />
						{/* Upgrade now ?? Verify Account? */}
						<h1>Upgrade now</h1>
					</Button>
					<IconLink href="/preferences" icon={AiOutlineSetting} className="w-5 h-5" />
					<IconLink icon={AiOutlineBell} className="w-5 h-5" />
					{/* eslint-disable-next-line @typescript-eslint/restrict-template-expressions */}
					<Link href={`/user/${me?.me?.username}`}>
						<a>
							<img src={me?.me?.avatar ?? ''} className="w-10 h-10 rounded-full" />
						</a>
					</Link>
				</div>
			</div>
		</nav>
	);
};
