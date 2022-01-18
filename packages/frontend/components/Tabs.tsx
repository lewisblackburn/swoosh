/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Tab } from '@headlessui/react';
import React from 'react';
import { InternalLink } from '.';
import { Thumbnail } from './Card/Thumbnail';

interface TabsProps {
	tabs: any;
}

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export const Tabs: React.FC<TabsProps> = ({ tabs }) => (
		<div className="grid place-items-center">
			<Tab.Group>
				<Tab.List className="flex max-w-md p-1 space-x-1 bg-gray-100 rounded-xl">
					{Object.keys(tabs).map(tab => (
						<Tab
							key={tab}
							className={({ selected }) =>
								classNames(
									'w-full py-2.5 px-6 text-sm leading-5 font-medium rounded-lg transition-all transform',
									selected ? 'bg-white shadow' : 'text-black bg-gray-100 hover:bg-white/[0.12]'
								)
							}
						>
							{tab}
						</Tab>
					))}
				</Tab.List>
				<Tab.Panels className="mt-2">
					{Object.values(tabs).map((items, idx) => (
						<Tab.Panel key={idx} className="w-full bg-white rounded-xl p-3 transition-all transform">
							<ul className="flex flex-wrap justify-center">
								{items.map((item: any) => (
									<div key={item.id}>
										<div className="p-5">
											{/*  eslint-disable-next-line @typescript-eslint/restrict-template-expressions */}
											<InternalLink href={`/movie/${item.id}`}>
												<Thumbnail size="medium" src={item.thumbnail} />
											</InternalLink>
										</div>
									</div>
								))}
							</ul>
						</Tab.Panel>
					))}
				</Tab.Panels>
			</Tab.Group>
		</div>
	);
