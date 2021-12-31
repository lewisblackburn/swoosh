import {gql} from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends Record<string, unknown>> = {[K in keyof T]: T[K]};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {[SubKey in K]?: Maybe<T[SubKey]>};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {[SubKey in K]: Maybe<T[SubKey]>};
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	/** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
	DateTime: any;
	/** The `Upload` scalar type represents a file upload. */
	Upload: any;
};

export type ActorInMovie = {
	__typename?: 'ActorInMovie';
	movie: Movie;
	movieId: Scalars['Int'];
	person: Person;
	personId: Scalars['Int'];
	role: Scalars['String'];
};

export type ActorInMovieCreateManyMovieInput = {
	personId: Scalars['Int'];
	role: Scalars['String'];
};

export type ActorInMovieCreateManyMovieInputEnvelope = {
	data: ActorInMovieCreateManyMovieInput[];
	skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ActorInMovieCreateManyPersonInput = {
	movieId: Scalars['Int'];
	role: Scalars['String'];
};

export type ActorInMovieCreateManyPersonInputEnvelope = {
	data: ActorInMovieCreateManyPersonInput[];
	skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ActorInMovieCreateNestedManyWithoutMovieInput = {
	connect?: InputMaybe<ActorInMovieWhereUniqueInput[]>;
	connectOrCreate?: InputMaybe<ActorInMovieCreateOrConnectWithoutMovieInput[]>;
	create?: InputMaybe<ActorInMovieCreateWithoutMovieInput[]>;
	createMany?: InputMaybe<ActorInMovieCreateManyMovieInputEnvelope>;
};

export type ActorInMovieCreateNestedManyWithoutPersonInput = {
	connect?: InputMaybe<ActorInMovieWhereUniqueInput[]>;
	connectOrCreate?: InputMaybe<ActorInMovieCreateOrConnectWithoutPersonInput[]>;
	create?: InputMaybe<ActorInMovieCreateWithoutPersonInput[]>;
	createMany?: InputMaybe<ActorInMovieCreateManyPersonInputEnvelope>;
};

export type ActorInMovieCreateOrConnectWithoutMovieInput = {
	create: ActorInMovieCreateWithoutMovieInput;
	where: ActorInMovieWhereUniqueInput;
};

export type ActorInMovieCreateOrConnectWithoutPersonInput = {
	create: ActorInMovieCreateWithoutPersonInput;
	where: ActorInMovieWhereUniqueInput;
};

export type ActorInMovieCreateWithoutMovieInput = {
	person: PersonCreateNestedOneWithoutMoviesInput;
	role: Scalars['String'];
};

export type ActorInMovieCreateWithoutPersonInput = {
	movie: MovieCreateNestedOneWithoutActorsInput;
	role: Scalars['String'];
};

export type ActorInMovieListRelationFilter = {
	every?: InputMaybe<ActorInMovieWhereInput>;
	none?: InputMaybe<ActorInMovieWhereInput>;
	some?: InputMaybe<ActorInMovieWhereInput>;
};

export type ActorInMovieOrderByRelationAggregateInput = {
	_count?: InputMaybe<SortOrder>;
};

export type ActorInMovieOrderByWithRelationInput = {
	movie?: InputMaybe<MovieOrderByWithRelationInput>;
	movieId?: InputMaybe<SortOrder>;
	person?: InputMaybe<PersonOrderByWithRelationInput>;
	personId?: InputMaybe<SortOrder>;
	role?: InputMaybe<SortOrder>;
};

export type ActorInMoviePersonIdMovieIdCompoundUniqueInput = {
	movieId: Scalars['Int'];
	personId: Scalars['Int'];
};

export enum ActorInMovieScalarFieldEnum {
	MovieId = 'movieId',
	PersonId = 'personId',
	Role = 'role'
}

export type ActorInMovieScalarWhereInput = {
	AND?: InputMaybe<ActorInMovieScalarWhereInput[]>;
	NOT?: InputMaybe<ActorInMovieScalarWhereInput[]>;
	OR?: InputMaybe<ActorInMovieScalarWhereInput[]>;
	movieId?: InputMaybe<IntFilter>;
	personId?: InputMaybe<IntFilter>;
	role?: InputMaybe<StringFilter>;
};

export type ActorInMovieUpdateManyMutationInput = {
	role?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ActorInMovieUpdateManyWithWhereWithoutMovieInput = {
	data: ActorInMovieUpdateManyMutationInput;
	where: ActorInMovieScalarWhereInput;
};

export type ActorInMovieUpdateManyWithWhereWithoutPersonInput = {
	data: ActorInMovieUpdateManyMutationInput;
	where: ActorInMovieScalarWhereInput;
};

export type ActorInMovieUpdateManyWithoutMovieInput = {
	connect?: InputMaybe<ActorInMovieWhereUniqueInput[]>;
	connectOrCreate?: InputMaybe<ActorInMovieCreateOrConnectWithoutMovieInput[]>;
	create?: InputMaybe<ActorInMovieCreateWithoutMovieInput[]>;
	createMany?: InputMaybe<ActorInMovieCreateManyMovieInputEnvelope>;
	delete?: InputMaybe<ActorInMovieWhereUniqueInput[]>;
	deleteMany?: InputMaybe<ActorInMovieScalarWhereInput[]>;
	disconnect?: InputMaybe<ActorInMovieWhereUniqueInput[]>;
	set?: InputMaybe<ActorInMovieWhereUniqueInput[]>;
	update?: InputMaybe<ActorInMovieUpdateWithWhereUniqueWithoutMovieInput[]>;
	updateMany?: InputMaybe<ActorInMovieUpdateManyWithWhereWithoutMovieInput[]>;
	upsert?: InputMaybe<ActorInMovieUpsertWithWhereUniqueWithoutMovieInput[]>;
};

export type ActorInMovieUpdateManyWithoutPersonInput = {
	connect?: InputMaybe<ActorInMovieWhereUniqueInput[]>;
	connectOrCreate?: InputMaybe<ActorInMovieCreateOrConnectWithoutPersonInput[]>;
	create?: InputMaybe<ActorInMovieCreateWithoutPersonInput[]>;
	createMany?: InputMaybe<ActorInMovieCreateManyPersonInputEnvelope>;
	delete?: InputMaybe<ActorInMovieWhereUniqueInput[]>;
	deleteMany?: InputMaybe<ActorInMovieScalarWhereInput[]>;
	disconnect?: InputMaybe<ActorInMovieWhereUniqueInput[]>;
	set?: InputMaybe<ActorInMovieWhereUniqueInput[]>;
	update?: InputMaybe<ActorInMovieUpdateWithWhereUniqueWithoutPersonInput[]>;
	updateMany?: InputMaybe<ActorInMovieUpdateManyWithWhereWithoutPersonInput[]>;
	upsert?: InputMaybe<ActorInMovieUpsertWithWhereUniqueWithoutPersonInput[]>;
};

export type ActorInMovieUpdateWithWhereUniqueWithoutMovieInput = {
	data: ActorInMovieUpdateWithoutMovieInput;
	where: ActorInMovieWhereUniqueInput;
};

export type ActorInMovieUpdateWithWhereUniqueWithoutPersonInput = {
	data: ActorInMovieUpdateWithoutPersonInput;
	where: ActorInMovieWhereUniqueInput;
};

export type ActorInMovieUpdateWithoutMovieInput = {
	person?: InputMaybe<PersonUpdateOneRequiredWithoutMoviesInput>;
	role?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ActorInMovieUpdateWithoutPersonInput = {
	movie?: InputMaybe<MovieUpdateOneRequiredWithoutActorsInput>;
	role?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ActorInMovieUpsertWithWhereUniqueWithoutMovieInput = {
	create: ActorInMovieCreateWithoutMovieInput;
	update: ActorInMovieUpdateWithoutMovieInput;
	where: ActorInMovieWhereUniqueInput;
};

export type ActorInMovieUpsertWithWhereUniqueWithoutPersonInput = {
	create: ActorInMovieCreateWithoutPersonInput;
	update: ActorInMovieUpdateWithoutPersonInput;
	where: ActorInMovieWhereUniqueInput;
};

export type ActorInMovieWhereInput = {
	AND?: InputMaybe<ActorInMovieWhereInput[]>;
	NOT?: InputMaybe<ActorInMovieWhereInput[]>;
	OR?: InputMaybe<ActorInMovieWhereInput[]>;
	movie?: InputMaybe<MovieRelationFilter>;
	movieId?: InputMaybe<IntFilter>;
	person?: InputMaybe<PersonRelationFilter>;
	personId?: InputMaybe<IntFilter>;
	role?: InputMaybe<StringFilter>;
};

export type ActorInMovieWhereUniqueInput = {
	personId_movieId?: InputMaybe<ActorInMoviePersonIdMovieIdCompoundUniqueInput>;
};

export type Book = {
	__typename?: 'Book';
	_count?: Maybe<BookCount>;
	authors: Person[];
	createdAt: Scalars['DateTime'];
	description: Scalars['String'];
	id: Scalars['Int'];
	locked: Scalars['Boolean'];
	title: Scalars['String'];
	updatedAt: Scalars['DateTime'];
};

export type BookAuthorsArgs = {
	cursor?: InputMaybe<PersonWhereUniqueInput>;
	distinct?: InputMaybe<PersonScalarFieldEnum[]>;
	orderBy?: InputMaybe<PersonOrderByWithRelationInput[]>;
	skip?: InputMaybe<Scalars['Int']>;
	take?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<PersonWhereInput>;
};

export type BookCount = {
	__typename?: 'BookCount';
	authors: Scalars['Int'];
};

export type BookCreateInput = {
	authors?: InputMaybe<PersonCreateNestedManyWithoutBooksInput>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	description: Scalars['String'];
	locked?: InputMaybe<Scalars['Boolean']>;
	title: Scalars['String'];
	updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BookCreateNestedManyWithoutAuthorsInput = {
	connect?: InputMaybe<BookWhereUniqueInput[]>;
	connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutAuthorsInput[]>;
	create?: InputMaybe<BookCreateWithoutAuthorsInput[]>;
};

export type BookCreateOrConnectWithoutAuthorsInput = {
	create: BookCreateWithoutAuthorsInput;
	where: BookWhereUniqueInput;
};

export type BookCreateWithoutAuthorsInput = {
	createdAt?: InputMaybe<Scalars['DateTime']>;
	description: Scalars['String'];
	locked?: InputMaybe<Scalars['Boolean']>;
	title: Scalars['String'];
	updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BookListRelationFilter = {
	every?: InputMaybe<BookWhereInput>;
	none?: InputMaybe<BookWhereInput>;
	some?: InputMaybe<BookWhereInput>;
};

export type BookOrderByRelationAggregateInput = {
	_count?: InputMaybe<SortOrder>;
};

export type BookOrderByWithRelationInput = {
	authors?: InputMaybe<PersonOrderByRelationAggregateInput>;
	createdAt?: InputMaybe<SortOrder>;
	description?: InputMaybe<SortOrder>;
	id?: InputMaybe<SortOrder>;
	locked?: InputMaybe<SortOrder>;
	title?: InputMaybe<SortOrder>;
	updatedAt?: InputMaybe<SortOrder>;
};

export enum BookScalarFieldEnum {
	CreatedAt = 'createdAt',
	Description = 'description',
	Id = 'id',
	Locked = 'locked',
	Title = 'title',
	UpdatedAt = 'updatedAt'
}

export type BookScalarWhereInput = {
	AND?: InputMaybe<BookScalarWhereInput[]>;
	NOT?: InputMaybe<BookScalarWhereInput[]>;
	OR?: InputMaybe<BookScalarWhereInput[]>;
	createdAt?: InputMaybe<DateTimeFilter>;
	description?: InputMaybe<StringFilter>;
	id?: InputMaybe<IntFilter>;
	locked?: InputMaybe<BoolFilter>;
	title?: InputMaybe<StringFilter>;
	updatedAt?: InputMaybe<DateTimeFilter>;
};

export type BookUpdateInput = {
	authors?: InputMaybe<PersonUpdateManyWithoutBooksInput>;
	createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	description?: InputMaybe<StringFieldUpdateOperationsInput>;
	locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
	title?: InputMaybe<StringFieldUpdateOperationsInput>;
	updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BookUpdateManyMutationInput = {
	createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	description?: InputMaybe<StringFieldUpdateOperationsInput>;
	locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
	title?: InputMaybe<StringFieldUpdateOperationsInput>;
	updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BookUpdateManyWithWhereWithoutAuthorsInput = {
	data: BookUpdateManyMutationInput;
	where: BookScalarWhereInput;
};

export type BookUpdateManyWithoutAuthorsInput = {
	connect?: InputMaybe<BookWhereUniqueInput[]>;
	connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutAuthorsInput[]>;
	create?: InputMaybe<BookCreateWithoutAuthorsInput[]>;
	delete?: InputMaybe<BookWhereUniqueInput[]>;
	deleteMany?: InputMaybe<BookScalarWhereInput[]>;
	disconnect?: InputMaybe<BookWhereUniqueInput[]>;
	set?: InputMaybe<BookWhereUniqueInput[]>;
	update?: InputMaybe<BookUpdateWithWhereUniqueWithoutAuthorsInput[]>;
	updateMany?: InputMaybe<BookUpdateManyWithWhereWithoutAuthorsInput[]>;
	upsert?: InputMaybe<BookUpsertWithWhereUniqueWithoutAuthorsInput[]>;
};

export type BookUpdateWithWhereUniqueWithoutAuthorsInput = {
	data: BookUpdateWithoutAuthorsInput;
	where: BookWhereUniqueInput;
};

export type BookUpdateWithoutAuthorsInput = {
	createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	description?: InputMaybe<StringFieldUpdateOperationsInput>;
	locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
	title?: InputMaybe<StringFieldUpdateOperationsInput>;
	updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BookUpsertWithWhereUniqueWithoutAuthorsInput = {
	create: BookCreateWithoutAuthorsInput;
	update: BookUpdateWithoutAuthorsInput;
	where: BookWhereUniqueInput;
};

export type BookWhereInput = {
	AND?: InputMaybe<BookWhereInput[]>;
	NOT?: InputMaybe<BookWhereInput[]>;
	OR?: InputMaybe<BookWhereInput[]>;
	authors?: InputMaybe<PersonListRelationFilter>;
	createdAt?: InputMaybe<DateTimeFilter>;
	description?: InputMaybe<StringFilter>;
	id?: InputMaybe<IntFilter>;
	locked?: InputMaybe<BoolFilter>;
	title?: InputMaybe<StringFilter>;
	updatedAt?: InputMaybe<DateTimeFilter>;
};

export type BookWhereUniqueInput = {
	id?: InputMaybe<Scalars['Int']>;
};

export type BoolFieldUpdateOperationsInput = {
	set?: InputMaybe<Scalars['Boolean']>;
};

export type BoolFilter = {
	equals?: InputMaybe<Scalars['Boolean']>;
	not?: InputMaybe<NestedBoolFilter>;
};

export enum Career {
	Actor = 'ACTOR',
	Artist = 'ARTIST',
	Author = 'AUTHOR'
}

export type ChangePasswordInput = {
	password: Scalars['String'];
	token: Scalars['String'];
};

export type DateTimeFieldUpdateOperationsInput = {
	set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
	equals?: InputMaybe<Scalars['DateTime']>;
	gt?: InputMaybe<Scalars['DateTime']>;
	gte?: InputMaybe<Scalars['DateTime']>;
	in?: InputMaybe<Array<Scalars['DateTime']>>;
	lt?: InputMaybe<Scalars['DateTime']>;
	lte?: InputMaybe<Scalars['DateTime']>;
	not?: InputMaybe<NestedDateTimeFilter>;
	notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type EnumCareerNullableListFilter = {
	equals?: InputMaybe<Career[]>;
	has?: InputMaybe<Career>;
	hasEvery?: InputMaybe<Career[]>;
	hasSome?: InputMaybe<Career[]>;
	isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export type EnumRoleFilter = {
	equals?: InputMaybe<Role>;
	in?: InputMaybe<Role[]>;
	not?: InputMaybe<NestedEnumRoleFilter>;
	notIn?: InputMaybe<Role[]>;
};

export type IntFilter = {
	equals?: InputMaybe<Scalars['Int']>;
	gt?: InputMaybe<Scalars['Int']>;
	gte?: InputMaybe<Scalars['Int']>;
	in?: InputMaybe<Array<Scalars['Int']>>;
	lt?: InputMaybe<Scalars['Int']>;
	lte?: InputMaybe<Scalars['Int']>;
	not?: InputMaybe<NestedIntFilter>;
	notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
	equals?: InputMaybe<Scalars['Int']>;
	gt?: InputMaybe<Scalars['Int']>;
	gte?: InputMaybe<Scalars['Int']>;
	in?: InputMaybe<Array<Scalars['Int']>>;
	lt?: InputMaybe<Scalars['Int']>;
	lte?: InputMaybe<Scalars['Int']>;
	not?: InputMaybe<NestedIntNullableFilter>;
	notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type LoginInput = {
	email: Scalars['String'];
	password: Scalars['String'];
};

export type Movie = {
	__typename?: 'Movie';
	_count?: Maybe<MovieCount>;
	actors: ActorInMovie[];
	createdAt: Scalars['DateTime'];
	description: Scalars['String'];
	id: Scalars['Int'];
	locked: Scalars['Boolean'];
	thumbnail: Scalars['String'];
	title: Scalars['String'];
	updatedAt: Scalars['DateTime'];
};

export type MovieActorsArgs = {
	cursor?: InputMaybe<ActorInMovieWhereUniqueInput>;
	distinct?: InputMaybe<ActorInMovieScalarFieldEnum[]>;
	orderBy?: InputMaybe<ActorInMovieOrderByWithRelationInput[]>;
	skip?: InputMaybe<Scalars['Int']>;
	take?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<ActorInMovieWhereInput>;
};

export type MovieCount = {
	__typename?: 'MovieCount';
	actors: Scalars['Int'];
};

export type MovieCreateInput = {
	actors?: InputMaybe<ActorInMovieCreateNestedManyWithoutMovieInput>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	description: Scalars['String'];
	locked?: InputMaybe<Scalars['Boolean']>;
	thumbnail?: InputMaybe<Scalars['String']>;
	title: Scalars['String'];
	updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type MovieCreateNestedOneWithoutActorsInput = {
	connect?: InputMaybe<MovieWhereUniqueInput>;
	connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutActorsInput>;
	create?: InputMaybe<MovieCreateWithoutActorsInput>;
};

export type MovieCreateOrConnectWithoutActorsInput = {
	create: MovieCreateWithoutActorsInput;
	where: MovieWhereUniqueInput;
};

export type MovieCreateWithoutActorsInput = {
	createdAt?: InputMaybe<Scalars['DateTime']>;
	description: Scalars['String'];
	locked?: InputMaybe<Scalars['Boolean']>;
	thumbnail?: InputMaybe<Scalars['String']>;
	title: Scalars['String'];
	updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type MovieOrderByWithRelationInput = {
	actors?: InputMaybe<ActorInMovieOrderByRelationAggregateInput>;
	createdAt?: InputMaybe<SortOrder>;
	description?: InputMaybe<SortOrder>;
	id?: InputMaybe<SortOrder>;
	locked?: InputMaybe<SortOrder>;
	thumbnail?: InputMaybe<SortOrder>;
	title?: InputMaybe<SortOrder>;
	updatedAt?: InputMaybe<SortOrder>;
};

export type MovieRelationFilter = {
	is?: InputMaybe<MovieWhereInput>;
	isNot?: InputMaybe<MovieWhereInput>;
};

export enum MovieScalarFieldEnum {
	CreatedAt = 'createdAt',
	Description = 'description',
	Id = 'id',
	Locked = 'locked',
	Thumbnail = 'thumbnail',
	Title = 'title',
	UpdatedAt = 'updatedAt'
}

export type MovieUpdateInput = {
	actors?: InputMaybe<ActorInMovieUpdateManyWithoutMovieInput>;
	createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	description?: InputMaybe<StringFieldUpdateOperationsInput>;
	locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
	thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
	title?: InputMaybe<StringFieldUpdateOperationsInput>;
	updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieUpdateOneRequiredWithoutActorsInput = {
	connect?: InputMaybe<MovieWhereUniqueInput>;
	connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutActorsInput>;
	create?: InputMaybe<MovieCreateWithoutActorsInput>;
	update?: InputMaybe<MovieUpdateWithoutActorsInput>;
	upsert?: InputMaybe<MovieUpsertWithoutActorsInput>;
};

export type MovieUpdateWithoutActorsInput = {
	createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	description?: InputMaybe<StringFieldUpdateOperationsInput>;
	locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
	thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
	title?: InputMaybe<StringFieldUpdateOperationsInput>;
	updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieUpsertWithoutActorsInput = {
	create: MovieCreateWithoutActorsInput;
	update: MovieUpdateWithoutActorsInput;
};

export type MovieWhereInput = {
	AND?: InputMaybe<MovieWhereInput[]>;
	NOT?: InputMaybe<MovieWhereInput[]>;
	OR?: InputMaybe<MovieWhereInput[]>;
	actors?: InputMaybe<ActorInMovieListRelationFilter>;
	createdAt?: InputMaybe<DateTimeFilter>;
	description?: InputMaybe<StringFilter>;
	id?: InputMaybe<IntFilter>;
	locked?: InputMaybe<BoolFilter>;
	thumbnail?: InputMaybe<StringFilter>;
	title?: InputMaybe<StringFilter>;
	updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MovieWhereUniqueInput = {
	id?: InputMaybe<Scalars['Int']>;
};

export type Mutation = {
	__typename?: 'Mutation';
	addActor?: Maybe<Scalars['Boolean']>;
	addArtist?: Maybe<Song>;
	changePassword: User;
	confirm: Scalars['Boolean'];
	createBook?: Maybe<Book>;
	createMovie?: Maybe<Movie>;
	createPerson: Person;
	createSong?: Maybe<Song>;
	deleteBook?: Maybe<Book>;
	deleteMovie?: Maybe<Movie>;
	deletePerson?: Maybe<Person>;
	deleteSong?: Maybe<Song>;
	editBook?: Maybe<Book>;
	editMovie?: Maybe<Movie>;
	editPerson?: Maybe<Person>;
	editSong?: Maybe<Song>;
	follow: Scalars['Boolean'];
	forgotPassword: Scalars['Boolean'];
	lockBook?: Maybe<Book>;
	lockMovie?: Maybe<Movie>;
	lockSong?: Maybe<Song>;
	login: User;
	logout: Scalars['Boolean'];
	register: User;
	removeActor?: Maybe<Movie>;
	removeArtist?: Maybe<Song>;
	unfollow: Scalars['Boolean'];
	uploadAvatar: Scalars['Boolean'];
	uploadThumbnail: Scalars['Boolean'];
};

export type MutationAddActorArgs = {
	movieId: Scalars['Int'];
	personId: Scalars['Int'];
	role: Scalars['String'];
};

export type MutationAddArtistArgs = {
	personId: Scalars['Int'];
	songId: Scalars['Int'];
};

export type MutationChangePasswordArgs = {
	data: ChangePasswordInput;
};

export type MutationConfirmArgs = {
	token: Scalars['String'];
};

export type MutationCreateBookArgs = {
	data: BookCreateInput;
};

export type MutationCreateMovieArgs = {
	data: MovieCreateInput;
};

export type MutationCreatePersonArgs = {
	data: PersonCreateInput;
};

export type MutationCreateSongArgs = {
	data: SongCreateInput;
};

export type MutationDeleteBookArgs = {
	where: BookWhereUniqueInput;
};

export type MutationDeleteMovieArgs = {
	where: MovieWhereUniqueInput;
};

export type MutationDeletePersonArgs = {
	where: PersonWhereUniqueInput;
};

export type MutationDeleteSongArgs = {
	where: SongWhereUniqueInput;
};

export type MutationEditBookArgs = {
	data: BookUpdateInput;
	where: BookWhereUniqueInput;
};

export type MutationEditMovieArgs = {
	data: MovieUpdateInput;
	where: MovieWhereUniqueInput;
};

export type MutationEditPersonArgs = {
	data: PersonUpdateInput;
	where: PersonWhereUniqueInput;
};

export type MutationEditSongArgs = {
	data: SongUpdateInput;
	where: SongWhereUniqueInput;
};

export type MutationFollowArgs = {
	userId: Scalars['Int'];
};

export type MutationForgotPasswordArgs = {
	email: Scalars['String'];
};

export type MutationLockBookArgs = {
	bookId: Scalars['Int'];
	lock: Scalars['Boolean'];
};

export type MutationLockMovieArgs = {
	lock: Scalars['Boolean'];
	movieId: Scalars['Int'];
};

export type MutationLockSongArgs = {
	lock: Scalars['Boolean'];
	songId: Scalars['Int'];
};

export type MutationLoginArgs = {
	data: LoginInput;
};

export type MutationRegisterArgs = {
	data: RegisterInput;
};

export type MutationRemoveActorArgs = {
	movieId: Scalars['Int'];
	personId: Scalars['Int'];
};

export type MutationRemoveArtistArgs = {
	personId: Scalars['Int'];
	songId: Scalars['Int'];
};

export type MutationUnfollowArgs = {
	userId: Scalars['Int'];
};

export type MutationUploadAvatarArgs = {
	file: Scalars['Upload'];
};

export type MutationUploadThumbnailArgs = {
	file: Scalars['Upload'];
	id: Scalars['Int'];
};

export type NestedBoolFilter = {
	equals?: InputMaybe<Scalars['Boolean']>;
	not?: InputMaybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
	equals?: InputMaybe<Scalars['DateTime']>;
	gt?: InputMaybe<Scalars['DateTime']>;
	gte?: InputMaybe<Scalars['DateTime']>;
	in?: InputMaybe<Array<Scalars['DateTime']>>;
	lt?: InputMaybe<Scalars['DateTime']>;
	lte?: InputMaybe<Scalars['DateTime']>;
	not?: InputMaybe<NestedDateTimeFilter>;
	notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumRoleFilter = {
	equals?: InputMaybe<Role>;
	in?: InputMaybe<Role[]>;
	not?: InputMaybe<NestedEnumRoleFilter>;
	notIn?: InputMaybe<Role[]>;
};

export type NestedIntFilter = {
	equals?: InputMaybe<Scalars['Int']>;
	gt?: InputMaybe<Scalars['Int']>;
	gte?: InputMaybe<Scalars['Int']>;
	in?: InputMaybe<Array<Scalars['Int']>>;
	lt?: InputMaybe<Scalars['Int']>;
	lte?: InputMaybe<Scalars['Int']>;
	not?: InputMaybe<NestedIntFilter>;
	notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
	equals?: InputMaybe<Scalars['Int']>;
	gt?: InputMaybe<Scalars['Int']>;
	gte?: InputMaybe<Scalars['Int']>;
	in?: InputMaybe<Array<Scalars['Int']>>;
	lt?: InputMaybe<Scalars['Int']>;
	lte?: InputMaybe<Scalars['Int']>;
	not?: InputMaybe<NestedIntNullableFilter>;
	notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
	contains?: InputMaybe<Scalars['String']>;
	endsWith?: InputMaybe<Scalars['String']>;
	equals?: InputMaybe<Scalars['String']>;
	gt?: InputMaybe<Scalars['String']>;
	gte?: InputMaybe<Scalars['String']>;
	in?: InputMaybe<Array<Scalars['String']>>;
	lt?: InputMaybe<Scalars['String']>;
	lte?: InputMaybe<Scalars['String']>;
	not?: InputMaybe<NestedStringFilter>;
	notIn?: InputMaybe<Array<Scalars['String']>>;
	startsWith?: InputMaybe<Scalars['String']>;
};

export type Notification = {
	__typename?: 'Notification';
	createdAt: Scalars['DateTime'];
	id: Scalars['Int'];
	message: Scalars['String'];
	read: Scalars['Boolean'];
	user?: Maybe<User>;
	userId?: Maybe<Scalars['Int']>;
};

export type NotificationListRelationFilter = {
	every?: InputMaybe<NotificationWhereInput>;
	none?: InputMaybe<NotificationWhereInput>;
	some?: InputMaybe<NotificationWhereInput>;
};

export type NotificationOrderByRelationAggregateInput = {
	_count?: InputMaybe<SortOrder>;
};

export type NotificationOrderByWithRelationInput = {
	createdAt?: InputMaybe<SortOrder>;
	id?: InputMaybe<SortOrder>;
	message?: InputMaybe<SortOrder>;
	read?: InputMaybe<SortOrder>;
	user?: InputMaybe<UserOrderByWithRelationInput>;
	userId?: InputMaybe<SortOrder>;
};

export enum NotificationScalarFieldEnum {
	CreatedAt = 'createdAt',
	Id = 'id',
	Message = 'message',
	Read = 'read',
	UserId = 'userId'
}

export type NotificationWhereInput = {
	AND?: InputMaybe<NotificationWhereInput[]>;
	NOT?: InputMaybe<NotificationWhereInput[]>;
	OR?: InputMaybe<NotificationWhereInput[]>;
	createdAt?: InputMaybe<DateTimeFilter>;
	id?: InputMaybe<IntFilter>;
	message?: InputMaybe<StringFilter>;
	read?: InputMaybe<BoolFilter>;
	user?: InputMaybe<UserRelationFilter>;
	userId?: InputMaybe<IntNullableFilter>;
};

export type NotificationWhereUniqueInput = {
	id?: InputMaybe<Scalars['Int']>;
};

export type Person = {
	__typename?: 'Person';
	_count?: Maybe<PersonCount>;
	books: Book[];
	career: Career[];
	id: Scalars['Int'];
	movies: ActorInMovie[];
	name: Scalars['String'];
	songs: Song[];
};

export type PersonBooksArgs = {
	cursor?: InputMaybe<BookWhereUniqueInput>;
	distinct?: InputMaybe<BookScalarFieldEnum[]>;
	orderBy?: InputMaybe<BookOrderByWithRelationInput[]>;
	skip?: InputMaybe<Scalars['Int']>;
	take?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<BookWhereInput>;
};

export type PersonMoviesArgs = {
	cursor?: InputMaybe<ActorInMovieWhereUniqueInput>;
	distinct?: InputMaybe<ActorInMovieScalarFieldEnum[]>;
	orderBy?: InputMaybe<ActorInMovieOrderByWithRelationInput[]>;
	skip?: InputMaybe<Scalars['Int']>;
	take?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<ActorInMovieWhereInput>;
};

export type PersonSongsArgs = {
	cursor?: InputMaybe<SongWhereUniqueInput>;
	distinct?: InputMaybe<SongScalarFieldEnum[]>;
	orderBy?: InputMaybe<SongOrderByWithRelationInput[]>;
	skip?: InputMaybe<Scalars['Int']>;
	take?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<SongWhereInput>;
};

export type PersonCount = {
	__typename?: 'PersonCount';
	books: Scalars['Int'];
	movies: Scalars['Int'];
	songs: Scalars['Int'];
};

export type PersonCreateInput = {
	books?: InputMaybe<BookCreateNestedManyWithoutAuthorsInput>;
	career?: InputMaybe<PersonCreatecareerInput>;
	movies?: InputMaybe<ActorInMovieCreateNestedManyWithoutPersonInput>;
	name: Scalars['String'];
	songs?: InputMaybe<SongCreateNestedManyWithoutArtistsInput>;
};

export type PersonCreateNestedManyWithoutBooksInput = {
	connect?: InputMaybe<PersonWhereUniqueInput[]>;
	connectOrCreate?: InputMaybe<PersonCreateOrConnectWithoutBooksInput[]>;
	create?: InputMaybe<PersonCreateWithoutBooksInput[]>;
};

export type PersonCreateNestedManyWithoutSongsInput = {
	connect?: InputMaybe<PersonWhereUniqueInput[]>;
	connectOrCreate?: InputMaybe<PersonCreateOrConnectWithoutSongsInput[]>;
	create?: InputMaybe<PersonCreateWithoutSongsInput[]>;
};

export type PersonCreateNestedOneWithoutMoviesInput = {
	connect?: InputMaybe<PersonWhereUniqueInput>;
	connectOrCreate?: InputMaybe<PersonCreateOrConnectWithoutMoviesInput>;
	create?: InputMaybe<PersonCreateWithoutMoviesInput>;
};

export type PersonCreateOrConnectWithoutBooksInput = {
	create: PersonCreateWithoutBooksInput;
	where: PersonWhereUniqueInput;
};

export type PersonCreateOrConnectWithoutMoviesInput = {
	create: PersonCreateWithoutMoviesInput;
	where: PersonWhereUniqueInput;
};

export type PersonCreateOrConnectWithoutSongsInput = {
	create: PersonCreateWithoutSongsInput;
	where: PersonWhereUniqueInput;
};

export type PersonCreateWithoutBooksInput = {
	career?: InputMaybe<PersonCreatecareerInput>;
	movies?: InputMaybe<ActorInMovieCreateNestedManyWithoutPersonInput>;
	name: Scalars['String'];
	songs?: InputMaybe<SongCreateNestedManyWithoutArtistsInput>;
};

export type PersonCreateWithoutMoviesInput = {
	books?: InputMaybe<BookCreateNestedManyWithoutAuthorsInput>;
	career?: InputMaybe<PersonCreatecareerInput>;
	name: Scalars['String'];
	songs?: InputMaybe<SongCreateNestedManyWithoutArtistsInput>;
};

export type PersonCreateWithoutSongsInput = {
	books?: InputMaybe<BookCreateNestedManyWithoutAuthorsInput>;
	career?: InputMaybe<PersonCreatecareerInput>;
	movies?: InputMaybe<ActorInMovieCreateNestedManyWithoutPersonInput>;
	name: Scalars['String'];
};

export type PersonCreatecareerInput = {
	set: Career[];
};

export type PersonListRelationFilter = {
	every?: InputMaybe<PersonWhereInput>;
	none?: InputMaybe<PersonWhereInput>;
	some?: InputMaybe<PersonWhereInput>;
};

export type PersonOrderByRelationAggregateInput = {
	_count?: InputMaybe<SortOrder>;
};

export type PersonOrderByWithRelationInput = {
	books?: InputMaybe<BookOrderByRelationAggregateInput>;
	career?: InputMaybe<SortOrder>;
	id?: InputMaybe<SortOrder>;
	movies?: InputMaybe<ActorInMovieOrderByRelationAggregateInput>;
	name?: InputMaybe<SortOrder>;
	songs?: InputMaybe<SongOrderByRelationAggregateInput>;
};

export type PersonRelationFilter = {
	is?: InputMaybe<PersonWhereInput>;
	isNot?: InputMaybe<PersonWhereInput>;
};

export enum PersonScalarFieldEnum {
	Career = 'career',
	Id = 'id',
	Name = 'name'
}

export type PersonScalarWhereInput = {
	AND?: InputMaybe<PersonScalarWhereInput[]>;
	NOT?: InputMaybe<PersonScalarWhereInput[]>;
	OR?: InputMaybe<PersonScalarWhereInput[]>;
	career?: InputMaybe<EnumCareerNullableListFilter>;
	id?: InputMaybe<IntFilter>;
	name?: InputMaybe<StringFilter>;
};

export type PersonUpdateInput = {
	books?: InputMaybe<BookUpdateManyWithoutAuthorsInput>;
	career?: InputMaybe<PersonUpdatecareerInput>;
	movies?: InputMaybe<ActorInMovieUpdateManyWithoutPersonInput>;
	name?: InputMaybe<StringFieldUpdateOperationsInput>;
	songs?: InputMaybe<SongUpdateManyWithoutArtistsInput>;
};

export type PersonUpdateManyMutationInput = {
	career?: InputMaybe<PersonUpdatecareerInput>;
	name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PersonUpdateManyWithWhereWithoutBooksInput = {
	data: PersonUpdateManyMutationInput;
	where: PersonScalarWhereInput;
};

export type PersonUpdateManyWithWhereWithoutSongsInput = {
	data: PersonUpdateManyMutationInput;
	where: PersonScalarWhereInput;
};

export type PersonUpdateManyWithoutBooksInput = {
	connect?: InputMaybe<PersonWhereUniqueInput[]>;
	connectOrCreate?: InputMaybe<PersonCreateOrConnectWithoutBooksInput[]>;
	create?: InputMaybe<PersonCreateWithoutBooksInput[]>;
	delete?: InputMaybe<PersonWhereUniqueInput[]>;
	deleteMany?: InputMaybe<PersonScalarWhereInput[]>;
	disconnect?: InputMaybe<PersonWhereUniqueInput[]>;
	set?: InputMaybe<PersonWhereUniqueInput[]>;
	update?: InputMaybe<PersonUpdateWithWhereUniqueWithoutBooksInput[]>;
	updateMany?: InputMaybe<PersonUpdateManyWithWhereWithoutBooksInput[]>;
	upsert?: InputMaybe<PersonUpsertWithWhereUniqueWithoutBooksInput[]>;
};

export type PersonUpdateManyWithoutSongsInput = {
	connect?: InputMaybe<PersonWhereUniqueInput[]>;
	connectOrCreate?: InputMaybe<PersonCreateOrConnectWithoutSongsInput[]>;
	create?: InputMaybe<PersonCreateWithoutSongsInput[]>;
	delete?: InputMaybe<PersonWhereUniqueInput[]>;
	deleteMany?: InputMaybe<PersonScalarWhereInput[]>;
	disconnect?: InputMaybe<PersonWhereUniqueInput[]>;
	set?: InputMaybe<PersonWhereUniqueInput[]>;
	update?: InputMaybe<PersonUpdateWithWhereUniqueWithoutSongsInput[]>;
	updateMany?: InputMaybe<PersonUpdateManyWithWhereWithoutSongsInput[]>;
	upsert?: InputMaybe<PersonUpsertWithWhereUniqueWithoutSongsInput[]>;
};

export type PersonUpdateOneRequiredWithoutMoviesInput = {
	connect?: InputMaybe<PersonWhereUniqueInput>;
	connectOrCreate?: InputMaybe<PersonCreateOrConnectWithoutMoviesInput>;
	create?: InputMaybe<PersonCreateWithoutMoviesInput>;
	update?: InputMaybe<PersonUpdateWithoutMoviesInput>;
	upsert?: InputMaybe<PersonUpsertWithoutMoviesInput>;
};

export type PersonUpdateWithWhereUniqueWithoutBooksInput = {
	data: PersonUpdateWithoutBooksInput;
	where: PersonWhereUniqueInput;
};

export type PersonUpdateWithWhereUniqueWithoutSongsInput = {
	data: PersonUpdateWithoutSongsInput;
	where: PersonWhereUniqueInput;
};

export type PersonUpdateWithoutBooksInput = {
	career?: InputMaybe<PersonUpdatecareerInput>;
	movies?: InputMaybe<ActorInMovieUpdateManyWithoutPersonInput>;
	name?: InputMaybe<StringFieldUpdateOperationsInput>;
	songs?: InputMaybe<SongUpdateManyWithoutArtistsInput>;
};

export type PersonUpdateWithoutMoviesInput = {
	books?: InputMaybe<BookUpdateManyWithoutAuthorsInput>;
	career?: InputMaybe<PersonUpdatecareerInput>;
	name?: InputMaybe<StringFieldUpdateOperationsInput>;
	songs?: InputMaybe<SongUpdateManyWithoutArtistsInput>;
};

export type PersonUpdateWithoutSongsInput = {
	books?: InputMaybe<BookUpdateManyWithoutAuthorsInput>;
	career?: InputMaybe<PersonUpdatecareerInput>;
	movies?: InputMaybe<ActorInMovieUpdateManyWithoutPersonInput>;
	name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PersonUpdatecareerInput = {
	push?: InputMaybe<Career[]>;
	set?: InputMaybe<Career[]>;
};

export type PersonUpsertWithWhereUniqueWithoutBooksInput = {
	create: PersonCreateWithoutBooksInput;
	update: PersonUpdateWithoutBooksInput;
	where: PersonWhereUniqueInput;
};

export type PersonUpsertWithWhereUniqueWithoutSongsInput = {
	create: PersonCreateWithoutSongsInput;
	update: PersonUpdateWithoutSongsInput;
	where: PersonWhereUniqueInput;
};

export type PersonUpsertWithoutMoviesInput = {
	create: PersonCreateWithoutMoviesInput;
	update: PersonUpdateWithoutMoviesInput;
};

export type PersonWhereInput = {
	AND?: InputMaybe<PersonWhereInput[]>;
	NOT?: InputMaybe<PersonWhereInput[]>;
	OR?: InputMaybe<PersonWhereInput[]>;
	books?: InputMaybe<BookListRelationFilter>;
	career?: InputMaybe<EnumCareerNullableListFilter>;
	id?: InputMaybe<IntFilter>;
	movies?: InputMaybe<ActorInMovieListRelationFilter>;
	name?: InputMaybe<StringFilter>;
	songs?: InputMaybe<SongListRelationFilter>;
};

export type PersonWhereUniqueInput = {
	id?: InputMaybe<Scalars['Int']>;
};

export type Query = {
	__typename?: 'Query';
	book?: Maybe<Book>;
	books?: Maybe<Book[]>;
	me?: Maybe<User>;
	movie?: Maybe<Movie>;
	movies?: Maybe<Movie[]>;
	notifications: Notification[];
	people?: Maybe<Person[]>;
	person?: Maybe<Person>;
	song?: Maybe<Song>;
	songs?: Maybe<Song[]>;
	user?: Maybe<User>;
	users: User[];
};

export type QueryBookArgs = {
	bookId: Scalars['Int'];
};

export type QueryBooksArgs = {
	title: Scalars['String'];
};

export type QueryMovieArgs = {
	movieId: Scalars['Int'];
};

export type QueryMoviesArgs = {
	cursor?: InputMaybe<MovieWhereUniqueInput>;
	distinct?: InputMaybe<MovieScalarFieldEnum[]>;
	orderBy?: InputMaybe<MovieOrderByWithRelationInput[]>;
	skip?: InputMaybe<Scalars['Int']>;
	take?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<MovieWhereInput>;
};

export type QueryNotificationsArgs = {
	cursor?: InputMaybe<NotificationWhereUniqueInput>;
	distinct?: InputMaybe<NotificationScalarFieldEnum[]>;
	orderBy?: InputMaybe<NotificationOrderByWithRelationInput[]>;
	skip?: InputMaybe<Scalars['Int']>;
	take?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<NotificationWhereInput>;
};

export type QueryPeopleArgs = {
	cursor?: InputMaybe<PersonWhereUniqueInput>;
	distinct?: InputMaybe<PersonScalarFieldEnum[]>;
	orderBy?: InputMaybe<PersonOrderByWithRelationInput[]>;
	skip?: InputMaybe<Scalars['Int']>;
	take?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<PersonWhereInput>;
};

export type QueryPersonArgs = {
	personId: Scalars['Int'];
};

export type QuerySongArgs = {
	songId: Scalars['Int'];
};

export type QuerySongsArgs = {
	title: Scalars['String'];
};

export type QueryUserArgs = {
	username: Scalars['String'];
};

export type QueryUsersArgs = {
	cursor?: InputMaybe<UserWhereUniqueInput>;
	distinct?: InputMaybe<UserScalarFieldEnum[]>;
	orderBy?: InputMaybe<UserOrderByWithRelationInput[]>;
	skip?: InputMaybe<Scalars['Int']>;
	take?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
	Default = 'default',
	Insensitive = 'insensitive'
}

export type RegisterInput = {
	displayname: Scalars['String'];
	email: Scalars['String'];
	password: Scalars['String'];
	username: Scalars['String'];
};

export enum Role {
	Admin = 'ADMIN',
	User = 'USER'
}

export type Song = {
	__typename?: 'Song';
	_count?: Maybe<SongCount>;
	artists: Person[];
	createdAt: Scalars['DateTime'];
	description: Scalars['String'];
	id: Scalars['Int'];
	locked: Scalars['Boolean'];
	title: Scalars['String'];
	updatedAt: Scalars['DateTime'];
};

export type SongArtistsArgs = {
	cursor?: InputMaybe<PersonWhereUniqueInput>;
	distinct?: InputMaybe<PersonScalarFieldEnum[]>;
	orderBy?: InputMaybe<PersonOrderByWithRelationInput[]>;
	skip?: InputMaybe<Scalars['Int']>;
	take?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<PersonWhereInput>;
};

export type SongCount = {
	__typename?: 'SongCount';
	artists: Scalars['Int'];
};

export type SongCreateInput = {
	artists?: InputMaybe<PersonCreateNestedManyWithoutSongsInput>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	description: Scalars['String'];
	locked?: InputMaybe<Scalars['Boolean']>;
	title: Scalars['String'];
	updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type SongCreateNestedManyWithoutArtistsInput = {
	connect?: InputMaybe<SongWhereUniqueInput[]>;
	connectOrCreate?: InputMaybe<SongCreateOrConnectWithoutArtistsInput[]>;
	create?: InputMaybe<SongCreateWithoutArtistsInput[]>;
};

export type SongCreateOrConnectWithoutArtistsInput = {
	create: SongCreateWithoutArtistsInput;
	where: SongWhereUniqueInput;
};

export type SongCreateWithoutArtistsInput = {
	createdAt?: InputMaybe<Scalars['DateTime']>;
	description: Scalars['String'];
	locked?: InputMaybe<Scalars['Boolean']>;
	title: Scalars['String'];
	updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type SongListRelationFilter = {
	every?: InputMaybe<SongWhereInput>;
	none?: InputMaybe<SongWhereInput>;
	some?: InputMaybe<SongWhereInput>;
};

export type SongOrderByRelationAggregateInput = {
	_count?: InputMaybe<SortOrder>;
};

export type SongOrderByWithRelationInput = {
	artists?: InputMaybe<PersonOrderByRelationAggregateInput>;
	createdAt?: InputMaybe<SortOrder>;
	description?: InputMaybe<SortOrder>;
	id?: InputMaybe<SortOrder>;
	locked?: InputMaybe<SortOrder>;
	title?: InputMaybe<SortOrder>;
	updatedAt?: InputMaybe<SortOrder>;
};

export enum SongScalarFieldEnum {
	CreatedAt = 'createdAt',
	Description = 'description',
	Id = 'id',
	Locked = 'locked',
	Title = 'title',
	UpdatedAt = 'updatedAt'
}

export type SongScalarWhereInput = {
	AND?: InputMaybe<SongScalarWhereInput[]>;
	NOT?: InputMaybe<SongScalarWhereInput[]>;
	OR?: InputMaybe<SongScalarWhereInput[]>;
	createdAt?: InputMaybe<DateTimeFilter>;
	description?: InputMaybe<StringFilter>;
	id?: InputMaybe<IntFilter>;
	locked?: InputMaybe<BoolFilter>;
	title?: InputMaybe<StringFilter>;
	updatedAt?: InputMaybe<DateTimeFilter>;
};

export type SongUpdateInput = {
	artists?: InputMaybe<PersonUpdateManyWithoutSongsInput>;
	createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	description?: InputMaybe<StringFieldUpdateOperationsInput>;
	locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
	title?: InputMaybe<StringFieldUpdateOperationsInput>;
	updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SongUpdateManyMutationInput = {
	createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	description?: InputMaybe<StringFieldUpdateOperationsInput>;
	locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
	title?: InputMaybe<StringFieldUpdateOperationsInput>;
	updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SongUpdateManyWithWhereWithoutArtistsInput = {
	data: SongUpdateManyMutationInput;
	where: SongScalarWhereInput;
};

export type SongUpdateManyWithoutArtistsInput = {
	connect?: InputMaybe<SongWhereUniqueInput[]>;
	connectOrCreate?: InputMaybe<SongCreateOrConnectWithoutArtistsInput[]>;
	create?: InputMaybe<SongCreateWithoutArtistsInput[]>;
	delete?: InputMaybe<SongWhereUniqueInput[]>;
	deleteMany?: InputMaybe<SongScalarWhereInput[]>;
	disconnect?: InputMaybe<SongWhereUniqueInput[]>;
	set?: InputMaybe<SongWhereUniqueInput[]>;
	update?: InputMaybe<SongUpdateWithWhereUniqueWithoutArtistsInput[]>;
	updateMany?: InputMaybe<SongUpdateManyWithWhereWithoutArtistsInput[]>;
	upsert?: InputMaybe<SongUpsertWithWhereUniqueWithoutArtistsInput[]>;
};

export type SongUpdateWithWhereUniqueWithoutArtistsInput = {
	data: SongUpdateWithoutArtistsInput;
	where: SongWhereUniqueInput;
};

export type SongUpdateWithoutArtistsInput = {
	createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	description?: InputMaybe<StringFieldUpdateOperationsInput>;
	locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
	title?: InputMaybe<StringFieldUpdateOperationsInput>;
	updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SongUpsertWithWhereUniqueWithoutArtistsInput = {
	create: SongCreateWithoutArtistsInput;
	update: SongUpdateWithoutArtistsInput;
	where: SongWhereUniqueInput;
};

export type SongWhereInput = {
	AND?: InputMaybe<SongWhereInput[]>;
	NOT?: InputMaybe<SongWhereInput[]>;
	OR?: InputMaybe<SongWhereInput[]>;
	artists?: InputMaybe<PersonListRelationFilter>;
	createdAt?: InputMaybe<DateTimeFilter>;
	description?: InputMaybe<StringFilter>;
	id?: InputMaybe<IntFilter>;
	locked?: InputMaybe<BoolFilter>;
	title?: InputMaybe<StringFilter>;
	updatedAt?: InputMaybe<DateTimeFilter>;
};

export type SongWhereUniqueInput = {
	id?: InputMaybe<Scalars['Int']>;
};

export enum SortOrder {
	Asc = 'asc',
	Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
	set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
	contains?: InputMaybe<Scalars['String']>;
	endsWith?: InputMaybe<Scalars['String']>;
	equals?: InputMaybe<Scalars['String']>;
	gt?: InputMaybe<Scalars['String']>;
	gte?: InputMaybe<Scalars['String']>;
	in?: InputMaybe<Array<Scalars['String']>>;
	lt?: InputMaybe<Scalars['String']>;
	lte?: InputMaybe<Scalars['String']>;
	mode?: InputMaybe<QueryMode>;
	not?: InputMaybe<NestedStringFilter>;
	notIn?: InputMaybe<Array<Scalars['String']>>;
	startsWith?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
	__typename?: 'Subscription';
	notificationListener: Notification;
};

export type SubscriptionNotificationListenerArgs = {
	listenerId: Scalars['Int'];
};

export type User = {
	__typename?: 'User';
	_count?: Maybe<UserCount>;
	avatar: Scalars['String'];
	bio: Scalars['String'];
	confirmed: Scalars['Boolean'];
	createdAt: Scalars['DateTime'];
	displayname: Scalars['String'];
	dob: Scalars['String'];
	email: Scalars['String'];
	followers: User[];
	following: User[];
	id: Scalars['Int'];
	location: Scalars['String'];
	notifications: Notification[];
	role: Role;
	updatedAt: Scalars['DateTime'];
	username: Scalars['String'];
	website: Scalars['String'];
};

export type UserFollowersArgs = {
	cursor?: InputMaybe<UserWhereUniqueInput>;
	distinct?: InputMaybe<UserScalarFieldEnum[]>;
	orderBy?: InputMaybe<UserOrderByWithRelationInput[]>;
	skip?: InputMaybe<Scalars['Int']>;
	take?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<UserWhereInput>;
};

export type UserFollowingArgs = {
	cursor?: InputMaybe<UserWhereUniqueInput>;
	distinct?: InputMaybe<UserScalarFieldEnum[]>;
	orderBy?: InputMaybe<UserOrderByWithRelationInput[]>;
	skip?: InputMaybe<Scalars['Int']>;
	take?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<UserWhereInput>;
};

export type UserNotificationsArgs = {
	cursor?: InputMaybe<NotificationWhereUniqueInput>;
	distinct?: InputMaybe<NotificationScalarFieldEnum[]>;
	orderBy?: InputMaybe<NotificationOrderByWithRelationInput[]>;
	skip?: InputMaybe<Scalars['Int']>;
	take?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<NotificationWhereInput>;
};

export type UserCount = {
	__typename?: 'UserCount';
	followers: Scalars['Int'];
	following: Scalars['Int'];
	notifications: Scalars['Int'];
};

export type UserListRelationFilter = {
	every?: InputMaybe<UserWhereInput>;
	none?: InputMaybe<UserWhereInput>;
	some?: InputMaybe<UserWhereInput>;
};

export type UserOrderByRelationAggregateInput = {
	_count?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
	avatar?: InputMaybe<SortOrder>;
	bio?: InputMaybe<SortOrder>;
	confirmed?: InputMaybe<SortOrder>;
	createdAt?: InputMaybe<SortOrder>;
	displayname?: InputMaybe<SortOrder>;
	dob?: InputMaybe<SortOrder>;
	email?: InputMaybe<SortOrder>;
	followers?: InputMaybe<UserOrderByRelationAggregateInput>;
	following?: InputMaybe<UserOrderByRelationAggregateInput>;
	id?: InputMaybe<SortOrder>;
	location?: InputMaybe<SortOrder>;
	notifications?: InputMaybe<NotificationOrderByRelationAggregateInput>;
	password?: InputMaybe<SortOrder>;
	role?: InputMaybe<SortOrder>;
	updatedAt?: InputMaybe<SortOrder>;
	username?: InputMaybe<SortOrder>;
	website?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
	is?: InputMaybe<UserWhereInput>;
	isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
	Avatar = 'avatar',
	Bio = 'bio',
	Confirmed = 'confirmed',
	CreatedAt = 'createdAt',
	Displayname = 'displayname',
	Dob = 'dob',
	Email = 'email',
	Id = 'id',
	Location = 'location',
	Password = 'password',
	Role = 'role',
	UpdatedAt = 'updatedAt',
	Username = 'username',
	Website = 'website'
}

export type UserWhereInput = {
	AND?: InputMaybe<UserWhereInput[]>;
	NOT?: InputMaybe<UserWhereInput[]>;
	OR?: InputMaybe<UserWhereInput[]>;
	avatar?: InputMaybe<StringFilter>;
	bio?: InputMaybe<StringFilter>;
	confirmed?: InputMaybe<BoolFilter>;
	createdAt?: InputMaybe<DateTimeFilter>;
	displayname?: InputMaybe<StringFilter>;
	dob?: InputMaybe<StringFilter>;
	email?: InputMaybe<StringFilter>;
	followers?: InputMaybe<UserListRelationFilter>;
	following?: InputMaybe<UserListRelationFilter>;
	id?: InputMaybe<IntFilter>;
	location?: InputMaybe<StringFilter>;
	notifications?: InputMaybe<NotificationListRelationFilter>;
	password?: InputMaybe<StringFilter>;
	role?: InputMaybe<EnumRoleFilter>;
	updatedAt?: InputMaybe<DateTimeFilter>;
	username?: InputMaybe<StringFilter>;
	website?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
	email?: InputMaybe<Scalars['String']>;
	id?: InputMaybe<Scalars['Int']>;
	username?: InputMaybe<Scalars['String']>;
};

export type RegularUserFragment = {__typename?: 'User'; id: number; email: string; username: string; avatar: string};

export type AddActorMutationVariables = Exact<{
	role: Scalars['String'];
	movieId: Scalars['Int'];
	personId: Scalars['Int'];
}>;

export type AddActorMutation = {__typename?: 'Mutation'; addActor?: boolean | null | undefined};

export type ConfirmMutationVariables = Exact<{
	token: Scalars['String'];
}>;

export type ConfirmMutation = {__typename?: 'Mutation'; confirm: boolean};

export type CreateMovieMutationVariables = Exact<{
	data: MovieCreateInput;
}>;

export type CreateMovieMutation = {__typename?: 'Mutation'; createMovie?: {__typename?: 'Movie'; id: number; title: string; description: string; thumbnail: string; locked: boolean; createdAt: any; updatedAt: any} | null | undefined};

export type LoginMutationVariables = Exact<{
	data: LoginInput;
}>;

export type LoginMutation = {__typename?: 'Mutation'; login: {__typename?: 'User'; id: number; email: string; username: string; avatar: string}};

export type LogoutMutationVariables = Exact<Record<string, never>>;

export type LogoutMutation = {__typename?: 'Mutation'; logout: boolean};

export type RegisterMutationVariables = Exact<{
	data: RegisterInput;
}>;

export type RegisterMutation = {__typename?: 'Mutation'; register: {__typename?: 'User'; id: number; email: string; username: string; avatar: string}};

export type UploadAvatarMutationVariables = Exact<{
	file: Scalars['Upload'];
}>;

export type UploadAvatarMutation = {__typename?: 'Mutation'; uploadAvatar: boolean};

export type UploadThumbnailMutationVariables = Exact<{
	id: Scalars['Int'];
	file: Scalars['Upload'];
}>;

export type UploadThumbnailMutation = {__typename?: 'Mutation'; uploadThumbnail: boolean};

export type MeQueryVariables = Exact<Record<string, never>>;

export type MeQuery = {__typename?: 'Query'; me?: {__typename?: 'User'; id: number; email: string; username: string; avatar: string} | null | undefined};

export type MovieQueryVariables = Exact<{
	movieId: Scalars['Int'];
}>;

export type MovieQuery = {__typename?: 'Query'; movie?: {__typename?: 'Movie'; id: number; title: string; description: string; thumbnail: string; locked: boolean; createdAt: any; updatedAt: any; actors: Array<{__typename?: 'ActorInMovie'; movieId: number; personId: number; role: string}>} | null | undefined};

export type MoviesQueryVariables = Exact<{
	where?: InputMaybe<MovieWhereInput>;
	orderBy?: InputMaybe<MovieOrderByWithRelationInput[] | MovieOrderByWithRelationInput>;
	cursor?: InputMaybe<MovieWhereUniqueInput>;
}>;

export type MoviesQuery = {__typename?: 'Query'; movies?: Array<{__typename?: 'Movie'; id: number; title: string; description: string; thumbnail: string; locked: boolean}> | null | undefined};

export type NotificationsQueryVariables = Exact<Record<string, never>>;

export type NotificationsQuery = {__typename?: 'Query'; notifications: Array<{__typename?: 'Notification'; id: number; message: string; read: boolean; createdAt: any}>};

export type PeopleQueryVariables = Exact<{
	where?: InputMaybe<PersonWhereInput>;
	orderBy?: InputMaybe<PersonOrderByWithRelationInput[] | PersonOrderByWithRelationInput>;
	cursor?: InputMaybe<PersonWhereUniqueInput>;
	take?: InputMaybe<Scalars['Int']>;
}>;

export type PeopleQuery = {__typename?: 'Query'; people?: Array<{__typename?: 'Person'; id: number; career: Career[]; name: string}> | null | undefined};

export type NotificationListenerSubscriptionVariables = Exact<{
	listenerId: Scalars['Int'];
}>;

export type NotificationListenerSubscription = {__typename?: 'Subscription'; notificationListener: {__typename?: 'Notification'; id: number; userId?: number | null | undefined; message: string; read: boolean; createdAt: any}};

export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  email
  username
  avatar
}
    `;
export const AddActorDocument = gql`
    mutation addActor($role: String!, $movieId: Int!, $personId: Int!) {
  addActor(role: $role, movieId: $movieId, personId: $personId)
}
    `;
export type AddActorMutationFn = Apollo.MutationFunction<AddActorMutation, AddActorMutationVariables>;

/**
 * __useAddActorMutation__
 *
 * To run a mutation, you first call `useAddActorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddActorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addActorMutation, { data, loading, error }] = useAddActorMutation({
 *   variables: {
 *      role: // value for 'role'
 *      movieId: // value for 'movieId'
 *      personId: // value for 'personId'
 *   },
 * });
 */
export function useAddActorMutation(baseOptions?: Apollo.MutationHookOptions<AddActorMutation, AddActorMutationVariables>) {
	const options = {...defaultOptions, ...baseOptions};
	return Apollo.useMutation<AddActorMutation, AddActorMutationVariables>(AddActorDocument, options);
}

export type AddActorMutationHookResult = ReturnType<typeof useAddActorMutation>;
export type AddActorMutationResult = Apollo.MutationResult<AddActorMutation>;
export type AddActorMutationOptions = Apollo.BaseMutationOptions<AddActorMutation, AddActorMutationVariables>;
export const ConfirmDocument = gql`
    mutation Confirm($token: String!) {
  confirm(token: $token)
}
    `;
export type ConfirmMutationFn = Apollo.MutationFunction<ConfirmMutation, ConfirmMutationVariables>;

/**
 * __useConfirmMutation__
 *
 * To run a mutation, you first call `useConfirmMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmMutation, { data, loading, error }] = useConfirmMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useConfirmMutation(baseOptions?: Apollo.MutationHookOptions<ConfirmMutation, ConfirmMutationVariables>) {
	const options = {...defaultOptions, ...baseOptions};
	return Apollo.useMutation<ConfirmMutation, ConfirmMutationVariables>(ConfirmDocument, options);
}

export type ConfirmMutationHookResult = ReturnType<typeof useConfirmMutation>;
export type ConfirmMutationResult = Apollo.MutationResult<ConfirmMutation>;
export type ConfirmMutationOptions = Apollo.BaseMutationOptions<ConfirmMutation, ConfirmMutationVariables>;
export const CreateMovieDocument = gql`
    mutation CreateMovie($data: MovieCreateInput!) {
  createMovie(data: $data) {
    id
    title
    description
    thumbnail
    locked
    createdAt
    updatedAt
  }
}
    `;
export type CreateMovieMutationFn = Apollo.MutationFunction<CreateMovieMutation, CreateMovieMutationVariables>;

/**
 * __useCreateMovieMutation__
 *
 * To run a mutation, you first call `useCreateMovieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMovieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMovieMutation, { data, loading, error }] = useCreateMovieMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateMovieMutation(baseOptions?: Apollo.MutationHookOptions<CreateMovieMutation, CreateMovieMutationVariables>) {
	const options = {...defaultOptions, ...baseOptions};
	return Apollo.useMutation<CreateMovieMutation, CreateMovieMutationVariables>(CreateMovieDocument, options);
}

export type CreateMovieMutationHookResult = ReturnType<typeof useCreateMovieMutation>;
export type CreateMovieMutationResult = Apollo.MutationResult<CreateMovieMutation>;
export type CreateMovieMutationOptions = Apollo.BaseMutationOptions<CreateMovieMutation, CreateMovieMutationVariables>;
export const LoginDocument = gql`
    mutation Login($data: LoginInput!) {
  login(data: $data) {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
	const options = {...defaultOptions, ...baseOptions};
	return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
}

export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
	const options = {...defaultOptions, ...baseOptions};
	return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
}

export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($data: RegisterInput!) {
  register(data: $data) {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
	const options = {...defaultOptions, ...baseOptions};
	return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
}

export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const UploadAvatarDocument = gql`
    mutation UploadAvatar($file: Upload!) {
  uploadAvatar(file: $file)
}
    `;
export type UploadAvatarMutationFn = Apollo.MutationFunction<UploadAvatarMutation, UploadAvatarMutationVariables>;

/**
 * __useUploadAvatarMutation__
 *
 * To run a mutation, you first call `useUploadAvatarMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadAvatarMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadAvatarMutation, { data, loading, error }] = useUploadAvatarMutation({
 *   variables: {
 *      file: // value for 'file'
 *   },
 * });
 */
export function useUploadAvatarMutation(baseOptions?: Apollo.MutationHookOptions<UploadAvatarMutation, UploadAvatarMutationVariables>) {
	const options = {...defaultOptions, ...baseOptions};
	return Apollo.useMutation<UploadAvatarMutation, UploadAvatarMutationVariables>(UploadAvatarDocument, options);
}

export type UploadAvatarMutationHookResult = ReturnType<typeof useUploadAvatarMutation>;
export type UploadAvatarMutationResult = Apollo.MutationResult<UploadAvatarMutation>;
export type UploadAvatarMutationOptions = Apollo.BaseMutationOptions<UploadAvatarMutation, UploadAvatarMutationVariables>;
export const UploadThumbnailDocument = gql`
    mutation UploadThumbnail($id: Int!, $file: Upload!) {
  uploadThumbnail(id: $id, file: $file)
}
    `;
export type UploadThumbnailMutationFn = Apollo.MutationFunction<UploadThumbnailMutation, UploadThumbnailMutationVariables>;

/**
 * __useUploadThumbnailMutation__
 *
 * To run a mutation, you first call `useUploadThumbnailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadThumbnailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadThumbnailMutation, { data, loading, error }] = useUploadThumbnailMutation({
 *   variables: {
 *      id: // value for 'id'
 *      file: // value for 'file'
 *   },
 * });
 */
export function useUploadThumbnailMutation(baseOptions?: Apollo.MutationHookOptions<UploadThumbnailMutation, UploadThumbnailMutationVariables>) {
	const options = {...defaultOptions, ...baseOptions};
	return Apollo.useMutation<UploadThumbnailMutation, UploadThumbnailMutationVariables>(UploadThumbnailDocument, options);
}

export type UploadThumbnailMutationHookResult = ReturnType<typeof useUploadThumbnailMutation>;
export type UploadThumbnailMutationResult = Apollo.MutationResult<UploadThumbnailMutation>;
export type UploadThumbnailMutationOptions = Apollo.BaseMutationOptions<UploadThumbnailMutation, UploadThumbnailMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
	const options = {...defaultOptions, ...baseOptions};
	return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}

export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
	const options = {...defaultOptions, ...baseOptions};
	return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}

export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const MovieDocument = gql`
    query Movie($movieId: Int!) {
  movie(movieId: $movieId) {
    id
    title
    description
    thumbnail
    locked
    createdAt
    updatedAt
    actors {
      movieId
      personId
      role
    }
  }
}
    `;

/**
 * __useMovieQuery__
 *
 * To run a query within a React component, call `useMovieQuery` and pass it any options that fit your needs.
 * When your component renders, `useMovieQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMovieQuery({
 *   variables: {
 *      movieId: // value for 'movieId'
 *   },
 * });
 */
export function useMovieQuery(baseOptions: Apollo.QueryHookOptions<MovieQuery, MovieQueryVariables>) {
	const options = {...defaultOptions, ...baseOptions};
	return Apollo.useQuery<MovieQuery, MovieQueryVariables>(MovieDocument, options);
}

export function useMovieLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MovieQuery, MovieQueryVariables>) {
	const options = {...defaultOptions, ...baseOptions};
	return Apollo.useLazyQuery<MovieQuery, MovieQueryVariables>(MovieDocument, options);
}

export type MovieQueryHookResult = ReturnType<typeof useMovieQuery>;
export type MovieLazyQueryHookResult = ReturnType<typeof useMovieLazyQuery>;
export type MovieQueryResult = Apollo.QueryResult<MovieQuery, MovieQueryVariables>;
export const MoviesDocument = gql`
    query Movies($where: MovieWhereInput, $orderBy: [MovieOrderByWithRelationInput!], $cursor: MovieWhereUniqueInput) {
  movies(where: $where, orderBy: $orderBy, cursor: $cursor) {
    id
    title
    description
    thumbnail
    locked
  }
}
    `;

/**
 * __useMoviesQuery__
 *
 * To run a query within a React component, call `useMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMoviesQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useMoviesQuery(baseOptions?: Apollo.QueryHookOptions<MoviesQuery, MoviesQueryVariables>) {
	const options = {...defaultOptions, ...baseOptions};
	return Apollo.useQuery<MoviesQuery, MoviesQueryVariables>(MoviesDocument, options);
}

export function useMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MoviesQuery, MoviesQueryVariables>) {
	const options = {...defaultOptions, ...baseOptions};
	return Apollo.useLazyQuery<MoviesQuery, MoviesQueryVariables>(MoviesDocument, options);
}

export type MoviesQueryHookResult = ReturnType<typeof useMoviesQuery>;
export type MoviesLazyQueryHookResult = ReturnType<typeof useMoviesLazyQuery>;
export type MoviesQueryResult = Apollo.QueryResult<MoviesQuery, MoviesQueryVariables>;
export const NotificationsDocument = gql`
    query Notifications {
  notifications {
    id
    message
    read
    createdAt
  }
}
    `;

/**
 * __useNotificationsQuery__
 *
 * To run a query within a React component, call `useNotificationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useNotificationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNotificationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useNotificationsQuery(baseOptions?: Apollo.QueryHookOptions<NotificationsQuery, NotificationsQueryVariables>) {
	const options = {...defaultOptions, ...baseOptions};
	return Apollo.useQuery<NotificationsQuery, NotificationsQueryVariables>(NotificationsDocument, options);
}

export function useNotificationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NotificationsQuery, NotificationsQueryVariables>) {
	const options = {...defaultOptions, ...baseOptions};
	return Apollo.useLazyQuery<NotificationsQuery, NotificationsQueryVariables>(NotificationsDocument, options);
}

export type NotificationsQueryHookResult = ReturnType<typeof useNotificationsQuery>;
export type NotificationsLazyQueryHookResult = ReturnType<typeof useNotificationsLazyQuery>;
export type NotificationsQueryResult = Apollo.QueryResult<NotificationsQuery, NotificationsQueryVariables>;
export const PeopleDocument = gql`
    query People($where: PersonWhereInput, $orderBy: [PersonOrderByWithRelationInput!], $cursor: PersonWhereUniqueInput, $take: Int) {
  people(where: $where, orderBy: $orderBy, cursor: $cursor, take: $take) {
    id
    career
    name
  }
}
    `;

/**
 * __usePeopleQuery__
 *
 * To run a query within a React component, call `usePeopleQuery` and pass it any options that fit your needs.
 * When your component renders, `usePeopleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePeopleQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      take: // value for 'take'
 *   },
 * });
 */
export function usePeopleQuery(baseOptions?: Apollo.QueryHookOptions<PeopleQuery, PeopleQueryVariables>) {
	const options = {...defaultOptions, ...baseOptions};
	return Apollo.useQuery<PeopleQuery, PeopleQueryVariables>(PeopleDocument, options);
}

export function usePeopleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PeopleQuery, PeopleQueryVariables>) {
	const options = {...defaultOptions, ...baseOptions};
	return Apollo.useLazyQuery<PeopleQuery, PeopleQueryVariables>(PeopleDocument, options);
}

export type PeopleQueryHookResult = ReturnType<typeof usePeopleQuery>;
export type PeopleLazyQueryHookResult = ReturnType<typeof usePeopleLazyQuery>;
export type PeopleQueryResult = Apollo.QueryResult<PeopleQuery, PeopleQueryVariables>;
export const NotificationListenerDocument = gql`
    subscription NotificationListener($listenerId: Int!) {
  notificationListener(listenerId: $listenerId) {
    id
    userId
    message
    read
    createdAt
  }
}
    `;

/**
 * __useNotificationListenerSubscription__
 *
 * To run a query within a React component, call `useNotificationListenerSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNotificationListenerSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNotificationListenerSubscription({
 *   variables: {
 *      listenerId: // value for 'listenerId'
 *   },
 * });
 */
export function useNotificationListenerSubscription(baseOptions: Apollo.SubscriptionHookOptions<NotificationListenerSubscription, NotificationListenerSubscriptionVariables>) {
	const options = {...defaultOptions, ...baseOptions};
	return Apollo.useSubscription<NotificationListenerSubscription, NotificationListenerSubscriptionVariables>(NotificationListenerDocument, options);
}

export type NotificationListenerSubscriptionHookResult = ReturnType<typeof useNotificationListenerSubscription>;
export type NotificationListenerSubscriptionResult = Apollo.SubscriptionResult<NotificationListenerSubscription>;
