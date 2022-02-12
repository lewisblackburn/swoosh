import {Button} from '@components/Button';
import InputField from '@components/Form/InputField';
import {notify} from '@components/Notify';
import {PreferencesLayout} from '@modules/layouts/PreferenceLayout';
import {Form, Formik, FormikHelpers} from 'formik';
import {useConfirmMutation} from 'generated/graphql';
import React from 'react';

interface Values {
	token: string;
}

export const VerifyAccountPage: React.FC = () => {
	const [confirm] = useConfirmMutation();

	return (
		<PreferencesLayout>
			<Formik
				initialValues={{
					token: '',
				}}
				onSubmit={async (values: Values, {setSubmitting}: FormikHelpers<Values>) => {
					setSubmitting(true);
					await confirm({
						variables: {
							token: values.token,
						},
					})
						.then(res => {
							if (res.data?.confirm) {
								notify('success', 'mutation', 'Your account has been confirmed');
							} else {
								notify(
									'info',
									'mutation',
									'Your account has already been confirmed or the token is invalid'
								);
							}
						})
						.catch(() => {
							notify('error', 'mutation', 'Your account could not be confirmed');
						})
						.then(() => {
							setSubmitting(false);
						});
				}}
			>
				{({isSubmitting}) => (
					<Form className="w-full">
						<div className="flex flex-col">
							<InputField type="text" name="confirm" />
							<Button type="submit" variant="tertiary">
								{isSubmitting ? 'Confirming Account' : 'Confirm Account'}
							</Button>
						</div>
					</Form>
				)}
			</Formik>
		</PreferencesLayout>
	);
};
