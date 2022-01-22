/* eslint-disable react/button-has-type */
import React from 'react';
import {AiOutlineBell, AiOutlineLeft, AiOutlineRight, AiOutlineSetting} from 'react-icons/ai';
import {Icon} from './Icon';

export const Navbar: React.FC = () => {
	return (
		<nav className="flex items-center justify-between m-5 p-5">
			<div className="flex items-center space-x-2">
				<Icon icon={AiOutlineLeft} />
				<Icon icon={AiOutlineRight} />
			</div>

			<div className="flex items-center space-x-5">
				<Icon icon={AiOutlineBell} className="w-5 h-5" />
				<Icon icon={AiOutlineSetting} className="w-5 h-5" />
			</div>
		</nav>
	);
};
