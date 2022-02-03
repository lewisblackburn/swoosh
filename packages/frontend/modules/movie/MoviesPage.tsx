import {Card} from '@components/Card';
import {Icon} from '@components/Icon';
import {Poster} from '@components/Poster';
import {useVerifyLoggedIn} from '@modules/auth/useVerifyLoggedIn';
import {Layout} from '@modules/layouts/Layout';
import {SortOrder, useMoviesQuery} from 'generated/graphql';
import Link from 'next/link';
import React, {useState} from 'react';
import {AiOutlinePlus} from 'react-icons/ai';
import Select from 'react-select';

const options = [
	{value: SortOrder.Desc, label: 'Descending'},
	{value: SortOrder.Asc, label: 'Ascending'},
];

export const MoviesPage: React.FC = () => {
	useVerifyLoggedIn();

	const [selectedOption, setSelectedOption] = useState(options[0]);

	const handleChange = (selectedOption: any) => setSelectedOption(selectedOption);

	const {data} = useMoviesQuery({
		variables: {
			orderBy: {
				createdAt: selectedOption.value,
				rating: selectedOption.value,
				title: selectedOption.value,
				runtime: selectedOption.value,
			},
		},
	});

	return (
		<Layout>
			<section>
				<div className="container px-4 mx-auto">
					<div className="max-w-lg mx-auto mb-12 text-center">
						<span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl">
							Movies
						</span>
					</div>
					<div className="grid place-items-center py-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-10">
						<Select value={selectedOption} options={options} onChange={handleChange} />{' '}
						<Select value={selectedOption} options={options} onChange={handleChange} />
						<Select value={selectedOption} options={options} onChange={handleChange} />
						<Select value={selectedOption} options={options} onChange={handleChange} />
						<Select value={selectedOption} options={options} onChange={handleChange} />
						<Select value={selectedOption} options={options} onChange={handleChange} />
					</div>
					<div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-10">
						<Link href="/movie/create">
							<a className="w-full">
								<Card>
									<Icon icon={AiOutlinePlus} className="w-6 h-6" />
								</Card>
							</a>
						</Link>
						{data?.movies?.map(movie => (
							// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
							<Link key={movie.id} href={`/movie/${movie.id}` ?? 0}>
								<a>
									<Poster src={movie.poster} />
								</a>
							</Link>
						))}
					</div>
				</div>
			</section>
		</Layout>
	);
};
