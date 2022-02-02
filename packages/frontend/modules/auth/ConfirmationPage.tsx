import { Button } from '@components/Button';
import { ErrorModal } from '@components/Modal/ErrorModal';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useConfirmMutation } from '../../generated/graphql';
import { useVerifyLoggedIn } from './useVerifyLoggedIn';

export const ConfirmationPage: React.FC = () => {
	useVerifyLoggedIn();

	const [confirm] = useConfirmMutation();

	const router = useRouter();
	const { token } = router.query;

	const [isOpen, setIsOpen] = useState(false);
	const [modalError, setModalError] = useState('');

	return (
		<>
			<ErrorModal error={modalError} isOpen={isOpen} setIsOpen={setIsOpen} />
			<div className="h-screen w-full grid place-items-center bg-white">
				<Button
					onClick={async () => {
						await confirm({
							variables: {
								// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
								token: token!.toString(),
							},
						}).then(async res => {
							if (res.data?.confirm) {
								await router.push('/');
							} else {
								// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
								setModalError(`Token: ${token?.toString()}. Please try again!`);
								setIsOpen(true);
							}
						});
					}}
				>
					Test
				</Button>
			</div>
		</>
	);
};
