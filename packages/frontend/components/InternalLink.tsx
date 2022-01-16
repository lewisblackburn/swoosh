import Link from 'next/link';
import {useRouter} from 'next/router';
import React from 'react';

interface InternalLinkProps {
	href: string;
	className?: string;
}

export const InternalLink: React.FC<InternalLinkProps> = ({href, children, className}) => {
	return (
		<Link href={href}>
			{/* eslint-disable-next-line @typescript-eslint/restrict-template-expressions */}
			<a className={`${className}`}>{children}</a>
		</Link>
	);
};
