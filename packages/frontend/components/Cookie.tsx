import useLocalStorage from 'hooks/useLocalStorage';
import React from 'react';

export const Cookie: React.FC = () => {
	const [accepted, setAccepted] = useLocalStorage<boolean>('accepted', false);

	if (accepted) return null;

	return (
		<div className="fixed bottom-0 inset-x-0 z-50 px-10 pb-16">
			<div className="relative w-full px-20 py-8 bg-white rounded-xl">
				<div
					className="absolute top-0 -mt-6 left-0 ml-12 w-14 h-14 bg-white"
					style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}}
				/>
				<div className="flex flex-wrap items-center -mx-4">
					<div className="w-full md:w-1/2 lg:w-2/3 px-4 mb-4 lg:mb-0">
						<h3 className="mb-2 text-2xl font-bold font-heading">Cookie Policy</h3>
						<p className="text-gray-500 leading-loose">
							By clicking “Accept”, you agree to the storing of cookies on your device to enhance site
							navigation. Curabitur dolor elit, euismod eu mi vel, venenatis cras eu tellus augue.
						</p>
					</div>
					<div className="w-full md:w-1/2 lg:w-1/3 px-4 flex">
						<a
							className="inline-flex ml-auto items-center px-8 py-4 mr-2 text-lg hover:underline font-bold"
							href="#"
						>
							<span>More</span>
							<svg
								className="ml-3 w-6 h-4"
								width={27}
								height={15}
								viewBox="0 0 27 15"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M26.0851 7.66795L19.398 14.3551L18.5621 13.5192L24.242 7.8393L0.590432 7.84348L0.590431 6.66488L24.242 6.6607L18.98 1.39877L19.8159 0.562874L26.0851 6.83205C26.3159 7.06289 26.3159 7.43711 26.0851 7.66795Z"
									fill="#161617"
								/>
							</svg>
						</a>
						<a
							className="inline-block px-12 py-4 text-lg bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition duration-200"
							href="#"
							// eslint-disable-next-line @typescript-eslint/no-unsafe-return
							onClick={() => setAccepted(true)}
						>
							Accept
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
