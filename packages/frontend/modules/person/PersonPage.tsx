import {IconButton} from '@components/IconButton';
import {Loading} from '@components/Loading';
import {Poster} from '@components/Poster';
import {usePersonQuery} from 'generated/graphql';
import {useGetIntId} from 'hooks/useGetIntId';
import Link from 'next/link';
import React from 'react';
import {AiOutlineEdit} from 'react-icons/ai';
import {useVerifyLoggedIn} from '../auth/useVerifyLoggedIn';
import {Layout} from '../layouts/Layout';

export const PersonPage: React.FC = () => {
	useVerifyLoggedIn();

	const personId: number = useGetIntId();
	const {data} = usePersonQuery({
		skip: personId === -1,
		variables: {
			personId,
		},
	});

	if (!data?.person) return <Loading />;

	return (
		<Layout>
			<div className="container px-4 mx-auto">
				<div className="max-w-2xl mx-auto mb-6">
					<div className="flex flex-col items-center text-center mb-6">
						<h2 className="text-2xl md:text-4xl my-2 font-bold font-heading">{data?.person?.name}</h2>
						<div className="flex space-x-5">
							<Link href={`/person/edit/${personId}`}>
								<a>
									<IconButton icon={AiOutlineEdit} />
								</a>
							</Link>
						</div>
					</div>
				</div>
				<div className="flex items-center justify-center max-w-5xl mx-auto mb-8">
					<Poster src={data?.person?.poster} />
				</div>
				<div className="text-center max-w-2xl mx-auto">
					<p className="mb-6 leading-loose text-blueGray-400">{data?.person?.bio}</p>
				</div>
			</div>
		</Layout>
	);
};
