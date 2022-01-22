import {ErrorModal} from '@components/Form/ErrorModal';
import InputField from '@components/Form/InputField';
import {Form, Formik, FormikHelpers} from 'formik';
import {MeDocument, MeQuery, useRegisterMutation} from 'generated/graphql';
import {toErrorMap} from 'lib/toErrorMap';
import {useRouter} from 'next/router';
import React, {useState} from 'react';
import {useNotVerifyLoggedIn} from '../auth/useVerifyNotLoggedIn';

interface Values {
	displayname: string;
	email: string;
	password: string;
	username: string;
}

export const RegisterPage: React.FC = () => {
	useNotVerifyLoggedIn();

	const router = useRouter();
	const [register] = useRegisterMutation();
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
								username: '',
								displayname: '',
								email: '',
								password: '',
							}}
							onSubmit={async (values: Values, {setSubmitting}: FormikHelpers<Values>) => {
								setSubmitting(true);
								await register({
									variables: {
										data: values,
									},
									update: (cache, {data}) => {
										cache.writeQuery<MeQuery>({
											query: MeDocument,
											data: {
												__typename: 'Query',
												me: data?.register,
											},
										});
										cache.evict({fieldName: 'movies:{}'});
									},
								})
									.then(async () => {
										if (typeof router.query.next === 'string') {
											await router.push(router.query.next);
										} else {
											await router.push('/confirm');
										}
									})
									.catch((e: any) => {
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
									<p className="text-sm text-blueGray-400 mb-6">Sign Up</p>
									<div className="flex -mx-3">
										<div className="flex w-1/2 px-3">
											<div className="flex w-full mb-4 px-4 bg-blueGray-50 rounded">
												<InputField type="text" name="displayname" placeholder="Display Name" />
											</div>
										</div>
										<div className="flex w-1/2 px-3">
											<div className="flex w-full mb-4 px-4 bg-blueGray-50 rounded">
												<InputField type="text" name="username" placeholder="Username" />
											</div>
										</div>
									</div>
									<div className="flex mb-4 px-4 bg-blueGray-50 rounded">
										<InputField type="email" name="email" placeholder="name@email.com" />
									</div>
									<div className="flex mb-6 px-4 bg-blueGray-50 rounded">
										<InputField type="password" name="password" placeholder="Enter your password" />
									</div>
									<button
										type="submit"
										className="block w-full p-4 text-center text-xs text-white font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded"
									>
										{isSubmitting ? 'Loading...' : 'Sign Up'}
									</button>
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
