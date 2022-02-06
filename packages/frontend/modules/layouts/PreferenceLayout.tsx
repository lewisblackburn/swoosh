import React from 'react';
import {motion} from 'framer-motion';
import {Icon} from '@components/Icon';
import {
	AiOutlineAccountBook,
	AiOutlineBell,
	AiOutlineBlock,
	AiOutlineDelete,
	AiOutlineMonitor,
	AiOutlineProfile,
} from 'react-icons/ai';

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

export const PreferencesLayout: React.FC = ({children}) => (
	<motion.div
		className="p-10"
		initial="initial"
		animate="in"
		exit="out"
		variants={pageVariants}
		transition={pageTransition}
	>
		<div className="containermx-auto">
			<div className="flex flex-wrap">
				<div className="w-full lg:w-3/12 mb-8 lg:mb-0">
					<div className="p-2 bg-white rounded">
						<ul className="text-sm">
							<li>
								<a
									className="flex p-3 items-center font-medium bg-indigo-50 rounded text-indigo-500"
									href="#"
								>
									<Icon icon={AiOutlineProfile} className="w-5 h-5 mr-3" />
									<span>Edit Profile</span>
								</a>
							</li>
							<li>
								<a
									className="flex p-3 items-center font-medium hover:bg-indigo-50 rounded text-gray-500 hover:text-indigo-500"
									href="#"
								>
									<Icon icon={AiOutlineAccountBook} className="w-5 h-5 mr-3" />
									<span>Account</span>
								</a>
							</li>
							<li>
								<a
									className="flex p-3 items-center font-medium hover:bg-indigo-50 rounded text-gray-500 hover:text-indigo-500"
									href="#"
								>
									<Icon icon={AiOutlineBell} className="w-5 h-5 mr-3" />
									<span>Notificaiton</span>
								</a>
							</li>
							<li>
								<a
									className="flex p-3 items-center font-medium hover:bg-indigo-50 rounded text-gray-500 hover:text-indigo-500"
									href="#"
								>
									<Icon icon={AiOutlineBlock} className="w-5 h-5 mr-3" />
									<span>Blocked Users</span>
								</a>
							</li>
							<li>
								<a
									className="flex p-3 items-center font-medium hover:bg-indigo-50 rounded text-gray-500 hover:text-indigo-500"
									href="#"
								>
									<Icon icon={AiOutlineMonitor} className="w-5 h-5 mr-3" />
									<span>Streaming Services</span>
								</a>
							</li>
							<li>
								<a
									className="flex p-3 items-center font-medium hover:bg-indigo-50 rounded text-gray-500 hover:text-indigo-500"
									href="#"
								>
									<Icon icon={AiOutlineDelete} className="w-5 h-5 mr-3" />
									<span>Delete Account</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="w-full lg:w-9/12 px-4">
					<div className="flex items-center mb-8 px-3">{children}</div>
				</div>
			</div>
		</div>
	</motion.div>
);
