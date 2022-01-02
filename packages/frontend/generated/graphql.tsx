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

export type ActorInShow = {
	__typename?: 'ActorInShow';
	person: Person;
	personId: Scalars['Int'];
	role: Scalars['String'];
	show: Show;
	showId: Scalars['Int'];
};

export type ActorInShowCreateManyPersonInput = {
	role: Scalars['String'];
	showId: Scalars['Int'];
};

export type ActorInShowCreateManyPersonInputEnvelope = {
	data: ActorInShowCreateManyPersonInput[];
	skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ActorInShowCreateManyShowInput = {
	personId: Scalars['Int'];
	role: Scalars['String'];
};

export type ActorInShowCreateManyShowInputEnvelope = {
	data: ActorInShowCreateManyShowInput[];
	skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ActorInShowCreateNestedManyWithoutPersonInput = {
	connect?: InputMaybe<ActorInShowWhereUniqueInput[]>;
	connectOrCreate?: InputMaybe<ActorInShowCreateOrConnectWithoutPersonInput[]>;
	create?: InputMaybe<ActorInShowCreateWithoutPersonInput[]>;
	createMany?: InputMaybe<ActorInShowCreateManyPersonInputEnvelope>;
};

export type ActorInShowCreateNestedManyWithoutShowInput = {
	connect?: InputMaybe<ActorInShowWhereUniqueInput[]>;
	connectOrCreate?: InputMaybe<ActorInShowCreateOrConnectWithoutShowInput[]>;
	create?: InputMaybe<ActorInShowCreateWithoutShowInput[]>;
	createMany?: InputMaybe<ActorInShowCreateManyShowInputEnvelope>;
};

export type ActorInShowCreateOrConnectWithoutPersonInput = {
	create: ActorInShowCreateWithoutPersonInput;
	where: ActorInShowWhereUniqueInput;
};

export type ActorInShowCreateOrConnectWithoutShowInput = {
	create: ActorInShowCreateWithoutShowInput;
	where: ActorInShowWhereUniqueInput;
};

export type ActorInShowCreateWithoutPersonInput = {
	role: Scalars['String'];
	show: ShowCreateNestedOneWithoutActorsInput;
};

export type ActorInShowCreateWithoutShowInput = {
	person: PersonCreateNestedOneWithoutShowsInput;
	role: Scalars['String'];
};

export type ActorInShowListRelationFilter = {
	every?: InputMaybe<ActorInShowWhereInput>;
	none?: InputMaybe<ActorInShowWhereInput>;
	some?: InputMaybe<ActorInShowWhereInput>;
};

export type ActorInShowOrderByRelationAggregateInput = {
	_count?: InputMaybe<SortOrder>;
};

export type ActorInShowOrderByWithRelationInput = {
	person?: InputMaybe<PersonOrderByWithRelationInput>;
	personId?: InputMaybe<SortOrder>;
	role?: InputMaybe<SortOrder>;
	show?: InputMaybe<ShowOrderByWithRelationInput>;
	showId?: InputMaybe<SortOrder>;
};

export type ActorInShowPersonIdShowIdCompoundUniqueInput = {
	personId: Scalars['Int'];
	showId: Scalars['Int'];
};

export enum ActorInShowScalarFieldEnum {
	PersonId = 'personId',
	Role = 'role',
	ShowId = 'showId'
}

export type ActorInShowScalarWhereInput = {
	AND?: InputMaybe<ActorInShowScalarWhereInput[]>;
	NOT?: InputMaybe<ActorInShowScalarWhereInput[]>;
	OR?: InputMaybe<ActorInShowScalarWhereInput[]>;
	personId?: InputMaybe<IntFilter>;
	role?: InputMaybe<StringFilter>;
	showId?: InputMaybe<IntFilter>;
};

export type ActorInShowUpdateManyMutationInput = {
	role?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ActorInShowUpdateManyWithWhereWithoutPersonInput = {
	data: ActorInShowUpdateManyMutationInput;
	where: ActorInShowScalarWhereInput;
};

export type ActorInShowUpdateManyWithWhereWithoutShowInput = {
	data: ActorInShowUpdateManyMutationInput;
	where: ActorInShowScalarWhereInput;
};

export type ActorInShowUpdateManyWithoutPersonInput = {
	connect?: InputMaybe<ActorInShowWhereUniqueInput[]>;
	connectOrCreate?: InputMaybe<ActorInShowCreateOrConnectWithoutPersonInput[]>;
	create?: InputMaybe<ActorInShowCreateWithoutPersonInput[]>;
	createMany?: InputMaybe<ActorInShowCreateManyPersonInputEnvelope>;
	delete?: InputMaybe<ActorInShowWhereUniqueInput[]>;
	deleteMany?: InputMaybe<ActorInShowScalarWhereInput[]>;
	disconnect?: InputMaybe<ActorInShowWhereUniqueInput[]>;
	set?: InputMaybe<ActorInShowWhereUniqueInput[]>;
	update?: InputMaybe<ActorInShowUpdateWithWhereUniqueWithoutPersonInput[]>;
	updateMany?: InputMaybe<ActorInShowUpdateManyWithWhereWithoutPersonInput[]>;
	upsert?: InputMaybe<ActorInShowUpsertWithWhereUniqueWithoutPersonInput[]>;
};

export type ActorInShowUpdateManyWithoutShowInput = {
	connect?: InputMaybe<ActorInShowWhereUniqueInput[]>;
	connectOrCreate?: InputMaybe<ActorInShowCreateOrConnectWithoutShowInput[]>;
	create?: InputMaybe<ActorInShowCreateWithoutShowInput[]>;
	createMany?: InputMaybe<ActorInShowCreateManyShowInputEnvelope>;
	delete?: InputMaybe<ActorInShowWhereUniqueInput[]>;
	deleteMany?: InputMaybe<ActorInShowScalarWhereInput[]>;
	disconnect?: InputMaybe<ActorInShowWhereUniqueInput[]>;
	set?: InputMaybe<ActorInShowWhereUniqueInput[]>;
	update?: InputMaybe<ActorInShowUpdateWithWhereUniqueWithoutShowInput[]>;
	updateMany?: InputMaybe<ActorInShowUpdateManyWithWhereWithoutShowInput[]>;
	upsert?: InputMaybe<ActorInShowUpsertWithWhereUniqueWithoutShowInput[]>;
};

export type ActorInShowUpdateWithWhereUniqueWithoutPersonInput = {
	data: ActorInShowUpdateWithoutPersonInput;
	where: ActorInShowWhereUniqueInput;
};

export type ActorInShowUpdateWithWhereUniqueWithoutShowInput = {
	data: ActorInShowUpdateWithoutShowInput;
	where: ActorInShowWhereUniqueInput;
};

export type ActorInShowUpdateWithoutPersonInput = {
	role?: InputMaybe<StringFieldUpdateOperationsInput>;
	show?: InputMaybe<ShowUpdateOneRequiredWithoutActorsInput>;
};

export type ActorInShowUpdateWithoutShowInput = {
	person?: InputMaybe<PersonUpdateOneRequiredWithoutShowsInput>;
	role?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ActorInShowUpsertWithWhereUniqueWithoutPersonInput = {
	create: ActorInShowCreateWithoutPersonInput;
	update: ActorInShowUpdateWithoutPersonInput;
	where: ActorInShowWhereUniqueInput;
};

export type ActorInShowUpsertWithWhereUniqueWithoutShowInput = {
	create: ActorInShowCreateWithoutShowInput;
	update: ActorInShowUpdateWithoutShowInput;
	where: ActorInShowWhereUniqueInput;
};

export type ActorInShowWhereInput = {
	AND?: InputMaybe<ActorInShowWhereInput[]>;
	NOT?: InputMaybe<ActorInShowWhereInput[]>;
	OR?: InputMaybe<ActorInShowWhereInput[]>;
	person?: InputMaybe<PersonRelationFilter>;
	personId?: InputMaybe<IntFilter>;
	role?: InputMaybe<StringFilter>;
	show?: InputMaybe<ShowRelationFilter>;
	showId?: InputMaybe<IntFilter>;
};

export type ActorInShowWhereUniqueInput = {
	personId_showId?: InputMaybe<ActorInShowPersonIdShowIdCompoundUniqueInput>;
};

export type Book = {
	__typename?: 'Book';
	_count?: Maybe<BookCount>;
	authors: Person[];
	createdAt: Scalars['DateTime'];
	description: Scalars['String'];
	id: Scalars['Int'];
	locked: Scalars['Boolean'];
	released?: Maybe<Scalars['DateTime']>;
	thumbnail: Scalars['String'];
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
	released?: InputMaybe<Scalars['DateTime']>;
	thumbnail?: InputMaybe<Scalars['String']>;
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
	released?: InputMaybe<Scalars['DateTime']>;
	thumbnail?: InputMaybe<Scalars['String']>;
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
	released?: InputMaybe<SortOrder>;
	thumbnail?: InputMaybe<SortOrder>;
	title?: InputMaybe<SortOrder>;
	updatedAt?: InputMaybe<SortOrder>;
};

export enum BookScalarFieldEnum {
	CreatedAt = 'createdAt',
	Description = 'description',
	Id = 'id',
	Locked = 'locked',
	Released = 'released',
	Thumbnail = 'thumbnail',
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
	released?: InputMaybe<DateTimeNullableFilter>;
	thumbnail?: InputMaybe<StringFilter>;
	title?: InputMaybe<StringFilter>;
	updatedAt?: InputMaybe<DateTimeFilter>;
};

export type BookUpdateInput = {
	authors?: InputMaybe<PersonUpdateManyWithoutBooksInput>;
	createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	description?: InputMaybe<StringFieldUpdateOperationsInput>;
	locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
	released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
	title?: InputMaybe<StringFieldUpdateOperationsInput>;
	updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BookUpdateManyMutationInput = {
	createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	description?: InputMaybe<StringFieldUpdateOperationsInput>;
	locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
	released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
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
	released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
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
	released?: InputMaybe<DateTimeNullableFilter>;
	thumbnail?: InputMaybe<StringFilter>;
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

export type DateTimeNullableFilter = {
	equals?: InputMaybe<Scalars['DateTime']>;
	gt?: InputMaybe<Scalars['DateTime']>;
	gte?: InputMaybe<Scalars['DateTime']>;
	in?: InputMaybe<Array<Scalars['DateTime']>>;
	lt?: InputMaybe<Scalars['DateTime']>;
	lte?: InputMaybe<Scalars['DateTime']>;
	not?: InputMaybe<NestedDateTimeNullableFilter>;
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

export type Follows = {
	__typename?: 'Follows';
	follower: User;
	followerId: Scalars['Int'];
	following: User;
	followingId: Scalars['Int'];
};

export type FollowsFollowerIdFollowingIdCompoundUniqueInput = {
	followerId: Scalars['Int'];
	followingId: Scalars['Int'];
};

export type FollowsListRelationFilter = {
	every?: InputMaybe<FollowsWhereInput>;
	none?: InputMaybe<FollowsWhereInput>;
	some?: InputMaybe<FollowsWhereInput>;
};

export type FollowsOrderByRelationAggregateInput = {
	_count?: InputMaybe<SortOrder>;
};

export type FollowsOrderByWithRelationInput = {
	follower?: InputMaybe<UserOrderByWithRelationInput>;
	followerId?: InputMaybe<SortOrder>;
	following?: InputMaybe<UserOrderByWithRelationInput>;
	followingId?: InputMaybe<SortOrder>;
};

export enum FollowsScalarFieldEnum {
	FollowerId = 'followerId',
	FollowingId = 'followingId'
}

export type FollowsWhereInput = {
	AND?: InputMaybe<FollowsWhereInput[]>;
	NOT?: InputMaybe<FollowsWhereInput[]>;
	OR?: InputMaybe<FollowsWhereInput[]>;
	follower?: InputMaybe<UserRelationFilter>;
	followerId?: InputMaybe<IntFilter>;
	following?: InputMaybe<UserRelationFilter>;
	followingId?: InputMaybe<IntFilter>;
};

export type FollowsWhereUniqueInput = {
	followerId_followingId?: InputMaybe<FollowsFollowerIdFollowingIdCompoundUniqueInput>;
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
	platforms: PlatformOnMovie[];
	released?: Maybe<Scalars['DateTime']>;
	soundtrack: SongInMovie[];
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

export type MoviePlatformsArgs = {
	cursor?: InputMaybe<PlatformOnMovieWhereUniqueInput>;
	distinct?: InputMaybe<PlatformOnMovieScalarFieldEnum[]>;
	orderBy?: InputMaybe<PlatformOnMovieOrderByWithRelationInput[]>;
	skip?: InputMaybe<Scalars['Int']>;
	take?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<PlatformOnMovieWhereInput>;
};

export type MovieSoundtrackArgs = {
	cursor?: InputMaybe<SongInMovieWhereUniqueInput>;
	distinct?: InputMaybe<SongInMovieScalarFieldEnum[]>;
	orderBy?: InputMaybe<SongInMovieOrderByWithRelationInput[]>;
	skip?: InputMaybe<Scalars['Int']>;
	take?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<SongInMovieWhereInput>;
};

export type MovieCount = {
	__typename?: 'MovieCount';
	actors: Scalars['Int'];
	platforms: Scalars['Int'];
	soundtrack: Scalars['Int'];
};

export type MovieCreateInput = {
	actors?: InputMaybe<ActorInMovieCreateNestedManyWithoutMovieInput>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	description: Scalars['String'];
	locked?: InputMaybe<Scalars['Boolean']>;
	platforms?: InputMaybe<PlatformOnMovieCreateNestedManyWithoutMovieInput>;
	released?: InputMaybe<Scalars['DateTime']>;
	soundtrack?: InputMaybe<SongInMovieCreateNestedManyWithoutMovieInput>;
	thumbnail?: InputMaybe<Scalars['String']>;
	title: Scalars['String'];
	updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type MovieCreateNestedOneWithoutActorsInput = {
	connect?: InputMaybe<MovieWhereUniqueInput>;
	connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutActorsInput>;
	create?: InputMaybe<MovieCreateWithoutActorsInput>;
};

export type MovieCreateNestedOneWithoutPlatformsInput = {
	connect?: InputMaybe<MovieWhereUniqueInput>;
	connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutPlatformsInput>;
	create?: InputMaybe<MovieCreateWithoutPlatformsInput>;
};

export type MovieCreateNestedOneWithoutSoundtrackInput = {
	connect?: InputMaybe<MovieWhereUniqueInput>;
	connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutSoundtrackInput>;
	create?: InputMaybe<MovieCreateWithoutSoundtrackInput>;
};

export type MovieCreateOrConnectWithoutActorsInput = {
	create: MovieCreateWithoutActorsInput;
	where: MovieWhereUniqueInput;
};

export type MovieCreateOrConnectWithoutPlatformsInput = {
	create: MovieCreateWithoutPlatformsInput;
	where: MovieWhereUniqueInput;
};

export type MovieCreateOrConnectWithoutSoundtrackInput = {
	create: MovieCreateWithoutSoundtrackInput;
	where: MovieWhereUniqueInput;
};

export type MovieCreateWithoutActorsInput = {
	createdAt?: InputMaybe<Scalars['DateTime']>;
	description: Scalars['String'];
	locked?: InputMaybe<Scalars['Boolean']>;
	platforms?: InputMaybe<PlatformOnMovieCreateNestedManyWithoutMovieInput>;
	released?: InputMaybe<Scalars['DateTime']>;
	soundtrack?: InputMaybe<SongInMovieCreateNestedManyWithoutMovieInput>;
	thumbnail?: InputMaybe<Scalars['String']>;
	title: Scalars['String'];
	updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type MovieCreateWithoutPlatformsInput = {
	actors?: InputMaybe<ActorInMovieCreateNestedManyWithoutMovieInput>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	description: Scalars['String'];
	locked?: InputMaybe<Scalars['Boolean']>;
	released?: InputMaybe<Scalars['DateTime']>;
	soundtrack?: InputMaybe<SongInMovieCreateNestedManyWithoutMovieInput>;
	thumbnail?: InputMaybe<Scalars['String']>;
	title: Scalars['String'];
	updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type MovieCreateWithoutSoundtrackInput = {
	actors?: InputMaybe<ActorInMovieCreateNestedManyWithoutMovieInput>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	description: Scalars['String'];
	locked?: InputMaybe<Scalars['Boolean']>;
	platforms?: InputMaybe<PlatformOnMovieCreateNestedManyWithoutMovieInput>;
	released?: InputMaybe<Scalars['DateTime']>;
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
	platforms?: InputMaybe<PlatformOnMovieOrderByRelationAggregateInput>;
	released?: InputMaybe<SortOrder>;
	soundtrack?: InputMaybe<SongInMovieOrderByRelationAggregateInput>;
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
	Released = 'released',
	Thumbnail = 'thumbnail',
	Title = 'title',
	UpdatedAt = 'updatedAt'
}

export type MovieUpdateInput = {
	actors?: InputMaybe<ActorInMovieUpdateManyWithoutMovieInput>;
	createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	description?: InputMaybe<StringFieldUpdateOperationsInput>;
	locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
	platforms?: InputMaybe<PlatformOnMovieUpdateManyWithoutMovieInput>;
	released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	soundtrack?: InputMaybe<SongInMovieUpdateManyWithoutMovieInput>;
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

export type MovieUpdateOneRequiredWithoutPlatformsInput = {
	connect?: InputMaybe<MovieWhereUniqueInput>;
	connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutPlatformsInput>;
	create?: InputMaybe<MovieCreateWithoutPlatformsInput>;
	update?: InputMaybe<MovieUpdateWithoutPlatformsInput>;
	upsert?: InputMaybe<MovieUpsertWithoutPlatformsInput>;
};

export type MovieUpdateOneRequiredWithoutSoundtrackInput = {
	connect?: InputMaybe<MovieWhereUniqueInput>;
	connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutSoundtrackInput>;
	create?: InputMaybe<MovieCreateWithoutSoundtrackInput>;
	update?: InputMaybe<MovieUpdateWithoutSoundtrackInput>;
	upsert?: InputMaybe<MovieUpsertWithoutSoundtrackInput>;
};

export type MovieUpdateWithoutActorsInput = {
	createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	description?: InputMaybe<StringFieldUpdateOperationsInput>;
	locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
	platforms?: InputMaybe<PlatformOnMovieUpdateManyWithoutMovieInput>;
	released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	soundtrack?: InputMaybe<SongInMovieUpdateManyWithoutMovieInput>;
	thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
	title?: InputMaybe<StringFieldUpdateOperationsInput>;
	updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieUpdateWithoutPlatformsInput = {
	actors?: InputMaybe<ActorInMovieUpdateManyWithoutMovieInput>;
	createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	description?: InputMaybe<StringFieldUpdateOperationsInput>;
	locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
	released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	soundtrack?: InputMaybe<SongInMovieUpdateManyWithoutMovieInput>;
	thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
	title?: InputMaybe<StringFieldUpdateOperationsInput>;
	updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieUpdateWithoutSoundtrackInput = {
	actors?: InputMaybe<ActorInMovieUpdateManyWithoutMovieInput>;
	createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	description?: InputMaybe<StringFieldUpdateOperationsInput>;
	locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
	platforms?: InputMaybe<PlatformOnMovieUpdateManyWithoutMovieInput>;
	released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
	title?: InputMaybe<StringFieldUpdateOperationsInput>;
	updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieUpsertWithoutActorsInput = {
	create: MovieCreateWithoutActorsInput;
	update: MovieUpdateWithoutActorsInput;
};

export type MovieUpsertWithoutPlatformsInput = {
	create: MovieCreateWithoutPlatformsInput;
	update: MovieUpdateWithoutPlatformsInput;
};

export type MovieUpsertWithoutSoundtrackInput = {
	create: MovieCreateWithoutSoundtrackInput;
	update: MovieUpdateWithoutSoundtrackInput;
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
	platforms?: InputMaybe<PlatformOnMovieListRelationFilter>;
	released?: InputMaybe<DateTimeNullableFilter>;
	soundtrack?: InputMaybe<SongInMovieListRelationFilter>;
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
	type: UploadType;
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

export type NestedDateTimeNullableFilter = {
	equals?: InputMaybe<Scalars['DateTime']>;
	gt?: InputMaybe<Scalars['DateTime']>;
	gte?: InputMaybe<Scalars['DateTime']>;
	in?: InputMaybe<Array<Scalars['DateTime']>>;
	lt?: InputMaybe<Scalars['DateTime']>;
	lte?: InputMaybe<Scalars['DateTime']>;
	not?: InputMaybe<NestedDateTimeNullableFilter>;
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

export type NestedStringNullableFilter = {
	contains?: InputMaybe<Scalars['String']>;
	endsWith?: InputMaybe<Scalars['String']>;
	equals?: InputMaybe<Scalars['String']>;
	gt?: InputMaybe<Scalars['String']>;
	gte?: InputMaybe<Scalars['String']>;
	in?: InputMaybe<Array<Scalars['String']>>;
	lt?: InputMaybe<Scalars['String']>;
	lte?: InputMaybe<Scalars['String']>;
	not?: InputMaybe<NestedStringNullableFilter>;
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

export type NullableDateTimeFieldUpdateOperationsInput = {
	set?: InputMaybe<Scalars['DateTime']>;
};

export type NullableIntFieldUpdateOperationsInput = {
	decrement?: InputMaybe<Scalars['Int']>;
	divide?: InputMaybe<Scalars['Int']>;
	increment?: InputMaybe<Scalars['Int']>;
	multiply?: InputMaybe<Scalars['Int']>;
	set?: InputMaybe<Scalars['Int']>;
};

export type NullableStringFieldUpdateOperationsInput = {
	set?: InputMaybe<Scalars['String']>;
};

export type Person = {
	__typename?: 'Person';
	_count?: Maybe<PersonCount>;
	age?: Maybe<Scalars['Int']>;
	bio?: Maybe<Scalars['String']>;
	books: Book[];
	career: Career[];
	createdAt: Scalars['DateTime'];
	id: Scalars['Int'];
	movies: ActorInMovie[];
	name: Scalars['String'];
	shows: ActorInShow[];
	songs: Song[];
	thumbnail: Scalars['String'];
	updatedAt: Scalars['DateTime'];
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

export type PersonShowsArgs = {
	cursor?: InputMaybe<ActorInShowWhereUniqueInput>;
	distinct?: InputMaybe<ActorInShowScalarFieldEnum[]>;
	orderBy?: InputMaybe<ActorInShowOrderByWithRelationInput[]>;
	skip?: InputMaybe<Scalars['Int']>;
	take?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<ActorInShowWhereInput>;
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
	shows: Scalars['Int'];
	songs: Scalars['Int'];
};

export type PersonCreateInput = {
	age?: InputMaybe<Scalars['Int']>;
	bio?: InputMaybe<Scalars['String']>;
	books?: InputMaybe<BookCreateNestedManyWithoutAuthorsInput>;
	career?: InputMaybe<PersonCreatecareerInput>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	movies?: InputMaybe<ActorInMovieCreateNestedManyWithoutPersonInput>;
	name: Scalars['String'];
	shows?: InputMaybe<ActorInShowCreateNestedManyWithoutPersonInput>;
	songs?: InputMaybe<SongCreateNestedManyWithoutArtistsInput>;
	thumbnail?: InputMaybe<Scalars['String']>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
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

export type PersonCreateNestedOneWithoutShowsInput = {
	connect?: InputMaybe<PersonWhereUniqueInput>;
	connectOrCreate?: InputMaybe<PersonCreateOrConnectWithoutShowsInput>;
	create?: InputMaybe<PersonCreateWithoutShowsInput>;
};

export type PersonCreateOrConnectWithoutBooksInput = {
	create: PersonCreateWithoutBooksInput;
	where: PersonWhereUniqueInput;
};

export type PersonCreateOrConnectWithoutMoviesInput = {
	create: PersonCreateWithoutMoviesInput;
	where: PersonWhereUniqueInput;
};

export type PersonCreateOrConnectWithoutShowsInput = {
	create: PersonCreateWithoutShowsInput;
	where: PersonWhereUniqueInput;
};

export type PersonCreateOrConnectWithoutSongsInput = {
	create: PersonCreateWithoutSongsInput;
	where: PersonWhereUniqueInput;
};

export type PersonCreateWithoutBooksInput = {
	age?: InputMaybe<Scalars['Int']>;
	bio?: InputMaybe<Scalars['String']>;
	career?: InputMaybe<PersonCreatecareerInput>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	movies?: InputMaybe<ActorInMovieCreateNestedManyWithoutPersonInput>;
	name: Scalars['String'];
	shows?: InputMaybe<ActorInShowCreateNestedManyWithoutPersonInput>;
	songs?: InputMaybe<SongCreateNestedManyWithoutArtistsInput>;
	thumbnail?: InputMaybe<Scalars['String']>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PersonCreateWithoutMoviesInput = {
	age?: InputMaybe<Scalars['Int']>;
	bio?: InputMaybe<Scalars['String']>;
	books?: InputMaybe<BookCreateNestedManyWithoutAuthorsInput>;
	career?: InputMaybe<PersonCreatecareerInput>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	name: Scalars['String'];
	shows?: InputMaybe<ActorInShowCreateNestedManyWithoutPersonInput>;
	songs?: InputMaybe<SongCreateNestedManyWithoutArtistsInput>;
	thumbnail?: InputMaybe<Scalars['String']>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PersonCreateWithoutShowsInput = {
	age?: InputMaybe<Scalars['Int']>;
	bio?: InputMaybe<Scalars['String']>;
	books?: InputMaybe<BookCreateNestedManyWithoutAuthorsInput>;
	career?: InputMaybe<PersonCreatecareerInput>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	movies?: InputMaybe<ActorInMovieCreateNestedManyWithoutPersonInput>;
	name: Scalars['String'];
	songs?: InputMaybe<SongCreateNestedManyWithoutArtistsInput>;
	thumbnail?: InputMaybe<Scalars['String']>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PersonCreateWithoutSongsInput = {
	age?: InputMaybe<Scalars['Int']>;
	bio?: InputMaybe<Scalars['String']>;
	books?: InputMaybe<BookCreateNestedManyWithoutAuthorsInput>;
	career?: InputMaybe<PersonCreatecareerInput>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	movies?: InputMaybe<ActorInMovieCreateNestedManyWithoutPersonInput>;
	name: Scalars['String'];
	shows?: InputMaybe<ActorInShowCreateNestedManyWithoutPersonInput>;
	thumbnail?: InputMaybe<Scalars['String']>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
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
	age?: InputMaybe<SortOrder>;
	bio?: InputMaybe<SortOrder>;
	books?: InputMaybe<BookOrderByRelationAggregateInput>;
	career?: InputMaybe<SortOrder>;
	createdAt?: InputMaybe<SortOrder>;
	id?: InputMaybe<SortOrder>;
	movies?: InputMaybe<ActorInMovieOrderByRelationAggregateInput>;
	name?: InputMaybe<SortOrder>;
	shows?: InputMaybe<ActorInShowOrderByRelationAggregateInput>;
	songs?: InputMaybe<SongOrderByRelationAggregateInput>;
	thumbnail?: InputMaybe<SortOrder>;
	updatedAt?: InputMaybe<SortOrder>;
};

export type PersonRelationFilter = {
	is?: InputMaybe<PersonWhereInput>;
	isNot?: InputMaybe<PersonWhereInput>;
};

export enum PersonScalarFieldEnum {
	Age = 'age',
	Bio = 'bio',
	Career = 'career',
	CreatedAt = 'createdAt',
	Id = 'id',
	Name = 'name',
	Thumbnail = 'thumbnail',
	UpdatedAt = 'updatedAt'
}

export type PersonScalarWhereInput = {
	AND?: InputMaybe<PersonScalarWhereInput[]>;
	NOT?: InputMaybe<PersonScalarWhereInput[]>;
	OR?: InputMaybe<PersonScalarWhereInput[]>;
	age?: InputMaybe<IntNullableFilter>;
	bio?: InputMaybe<StringNullableFilter>;
	career?: InputMaybe<EnumCareerNullableListFilter>;
	createdAt?: InputMaybe<DateTimeFilter>;
	id?: InputMaybe<IntFilter>;
	name?: InputMaybe<StringFilter>;
	thumbnail?: InputMaybe<StringFilter>;
	updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PersonUpdateInput = {
	age?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
	books?: InputMaybe<BookUpdateManyWithoutAuthorsInput>;
	career?: InputMaybe<PersonUpdatecareerInput>;
	createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	movies?: InputMaybe<ActorInMovieUpdateManyWithoutPersonInput>;
	name?: InputMaybe<StringFieldUpdateOperationsInput>;
	shows?: InputMaybe<ActorInShowUpdateManyWithoutPersonInput>;
	songs?: InputMaybe<SongUpdateManyWithoutArtistsInput>;
	thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
	updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PersonUpdateManyMutationInput = {
	age?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
	career?: InputMaybe<PersonUpdatecareerInput>;
	createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	name?: InputMaybe<StringFieldUpdateOperationsInput>;
	thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
	updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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

export type PersonUpdateOneRequiredWithoutShowsInput = {
	connect?: InputMaybe<PersonWhereUniqueInput>;
	connectOrCreate?: InputMaybe<PersonCreateOrConnectWithoutShowsInput>;
	create?: InputMaybe<PersonCreateWithoutShowsInput>;
	update?: InputMaybe<PersonUpdateWithoutShowsInput>;
	upsert?: InputMaybe<PersonUpsertWithoutShowsInput>;
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
	age?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
	career?: InputMaybe<PersonUpdatecareerInput>;
	createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	movies?: InputMaybe<ActorInMovieUpdateManyWithoutPersonInput>;
	name?: InputMaybe<StringFieldUpdateOperationsInput>;
	shows?: InputMaybe<ActorInShowUpdateManyWithoutPersonInput>;
	songs?: InputMaybe<SongUpdateManyWithoutArtistsInput>;
	thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
	updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PersonUpdateWithoutMoviesInput = {
	age?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
	books?: InputMaybe<BookUpdateManyWithoutAuthorsInput>;
	career?: InputMaybe<PersonUpdatecareerInput>;
	createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	name?: InputMaybe<StringFieldUpdateOperationsInput>;
	shows?: InputMaybe<ActorInShowUpdateManyWithoutPersonInput>;
	songs?: InputMaybe<SongUpdateManyWithoutArtistsInput>;
	thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
	updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PersonUpdateWithoutShowsInput = {
	age?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
	books?: InputMaybe<BookUpdateManyWithoutAuthorsInput>;
	career?: InputMaybe<PersonUpdatecareerInput>;
	createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	movies?: InputMaybe<ActorInMovieUpdateManyWithoutPersonInput>;
	name?: InputMaybe<StringFieldUpdateOperationsInput>;
	songs?: InputMaybe<SongUpdateManyWithoutArtistsInput>;
	thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
	updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PersonUpdateWithoutSongsInput = {
	age?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
	books?: InputMaybe<BookUpdateManyWithoutAuthorsInput>;
	career?: InputMaybe<PersonUpdatecareerInput>;
	createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	movies?: InputMaybe<ActorInMovieUpdateManyWithoutPersonInput>;
	name?: InputMaybe<StringFieldUpdateOperationsInput>;
	shows?: InputMaybe<ActorInShowUpdateManyWithoutPersonInput>;
	thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
	updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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

export type PersonUpsertWithoutShowsInput = {
	create: PersonCreateWithoutShowsInput;
	update: PersonUpdateWithoutShowsInput;
};

export type PersonWhereInput = {
	AND?: InputMaybe<PersonWhereInput[]>;
	NOT?: InputMaybe<PersonWhereInput[]>;
	OR?: InputMaybe<PersonWhereInput[]>;
	age?: InputMaybe<IntNullableFilter>;
	bio?: InputMaybe<StringNullableFilter>;
	books?: InputMaybe<BookListRelationFilter>;
	career?: InputMaybe<EnumCareerNullableListFilter>;
	createdAt?: InputMaybe<DateTimeFilter>;
	id?: InputMaybe<IntFilter>;
	movies?: InputMaybe<ActorInMovieListRelationFilter>;
	name?: InputMaybe<StringFilter>;
	shows?: InputMaybe<ActorInShowListRelationFilter>;
	songs?: InputMaybe<SongListRelationFilter>;
	thumbnail?: InputMaybe<StringFilter>;
	updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PersonWhereUniqueInput = {
	id?: InputMaybe<Scalars['Int']>;
};

export type Platform = {
	__typename?: 'Platform';
	PlatformOnMovie: PlatformOnMovie[];
	PlatformOnShow: PlatformOnShow[];
	_count?: Maybe<PlatformCount>;
	id: Scalars['Int'];
	name: Scalars['String'];
};

export type PlatformPlatformOnMovieArgs = {
	cursor?: InputMaybe<PlatformOnMovieWhereUniqueInput>;
	distinct?: InputMaybe<PlatformOnMovieScalarFieldEnum[]>;
	orderBy?: InputMaybe<PlatformOnMovieOrderByWithRelationInput[]>;
	skip?: InputMaybe<Scalars['Int']>;
	take?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<PlatformOnMovieWhereInput>;
};

export type PlatformPlatformOnShowArgs = {
	cursor?: InputMaybe<PlatformOnShowWhereUniqueInput>;
	distinct?: InputMaybe<PlatformOnShowScalarFieldEnum[]>;
	orderBy?: InputMaybe<PlatformOnShowOrderByWithRelationInput[]>;
	skip?: InputMaybe<Scalars['Int']>;
	take?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<PlatformOnShowWhereInput>;
};

export type PlatformCount = {
	__typename?: 'PlatformCount';
	PlatformOnMovie: Scalars['Int'];
	PlatformOnShow: Scalars['Int'];
};

export type PlatformCreateNestedOneWithoutPlatformOnMovieInput = {
	connect?: InputMaybe<PlatformWhereUniqueInput>;
	connectOrCreate?: InputMaybe<PlatformCreateOrConnectWithoutPlatformOnMovieInput>;
	create?: InputMaybe<PlatformCreateWithoutPlatformOnMovieInput>;
};

export type PlatformCreateNestedOneWithoutPlatformOnShowInput = {
	connect?: InputMaybe<PlatformWhereUniqueInput>;
	connectOrCreate?: InputMaybe<PlatformCreateOrConnectWithoutPlatformOnShowInput>;
	create?: InputMaybe<PlatformCreateWithoutPlatformOnShowInput>;
};

export type PlatformCreateOrConnectWithoutPlatformOnMovieInput = {
	create: PlatformCreateWithoutPlatformOnMovieInput;
	where: PlatformWhereUniqueInput;
};

export type PlatformCreateOrConnectWithoutPlatformOnShowInput = {
	create: PlatformCreateWithoutPlatformOnShowInput;
	where: PlatformWhereUniqueInput;
};

export type PlatformCreateWithoutPlatformOnMovieInput = {
	PlatformOnShow?: InputMaybe<PlatformOnShowCreateNestedManyWithoutPlatformInput>;
	name: Scalars['String'];
};

export type PlatformCreateWithoutPlatformOnShowInput = {
	PlatformOnMovie?: InputMaybe<PlatformOnMovieCreateNestedManyWithoutPlatformInput>;
	name: Scalars['String'];
};

export type PlatformOnMovie = {
	__typename?: 'PlatformOnMovie';
	movie: Movie;
	movieId: Scalars['Int'];
	platform: Platform;
	platformId: Scalars['Int'];
	price: Scalars['String'];
};

export type PlatformOnMovieCreateManyMovieInput = {
	platformId: Scalars['Int'];
	price: Scalars['String'];
};

export type PlatformOnMovieCreateManyMovieInputEnvelope = {
	data: PlatformOnMovieCreateManyMovieInput[];
	skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PlatformOnMovieCreateManyPlatformInput = {
	movieId: Scalars['Int'];
	price: Scalars['String'];
};

export type PlatformOnMovieCreateManyPlatformInputEnvelope = {
	data: PlatformOnMovieCreateManyPlatformInput[];
	skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PlatformOnMovieCreateNestedManyWithoutMovieInput = {
	connect?: InputMaybe<PlatformOnMovieWhereUniqueInput[]>;
	connectOrCreate?: InputMaybe<PlatformOnMovieCreateOrConnectWithoutMovieInput[]>;
	create?: InputMaybe<PlatformOnMovieCreateWithoutMovieInput[]>;
	createMany?: InputMaybe<PlatformOnMovieCreateManyMovieInputEnvelope>;
};

export type PlatformOnMovieCreateNestedManyWithoutPlatformInput = {
	connect?: InputMaybe<PlatformOnMovieWhereUniqueInput[]>;
	connectOrCreate?: InputMaybe<PlatformOnMovieCreateOrConnectWithoutPlatformInput[]>;
	create?: InputMaybe<PlatformOnMovieCreateWithoutPlatformInput[]>;
	createMany?: InputMaybe<PlatformOnMovieCreateManyPlatformInputEnvelope>;
};

export type PlatformOnMovieCreateOrConnectWithoutMovieInput = {
	create: PlatformOnMovieCreateWithoutMovieInput;
	where: PlatformOnMovieWhereUniqueInput;
};

export type PlatformOnMovieCreateOrConnectWithoutPlatformInput = {
	create: PlatformOnMovieCreateWithoutPlatformInput;
	where: PlatformOnMovieWhereUniqueInput;
};

export type PlatformOnMovieCreateWithoutMovieInput = {
	platform: PlatformCreateNestedOneWithoutPlatformOnMovieInput;
	price: Scalars['String'];
};

export type PlatformOnMovieCreateWithoutPlatformInput = {
	movie: MovieCreateNestedOneWithoutPlatformsInput;
	price: Scalars['String'];
};

export type PlatformOnMovieListRelationFilter = {
	every?: InputMaybe<PlatformOnMovieWhereInput>;
	none?: InputMaybe<PlatformOnMovieWhereInput>;
	some?: InputMaybe<PlatformOnMovieWhereInput>;
};

export type PlatformOnMovieOrderByRelationAggregateInput = {
	_count?: InputMaybe<SortOrder>;
};

export type PlatformOnMovieOrderByWithRelationInput = {
	movie?: InputMaybe<MovieOrderByWithRelationInput>;
	movieId?: InputMaybe<SortOrder>;
	platform?: InputMaybe<PlatformOrderByWithRelationInput>;
	platformId?: InputMaybe<SortOrder>;
	price?: InputMaybe<SortOrder>;
};

export type PlatformOnMoviePlatformIdMovieIdCompoundUniqueInput = {
	movieId: Scalars['Int'];
	platformId: Scalars['Int'];
};

export enum PlatformOnMovieScalarFieldEnum {
	MovieId = 'movieId',
	PlatformId = 'platformId',
	Price = 'price'
}

export type PlatformOnMovieScalarWhereInput = {
	AND?: InputMaybe<PlatformOnMovieScalarWhereInput[]>;
	NOT?: InputMaybe<PlatformOnMovieScalarWhereInput[]>;
	OR?: InputMaybe<PlatformOnMovieScalarWhereInput[]>;
	movieId?: InputMaybe<IntFilter>;
	platformId?: InputMaybe<IntFilter>;
	price?: InputMaybe<StringFilter>;
};

export type PlatformOnMovieUpdateManyMutationInput = {
	price?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PlatformOnMovieUpdateManyWithWhereWithoutMovieInput = {
	data: PlatformOnMovieUpdateManyMutationInput;
	where: PlatformOnMovieScalarWhereInput;
};

export type PlatformOnMovieUpdateManyWithWhereWithoutPlatformInput = {
	data: PlatformOnMovieUpdateManyMutationInput;
	where: PlatformOnMovieScalarWhereInput;
};

export type PlatformOnMovieUpdateManyWithoutMovieInput = {
	connect?: InputMaybe<PlatformOnMovieWhereUniqueInput[]>;
	connectOrCreate?: InputMaybe<PlatformOnMovieCreateOrConnectWithoutMovieInput[]>;
	create?: InputMaybe<PlatformOnMovieCreateWithoutMovieInput[]>;
	createMany?: InputMaybe<PlatformOnMovieCreateManyMovieInputEnvelope>;
	delete?: InputMaybe<PlatformOnMovieWhereUniqueInput[]>;
	deleteMany?: InputMaybe<PlatformOnMovieScalarWhereInput[]>;
	disconnect?: InputMaybe<PlatformOnMovieWhereUniqueInput[]>;
	set?: InputMaybe<PlatformOnMovieWhereUniqueInput[]>;
	update?: InputMaybe<PlatformOnMovieUpdateWithWhereUniqueWithoutMovieInput[]>;
	updateMany?: InputMaybe<PlatformOnMovieUpdateManyWithWhereWithoutMovieInput[]>;
	upsert?: InputMaybe<PlatformOnMovieUpsertWithWhereUniqueWithoutMovieInput[]>;
};

export type PlatformOnMovieUpdateManyWithoutPlatformInput = {
	connect?: InputMaybe<PlatformOnMovieWhereUniqueInput[]>;
	connectOrCreate?: InputMaybe<PlatformOnMovieCreateOrConnectWithoutPlatformInput[]>;
	create?: InputMaybe<PlatformOnMovieCreateWithoutPlatformInput[]>;
	createMany?: InputMaybe<PlatformOnMovieCreateManyPlatformInputEnvelope>;
	delete?: InputMaybe<PlatformOnMovieWhereUniqueInput[]>;
	deleteMany?: InputMaybe<PlatformOnMovieScalarWhereInput[]>;
	disconnect?: InputMaybe<PlatformOnMovieWhereUniqueInput[]>;
	set?: InputMaybe<PlatformOnMovieWhereUniqueInput[]>;
	update?: InputMaybe<PlatformOnMovieUpdateWithWhereUniqueWithoutPlatformInput[]>;
	updateMany?: InputMaybe<PlatformOnMovieUpdateManyWithWhereWithoutPlatformInput[]>;
	upsert?: InputMaybe<PlatformOnMovieUpsertWithWhereUniqueWithoutPlatformInput[]>;
};

export type PlatformOnMovieUpdateWithWhereUniqueWithoutMovieInput = {
	data: PlatformOnMovieUpdateWithoutMovieInput;
	where: PlatformOnMovieWhereUniqueInput;
};

export type PlatformOnMovieUpdateWithWhereUniqueWithoutPlatformInput = {
	data: PlatformOnMovieUpdateWithoutPlatformInput;
	where: PlatformOnMovieWhereUniqueInput;
};

export type PlatformOnMovieUpdateWithoutMovieInput = {
	platform?: InputMaybe<PlatformUpdateOneRequiredWithoutPlatformOnMovieInput>;
	price?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PlatformOnMovieUpdateWithoutPlatformInput = {
	movie?: InputMaybe<MovieUpdateOneRequiredWithoutPlatformsInput>;
	price?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PlatformOnMovieUpsertWithWhereUniqueWithoutMovieInput = {
	create: PlatformOnMovieCreateWithoutMovieInput;
	update: PlatformOnMovieUpdateWithoutMovieInput;
	where: PlatformOnMovieWhereUniqueInput;
};

export type PlatformOnMovieUpsertWithWhereUniqueWithoutPlatformInput = {
	create: PlatformOnMovieCreateWithoutPlatformInput;
	update: PlatformOnMovieUpdateWithoutPlatformInput;
	where: PlatformOnMovieWhereUniqueInput;
};

export type PlatformOnMovieWhereInput = {
	AND?: InputMaybe<PlatformOnMovieWhereInput[]>;
	NOT?: InputMaybe<PlatformOnMovieWhereInput[]>;
	OR?: InputMaybe<PlatformOnMovieWhereInput[]>;
	movie?: InputMaybe<MovieRelationFilter>;
	movieId?: InputMaybe<IntFilter>;
	platform?: InputMaybe<PlatformRelationFilter>;
	platformId?: InputMaybe<IntFilter>;
	price?: InputMaybe<StringFilter>;
};

export type PlatformOnMovieWhereUniqueInput = {
	platformId_movieId?: InputMaybe<PlatformOnMoviePlatformIdMovieIdCompoundUniqueInput>;
};

export type PlatformOnShow = {
	__typename?: 'PlatformOnShow';
	platform: Platform;
	platformId: Scalars['Int'];
	price: Scalars['String'];
	show: Show;
	showId: Scalars['Int'];
};

export type PlatformOnShowCreateManyPlatformInput = {
	price: Scalars['String'];
	showId: Scalars['Int'];
};

export type PlatformOnShowCreateManyPlatformInputEnvelope = {
	data: PlatformOnShowCreateManyPlatformInput[];
	skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PlatformOnShowCreateManyShowInput = {
	platformId: Scalars['Int'];
	price: Scalars['String'];
};

export type PlatformOnShowCreateManyShowInputEnvelope = {
	data: PlatformOnShowCreateManyShowInput[];
	skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PlatformOnShowCreateNestedManyWithoutPlatformInput = {
	connect?: InputMaybe<PlatformOnShowWhereUniqueInput[]>;
	connectOrCreate?: InputMaybe<PlatformOnShowCreateOrConnectWithoutPlatformInput[]>;
	create?: InputMaybe<PlatformOnShowCreateWithoutPlatformInput[]>;
	createMany?: InputMaybe<PlatformOnShowCreateManyPlatformInputEnvelope>;
};

export type PlatformOnShowCreateNestedManyWithoutShowInput = {
	connect?: InputMaybe<PlatformOnShowWhereUniqueInput[]>;
	connectOrCreate?: InputMaybe<PlatformOnShowCreateOrConnectWithoutShowInput[]>;
	create?: InputMaybe<PlatformOnShowCreateWithoutShowInput[]>;
	createMany?: InputMaybe<PlatformOnShowCreateManyShowInputEnvelope>;
};

export type PlatformOnShowCreateOrConnectWithoutPlatformInput = {
	create: PlatformOnShowCreateWithoutPlatformInput;
	where: PlatformOnShowWhereUniqueInput;
};

export type PlatformOnShowCreateOrConnectWithoutShowInput = {
	create: PlatformOnShowCreateWithoutShowInput;
	where: PlatformOnShowWhereUniqueInput;
};

export type PlatformOnShowCreateWithoutPlatformInput = {
	price: Scalars['String'];
	show: ShowCreateNestedOneWithoutPlatformsInput;
};

export type PlatformOnShowCreateWithoutShowInput = {
	platform: PlatformCreateNestedOneWithoutPlatformOnShowInput;
	price: Scalars['String'];
};

export type PlatformOnShowListRelationFilter = {
	every?: InputMaybe<PlatformOnShowWhereInput>;
	none?: InputMaybe<PlatformOnShowWhereInput>;
	some?: InputMaybe<PlatformOnShowWhereInput>;
};

export type PlatformOnShowOrderByRelationAggregateInput = {
	_count?: InputMaybe<SortOrder>;
};

export type PlatformOnShowOrderByWithRelationInput = {
	platform?: InputMaybe<PlatformOrderByWithRelationInput>;
	platformId?: InputMaybe<SortOrder>;
	price?: InputMaybe<SortOrder>;
	show?: InputMaybe<ShowOrderByWithRelationInput>;
	showId?: InputMaybe<SortOrder>;
};

export type PlatformOnShowPlatformIdShowIdCompoundUniqueInput = {
	platformId: Scalars['Int'];
	showId: Scalars['Int'];
};

export enum PlatformOnShowScalarFieldEnum {
	PlatformId = 'platformId',
	Price = 'price',
	ShowId = 'showId'
}

export type PlatformOnShowScalarWhereInput = {
	AND?: InputMaybe<PlatformOnShowScalarWhereInput[]>;
	NOT?: InputMaybe<PlatformOnShowScalarWhereInput[]>;
	OR?: InputMaybe<PlatformOnShowScalarWhereInput[]>;
	platformId?: InputMaybe<IntFilter>;
	price?: InputMaybe<StringFilter>;
	showId?: InputMaybe<IntFilter>;
};

export type PlatformOnShowUpdateManyMutationInput = {
	price?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PlatformOnShowUpdateManyWithWhereWithoutPlatformInput = {
	data: PlatformOnShowUpdateManyMutationInput;
	where: PlatformOnShowScalarWhereInput;
};

export type PlatformOnShowUpdateManyWithWhereWithoutShowInput = {
	data: PlatformOnShowUpdateManyMutationInput;
	where: PlatformOnShowScalarWhereInput;
};

export type PlatformOnShowUpdateManyWithoutPlatformInput = {
	connect?: InputMaybe<PlatformOnShowWhereUniqueInput[]>;
	connectOrCreate?: InputMaybe<PlatformOnShowCreateOrConnectWithoutPlatformInput[]>;
	create?: InputMaybe<PlatformOnShowCreateWithoutPlatformInput[]>;
	createMany?: InputMaybe<PlatformOnShowCreateManyPlatformInputEnvelope>;
	delete?: InputMaybe<PlatformOnShowWhereUniqueInput[]>;
	deleteMany?: InputMaybe<PlatformOnShowScalarWhereInput[]>;
	disconnect?: InputMaybe<PlatformOnShowWhereUniqueInput[]>;
	set?: InputMaybe<PlatformOnShowWhereUniqueInput[]>;
	update?: InputMaybe<PlatformOnShowUpdateWithWhereUniqueWithoutPlatformInput[]>;
	updateMany?: InputMaybe<PlatformOnShowUpdateManyWithWhereWithoutPlatformInput[]>;
	upsert?: InputMaybe<PlatformOnShowUpsertWithWhereUniqueWithoutPlatformInput[]>;
};

export type PlatformOnShowUpdateManyWithoutShowInput = {
	connect?: InputMaybe<PlatformOnShowWhereUniqueInput[]>;
	connectOrCreate?: InputMaybe<PlatformOnShowCreateOrConnectWithoutShowInput[]>;
	create?: InputMaybe<PlatformOnShowCreateWithoutShowInput[]>;
	createMany?: InputMaybe<PlatformOnShowCreateManyShowInputEnvelope>;
	delete?: InputMaybe<PlatformOnShowWhereUniqueInput[]>;
	deleteMany?: InputMaybe<PlatformOnShowScalarWhereInput[]>;
	disconnect?: InputMaybe<PlatformOnShowWhereUniqueInput[]>;
	set?: InputMaybe<PlatformOnShowWhereUniqueInput[]>;
	update?: InputMaybe<PlatformOnShowUpdateWithWhereUniqueWithoutShowInput[]>;
	updateMany?: InputMaybe<PlatformOnShowUpdateManyWithWhereWithoutShowInput[]>;
	upsert?: InputMaybe<PlatformOnShowUpsertWithWhereUniqueWithoutShowInput[]>;
};

export type PlatformOnShowUpdateWithWhereUniqueWithoutPlatformInput = {
	data: PlatformOnShowUpdateWithoutPlatformInput;
	where: PlatformOnShowWhereUniqueInput;
};

export type PlatformOnShowUpdateWithWhereUniqueWithoutShowInput = {
	data: PlatformOnShowUpdateWithoutShowInput;
	where: PlatformOnShowWhereUniqueInput;
};

export type PlatformOnShowUpdateWithoutPlatformInput = {
	price?: InputMaybe<StringFieldUpdateOperationsInput>;
	show?: InputMaybe<ShowUpdateOneRequiredWithoutPlatformsInput>;
};

export type PlatformOnShowUpdateWithoutShowInput = {
	platform?: InputMaybe<PlatformUpdateOneRequiredWithoutPlatformOnShowInput>;
	price?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PlatformOnShowUpsertWithWhereUniqueWithoutPlatformInput = {
	create: PlatformOnShowCreateWithoutPlatformInput;
	update: PlatformOnShowUpdateWithoutPlatformInput;
	where: PlatformOnShowWhereUniqueInput;
};

export type PlatformOnShowUpsertWithWhereUniqueWithoutShowInput = {
	create: PlatformOnShowCreateWithoutShowInput;
	update: PlatformOnShowUpdateWithoutShowInput;
	where: PlatformOnShowWhereUniqueInput;
};

export type PlatformOnShowWhereInput = {
	AND?: InputMaybe<PlatformOnShowWhereInput[]>;
	NOT?: InputMaybe<PlatformOnShowWhereInput[]>;
	OR?: InputMaybe<PlatformOnShowWhereInput[]>;
	platform?: InputMaybe<PlatformRelationFilter>;
	platformId?: InputMaybe<IntFilter>;
	price?: InputMaybe<StringFilter>;
	show?: InputMaybe<ShowRelationFilter>;
	showId?: InputMaybe<IntFilter>;
};

export type PlatformOnShowWhereUniqueInput = {
	platformId_showId?: InputMaybe<PlatformOnShowPlatformIdShowIdCompoundUniqueInput>;
};

export type PlatformOrderByWithRelationInput = {
	PlatformOnMovie?: InputMaybe<PlatformOnMovieOrderByRelationAggregateInput>;
	PlatformOnShow?: InputMaybe<PlatformOnShowOrderByRelationAggregateInput>;
	id?: InputMaybe<SortOrder>;
	name?: InputMaybe<SortOrder>;
};

export type PlatformRelationFilter = {
	is?: InputMaybe<PlatformWhereInput>;
	isNot?: InputMaybe<PlatformWhereInput>;
};

export type PlatformUpdateOneRequiredWithoutPlatformOnMovieInput = {
	connect?: InputMaybe<PlatformWhereUniqueInput>;
	connectOrCreate?: InputMaybe<PlatformCreateOrConnectWithoutPlatformOnMovieInput>;
	create?: InputMaybe<PlatformCreateWithoutPlatformOnMovieInput>;
	update?: InputMaybe<PlatformUpdateWithoutPlatformOnMovieInput>;
	upsert?: InputMaybe<PlatformUpsertWithoutPlatformOnMovieInput>;
};

export type PlatformUpdateOneRequiredWithoutPlatformOnShowInput = {
	connect?: InputMaybe<PlatformWhereUniqueInput>;
	connectOrCreate?: InputMaybe<PlatformCreateOrConnectWithoutPlatformOnShowInput>;
	create?: InputMaybe<PlatformCreateWithoutPlatformOnShowInput>;
	update?: InputMaybe<PlatformUpdateWithoutPlatformOnShowInput>;
	upsert?: InputMaybe<PlatformUpsertWithoutPlatformOnShowInput>;
};

export type PlatformUpdateWithoutPlatformOnMovieInput = {
	PlatformOnShow?: InputMaybe<PlatformOnShowUpdateManyWithoutPlatformInput>;
	name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PlatformUpdateWithoutPlatformOnShowInput = {
	PlatformOnMovie?: InputMaybe<PlatformOnMovieUpdateManyWithoutPlatformInput>;
	name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PlatformUpsertWithoutPlatformOnMovieInput = {
	create: PlatformCreateWithoutPlatformOnMovieInput;
	update: PlatformUpdateWithoutPlatformOnMovieInput;
};

export type PlatformUpsertWithoutPlatformOnShowInput = {
	create: PlatformCreateWithoutPlatformOnShowInput;
	update: PlatformUpdateWithoutPlatformOnShowInput;
};

export type PlatformWhereInput = {
	AND?: InputMaybe<PlatformWhereInput[]>;
	NOT?: InputMaybe<PlatformWhereInput[]>;
	OR?: InputMaybe<PlatformWhereInput[]>;
	PlatformOnMovie?: InputMaybe<PlatformOnMovieListRelationFilter>;
	PlatformOnShow?: InputMaybe<PlatformOnShowListRelationFilter>;
	id?: InputMaybe<IntFilter>;
	name?: InputMaybe<StringFilter>;
};

export type PlatformWhereUniqueInput = {
	id?: InputMaybe<Scalars['Int']>;
};

export type Query = {
	__typename?: 'Query';
	book?: Maybe<Book>;
	books?: Maybe<Book[]>;
	follows: Follows[];
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

export type QueryFollowsArgs = {
	cursor?: InputMaybe<FollowsWhereUniqueInput>;
	distinct?: InputMaybe<FollowsScalarFieldEnum[]>;
	orderBy?: InputMaybe<FollowsOrderByWithRelationInput[]>;
	skip?: InputMaybe<Scalars['Int']>;
	take?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<FollowsWhereInput>;
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
	where: PersonWhereUniqueInput;
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

export type Show = {
	__typename?: 'Show';
	_count?: Maybe<ShowCount>;
	actors: ActorInShow[];
	createdAt: Scalars['DateTime'];
	description: Scalars['String'];
	id: Scalars['Int'];
	locked: Scalars['Boolean'];
	platforms: PlatformOnShow[];
	released?: Maybe<Scalars['DateTime']>;
	soundtrack: SongInShow[];
	thumbnail: Scalars['String'];
	title: Scalars['String'];
	updatedAt: Scalars['DateTime'];
};

export type ShowActorsArgs = {
	cursor?: InputMaybe<ActorInShowWhereUniqueInput>;
	distinct?: InputMaybe<ActorInShowScalarFieldEnum[]>;
	orderBy?: InputMaybe<ActorInShowOrderByWithRelationInput[]>;
	skip?: InputMaybe<Scalars['Int']>;
	take?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<ActorInShowWhereInput>;
};

export type ShowPlatformsArgs = {
	cursor?: InputMaybe<PlatformOnShowWhereUniqueInput>;
	distinct?: InputMaybe<PlatformOnShowScalarFieldEnum[]>;
	orderBy?: InputMaybe<PlatformOnShowOrderByWithRelationInput[]>;
	skip?: InputMaybe<Scalars['Int']>;
	take?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<PlatformOnShowWhereInput>;
};

export type ShowSoundtrackArgs = {
	cursor?: InputMaybe<SongInShowWhereUniqueInput>;
	distinct?: InputMaybe<SongInShowScalarFieldEnum[]>;
	orderBy?: InputMaybe<SongInShowOrderByWithRelationInput[]>;
	skip?: InputMaybe<Scalars['Int']>;
	take?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<SongInShowWhereInput>;
};

export type ShowCount = {
	__typename?: 'ShowCount';
	actors: Scalars['Int'];
	platforms: Scalars['Int'];
	soundtrack: Scalars['Int'];
};

export type ShowCreateNestedOneWithoutActorsInput = {
	connect?: InputMaybe<ShowWhereUniqueInput>;
	connectOrCreate?: InputMaybe<ShowCreateOrConnectWithoutActorsInput>;
	create?: InputMaybe<ShowCreateWithoutActorsInput>;
};

export type ShowCreateNestedOneWithoutPlatformsInput = {
	connect?: InputMaybe<ShowWhereUniqueInput>;
	connectOrCreate?: InputMaybe<ShowCreateOrConnectWithoutPlatformsInput>;
	create?: InputMaybe<ShowCreateWithoutPlatformsInput>;
};

export type ShowCreateNestedOneWithoutSoundtrackInput = {
	connect?: InputMaybe<ShowWhereUniqueInput>;
	connectOrCreate?: InputMaybe<ShowCreateOrConnectWithoutSoundtrackInput>;
	create?: InputMaybe<ShowCreateWithoutSoundtrackInput>;
};

export type ShowCreateOrConnectWithoutActorsInput = {
	create: ShowCreateWithoutActorsInput;
	where: ShowWhereUniqueInput;
};

export type ShowCreateOrConnectWithoutPlatformsInput = {
	create: ShowCreateWithoutPlatformsInput;
	where: ShowWhereUniqueInput;
};

export type ShowCreateOrConnectWithoutSoundtrackInput = {
	create: ShowCreateWithoutSoundtrackInput;
	where: ShowWhereUniqueInput;
};

export type ShowCreateWithoutActorsInput = {
	createdAt?: InputMaybe<Scalars['DateTime']>;
	description: Scalars['String'];
	locked?: InputMaybe<Scalars['Boolean']>;
	platforms?: InputMaybe<PlatformOnShowCreateNestedManyWithoutShowInput>;
	released?: InputMaybe<Scalars['DateTime']>;
	soundtrack?: InputMaybe<SongInShowCreateNestedManyWithoutShowInput>;
	thumbnail?: InputMaybe<Scalars['String']>;
	title: Scalars['String'];
	updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ShowCreateWithoutPlatformsInput = {
	actors?: InputMaybe<ActorInShowCreateNestedManyWithoutShowInput>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	description: Scalars['String'];
	locked?: InputMaybe<Scalars['Boolean']>;
	released?: InputMaybe<Scalars['DateTime']>;
	soundtrack?: InputMaybe<SongInShowCreateNestedManyWithoutShowInput>;
	thumbnail?: InputMaybe<Scalars['String']>;
	title: Scalars['String'];
	updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ShowCreateWithoutSoundtrackInput = {
	actors?: InputMaybe<ActorInShowCreateNestedManyWithoutShowInput>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	description: Scalars['String'];
	locked?: InputMaybe<Scalars['Boolean']>;
	platforms?: InputMaybe<PlatformOnShowCreateNestedManyWithoutShowInput>;
	released?: InputMaybe<Scalars['DateTime']>;
	thumbnail?: InputMaybe<Scalars['String']>;
	title: Scalars['String'];
	updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ShowOrderByWithRelationInput = {
	actors?: InputMaybe<ActorInShowOrderByRelationAggregateInput>;
	createdAt?: InputMaybe<SortOrder>;
	description?: InputMaybe<SortOrder>;
	id?: InputMaybe<SortOrder>;
	locked?: InputMaybe<SortOrder>;
	platforms?: InputMaybe<PlatformOnShowOrderByRelationAggregateInput>;
	released?: InputMaybe<SortOrder>;
	soundtrack?: InputMaybe<SongInShowOrderByRelationAggregateInput>;
	thumbnail?: InputMaybe<SortOrder>;
	title?: InputMaybe<SortOrder>;
	updatedAt?: InputMaybe<SortOrder>;
};

export type ShowRelationFilter = {
	is?: InputMaybe<ShowWhereInput>;
	isNot?: InputMaybe<ShowWhereInput>;
};

export type ShowUpdateOneRequiredWithoutActorsInput = {
	connect?: InputMaybe<ShowWhereUniqueInput>;
	connectOrCreate?: InputMaybe<ShowCreateOrConnectWithoutActorsInput>;
	create?: InputMaybe<ShowCreateWithoutActorsInput>;
	update?: InputMaybe<ShowUpdateWithoutActorsInput>;
	upsert?: InputMaybe<ShowUpsertWithoutActorsInput>;
};

export type ShowUpdateOneRequiredWithoutPlatformsInput = {
	connect?: InputMaybe<ShowWhereUniqueInput>;
	connectOrCreate?: InputMaybe<ShowCreateOrConnectWithoutPlatformsInput>;
	create?: InputMaybe<ShowCreateWithoutPlatformsInput>;
	update?: InputMaybe<ShowUpdateWithoutPlatformsInput>;
	upsert?: InputMaybe<ShowUpsertWithoutPlatformsInput>;
};

export type ShowUpdateOneRequiredWithoutSoundtrackInput = {
	connect?: InputMaybe<ShowWhereUniqueInput>;
	connectOrCreate?: InputMaybe<ShowCreateOrConnectWithoutSoundtrackInput>;
	create?: InputMaybe<ShowCreateWithoutSoundtrackInput>;
	update?: InputMaybe<ShowUpdateWithoutSoundtrackInput>;
	upsert?: InputMaybe<ShowUpsertWithoutSoundtrackInput>;
};

export type ShowUpdateWithoutActorsInput = {
	createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	description?: InputMaybe<StringFieldUpdateOperationsInput>;
	locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
	platforms?: InputMaybe<PlatformOnShowUpdateManyWithoutShowInput>;
	released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	soundtrack?: InputMaybe<SongInShowUpdateManyWithoutShowInput>;
	thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
	title?: InputMaybe<StringFieldUpdateOperationsInput>;
	updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ShowUpdateWithoutPlatformsInput = {
	actors?: InputMaybe<ActorInShowUpdateManyWithoutShowInput>;
	createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	description?: InputMaybe<StringFieldUpdateOperationsInput>;
	locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
	released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	soundtrack?: InputMaybe<SongInShowUpdateManyWithoutShowInput>;
	thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
	title?: InputMaybe<StringFieldUpdateOperationsInput>;
	updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ShowUpdateWithoutSoundtrackInput = {
	actors?: InputMaybe<ActorInShowUpdateManyWithoutShowInput>;
	createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	description?: InputMaybe<StringFieldUpdateOperationsInput>;
	locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
	platforms?: InputMaybe<PlatformOnShowUpdateManyWithoutShowInput>;
	released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
	title?: InputMaybe<StringFieldUpdateOperationsInput>;
	updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ShowUpsertWithoutActorsInput = {
	create: ShowCreateWithoutActorsInput;
	update: ShowUpdateWithoutActorsInput;
};

export type ShowUpsertWithoutPlatformsInput = {
	create: ShowCreateWithoutPlatformsInput;
	update: ShowUpdateWithoutPlatformsInput;
};

export type ShowUpsertWithoutSoundtrackInput = {
	create: ShowCreateWithoutSoundtrackInput;
	update: ShowUpdateWithoutSoundtrackInput;
};

export type ShowWhereInput = {
	AND?: InputMaybe<ShowWhereInput[]>;
	NOT?: InputMaybe<ShowWhereInput[]>;
	OR?: InputMaybe<ShowWhereInput[]>;
	actors?: InputMaybe<ActorInShowListRelationFilter>;
	createdAt?: InputMaybe<DateTimeFilter>;
	description?: InputMaybe<StringFilter>;
	id?: InputMaybe<IntFilter>;
	locked?: InputMaybe<BoolFilter>;
	platforms?: InputMaybe<PlatformOnShowListRelationFilter>;
	released?: InputMaybe<DateTimeNullableFilter>;
	soundtrack?: InputMaybe<SongInShowListRelationFilter>;
	thumbnail?: InputMaybe<StringFilter>;
	title?: InputMaybe<StringFilter>;
	updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ShowWhereUniqueInput = {
	id?: InputMaybe<Scalars['Int']>;
};

export type Song = {
	__typename?: 'Song';
	_count?: Maybe<SongCount>;
	artists: Person[];
	createdAt: Scalars['DateTime'];
	description: Scalars['String'];
	id: Scalars['Int'];
	locked: Scalars['Boolean'];
	released?: Maybe<Scalars['DateTime']>;
	songInMovie: SongInMovie[];
	songInShow: SongInShow[];
	thumbnail: Scalars['String'];
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

export type SongSongInMovieArgs = {
	cursor?: InputMaybe<SongInMovieWhereUniqueInput>;
	distinct?: InputMaybe<SongInMovieScalarFieldEnum[]>;
	orderBy?: InputMaybe<SongInMovieOrderByWithRelationInput[]>;
	skip?: InputMaybe<Scalars['Int']>;
	take?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<SongInMovieWhereInput>;
};

export type SongSongInShowArgs = {
	cursor?: InputMaybe<SongInShowWhereUniqueInput>;
	distinct?: InputMaybe<SongInShowScalarFieldEnum[]>;
	orderBy?: InputMaybe<SongInShowOrderByWithRelationInput[]>;
	skip?: InputMaybe<Scalars['Int']>;
	take?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<SongInShowWhereInput>;
};

export type SongCount = {
	__typename?: 'SongCount';
	artists: Scalars['Int'];
	songInMovie: Scalars['Int'];
	songInShow: Scalars['Int'];
};

export type SongCreateInput = {
	artists?: InputMaybe<PersonCreateNestedManyWithoutSongsInput>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	description: Scalars['String'];
	locked?: InputMaybe<Scalars['Boolean']>;
	released?: InputMaybe<Scalars['DateTime']>;
	songInMovie?: InputMaybe<SongInMovieCreateNestedManyWithoutSongInput>;
	songInShow?: InputMaybe<SongInShowCreateNestedManyWithoutSongInput>;
	thumbnail?: InputMaybe<Scalars['String']>;
	title: Scalars['String'];
	updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type SongCreateNestedManyWithoutArtistsInput = {
	connect?: InputMaybe<SongWhereUniqueInput[]>;
	connectOrCreate?: InputMaybe<SongCreateOrConnectWithoutArtistsInput[]>;
	create?: InputMaybe<SongCreateWithoutArtistsInput[]>;
};

export type SongCreateNestedOneWithoutSongInMovieInput = {
	connect?: InputMaybe<SongWhereUniqueInput>;
	connectOrCreate?: InputMaybe<SongCreateOrConnectWithoutSongInMovieInput>;
	create?: InputMaybe<SongCreateWithoutSongInMovieInput>;
};

export type SongCreateNestedOneWithoutSongInShowInput = {
	connect?: InputMaybe<SongWhereUniqueInput>;
	connectOrCreate?: InputMaybe<SongCreateOrConnectWithoutSongInShowInput>;
	create?: InputMaybe<SongCreateWithoutSongInShowInput>;
};

export type SongCreateOrConnectWithoutArtistsInput = {
	create: SongCreateWithoutArtistsInput;
	where: SongWhereUniqueInput;
};

export type SongCreateOrConnectWithoutSongInMovieInput = {
	create: SongCreateWithoutSongInMovieInput;
	where: SongWhereUniqueInput;
};

export type SongCreateOrConnectWithoutSongInShowInput = {
	create: SongCreateWithoutSongInShowInput;
	where: SongWhereUniqueInput;
};

export type SongCreateWithoutArtistsInput = {
	createdAt?: InputMaybe<Scalars['DateTime']>;
	description: Scalars['String'];
	locked?: InputMaybe<Scalars['Boolean']>;
	released?: InputMaybe<Scalars['DateTime']>;
	songInMovie?: InputMaybe<SongInMovieCreateNestedManyWithoutSongInput>;
	songInShow?: InputMaybe<SongInShowCreateNestedManyWithoutSongInput>;
	thumbnail?: InputMaybe<Scalars['String']>;
	title: Scalars['String'];
	updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type SongCreateWithoutSongInMovieInput = {
	artists?: InputMaybe<PersonCreateNestedManyWithoutSongsInput>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	description: Scalars['String'];
	locked?: InputMaybe<Scalars['Boolean']>;
	released?: InputMaybe<Scalars['DateTime']>;
	songInShow?: InputMaybe<SongInShowCreateNestedManyWithoutSongInput>;
	thumbnail?: InputMaybe<Scalars['String']>;
	title: Scalars['String'];
	updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type SongCreateWithoutSongInShowInput = {
	artists?: InputMaybe<PersonCreateNestedManyWithoutSongsInput>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	description: Scalars['String'];
	locked?: InputMaybe<Scalars['Boolean']>;
	released?: InputMaybe<Scalars['DateTime']>;
	songInMovie?: InputMaybe<SongInMovieCreateNestedManyWithoutSongInput>;
	thumbnail?: InputMaybe<Scalars['String']>;
	title: Scalars['String'];
	updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type SongInMovie = {
	__typename?: 'SongInMovie';
	description: Scalars['String'];
	movie: Movie;
	movieId: Scalars['Int'];
	song: Song;
	songId: Scalars['Int'];
	timestamp: Scalars['DateTime'];
};

export type SongInMovieCreateManyMovieInput = {
	description: Scalars['String'];
	songId: Scalars['Int'];
	timestamp: Scalars['DateTime'];
};

export type SongInMovieCreateManyMovieInputEnvelope = {
	data: SongInMovieCreateManyMovieInput[];
	skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type SongInMovieCreateManySongInput = {
	description: Scalars['String'];
	movieId: Scalars['Int'];
	timestamp: Scalars['DateTime'];
};

export type SongInMovieCreateManySongInputEnvelope = {
	data: SongInMovieCreateManySongInput[];
	skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type SongInMovieCreateNestedManyWithoutMovieInput = {
	connect?: InputMaybe<SongInMovieWhereUniqueInput[]>;
	connectOrCreate?: InputMaybe<SongInMovieCreateOrConnectWithoutMovieInput[]>;
	create?: InputMaybe<SongInMovieCreateWithoutMovieInput[]>;
	createMany?: InputMaybe<SongInMovieCreateManyMovieInputEnvelope>;
};

export type SongInMovieCreateNestedManyWithoutSongInput = {
	connect?: InputMaybe<SongInMovieWhereUniqueInput[]>;
	connectOrCreate?: InputMaybe<SongInMovieCreateOrConnectWithoutSongInput[]>;
	create?: InputMaybe<SongInMovieCreateWithoutSongInput[]>;
	createMany?: InputMaybe<SongInMovieCreateManySongInputEnvelope>;
};

export type SongInMovieCreateOrConnectWithoutMovieInput = {
	create: SongInMovieCreateWithoutMovieInput;
	where: SongInMovieWhereUniqueInput;
};

export type SongInMovieCreateOrConnectWithoutSongInput = {
	create: SongInMovieCreateWithoutSongInput;
	where: SongInMovieWhereUniqueInput;
};

export type SongInMovieCreateWithoutMovieInput = {
	description: Scalars['String'];
	song: SongCreateNestedOneWithoutSongInMovieInput;
	timestamp: Scalars['DateTime'];
};

export type SongInMovieCreateWithoutSongInput = {
	description: Scalars['String'];
	movie: MovieCreateNestedOneWithoutSoundtrackInput;
	timestamp: Scalars['DateTime'];
};

export type SongInMovieListRelationFilter = {
	every?: InputMaybe<SongInMovieWhereInput>;
	none?: InputMaybe<SongInMovieWhereInput>;
	some?: InputMaybe<SongInMovieWhereInput>;
};

export type SongInMovieOrderByRelationAggregateInput = {
	_count?: InputMaybe<SortOrder>;
};

export type SongInMovieOrderByWithRelationInput = {
	description?: InputMaybe<SortOrder>;
	movie?: InputMaybe<MovieOrderByWithRelationInput>;
	movieId?: InputMaybe<SortOrder>;
	song?: InputMaybe<SongOrderByWithRelationInput>;
	songId?: InputMaybe<SortOrder>;
	timestamp?: InputMaybe<SortOrder>;
};

export enum SongInMovieScalarFieldEnum {
	Description = 'description',
	MovieId = 'movieId',
	SongId = 'songId',
	Timestamp = 'timestamp'
}

export type SongInMovieScalarWhereInput = {
	AND?: InputMaybe<SongInMovieScalarWhereInput[]>;
	NOT?: InputMaybe<SongInMovieScalarWhereInput[]>;
	OR?: InputMaybe<SongInMovieScalarWhereInput[]>;
	description?: InputMaybe<StringFilter>;
	movieId?: InputMaybe<IntFilter>;
	songId?: InputMaybe<IntFilter>;
	timestamp?: InputMaybe<DateTimeFilter>;
};

export type SongInMovieSongIdMovieIdCompoundUniqueInput = {
	movieId: Scalars['Int'];
	songId: Scalars['Int'];
};

export type SongInMovieUpdateManyMutationInput = {
	description?: InputMaybe<StringFieldUpdateOperationsInput>;
	timestamp?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SongInMovieUpdateManyWithWhereWithoutMovieInput = {
	data: SongInMovieUpdateManyMutationInput;
	where: SongInMovieScalarWhereInput;
};

export type SongInMovieUpdateManyWithWhereWithoutSongInput = {
	data: SongInMovieUpdateManyMutationInput;
	where: SongInMovieScalarWhereInput;
};

export type SongInMovieUpdateManyWithoutMovieInput = {
	connect?: InputMaybe<SongInMovieWhereUniqueInput[]>;
	connectOrCreate?: InputMaybe<SongInMovieCreateOrConnectWithoutMovieInput[]>;
	create?: InputMaybe<SongInMovieCreateWithoutMovieInput[]>;
	createMany?: InputMaybe<SongInMovieCreateManyMovieInputEnvelope>;
	delete?: InputMaybe<SongInMovieWhereUniqueInput[]>;
	deleteMany?: InputMaybe<SongInMovieScalarWhereInput[]>;
	disconnect?: InputMaybe<SongInMovieWhereUniqueInput[]>;
	set?: InputMaybe<SongInMovieWhereUniqueInput[]>;
	update?: InputMaybe<SongInMovieUpdateWithWhereUniqueWithoutMovieInput[]>;
	updateMany?: InputMaybe<SongInMovieUpdateManyWithWhereWithoutMovieInput[]>;
	upsert?: InputMaybe<SongInMovieUpsertWithWhereUniqueWithoutMovieInput[]>;
};

export type SongInMovieUpdateManyWithoutSongInput = {
	connect?: InputMaybe<SongInMovieWhereUniqueInput[]>;
	connectOrCreate?: InputMaybe<SongInMovieCreateOrConnectWithoutSongInput[]>;
	create?: InputMaybe<SongInMovieCreateWithoutSongInput[]>;
	createMany?: InputMaybe<SongInMovieCreateManySongInputEnvelope>;
	delete?: InputMaybe<SongInMovieWhereUniqueInput[]>;
	deleteMany?: InputMaybe<SongInMovieScalarWhereInput[]>;
	disconnect?: InputMaybe<SongInMovieWhereUniqueInput[]>;
	set?: InputMaybe<SongInMovieWhereUniqueInput[]>;
	update?: InputMaybe<SongInMovieUpdateWithWhereUniqueWithoutSongInput[]>;
	updateMany?: InputMaybe<SongInMovieUpdateManyWithWhereWithoutSongInput[]>;
	upsert?: InputMaybe<SongInMovieUpsertWithWhereUniqueWithoutSongInput[]>;
};

export type SongInMovieUpdateWithWhereUniqueWithoutMovieInput = {
	data: SongInMovieUpdateWithoutMovieInput;
	where: SongInMovieWhereUniqueInput;
};

export type SongInMovieUpdateWithWhereUniqueWithoutSongInput = {
	data: SongInMovieUpdateWithoutSongInput;
	where: SongInMovieWhereUniqueInput;
};

export type SongInMovieUpdateWithoutMovieInput = {
	description?: InputMaybe<StringFieldUpdateOperationsInput>;
	song?: InputMaybe<SongUpdateOneRequiredWithoutSongInMovieInput>;
	timestamp?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SongInMovieUpdateWithoutSongInput = {
	description?: InputMaybe<StringFieldUpdateOperationsInput>;
	movie?: InputMaybe<MovieUpdateOneRequiredWithoutSoundtrackInput>;
	timestamp?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SongInMovieUpsertWithWhereUniqueWithoutMovieInput = {
	create: SongInMovieCreateWithoutMovieInput;
	update: SongInMovieUpdateWithoutMovieInput;
	where: SongInMovieWhereUniqueInput;
};

export type SongInMovieUpsertWithWhereUniqueWithoutSongInput = {
	create: SongInMovieCreateWithoutSongInput;
	update: SongInMovieUpdateWithoutSongInput;
	where: SongInMovieWhereUniqueInput;
};

export type SongInMovieWhereInput = {
	AND?: InputMaybe<SongInMovieWhereInput[]>;
	NOT?: InputMaybe<SongInMovieWhereInput[]>;
	OR?: InputMaybe<SongInMovieWhereInput[]>;
	description?: InputMaybe<StringFilter>;
	movie?: InputMaybe<MovieRelationFilter>;
	movieId?: InputMaybe<IntFilter>;
	song?: InputMaybe<SongRelationFilter>;
	songId?: InputMaybe<IntFilter>;
	timestamp?: InputMaybe<DateTimeFilter>;
};

export type SongInMovieWhereUniqueInput = {
	songId_movieId?: InputMaybe<SongInMovieSongIdMovieIdCompoundUniqueInput>;
};

export type SongInShow = {
	__typename?: 'SongInShow';
	description: Scalars['String'];
	show: Show;
	showId: Scalars['Int'];
	song: Song;
	songId: Scalars['Int'];
	timestamp: Scalars['DateTime'];
};

export type SongInShowCreateManyShowInput = {
	description: Scalars['String'];
	songId: Scalars['Int'];
	timestamp: Scalars['DateTime'];
};

export type SongInShowCreateManyShowInputEnvelope = {
	data: SongInShowCreateManyShowInput[];
	skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type SongInShowCreateManySongInput = {
	description: Scalars['String'];
	showId: Scalars['Int'];
	timestamp: Scalars['DateTime'];
};

export type SongInShowCreateManySongInputEnvelope = {
	data: SongInShowCreateManySongInput[];
	skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type SongInShowCreateNestedManyWithoutShowInput = {
	connect?: InputMaybe<SongInShowWhereUniqueInput[]>;
	connectOrCreate?: InputMaybe<SongInShowCreateOrConnectWithoutShowInput[]>;
	create?: InputMaybe<SongInShowCreateWithoutShowInput[]>;
	createMany?: InputMaybe<SongInShowCreateManyShowInputEnvelope>;
};

export type SongInShowCreateNestedManyWithoutSongInput = {
	connect?: InputMaybe<SongInShowWhereUniqueInput[]>;
	connectOrCreate?: InputMaybe<SongInShowCreateOrConnectWithoutSongInput[]>;
	create?: InputMaybe<SongInShowCreateWithoutSongInput[]>;
	createMany?: InputMaybe<SongInShowCreateManySongInputEnvelope>;
};

export type SongInShowCreateOrConnectWithoutShowInput = {
	create: SongInShowCreateWithoutShowInput;
	where: SongInShowWhereUniqueInput;
};

export type SongInShowCreateOrConnectWithoutSongInput = {
	create: SongInShowCreateWithoutSongInput;
	where: SongInShowWhereUniqueInput;
};

export type SongInShowCreateWithoutShowInput = {
	description: Scalars['String'];
	song: SongCreateNestedOneWithoutSongInShowInput;
	timestamp: Scalars['DateTime'];
};

export type SongInShowCreateWithoutSongInput = {
	description: Scalars['String'];
	show: ShowCreateNestedOneWithoutSoundtrackInput;
	timestamp: Scalars['DateTime'];
};

export type SongInShowListRelationFilter = {
	every?: InputMaybe<SongInShowWhereInput>;
	none?: InputMaybe<SongInShowWhereInput>;
	some?: InputMaybe<SongInShowWhereInput>;
};

export type SongInShowOrderByRelationAggregateInput = {
	_count?: InputMaybe<SortOrder>;
};

export type SongInShowOrderByWithRelationInput = {
	description?: InputMaybe<SortOrder>;
	show?: InputMaybe<ShowOrderByWithRelationInput>;
	showId?: InputMaybe<SortOrder>;
	song?: InputMaybe<SongOrderByWithRelationInput>;
	songId?: InputMaybe<SortOrder>;
	timestamp?: InputMaybe<SortOrder>;
};

export enum SongInShowScalarFieldEnum {
	Description = 'description',
	ShowId = 'showId',
	SongId = 'songId',
	Timestamp = 'timestamp'
}

export type SongInShowScalarWhereInput = {
	AND?: InputMaybe<SongInShowScalarWhereInput[]>;
	NOT?: InputMaybe<SongInShowScalarWhereInput[]>;
	OR?: InputMaybe<SongInShowScalarWhereInput[]>;
	description?: InputMaybe<StringFilter>;
	showId?: InputMaybe<IntFilter>;
	songId?: InputMaybe<IntFilter>;
	timestamp?: InputMaybe<DateTimeFilter>;
};

export type SongInShowSongIdShowIdCompoundUniqueInput = {
	showId: Scalars['Int'];
	songId: Scalars['Int'];
};

export type SongInShowUpdateManyMutationInput = {
	description?: InputMaybe<StringFieldUpdateOperationsInput>;
	timestamp?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SongInShowUpdateManyWithWhereWithoutShowInput = {
	data: SongInShowUpdateManyMutationInput;
	where: SongInShowScalarWhereInput;
};

export type SongInShowUpdateManyWithWhereWithoutSongInput = {
	data: SongInShowUpdateManyMutationInput;
	where: SongInShowScalarWhereInput;
};

export type SongInShowUpdateManyWithoutShowInput = {
	connect?: InputMaybe<SongInShowWhereUniqueInput[]>;
	connectOrCreate?: InputMaybe<SongInShowCreateOrConnectWithoutShowInput[]>;
	create?: InputMaybe<SongInShowCreateWithoutShowInput[]>;
	createMany?: InputMaybe<SongInShowCreateManyShowInputEnvelope>;
	delete?: InputMaybe<SongInShowWhereUniqueInput[]>;
	deleteMany?: InputMaybe<SongInShowScalarWhereInput[]>;
	disconnect?: InputMaybe<SongInShowWhereUniqueInput[]>;
	set?: InputMaybe<SongInShowWhereUniqueInput[]>;
	update?: InputMaybe<SongInShowUpdateWithWhereUniqueWithoutShowInput[]>;
	updateMany?: InputMaybe<SongInShowUpdateManyWithWhereWithoutShowInput[]>;
	upsert?: InputMaybe<SongInShowUpsertWithWhereUniqueWithoutShowInput[]>;
};

export type SongInShowUpdateManyWithoutSongInput = {
	connect?: InputMaybe<SongInShowWhereUniqueInput[]>;
	connectOrCreate?: InputMaybe<SongInShowCreateOrConnectWithoutSongInput[]>;
	create?: InputMaybe<SongInShowCreateWithoutSongInput[]>;
	createMany?: InputMaybe<SongInShowCreateManySongInputEnvelope>;
	delete?: InputMaybe<SongInShowWhereUniqueInput[]>;
	deleteMany?: InputMaybe<SongInShowScalarWhereInput[]>;
	disconnect?: InputMaybe<SongInShowWhereUniqueInput[]>;
	set?: InputMaybe<SongInShowWhereUniqueInput[]>;
	update?: InputMaybe<SongInShowUpdateWithWhereUniqueWithoutSongInput[]>;
	updateMany?: InputMaybe<SongInShowUpdateManyWithWhereWithoutSongInput[]>;
	upsert?: InputMaybe<SongInShowUpsertWithWhereUniqueWithoutSongInput[]>;
};

export type SongInShowUpdateWithWhereUniqueWithoutShowInput = {
	data: SongInShowUpdateWithoutShowInput;
	where: SongInShowWhereUniqueInput;
};

export type SongInShowUpdateWithWhereUniqueWithoutSongInput = {
	data: SongInShowUpdateWithoutSongInput;
	where: SongInShowWhereUniqueInput;
};

export type SongInShowUpdateWithoutShowInput = {
	description?: InputMaybe<StringFieldUpdateOperationsInput>;
	song?: InputMaybe<SongUpdateOneRequiredWithoutSongInShowInput>;
	timestamp?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SongInShowUpdateWithoutSongInput = {
	description?: InputMaybe<StringFieldUpdateOperationsInput>;
	show?: InputMaybe<ShowUpdateOneRequiredWithoutSoundtrackInput>;
	timestamp?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SongInShowUpsertWithWhereUniqueWithoutShowInput = {
	create: SongInShowCreateWithoutShowInput;
	update: SongInShowUpdateWithoutShowInput;
	where: SongInShowWhereUniqueInput;
};

export type SongInShowUpsertWithWhereUniqueWithoutSongInput = {
	create: SongInShowCreateWithoutSongInput;
	update: SongInShowUpdateWithoutSongInput;
	where: SongInShowWhereUniqueInput;
};

export type SongInShowWhereInput = {
	AND?: InputMaybe<SongInShowWhereInput[]>;
	NOT?: InputMaybe<SongInShowWhereInput[]>;
	OR?: InputMaybe<SongInShowWhereInput[]>;
	description?: InputMaybe<StringFilter>;
	show?: InputMaybe<ShowRelationFilter>;
	showId?: InputMaybe<IntFilter>;
	song?: InputMaybe<SongRelationFilter>;
	songId?: InputMaybe<IntFilter>;
	timestamp?: InputMaybe<DateTimeFilter>;
};

export type SongInShowWhereUniqueInput = {
	songId_showId?: InputMaybe<SongInShowSongIdShowIdCompoundUniqueInput>;
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
	released?: InputMaybe<SortOrder>;
	songInMovie?: InputMaybe<SongInMovieOrderByRelationAggregateInput>;
	songInShow?: InputMaybe<SongInShowOrderByRelationAggregateInput>;
	thumbnail?: InputMaybe<SortOrder>;
	title?: InputMaybe<SortOrder>;
	updatedAt?: InputMaybe<SortOrder>;
};

export type SongRelationFilter = {
	is?: InputMaybe<SongWhereInput>;
	isNot?: InputMaybe<SongWhereInput>;
};

export enum SongScalarFieldEnum {
	CreatedAt = 'createdAt',
	Description = 'description',
	Id = 'id',
	Locked = 'locked',
	Released = 'released',
	Thumbnail = 'thumbnail',
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
	released?: InputMaybe<DateTimeNullableFilter>;
	thumbnail?: InputMaybe<StringFilter>;
	title?: InputMaybe<StringFilter>;
	updatedAt?: InputMaybe<DateTimeFilter>;
};

export type SongUpdateInput = {
	artists?: InputMaybe<PersonUpdateManyWithoutSongsInput>;
	createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	description?: InputMaybe<StringFieldUpdateOperationsInput>;
	locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
	released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	songInMovie?: InputMaybe<SongInMovieUpdateManyWithoutSongInput>;
	songInShow?: InputMaybe<SongInShowUpdateManyWithoutSongInput>;
	thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
	title?: InputMaybe<StringFieldUpdateOperationsInput>;
	updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SongUpdateManyMutationInput = {
	createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	description?: InputMaybe<StringFieldUpdateOperationsInput>;
	locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
	released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
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

export type SongUpdateOneRequiredWithoutSongInMovieInput = {
	connect?: InputMaybe<SongWhereUniqueInput>;
	connectOrCreate?: InputMaybe<SongCreateOrConnectWithoutSongInMovieInput>;
	create?: InputMaybe<SongCreateWithoutSongInMovieInput>;
	update?: InputMaybe<SongUpdateWithoutSongInMovieInput>;
	upsert?: InputMaybe<SongUpsertWithoutSongInMovieInput>;
};

export type SongUpdateOneRequiredWithoutSongInShowInput = {
	connect?: InputMaybe<SongWhereUniqueInput>;
	connectOrCreate?: InputMaybe<SongCreateOrConnectWithoutSongInShowInput>;
	create?: InputMaybe<SongCreateWithoutSongInShowInput>;
	update?: InputMaybe<SongUpdateWithoutSongInShowInput>;
	upsert?: InputMaybe<SongUpsertWithoutSongInShowInput>;
};

export type SongUpdateWithWhereUniqueWithoutArtistsInput = {
	data: SongUpdateWithoutArtistsInput;
	where: SongWhereUniqueInput;
};

export type SongUpdateWithoutArtistsInput = {
	createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	description?: InputMaybe<StringFieldUpdateOperationsInput>;
	locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
	released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	songInMovie?: InputMaybe<SongInMovieUpdateManyWithoutSongInput>;
	songInShow?: InputMaybe<SongInShowUpdateManyWithoutSongInput>;
	thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
	title?: InputMaybe<StringFieldUpdateOperationsInput>;
	updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SongUpdateWithoutSongInMovieInput = {
	artists?: InputMaybe<PersonUpdateManyWithoutSongsInput>;
	createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	description?: InputMaybe<StringFieldUpdateOperationsInput>;
	locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
	released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	songInShow?: InputMaybe<SongInShowUpdateManyWithoutSongInput>;
	thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
	title?: InputMaybe<StringFieldUpdateOperationsInput>;
	updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SongUpdateWithoutSongInShowInput = {
	artists?: InputMaybe<PersonUpdateManyWithoutSongsInput>;
	createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	description?: InputMaybe<StringFieldUpdateOperationsInput>;
	locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
	released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	songInMovie?: InputMaybe<SongInMovieUpdateManyWithoutSongInput>;
	thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
	title?: InputMaybe<StringFieldUpdateOperationsInput>;
	updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SongUpsertWithWhereUniqueWithoutArtistsInput = {
	create: SongCreateWithoutArtistsInput;
	update: SongUpdateWithoutArtistsInput;
	where: SongWhereUniqueInput;
};

export type SongUpsertWithoutSongInMovieInput = {
	create: SongCreateWithoutSongInMovieInput;
	update: SongUpdateWithoutSongInMovieInput;
};

export type SongUpsertWithoutSongInShowInput = {
	create: SongCreateWithoutSongInShowInput;
	update: SongUpdateWithoutSongInShowInput;
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
	released?: InputMaybe<DateTimeNullableFilter>;
	songInMovie?: InputMaybe<SongInMovieListRelationFilter>;
	songInShow?: InputMaybe<SongInShowListRelationFilter>;
	thumbnail?: InputMaybe<StringFilter>;
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

export type StringNullableFilter = {
	contains?: InputMaybe<Scalars['String']>;
	endsWith?: InputMaybe<Scalars['String']>;
	equals?: InputMaybe<Scalars['String']>;
	gt?: InputMaybe<Scalars['String']>;
	gte?: InputMaybe<Scalars['String']>;
	in?: InputMaybe<Array<Scalars['String']>>;
	lt?: InputMaybe<Scalars['String']>;
	lte?: InputMaybe<Scalars['String']>;
	mode?: InputMaybe<QueryMode>;
	not?: InputMaybe<NestedStringNullableFilter>;
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

/** The type of thumbnail upload */
export enum UploadType {
	Book = 'Book',
	Movie = 'Movie',
	Person = 'Person',
	Song = 'Song'
}

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
	followers: Follows[];
	following: Follows[];
	id: Scalars['Int'];
	isFollowing: Scalars['Boolean'];
	location: Scalars['String'];
	notifications: Notification[];
	role: Role;
	updatedAt: Scalars['DateTime'];
	username: Scalars['String'];
	website: Scalars['String'];
};

export type UserFollowersArgs = {
	cursor?: InputMaybe<FollowsWhereUniqueInput>;
	distinct?: InputMaybe<FollowsScalarFieldEnum[]>;
	orderBy?: InputMaybe<FollowsOrderByWithRelationInput[]>;
	skip?: InputMaybe<Scalars['Int']>;
	take?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<FollowsWhereInput>;
};

export type UserFollowingArgs = {
	cursor?: InputMaybe<FollowsWhereUniqueInput>;
	distinct?: InputMaybe<FollowsScalarFieldEnum[]>;
	orderBy?: InputMaybe<FollowsOrderByWithRelationInput[]>;
	skip?: InputMaybe<Scalars['Int']>;
	take?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<FollowsWhereInput>;
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

export type UserOrderByWithRelationInput = {
	avatar?: InputMaybe<SortOrder>;
	bio?: InputMaybe<SortOrder>;
	confirmed?: InputMaybe<SortOrder>;
	createdAt?: InputMaybe<SortOrder>;
	displayname?: InputMaybe<SortOrder>;
	dob?: InputMaybe<SortOrder>;
	email?: InputMaybe<SortOrder>;
	followers?: InputMaybe<FollowsOrderByRelationAggregateInput>;
	following?: InputMaybe<FollowsOrderByRelationAggregateInput>;
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
	followers?: InputMaybe<FollowsListRelationFilter>;
	following?: InputMaybe<FollowsListRelationFilter>;
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

export type CreatePersonMutationVariables = Exact<{
	data: PersonCreateInput;
}>;

export type CreatePersonMutation = {__typename?: 'Mutation'; createPerson: {__typename?: 'Person'; id: number; career: Career[]; name: string; thumbnail: string; bio?: string | null | undefined; age?: number | null | undefined}};

export type FollowMutationVariables = Exact<{
	userId: Scalars['Int'];
}>;

export type FollowMutation = {__typename?: 'Mutation'; follow: boolean};

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

export type UnfollowMutationVariables = Exact<{
	userId: Scalars['Int'];
}>;

export type UnfollowMutation = {__typename?: 'Mutation'; unfollow: boolean};

export type UploadAvatarMutationVariables = Exact<{
	file: Scalars['Upload'];
}>;

export type UploadAvatarMutation = {__typename?: 'Mutation'; uploadAvatar: boolean};

export type UploadThumbnailMutationVariables = Exact<{
	id: Scalars['Int'];
	file: Scalars['Upload'];
	type: UploadType;
}>;

export type UploadThumbnailMutation = {__typename?: 'Mutation'; uploadThumbnail: boolean};

export type FollowersQueryVariables = Exact<{
	where?: InputMaybe<FollowsWhereInput>;
	orderBy?: InputMaybe<FollowsOrderByWithRelationInput[] | FollowsOrderByWithRelationInput>;
	cursor?: InputMaybe<FollowsWhereUniqueInput>;
}>;

export type FollowersQuery = {__typename?: 'Query'; follows: Array<{__typename?: 'Follows'; follower: {__typename?: 'User'; id: number; username: string; avatar: string}}>};

export type FollowingQueryVariables = Exact<{
	where?: InputMaybe<FollowsWhereInput>;
	orderBy?: InputMaybe<FollowsOrderByWithRelationInput[] | FollowsOrderByWithRelationInput>;
	cursor?: InputMaybe<FollowsWhereUniqueInput>;
}>;

export type FollowingQuery = {__typename?: 'Query'; follows: Array<{__typename?: 'Follows'; following: {__typename?: 'User'; id: number; username: string; avatar: string}}>};

export type MeQueryVariables = Exact<Record<string, never>>;

export type MeQuery = {__typename?: 'Query'; me?: {__typename?: 'User'; id: number; email: string; username: string; avatar: string} | null | undefined};

export type MovieQueryVariables = Exact<{
	movieId: Scalars['Int'];
	where?: InputMaybe<ActorInMovieWhereInput>;
	orderBy?: InputMaybe<ActorInMovieOrderByWithRelationInput[] | ActorInMovieOrderByWithRelationInput>;
	cursor?: InputMaybe<ActorInMovieWhereUniqueInput>;
}>;

export type MovieQuery = {__typename?: 'Query'; movie?: {__typename?: 'Movie'; id: number; title: string; description: string; thumbnail: string; released?: any | null | undefined; locked: boolean; createdAt: any; updatedAt: any; actors: Array<{__typename?: 'ActorInMovie'; role: string; person: {__typename?: 'Person'; id: number; name: string; thumbnail: string}}>} | null | undefined};

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

export type PeopleQuery = {__typename?: 'Query'; people?: Array<{__typename?: 'Person'; id: number; career: Career[]; name: string; thumbnail: string; createdAt: any; updatedAt: any}> | null | undefined};

export type PersonQueryVariables = Exact<{
	where: PersonWhereUniqueInput;
}>;

export type PersonQuery = {__typename?: 'Query'; person?: {__typename?: 'Person'; id: number; career: Career[]; name: string; thumbnail: string; bio?: string | null | undefined; age?: number | null | undefined; _count?: {__typename?: 'PersonCount'; movies: number; shows: number; books: number; songs: number} | null | undefined} | null | undefined};

export type UserQueryVariables = Exact<{
	username: Scalars['String'];
}>;

export type UserQuery = {__typename?: 'Query'; user?: {__typename?: 'User'; id: number; confirmed: boolean; email: string; username: string; displayname: string; role: Role; avatar: string; bio: string; location: string; website: string; dob: string; isFollowing: boolean; createdAt: any; updatedAt: any; _count?: {__typename?: 'UserCount'; following: number; followers: number} | null | undefined} | null | undefined};

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
export const CreatePersonDocument = gql`
    mutation CreatePerson($data: PersonCreateInput!) {
  createPerson(data: $data) {
    id
    career
    name
    thumbnail
    bio
    age
  }
}
    `;
export type CreatePersonMutationFn = Apollo.MutationFunction<CreatePersonMutation, CreatePersonMutationVariables>;

/**
 * __useCreatePersonMutation__
 *
 * To run a mutation, you first call `useCreatePersonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePersonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPersonMutation, { data, loading, error }] = useCreatePersonMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreatePersonMutation(baseOptions?: Apollo.MutationHookOptions<CreatePersonMutation, CreatePersonMutationVariables>) {
	const options = {...defaultOptions, ...baseOptions};
	return Apollo.useMutation<CreatePersonMutation, CreatePersonMutationVariables>(CreatePersonDocument, options);
}

export type CreatePersonMutationHookResult = ReturnType<typeof useCreatePersonMutation>;
export type CreatePersonMutationResult = Apollo.MutationResult<CreatePersonMutation>;
export type CreatePersonMutationOptions = Apollo.BaseMutationOptions<CreatePersonMutation, CreatePersonMutationVariables>;
export const FollowDocument = gql`
    mutation Follow($userId: Int!) {
  follow(userId: $userId)
}
    `;
export type FollowMutationFn = Apollo.MutationFunction<FollowMutation, FollowMutationVariables>;

/**
 * __useFollowMutation__
 *
 * To run a mutation, you first call `useFollowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFollowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [followMutation, { data, loading, error }] = useFollowMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useFollowMutation(baseOptions?: Apollo.MutationHookOptions<FollowMutation, FollowMutationVariables>) {
	const options = {...defaultOptions, ...baseOptions};
	return Apollo.useMutation<FollowMutation, FollowMutationVariables>(FollowDocument, options);
}

export type FollowMutationHookResult = ReturnType<typeof useFollowMutation>;
export type FollowMutationResult = Apollo.MutationResult<FollowMutation>;
export type FollowMutationOptions = Apollo.BaseMutationOptions<FollowMutation, FollowMutationVariables>;
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
export const UnfollowDocument = gql`
    mutation Unfollow($userId: Int!) {
  unfollow(userId: $userId)
}
    `;
export type UnfollowMutationFn = Apollo.MutationFunction<UnfollowMutation, UnfollowMutationVariables>;

/**
 * __useUnfollowMutation__
 *
 * To run a mutation, you first call `useUnfollowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnfollowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unfollowMutation, { data, loading, error }] = useUnfollowMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUnfollowMutation(baseOptions?: Apollo.MutationHookOptions<UnfollowMutation, UnfollowMutationVariables>) {
	const options = {...defaultOptions, ...baseOptions};
	return Apollo.useMutation<UnfollowMutation, UnfollowMutationVariables>(UnfollowDocument, options);
}

export type UnfollowMutationHookResult = ReturnType<typeof useUnfollowMutation>;
export type UnfollowMutationResult = Apollo.MutationResult<UnfollowMutation>;
export type UnfollowMutationOptions = Apollo.BaseMutationOptions<UnfollowMutation, UnfollowMutationVariables>;
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
    mutation UploadThumbnail($id: Int!, $file: Upload!, $type: UploadType!) {
  uploadThumbnail(id: $id, file: $file, type: $type)
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
 *      type: // value for 'type'
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
export const FollowersDocument = gql`
    query Followers($where: FollowsWhereInput, $orderBy: [FollowsOrderByWithRelationInput!], $cursor: FollowsWhereUniqueInput) {
  follows(where: $where, orderBy: $orderBy, cursor: $cursor) {
    follower {
      id
      username
      avatar
    }
  }
}
    `;

/**
 * __useFollowersQuery__
 *
 * To run a query within a React component, call `useFollowersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFollowersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFollowersQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useFollowersQuery(baseOptions?: Apollo.QueryHookOptions<FollowersQuery, FollowersQueryVariables>) {
	const options = {...defaultOptions, ...baseOptions};
	return Apollo.useQuery<FollowersQuery, FollowersQueryVariables>(FollowersDocument, options);
}

export function useFollowersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FollowersQuery, FollowersQueryVariables>) {
	const options = {...defaultOptions, ...baseOptions};
	return Apollo.useLazyQuery<FollowersQuery, FollowersQueryVariables>(FollowersDocument, options);
}

export type FollowersQueryHookResult = ReturnType<typeof useFollowersQuery>;
export type FollowersLazyQueryHookResult = ReturnType<typeof useFollowersLazyQuery>;
export type FollowersQueryResult = Apollo.QueryResult<FollowersQuery, FollowersQueryVariables>;
export const FollowingDocument = gql`
    query Following($where: FollowsWhereInput, $orderBy: [FollowsOrderByWithRelationInput!], $cursor: FollowsWhereUniqueInput) {
  follows(where: $where, orderBy: $orderBy, cursor: $cursor) {
    following {
      id
      username
      avatar
    }
  }
}
    `;

/**
 * __useFollowingQuery__
 *
 * To run a query within a React component, call `useFollowingQuery` and pass it any options that fit your needs.
 * When your component renders, `useFollowingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFollowingQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useFollowingQuery(baseOptions?: Apollo.QueryHookOptions<FollowingQuery, FollowingQueryVariables>) {
	const options = {...defaultOptions, ...baseOptions};
	return Apollo.useQuery<FollowingQuery, FollowingQueryVariables>(FollowingDocument, options);
}

export function useFollowingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FollowingQuery, FollowingQueryVariables>) {
	const options = {...defaultOptions, ...baseOptions};
	return Apollo.useLazyQuery<FollowingQuery, FollowingQueryVariables>(FollowingDocument, options);
}

export type FollowingQueryHookResult = ReturnType<typeof useFollowingQuery>;
export type FollowingLazyQueryHookResult = ReturnType<typeof useFollowingLazyQuery>;
export type FollowingQueryResult = Apollo.QueryResult<FollowingQuery, FollowingQueryVariables>;
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
    query Movie($movieId: Int!, $where: ActorInMovieWhereInput, $orderBy: [ActorInMovieOrderByWithRelationInput!], $cursor: ActorInMovieWhereUniqueInput) {
  movie(movieId: $movieId) {
    id
    title
    description
    thumbnail
    released
    locked
    actors(where: $where, orderBy: $orderBy, cursor: $cursor) {
      role
      person {
        id
        name
        thumbnail
      }
    }
    createdAt
    updatedAt
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
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
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
    thumbnail
    createdAt
    updatedAt
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
export const PersonDocument = gql`
    query Person($where: PersonWhereUniqueInput!) {
  person(where: $where) {
    id
    career
    name
    thumbnail
    bio
    age
    _count {
      movies
      shows
      books
      songs
    }
  }
}
    `;

/**
 * __usePersonQuery__
 *
 * To run a query within a React component, call `usePersonQuery` and pass it any options that fit your needs.
 * When your component renders, `usePersonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePersonQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function usePersonQuery(baseOptions: Apollo.QueryHookOptions<PersonQuery, PersonQueryVariables>) {
	const options = {...defaultOptions, ...baseOptions};
	return Apollo.useQuery<PersonQuery, PersonQueryVariables>(PersonDocument, options);
}

export function usePersonLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PersonQuery, PersonQueryVariables>) {
	const options = {...defaultOptions, ...baseOptions};
	return Apollo.useLazyQuery<PersonQuery, PersonQueryVariables>(PersonDocument, options);
}

export type PersonQueryHookResult = ReturnType<typeof usePersonQuery>;
export type PersonLazyQueryHookResult = ReturnType<typeof usePersonLazyQuery>;
export type PersonQueryResult = Apollo.QueryResult<PersonQuery, PersonQueryVariables>;
export const UserDocument = gql`
    query User($username: String!) {
  user(username: $username) {
    id
    confirmed
    email
    username
    displayname
    role
    avatar
    bio
    location
    website
    dob
    isFollowing
    createdAt
    updatedAt
    _count {
      following
      followers
    }
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
	const options = {...defaultOptions, ...baseOptions};
	return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
}

export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
	const options = {...defaultOptions, ...baseOptions};
	return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
}

export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
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
