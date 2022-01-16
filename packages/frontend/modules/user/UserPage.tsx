import { Button } from '@components/Button';
import { Modal } from '@components/Modal';
import { Dialog } from '@headlessui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Avatar } from '../../components/Avatar';
import {
	FollowersDocument,
	FollowingDocument,
	useFollowersQuery,
	useFollowingQuery,
	useFollowMutation,
	useMeQuery,
	UserDocument,
	useUnfollowMutation,
	useUserQuery,
} from '../../generated/graphql';
import { Layout } from '../layouts/Layout';

interface FollowsModalProps {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	type: 'Followers' | 'Following';
	username: string;
}

const FollowsModal: React.FC<FollowsModalProps> = ({ isOpen, setIsOpen, type, username }) => {
	const { data: followers } = useFollowersQuery({
		variables: {
			where: {
				follower: {
					is: {
						username: {
							equals: username,
						},
					},
				},
			},
		},
	});
	const { data: following } = useFollowingQuery({
		variables: {
			where: {
				following: {
					is: {
						username: {
							equals: username,
						},
					},
				},
			},
		},
	});

	useEffect(() => {
		setIsOpen(false);
	}, [setIsOpen, username]);

	return (
		<Modal isOpen={isOpen} setIsOpen={setIsOpen}>
			<Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
				{type}
			</Dialog.Title>

			<div>
				{type === 'Followers' ? (
					<div className="mt-5">
						{followers?.follows.map(follower => (
							// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
							<Link key={follower.following.id} href={`/user/${follower.following.username}`}>
								<a>
									<div
										key={follower.following.id}
										className="flex items-center space-x-3 hover:bg-gray-100 rounded-md p-5"
									>
										<img src={follower.following.avatar} alt="avatar" className="w-16 h-16 rounded-full" />
										<p>{follower.following.username}</p>
									</div>
								</a>
							</Link>
						))}
					</div>
				) : (
					<div className="mt-5">
						{following?.follows.map(follow => (
							// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
							<Link key={follow.follower.id} href={`/user/${follow.follower.username}`}>
								<a>
									<div className="flex items-center space-x-3 hover:bg-gray-100 rounded-md p-5">
										<img src={follow.follower.avatar} alt="avatar" className="w-16 h-16 rounded-full" />
										<p>{follow.follower.username}</p>
									</div>
								</a>
							</Link>
						))}
					</div>
				)}
			</div>
		</Modal>
	);
};

export const UserPage: React.FC = () => {
	const router = useRouter();
	const { username } = router.query;

	const [isOpen, setIsOpen] = useState(false);
	const [type, setType] = useState<'Followers' | 'Following'>();

	const { data: me } = useMeQuery();
	const { data } = useUserQuery({
		variables: {
			username: username!.toString(),
		},
	});
	const [follow, { loading: following }] = useFollowMutation({
		refetchQueries: [UserDocument, FollowingDocument, FollowersDocument],
	});
	const [unfollow, { loading: unfollowing }] = useUnfollowMutation({
		refetchQueries: [UserDocument, FollowingDocument, FollowersDocument],
	});

	if (data?.user) {
		return (
			<>
				<FollowsModal isOpen={isOpen} setIsOpen={setIsOpen} type={type} username={username?.toString()} />
				<Layout>
					<div className="flex flex-col p-5">
						<div className="flex items-center justify-between my-10">
							<div className="flex items-center space-x-5">
								<Avatar url={data.user.avatar} />
								<div className="flex space-x-2">
									<span>{data.user.displayname}</span>
									<span>
										Member since{' '}
										{new Date(data.user.createdAt).toLocaleDateString('en-gb', {
											year: 'numeric',
											month: 'long',
										})}
									</span>
								</div>
							</div>
							<div className="flex space-x-5">
								<Button
									onClick={() => {
										setIsOpen(true);
										setType('Followers');
									}}
								>
									{data.user._count?.followers} followers
								</Button>
								<Button
									onClick={() => {
										setIsOpen(true);
										setType('Following');
									}}
								>
									{data.user._count?.following} following
								</Button>
								{data.user.id !== me?.me?.id && (
									<Button
										loading={following || unfollowing}
										onClick={async () => {
											if (data.user?.isFollowing) {
												await unfollow({
													variables: {
														userId: data.user!.id,
													},
												});
											} else {
												await follow({
													variables: {
														userId: data.user!.id,
													},
												});
											}
										}}
									>
										{data.user.isFollowing ? 'Unfollow' : 'Follow'}
									</Button>
								)}
							</div>
						</div>
					</div>
				</Layout>
			</>
		);
	}

	return null;
};
