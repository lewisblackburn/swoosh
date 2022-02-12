import {Button} from '@components/Button';
import InputField from '@components/Form/InputField';
import {Textarea} from '@components/Form/Textarea';
import {IconButton} from '@components/IconButton';
import {Loading} from '@components/Loading';
import {Modal} from '@components/Modal/Modal';
import {notify} from '@components/Notify';
import {PosterDiv} from '@components/PosterDiv';
import {Form, Formik, FormikHelpers} from 'formik';
import {
	AuthorsInBookDocument,
	BookDocument,
	BookQuery,
	BooksDocument,
	QueryMode,
	UploadType,
	useAuthorsInBookQuery,
	useBookQuery,
	useCreateAuthorInBookMutation,
	useDeleteAuthorInBookMutation,
	usePeopleQuery,
	useUpdateBookMutation,
	useUploadPosterMutation,
} from 'generated/graphql';
import useDebounce from 'hooks/useDebounce';
import {useGetIntId} from 'hooks/useGetIntId';
import handleInputClick from 'lib/handleInputClick';
import {useRouter} from 'next/router';
import React, {useEffect, useRef, useState} from 'react';
import {AiOutlineDelete, AiOutlinePlus} from 'react-icons/ai';
import {useVerifyLoggedIn} from '../auth/useVerifyLoggedIn';
import {Layout} from '../layouts/Layout';

interface TableProps {
	book: BookQuery | undefined;
}

const AuthorTable: React.FC<TableProps> = ({book}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [personId, setPersonId] = useState(-1);
	const [predicate, setPredicate] = useState('');
	const [predicateDebounced] = useDebounce(predicate, 500);

	const {data} = usePeopleQuery({
		fetchPolicy: 'no-cache',
		variables: {
			where: {
				name: {
					startsWith: predicateDebounced,
					mode: QueryMode.Insensitive,
				},
			},
			take: 20,
		},
	});

	const {data: authors} = useAuthorsInBookQuery({
		fetchPolicy: 'no-cache',
		variables: {
			bookId: book?.book?.id ?? -1,
		},
	});

	const [addAuthorInBook] = useCreateAuthorInBookMutation();
	const [removeAuthorInBook] = useDeleteAuthorInBookMutation();

	const addAuthorEvent = (personId: number) =>
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		addAuthorInBook({
			variables: {
				data: {
					book: {
						connect: {
							id: book?.book?.id,
						},
					},
					person: {
						connect: {
							id: personId,
						},
					},
				},
			},
			refetchQueries: [BookDocument, AuthorsInBookDocument],
		});

	const removeAuthorEvent = (personId: number) =>
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		removeAuthorInBook({
			variables: {
				where: {
					personId_bookId: {
						bookId: book?.book?.id ?? 0,
						personId,
					},
				},
			},
			refetchQueries: [BookDocument, AuthorsInBookDocument],
		});

	return (
		<>
			<Modal isOpen={isOpen} setIsOpen={setIsOpen}>
				<div className="flex items-center justify-between">
					<Button variant="secondary" className="mt-4" onClick={() => setIsOpen(false)}>
						Cancel
					</Button>
					<Button
						className="mt-4"
						onClick={() => {
							addAuthorEvent(personId);
							setIsOpen(false);
						}}
					>
						Submit
					</Button>
				</div>
			</Modal>
			<section className="py-8">
				<div className="container px-4 mx-auto">
					<div className="flex flex-wrap items-center mb-6">
						<h3 className="text-xl font-bold">Authors</h3>
						<div className="w-full md:w-auto my-6 md:my-0 flex items-center ml-auto  bg-white border rounded">
							<input
								className="pl-2 py-3 text-sm focus:outline-none"
								type="text"
								placeholder="Type to search..."
								onChange={e => setPredicate(e.target.value)}
							/>
						</div>
					</div>
					<div className="flex flex-col space-y-5">
						{data?.people?.map(person => (
							<div
								key={person.id}
								className="flex items-center justify-between pl-4 pr-6 py-4 bg-white shadow rounded"
							>
								<h1>{person.name}</h1>

								{authors?.book?.authors.some(author => author.personId === person.id) ? (
									<IconButton
										icon={AiOutlineDelete}
										onClick={() => {
											removeAuthorEvent(person.id);
										}}
									/>
								) : (
									<IconButton
										icon={AiOutlinePlus}
										onClick={() => {
											setIsOpen(true);
											setPersonId(person.id);
										}}
									/>
								)}
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

interface Values {
	title: string;
	description: string;
	released: any;
}

export const EditPage: React.FC = () => {
	useVerifyLoggedIn();

	const bookId = useGetIntId();
	const {data: book} = useBookQuery({
		fetchPolicy: 'no-cache',
		skip: bookId === -1,
		variables: {
			bookId,
		},
	});

	const router = useRouter();

	const [updateBook] = useUpdateBookMutation();

	const [uploadPoster] = useUploadPosterMutation();
	const [poster, setPoster] = useState();
	const posterInput = useRef(null as HTMLInputElement | null);
	const handlePosterChange = (event: any) => setPoster(event.target.files[0]);

	useEffect(() => {
		if (poster !== undefined) {
			uploadPoster({
				variables: {
					id: bookId,
					file: poster,
					type: UploadType.Book,
				},
				refetchQueries: [BookDocument],
			})
				.then(() => {
					notify('success', 'mutation', 'poster uploaded successfully');
				})
				.catch(() => {
					notify('error', 'mutation', 'poster upload failed');
				});
		}
	}, [poster, bookId, uploadPoster]);

	if (!book?.book) return <Loading />;

	return (
		<Layout>
			<Formik
				initialValues={{
					title: book?.book?.title ?? '',
					description: book?.book?.description ?? '',
					released: new Date(book?.book?.released ?? 0).toISOString().split('T')[0] ?? 0,
				}}
				onSubmit={async (values: Values, {setSubmitting}: FormikHelpers<Values>) => {
					setSubmitting(true);
					await updateBook({
						variables: {
							data: {
								title: {
									set: values.title,
								},
								description: {
									set: values.description,
								},
								released: {
									set: values.released,
								},
							},
							where: {
								id: book?.book?.id,
							},
						},
						refetchQueries: [BooksDocument],
					})
						.then(() => {
							// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
							notify('success', 'mutation', `${book.book?.title} updated successfully`);
						})
						.catch(() => {
							// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
							notify('error', 'mutation', `${book.book?.title} update failed`);
						})
						.then(() => {
							setSubmitting(false);
							router.back();
						});
				}}
			>
				{({isSubmitting}) => (
					<Form>
						<div className="container px-4 mx-auto">
							<div className="max-w-2xl mx-auto mb-6">
								<div className="flex flex-col items-center text-center mb-6">
									<InputField type="text" name="title" />
								</div>
							</div>
							<div className="flex items-center justify-center space-x-5 max-w-5xl mx-auto mb-8">
								<PosterDiv
									src={book?.book?.poster ?? ''}
									onClick={() => {
										handleInputClick(posterInput);
									}}
								/>
								<input
									ref={posterInput}
									type="file"
									id="file"
									accept="images"
									style={{display: 'none'}}
									onChange={handlePosterChange}
								/>
							</div>
							<div className="max-w-2xl mx-auto">
								<Textarea name="description" />
								<InputField type="date" name="released" />
							</div>
						</div>
						<AuthorTable book={book} />
						<section className="py-20">
							<div className="container px-4 mx-auto text-center">
								<div className="flex space-x-5 justify-center">
									<Button type="submit">{isSubmitting ? 'Submitting...' : 'Save changes'}</Button>
									<Button variant="secondary" onClick={() => history.go(-1)}>
										Cancel
									</Button>
								</div>
							</div>
						</section>
					</Form>
				)}
			</Formik>
		</Layout>
	);
};
