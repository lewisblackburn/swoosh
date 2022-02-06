import {Button} from '@components/Button';
import {useRouter} from 'next/router';
import React from 'react';

const NotFound: React.FC = () => {
	const router = useRouter();

	return (
		<section className="grid place-items-center w-full h-screen xs:p-0 p-5">
			<div className="flex flex-col space-y-5 container text-center">
				<span className="text-4xl text-blue-600 font-bold font-heading">Error 404</span>
				<h2 className="mb-2 text-4xl font-bold font-heading">Something went wrong!</h2>
				<p className="mb-6 text-blueGray-400">Sorry, but we are unable to open this page.</p>
				<div>
					<Button onClick={async () => router.push('/home')}>Go back to Homepage</Button>
					<Button variant="secondary" onClick={() => location.reload()}>
						Try Again
					</Button>
				</div>
			</div>
		</section>
	);
};

export default NotFound;
