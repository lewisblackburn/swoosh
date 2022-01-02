import {useApolloClient} from '@apollo/client';
import {Dropdown, DropdownButton, InternalLink} from '@components';
import {Menu, Transition} from '@headlessui/react';
import {useLogoutMutation, useMeQuery, useNotificationsQuery} from 'generated/graphql';
import Link from 'next/link';
import {useRouter} from 'next/router';
import React, {Fragment} from 'react';
import {FaBell, FaPlus} from 'react-icons/fa';
import {FiAirplay, FiArrowRight} from 'react-icons/fi';
import {Button} from './Button';

const ProfileDropdown: React.FC = () => {
	const router = useRouter();
	const {data} = useMeQuery();
	const [logout, {loading}] = useLogoutMutation();
	const apolloClient = useApolloClient();

	return (
		<Dropdown title={<img src={data?.me?.avatar} alt={data?.me?.username} className="w-8 h-8 rounded-full" />}>
			<div className="p-1">
				<Link href={`/user/${data?.me?.username}`}>
					<a>
						<Menu.Item>
							<DropdownButton>
								<div>
									<p>{data?.me?.username}</p>
									<p className="text-xs opacity-60">View profile</p>
								</div>
							</DropdownButton>
						</Menu.Item>
					</a>
				</Link>
			</div>
			<div className="p-1 border-t-1">
				<Link href="/settings/profile">
					<a>
						<Menu.Item>
							<DropdownButton>
								<p>Edit Profile</p>
							</DropdownButton>
						</Menu.Item>
					</a>
				</Link>
				<Link href="/settings">
					<a>
						<Menu.Item>
							<DropdownButton>
								<p>Settings</p>
							</DropdownButton>
						</Menu.Item>
					</a>
				</Link>
			</div>
			<div className="p-1 border-t-1">
				<Menu.Item>
					<DropdownButton
						loading={loading}
						onClick={async () => {
							await logout().then(async () => router.push('/login'));
							await apolloClient.resetStore();
						}}
					>
						<p>Logout</p>
					</DropdownButton>
				</Menu.Item>
			</div>
		</Dropdown>
	);
};

export const Navigation: React.FC = () => {
	const {data} = useMeQuery();

	const items = [
		{name: 'Movies', link: 'movie/create'},
		{name: 'TV', link: 'tv/create'},
		{name: 'Music', link: 'music/create'},
		{name: 'Book', link: 'book/create'},
		{name: 'Person', link: 'person/create'},
	];
	const {data: notifications} = useNotificationsQuery();

	return (
		<header className="text-gray-600 body-font">
			<div className="flex flex-wrap flex-col md:flex-row items-center">
				<InternalLink href="/" className="mb-4 md:mb-0">
					<FiAirplay />
				</InternalLink>
				<nav className="flex space-x-5 md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex-wrap items-center text-base justify-center">
					<Link href="/">Movies</Link>
					<Link href="/">TV</Link>
					<Link href="/">Music</Link>
					<Link href="/">Books</Link>
					<Link href="/people">People</Link>
				</nav>
				{data?.me ? (
					<div className="flex items-center space-x-5">
						<Dropdown title={FaPlus}>
							{items?.map((item, index) => {
								return (
									<div key={index} className="p-1">
										<Link href={`/${item.link}`}>
											<a>
												<Menu.Item>
													<DropdownButton>{item.name}</DropdownButton>
												</Menu.Item>
											</a>
										</Link>
									</div>
								);
							})}
						</Dropdown>
						<Dropdown title={FaBell}>
							{notifications?.notifications.map((notification, index) => (
								<Menu.Item key={index}>
									<DropdownButton>{notification.message}</DropdownButton>
								</Menu.Item>
							))}
						</Dropdown>
						<ProfileDropdown />
					</div>
				) : (
					<div className="flex space-x-5">
						<Link href="/register">
							<Button className="mt-4 md:mt-0">Register</Button>
						</Link>
						<Link href="/login">
							<Button icon={FiArrowRight} className="mt-4 md:mt-0">
								Login
							</Button>
						</Link>
					</div>
				)}
			</div>
		</header>
	);
};
