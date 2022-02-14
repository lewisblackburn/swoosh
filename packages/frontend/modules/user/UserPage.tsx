import {Button} from '@components/Button';
import {Modal} from '@components/Modal/Modal';
import {notify} from '@components/Notify';
import {useGetStringId} from 'hooks/useGetStringId';
import Link from 'next/link';
import {useRouter} from 'next/router';
import React, {useEffect, useState} from 'react';
import {
	FollowersDocument,
	FollowingDocument,
	MeDocument,
	useFollowersLazyQuery,
	useFollowersQuery,
	useFollowingLazyQuery,
	useFollowingQuery,
	useFollowMutation,
	useMeQuery,
	UserDocument,
	useUnfollowMutation,
	useUserQuery,
} from '../../generated/graphql';
import {Layout} from '../layouts/Layout';

export const UserPage: React.FC = () => {
	const username: string = useGetStringId();

	const router = useRouter();

	const [isFollowersOpen, setIsFollowersOpen] = useState(false);
	const [isFollowingOpen, setIsFollowingOpen] = useState(false);

	const {data: me} = useMeQuery();

	const {data} = useUserQuery({
		variables: {
			username,
		},
	});

	const {data: following} = useFollowingQuery();
	const {data: followers} = useFollowersQuery();

	const [follow] = useFollowMutation({
		refetchQueries: [UserDocument, FollowingDocument, FollowersDocument],
	});
	const [unfollow] = useUnfollowMutation({
		refetchQueries: [UserDocument, FollowersDocument, FollowingDocument],
	});

	useEffect(() => {
		setIsFollowersOpen(false);
		setIsFollowingOpen(false);
	}, [router]);

	const handleFollow = async () => {
		if (me?.me?.id) {
			if (data?.user?.isFollowing) {
				await unfollow({
					variables: {
						userId: data?.user?.id ?? -1,
					},
				});
			} else {
				await follow({
					variables: {
						userId: data?.user?.id ?? -1,
					},
				});
			}
		}
	};

	return (
		<>
			<Modal isOpen={isFollowingOpen} setIsOpen={setIsFollowingOpen}>
				{following?.follows.map(follow => (
					<Link key={follow.follower.username} href={`/user/${follow.follower.username}`}>
						<a>
							<Button variant="tertiary" className="w-full">
								{follow.follower.username}
							</Button>
						</a>
					</Link>
				))}
			</Modal>
			<Modal isOpen={isFollowersOpen} setIsOpen={setIsFollowersOpen}>
				{followers?.follows.map(follow => (
					<Link key={follow.following.username} href={`/user/${follow.following.username}`}>
						<a>
							<Button variant="tertiary" className="w-full">
								{follow.following.username}
							</Button>
						</a>
					</Link>
				))}
			</Modal>
			<Layout>
				<div className="flex flex-col space-y-5 border p-5 rounded">
					<div className="flex items-start justify-between">
						<img src={data?.user?.avatar ?? ''} className="rounded-full w-16 h-16" />
						{data?.user?.id !== me?.me?.id && (
							<Button variant="tertiary" onClick={handleFollow}>
								{data?.user?.isFollowing ? 'Following' : 'Follow'}
							</Button>
						)}
					</div>
					<h1>{data?.user?.username}</h1>
					<p>{data?.user?.bio}</p>
					<div className="flex items-center space-x-2">
						<Button
							variant="tertiary"
							onClick={async () => {
								if (data?.user?._count?.followers === 0) {
									notify('info', 'query', 'No followers users to show');
								} else {
									setIsFollowersOpen(true);
								}
							}}
						>
							{data?.user?._count?.followers} Followers
						</Button>
						<Button
							variant="tertiary"
							onClick={async () => {
								if (data?.user?._count?.following === 0) {
									notify('info', 'query', 'No followed users to show');
								} else {
									setIsFollowingOpen(true);
								}
							}}
						>
							{data?.user?._count?.following} Following
						</Button>
					</div>
				</div>
			</Layout>
		</>
	);
};
