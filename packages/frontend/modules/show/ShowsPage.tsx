import {Grid} from '@components/Grid';
import {Poster} from '@components/Poster';
import {useVerifyLoggedIn} from '@modules/auth/useVerifyLoggedIn';
import {Layout} from '@modules/layouts/Layout';
import {SortOrder, useShowsQuery} from 'generated/graphql';
import Link from 'next/link';
import React, {useState} from 'react';
import Select from 'react-select';

const options = [
	{value: SortOrder.Desc, label: 'Descending'},
	{value: SortOrder.Asc, label: 'Ascending'},
];

export const ShowsPage: React.FC = () => {
	useVerifyLoggedIn();

	const [selectedOption, setSelectedOption] = useState(options[0]);

	const handleChange = (selectedOption: any) => setSelectedOption(selectedOption);

	const {data} = useShowsQuery({
		variables: {
			orderBy: {
				createdAt: SortOrder.Desc,
			},
		},
	});

	return (
		<Layout>
			<section>
				<div className="container px-4 mx-auto">
					<div className="max-w-lg mx-auto mb-12 text-center">
						<span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl">
							Television
						</span>
					</div>
					<div className="flex flex-col space-y-5">
						<Grid>
							<Select value={selectedOption} options={options} onChange={handleChange} />
							<Select value={selectedOption} options={options} onChange={handleChange} />
							<Select value={selectedOption} options={options} onChange={handleChange} />
							<Select value={selectedOption} options={options} onChange={handleChange} />
							<Select value={selectedOption} options={options} onChange={handleChange} />
						</Grid>
						<Grid>
							{data?.shows?.map(show => (
								// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
								<Link key={show.id} href={`/show/${show.id}` ?? -1}>
									<a>
										<Poster src={show.poster} />
									</a>
								</Link>
							))}
						</Grid>
					</div>
				</div>
			</section>
		</Layout>
	);
};
