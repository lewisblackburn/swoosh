import {Dialog, Transition} from '@headlessui/react';
import {useRouter} from 'next/router';
import React, {Fragment, useEffect, useState} from 'react';

export const PaletteWrapper: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [predicate, setPredicate] = useState('');

	const router = useRouter();

	// eslint-disable-next-line @typescript-eslint/no-unsafe-return
	const close = () => setIsOpen(false);
	// eslint-disable-next-line @typescript-eslint/no-unsafe-return
	const toggle = () => setIsOpen((prev: boolean) => !prev);
	// eslint-disable-next-line @typescript-eslint/no-unsafe-return
	const search = (predicate: string): void => setPredicate(predicate);

	useEffect(() => {
		const handleKeyDown = async (e: KeyboardEvent) => {
			console.log(predicate);
			if (e.key === 'k' && e.metaKey) {
				e.preventDefault();
				toggle();
			}

			if (isOpen) {
				if (e.key === 'Enter') await router.push(`/search/${predicate}`);
			}
		};

		window.addEventListener('keydown', handleKeyDown);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [isOpen, predicate, router]);

	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={close}>
				<div className="min-h-screen px-4 text-center">
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-20" />
					</Transition.Child>

					{/* This element is to trick the browser into centering the modal contents. */}
					<span className="inline-block h-screen align-middle" aria-hidden="true">
						&#8203;
					</span>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95"
					>
						<div className="inline-block w-full border border-gray-100 shadow-xl max-w-2xl overflow-hidden text-left align-middle transition-all transform bg-white rounded-lg">
							<input
								autoFocus
								className="w-full px-4 py-3 border-b border-gray-100 focus:outline-none"
								placeholder="Search"
								type="text"
								value={predicate}
								onChange={e => search(e.currentTarget.value)}
							/>
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition>
	);
};
