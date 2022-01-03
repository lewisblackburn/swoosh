import {Dialog, Transition} from '@headlessui/react';
import {QueryMode, useMoviesLazyQuery} from 'generated/graphql';
import React, {Fragment, useEffect, useState} from 'react';
import {FaPlus} from 'react-icons/fa';
import {Item} from './Item';

export const Palette: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [predicate, setPredicate] = useState('');

	const [findMovie] = useMoviesLazyQuery({
		ssr: false,
		fetchPolicy: 'no-cache',
		variables: {
			where: {
				title: {
					contains: predicate,
					mode: QueryMode.Insensitive,
				},
			},
		},
	});

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'k' && e.metaKey) {
				e.preventDefault();
				setIsOpen(prev => !prev);
			}
		};

		window.addEventListener('keydown', handleKeyDown);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	const [commands, setCommands] = useState([
		{
			key: 'query',
			label: 'Query',
			commands: [
				{
					key: 'find-movie',
					label: 'Find Movie',
					shortcut: ['⇧', '⌘', 'N'],
					command: async () => {
						closeModal();
						await findMovie()
							.then(res => {
								const test = res.data?.movies?.map(movie => ({
									key: movie.id,
									label: movie.title,
									shortcut: [],
									// eslint-disable-next-line no-return-assign
									command: () => (window.location.href = `/movie/${movie.id}`),
									icon: FaPlus,
								}));
								setCommands([
									{
										key: 'find-movie',
										label: 'Find Movie',
										commands: test,
									},
								]);
							})
							.finally(() => setTimeout(() => openModal(), 500));
					},
					icon: FaPlus,
				},
				{
					key: 'find-person',
					label: 'Find Person',
					shortcut: ['⇧', '⌘', 'N'],
					command: () => false,
					icon: FaPlus,
				},
			],
		},
		{
			key: 'settings',
			label: 'Settings',
			commands: [
				{
					key: 'acccount',
					label: 'My Account',
					shortcut: ['⇧', '⌘', 'N'],
					command: () => false,
					icon: FaPlus,
				},
				{
					key: 'edit-profile',
					label: 'Edit Profile',
					shortcut: ['⇧', '⌘', 'N'],
					command: () => false,
					icon: FaPlus,
				},
				{
					key: 'preferences',
					label: 'Preferences',
					shortcut: ['⇧', '⌘', 'N'],
					command: () => false,
					icon: FaPlus,
				},
			],
		},
	]);

	const test = commands.filter(command =>
		command.commands ? true : predicate ? JSON.stringify(command).toLowerCase().includes(predicate.toLowerCase()) : true
	);
	console.log(test);

	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={() => closeModal()}>
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
						<Dialog.Overlay className="fixed inset-0" />
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
						<div className="inline-block w-full border border-gray-100 shadow-xl max-w-md overflow-hidden text-left align-middle transition-all transform bg-white rounded-lg">
							<input
								autoFocus
								className="w-full px-4 py-3 border-b border-gray-100 focus:outline-none"
								placeholder="Search"
								type="text"
								value={predicate}
								onChange={e => setPredicate(e.currentTarget.value)}
							/>
							<div className="h-48 overflow-y-scroll">
								{commands.map(category => (
									<div key={category.key} className="border-b border-gray-100">
										<h1 className="px-3 py-2 text-sm text-gray-500">{category.label}</h1>
										{category.commands.map(command => {
											return (
												<Item
													key={command.key}
													icon={command.icon}
													shortcut={command.shortcut}
													command={command.command}
												>
													{command.label}
												</Item>
											);
										})}
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
