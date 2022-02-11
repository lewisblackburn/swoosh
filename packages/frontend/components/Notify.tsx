import {motion} from 'framer-motion';
import React from 'react';
import toast from 'react-hot-toast';
import {
	AiOutlineCheckCircle,
	AiOutlineFall,
	AiOutlineInfoCircle,
	AiOutlineStop,
	AiOutlineWarning,
} from 'react-icons/ai';
import {Icon} from './Icon';

const variants = {
	open: {opacity: 1, x: 0},
	closed: {opacity: 0, x: '100%'},
};

const readable = {
	success: 'successful',
	info: 'informative',
	error: 'failed',
};

const convertIcon = {
	success: <Icon icon={AiOutlineCheckCircle} className="text-green-500 w-5 h-5" />,
	info: <Icon icon={AiOutlineInfoCircle} className="text-blue-500 w-5 h-5" />,
	error: <Icon icon={AiOutlineWarning} className="text-orange-500 w-5 h-5" />,
};

export const notify = (type: 'success' | 'info' | 'error', action: 'query' | 'mutation' | 'delete', message: string) =>
	toast.custom(t => (
		<motion.div
			animate={t.visible ? 'open' : 'closed'}
			style={{x: '100%'}}
			variants={variants}
			className="flex space-x-2 pl-4 pr-32 py-3 leading-none text-sm cursor-pointer font-semibold bg-white text-gray-600 hover:text-gray-700 hover:bg-blueGray-100 border border-bray-200 hover:border-gray-300 rounded"
			onClick={() => {
				toast.dismiss(t.id);
			}}
		>
			{convertIcon[type]}
			<div className="flex flex-col space-y-2 mt-0.5">
				<h1>
					<span className="capitalize">{action}</span> {readable[type]}
				</h1>
				<p>{message}</p>
			</div>
		</motion.div>
	));
