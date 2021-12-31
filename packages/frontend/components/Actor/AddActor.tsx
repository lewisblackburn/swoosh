import {Dialog, Transition} from '@headlessui/react';
import React, {Fragment, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import InputField from '@components/Form/InputField';
import {Formik, FormikHelpers} from 'formik';
import {Career, usePeopleQuery} from 'generated/graphql';

interface AddActorProps {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Values {
	search: string;
}

export const AddActor: React.FC<AddActorProps> = ({open = false, setOpen}) => {
	const [search, setSearch] = useState('');
	const {data, loading} = usePeopleQuery({
		variables: {
			where: {
				career: {
					has: Career.Actor,
				},
				name: {
					contains: search,
				},
			},
		},
	});

	console.log(data, loading);

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
				put actor search form here with debounce
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
