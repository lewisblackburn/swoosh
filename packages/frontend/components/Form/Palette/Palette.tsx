import {Dialog, Transition} from '@headlessui/react';
import React, {Fragment} from 'react';
import {usePredicate} from 'stores/usePredicate';
import Option from 'types/option';

interface PaletteProps {
	options: Option[];
	isOpen: boolean;
	close: () => void;
}

export const Palette: React.FC<PaletteProps> = ({options, isOpen, close}) => {
	const {predicate, setPredicate} = usePredicate();

	// eslint-disable-next-line @typescript-eslint/no-unsafe-return
	const search = (predicate: string): void => setPredicate(predicate);

	// FIGURE OUT WHY FILTER ISN'T WORKING
	// I CAN STILL DO THE MOVIE PALETTE ON TOP OF THIS JUSTH HAVE DIFFERENT COMMAND TO OPEN IT

	// let filteredOptions = options.filter(option =>
	// 	option.commands.some(command => command.label.toLowerCase().includes(predicate.toLowerCase()))
	// );
	const filteredOptions = options.map(option =>
		option.commands.filter(command => command.label.toLowerCase().includes(predicate.toLowerCase()))
	);

	console.log(filteredOptions);

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
						<div className="inline-block w-full border border-gray-100 shadow-xl max-w-xl overflow-hidden text-left align-middle transition-all transform bg-white rounded-lg">
							<input
								autoFocus
								className="w-full px-4 py-3 border-b border-gray-100 focus:outline-none"
								placeholder="Search"
								type="text"
								value={predicate}
								onChange={e => search(e.currentTarget.value)}
							/>
							<div className="h-72 overflow-y-scroll">
								{options.map(option => (
									<div key={option.key}>
										<h1>{option.label}</h1>
										{option?.commands?.map((command, index) => (
											<div
												key={index}
												// eslint-disable-next-line no-return-assign
												// ref={(element: HTMLDivElement) => (itemsRef.current[command.key] = element)}
											>
												{command.label}
											</div>
										))}
									</div>
								))}
							</div>
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition>
	);
};
