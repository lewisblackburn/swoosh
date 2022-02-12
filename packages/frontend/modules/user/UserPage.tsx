import {Button} from '@components/Button';
import {Loading} from '@components/Loading';
import {useGetStringId} from 'hooks/useGetStringId';
import React from 'react';
import {useFollowMutation, useMeQuery, UserDocument, useUnfollowMutation, useUserQuery} from '../../generated/graphql';
import {Layout} from '../layouts/Layout';

export const UserPage: React.FC = () => {
	const username: string = useGetStringId();

	const {data: me} = useMeQuery();

	const {data} = useUserQuery({
		variables: {
			username,
		},
	});

	const [follow] = useFollowMutation({
		refetchQueries: [UserDocument],
	});
	const [unfollow] = useUnfollowMutation({
		refetchQueries: [UserDocument],
	});

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

	if (!data?.user || !me?.me) return <Loading />;

	return (
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
					<Button variant="tertiary">{data?.user?._count?.followers} Followers</Button>
					<Button variant="tertiary">{data?.user?._count?.following} Following</Button>
				</div>
			</div>
		</Layout>
	);
};
