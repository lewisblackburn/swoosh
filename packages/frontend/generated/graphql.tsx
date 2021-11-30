import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
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

export type Book = {
  __typename?: 'Book';
  _count?: Maybe<BookCount>;
  authors: Array<Person>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['Int'];
  locked: Scalars['Boolean'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type BookAuthorsArgs = {
  cursor?: InputMaybe<PersonWhereUniqueInput>;
  distinct?: InputMaybe<Array<PersonScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PersonOrderByWithRelationInput>>;
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
  connect?: InputMaybe<Array<BookWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BookCreateOrConnectWithoutAuthorsInput>>;
  create?: InputMaybe<Array<BookCreateWithoutAuthorsInput>>;
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
  AND?: InputMaybe<Array<BookScalarWhereInput>>;
  NOT?: InputMaybe<Array<BookScalarWhereInput>>;
  OR?: InputMaybe<Array<BookScalarWhereInput>>;
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
  connect?: InputMaybe<Array<BookWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BookCreateOrConnectWithoutAuthorsInput>>;
  create?: InputMaybe<Array<BookCreateWithoutAuthorsInput>>;
  delete?: InputMaybe<Array<BookWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BookScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BookWhereUniqueInput>>;
  set?: InputMaybe<Array<BookWhereUniqueInput>>;
  update?: InputMaybe<Array<BookUpdateWithWhereUniqueWithoutAuthorsInput>>;
  updateMany?: InputMaybe<Array<BookUpdateManyWithWhereWithoutAuthorsInput>>;
  upsert?: InputMaybe<Array<BookUpsertWithWhereUniqueWithoutAuthorsInput>>;
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
  AND?: InputMaybe<Array<BookWhereInput>>;
  NOT?: InputMaybe<Array<BookWhereInput>>;
  OR?: InputMaybe<Array<BookWhereInput>>;
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
  equals?: InputMaybe<Array<Career>>;
  has?: InputMaybe<Career>;
  hasEvery?: InputMaybe<Array<Career>>;
  hasSome?: InputMaybe<Array<Career>>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export type EnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleFilter>;
  notIn?: InputMaybe<Array<Role>>;
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

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Movie = {
  __typename?: 'Movie';
  _count?: Maybe<MovieCount>;
  actors: Array<Person>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['Int'];
  locked: Scalars['Boolean'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type MovieActorsArgs = {
  cursor?: InputMaybe<PersonWhereUniqueInput>;
  distinct?: InputMaybe<Array<PersonScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PersonOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PersonWhereInput>;
};

export type MovieCount = {
  __typename?: 'MovieCount';
  actors: Scalars['Int'];
};

export type MovieCreateInput = {
  actors?: InputMaybe<PersonCreateNestedManyWithoutMoviesInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  locked?: InputMaybe<Scalars['Boolean']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type MovieCreateNestedManyWithoutActorsInput = {
  connect?: InputMaybe<Array<MovieWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieCreateOrConnectWithoutActorsInput>>;
  create?: InputMaybe<Array<MovieCreateWithoutActorsInput>>;
};

export type MovieCreateOrConnectWithoutActorsInput = {
  create: MovieCreateWithoutActorsInput;
  where: MovieWhereUniqueInput;
};

export type MovieCreateWithoutActorsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  locked?: InputMaybe<Scalars['Boolean']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type MovieListRelationFilter = {
  every?: InputMaybe<MovieWhereInput>;
  none?: InputMaybe<MovieWhereInput>;
  some?: InputMaybe<MovieWhereInput>;
};

export type MovieOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MovieOrderByWithRelationInput = {
  actors?: InputMaybe<PersonOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  locked?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum MovieScalarFieldEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  Locked = 'locked',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type MovieScalarWhereInput = {
  AND?: InputMaybe<Array<MovieScalarWhereInput>>;
  NOT?: InputMaybe<Array<MovieScalarWhereInput>>;
  OR?: InputMaybe<Array<MovieScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  locked?: InputMaybe<BoolFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MovieUpdateInput = {
  actors?: InputMaybe<PersonUpdateManyWithoutMoviesInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieUpdateManyWithWhereWithoutActorsInput = {
  data: MovieUpdateManyMutationInput;
  where: MovieScalarWhereInput;
};

export type MovieUpdateManyWithoutActorsInput = {
  connect?: InputMaybe<Array<MovieWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MovieCreateOrConnectWithoutActorsInput>>;
  create?: InputMaybe<Array<MovieCreateWithoutActorsInput>>;
  delete?: InputMaybe<Array<MovieWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MovieScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MovieWhereUniqueInput>>;
  set?: InputMaybe<Array<MovieWhereUniqueInput>>;
  update?: InputMaybe<Array<MovieUpdateWithWhereUniqueWithoutActorsInput>>;
  updateMany?: InputMaybe<Array<MovieUpdateManyWithWhereWithoutActorsInput>>;
  upsert?: InputMaybe<Array<MovieUpsertWithWhereUniqueWithoutActorsInput>>;
};

export type MovieUpdateWithWhereUniqueWithoutActorsInput = {
  data: MovieUpdateWithoutActorsInput;
  where: MovieWhereUniqueInput;
};

export type MovieUpdateWithoutActorsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieUpsertWithWhereUniqueWithoutActorsInput = {
  create: MovieCreateWithoutActorsInput;
  update: MovieUpdateWithoutActorsInput;
  where: MovieWhereUniqueInput;
};

export type MovieWhereInput = {
  AND?: InputMaybe<Array<MovieWhereInput>>;
  NOT?: InputMaybe<Array<MovieWhereInput>>;
  OR?: InputMaybe<Array<MovieWhereInput>>;
  actors?: InputMaybe<PersonListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  locked?: InputMaybe<BoolFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MovieWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addActor?: Maybe<Movie>;
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
  upload: Scalars['Boolean'];
};


export type MutationAddActorArgs = {
  movieId: Scalars['Int'];
  personId: Scalars['Int'];
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


export type MutationUploadArgs = {
  file: Scalars['Upload'];
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

export type NestedEnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleFilter>;
  notIn?: InputMaybe<Array<Role>>;
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

export type Person = {
  __typename?: 'Person';
  _count?: Maybe<PersonCount>;
  books: Array<Book>;
  career: Array<Career>;
  id: Scalars['Int'];
  movies: Array<Movie>;
  name: Scalars['String'];
  songs: Array<Song>;
};


export type PersonBooksArgs = {
  cursor?: InputMaybe<BookWhereUniqueInput>;
  distinct?: InputMaybe<Array<BookScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BookOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BookWhereInput>;
};


export type PersonMoviesArgs = {
  cursor?: InputMaybe<MovieWhereUniqueInput>;
  distinct?: InputMaybe<Array<MovieScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MovieOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieWhereInput>;
};


export type PersonSongsArgs = {
  cursor?: InputMaybe<SongWhereUniqueInput>;
  distinct?: InputMaybe<Array<SongScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SongOrderByWithRelationInput>>;
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
  movies?: InputMaybe<MovieCreateNestedManyWithoutActorsInput>;
  name: Scalars['String'];
  songs?: InputMaybe<SongCreateNestedManyWithoutArtistsInput>;
};

export type PersonCreateNestedManyWithoutBooksInput = {
  connect?: InputMaybe<Array<PersonWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PersonCreateOrConnectWithoutBooksInput>>;
  create?: InputMaybe<Array<PersonCreateWithoutBooksInput>>;
};

export type PersonCreateNestedManyWithoutMoviesInput = {
  connect?: InputMaybe<Array<PersonWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PersonCreateOrConnectWithoutMoviesInput>>;
  create?: InputMaybe<Array<PersonCreateWithoutMoviesInput>>;
};

export type PersonCreateNestedManyWithoutSongsInput = {
  connect?: InputMaybe<Array<PersonWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PersonCreateOrConnectWithoutSongsInput>>;
  create?: InputMaybe<Array<PersonCreateWithoutSongsInput>>;
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
  movies?: InputMaybe<MovieCreateNestedManyWithoutActorsInput>;
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
  movies?: InputMaybe<MovieCreateNestedManyWithoutActorsInput>;
  name: Scalars['String'];
};

export type PersonCreatecareerInput = {
  set: Array<Career>;
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
  movies?: InputMaybe<MovieOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  songs?: InputMaybe<SongOrderByRelationAggregateInput>;
};

export enum PersonScalarFieldEnum {
  Career = 'career',
  Id = 'id',
  Name = 'name'
}

export type PersonScalarWhereInput = {
  AND?: InputMaybe<Array<PersonScalarWhereInput>>;
  NOT?: InputMaybe<Array<PersonScalarWhereInput>>;
  OR?: InputMaybe<Array<PersonScalarWhereInput>>;
  career?: InputMaybe<EnumCareerNullableListFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
};

export type PersonUpdateInput = {
  books?: InputMaybe<BookUpdateManyWithoutAuthorsInput>;
  career?: InputMaybe<PersonUpdatecareerInput>;
  movies?: InputMaybe<MovieUpdateManyWithoutActorsInput>;
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

export type PersonUpdateManyWithWhereWithoutMoviesInput = {
  data: PersonUpdateManyMutationInput;
  where: PersonScalarWhereInput;
};

export type PersonUpdateManyWithWhereWithoutSongsInput = {
  data: PersonUpdateManyMutationInput;
  where: PersonScalarWhereInput;
};

export type PersonUpdateManyWithoutBooksInput = {
  connect?: InputMaybe<Array<PersonWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PersonCreateOrConnectWithoutBooksInput>>;
  create?: InputMaybe<Array<PersonCreateWithoutBooksInput>>;
  delete?: InputMaybe<Array<PersonWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PersonScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PersonWhereUniqueInput>>;
  set?: InputMaybe<Array<PersonWhereUniqueInput>>;
  update?: InputMaybe<Array<PersonUpdateWithWhereUniqueWithoutBooksInput>>;
  updateMany?: InputMaybe<Array<PersonUpdateManyWithWhereWithoutBooksInput>>;
  upsert?: InputMaybe<Array<PersonUpsertWithWhereUniqueWithoutBooksInput>>;
};

export type PersonUpdateManyWithoutMoviesInput = {
  connect?: InputMaybe<Array<PersonWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PersonCreateOrConnectWithoutMoviesInput>>;
  create?: InputMaybe<Array<PersonCreateWithoutMoviesInput>>;
  delete?: InputMaybe<Array<PersonWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PersonScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PersonWhereUniqueInput>>;
  set?: InputMaybe<Array<PersonWhereUniqueInput>>;
  update?: InputMaybe<Array<PersonUpdateWithWhereUniqueWithoutMoviesInput>>;
  updateMany?: InputMaybe<Array<PersonUpdateManyWithWhereWithoutMoviesInput>>;
  upsert?: InputMaybe<Array<PersonUpsertWithWhereUniqueWithoutMoviesInput>>;
};

export type PersonUpdateManyWithoutSongsInput = {
  connect?: InputMaybe<Array<PersonWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PersonCreateOrConnectWithoutSongsInput>>;
  create?: InputMaybe<Array<PersonCreateWithoutSongsInput>>;
  delete?: InputMaybe<Array<PersonWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PersonScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PersonWhereUniqueInput>>;
  set?: InputMaybe<Array<PersonWhereUniqueInput>>;
  update?: InputMaybe<Array<PersonUpdateWithWhereUniqueWithoutSongsInput>>;
  updateMany?: InputMaybe<Array<PersonUpdateManyWithWhereWithoutSongsInput>>;
  upsert?: InputMaybe<Array<PersonUpsertWithWhereUniqueWithoutSongsInput>>;
};

export type PersonUpdateWithWhereUniqueWithoutBooksInput = {
  data: PersonUpdateWithoutBooksInput;
  where: PersonWhereUniqueInput;
};

export type PersonUpdateWithWhereUniqueWithoutMoviesInput = {
  data: PersonUpdateWithoutMoviesInput;
  where: PersonWhereUniqueInput;
};

export type PersonUpdateWithWhereUniqueWithoutSongsInput = {
  data: PersonUpdateWithoutSongsInput;
  where: PersonWhereUniqueInput;
};

export type PersonUpdateWithoutBooksInput = {
  career?: InputMaybe<PersonUpdatecareerInput>;
  movies?: InputMaybe<MovieUpdateManyWithoutActorsInput>;
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
  movies?: InputMaybe<MovieUpdateManyWithoutActorsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PersonUpdatecareerInput = {
  push?: InputMaybe<Array<Career>>;
  set?: InputMaybe<Array<Career>>;
};

export type PersonUpsertWithWhereUniqueWithoutBooksInput = {
  create: PersonCreateWithoutBooksInput;
  update: PersonUpdateWithoutBooksInput;
  where: PersonWhereUniqueInput;
};

export type PersonUpsertWithWhereUniqueWithoutMoviesInput = {
  create: PersonCreateWithoutMoviesInput;
  update: PersonUpdateWithoutMoviesInput;
  where: PersonWhereUniqueInput;
};

export type PersonUpsertWithWhereUniqueWithoutSongsInput = {
  create: PersonCreateWithoutSongsInput;
  update: PersonUpdateWithoutSongsInput;
  where: PersonWhereUniqueInput;
};

export type PersonWhereInput = {
  AND?: InputMaybe<Array<PersonWhereInput>>;
  NOT?: InputMaybe<Array<PersonWhereInput>>;
  OR?: InputMaybe<Array<PersonWhereInput>>;
  books?: InputMaybe<BookListRelationFilter>;
  career?: InputMaybe<EnumCareerNullableListFilter>;
  id?: InputMaybe<IntFilter>;
  movies?: InputMaybe<MovieListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  songs?: InputMaybe<SongListRelationFilter>;
};

export type PersonWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  book?: Maybe<Book>;
  books?: Maybe<Array<Book>>;
  me?: Maybe<User>;
  movie?: Maybe<Movie>;
  movies?: Maybe<Array<Movie>>;
  people?: Maybe<Array<Person>>;
  person?: Maybe<Person>;
  song?: Maybe<Song>;
  songs?: Maybe<Array<Song>>;
  user?: Maybe<User>;
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
  title: Scalars['String'];
};


export type QueryPeopleArgs = {
  cursor?: InputMaybe<PersonWhereUniqueInput>;
  distinct?: InputMaybe<Array<PersonScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PersonOrderByWithRelationInput>>;
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
  artists: Array<Person>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['Int'];
  locked: Scalars['Boolean'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type SongArtistsArgs = {
  cursor?: InputMaybe<PersonWhereUniqueInput>;
  distinct?: InputMaybe<Array<PersonScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PersonOrderByWithRelationInput>>;
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
  connect?: InputMaybe<Array<SongWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SongCreateOrConnectWithoutArtistsInput>>;
  create?: InputMaybe<Array<SongCreateWithoutArtistsInput>>;
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
  AND?: InputMaybe<Array<SongScalarWhereInput>>;
  NOT?: InputMaybe<Array<SongScalarWhereInput>>;
  OR?: InputMaybe<Array<SongScalarWhereInput>>;
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
  connect?: InputMaybe<Array<SongWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SongCreateOrConnectWithoutArtistsInput>>;
  create?: InputMaybe<Array<SongCreateWithoutArtistsInput>>;
  delete?: InputMaybe<Array<SongWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SongScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SongWhereUniqueInput>>;
  set?: InputMaybe<Array<SongWhereUniqueInput>>;
  update?: InputMaybe<Array<SongUpdateWithWhereUniqueWithoutArtistsInput>>;
  updateMany?: InputMaybe<Array<SongUpdateManyWithWhereWithoutArtistsInput>>;
  upsert?: InputMaybe<Array<SongUpsertWithWhereUniqueWithoutArtistsInput>>;
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
  AND?: InputMaybe<Array<SongWhereInput>>;
  NOT?: InputMaybe<Array<SongWhereInput>>;
  OR?: InputMaybe<Array<SongWhereInput>>;
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

/** File Upload Type */
export enum UploadType {
  /** Filepath for avatars */
  Avatar = 'AVATAR',
  /** Filepath for thumbnails */
  Thumbnail = 'THUMBNAIL'
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
  followers: Array<User>;
  following: Array<User>;
  id: Scalars['Int'];
  location: Scalars['String'];
  role: Role;
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
  website: Scalars['String'];
};


export type UserFollowersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type UserFollowingArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export type UserCount = {
  __typename?: 'UserCount';
  followers: Scalars['Int'];
  following: Scalars['Int'];
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
  password?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
  website?: InputMaybe<SortOrder>;
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
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
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

export type RegularUserFragment = { __typename?: 'User', id: number, email: string, username: string, avatar: string };

export type ConfirmMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type ConfirmMutation = { __typename?: 'Mutation', confirm: boolean };

export type LoginMutationVariables = Exact<{
  data: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'User', id: number, email: string, username: string, avatar: string } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type RegisterMutationVariables = Exact<{
  data: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'User', id: number, email: string, username: string, avatar: string } };

export type UploadMutationVariables = Exact<{
  file: Scalars['Upload'];
  type: UploadType;
}>;


export type UploadMutation = { __typename?: 'Mutation', upload: boolean };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: number, email: string, username: string, avatar: string } | null | undefined };

export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  email
  username
  avatar
}
    `;
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConfirmMutation, ConfirmMutationVariables>(ConfirmDocument, options);
      }
export type ConfirmMutationHookResult = ReturnType<typeof useConfirmMutation>;
export type ConfirmMutationResult = Apollo.MutationResult<ConfirmMutation>;
export type ConfirmMutationOptions = Apollo.BaseMutationOptions<ConfirmMutation, ConfirmMutationVariables>;
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
        const options = {...defaultOptions, ...baseOptions}
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
        const options = {...defaultOptions, ...baseOptions}
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const UploadDocument = gql`
    mutation Upload($file: Upload!, $type: UploadType!) {
  upload(file: $file, type: $type)
}
    `;
export type UploadMutationFn = Apollo.MutationFunction<UploadMutation, UploadMutationVariables>;

/**
 * __useUploadMutation__
 *
 * To run a mutation, you first call `useUploadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadMutation, { data, loading, error }] = useUploadMutation({
 *   variables: {
 *      file: // value for 'file'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useUploadMutation(baseOptions?: Apollo.MutationHookOptions<UploadMutation, UploadMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadMutation, UploadMutationVariables>(UploadDocument, options);
      }
export type UploadMutationHookResult = ReturnType<typeof useUploadMutation>;
export type UploadMutationResult = Apollo.MutationResult<UploadMutation>;
export type UploadMutationOptions = Apollo.BaseMutationOptions<UploadMutation, UploadMutationVariables>;
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;