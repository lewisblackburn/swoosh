import React from 'react';
import {AppProps} from 'next/app';
import '../styles/index.css';
import {PaletteProvider} from '@components/Palette/PaletteProvider';

export default function App({Component, pageProps}: AppProps) {
	return (
		<>
			<PaletteProvider />
			<Component {...pageProps} />
		</>
	);
}
