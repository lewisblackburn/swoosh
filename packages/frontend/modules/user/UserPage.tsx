import {useApolloClient} from '@apollo/client';
import {Button} from '@components/Button';
import {isServer} from 'lib/constants';
import {useRouter} from 'next/router';
import React from 'react';
import {Avatar} from '../../components/Avatar';
import {
	useFollowMutation,
	useLogoutMutation,
	useMeQuery,
	useUnfollowMutation,
	useUploadAvatarMutation,
	useUserQuery,
} from '../../generated/graphql';
import {useVerifyLoggedIn} from '../auth/useVerifyLoggedIn';
import {Layout} from '../layouts/Layout';

interface UserPageProps {}

export const UserPage: React.FC<UserPageProps> = ({}) => {
	const router = useRouter();
	const {username} = router.query;

	const {data: me} = useMeQuery();
	const {data, refetch} = useUserQuery({
		variables: {
			username: username!.toString(),
		},
	});
	const [follow, {loading: following}] = useFollowMutation();
	const [unfollow, {loading: unfollowing}] = useUnfollowMutation();

	if (data?.user) {
		return (
			<Layout>
				<div className="flex flex-col items-center justify-center space-y-5">
					<Avatar url={data.user.avatar} />
					{data.user.id !== me?.me?.id && (
						<Button
							onClick={() => {
								if (data.user?.isFollowing) {
									unfollow({
										variables: {
											userId: data.user!.id,
										},
									});
								} else {
									follow({
										variables: {
											userId: data.user!.id,
										},
									});
								}
								refetch();
							}}
						>
							{data.user.isFollowing ? 'Unfollow' : 'Follow'}
						</Button>
					)}
					<p>username: {data.user.username}</p>
					<p>displayname: {data.user.displayname}</p>
					<p>loc: {data.user.location}</p>
					<p>site: {data.user.website}</p>
					<p>bio: {data.user.bio}</p>
					<p>createdAt: {data.user.createdAt}</p>
					<p>{data.user._count?.followers} followers</p>
					<p>{data.user._count?.following} following</p>
				</div>
			</Layout>
		);
	}

	return null;
};
