import React from 'react';
import {AppProps} from 'next/app';
import {PaletteWrapper} from '@components/Palette/PaletteWrapper';
import '../styles/index.css';

export default function App({Component, pageProps}: AppProps) {
	return (
		<>
			<PaletteWrapper />
			<Component {...pageProps} />
		</>
	);
}
