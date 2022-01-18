import { Sidebar } from '@components/Sidebar';
import { motion } from 'framer-motion';
import React from 'react';

const pageVariants = {
	initial: {
		y: -100,
		opacity: 0,
	},
	in: {
		y: 0,
		opacity: 1,
	},
	out: {
		y: -100,
		opacity: 0,
	},
};
const pageTransition = {
	type: 'tween',
	ease: 'anticipate',
	duration: 0.4,
};

export const Layout: React.FC = ({ children }) => (
		<div className="relative">
			<div className="fixed min-h-screen inset-0" style={{ width: 100 }}>
				<Sidebar />
			</div>
			<div className="p-5 min-h-screen" style={{ marginLeft: 100 }}>
				<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
					{children}
				</motion.div>
			</div>
		</div>
	);
