import React from 'react';
import Link from 'next/link';
import {FaPlus, FaSearch} from 'react-icons/fa';

export const Navigation: React.FC = () => {
	return (
		<nav className="bg-red-300 p-5">
			<div className="flex items-center justify-between">
				<ul className="flex items-center space-x-5 px-5">
					<div>SWOOSH</div>
					<li>
						<Link href="">
							Movies
						</Link>
					</li>
					<li>
						<Link href="">
							TV Shows
						</Link>
					</li>
					<li>
						<Link href="">
							Music
						</Link>
					</li>
					<li>
						<Link href="">
							Books
						</Link>
					</li>
					<li>
						<Link href="">
							People
						</Link>
					</li>
				</ul>
				<ul className="flex items-center space-x-5 px-5">
					<li>
						<FaPlus />
					</li>
					<li>
						language
					</li>
					<li>
						register/login
					</li>
					<li>
						<FaSearch />
					</li>
				</ul>
			</div>
		</nav>
	);
};
