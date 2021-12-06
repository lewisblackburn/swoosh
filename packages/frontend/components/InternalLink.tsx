import React from 'react'
import Link from "next/link"

interface InternalLinkProps {
    href: string;
    className?: string;
}

export const InternalLink: React.FC<InternalLinkProps> = ({ href, children, className }) => {
    return (
        <Link href={href}>
            <a className={`flex text-xl title-font font-medium items-center text-gray-900 ${className}`}>
                {children}
            </a>
        </Link>
    )
}
