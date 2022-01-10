import {Button} from '@components/Button';
import {Modal, ModalProps} from '@components/Modal';
import {Dialog} from '@headlessui/react';
import React from 'react';

interface ErrorModalProps extends ModalProps {
	error: string;
}

export const ErrorModal: React.FC<ErrorModalProps> = ({error, ...props}) => {
	return (
		<Modal {...props}>
			<Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
				Error
			</Dialog.Title>
			<div className="mt-2">
				<p className="text-sm text-gray-500">{error}</p>
			</div>
			{/* eslint-disable-next-line @typescript-eslint/no-unsafe-return */}
			<Button className="mt-4" onClick={() => props.setIsOpen(false)}>
				Try Again
			</Button>
		</Modal>
	);
};
