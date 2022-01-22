import {Button} from '@components/Button';
import {ErrorModal} from '@components/Form/ErrorModal';
import InputField from '@components/Form/InputField';
import {Form, Formik, FormikHelpers} from 'formik';
import {useLoginMutation} from 'generated/graphql';
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
						<a className="block mx-auto text-3xl font-semibold leading-none" href="#">
							<img className="h-10" src="metis-assets/logos/metis/metis.svg" alt width="auto" />
						</a>

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
								}).catch((e: any) => {
									// If graphql validation error
									// Else show other errors in modal
									if (e.graphQLErrors[0].extensions.exception.validationErrors) {
										const errors = toErrorMap(e);
										setModalError(errors[Object.keys(errors)[0]]);
										setIsOpen(true);
									} else {
										// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
										setModalError(e.message);
										setIsOpen(true);
									}
								});
								setSubmitting(false);
							}}
						>
							{({isSubmitting}) => (
								<Form className="my-12">
									<p className="text-sm text-blueGray-400 mb-6">Sign In</p>
									<div className="flex mb-4 px-4 bg-blueGray-50 rounded">
										<InputField type="email" name="email" placeholder="name@email.com" />
									</div>
									<div className="flex mb-6 px-4 bg-blueGray-50 rounded">
										<InputField type="password" name="password" placeholder="Enter your password" />
									</div>
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
