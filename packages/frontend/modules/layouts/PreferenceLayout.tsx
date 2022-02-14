import {useApolloClient} from '@apollo/client';
import {Icon} from '@components/Icon';
import {notify} from '@components/Notify';
import {useVerifyLoggedIn} from '@modules/auth/useVerifyLoggedIn';
import {useLogoutMutation} from 'generated/graphql';
import Link from 'next/link';
import {useRouter} from 'next/router';
import React from 'react';
import {
	AiOutlineBell,
	AiOutlineDelete,
	AiOutlineInbox,
	AiOutlineLogout,
	AiOutlineProfile,
	AiOutlineSafetyCertificate,
} from 'react-icons/ai';
import {Layout} from './Layout';

const LinkButton: React.FC<{href: string}> = ({href, children}) => {
	const router = useRouter();

	const isActive = router.pathname === href;

	if (isActive) {
		return (
			<Link href={href}>
				<a className="flex p-3 items-center font-medium bg-indigo-50 rounded text-indigo-500 transform transition-all">
					{children}
				</a>
			</Link>
		);
	}

	return (
		<Link href={href}>
			<a className="flex p-3 items-center font-medium hover:bg-indigo-50 rounded text-gray-500 hover:text-indigo-500 transform transition-all">
				{children}
			</a>
		</Link>
	);
};

export const PreferencesLayout: React.FC = ({children}) => {
	useVerifyLoggedIn();

	const [logout] = useLogoutMutation();
	const apolloClient = useApolloClient();

	const router = useRouter();

	return (
		<Layout>
			<div className="flex flex-wrap">
				<div className="w-full lg:w-3/12 mb-8 lg:mb-0">
					<div className="bg-white rounded">
						<ul className="text-sm">
							<LinkButton href="/preferences">
								<Icon icon={AiOutlineProfile} className="w-5 h-5 mr-3" />
								<span>Edit Profile</span>
							</LinkButton>
							<LinkButton href="/preferences/notification">
								<Icon icon={AiOutlineBell} className="w-5 h-5 mr-3" />
								<span>Notificaiton</span>
							</LinkButton>
							<LinkButton href="/preferences/watchlist">
								<Icon icon={AiOutlineInbox} className="w-5 h-5 mr-3" />
								<span>Watchlist</span>
							</LinkButton>
							<LinkButton href="/preferences/liked">
								<Icon icon={AiOutlineInbox} className="w-5 h-5 mr-3" />
								<span>Likes</span>
							</LinkButton>
							<LinkButton href="/preferences/verify">
								<Icon icon={AiOutlineSafetyCertificate} className="w-5 h-5 mr-3" />
								<span>Verify Account</span>
							</LinkButton>
							<LinkButton href="/preferences/delete">
								<Icon icon={AiOutlineDelete} className="w-5 h-5 mr-3" />
								<span>Delete Account</span>
							</LinkButton>
							<a
								className="flex p-3 items-center font-medium hover:bg-indigo-50 rounded text-gray-500 hover:text-indigo-500 cursor-pointer transform transition-all"
								onClick={async () => {
									await apolloClient.resetStore().then(() => {
										logout()
											.then(() => {
												notify('success', 'mutation', 'You have been logged out.');
												setTimeout(() => {
													void router.reload();
												}, 1000);
											})
											.catch(e => {
												notify('error', 'mutation', e.graphQLErrors[0].message);
											});
									});
								}}
							>
								<Icon icon={AiOutlineLogout} className="w-5 h-5 mr-3" />
								<span>Logout</span>
							</a>
						</ul>
					</div>
				</div>
				<div className="w-full lg:w-9/12 px-4">
					<div className="flex items-center mb-8 px-3">{children}</div>
				</div>
			</div>
		</Layout>
	);
};
