import { Avatar } from '@components/Avatar';
import { Button } from '@components/Button';
import { Layout } from '@modules/layouts/Layout';
import { MeDocument, useMeQuery, useUploadAvatarMutation } from 'generated/graphql';
import React from 'react';

const AvatarUpload: React.FC = () => {
	const [upload] = useUploadAvatarMutation({
		refetchQueries: [MeDocument],
	});

	const hiddenFileInput: any = React.useRef(null);

	const handleClick = (_event: any) => {
		hiddenFileInput.current.click();
	};

	const handleChange = (event: any) => {
		const fileUploaded = event.target.files[0];
		upload({
			variables: { file: fileUploaded },
		}).catch(error => {
			console.log(error.message);
		});
	};

	return (
		<div>
			<Button
				onClick={e => {
					handleClick(e);
				}}
			>
				Upload avatar
			</Button>
			<input
				ref={hiddenFileInput}
				type="file"
				style={{ display: 'none' }}
				onChange={e => {
					handleChange(e);
				}}
			/>
		</div>
	);
};

export const ProfilePage: React.FC = () => {
	const { data } = useMeQuery();

	return (
		<Layout>
			{data?.me && <Avatar url={data.me.avatar} />}
			<AvatarUpload />
		</Layout>
	);
};
