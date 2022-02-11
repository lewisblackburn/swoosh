import {Button} from '@components/Button';
import InputField from '@components/Form/InputField';
import {ErrorModal} from '@components/Modal/ErrorModal';
import {notify} from '@components/Notify';
import {Form, Formik, FormikHelpers} from 'formik';
import {BookReviewScalarFieldEnum, MeDocument, MeQuery, useLoginMutation} from 'generated/graphql';
import {toErrorMap} from 'lib/toErrorMap';
import React, {useState} from 'react';
import {useNotVerifyLoggedIn} from '../auth/useVerifyNotLoggedIn';

interface Values {
	email: string;
	password: string;
}

export const LoginPage: React.FC = () => {
	useNotVerifyLoggedIn();

	const [login] = useLoginMutation();
	const [isOpen, setIsOpen] = useState(false);
	const [modalError, setModalError] = useState('');

	return (
		<>
			<ErrorModal error={modalError} isOpen={isOpen} setIsOpen={setIsOpen} />
			<section className="grid place-items-center w-full h-screen">
				<div className="container px-4 mx-auto">
					<div className="flex flex-col max-w-sm mx-auto text-center">
						{/* <a className="block mx-auto text-3xl font-semibold leading-none" href="#">
							<img className="h-10" src="metis-assets/logos/metis/metis.svg" alt width="auto" />
						</a> */}

						<Formik
							initialValues={{
								email: '',
								password: '',
							}}
							onSubmit={async (values: Values, {setSubmitting}: FormikHelpers<Values>) => {
								setSubmitting(true);
								await login({
									variables: {
										data: values,
									},
									update: (cache, {data}) => {
										cache.writeQuery<MeQuery>({
											query: MeDocument,
											data: {
												__typename: 'Query',
												me: data?.login,
											},
										});
										cache.evict({fieldName: 'movies:{}'});
									},
								})
									.then(() => {
										// eslint-disable-next-line @typescript-eslint/quotes
										notify('success', 'mutation', "You're logged in!");
									})
									.catch((e: any) => {
										if (e.graphQLErrors[0].extensions.exception.validationErrors) {
											e.graphQLErrors[0].extensions.exception.validationErrors.map(
												// eslint-disable-next-line array-callback-return
												(validationError: any) => {
													// eslint-disable-next-line guard-for-in
													for (const constraint in validationError.constraints) {
														const error = validationError.constraints[constraint];
														notify('error', 'mutation', error);
													}
												}
											);
										} else {
											notify('error', 'mutation', e.message);
										}
									})
									.then(() => {
										setSubmitting(false);
									});
							}}
						>
							{({isSubmitting}) => (
								<Form className="my-12">
									<p className="text-sm text-blueGray-400 mb-6">Sign In</p>
									<InputField type="email" name="email" />
									<InputField type="password" name="password" />
									<Button type="submit">{isSubmitting ? 'Loading...' : 'Sign In'}</Button>
								</Form>
							)}
						</Formik>
						<div>
							<p className="text-xs text-blueGray-400 text-center">
								<a className="underline hover:text-blueGray-500" href="#">
									Police privacy
								</a>{' '}
								and{' '}
								<a className="underline hover:text-blueGray-500" href="#">
									Terms of Use
								</a>
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
