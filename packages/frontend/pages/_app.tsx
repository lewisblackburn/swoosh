import React from 'react';
import {AppProps} from 'next/app';
import '../styles/index.css';
import {PaletteProvider} from '@components/Palette/PaletteProvider';
import {Toaster} from 'react-hot-toast';

export default function App({Component, pageProps}: AppProps) {
	return (
		<>
			<Toaster position="top-right" />
			<PaletteProvider />
			<Component {...pageProps} />
		</>
	);
}
