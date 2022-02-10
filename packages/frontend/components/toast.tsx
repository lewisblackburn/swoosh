import toast from 'react-hot-toast';
import React from 'react';
import {Transition} from '@headlessui/react';

export const notify = (message: string) =>
	toast.custom(t => (
		<Transition
			as="div"
			show={t.visible}
			className="p-5 w-full bg-red-300 rounded"
			enter="transition-opacity duration-75"
			enterFrom="opacity-0"
			enterTo="opacity-100"
			leave="transition-opacity duration-150"
			leaveFrom="opacity-100"
			leaveTo="opacity-0"
		>
			{message}
		</Transition>
	));
