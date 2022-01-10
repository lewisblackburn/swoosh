import {options} from 'lib/options';
import React, {useEffect, useState} from 'react';
import {Palette} from './Palette';

export const PaletteWrapper: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	// eslint-disable-next-line @typescript-eslint/no-unsafe-return
	// const open = () => setIsOpen(true);
	// eslint-disable-next-line @typescript-eslint/no-unsafe-return
	const close = () => setIsOpen(false);
	// eslint-disable-next-line @typescript-eslint/no-unsafe-return
	const toggle = () => setIsOpen((prev: boolean) => !prev);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'k' && e.metaKey) {
				e.preventDefault();
				toggle();
			}
		};

		window.addEventListener('keydown', handleKeyDown);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	return <Palette options={options} isOpen={isOpen} close={close} />;
};
