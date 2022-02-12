import {Button} from '@components/Button';
import InputField from '@components/Form/InputField';
import {notify} from '@components/Notify';
import {PreferencesLayout} from '@modules/layouts/PreferenceLayout';
import {Form, Formik, FormikHelpers} from 'formik';
import {useDeleteAccountMutation} from 'generated/graphql';
import {useRouter} from 'next/router';
import React from 'react';

interface Values {
	password: string;
	confirmPassword: string;
}

export const DeleteAccountPage: React.FC = () => {
	const [deleteAccount] = useDeleteAccountMutation();
	const router = useRouter();

	return (
		<PreferencesLayout>
			<Formik
				initialValues={{
					password: '',
					confirmPassword: '',
				}}
				onSubmit={async (values: Values, {setSubmitting}: FormikHelpers<Values>) => {
					setSubmitting(true);
					if (values.password === values.confirmPassword) {
						await deleteAccount({
							variables: {
								password: values.password,
							},
						})
							.then(() => {
								notify('success', 'mutation', 'Your account has been deleted');
								setTimeout(() => {
									void router.reload();
								}, 1000);
							})
							.catch(() => {
								notify('error', 'mutation', 'Your account could not be deleted');
							})
							.then(() => {
								setSubmitting(false);
							});
					} else {
						notify('error', 'delete', 'Passwords do not match');
					}
				}}
			>
				{({isSubmitting}) => (
					<Form className="w-full">
						<div className="flex flex-col">
							<InputField type="password" name="password" />
							<InputField type="password" name="confirmPassword" />
							<Button type="submit" variant="tertiary">
								{isSubmitting ? 'Deleting Account' : 'Delete Account'}
							</Button>
						</div>
					</Form>
				)}
			</Formik>
		</PreferencesLayout>
	);
};
