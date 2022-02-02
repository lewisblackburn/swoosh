import {useMeQuery} from 'generated/graphql';
import Link from 'next/link';
import React from 'react';
import {
	AiOutlineBell,
	AiOutlineCustomerService,
	AiOutlineDesktop,
	AiOutlineHome,
	AiOutlineHourglass,
	AiOutlineRead,
	AiOutlineSetting,
	AiOutlineUser,
	AiOutlineVideoCamera,
} from 'react-icons/ai';
import {Avatar} from './Avatar';
import {IconLink} from './IconLink';
import {LogoutButton} from './LogoutButton';

export const Sidebar: React.FC = () => {
	const {data} = useMeQuery();

	return (
		<div className="flex flex-col itemsHeart-center justify-between h-screen px-5 py-10 border-r border-gray-100">
			<div className="flex flex-col items-center space-y-8">
				<h1 className="text-xs font-bold text-gray-500 uppercase">home</h1>
				<IconLink icon={AiOutlineHome} href="/" />
				<IconLink icon={AiOutlineHourglass} href="/watchlist" />
				<IconLink icon={AiOutlineBell} href="/notifications" />
				<h1 className="text-xs font-bold text-gray-500 uppercase">content</h1>
				<IconLink icon={AiOutlineVideoCamera} href="/movies" />
				<IconLink icon={AiOutlineDesktop} href="/tv" />
				<IconLink icon={AiOutlineCustomerService} href="/music" />
				<IconLink icon={AiOutlineRead} href="/books" />
				<IconLink icon={AiOutlineUser} href="/people" />
			</div>
			<div className="flex flex-col items-center space-y-8">
				<Link href={`/user/${data?.me?.username}`}>
					<a>
						<Avatar url={data?.me?.avatar} />
					</a>
				</Link>
				<IconLink icon={AiOutlineSetting} href="/preferences" />
				<LogoutButton />
			</div>
		</div>
	);
};
