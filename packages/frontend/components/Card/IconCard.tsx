import { Icon } from '@components/Icon';
import React from 'react';
import { IconType } from 'react-icons';
import { Card, CardProps } from './Card';

interface IconCardProps extends CardProps {
	icon: IconType;
}

export const IconCard: React.FC<IconCardProps> = ({ icon, ...props }) => {
	return (
		<Card {...props}>
			<Icon icon={icon} className="w-10 h-10 text-gray-300" />
		</Card>
	);
};
