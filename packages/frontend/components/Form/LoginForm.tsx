import {Form, Formik, FormikHelpers} from 'formik';
import React, {useState} from 'react';
import {MeDocument, MeQuery, useLoginMutation} from '../../generated/graphql';
import {toErrorMap} from '../../lib/toErrorMap';
import {Button} from '../Button';
import {ErrorModal} from './ErrorModal';
import {FormLayout} from './FormLayout';
import InputField from './InputField';

interface Values {
	email: string;
	password: string;
}

export const LoginForm: React.FC = () => {
	const [login] = useLoginMutation();
	const [isOpen, setIsOpen] = useState(false);
	const [modalError, setModalError] = useState('');

	return (
		<>
			<ErrorModal error={modalError} isOpen={isOpen} setIsOpen={setIsOpen} />
			<FormLayout>
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
						<Form className="w-1/2 bg-white">
							<h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
							<p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>

							<InputField name="email" placeholder="email@provider.tdl" type="email" />
							<InputField name="password" placeholder="password" type="password" />
							<Button className="w-full" type="submit" loading={isSubmitting}>
								Login
							</Button>
						</Form>
					)}
				</Formik>
			</FormLayout>
		</>
	);
};
