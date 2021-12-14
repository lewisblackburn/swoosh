import {Dialog, Transition} from '@headlessui/react';
import React, {Fragment, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import InputField from '@components/Form/InputField';
import {Formik, FormikHelpers} from 'formik';

interface AddActorProps {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface FindActorProps {
	search: string;
}

export const AddActor: React.FC<AddActorProps> = ({open = false, setOpen}) => {
	return (
		<Dialog
			open={open}
			onClose={setOpen}
			as="div"
			className="fixed inset-0 z-10 flex items-center justify-center overflow-y-auto bg-gray-900"
		>
			<div className="flex flex-col bg-gray-800 text-white w-96 py-8 px-4 text-center">
				<Dialog.Overlay />

				<Dialog.Title className="">Create Actor</Dialog.Title>
				<Dialog.Description className="">This is a test</Dialog.Description>

				<Formik
					initialValues={{
						email: '',
						password: '',
					}}
					onSubmit={async (values: Values, {setSubmitting, setErrors}: FormikHelpers<Values>) => {
						setSubmitting(true);
						const response = await login({
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
								cache.evict({fieldName: 'posts:{}'});
							},
						})
							.then(() => {
								if (typeof router.query.next === 'string') {
									router.push(router.query.next);
								} else {
									router.push('/');
								}
							})
							.catch((e: any) => {
								// if graphql validation error
								if (e.graphQLErrors[0].extensions.exception.validationErrors) setErrors(toErrorMap(e));
								// else toast other errors
								else console.log(e.message);
							});
						setSubmitting(false);
					}}
				>
					{({isSubmitting, errors, touched}) => (
						<Form className="w-full container">
							<InputField
								name="email"
								placeholder="email@provider.tdl"
								touched={touched.email}
								errors={errors.email}
								type="email"
							/>
							<InputField
								name="password"
								placeholder="password"
								touched={touched.password}
								errors={errors.password}
								type="password"
							/>
							<Button type="submit" loading={isSubmitting}>
								Login
							</Button>
						</Form>
					)}
				</Formik>

				<button
					className="m-4 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
					onClick={() => setOpen(false)}
				>
					Cancel
				</button>
			</div>
		</Dialog>
	);
};
