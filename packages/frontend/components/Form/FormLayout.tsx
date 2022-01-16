import React from 'react';

export const FormLayout: React.FC = ({ children }) => {
	return (
		<div className="h-screen flex">
			<div className="hidden w-1/2 xl:flex bg-gradient-to-tr from-blue-500 to-blue-800 i justify-around items-center">
				<div>
					<h1 className="text-white font-bold text-4xl font-sans">Swoosh</h1>
					<p className="text-white mt-1">The final entertainment database app</p>
				</div>
			</div>
			<div className="flex w-full xl:w-1/2 justify-center items-center bg-white">{children}</div>
		</div>
	);
};
