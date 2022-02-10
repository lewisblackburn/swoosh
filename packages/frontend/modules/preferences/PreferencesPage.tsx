import {Avatar} from '@components/Avatar';
import {Button} from '@components/Button';
import InputField from '@components/Form/InputField';
import {Textarea} from '@components/Form/Textarea';
import {useVerifyLoggedIn} from '@modules/auth/useVerifyLoggedIn';
import {PreferencesLayout} from '@modules/layouts/PreferenceLayout';
import {Form, Formik, FormikHelpers} from 'formik';
import {useMeQuery, usePreferencesQuery} from 'generated/graphql';
import React from 'react';

interface Values {
	email: string;
	username: string;
	displayname: string;
	bio: string;
	location: string;
	website: string;
	dob: string;
}

export const PreferencesPage: React.FC = () => {
	useVerifyLoggedIn();

	const {data: preferences} = usePreferencesQuery();

	return (
		<PreferencesLayout>
			<Formik
				initialValues={{
					email: preferences?.me?.email ?? '',
					username: preferences?.me?.username ?? '',
					displayname: preferences?.me?.displayname ?? '',
					bio: preferences?.me?.bio ?? '',
					location: preferences?.me?.location ?? '',
					website: preferences?.me?.website ?? '',
					dob: preferences?.me?.website ?? '',
				}}
				onSubmit={async (values: Values, {setSubmitting}: FormikHelpers<Values>) => {
					setSubmitting(true);
					setSubmitting(false);
				}}
			>
				{({isSubmitting}) => (
					<Form className="w-full">
						<div className="flex flex-col">
							<div className="flex items-center justify-between pb-10">
								<img src={preferences?.me?.avatar ?? ''} className="rounded-full w-24 h-24" />
								<div className="flex items-center space-x-2">
									<Button type="submit" variant="tertiary">
										Cancel
									</Button>
									<Button type="submit" variant="primary">
										{isSubmitting ? 'Saving' : 'Save'}
									</Button>
								</div>
							</div>
							<div className="grid grid-cols-2 items-center">
								<span>Email</span>
								<InputField type="email" name="email" />
							</div>
							<div className="grid grid-cols-2 items-center">
								<span>Username</span>
								<InputField type="username" name="username" />
							</div>
							<div className="grid grid-cols-2 items-center">
								<span>Display Name</span>
								<InputField type="displayname" name="displayname" />
							</div>
							<div className="grid grid-cols-2 items-center">
								<span>Bio</span>
								<Textarea name="bio" />
							</div>
							<div className="grid grid-cols-2 items-center">
								<span>Location</span>
								<InputField type="location" name="location" />
							</div>
							<div className="grid grid-cols-2 items-center">
								<span>Website</span>
								<InputField type="website" name="website" />
							</div>
							<div className="grid grid-cols-2 items-center">
								<span>Date of Birth</span>
								<InputField type="dob" name="dob" />
							</div>
						</div>
					</Form>
				)}
			</Formik>
		</PreferencesLayout>
	);
};
