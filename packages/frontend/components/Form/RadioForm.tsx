import {Icon} from '@components/Icon';
import {RadioGroup} from '@headlessui/react';
import React, {useState} from 'react';
import {AiFillCheckCircle} from 'react-icons/ai';

interface RadioForm {}

const plans = [
	{
		name: 'Preferences',
	},
	{
		name: 'Profile',
	},
	{
		name: 'Delete Account',
	},
];

export const RadioForm: React.FC<RadioForm> = ({}) => {
	const [selected, setSelected] = useState(plans[0]);

	return (
		<div className="w-96">
			<RadioGroup value={selected} onChange={setSelected}>
				<RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
				<div className="space-y-2">
					{plans.map(plan => (
						<RadioGroup.Option
							key={plan.name}
							value={plan}
							className={({active, checked}) =>
								`${active ? 'ring-2 ring-offset-2 ring-offset-sky-300 ring-white ring-opacity-60' : ''}
                  ${checked ? 'bg-sky-900 bg-opacity-75 text-white' : 'bg-white'}
                    relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
							}
						>
							{({checked}) => (
								<div className="flex items-center justify-between w-full">
									<div className="flex items-center">
										<div className="text-sm">
											<RadioGroup.Label as="p" className={`font-medium  ${checked ? 'text-white' : 'text-gray-900'}`}>
												{plan.name}
											</RadioGroup.Label>
										</div>
									</div>
									{checked && (
										<div className="flex-shrink-0 text-white">
											<Icon icon={AiFillCheckCircle} />
										</div>
									)}
								</div>
							)}
						</RadioGroup.Option>
					))}
				</div>
			</RadioGroup>
		</div>
	);
};
