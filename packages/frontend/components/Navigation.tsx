import Link from 'next/link';
import React from 'react';
import {FiAirplay, FiArrowRight} from 'react-icons/fi';
import {InternalLink} from '@components/InternalLink';
import {useLogoutMutation, useMeQuery} from 'generated/graphql';
import {Button} from './Button';
import {useApolloClient} from '@apollo/client';
import {Dropdown} from './Dropdown';

export const Navigation: React.FC = () => {
	const items = [
		{name: 'Movies', link: 'movie/create'},
		{name: 'TV', link: 'tv/create'},
		{name: 'Music', link: 'music/create'},
		{name: 'Book', link: 'book/create'},
		{name: 'Person', link: 'person/create'},
	];
	const {data} = useMeQuery();
	const [logout, {loading}] = useLogoutMutation();
	const apolloClient = useApolloClient();

	return (
		<header className="text-gray-600 body-font">
			<div className="flex flex-wrap flex-col md:flex-row items-center">
				<InternalLink href="/" className="mb-4 md:mb-0">
					<FiAirplay />
				</InternalLink>
				<nav className="flex space-x-5 md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
					<Link href="/">Movies</Link>
					<Link href="/">TV</Link>
					<Link href="/">Music</Link>
					<Link href="/">Books</Link>
					<Link href="/">People</Link>
				</nav>
				{!data?.me ? (
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
				) : (
					<div className="flex items-center space-x-5">
						<Dropdown title="create" items={items} />
						<Button
							loading={loading}
							className="mt-4 md:mt-0"
							onClick={async () => {
								await logout();
								await apolloClient.resetStore();
							}}
						>
							Logout
						</Button>
						<InternalLink href="/profile">
							<img src={data.me.avatar} alt={data.me.username} className="w-8 h-8 rounded-full" />
						</InternalLink>
					</div>
				)}
			</div>
		</header>
	);
};
