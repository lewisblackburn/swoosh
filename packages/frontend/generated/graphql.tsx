import {gql} from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends Record<string, unknown>> = {[K in keyof T]: T[K]};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {[SubKey in K]?: Maybe<T[SubKey]>};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {[SubKey in K]: Maybe<T[SubKey]>};
const defaultOptions = {} as const;
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
  favourites: Favourite[];
  genres: Genre[];
  id: Scalars['Int'];
  locked: Scalars['Boolean'];
  released?: Maybe<Scalars['DateTime']>;
  reviews: Review[];
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

export type BookFavouritesArgs = {
  cursor?: InputMaybe<FavouriteWhereUniqueInput>;
  distinct?: InputMaybe<FavouriteScalarFieldEnum[]>;
  orderBy?: InputMaybe<FavouriteOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FavouriteWhereInput>;
};

export type BookGenresArgs = {
  cursor?: InputMaybe<GenreWhereUniqueInput>;
  distinct?: InputMaybe<GenreScalarFieldEnum[]>;
  orderBy?: InputMaybe<GenreOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GenreWhereInput>;
};

export type BookReviewsArgs = {
  cursor?: InputMaybe<ReviewWhereUniqueInput>;
  distinct?: InputMaybe<ReviewScalarFieldEnum[]>;
  orderBy?: InputMaybe<ReviewOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ReviewWhereInput>;
};

export type BookCount = {
  __typename?: 'BookCount';
  authors: Scalars['Int'];
  favourites: Scalars['Int'];
  genres: Scalars['Int'];
  reviews: Scalars['Int'];
};

export type BookCreateInput = {
  authors?: InputMaybe<PersonCreateNestedManyWithoutBooksInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  favourites?: InputMaybe<FavouriteCreateNestedManyWithoutBookInput>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutBooksInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  released?: InputMaybe<Scalars['DateTime']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutBookInput>;
  thumbnail?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BookCreateNestedManyWithoutAuthorsInput = {
  connect?: InputMaybe<BookWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutAuthorsInput[]>;
  create?: InputMaybe<BookCreateWithoutAuthorsInput[]>;
};

export type BookCreateNestedManyWithoutGenresInput = {
  connect?: InputMaybe<BookWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutGenresInput[]>;
  create?: InputMaybe<BookCreateWithoutGenresInput[]>;
};

export type BookCreateNestedOneWithoutFavouritesInput = {
  connect?: InputMaybe<BookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutFavouritesInput>;
  create?: InputMaybe<BookCreateWithoutFavouritesInput>;
};

export type BookCreateNestedOneWithoutReviewsInput = {
  connect?: InputMaybe<BookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutReviewsInput>;
  create?: InputMaybe<BookCreateWithoutReviewsInput>;
};

export type BookCreateOrConnectWithoutAuthorsInput = {
  create: BookCreateWithoutAuthorsInput;
  where: BookWhereUniqueInput;
};

export type BookCreateOrConnectWithoutFavouritesInput = {
  create: BookCreateWithoutFavouritesInput;
  where: BookWhereUniqueInput;
};

export type BookCreateOrConnectWithoutGenresInput = {
  create: BookCreateWithoutGenresInput;
  where: BookWhereUniqueInput;
};

export type BookCreateOrConnectWithoutReviewsInput = {
  create: BookCreateWithoutReviewsInput;
  where: BookWhereUniqueInput;
};

export type BookCreateWithoutAuthorsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  favourites?: InputMaybe<FavouriteCreateNestedManyWithoutBookInput>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutBooksInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  released?: InputMaybe<Scalars['DateTime']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutBookInput>;
  thumbnail?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BookCreateWithoutFavouritesInput = {
  authors?: InputMaybe<PersonCreateNestedManyWithoutBooksInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  genres?: InputMaybe<GenreCreateNestedManyWithoutBooksInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  released?: InputMaybe<Scalars['DateTime']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutBookInput>;
  thumbnail?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BookCreateWithoutGenresInput = {
  authors?: InputMaybe<PersonCreateNestedManyWithoutBooksInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  favourites?: InputMaybe<FavouriteCreateNestedManyWithoutBookInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  released?: InputMaybe<Scalars['DateTime']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutBookInput>;
  thumbnail?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BookCreateWithoutReviewsInput = {
  authors?: InputMaybe<PersonCreateNestedManyWithoutBooksInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  favourites?: InputMaybe<FavouriteCreateNestedManyWithoutBookInput>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutBooksInput>;
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
  favourites?: InputMaybe<FavouriteOrderByRelationAggregateInput>;
  genres?: InputMaybe<GenreOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  locked?: InputMaybe<SortOrder>;
  released?: InputMaybe<SortOrder>;
  reviews?: InputMaybe<ReviewOrderByRelationAggregateInput>;
  thumbnail?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type BookRelationFilter = {
  is?: InputMaybe<BookWhereInput>;
  isNot?: InputMaybe<BookWhereInput>;
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
  favourites?: InputMaybe<FavouriteUpdateManyWithoutBookInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutBooksInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutBookInput>;
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

export type BookUpdateManyWithWhereWithoutGenresInput = {
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

export type BookUpdateManyWithoutGenresInput = {
  connect?: InputMaybe<BookWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutGenresInput[]>;
  create?: InputMaybe<BookCreateWithoutGenresInput[]>;
  delete?: InputMaybe<BookWhereUniqueInput[]>;
  deleteMany?: InputMaybe<BookScalarWhereInput[]>;
  disconnect?: InputMaybe<BookWhereUniqueInput[]>;
  set?: InputMaybe<BookWhereUniqueInput[]>;
  update?: InputMaybe<BookUpdateWithWhereUniqueWithoutGenresInput[]>;
  updateMany?: InputMaybe<BookUpdateManyWithWhereWithoutGenresInput[]>;
  upsert?: InputMaybe<BookUpsertWithWhereUniqueWithoutGenresInput[]>;
};

export type BookUpdateOneWithoutFavouritesInput = {
  connect?: InputMaybe<BookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutFavouritesInput>;
  create?: InputMaybe<BookCreateWithoutFavouritesInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<BookUpdateWithoutFavouritesInput>;
  upsert?: InputMaybe<BookUpsertWithoutFavouritesInput>;
};

export type BookUpdateOneWithoutReviewsInput = {
  connect?: InputMaybe<BookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutReviewsInput>;
  create?: InputMaybe<BookCreateWithoutReviewsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<BookUpdateWithoutReviewsInput>;
  upsert?: InputMaybe<BookUpsertWithoutReviewsInput>;
};

export type BookUpdateWithWhereUniqueWithoutAuthorsInput = {
  data: BookUpdateWithoutAuthorsInput;
  where: BookWhereUniqueInput;
};

export type BookUpdateWithWhereUniqueWithoutGenresInput = {
  data: BookUpdateWithoutGenresInput;
  where: BookWhereUniqueInput;
};

export type BookUpdateWithoutAuthorsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  favourites?: InputMaybe<FavouriteUpdateManyWithoutBookInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutBooksInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutBookInput>;
  thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BookUpdateWithoutFavouritesInput = {
  authors?: InputMaybe<PersonUpdateManyWithoutBooksInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutBooksInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutBookInput>;
  thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BookUpdateWithoutGenresInput = {
  authors?: InputMaybe<PersonUpdateManyWithoutBooksInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  favourites?: InputMaybe<FavouriteUpdateManyWithoutBookInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutBookInput>;
  thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BookUpdateWithoutReviewsInput = {
  authors?: InputMaybe<PersonUpdateManyWithoutBooksInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  favourites?: InputMaybe<FavouriteUpdateManyWithoutBookInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutBooksInput>;
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

export type BookUpsertWithWhereUniqueWithoutGenresInput = {
  create: BookCreateWithoutGenresInput;
  update: BookUpdateWithoutGenresInput;
  where: BookWhereUniqueInput;
};

export type BookUpsertWithoutFavouritesInput = {
  create: BookCreateWithoutFavouritesInput;
  update: BookUpdateWithoutFavouritesInput;
};

export type BookUpsertWithoutReviewsInput = {
  create: BookCreateWithoutReviewsInput;
  update: BookUpdateWithoutReviewsInput;
};

export type BookWhereInput = {
  AND?: InputMaybe<BookWhereInput[]>;
  NOT?: InputMaybe<BookWhereInput[]>;
  OR?: InputMaybe<BookWhereInput[]>;
  authors?: InputMaybe<PersonListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  favourites?: InputMaybe<FavouriteListRelationFilter>;
  genres?: InputMaybe<GenreListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  locked?: InputMaybe<BoolFilter>;
  released?: InputMaybe<DateTimeNullableFilter>;
  reviews?: InputMaybe<ReviewListRelationFilter>;
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

export type EnumRoleFieldUpdateOperationsInput = {
  set?: InputMaybe<Role>;
};

export type EnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Role[]>;
  not?: InputMaybe<NestedEnumRoleFilter>;
  notIn?: InputMaybe<Role[]>;
};

export type Favourite = {
  __typename?: 'Favourite';
  book?: Maybe<Book>;
  bookId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  movie?: Maybe<Movie>;
  movieId?: Maybe<Scalars['Int']>;
  person?: Maybe<Person>;
  personId?: Maybe<Scalars['Int']>;
  show?: Maybe<Show>;
  showId?: Maybe<Scalars['Int']>;
  song?: Maybe<Song>;
  songId?: Maybe<Scalars['Int']>;
  user: User;
  userId: Scalars['Int'];
};

export type FavouriteCreateInput = {
  book?: InputMaybe<BookCreateNestedOneWithoutFavouritesInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  movie?: InputMaybe<MovieCreateNestedOneWithoutFavouritesInput>;
  person?: InputMaybe<PersonCreateNestedOneWithoutFavouritesInput>;
  show?: InputMaybe<ShowCreateNestedOneWithoutFavouriteInput>;
  song?: InputMaybe<SongCreateNestedOneWithoutFavouritesInput>;
  user: UserCreateNestedOneWithoutFavouritesInput;
};

export type FavouriteCreateManyBookInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  movieId?: InputMaybe<Scalars['Int']>;
  personId?: InputMaybe<Scalars['Int']>;
  showId?: InputMaybe<Scalars['Int']>;
  songId?: InputMaybe<Scalars['Int']>;
  userId: Scalars['Int'];
};

export type FavouriteCreateManyBookInputEnvelope = {
  data: FavouriteCreateManyBookInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type FavouriteCreateManyMovieInput = {
  bookId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  personId?: InputMaybe<Scalars['Int']>;
  showId?: InputMaybe<Scalars['Int']>;
  songId?: InputMaybe<Scalars['Int']>;
  userId: Scalars['Int'];
};

export type FavouriteCreateManyMovieInputEnvelope = {
  data: FavouriteCreateManyMovieInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type FavouriteCreateManyPersonInput = {
  bookId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  movieId?: InputMaybe<Scalars['Int']>;
  showId?: InputMaybe<Scalars['Int']>;
  songId?: InputMaybe<Scalars['Int']>;
  userId: Scalars['Int'];
};

export type FavouriteCreateManyPersonInputEnvelope = {
  data: FavouriteCreateManyPersonInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type FavouriteCreateManyShowInput = {
  bookId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  movieId?: InputMaybe<Scalars['Int']>;
  personId?: InputMaybe<Scalars['Int']>;
  songId?: InputMaybe<Scalars['Int']>;
  userId: Scalars['Int'];
};

export type FavouriteCreateManyShowInputEnvelope = {
  data: FavouriteCreateManyShowInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type FavouriteCreateManySongInput = {
  bookId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  movieId?: InputMaybe<Scalars['Int']>;
  personId?: InputMaybe<Scalars['Int']>;
  showId?: InputMaybe<Scalars['Int']>;
  userId: Scalars['Int'];
};

export type FavouriteCreateManySongInputEnvelope = {
  data: FavouriteCreateManySongInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type FavouriteCreateManyUserInput = {
  bookId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  movieId?: InputMaybe<Scalars['Int']>;
  personId?: InputMaybe<Scalars['Int']>;
  showId?: InputMaybe<Scalars['Int']>;
  songId?: InputMaybe<Scalars['Int']>;
};

export type FavouriteCreateManyUserInputEnvelope = {
  data: FavouriteCreateManyUserInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type FavouriteCreateNestedManyWithoutBookInput = {
  connect?: InputMaybe<FavouriteWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<FavouriteCreateOrConnectWithoutBookInput[]>;
  create?: InputMaybe<FavouriteCreateWithoutBookInput[]>;
  createMany?: InputMaybe<FavouriteCreateManyBookInputEnvelope>;
};

export type FavouriteCreateNestedManyWithoutMovieInput = {
  connect?: InputMaybe<FavouriteWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<FavouriteCreateOrConnectWithoutMovieInput[]>;
  create?: InputMaybe<FavouriteCreateWithoutMovieInput[]>;
  createMany?: InputMaybe<FavouriteCreateManyMovieInputEnvelope>;
};

export type FavouriteCreateNestedManyWithoutPersonInput = {
  connect?: InputMaybe<FavouriteWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<FavouriteCreateOrConnectWithoutPersonInput[]>;
  create?: InputMaybe<FavouriteCreateWithoutPersonInput[]>;
  createMany?: InputMaybe<FavouriteCreateManyPersonInputEnvelope>;
};

export type FavouriteCreateNestedManyWithoutShowInput = {
  connect?: InputMaybe<FavouriteWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<FavouriteCreateOrConnectWithoutShowInput[]>;
  create?: InputMaybe<FavouriteCreateWithoutShowInput[]>;
  createMany?: InputMaybe<FavouriteCreateManyShowInputEnvelope>;
};

export type FavouriteCreateNestedManyWithoutSongInput = {
  connect?: InputMaybe<FavouriteWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<FavouriteCreateOrConnectWithoutSongInput[]>;
  create?: InputMaybe<FavouriteCreateWithoutSongInput[]>;
  createMany?: InputMaybe<FavouriteCreateManySongInputEnvelope>;
};

export type FavouriteCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<FavouriteWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<FavouriteCreateOrConnectWithoutUserInput[]>;
  create?: InputMaybe<FavouriteCreateWithoutUserInput[]>;
  createMany?: InputMaybe<FavouriteCreateManyUserInputEnvelope>;
};

export type FavouriteCreateOrConnectWithoutBookInput = {
  create: FavouriteCreateWithoutBookInput;
  where: FavouriteWhereUniqueInput;
};

export type FavouriteCreateOrConnectWithoutMovieInput = {
  create: FavouriteCreateWithoutMovieInput;
  where: FavouriteWhereUniqueInput;
};

export type FavouriteCreateOrConnectWithoutPersonInput = {
  create: FavouriteCreateWithoutPersonInput;
  where: FavouriteWhereUniqueInput;
};

export type FavouriteCreateOrConnectWithoutShowInput = {
  create: FavouriteCreateWithoutShowInput;
  where: FavouriteWhereUniqueInput;
};

export type FavouriteCreateOrConnectWithoutSongInput = {
  create: FavouriteCreateWithoutSongInput;
  where: FavouriteWhereUniqueInput;
};

export type FavouriteCreateOrConnectWithoutUserInput = {
  create: FavouriteCreateWithoutUserInput;
  where: FavouriteWhereUniqueInput;
};

export type FavouriteCreateWithoutBookInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  movie?: InputMaybe<MovieCreateNestedOneWithoutFavouritesInput>;
  person?: InputMaybe<PersonCreateNestedOneWithoutFavouritesInput>;
  show?: InputMaybe<ShowCreateNestedOneWithoutFavouriteInput>;
  song?: InputMaybe<SongCreateNestedOneWithoutFavouritesInput>;
  user: UserCreateNestedOneWithoutFavouritesInput;
};

export type FavouriteCreateWithoutMovieInput = {
  book?: InputMaybe<BookCreateNestedOneWithoutFavouritesInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  person?: InputMaybe<PersonCreateNestedOneWithoutFavouritesInput>;
  show?: InputMaybe<ShowCreateNestedOneWithoutFavouriteInput>;
  song?: InputMaybe<SongCreateNestedOneWithoutFavouritesInput>;
  user: UserCreateNestedOneWithoutFavouritesInput;
};

export type FavouriteCreateWithoutPersonInput = {
  book?: InputMaybe<BookCreateNestedOneWithoutFavouritesInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  movie?: InputMaybe<MovieCreateNestedOneWithoutFavouritesInput>;
  show?: InputMaybe<ShowCreateNestedOneWithoutFavouriteInput>;
  song?: InputMaybe<SongCreateNestedOneWithoutFavouritesInput>;
  user: UserCreateNestedOneWithoutFavouritesInput;
};

export type FavouriteCreateWithoutShowInput = {
  book?: InputMaybe<BookCreateNestedOneWithoutFavouritesInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  movie?: InputMaybe<MovieCreateNestedOneWithoutFavouritesInput>;
  person?: InputMaybe<PersonCreateNestedOneWithoutFavouritesInput>;
  song?: InputMaybe<SongCreateNestedOneWithoutFavouritesInput>;
  user: UserCreateNestedOneWithoutFavouritesInput;
};

export type FavouriteCreateWithoutSongInput = {
  book?: InputMaybe<BookCreateNestedOneWithoutFavouritesInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  movie?: InputMaybe<MovieCreateNestedOneWithoutFavouritesInput>;
  person?: InputMaybe<PersonCreateNestedOneWithoutFavouritesInput>;
  show?: InputMaybe<ShowCreateNestedOneWithoutFavouriteInput>;
  user: UserCreateNestedOneWithoutFavouritesInput;
};

export type FavouriteCreateWithoutUserInput = {
  book?: InputMaybe<BookCreateNestedOneWithoutFavouritesInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  movie?: InputMaybe<MovieCreateNestedOneWithoutFavouritesInput>;
  person?: InputMaybe<PersonCreateNestedOneWithoutFavouritesInput>;
  show?: InputMaybe<ShowCreateNestedOneWithoutFavouriteInput>;
  song?: InputMaybe<SongCreateNestedOneWithoutFavouritesInput>;
};

export type FavouriteListRelationFilter = {
  every?: InputMaybe<FavouriteWhereInput>;
  none?: InputMaybe<FavouriteWhereInput>;
  some?: InputMaybe<FavouriteWhereInput>;
};

export type FavouriteOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type FavouriteOrderByWithRelationInput = {
  book?: InputMaybe<BookOrderByWithRelationInput>;
  bookId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  movie?: InputMaybe<MovieOrderByWithRelationInput>;
  movieId?: InputMaybe<SortOrder>;
  person?: InputMaybe<PersonOrderByWithRelationInput>;
  personId?: InputMaybe<SortOrder>;
  show?: InputMaybe<ShowOrderByWithRelationInput>;
  showId?: InputMaybe<SortOrder>;
  song?: InputMaybe<SongOrderByWithRelationInput>;
  songId?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum FavouriteScalarFieldEnum {
  BookId = 'bookId',
  CreatedAt = 'createdAt',
  Id = 'id',
  MovieId = 'movieId',
  PersonId = 'personId',
  ShowId = 'showId',
  SongId = 'songId',
  UserId = 'userId'
}

export type FavouriteScalarWhereInput = {
  AND?: InputMaybe<FavouriteScalarWhereInput[]>;
  NOT?: InputMaybe<FavouriteScalarWhereInput[]>;
  OR?: InputMaybe<FavouriteScalarWhereInput[]>;
  bookId?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  movieId?: InputMaybe<IntNullableFilter>;
  personId?: InputMaybe<IntNullableFilter>;
  showId?: InputMaybe<IntNullableFilter>;
  songId?: InputMaybe<IntNullableFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type FavouriteUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FavouriteUpdateManyWithWhereWithoutBookInput = {
  data: FavouriteUpdateManyMutationInput;
  where: FavouriteScalarWhereInput;
};

export type FavouriteUpdateManyWithWhereWithoutMovieInput = {
  data: FavouriteUpdateManyMutationInput;
  where: FavouriteScalarWhereInput;
};

export type FavouriteUpdateManyWithWhereWithoutPersonInput = {
  data: FavouriteUpdateManyMutationInput;
  where: FavouriteScalarWhereInput;
};

export type FavouriteUpdateManyWithWhereWithoutShowInput = {
  data: FavouriteUpdateManyMutationInput;
  where: FavouriteScalarWhereInput;
};

export type FavouriteUpdateManyWithWhereWithoutSongInput = {
  data: FavouriteUpdateManyMutationInput;
  where: FavouriteScalarWhereInput;
};

export type FavouriteUpdateManyWithWhereWithoutUserInput = {
  data: FavouriteUpdateManyMutationInput;
  where: FavouriteScalarWhereInput;
};

export type FavouriteUpdateManyWithoutBookInput = {
  connect?: InputMaybe<FavouriteWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<FavouriteCreateOrConnectWithoutBookInput[]>;
  create?: InputMaybe<FavouriteCreateWithoutBookInput[]>;
  createMany?: InputMaybe<FavouriteCreateManyBookInputEnvelope>;
  delete?: InputMaybe<FavouriteWhereUniqueInput[]>;
  deleteMany?: InputMaybe<FavouriteScalarWhereInput[]>;
  disconnect?: InputMaybe<FavouriteWhereUniqueInput[]>;
  set?: InputMaybe<FavouriteWhereUniqueInput[]>;
  update?: InputMaybe<FavouriteUpdateWithWhereUniqueWithoutBookInput[]>;
  updateMany?: InputMaybe<FavouriteUpdateManyWithWhereWithoutBookInput[]>;
  upsert?: InputMaybe<FavouriteUpsertWithWhereUniqueWithoutBookInput[]>;
};

export type FavouriteUpdateManyWithoutMovieInput = {
  connect?: InputMaybe<FavouriteWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<FavouriteCreateOrConnectWithoutMovieInput[]>;
  create?: InputMaybe<FavouriteCreateWithoutMovieInput[]>;
  createMany?: InputMaybe<FavouriteCreateManyMovieInputEnvelope>;
  delete?: InputMaybe<FavouriteWhereUniqueInput[]>;
  deleteMany?: InputMaybe<FavouriteScalarWhereInput[]>;
  disconnect?: InputMaybe<FavouriteWhereUniqueInput[]>;
  set?: InputMaybe<FavouriteWhereUniqueInput[]>;
  update?: InputMaybe<FavouriteUpdateWithWhereUniqueWithoutMovieInput[]>;
  updateMany?: InputMaybe<FavouriteUpdateManyWithWhereWithoutMovieInput[]>;
  upsert?: InputMaybe<FavouriteUpsertWithWhereUniqueWithoutMovieInput[]>;
};

export type FavouriteUpdateManyWithoutPersonInput = {
  connect?: InputMaybe<FavouriteWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<FavouriteCreateOrConnectWithoutPersonInput[]>;
  create?: InputMaybe<FavouriteCreateWithoutPersonInput[]>;
  createMany?: InputMaybe<FavouriteCreateManyPersonInputEnvelope>;
  delete?: InputMaybe<FavouriteWhereUniqueInput[]>;
  deleteMany?: InputMaybe<FavouriteScalarWhereInput[]>;
  disconnect?: InputMaybe<FavouriteWhereUniqueInput[]>;
  set?: InputMaybe<FavouriteWhereUniqueInput[]>;
  update?: InputMaybe<FavouriteUpdateWithWhereUniqueWithoutPersonInput[]>;
  updateMany?: InputMaybe<FavouriteUpdateManyWithWhereWithoutPersonInput[]>;
  upsert?: InputMaybe<FavouriteUpsertWithWhereUniqueWithoutPersonInput[]>;
};

export type FavouriteUpdateManyWithoutShowInput = {
  connect?: InputMaybe<FavouriteWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<FavouriteCreateOrConnectWithoutShowInput[]>;
  create?: InputMaybe<FavouriteCreateWithoutShowInput[]>;
  createMany?: InputMaybe<FavouriteCreateManyShowInputEnvelope>;
  delete?: InputMaybe<FavouriteWhereUniqueInput[]>;
  deleteMany?: InputMaybe<FavouriteScalarWhereInput[]>;
  disconnect?: InputMaybe<FavouriteWhereUniqueInput[]>;
  set?: InputMaybe<FavouriteWhereUniqueInput[]>;
  update?: InputMaybe<FavouriteUpdateWithWhereUniqueWithoutShowInput[]>;
  updateMany?: InputMaybe<FavouriteUpdateManyWithWhereWithoutShowInput[]>;
  upsert?: InputMaybe<FavouriteUpsertWithWhereUniqueWithoutShowInput[]>;
};

export type FavouriteUpdateManyWithoutSongInput = {
  connect?: InputMaybe<FavouriteWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<FavouriteCreateOrConnectWithoutSongInput[]>;
  create?: InputMaybe<FavouriteCreateWithoutSongInput[]>;
  createMany?: InputMaybe<FavouriteCreateManySongInputEnvelope>;
  delete?: InputMaybe<FavouriteWhereUniqueInput[]>;
  deleteMany?: InputMaybe<FavouriteScalarWhereInput[]>;
  disconnect?: InputMaybe<FavouriteWhereUniqueInput[]>;
  set?: InputMaybe<FavouriteWhereUniqueInput[]>;
  update?: InputMaybe<FavouriteUpdateWithWhereUniqueWithoutSongInput[]>;
  updateMany?: InputMaybe<FavouriteUpdateManyWithWhereWithoutSongInput[]>;
  upsert?: InputMaybe<FavouriteUpsertWithWhereUniqueWithoutSongInput[]>;
};

export type FavouriteUpdateManyWithoutUserInput = {
  connect?: InputMaybe<FavouriteWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<FavouriteCreateOrConnectWithoutUserInput[]>;
  create?: InputMaybe<FavouriteCreateWithoutUserInput[]>;
  createMany?: InputMaybe<FavouriteCreateManyUserInputEnvelope>;
  delete?: InputMaybe<FavouriteWhereUniqueInput[]>;
  deleteMany?: InputMaybe<FavouriteScalarWhereInput[]>;
  disconnect?: InputMaybe<FavouriteWhereUniqueInput[]>;
  set?: InputMaybe<FavouriteWhereUniqueInput[]>;
  update?: InputMaybe<FavouriteUpdateWithWhereUniqueWithoutUserInput[]>;
  updateMany?: InputMaybe<FavouriteUpdateManyWithWhereWithoutUserInput[]>;
  upsert?: InputMaybe<FavouriteUpsertWithWhereUniqueWithoutUserInput[]>;
};

export type FavouriteUpdateWithWhereUniqueWithoutBookInput = {
  data: FavouriteUpdateWithoutBookInput;
  where: FavouriteWhereUniqueInput;
};

export type FavouriteUpdateWithWhereUniqueWithoutMovieInput = {
  data: FavouriteUpdateWithoutMovieInput;
  where: FavouriteWhereUniqueInput;
};

export type FavouriteUpdateWithWhereUniqueWithoutPersonInput = {
  data: FavouriteUpdateWithoutPersonInput;
  where: FavouriteWhereUniqueInput;
};

export type FavouriteUpdateWithWhereUniqueWithoutShowInput = {
  data: FavouriteUpdateWithoutShowInput;
  where: FavouriteWhereUniqueInput;
};

export type FavouriteUpdateWithWhereUniqueWithoutSongInput = {
  data: FavouriteUpdateWithoutSongInput;
  where: FavouriteWhereUniqueInput;
};

export type FavouriteUpdateWithWhereUniqueWithoutUserInput = {
  data: FavouriteUpdateWithoutUserInput;
  where: FavouriteWhereUniqueInput;
};

export type FavouriteUpdateWithoutBookInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  movie?: InputMaybe<MovieUpdateOneWithoutFavouritesInput>;
  person?: InputMaybe<PersonUpdateOneWithoutFavouritesInput>;
  show?: InputMaybe<ShowUpdateOneWithoutFavouriteInput>;
  song?: InputMaybe<SongUpdateOneWithoutFavouritesInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutFavouritesInput>;
};

export type FavouriteUpdateWithoutMovieInput = {
  book?: InputMaybe<BookUpdateOneWithoutFavouritesInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  person?: InputMaybe<PersonUpdateOneWithoutFavouritesInput>;
  show?: InputMaybe<ShowUpdateOneWithoutFavouriteInput>;
  song?: InputMaybe<SongUpdateOneWithoutFavouritesInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutFavouritesInput>;
};

export type FavouriteUpdateWithoutPersonInput = {
  book?: InputMaybe<BookUpdateOneWithoutFavouritesInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  movie?: InputMaybe<MovieUpdateOneWithoutFavouritesInput>;
  show?: InputMaybe<ShowUpdateOneWithoutFavouriteInput>;
  song?: InputMaybe<SongUpdateOneWithoutFavouritesInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutFavouritesInput>;
};

export type FavouriteUpdateWithoutShowInput = {
  book?: InputMaybe<BookUpdateOneWithoutFavouritesInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  movie?: InputMaybe<MovieUpdateOneWithoutFavouritesInput>;
  person?: InputMaybe<PersonUpdateOneWithoutFavouritesInput>;
  song?: InputMaybe<SongUpdateOneWithoutFavouritesInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutFavouritesInput>;
};

export type FavouriteUpdateWithoutSongInput = {
  book?: InputMaybe<BookUpdateOneWithoutFavouritesInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  movie?: InputMaybe<MovieUpdateOneWithoutFavouritesInput>;
  person?: InputMaybe<PersonUpdateOneWithoutFavouritesInput>;
  show?: InputMaybe<ShowUpdateOneWithoutFavouriteInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutFavouritesInput>;
};

export type FavouriteUpdateWithoutUserInput = {
  book?: InputMaybe<BookUpdateOneWithoutFavouritesInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  movie?: InputMaybe<MovieUpdateOneWithoutFavouritesInput>;
  person?: InputMaybe<PersonUpdateOneWithoutFavouritesInput>;
  show?: InputMaybe<ShowUpdateOneWithoutFavouriteInput>;
  song?: InputMaybe<SongUpdateOneWithoutFavouritesInput>;
};

export type FavouriteUpsertWithWhereUniqueWithoutBookInput = {
  create: FavouriteCreateWithoutBookInput;
  update: FavouriteUpdateWithoutBookInput;
  where: FavouriteWhereUniqueInput;
};

export type FavouriteUpsertWithWhereUniqueWithoutMovieInput = {
  create: FavouriteCreateWithoutMovieInput;
  update: FavouriteUpdateWithoutMovieInput;
  where: FavouriteWhereUniqueInput;
};

export type FavouriteUpsertWithWhereUniqueWithoutPersonInput = {
  create: FavouriteCreateWithoutPersonInput;
  update: FavouriteUpdateWithoutPersonInput;
  where: FavouriteWhereUniqueInput;
};

export type FavouriteUpsertWithWhereUniqueWithoutShowInput = {
  create: FavouriteCreateWithoutShowInput;
  update: FavouriteUpdateWithoutShowInput;
  where: FavouriteWhereUniqueInput;
};

export type FavouriteUpsertWithWhereUniqueWithoutSongInput = {
  create: FavouriteCreateWithoutSongInput;
  update: FavouriteUpdateWithoutSongInput;
  where: FavouriteWhereUniqueInput;
};

export type FavouriteUpsertWithWhereUniqueWithoutUserInput = {
  create: FavouriteCreateWithoutUserInput;
  update: FavouriteUpdateWithoutUserInput;
  where: FavouriteWhereUniqueInput;
};

export type FavouriteWhereInput = {
  AND?: InputMaybe<FavouriteWhereInput[]>;
  NOT?: InputMaybe<FavouriteWhereInput[]>;
  OR?: InputMaybe<FavouriteWhereInput[]>;
  book?: InputMaybe<BookRelationFilter>;
  bookId?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  movie?: InputMaybe<MovieRelationFilter>;
  movieId?: InputMaybe<IntNullableFilter>;
  person?: InputMaybe<PersonRelationFilter>;
  personId?: InputMaybe<IntNullableFilter>;
  show?: InputMaybe<ShowRelationFilter>;
  showId?: InputMaybe<IntNullableFilter>;
  song?: InputMaybe<SongRelationFilter>;
  songId?: InputMaybe<IntNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type FavouriteWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type FloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type Follows = {
  __typename?: 'Follows';
  createdAt: Scalars['DateTime'];
  follower: User;
  followerId: Scalars['Int'];
  following: User;
  followingId: Scalars['Int'];
};

export type FollowsCreateManyFollowerInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  followingId: Scalars['Int'];
};

export type FollowsCreateManyFollowerInputEnvelope = {
  data: FollowsCreateManyFollowerInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type FollowsCreateManyFollowingInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  followerId: Scalars['Int'];
};

export type FollowsCreateManyFollowingInputEnvelope = {
  data: FollowsCreateManyFollowingInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type FollowsCreateNestedManyWithoutFollowerInput = {
  connect?: InputMaybe<FollowsWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<FollowsCreateOrConnectWithoutFollowerInput[]>;
  create?: InputMaybe<FollowsCreateWithoutFollowerInput[]>;
  createMany?: InputMaybe<FollowsCreateManyFollowerInputEnvelope>;
};

export type FollowsCreateNestedManyWithoutFollowingInput = {
  connect?: InputMaybe<FollowsWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<FollowsCreateOrConnectWithoutFollowingInput[]>;
  create?: InputMaybe<FollowsCreateWithoutFollowingInput[]>;
  createMany?: InputMaybe<FollowsCreateManyFollowingInputEnvelope>;
};

export type FollowsCreateOrConnectWithoutFollowerInput = {
  create: FollowsCreateWithoutFollowerInput;
  where: FollowsWhereUniqueInput;
};

export type FollowsCreateOrConnectWithoutFollowingInput = {
  create: FollowsCreateWithoutFollowingInput;
  where: FollowsWhereUniqueInput;
};

export type FollowsCreateWithoutFollowerInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  following: UserCreateNestedOneWithoutFollowingInput;
};

export type FollowsCreateWithoutFollowingInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  follower: UserCreateNestedOneWithoutFollowersInput;
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
  createdAt?: InputMaybe<SortOrder>;
  follower?: InputMaybe<UserOrderByWithRelationInput>;
  followerId?: InputMaybe<SortOrder>;
  following?: InputMaybe<UserOrderByWithRelationInput>;
  followingId?: InputMaybe<SortOrder>;
};

export enum FollowsScalarFieldEnum {
  CreatedAt = 'createdAt',
  FollowerId = 'followerId',
  FollowingId = 'followingId'
}

export type FollowsScalarWhereInput = {
  AND?: InputMaybe<FollowsScalarWhereInput[]>;
  NOT?: InputMaybe<FollowsScalarWhereInput[]>;
  OR?: InputMaybe<FollowsScalarWhereInput[]>;
  createdAt?: InputMaybe<DateTimeFilter>;
  followerId?: InputMaybe<IntFilter>;
  followingId?: InputMaybe<IntFilter>;
};

export type FollowsUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FollowsUpdateManyWithWhereWithoutFollowerInput = {
  data: FollowsUpdateManyMutationInput;
  where: FollowsScalarWhereInput;
};

export type FollowsUpdateManyWithWhereWithoutFollowingInput = {
  data: FollowsUpdateManyMutationInput;
  where: FollowsScalarWhereInput;
};

export type FollowsUpdateManyWithoutFollowerInput = {
  connect?: InputMaybe<FollowsWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<FollowsCreateOrConnectWithoutFollowerInput[]>;
  create?: InputMaybe<FollowsCreateWithoutFollowerInput[]>;
  createMany?: InputMaybe<FollowsCreateManyFollowerInputEnvelope>;
  delete?: InputMaybe<FollowsWhereUniqueInput[]>;
  deleteMany?: InputMaybe<FollowsScalarWhereInput[]>;
  disconnect?: InputMaybe<FollowsWhereUniqueInput[]>;
  set?: InputMaybe<FollowsWhereUniqueInput[]>;
  update?: InputMaybe<FollowsUpdateWithWhereUniqueWithoutFollowerInput[]>;
  updateMany?: InputMaybe<FollowsUpdateManyWithWhereWithoutFollowerInput[]>;
  upsert?: InputMaybe<FollowsUpsertWithWhereUniqueWithoutFollowerInput[]>;
};

export type FollowsUpdateManyWithoutFollowingInput = {
  connect?: InputMaybe<FollowsWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<FollowsCreateOrConnectWithoutFollowingInput[]>;
  create?: InputMaybe<FollowsCreateWithoutFollowingInput[]>;
  createMany?: InputMaybe<FollowsCreateManyFollowingInputEnvelope>;
  delete?: InputMaybe<FollowsWhereUniqueInput[]>;
  deleteMany?: InputMaybe<FollowsScalarWhereInput[]>;
  disconnect?: InputMaybe<FollowsWhereUniqueInput[]>;
  set?: InputMaybe<FollowsWhereUniqueInput[]>;
  update?: InputMaybe<FollowsUpdateWithWhereUniqueWithoutFollowingInput[]>;
  updateMany?: InputMaybe<FollowsUpdateManyWithWhereWithoutFollowingInput[]>;
  upsert?: InputMaybe<FollowsUpsertWithWhereUniqueWithoutFollowingInput[]>;
};

export type FollowsUpdateWithWhereUniqueWithoutFollowerInput = {
  data: FollowsUpdateWithoutFollowerInput;
  where: FollowsWhereUniqueInput;
};

export type FollowsUpdateWithWhereUniqueWithoutFollowingInput = {
  data: FollowsUpdateWithoutFollowingInput;
  where: FollowsWhereUniqueInput;
};

export type FollowsUpdateWithoutFollowerInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  following?: InputMaybe<UserUpdateOneRequiredWithoutFollowingInput>;
};

export type FollowsUpdateWithoutFollowingInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  follower?: InputMaybe<UserUpdateOneRequiredWithoutFollowersInput>;
};

export type FollowsUpsertWithWhereUniqueWithoutFollowerInput = {
  create: FollowsCreateWithoutFollowerInput;
  update: FollowsUpdateWithoutFollowerInput;
  where: FollowsWhereUniqueInput;
};

export type FollowsUpsertWithWhereUniqueWithoutFollowingInput = {
  create: FollowsCreateWithoutFollowingInput;
  update: FollowsUpdateWithoutFollowingInput;
  where: FollowsWhereUniqueInput;
};

export type FollowsWhereInput = {
  AND?: InputMaybe<FollowsWhereInput[]>;
  NOT?: InputMaybe<FollowsWhereInput[]>;
  OR?: InputMaybe<FollowsWhereInput[]>;
  createdAt?: InputMaybe<DateTimeFilter>;
  follower?: InputMaybe<UserRelationFilter>;
  followerId?: InputMaybe<IntFilter>;
  following?: InputMaybe<UserRelationFilter>;
  followingId?: InputMaybe<IntFilter>;
};

export type FollowsWhereUniqueInput = {
  followerId_followingId?: InputMaybe<FollowsFollowerIdFollowingIdCompoundUniqueInput>;
};

export type Genre = {
  __typename?: 'Genre';
  _count?: Maybe<GenreCount>;
  books: Book[];
  id: Scalars['Int'];
  movies: Movie[];
  name: Scalars['String'];
  shows: Show[];
  songs: Song[];
};

export type GenreBooksArgs = {
  cursor?: InputMaybe<BookWhereUniqueInput>;
  distinct?: InputMaybe<BookScalarFieldEnum[]>;
  orderBy?: InputMaybe<BookOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BookWhereInput>;
};

export type GenreMoviesArgs = {
  cursor?: InputMaybe<MovieWhereUniqueInput>;
  distinct?: InputMaybe<MovieScalarFieldEnum[]>;
  orderBy?: InputMaybe<MovieOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieWhereInput>;
};

export type GenreShowsArgs = {
  cursor?: InputMaybe<ShowWhereUniqueInput>;
  distinct?: InputMaybe<ShowScalarFieldEnum[]>;
  orderBy?: InputMaybe<ShowOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ShowWhereInput>;
};

export type GenreSongsArgs = {
  cursor?: InputMaybe<SongWhereUniqueInput>;
  distinct?: InputMaybe<SongScalarFieldEnum[]>;
  orderBy?: InputMaybe<SongOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SongWhereInput>;
};

export type GenreCount = {
  __typename?: 'GenreCount';
  books: Scalars['Int'];
  movies: Scalars['Int'];
  shows: Scalars['Int'];
  songs: Scalars['Int'];
};

export type GenreCreateInput = {
  books?: InputMaybe<BookCreateNestedManyWithoutGenresInput>;
  movies?: InputMaybe<MovieCreateNestedManyWithoutGenresInput>;
  name: Scalars['String'];
  shows?: InputMaybe<ShowCreateNestedManyWithoutGenresInput>;
  songs?: InputMaybe<SongCreateNestedManyWithoutGenresInput>;
};

export type GenreCreateNestedManyWithoutBooksInput = {
  connect?: InputMaybe<GenreWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<GenreCreateOrConnectWithoutBooksInput[]>;
  create?: InputMaybe<GenreCreateWithoutBooksInput[]>;
};

export type GenreCreateNestedManyWithoutMoviesInput = {
  connect?: InputMaybe<GenreWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<GenreCreateOrConnectWithoutMoviesInput[]>;
  create?: InputMaybe<GenreCreateWithoutMoviesInput[]>;
};

export type GenreCreateNestedManyWithoutShowsInput = {
  connect?: InputMaybe<GenreWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<GenreCreateOrConnectWithoutShowsInput[]>;
  create?: InputMaybe<GenreCreateWithoutShowsInput[]>;
};

export type GenreCreateNestedManyWithoutSongsInput = {
  connect?: InputMaybe<GenreWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<GenreCreateOrConnectWithoutSongsInput[]>;
  create?: InputMaybe<GenreCreateWithoutSongsInput[]>;
};

export type GenreCreateOrConnectWithoutBooksInput = {
  create: GenreCreateWithoutBooksInput;
  where: GenreWhereUniqueInput;
};

export type GenreCreateOrConnectWithoutMoviesInput = {
  create: GenreCreateWithoutMoviesInput;
  where: GenreWhereUniqueInput;
};

export type GenreCreateOrConnectWithoutShowsInput = {
  create: GenreCreateWithoutShowsInput;
  where: GenreWhereUniqueInput;
};

export type GenreCreateOrConnectWithoutSongsInput = {
  create: GenreCreateWithoutSongsInput;
  where: GenreWhereUniqueInput;
};

export type GenreCreateWithoutBooksInput = {
  movies?: InputMaybe<MovieCreateNestedManyWithoutGenresInput>;
  name: Scalars['String'];
  shows?: InputMaybe<ShowCreateNestedManyWithoutGenresInput>;
  songs?: InputMaybe<SongCreateNestedManyWithoutGenresInput>;
};

export type GenreCreateWithoutMoviesInput = {
  books?: InputMaybe<BookCreateNestedManyWithoutGenresInput>;
  name: Scalars['String'];
  shows?: InputMaybe<ShowCreateNestedManyWithoutGenresInput>;
  songs?: InputMaybe<SongCreateNestedManyWithoutGenresInput>;
};

export type GenreCreateWithoutShowsInput = {
  books?: InputMaybe<BookCreateNestedManyWithoutGenresInput>;
  movies?: InputMaybe<MovieCreateNestedManyWithoutGenresInput>;
  name: Scalars['String'];
  songs?: InputMaybe<SongCreateNestedManyWithoutGenresInput>;
};

export type GenreCreateWithoutSongsInput = {
  books?: InputMaybe<BookCreateNestedManyWithoutGenresInput>;
  movies?: InputMaybe<MovieCreateNestedManyWithoutGenresInput>;
  name: Scalars['String'];
  shows?: InputMaybe<ShowCreateNestedManyWithoutGenresInput>;
};

export type GenreListRelationFilter = {
  every?: InputMaybe<GenreWhereInput>;
  none?: InputMaybe<GenreWhereInput>;
  some?: InputMaybe<GenreWhereInput>;
};

export type GenreOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type GenreOrderByWithRelationInput = {
  books?: InputMaybe<BookOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  movies?: InputMaybe<MovieOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  shows?: InputMaybe<ShowOrderByRelationAggregateInput>;
  songs?: InputMaybe<SongOrderByRelationAggregateInput>;
};

export enum GenreScalarFieldEnum {
  Id = 'id',
  Name = 'name'
}

export type GenreScalarWhereInput = {
  AND?: InputMaybe<GenreScalarWhereInput[]>;
  NOT?: InputMaybe<GenreScalarWhereInput[]>;
  OR?: InputMaybe<GenreScalarWhereInput[]>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
};

export type GenreUpdateManyMutationInput = {
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type GenreUpdateManyWithWhereWithoutBooksInput = {
  data: GenreUpdateManyMutationInput;
  where: GenreScalarWhereInput;
};

export type GenreUpdateManyWithWhereWithoutMoviesInput = {
  data: GenreUpdateManyMutationInput;
  where: GenreScalarWhereInput;
};

export type GenreUpdateManyWithWhereWithoutShowsInput = {
  data: GenreUpdateManyMutationInput;
  where: GenreScalarWhereInput;
};

export type GenreUpdateManyWithWhereWithoutSongsInput = {
  data: GenreUpdateManyMutationInput;
  where: GenreScalarWhereInput;
};

export type GenreUpdateManyWithoutBooksInput = {
  connect?: InputMaybe<GenreWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<GenreCreateOrConnectWithoutBooksInput[]>;
  create?: InputMaybe<GenreCreateWithoutBooksInput[]>;
  delete?: InputMaybe<GenreWhereUniqueInput[]>;
  deleteMany?: InputMaybe<GenreScalarWhereInput[]>;
  disconnect?: InputMaybe<GenreWhereUniqueInput[]>;
  set?: InputMaybe<GenreWhereUniqueInput[]>;
  update?: InputMaybe<GenreUpdateWithWhereUniqueWithoutBooksInput[]>;
  updateMany?: InputMaybe<GenreUpdateManyWithWhereWithoutBooksInput[]>;
  upsert?: InputMaybe<GenreUpsertWithWhereUniqueWithoutBooksInput[]>;
};

export type GenreUpdateManyWithoutMoviesInput = {
  connect?: InputMaybe<GenreWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<GenreCreateOrConnectWithoutMoviesInput[]>;
  create?: InputMaybe<GenreCreateWithoutMoviesInput[]>;
  delete?: InputMaybe<GenreWhereUniqueInput[]>;
  deleteMany?: InputMaybe<GenreScalarWhereInput[]>;
  disconnect?: InputMaybe<GenreWhereUniqueInput[]>;
  set?: InputMaybe<GenreWhereUniqueInput[]>;
  update?: InputMaybe<GenreUpdateWithWhereUniqueWithoutMoviesInput[]>;
  updateMany?: InputMaybe<GenreUpdateManyWithWhereWithoutMoviesInput[]>;
  upsert?: InputMaybe<GenreUpsertWithWhereUniqueWithoutMoviesInput[]>;
};

export type GenreUpdateManyWithoutShowsInput = {
  connect?: InputMaybe<GenreWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<GenreCreateOrConnectWithoutShowsInput[]>;
  create?: InputMaybe<GenreCreateWithoutShowsInput[]>;
  delete?: InputMaybe<GenreWhereUniqueInput[]>;
  deleteMany?: InputMaybe<GenreScalarWhereInput[]>;
  disconnect?: InputMaybe<GenreWhereUniqueInput[]>;
  set?: InputMaybe<GenreWhereUniqueInput[]>;
  update?: InputMaybe<GenreUpdateWithWhereUniqueWithoutShowsInput[]>;
  updateMany?: InputMaybe<GenreUpdateManyWithWhereWithoutShowsInput[]>;
  upsert?: InputMaybe<GenreUpsertWithWhereUniqueWithoutShowsInput[]>;
};

export type GenreUpdateManyWithoutSongsInput = {
  connect?: InputMaybe<GenreWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<GenreCreateOrConnectWithoutSongsInput[]>;
  create?: InputMaybe<GenreCreateWithoutSongsInput[]>;
  delete?: InputMaybe<GenreWhereUniqueInput[]>;
  deleteMany?: InputMaybe<GenreScalarWhereInput[]>;
  disconnect?: InputMaybe<GenreWhereUniqueInput[]>;
  set?: InputMaybe<GenreWhereUniqueInput[]>;
  update?: InputMaybe<GenreUpdateWithWhereUniqueWithoutSongsInput[]>;
  updateMany?: InputMaybe<GenreUpdateManyWithWhereWithoutSongsInput[]>;
  upsert?: InputMaybe<GenreUpsertWithWhereUniqueWithoutSongsInput[]>;
};

export type GenreUpdateWithWhereUniqueWithoutBooksInput = {
  data: GenreUpdateWithoutBooksInput;
  where: GenreWhereUniqueInput;
};

export type GenreUpdateWithWhereUniqueWithoutMoviesInput = {
  data: GenreUpdateWithoutMoviesInput;
  where: GenreWhereUniqueInput;
};

export type GenreUpdateWithWhereUniqueWithoutShowsInput = {
  data: GenreUpdateWithoutShowsInput;
  where: GenreWhereUniqueInput;
};

export type GenreUpdateWithWhereUniqueWithoutSongsInput = {
  data: GenreUpdateWithoutSongsInput;
  where: GenreWhereUniqueInput;
};

export type GenreUpdateWithoutBooksInput = {
  movies?: InputMaybe<MovieUpdateManyWithoutGenresInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  shows?: InputMaybe<ShowUpdateManyWithoutGenresInput>;
  songs?: InputMaybe<SongUpdateManyWithoutGenresInput>;
};

export type GenreUpdateWithoutMoviesInput = {
  books?: InputMaybe<BookUpdateManyWithoutGenresInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  shows?: InputMaybe<ShowUpdateManyWithoutGenresInput>;
  songs?: InputMaybe<SongUpdateManyWithoutGenresInput>;
};

export type GenreUpdateWithoutShowsInput = {
  books?: InputMaybe<BookUpdateManyWithoutGenresInput>;
  movies?: InputMaybe<MovieUpdateManyWithoutGenresInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  songs?: InputMaybe<SongUpdateManyWithoutGenresInput>;
};

export type GenreUpdateWithoutSongsInput = {
  books?: InputMaybe<BookUpdateManyWithoutGenresInput>;
  movies?: InputMaybe<MovieUpdateManyWithoutGenresInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  shows?: InputMaybe<ShowUpdateManyWithoutGenresInput>;
};

export type GenreUpsertWithWhereUniqueWithoutBooksInput = {
  create: GenreCreateWithoutBooksInput;
  update: GenreUpdateWithoutBooksInput;
  where: GenreWhereUniqueInput;
};

export type GenreUpsertWithWhereUniqueWithoutMoviesInput = {
  create: GenreCreateWithoutMoviesInput;
  update: GenreUpdateWithoutMoviesInput;
  where: GenreWhereUniqueInput;
};

export type GenreUpsertWithWhereUniqueWithoutShowsInput = {
  create: GenreCreateWithoutShowsInput;
  update: GenreUpdateWithoutShowsInput;
  where: GenreWhereUniqueInput;
};

export type GenreUpsertWithWhereUniqueWithoutSongsInput = {
  create: GenreCreateWithoutSongsInput;
  update: GenreUpdateWithoutSongsInput;
  where: GenreWhereUniqueInput;
};

export type GenreWhereInput = {
  AND?: InputMaybe<GenreWhereInput[]>;
  NOT?: InputMaybe<GenreWhereInput[]>;
  OR?: InputMaybe<GenreWhereInput[]>;
  books?: InputMaybe<BookListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  movies?: InputMaybe<MovieListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  shows?: InputMaybe<ShowListRelationFilter>;
  songs?: InputMaybe<SongListRelationFilter>;
};

export type GenreWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
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
  favourites: Favourite[];
  genres: Genre[];
  id: Scalars['Int'];
  locked: Scalars['Boolean'];
  overview: Scalars['String'];
  platforms: Platform[];
  rating: Rating[];
  released?: Maybe<Scalars['DateTime']>;
  revenue?: Maybe<Scalars['Int']>;
  reviews: Review[];
  runtime?: Maybe<Scalars['Float']>;
  soundtrack: SongInMovie[];
  status: Scalars['String'];
  thumbnail: Scalars['String'];
  title: Scalars['String'];
  trailer?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  watchlist: Watchlist[];
};

export type MovieActorsArgs = {
  cursor?: InputMaybe<ActorInMovieWhereUniqueInput>;
  distinct?: InputMaybe<ActorInMovieScalarFieldEnum[]>;
  orderBy?: InputMaybe<ActorInMovieOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ActorInMovieWhereInput>;
};

export type MovieFavouritesArgs = {
  cursor?: InputMaybe<FavouriteWhereUniqueInput>;
  distinct?: InputMaybe<FavouriteScalarFieldEnum[]>;
  orderBy?: InputMaybe<FavouriteOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FavouriteWhereInput>;
};

export type MovieGenresArgs = {
  cursor?: InputMaybe<GenreWhereUniqueInput>;
  distinct?: InputMaybe<GenreScalarFieldEnum[]>;
  orderBy?: InputMaybe<GenreOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GenreWhereInput>;
};

export type MoviePlatformsArgs = {
  cursor?: InputMaybe<PlatformWhereUniqueInput>;
  distinct?: InputMaybe<PlatformScalarFieldEnum[]>;
  orderBy?: InputMaybe<PlatformOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlatformWhereInput>;
};

export type MovieRatingArgs = {
  cursor?: InputMaybe<RatingWhereUniqueInput>;
  distinct?: InputMaybe<RatingScalarFieldEnum[]>;
  orderBy?: InputMaybe<RatingOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RatingWhereInput>;
};

export type MovieReviewsArgs = {
  cursor?: InputMaybe<ReviewWhereUniqueInput>;
  distinct?: InputMaybe<ReviewScalarFieldEnum[]>;
  orderBy?: InputMaybe<ReviewOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ReviewWhereInput>;
};

export type MovieSoundtrackArgs = {
  cursor?: InputMaybe<SongInMovieWhereUniqueInput>;
  distinct?: InputMaybe<SongInMovieScalarFieldEnum[]>;
  orderBy?: InputMaybe<SongInMovieOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SongInMovieWhereInput>;
};

export type MovieWatchlistArgs = {
  cursor?: InputMaybe<WatchlistWhereUniqueInput>;
  distinct?: InputMaybe<WatchlistScalarFieldEnum[]>;
  orderBy?: InputMaybe<WatchlistOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WatchlistWhereInput>;
};

export type MovieCount = {
  __typename?: 'MovieCount';
  actors: Scalars['Int'];
  favourites: Scalars['Int'];
  genres: Scalars['Int'];
  platforms: Scalars['Int'];
  rating: Scalars['Int'];
  reviews: Scalars['Int'];
  soundtrack: Scalars['Int'];
  watchlist: Scalars['Int'];
};

export type MovieCreateInput = {
  actors?: InputMaybe<ActorInMovieCreateNestedManyWithoutMovieInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  favourites?: InputMaybe<FavouriteCreateNestedManyWithoutMovieInput>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutMoviesInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  overview: Scalars['String'];
  platforms?: InputMaybe<PlatformCreateNestedManyWithoutMoviesInput>;
  rating?: InputMaybe<RatingCreateNestedManyWithoutMoviesInput>;
  released?: InputMaybe<Scalars['DateTime']>;
  revenue?: InputMaybe<Scalars['Int']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutMovieInput>;
  runtime?: InputMaybe<Scalars['Float']>;
  soundtrack?: InputMaybe<SongInMovieCreateNestedManyWithoutMovieInput>;
  status?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  trailer?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  watchlist?: InputMaybe<WatchlistCreateNestedManyWithoutMoviesInput>;
};

export type MovieCreateNestedManyWithoutGenresInput = {
  connect?: InputMaybe<MovieWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutGenresInput[]>;
  create?: InputMaybe<MovieCreateWithoutGenresInput[]>;
};

export type MovieCreateNestedManyWithoutPlatformsInput = {
  connect?: InputMaybe<MovieWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutPlatformsInput[]>;
  create?: InputMaybe<MovieCreateWithoutPlatformsInput[]>;
};

export type MovieCreateNestedManyWithoutRatingInput = {
  connect?: InputMaybe<MovieWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutRatingInput[]>;
  create?: InputMaybe<MovieCreateWithoutRatingInput[]>;
};

export type MovieCreateNestedManyWithoutWatchlistInput = {
  connect?: InputMaybe<MovieWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutWatchlistInput[]>;
  create?: InputMaybe<MovieCreateWithoutWatchlistInput[]>;
};

export type MovieCreateNestedOneWithoutActorsInput = {
  connect?: InputMaybe<MovieWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutActorsInput>;
  create?: InputMaybe<MovieCreateWithoutActorsInput>;
};

export type MovieCreateNestedOneWithoutFavouritesInput = {
  connect?: InputMaybe<MovieWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutFavouritesInput>;
  create?: InputMaybe<MovieCreateWithoutFavouritesInput>;
};

export type MovieCreateNestedOneWithoutReviewsInput = {
  connect?: InputMaybe<MovieWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutReviewsInput>;
  create?: InputMaybe<MovieCreateWithoutReviewsInput>;
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

export type MovieCreateOrConnectWithoutFavouritesInput = {
  create: MovieCreateWithoutFavouritesInput;
  where: MovieWhereUniqueInput;
};

export type MovieCreateOrConnectWithoutGenresInput = {
  create: MovieCreateWithoutGenresInput;
  where: MovieWhereUniqueInput;
};

export type MovieCreateOrConnectWithoutPlatformsInput = {
  create: MovieCreateWithoutPlatformsInput;
  where: MovieWhereUniqueInput;
};

export type MovieCreateOrConnectWithoutRatingInput = {
  create: MovieCreateWithoutRatingInput;
  where: MovieWhereUniqueInput;
};

export type MovieCreateOrConnectWithoutReviewsInput = {
  create: MovieCreateWithoutReviewsInput;
  where: MovieWhereUniqueInput;
};

export type MovieCreateOrConnectWithoutSoundtrackInput = {
  create: MovieCreateWithoutSoundtrackInput;
  where: MovieWhereUniqueInput;
};

export type MovieCreateOrConnectWithoutWatchlistInput = {
  create: MovieCreateWithoutWatchlistInput;
  where: MovieWhereUniqueInput;
};

export type MovieCreateWithoutActorsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  favourites?: InputMaybe<FavouriteCreateNestedManyWithoutMovieInput>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutMoviesInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  overview: Scalars['String'];
  platforms?: InputMaybe<PlatformCreateNestedManyWithoutMoviesInput>;
  rating?: InputMaybe<RatingCreateNestedManyWithoutMoviesInput>;
  released?: InputMaybe<Scalars['DateTime']>;
  revenue?: InputMaybe<Scalars['Int']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutMovieInput>;
  runtime?: InputMaybe<Scalars['Float']>;
  soundtrack?: InputMaybe<SongInMovieCreateNestedManyWithoutMovieInput>;
  status?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  trailer?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  watchlist?: InputMaybe<WatchlistCreateNestedManyWithoutMoviesInput>;
};

export type MovieCreateWithoutFavouritesInput = {
  actors?: InputMaybe<ActorInMovieCreateNestedManyWithoutMovieInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutMoviesInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  overview: Scalars['String'];
  platforms?: InputMaybe<PlatformCreateNestedManyWithoutMoviesInput>;
  rating?: InputMaybe<RatingCreateNestedManyWithoutMoviesInput>;
  released?: InputMaybe<Scalars['DateTime']>;
  revenue?: InputMaybe<Scalars['Int']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutMovieInput>;
  runtime?: InputMaybe<Scalars['Float']>;
  soundtrack?: InputMaybe<SongInMovieCreateNestedManyWithoutMovieInput>;
  status?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  trailer?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  watchlist?: InputMaybe<WatchlistCreateNestedManyWithoutMoviesInput>;
};

export type MovieCreateWithoutGenresInput = {
  actors?: InputMaybe<ActorInMovieCreateNestedManyWithoutMovieInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  favourites?: InputMaybe<FavouriteCreateNestedManyWithoutMovieInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  overview: Scalars['String'];
  platforms?: InputMaybe<PlatformCreateNestedManyWithoutMoviesInput>;
  rating?: InputMaybe<RatingCreateNestedManyWithoutMoviesInput>;
  released?: InputMaybe<Scalars['DateTime']>;
  revenue?: InputMaybe<Scalars['Int']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutMovieInput>;
  runtime?: InputMaybe<Scalars['Float']>;
  soundtrack?: InputMaybe<SongInMovieCreateNestedManyWithoutMovieInput>;
  status?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  trailer?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  watchlist?: InputMaybe<WatchlistCreateNestedManyWithoutMoviesInput>;
};

export type MovieCreateWithoutPlatformsInput = {
  actors?: InputMaybe<ActorInMovieCreateNestedManyWithoutMovieInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  favourites?: InputMaybe<FavouriteCreateNestedManyWithoutMovieInput>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutMoviesInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  overview: Scalars['String'];
  rating?: InputMaybe<RatingCreateNestedManyWithoutMoviesInput>;
  released?: InputMaybe<Scalars['DateTime']>;
  revenue?: InputMaybe<Scalars['Int']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutMovieInput>;
  runtime?: InputMaybe<Scalars['Float']>;
  soundtrack?: InputMaybe<SongInMovieCreateNestedManyWithoutMovieInput>;
  status?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  trailer?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  watchlist?: InputMaybe<WatchlistCreateNestedManyWithoutMoviesInput>;
};

export type MovieCreateWithoutRatingInput = {
  actors?: InputMaybe<ActorInMovieCreateNestedManyWithoutMovieInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  favourites?: InputMaybe<FavouriteCreateNestedManyWithoutMovieInput>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutMoviesInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  overview: Scalars['String'];
  platforms?: InputMaybe<PlatformCreateNestedManyWithoutMoviesInput>;
  released?: InputMaybe<Scalars['DateTime']>;
  revenue?: InputMaybe<Scalars['Int']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutMovieInput>;
  runtime?: InputMaybe<Scalars['Float']>;
  soundtrack?: InputMaybe<SongInMovieCreateNestedManyWithoutMovieInput>;
  status?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  trailer?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  watchlist?: InputMaybe<WatchlistCreateNestedManyWithoutMoviesInput>;
};

export type MovieCreateWithoutReviewsInput = {
  actors?: InputMaybe<ActorInMovieCreateNestedManyWithoutMovieInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  favourites?: InputMaybe<FavouriteCreateNestedManyWithoutMovieInput>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutMoviesInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  overview: Scalars['String'];
  platforms?: InputMaybe<PlatformCreateNestedManyWithoutMoviesInput>;
  rating?: InputMaybe<RatingCreateNestedManyWithoutMoviesInput>;
  released?: InputMaybe<Scalars['DateTime']>;
  revenue?: InputMaybe<Scalars['Int']>;
  runtime?: InputMaybe<Scalars['Float']>;
  soundtrack?: InputMaybe<SongInMovieCreateNestedManyWithoutMovieInput>;
  status?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  trailer?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  watchlist?: InputMaybe<WatchlistCreateNestedManyWithoutMoviesInput>;
};

export type MovieCreateWithoutSoundtrackInput = {
  actors?: InputMaybe<ActorInMovieCreateNestedManyWithoutMovieInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  favourites?: InputMaybe<FavouriteCreateNestedManyWithoutMovieInput>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutMoviesInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  overview: Scalars['String'];
  platforms?: InputMaybe<PlatformCreateNestedManyWithoutMoviesInput>;
  rating?: InputMaybe<RatingCreateNestedManyWithoutMoviesInput>;
  released?: InputMaybe<Scalars['DateTime']>;
  revenue?: InputMaybe<Scalars['Int']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutMovieInput>;
  runtime?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  trailer?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  watchlist?: InputMaybe<WatchlistCreateNestedManyWithoutMoviesInput>;
};

export type MovieCreateWithoutWatchlistInput = {
  actors?: InputMaybe<ActorInMovieCreateNestedManyWithoutMovieInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  favourites?: InputMaybe<FavouriteCreateNestedManyWithoutMovieInput>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutMoviesInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  overview: Scalars['String'];
  platforms?: InputMaybe<PlatformCreateNestedManyWithoutMoviesInput>;
  rating?: InputMaybe<RatingCreateNestedManyWithoutMoviesInput>;
  released?: InputMaybe<Scalars['DateTime']>;
  revenue?: InputMaybe<Scalars['Int']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutMovieInput>;
  runtime?: InputMaybe<Scalars['Float']>;
  soundtrack?: InputMaybe<SongInMovieCreateNestedManyWithoutMovieInput>;
  status?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  trailer?: InputMaybe<Scalars['String']>;
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
  actors?: InputMaybe<ActorInMovieOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  favourites?: InputMaybe<FavouriteOrderByRelationAggregateInput>;
  genres?: InputMaybe<GenreOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  locked?: InputMaybe<SortOrder>;
  overview?: InputMaybe<SortOrder>;
  platforms?: InputMaybe<PlatformOrderByRelationAggregateInput>;
  rating?: InputMaybe<RatingOrderByRelationAggregateInput>;
  released?: InputMaybe<SortOrder>;
  revenue?: InputMaybe<SortOrder>;
  reviews?: InputMaybe<ReviewOrderByRelationAggregateInput>;
  runtime?: InputMaybe<SortOrder>;
  soundtrack?: InputMaybe<SongInMovieOrderByRelationAggregateInput>;
  status?: InputMaybe<SortOrder>;
  thumbnail?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  trailer?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  watchlist?: InputMaybe<WatchlistOrderByRelationAggregateInput>;
};

export type MovieRelationFilter = {
  is?: InputMaybe<MovieWhereInput>;
  isNot?: InputMaybe<MovieWhereInput>;
};

export enum MovieScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Locked = 'locked',
  Overview = 'overview',
  Released = 'released',
  Revenue = 'revenue',
  Runtime = 'runtime',
  Status = 'status',
  Thumbnail = 'thumbnail',
  Title = 'title',
  Trailer = 'trailer',
  UpdatedAt = 'updatedAt'
}

export type MovieScalarWhereInput = {
  AND?: InputMaybe<MovieScalarWhereInput[]>;
  NOT?: InputMaybe<MovieScalarWhereInput[]>;
  OR?: InputMaybe<MovieScalarWhereInput[]>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  locked?: InputMaybe<BoolFilter>;
  overview?: InputMaybe<StringFilter>;
  released?: InputMaybe<DateTimeNullableFilter>;
  revenue?: InputMaybe<IntNullableFilter>;
  runtime?: InputMaybe<FloatNullableFilter>;
  status?: InputMaybe<StringFilter>;
  thumbnail?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  trailer?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MovieUpdateInput = {
  actors?: InputMaybe<ActorInMovieUpdateManyWithoutMovieInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  favourites?: InputMaybe<FavouriteUpdateManyWithoutMovieInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutMoviesInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  overview?: InputMaybe<StringFieldUpdateOperationsInput>;
  platforms?: InputMaybe<PlatformUpdateManyWithoutMoviesInput>;
  rating?: InputMaybe<RatingUpdateManyWithoutMoviesInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  revenue?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutMovieInput>;
  runtime?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  soundtrack?: InputMaybe<SongInMovieUpdateManyWithoutMovieInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
  thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  trailer?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<WatchlistUpdateManyWithoutMoviesInput>;
};

export type MovieUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  overview?: InputMaybe<StringFieldUpdateOperationsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  revenue?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  runtime?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
  thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  trailer?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieUpdateManyWithWhereWithoutGenresInput = {
  data: MovieUpdateManyMutationInput;
  where: MovieScalarWhereInput;
};

export type MovieUpdateManyWithWhereWithoutPlatformsInput = {
  data: MovieUpdateManyMutationInput;
  where: MovieScalarWhereInput;
};

export type MovieUpdateManyWithWhereWithoutRatingInput = {
  data: MovieUpdateManyMutationInput;
  where: MovieScalarWhereInput;
};

export type MovieUpdateManyWithWhereWithoutWatchlistInput = {
  data: MovieUpdateManyMutationInput;
  where: MovieScalarWhereInput;
};

export type MovieUpdateManyWithoutGenresInput = {
  connect?: InputMaybe<MovieWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutGenresInput[]>;
  create?: InputMaybe<MovieCreateWithoutGenresInput[]>;
  delete?: InputMaybe<MovieWhereUniqueInput[]>;
  deleteMany?: InputMaybe<MovieScalarWhereInput[]>;
  disconnect?: InputMaybe<MovieWhereUniqueInput[]>;
  set?: InputMaybe<MovieWhereUniqueInput[]>;
  update?: InputMaybe<MovieUpdateWithWhereUniqueWithoutGenresInput[]>;
  updateMany?: InputMaybe<MovieUpdateManyWithWhereWithoutGenresInput[]>;
  upsert?: InputMaybe<MovieUpsertWithWhereUniqueWithoutGenresInput[]>;
};

export type MovieUpdateManyWithoutPlatformsInput = {
  connect?: InputMaybe<MovieWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutPlatformsInput[]>;
  create?: InputMaybe<MovieCreateWithoutPlatformsInput[]>;
  delete?: InputMaybe<MovieWhereUniqueInput[]>;
  deleteMany?: InputMaybe<MovieScalarWhereInput[]>;
  disconnect?: InputMaybe<MovieWhereUniqueInput[]>;
  set?: InputMaybe<MovieWhereUniqueInput[]>;
  update?: InputMaybe<MovieUpdateWithWhereUniqueWithoutPlatformsInput[]>;
  updateMany?: InputMaybe<MovieUpdateManyWithWhereWithoutPlatformsInput[]>;
  upsert?: InputMaybe<MovieUpsertWithWhereUniqueWithoutPlatformsInput[]>;
};

export type MovieUpdateManyWithoutRatingInput = {
  connect?: InputMaybe<MovieWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutRatingInput[]>;
  create?: InputMaybe<MovieCreateWithoutRatingInput[]>;
  delete?: InputMaybe<MovieWhereUniqueInput[]>;
  deleteMany?: InputMaybe<MovieScalarWhereInput[]>;
  disconnect?: InputMaybe<MovieWhereUniqueInput[]>;
  set?: InputMaybe<MovieWhereUniqueInput[]>;
  update?: InputMaybe<MovieUpdateWithWhereUniqueWithoutRatingInput[]>;
  updateMany?: InputMaybe<MovieUpdateManyWithWhereWithoutRatingInput[]>;
  upsert?: InputMaybe<MovieUpsertWithWhereUniqueWithoutRatingInput[]>;
};

export type MovieUpdateManyWithoutWatchlistInput = {
  connect?: InputMaybe<MovieWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutWatchlistInput[]>;
  create?: InputMaybe<MovieCreateWithoutWatchlistInput[]>;
  delete?: InputMaybe<MovieWhereUniqueInput[]>;
  deleteMany?: InputMaybe<MovieScalarWhereInput[]>;
  disconnect?: InputMaybe<MovieWhereUniqueInput[]>;
  set?: InputMaybe<MovieWhereUniqueInput[]>;
  update?: InputMaybe<MovieUpdateWithWhereUniqueWithoutWatchlistInput[]>;
  updateMany?: InputMaybe<MovieUpdateManyWithWhereWithoutWatchlistInput[]>;
  upsert?: InputMaybe<MovieUpsertWithWhereUniqueWithoutWatchlistInput[]>;
};

export type MovieUpdateOneRequiredWithoutActorsInput = {
  connect?: InputMaybe<MovieWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutActorsInput>;
  create?: InputMaybe<MovieCreateWithoutActorsInput>;
  update?: InputMaybe<MovieUpdateWithoutActorsInput>;
  upsert?: InputMaybe<MovieUpsertWithoutActorsInput>;
};

export type MovieUpdateOneRequiredWithoutSoundtrackInput = {
  connect?: InputMaybe<MovieWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutSoundtrackInput>;
  create?: InputMaybe<MovieCreateWithoutSoundtrackInput>;
  update?: InputMaybe<MovieUpdateWithoutSoundtrackInput>;
  upsert?: InputMaybe<MovieUpsertWithoutSoundtrackInput>;
};

export type MovieUpdateOneWithoutFavouritesInput = {
  connect?: InputMaybe<MovieWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutFavouritesInput>;
  create?: InputMaybe<MovieCreateWithoutFavouritesInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<MovieUpdateWithoutFavouritesInput>;
  upsert?: InputMaybe<MovieUpsertWithoutFavouritesInput>;
};

export type MovieUpdateOneWithoutReviewsInput = {
  connect?: InputMaybe<MovieWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutReviewsInput>;
  create?: InputMaybe<MovieCreateWithoutReviewsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<MovieUpdateWithoutReviewsInput>;
  upsert?: InputMaybe<MovieUpsertWithoutReviewsInput>;
};

export type MovieUpdateWithWhereUniqueWithoutGenresInput = {
  data: MovieUpdateWithoutGenresInput;
  where: MovieWhereUniqueInput;
};

export type MovieUpdateWithWhereUniqueWithoutPlatformsInput = {
  data: MovieUpdateWithoutPlatformsInput;
  where: MovieWhereUniqueInput;
};

export type MovieUpdateWithWhereUniqueWithoutRatingInput = {
  data: MovieUpdateWithoutRatingInput;
  where: MovieWhereUniqueInput;
};

export type MovieUpdateWithWhereUniqueWithoutWatchlistInput = {
  data: MovieUpdateWithoutWatchlistInput;
  where: MovieWhereUniqueInput;
};

export type MovieUpdateWithoutActorsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  favourites?: InputMaybe<FavouriteUpdateManyWithoutMovieInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutMoviesInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  overview?: InputMaybe<StringFieldUpdateOperationsInput>;
  platforms?: InputMaybe<PlatformUpdateManyWithoutMoviesInput>;
  rating?: InputMaybe<RatingUpdateManyWithoutMoviesInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  revenue?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutMovieInput>;
  runtime?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  soundtrack?: InputMaybe<SongInMovieUpdateManyWithoutMovieInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
  thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  trailer?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<WatchlistUpdateManyWithoutMoviesInput>;
};

export type MovieUpdateWithoutFavouritesInput = {
  actors?: InputMaybe<ActorInMovieUpdateManyWithoutMovieInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutMoviesInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  overview?: InputMaybe<StringFieldUpdateOperationsInput>;
  platforms?: InputMaybe<PlatformUpdateManyWithoutMoviesInput>;
  rating?: InputMaybe<RatingUpdateManyWithoutMoviesInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  revenue?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutMovieInput>;
  runtime?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  soundtrack?: InputMaybe<SongInMovieUpdateManyWithoutMovieInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
  thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  trailer?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<WatchlistUpdateManyWithoutMoviesInput>;
};

export type MovieUpdateWithoutGenresInput = {
  actors?: InputMaybe<ActorInMovieUpdateManyWithoutMovieInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  favourites?: InputMaybe<FavouriteUpdateManyWithoutMovieInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  overview?: InputMaybe<StringFieldUpdateOperationsInput>;
  platforms?: InputMaybe<PlatformUpdateManyWithoutMoviesInput>;
  rating?: InputMaybe<RatingUpdateManyWithoutMoviesInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  revenue?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutMovieInput>;
  runtime?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  soundtrack?: InputMaybe<SongInMovieUpdateManyWithoutMovieInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
  thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  trailer?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<WatchlistUpdateManyWithoutMoviesInput>;
};

export type MovieUpdateWithoutPlatformsInput = {
  actors?: InputMaybe<ActorInMovieUpdateManyWithoutMovieInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  favourites?: InputMaybe<FavouriteUpdateManyWithoutMovieInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutMoviesInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  overview?: InputMaybe<StringFieldUpdateOperationsInput>;
  rating?: InputMaybe<RatingUpdateManyWithoutMoviesInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  revenue?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutMovieInput>;
  runtime?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  soundtrack?: InputMaybe<SongInMovieUpdateManyWithoutMovieInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
  thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  trailer?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<WatchlistUpdateManyWithoutMoviesInput>;
};

export type MovieUpdateWithoutRatingInput = {
  actors?: InputMaybe<ActorInMovieUpdateManyWithoutMovieInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  favourites?: InputMaybe<FavouriteUpdateManyWithoutMovieInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutMoviesInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  overview?: InputMaybe<StringFieldUpdateOperationsInput>;
  platforms?: InputMaybe<PlatformUpdateManyWithoutMoviesInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  revenue?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutMovieInput>;
  runtime?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  soundtrack?: InputMaybe<SongInMovieUpdateManyWithoutMovieInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
  thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  trailer?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<WatchlistUpdateManyWithoutMoviesInput>;
};

export type MovieUpdateWithoutReviewsInput = {
  actors?: InputMaybe<ActorInMovieUpdateManyWithoutMovieInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  favourites?: InputMaybe<FavouriteUpdateManyWithoutMovieInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutMoviesInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  overview?: InputMaybe<StringFieldUpdateOperationsInput>;
  platforms?: InputMaybe<PlatformUpdateManyWithoutMoviesInput>;
  rating?: InputMaybe<RatingUpdateManyWithoutMoviesInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  revenue?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  runtime?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  soundtrack?: InputMaybe<SongInMovieUpdateManyWithoutMovieInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
  thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  trailer?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<WatchlistUpdateManyWithoutMoviesInput>;
};

export type MovieUpdateWithoutSoundtrackInput = {
  actors?: InputMaybe<ActorInMovieUpdateManyWithoutMovieInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  favourites?: InputMaybe<FavouriteUpdateManyWithoutMovieInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutMoviesInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  overview?: InputMaybe<StringFieldUpdateOperationsInput>;
  platforms?: InputMaybe<PlatformUpdateManyWithoutMoviesInput>;
  rating?: InputMaybe<RatingUpdateManyWithoutMoviesInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  revenue?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutMovieInput>;
  runtime?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
  thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  trailer?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<WatchlistUpdateManyWithoutMoviesInput>;
};

export type MovieUpdateWithoutWatchlistInput = {
  actors?: InputMaybe<ActorInMovieUpdateManyWithoutMovieInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  favourites?: InputMaybe<FavouriteUpdateManyWithoutMovieInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutMoviesInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  overview?: InputMaybe<StringFieldUpdateOperationsInput>;
  platforms?: InputMaybe<PlatformUpdateManyWithoutMoviesInput>;
  rating?: InputMaybe<RatingUpdateManyWithoutMoviesInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  revenue?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutMovieInput>;
  runtime?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  soundtrack?: InputMaybe<SongInMovieUpdateManyWithoutMovieInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
  thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  trailer?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieUpsertWithWhereUniqueWithoutGenresInput = {
  create: MovieCreateWithoutGenresInput;
  update: MovieUpdateWithoutGenresInput;
  where: MovieWhereUniqueInput;
};

export type MovieUpsertWithWhereUniqueWithoutPlatformsInput = {
  create: MovieCreateWithoutPlatformsInput;
  update: MovieUpdateWithoutPlatformsInput;
  where: MovieWhereUniqueInput;
};

export type MovieUpsertWithWhereUniqueWithoutRatingInput = {
  create: MovieCreateWithoutRatingInput;
  update: MovieUpdateWithoutRatingInput;
  where: MovieWhereUniqueInput;
};

export type MovieUpsertWithWhereUniqueWithoutWatchlistInput = {
  create: MovieCreateWithoutWatchlistInput;
  update: MovieUpdateWithoutWatchlistInput;
  where: MovieWhereUniqueInput;
};

export type MovieUpsertWithoutActorsInput = {
  create: MovieCreateWithoutActorsInput;
  update: MovieUpdateWithoutActorsInput;
};

export type MovieUpsertWithoutFavouritesInput = {
  create: MovieCreateWithoutFavouritesInput;
  update: MovieUpdateWithoutFavouritesInput;
};

export type MovieUpsertWithoutReviewsInput = {
  create: MovieCreateWithoutReviewsInput;
  update: MovieUpdateWithoutReviewsInput;
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
  favourites?: InputMaybe<FavouriteListRelationFilter>;
  genres?: InputMaybe<GenreListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  locked?: InputMaybe<BoolFilter>;
  overview?: InputMaybe<StringFilter>;
  platforms?: InputMaybe<PlatformListRelationFilter>;
  rating?: InputMaybe<RatingListRelationFilter>;
  released?: InputMaybe<DateTimeNullableFilter>;
  revenue?: InputMaybe<IntNullableFilter>;
  reviews?: InputMaybe<ReviewListRelationFilter>;
  runtime?: InputMaybe<FloatNullableFilter>;
  soundtrack?: InputMaybe<SongInMovieListRelationFilter>;
  status?: InputMaybe<StringFilter>;
  thumbnail?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  trailer?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  watchlist?: InputMaybe<WatchlistListRelationFilter>;
};

export type MovieWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addActorToMovie?: Maybe<Scalars['Boolean']>;
  addArtist?: Maybe<Song>;
  addFavourite: Favourite;
  addGenre: Genre;
  addPlatformToMovie: Scalars['Boolean'];
  addRating: Rating;
  addReview: Review;
  addSongToMovie: SongInMovie;
  addSongToShow: SongInShow;
  addToWatchlist?: Maybe<Watchlist>;
  changePassword: User;
  confirm: Scalars['Boolean'];
  createBook?: Maybe<Book>;
  createMovie: Movie;
  createPerson: Person;
  createPlatform: Platform;
  createSong?: Maybe<Song>;
  createVote: Vote;
  deleteBook?: Maybe<Book>;
  deleteMovie?: Maybe<Movie>;
  deletePerson?: Maybe<Person>;
  deleteSong?: Maybe<Song>;
  deleteSongFromMovie?: Maybe<SongInMovie>;
  deleteSongFromShow?: Maybe<SongInShow>;
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
  removeActorFromMovie: Scalars['Boolean'];
  removeArtist?: Maybe<Song>;
  removeFavourite?: Maybe<Favourite>;
  removeFromWatchlist?: Maybe<Watchlist>;
  removeGenre?: Maybe<Genre>;
  removePlatformToMovie: Scalars['Boolean'];
  removeRating?: Maybe<Genre>;
  removeReview?: Maybe<Review>;
  removeSongFromMovie: Scalars['Boolean'];
  unfollow: Scalars['Boolean'];
  unvote?: Maybe<Vote>;
  uploadAvatar: Scalars['Boolean'];
  uploadThumbnail: Scalars['Boolean'];
};

export type MutationAddActorToMovieArgs = {
  movieId: Scalars['Int'];
  personId: Scalars['Int'];
  role: Scalars['String'];
};

export type MutationAddArtistArgs = {
  personId: Scalars['Int'];
  songId: Scalars['Int'];
};

export type MutationAddFavouriteArgs = {
  data: FavouriteCreateInput;
};

export type MutationAddGenreArgs = {
  data: GenreCreateInput;
};

export type MutationAddPlatformToMovieArgs = {
  movieId: Scalars['Int'];
  platformId: Scalars['Int'];
};

export type MutationAddRatingArgs = {
  data: RatingCreateInput;
};

export type MutationAddReviewArgs = {
  data: ReviewCreateInput;
};

export type MutationAddSongToMovieArgs = {
  data: SongInMovieCreateInput;
};

export type MutationAddSongToShowArgs = {
  data: SongInShowCreateInput;
};

export type MutationAddToWatchlistArgs = {
  data: WatchlistUpdateInput;
  where: WatchlistWhereUniqueInput;
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

export type MutationCreatePlatformArgs = {
  data: PlatformCreateInput;
};

export type MutationCreateSongArgs = {
  data: SongCreateInput;
};

export type MutationCreateVoteArgs = {
  data: VoteCreateInput;
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

export type MutationDeleteSongFromMovieArgs = {
  where: SongInMovieWhereUniqueInput;
};

export type MutationDeleteSongFromShowArgs = {
  where: SongInShowWhereUniqueInput;
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

export type MutationRemoveActorFromMovieArgs = {
  movieId: Scalars['Int'];
  personId: Scalars['Int'];
};

export type MutationRemoveArtistArgs = {
  personId: Scalars['Int'];
  songId: Scalars['Int'];
};

export type MutationRemoveFavouriteArgs = {
  where: FavouriteWhereUniqueInput;
};

export type MutationRemoveFromWatchlistArgs = {
  data: WatchlistUpdateInput;
  where: WatchlistWhereUniqueInput;
};

export type MutationRemoveGenreArgs = {
  where: GenreWhereUniqueInput;
};

export type MutationRemovePlatformToMovieArgs = {
  movieId: Scalars['Int'];
  platformId: Scalars['Int'];
};

export type MutationRemoveRatingArgs = {
  where: RatingWhereUniqueInput;
};

export type MutationRemoveReviewArgs = {
  where: ReviewWhereUniqueInput;
};

export type MutationRemoveSongFromMovieArgs = {
  where: SongInMovieWhereUniqueInput;
};

export type MutationUnfollowArgs = {
  userId: Scalars['Int'];
};

export type MutationUnvoteArgs = {
  where: VoteWhereUniqueInput;
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

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
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

export type NotificationCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  message: Scalars['String'];
  read?: InputMaybe<Scalars['Boolean']>;
};

export type NotificationCreateManyUserInputEnvelope = {
  data: NotificationCreateManyUserInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type NotificationCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<NotificationWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<NotificationCreateOrConnectWithoutUserInput[]>;
  create?: InputMaybe<NotificationCreateWithoutUserInput[]>;
  createMany?: InputMaybe<NotificationCreateManyUserInputEnvelope>;
};

export type NotificationCreateOrConnectWithoutUserInput = {
  create: NotificationCreateWithoutUserInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  message: Scalars['String'];
  read?: InputMaybe<Scalars['Boolean']>;
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

export type NotificationScalarWhereInput = {
  AND?: InputMaybe<NotificationScalarWhereInput[]>;
  NOT?: InputMaybe<NotificationScalarWhereInput[]>;
  OR?: InputMaybe<NotificationScalarWhereInput[]>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  message?: InputMaybe<StringFilter>;
  read?: InputMaybe<BoolFilter>;
  userId?: InputMaybe<IntNullableFilter>;
};

export type NotificationUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  read?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type NotificationUpdateManyWithWhereWithoutUserInput = {
  data: NotificationUpdateManyMutationInput;
  where: NotificationScalarWhereInput;
};

export type NotificationUpdateManyWithoutUserInput = {
  connect?: InputMaybe<NotificationWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<NotificationCreateOrConnectWithoutUserInput[]>;
  create?: InputMaybe<NotificationCreateWithoutUserInput[]>;
  createMany?: InputMaybe<NotificationCreateManyUserInputEnvelope>;
  delete?: InputMaybe<NotificationWhereUniqueInput[]>;
  deleteMany?: InputMaybe<NotificationScalarWhereInput[]>;
  disconnect?: InputMaybe<NotificationWhereUniqueInput[]>;
  set?: InputMaybe<NotificationWhereUniqueInput[]>;
  update?: InputMaybe<NotificationUpdateWithWhereUniqueWithoutUserInput[]>;
  updateMany?: InputMaybe<NotificationUpdateManyWithWhereWithoutUserInput[]>;
  upsert?: InputMaybe<NotificationUpsertWithWhereUniqueWithoutUserInput[]>;
};

export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
  data: NotificationUpdateWithoutUserInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  read?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
  create: NotificationCreateWithoutUserInput;
  update: NotificationUpdateWithoutUserInput;
  where: NotificationWhereUniqueInput;
};

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

export type NullableFloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']>;
  divide?: InputMaybe<Scalars['Float']>;
  increment?: InputMaybe<Scalars['Float']>;
  multiply?: InputMaybe<Scalars['Float']>;
  set?: InputMaybe<Scalars['Float']>;
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
  favourites: Favourite[];
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

export type PersonFavouritesArgs = {
  cursor?: InputMaybe<FavouriteWhereUniqueInput>;
  distinct?: InputMaybe<FavouriteScalarFieldEnum[]>;
  orderBy?: InputMaybe<FavouriteOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FavouriteWhereInput>;
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
  favourites: Scalars['Int'];
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
  favourites?: InputMaybe<FavouriteCreateNestedManyWithoutPersonInput>;
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

export type PersonCreateNestedOneWithoutFavouritesInput = {
  connect?: InputMaybe<PersonWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PersonCreateOrConnectWithoutFavouritesInput>;
  create?: InputMaybe<PersonCreateWithoutFavouritesInput>;
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

export type PersonCreateOrConnectWithoutFavouritesInput = {
  create: PersonCreateWithoutFavouritesInput;
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
  favourites?: InputMaybe<FavouriteCreateNestedManyWithoutPersonInput>;
  movies?: InputMaybe<ActorInMovieCreateNestedManyWithoutPersonInput>;
  name: Scalars['String'];
  shows?: InputMaybe<ActorInShowCreateNestedManyWithoutPersonInput>;
  songs?: InputMaybe<SongCreateNestedManyWithoutArtistsInput>;
  thumbnail?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PersonCreateWithoutFavouritesInput = {
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

export type PersonCreateWithoutMoviesInput = {
  age?: InputMaybe<Scalars['Int']>;
  bio?: InputMaybe<Scalars['String']>;
  books?: InputMaybe<BookCreateNestedManyWithoutAuthorsInput>;
  career?: InputMaybe<PersonCreatecareerInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  favourites?: InputMaybe<FavouriteCreateNestedManyWithoutPersonInput>;
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
  favourites?: InputMaybe<FavouriteCreateNestedManyWithoutPersonInput>;
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
  favourites?: InputMaybe<FavouriteCreateNestedManyWithoutPersonInput>;
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
  favourites?: InputMaybe<FavouriteOrderByRelationAggregateInput>;
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
  favourites?: InputMaybe<FavouriteUpdateManyWithoutPersonInput>;
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

export type PersonUpdateOneWithoutFavouritesInput = {
  connect?: InputMaybe<PersonWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PersonCreateOrConnectWithoutFavouritesInput>;
  create?: InputMaybe<PersonCreateWithoutFavouritesInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<PersonUpdateWithoutFavouritesInput>;
  upsert?: InputMaybe<PersonUpsertWithoutFavouritesInput>;
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
  favourites?: InputMaybe<FavouriteUpdateManyWithoutPersonInput>;
  movies?: InputMaybe<ActorInMovieUpdateManyWithoutPersonInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  shows?: InputMaybe<ActorInShowUpdateManyWithoutPersonInput>;
  songs?: InputMaybe<SongUpdateManyWithoutArtistsInput>;
  thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PersonUpdateWithoutFavouritesInput = {
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

export type PersonUpdateWithoutMoviesInput = {
  age?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  books?: InputMaybe<BookUpdateManyWithoutAuthorsInput>;
  career?: InputMaybe<PersonUpdatecareerInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  favourites?: InputMaybe<FavouriteUpdateManyWithoutPersonInput>;
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
  favourites?: InputMaybe<FavouriteUpdateManyWithoutPersonInput>;
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
  favourites?: InputMaybe<FavouriteUpdateManyWithoutPersonInput>;
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

export type PersonUpsertWithoutFavouritesInput = {
  create: PersonCreateWithoutFavouritesInput;
  update: PersonUpdateWithoutFavouritesInput;
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
  favourites?: InputMaybe<FavouriteListRelationFilter>;
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
  _count?: Maybe<PlatformCount>;
  apiKey: Scalars['String'];
  id: Scalars['Int'];
  movies: Movie[];
  name: Scalars['String'];
  shows: Show[];
};

export type PlatformMoviesArgs = {
  cursor?: InputMaybe<MovieWhereUniqueInput>;
  distinct?: InputMaybe<MovieScalarFieldEnum[]>;
  orderBy?: InputMaybe<MovieOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieWhereInput>;
};

export type PlatformShowsArgs = {
  cursor?: InputMaybe<ShowWhereUniqueInput>;
  distinct?: InputMaybe<ShowScalarFieldEnum[]>;
  orderBy?: InputMaybe<ShowOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ShowWhereInput>;
};

export type PlatformCount = {
  __typename?: 'PlatformCount';
  movies: Scalars['Int'];
  shows: Scalars['Int'];
};

export type PlatformCreateInput = {
  apiKey: Scalars['String'];
  movies?: InputMaybe<MovieCreateNestedManyWithoutPlatformsInput>;
  name: Scalars['String'];
  shows?: InputMaybe<ShowCreateNestedManyWithoutPlatformsInput>;
};

export type PlatformCreateNestedManyWithoutMoviesInput = {
  connect?: InputMaybe<PlatformWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<PlatformCreateOrConnectWithoutMoviesInput[]>;
  create?: InputMaybe<PlatformCreateWithoutMoviesInput[]>;
};

export type PlatformCreateNestedManyWithoutShowsInput = {
  connect?: InputMaybe<PlatformWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<PlatformCreateOrConnectWithoutShowsInput[]>;
  create?: InputMaybe<PlatformCreateWithoutShowsInput[]>;
};

export type PlatformCreateOrConnectWithoutMoviesInput = {
  create: PlatformCreateWithoutMoviesInput;
  where: PlatformWhereUniqueInput;
};

export type PlatformCreateOrConnectWithoutShowsInput = {
  create: PlatformCreateWithoutShowsInput;
  where: PlatformWhereUniqueInput;
};

export type PlatformCreateWithoutMoviesInput = {
  apiKey: Scalars['String'];
  name: Scalars['String'];
  shows?: InputMaybe<ShowCreateNestedManyWithoutPlatformsInput>;
};

export type PlatformCreateWithoutShowsInput = {
  apiKey: Scalars['String'];
  movies?: InputMaybe<MovieCreateNestedManyWithoutPlatformsInput>;
  name: Scalars['String'];
};

export type PlatformListRelationFilter = {
  every?: InputMaybe<PlatformWhereInput>;
  none?: InputMaybe<PlatformWhereInput>;
  some?: InputMaybe<PlatformWhereInput>;
};

export type PlatformOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PlatformOrderByWithRelationInput = {
  apiKey?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  movies?: InputMaybe<MovieOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  shows?: InputMaybe<ShowOrderByRelationAggregateInput>;
};

export enum PlatformScalarFieldEnum {
  ApiKey = 'apiKey',
  Id = 'id',
  Name = 'name'
}

export type PlatformScalarWhereInput = {
  AND?: InputMaybe<PlatformScalarWhereInput[]>;
  NOT?: InputMaybe<PlatformScalarWhereInput[]>;
  OR?: InputMaybe<PlatformScalarWhereInput[]>;
  apiKey?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
};

export type PlatformUpdateManyMutationInput = {
  apiKey?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PlatformUpdateManyWithWhereWithoutMoviesInput = {
  data: PlatformUpdateManyMutationInput;
  where: PlatformScalarWhereInput;
};

export type PlatformUpdateManyWithWhereWithoutShowsInput = {
  data: PlatformUpdateManyMutationInput;
  where: PlatformScalarWhereInput;
};

export type PlatformUpdateManyWithoutMoviesInput = {
  connect?: InputMaybe<PlatformWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<PlatformCreateOrConnectWithoutMoviesInput[]>;
  create?: InputMaybe<PlatformCreateWithoutMoviesInput[]>;
  delete?: InputMaybe<PlatformWhereUniqueInput[]>;
  deleteMany?: InputMaybe<PlatformScalarWhereInput[]>;
  disconnect?: InputMaybe<PlatformWhereUniqueInput[]>;
  set?: InputMaybe<PlatformWhereUniqueInput[]>;
  update?: InputMaybe<PlatformUpdateWithWhereUniqueWithoutMoviesInput[]>;
  updateMany?: InputMaybe<PlatformUpdateManyWithWhereWithoutMoviesInput[]>;
  upsert?: InputMaybe<PlatformUpsertWithWhereUniqueWithoutMoviesInput[]>;
};

export type PlatformUpdateManyWithoutShowsInput = {
  connect?: InputMaybe<PlatformWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<PlatformCreateOrConnectWithoutShowsInput[]>;
  create?: InputMaybe<PlatformCreateWithoutShowsInput[]>;
  delete?: InputMaybe<PlatformWhereUniqueInput[]>;
  deleteMany?: InputMaybe<PlatformScalarWhereInput[]>;
  disconnect?: InputMaybe<PlatformWhereUniqueInput[]>;
  set?: InputMaybe<PlatformWhereUniqueInput[]>;
  update?: InputMaybe<PlatformUpdateWithWhereUniqueWithoutShowsInput[]>;
  updateMany?: InputMaybe<PlatformUpdateManyWithWhereWithoutShowsInput[]>;
  upsert?: InputMaybe<PlatformUpsertWithWhereUniqueWithoutShowsInput[]>;
};

export type PlatformUpdateWithWhereUniqueWithoutMoviesInput = {
  data: PlatformUpdateWithoutMoviesInput;
  where: PlatformWhereUniqueInput;
};

export type PlatformUpdateWithWhereUniqueWithoutShowsInput = {
  data: PlatformUpdateWithoutShowsInput;
  where: PlatformWhereUniqueInput;
};

export type PlatformUpdateWithoutMoviesInput = {
  apiKey?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  shows?: InputMaybe<ShowUpdateManyWithoutPlatformsInput>;
};

export type PlatformUpdateWithoutShowsInput = {
  apiKey?: InputMaybe<StringFieldUpdateOperationsInput>;
  movies?: InputMaybe<MovieUpdateManyWithoutPlatformsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PlatformUpsertWithWhereUniqueWithoutMoviesInput = {
  create: PlatformCreateWithoutMoviesInput;
  update: PlatformUpdateWithoutMoviesInput;
  where: PlatformWhereUniqueInput;
};

export type PlatformUpsertWithWhereUniqueWithoutShowsInput = {
  create: PlatformCreateWithoutShowsInput;
  update: PlatformUpdateWithoutShowsInput;
  where: PlatformWhereUniqueInput;
};

export type PlatformWhereInput = {
  AND?: InputMaybe<PlatformWhereInput[]>;
  NOT?: InputMaybe<PlatformWhereInput[]>;
  OR?: InputMaybe<PlatformWhereInput[]>;
  apiKey?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  movies?: InputMaybe<MovieListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  shows?: InputMaybe<ShowListRelationFilter>;
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
  platform?: Maybe<Platform>;
  platforms: Platform[];
  song?: Maybe<Song>;
  songs?: Maybe<Song[]>;
  user?: Maybe<User>;
  users: User[];
  watchlist?: Maybe<Watchlist>;
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

export type QueryPlatformArgs = {
  where: PlatformWhereUniqueInput;
};

export type QueryPlatformsArgs = {
  where: PlatformWhereUniqueInput;
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

export type Rating = {
  __typename?: 'Rating';
  _count?: Maybe<RatingCount>;
  age: Scalars['String'];
  id: Scalars['Int'];
  movies: Movie[];
  shows: Show[];
};

export type RatingMoviesArgs = {
  cursor?: InputMaybe<MovieWhereUniqueInput>;
  distinct?: InputMaybe<MovieScalarFieldEnum[]>;
  orderBy?: InputMaybe<MovieOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieWhereInput>;
};

export type RatingShowsArgs = {
  cursor?: InputMaybe<ShowWhereUniqueInput>;
  distinct?: InputMaybe<ShowScalarFieldEnum[]>;
  orderBy?: InputMaybe<ShowOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ShowWhereInput>;
};

export type RatingCount = {
  __typename?: 'RatingCount';
  movies: Scalars['Int'];
  shows: Scalars['Int'];
};

export type RatingCreateInput = {
  age: Scalars['String'];
  movies?: InputMaybe<MovieCreateNestedManyWithoutRatingInput>;
  shows?: InputMaybe<ShowCreateNestedManyWithoutRatingInput>;
};

export type RatingCreateNestedManyWithoutMoviesInput = {
  connect?: InputMaybe<RatingWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<RatingCreateOrConnectWithoutMoviesInput[]>;
  create?: InputMaybe<RatingCreateWithoutMoviesInput[]>;
};

export type RatingCreateNestedManyWithoutShowsInput = {
  connect?: InputMaybe<RatingWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<RatingCreateOrConnectWithoutShowsInput[]>;
  create?: InputMaybe<RatingCreateWithoutShowsInput[]>;
};

export type RatingCreateOrConnectWithoutMoviesInput = {
  create: RatingCreateWithoutMoviesInput;
  where: RatingWhereUniqueInput;
};

export type RatingCreateOrConnectWithoutShowsInput = {
  create: RatingCreateWithoutShowsInput;
  where: RatingWhereUniqueInput;
};

export type RatingCreateWithoutMoviesInput = {
  age: Scalars['String'];
  shows?: InputMaybe<ShowCreateNestedManyWithoutRatingInput>;
};

export type RatingCreateWithoutShowsInput = {
  age: Scalars['String'];
  movies?: InputMaybe<MovieCreateNestedManyWithoutRatingInput>;
};

export type RatingListRelationFilter = {
  every?: InputMaybe<RatingWhereInput>;
  none?: InputMaybe<RatingWhereInput>;
  some?: InputMaybe<RatingWhereInput>;
};

export type RatingOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type RatingOrderByWithRelationInput = {
  age?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  movies?: InputMaybe<MovieOrderByRelationAggregateInput>;
  shows?: InputMaybe<ShowOrderByRelationAggregateInput>;
};

export enum RatingScalarFieldEnum {
  Age = 'age',
  Id = 'id'
}

export type RatingScalarWhereInput = {
  AND?: InputMaybe<RatingScalarWhereInput[]>;
  NOT?: InputMaybe<RatingScalarWhereInput[]>;
  OR?: InputMaybe<RatingScalarWhereInput[]>;
  age?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
};

export type RatingUpdateManyMutationInput = {
  age?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type RatingUpdateManyWithWhereWithoutMoviesInput = {
  data: RatingUpdateManyMutationInput;
  where: RatingScalarWhereInput;
};

export type RatingUpdateManyWithWhereWithoutShowsInput = {
  data: RatingUpdateManyMutationInput;
  where: RatingScalarWhereInput;
};

export type RatingUpdateManyWithoutMoviesInput = {
  connect?: InputMaybe<RatingWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<RatingCreateOrConnectWithoutMoviesInput[]>;
  create?: InputMaybe<RatingCreateWithoutMoviesInput[]>;
  delete?: InputMaybe<RatingWhereUniqueInput[]>;
  deleteMany?: InputMaybe<RatingScalarWhereInput[]>;
  disconnect?: InputMaybe<RatingWhereUniqueInput[]>;
  set?: InputMaybe<RatingWhereUniqueInput[]>;
  update?: InputMaybe<RatingUpdateWithWhereUniqueWithoutMoviesInput[]>;
  updateMany?: InputMaybe<RatingUpdateManyWithWhereWithoutMoviesInput[]>;
  upsert?: InputMaybe<RatingUpsertWithWhereUniqueWithoutMoviesInput[]>;
};

export type RatingUpdateManyWithoutShowsInput = {
  connect?: InputMaybe<RatingWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<RatingCreateOrConnectWithoutShowsInput[]>;
  create?: InputMaybe<RatingCreateWithoutShowsInput[]>;
  delete?: InputMaybe<RatingWhereUniqueInput[]>;
  deleteMany?: InputMaybe<RatingScalarWhereInput[]>;
  disconnect?: InputMaybe<RatingWhereUniqueInput[]>;
  set?: InputMaybe<RatingWhereUniqueInput[]>;
  update?: InputMaybe<RatingUpdateWithWhereUniqueWithoutShowsInput[]>;
  updateMany?: InputMaybe<RatingUpdateManyWithWhereWithoutShowsInput[]>;
  upsert?: InputMaybe<RatingUpsertWithWhereUniqueWithoutShowsInput[]>;
};

export type RatingUpdateWithWhereUniqueWithoutMoviesInput = {
  data: RatingUpdateWithoutMoviesInput;
  where: RatingWhereUniqueInput;
};

export type RatingUpdateWithWhereUniqueWithoutShowsInput = {
  data: RatingUpdateWithoutShowsInput;
  where: RatingWhereUniqueInput;
};

export type RatingUpdateWithoutMoviesInput = {
  age?: InputMaybe<StringFieldUpdateOperationsInput>;
  shows?: InputMaybe<ShowUpdateManyWithoutRatingInput>;
};

export type RatingUpdateWithoutShowsInput = {
  age?: InputMaybe<StringFieldUpdateOperationsInput>;
  movies?: InputMaybe<MovieUpdateManyWithoutRatingInput>;
};

export type RatingUpsertWithWhereUniqueWithoutMoviesInput = {
  create: RatingCreateWithoutMoviesInput;
  update: RatingUpdateWithoutMoviesInput;
  where: RatingWhereUniqueInput;
};

export type RatingUpsertWithWhereUniqueWithoutShowsInput = {
  create: RatingCreateWithoutShowsInput;
  update: RatingUpdateWithoutShowsInput;
  where: RatingWhereUniqueInput;
};

export type RatingWhereInput = {
  AND?: InputMaybe<RatingWhereInput[]>;
  NOT?: InputMaybe<RatingWhereInput[]>;
  OR?: InputMaybe<RatingWhereInput[]>;
  age?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  movies?: InputMaybe<MovieListRelationFilter>;
  shows?: InputMaybe<ShowListRelationFilter>;
};

export type RatingWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type RegisterInput = {
  displayname: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Review = {
  __typename?: 'Review';
  Book?: Maybe<Book>;
  Movie?: Maybe<Movie>;
  Show?: Maybe<Show>;
  Song?: Maybe<Song>;
  User?: Maybe<User>;
  _count?: Maybe<ReviewCount>;
  bookId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  movieId?: Maybe<Scalars['Int']>;
  review: Scalars['String'];
  showId?: Maybe<Scalars['Int']>;
  songId?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  userId?: Maybe<Scalars['Int']>;
  vote: Vote[];
};

export type ReviewVoteArgs = {
  cursor?: InputMaybe<VoteWhereUniqueInput>;
  distinct?: InputMaybe<VoteScalarFieldEnum[]>;
  orderBy?: InputMaybe<VoteOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VoteWhereInput>;
};

export type ReviewCount = {
  __typename?: 'ReviewCount';
  vote: Scalars['Int'];
};

export type ReviewCreateInput = {
  Book?: InputMaybe<BookCreateNestedOneWithoutReviewsInput>;
  Movie?: InputMaybe<MovieCreateNestedOneWithoutReviewsInput>;
  Show?: InputMaybe<ShowCreateNestedOneWithoutReviewsInput>;
  Song?: InputMaybe<SongCreateNestedOneWithoutReviewsInput>;
  User?: InputMaybe<UserCreateNestedOneWithoutReviewsInput>;
  review: Scalars['String'];
  title: Scalars['String'];
  vote?: InputMaybe<VoteCreateNestedManyWithoutReviewInput>;
};

export type ReviewCreateManyBookInput = {
  id?: InputMaybe<Scalars['Int']>;
  movieId?: InputMaybe<Scalars['Int']>;
  review: Scalars['String'];
  showId?: InputMaybe<Scalars['Int']>;
  songId?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
  userId?: InputMaybe<Scalars['Int']>;
};

export type ReviewCreateManyBookInputEnvelope = {
  data: ReviewCreateManyBookInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ReviewCreateManyMovieInput = {
  bookId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  review: Scalars['String'];
  showId?: InputMaybe<Scalars['Int']>;
  songId?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
  userId?: InputMaybe<Scalars['Int']>;
};

export type ReviewCreateManyMovieInputEnvelope = {
  data: ReviewCreateManyMovieInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ReviewCreateManyShowInput = {
  bookId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  movieId?: InputMaybe<Scalars['Int']>;
  review: Scalars['String'];
  songId?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
  userId?: InputMaybe<Scalars['Int']>;
};

export type ReviewCreateManyShowInputEnvelope = {
  data: ReviewCreateManyShowInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ReviewCreateManySongInput = {
  bookId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  movieId?: InputMaybe<Scalars['Int']>;
  review: Scalars['String'];
  showId?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
  userId?: InputMaybe<Scalars['Int']>;
};

export type ReviewCreateManySongInputEnvelope = {
  data: ReviewCreateManySongInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ReviewCreateManyUserInput = {
  bookId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  movieId?: InputMaybe<Scalars['Int']>;
  review: Scalars['String'];
  showId?: InputMaybe<Scalars['Int']>;
  songId?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
};

export type ReviewCreateManyUserInputEnvelope = {
  data: ReviewCreateManyUserInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ReviewCreateNestedManyWithoutBookInput = {
  connect?: InputMaybe<ReviewWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<ReviewCreateOrConnectWithoutBookInput[]>;
  create?: InputMaybe<ReviewCreateWithoutBookInput[]>;
  createMany?: InputMaybe<ReviewCreateManyBookInputEnvelope>;
};

export type ReviewCreateNestedManyWithoutMovieInput = {
  connect?: InputMaybe<ReviewWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<ReviewCreateOrConnectWithoutMovieInput[]>;
  create?: InputMaybe<ReviewCreateWithoutMovieInput[]>;
  createMany?: InputMaybe<ReviewCreateManyMovieInputEnvelope>;
};

export type ReviewCreateNestedManyWithoutShowInput = {
  connect?: InputMaybe<ReviewWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<ReviewCreateOrConnectWithoutShowInput[]>;
  create?: InputMaybe<ReviewCreateWithoutShowInput[]>;
  createMany?: InputMaybe<ReviewCreateManyShowInputEnvelope>;
};

export type ReviewCreateNestedManyWithoutSongInput = {
  connect?: InputMaybe<ReviewWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<ReviewCreateOrConnectWithoutSongInput[]>;
  create?: InputMaybe<ReviewCreateWithoutSongInput[]>;
  createMany?: InputMaybe<ReviewCreateManySongInputEnvelope>;
};

export type ReviewCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<ReviewWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<ReviewCreateOrConnectWithoutUserInput[]>;
  create?: InputMaybe<ReviewCreateWithoutUserInput[]>;
  createMany?: InputMaybe<ReviewCreateManyUserInputEnvelope>;
};

export type ReviewCreateNestedOneWithoutVoteInput = {
  connect?: InputMaybe<ReviewWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ReviewCreateOrConnectWithoutVoteInput>;
  create?: InputMaybe<ReviewCreateWithoutVoteInput>;
};

export type ReviewCreateOrConnectWithoutBookInput = {
  create: ReviewCreateWithoutBookInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewCreateOrConnectWithoutMovieInput = {
  create: ReviewCreateWithoutMovieInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewCreateOrConnectWithoutShowInput = {
  create: ReviewCreateWithoutShowInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewCreateOrConnectWithoutSongInput = {
  create: ReviewCreateWithoutSongInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewCreateOrConnectWithoutUserInput = {
  create: ReviewCreateWithoutUserInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewCreateOrConnectWithoutVoteInput = {
  create: ReviewCreateWithoutVoteInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewCreateWithoutBookInput = {
  Movie?: InputMaybe<MovieCreateNestedOneWithoutReviewsInput>;
  Show?: InputMaybe<ShowCreateNestedOneWithoutReviewsInput>;
  Song?: InputMaybe<SongCreateNestedOneWithoutReviewsInput>;
  User?: InputMaybe<UserCreateNestedOneWithoutReviewsInput>;
  review: Scalars['String'];
  title: Scalars['String'];
  vote?: InputMaybe<VoteCreateNestedManyWithoutReviewInput>;
};

export type ReviewCreateWithoutMovieInput = {
  Book?: InputMaybe<BookCreateNestedOneWithoutReviewsInput>;
  Show?: InputMaybe<ShowCreateNestedOneWithoutReviewsInput>;
  Song?: InputMaybe<SongCreateNestedOneWithoutReviewsInput>;
  User?: InputMaybe<UserCreateNestedOneWithoutReviewsInput>;
  review: Scalars['String'];
  title: Scalars['String'];
  vote?: InputMaybe<VoteCreateNestedManyWithoutReviewInput>;
};

export type ReviewCreateWithoutShowInput = {
  Book?: InputMaybe<BookCreateNestedOneWithoutReviewsInput>;
  Movie?: InputMaybe<MovieCreateNestedOneWithoutReviewsInput>;
  Song?: InputMaybe<SongCreateNestedOneWithoutReviewsInput>;
  User?: InputMaybe<UserCreateNestedOneWithoutReviewsInput>;
  review: Scalars['String'];
  title: Scalars['String'];
  vote?: InputMaybe<VoteCreateNestedManyWithoutReviewInput>;
};

export type ReviewCreateWithoutSongInput = {
  Book?: InputMaybe<BookCreateNestedOneWithoutReviewsInput>;
  Movie?: InputMaybe<MovieCreateNestedOneWithoutReviewsInput>;
  Show?: InputMaybe<ShowCreateNestedOneWithoutReviewsInput>;
  User?: InputMaybe<UserCreateNestedOneWithoutReviewsInput>;
  review: Scalars['String'];
  title: Scalars['String'];
  vote?: InputMaybe<VoteCreateNestedManyWithoutReviewInput>;
};

export type ReviewCreateWithoutUserInput = {
  Book?: InputMaybe<BookCreateNestedOneWithoutReviewsInput>;
  Movie?: InputMaybe<MovieCreateNestedOneWithoutReviewsInput>;
  Show?: InputMaybe<ShowCreateNestedOneWithoutReviewsInput>;
  Song?: InputMaybe<SongCreateNestedOneWithoutReviewsInput>;
  review: Scalars['String'];
  title: Scalars['String'];
  vote?: InputMaybe<VoteCreateNestedManyWithoutReviewInput>;
};

export type ReviewCreateWithoutVoteInput = {
  Book?: InputMaybe<BookCreateNestedOneWithoutReviewsInput>;
  Movie?: InputMaybe<MovieCreateNestedOneWithoutReviewsInput>;
  Show?: InputMaybe<ShowCreateNestedOneWithoutReviewsInput>;
  Song?: InputMaybe<SongCreateNestedOneWithoutReviewsInput>;
  User?: InputMaybe<UserCreateNestedOneWithoutReviewsInput>;
  review: Scalars['String'];
  title: Scalars['String'];
};

export type ReviewListRelationFilter = {
  every?: InputMaybe<ReviewWhereInput>;
  none?: InputMaybe<ReviewWhereInput>;
  some?: InputMaybe<ReviewWhereInput>;
};

export type ReviewOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ReviewOrderByWithRelationInput = {
  Book?: InputMaybe<BookOrderByWithRelationInput>;
  Movie?: InputMaybe<MovieOrderByWithRelationInput>;
  Show?: InputMaybe<ShowOrderByWithRelationInput>;
  Song?: InputMaybe<SongOrderByWithRelationInput>;
  User?: InputMaybe<UserOrderByWithRelationInput>;
  bookId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  movieId?: InputMaybe<SortOrder>;
  review?: InputMaybe<SortOrder>;
  showId?: InputMaybe<SortOrder>;
  songId?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  vote?: InputMaybe<VoteOrderByRelationAggregateInput>;
};

export type ReviewRelationFilter = {
  is?: InputMaybe<ReviewWhereInput>;
  isNot?: InputMaybe<ReviewWhereInput>;
};

export enum ReviewScalarFieldEnum {
  BookId = 'bookId',
  Id = 'id',
  MovieId = 'movieId',
  Review = 'review',
  ShowId = 'showId',
  SongId = 'songId',
  Title = 'title',
  UserId = 'userId'
}

export type ReviewScalarWhereInput = {
  AND?: InputMaybe<ReviewScalarWhereInput[]>;
  NOT?: InputMaybe<ReviewScalarWhereInput[]>;
  OR?: InputMaybe<ReviewScalarWhereInput[]>;
  bookId?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  movieId?: InputMaybe<IntNullableFilter>;
  review?: InputMaybe<StringFilter>;
  showId?: InputMaybe<IntNullableFilter>;
  songId?: InputMaybe<IntNullableFilter>;
  title?: InputMaybe<StringFilter>;
  userId?: InputMaybe<IntNullableFilter>;
};

export type ReviewUpdateManyMutationInput = {
  review?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ReviewUpdateManyWithWhereWithoutBookInput = {
  data: ReviewUpdateManyMutationInput;
  where: ReviewScalarWhereInput;
};

export type ReviewUpdateManyWithWhereWithoutMovieInput = {
  data: ReviewUpdateManyMutationInput;
  where: ReviewScalarWhereInput;
};

export type ReviewUpdateManyWithWhereWithoutShowInput = {
  data: ReviewUpdateManyMutationInput;
  where: ReviewScalarWhereInput;
};

export type ReviewUpdateManyWithWhereWithoutSongInput = {
  data: ReviewUpdateManyMutationInput;
  where: ReviewScalarWhereInput;
};

export type ReviewUpdateManyWithWhereWithoutUserInput = {
  data: ReviewUpdateManyMutationInput;
  where: ReviewScalarWhereInput;
};

export type ReviewUpdateManyWithoutBookInput = {
  connect?: InputMaybe<ReviewWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<ReviewCreateOrConnectWithoutBookInput[]>;
  create?: InputMaybe<ReviewCreateWithoutBookInput[]>;
  createMany?: InputMaybe<ReviewCreateManyBookInputEnvelope>;
  delete?: InputMaybe<ReviewWhereUniqueInput[]>;
  deleteMany?: InputMaybe<ReviewScalarWhereInput[]>;
  disconnect?: InputMaybe<ReviewWhereUniqueInput[]>;
  set?: InputMaybe<ReviewWhereUniqueInput[]>;
  update?: InputMaybe<ReviewUpdateWithWhereUniqueWithoutBookInput[]>;
  updateMany?: InputMaybe<ReviewUpdateManyWithWhereWithoutBookInput[]>;
  upsert?: InputMaybe<ReviewUpsertWithWhereUniqueWithoutBookInput[]>;
};

export type ReviewUpdateManyWithoutMovieInput = {
  connect?: InputMaybe<ReviewWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<ReviewCreateOrConnectWithoutMovieInput[]>;
  create?: InputMaybe<ReviewCreateWithoutMovieInput[]>;
  createMany?: InputMaybe<ReviewCreateManyMovieInputEnvelope>;
  delete?: InputMaybe<ReviewWhereUniqueInput[]>;
  deleteMany?: InputMaybe<ReviewScalarWhereInput[]>;
  disconnect?: InputMaybe<ReviewWhereUniqueInput[]>;
  set?: InputMaybe<ReviewWhereUniqueInput[]>;
  update?: InputMaybe<ReviewUpdateWithWhereUniqueWithoutMovieInput[]>;
  updateMany?: InputMaybe<ReviewUpdateManyWithWhereWithoutMovieInput[]>;
  upsert?: InputMaybe<ReviewUpsertWithWhereUniqueWithoutMovieInput[]>;
};

export type ReviewUpdateManyWithoutShowInput = {
  connect?: InputMaybe<ReviewWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<ReviewCreateOrConnectWithoutShowInput[]>;
  create?: InputMaybe<ReviewCreateWithoutShowInput[]>;
  createMany?: InputMaybe<ReviewCreateManyShowInputEnvelope>;
  delete?: InputMaybe<ReviewWhereUniqueInput[]>;
  deleteMany?: InputMaybe<ReviewScalarWhereInput[]>;
  disconnect?: InputMaybe<ReviewWhereUniqueInput[]>;
  set?: InputMaybe<ReviewWhereUniqueInput[]>;
  update?: InputMaybe<ReviewUpdateWithWhereUniqueWithoutShowInput[]>;
  updateMany?: InputMaybe<ReviewUpdateManyWithWhereWithoutShowInput[]>;
  upsert?: InputMaybe<ReviewUpsertWithWhereUniqueWithoutShowInput[]>;
};

export type ReviewUpdateManyWithoutSongInput = {
  connect?: InputMaybe<ReviewWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<ReviewCreateOrConnectWithoutSongInput[]>;
  create?: InputMaybe<ReviewCreateWithoutSongInput[]>;
  createMany?: InputMaybe<ReviewCreateManySongInputEnvelope>;
  delete?: InputMaybe<ReviewWhereUniqueInput[]>;
  deleteMany?: InputMaybe<ReviewScalarWhereInput[]>;
  disconnect?: InputMaybe<ReviewWhereUniqueInput[]>;
  set?: InputMaybe<ReviewWhereUniqueInput[]>;
  update?: InputMaybe<ReviewUpdateWithWhereUniqueWithoutSongInput[]>;
  updateMany?: InputMaybe<ReviewUpdateManyWithWhereWithoutSongInput[]>;
  upsert?: InputMaybe<ReviewUpsertWithWhereUniqueWithoutSongInput[]>;
};

export type ReviewUpdateManyWithoutUserInput = {
  connect?: InputMaybe<ReviewWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<ReviewCreateOrConnectWithoutUserInput[]>;
  create?: InputMaybe<ReviewCreateWithoutUserInput[]>;
  createMany?: InputMaybe<ReviewCreateManyUserInputEnvelope>;
  delete?: InputMaybe<ReviewWhereUniqueInput[]>;
  deleteMany?: InputMaybe<ReviewScalarWhereInput[]>;
  disconnect?: InputMaybe<ReviewWhereUniqueInput[]>;
  set?: InputMaybe<ReviewWhereUniqueInput[]>;
  update?: InputMaybe<ReviewUpdateWithWhereUniqueWithoutUserInput[]>;
  updateMany?: InputMaybe<ReviewUpdateManyWithWhereWithoutUserInput[]>;
  upsert?: InputMaybe<ReviewUpsertWithWhereUniqueWithoutUserInput[]>;
};

export type ReviewUpdateOneRequiredWithoutVoteInput = {
  connect?: InputMaybe<ReviewWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ReviewCreateOrConnectWithoutVoteInput>;
  create?: InputMaybe<ReviewCreateWithoutVoteInput>;
  update?: InputMaybe<ReviewUpdateWithoutVoteInput>;
  upsert?: InputMaybe<ReviewUpsertWithoutVoteInput>;
};

export type ReviewUpdateWithWhereUniqueWithoutBookInput = {
  data: ReviewUpdateWithoutBookInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUpdateWithWhereUniqueWithoutMovieInput = {
  data: ReviewUpdateWithoutMovieInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUpdateWithWhereUniqueWithoutShowInput = {
  data: ReviewUpdateWithoutShowInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUpdateWithWhereUniqueWithoutSongInput = {
  data: ReviewUpdateWithoutSongInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
  data: ReviewUpdateWithoutUserInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUpdateWithoutBookInput = {
  Movie?: InputMaybe<MovieUpdateOneWithoutReviewsInput>;
  Show?: InputMaybe<ShowUpdateOneWithoutReviewsInput>;
  Song?: InputMaybe<SongUpdateOneWithoutReviewsInput>;
  User?: InputMaybe<UserUpdateOneWithoutReviewsInput>;
  review?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  vote?: InputMaybe<VoteUpdateManyWithoutReviewInput>;
};

export type ReviewUpdateWithoutMovieInput = {
  Book?: InputMaybe<BookUpdateOneWithoutReviewsInput>;
  Show?: InputMaybe<ShowUpdateOneWithoutReviewsInput>;
  Song?: InputMaybe<SongUpdateOneWithoutReviewsInput>;
  User?: InputMaybe<UserUpdateOneWithoutReviewsInput>;
  review?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  vote?: InputMaybe<VoteUpdateManyWithoutReviewInput>;
};

export type ReviewUpdateWithoutShowInput = {
  Book?: InputMaybe<BookUpdateOneWithoutReviewsInput>;
  Movie?: InputMaybe<MovieUpdateOneWithoutReviewsInput>;
  Song?: InputMaybe<SongUpdateOneWithoutReviewsInput>;
  User?: InputMaybe<UserUpdateOneWithoutReviewsInput>;
  review?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  vote?: InputMaybe<VoteUpdateManyWithoutReviewInput>;
};

export type ReviewUpdateWithoutSongInput = {
  Book?: InputMaybe<BookUpdateOneWithoutReviewsInput>;
  Movie?: InputMaybe<MovieUpdateOneWithoutReviewsInput>;
  Show?: InputMaybe<ShowUpdateOneWithoutReviewsInput>;
  User?: InputMaybe<UserUpdateOneWithoutReviewsInput>;
  review?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  vote?: InputMaybe<VoteUpdateManyWithoutReviewInput>;
};

export type ReviewUpdateWithoutUserInput = {
  Book?: InputMaybe<BookUpdateOneWithoutReviewsInput>;
  Movie?: InputMaybe<MovieUpdateOneWithoutReviewsInput>;
  Show?: InputMaybe<ShowUpdateOneWithoutReviewsInput>;
  Song?: InputMaybe<SongUpdateOneWithoutReviewsInput>;
  review?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  vote?: InputMaybe<VoteUpdateManyWithoutReviewInput>;
};

export type ReviewUpdateWithoutVoteInput = {
  Book?: InputMaybe<BookUpdateOneWithoutReviewsInput>;
  Movie?: InputMaybe<MovieUpdateOneWithoutReviewsInput>;
  Show?: InputMaybe<ShowUpdateOneWithoutReviewsInput>;
  Song?: InputMaybe<SongUpdateOneWithoutReviewsInput>;
  User?: InputMaybe<UserUpdateOneWithoutReviewsInput>;
  review?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ReviewUpsertWithWhereUniqueWithoutBookInput = {
  create: ReviewCreateWithoutBookInput;
  update: ReviewUpdateWithoutBookInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUpsertWithWhereUniqueWithoutMovieInput = {
  create: ReviewCreateWithoutMovieInput;
  update: ReviewUpdateWithoutMovieInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUpsertWithWhereUniqueWithoutShowInput = {
  create: ReviewCreateWithoutShowInput;
  update: ReviewUpdateWithoutShowInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUpsertWithWhereUniqueWithoutSongInput = {
  create: ReviewCreateWithoutSongInput;
  update: ReviewUpdateWithoutSongInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
  create: ReviewCreateWithoutUserInput;
  update: ReviewUpdateWithoutUserInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUpsertWithoutVoteInput = {
  create: ReviewCreateWithoutVoteInput;
  update: ReviewUpdateWithoutVoteInput;
};

export type ReviewWhereInput = {
  AND?: InputMaybe<ReviewWhereInput[]>;
  Book?: InputMaybe<BookRelationFilter>;
  Movie?: InputMaybe<MovieRelationFilter>;
  NOT?: InputMaybe<ReviewWhereInput[]>;
  OR?: InputMaybe<ReviewWhereInput[]>;
  Show?: InputMaybe<ShowRelationFilter>;
  Song?: InputMaybe<SongRelationFilter>;
  User?: InputMaybe<UserRelationFilter>;
  bookId?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  movieId?: InputMaybe<IntNullableFilter>;
  review?: InputMaybe<StringFilter>;
  showId?: InputMaybe<IntNullableFilter>;
  songId?: InputMaybe<IntNullableFilter>;
  title?: InputMaybe<StringFilter>;
  userId?: InputMaybe<IntNullableFilter>;
  vote?: InputMaybe<VoteListRelationFilter>;
};

export type ReviewWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
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
  favourite: Favourite[];
  genres: Genre[];
  id: Scalars['Int'];
  locked: Scalars['Boolean'];
  platforms: Platform[];
  rating: Rating[];
  released?: Maybe<Scalars['DateTime']>;
  reviews: Review[];
  soundtrack: SongInShow[];
  thumbnail: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  watchlist: Watchlist[];
};

export type ShowActorsArgs = {
  cursor?: InputMaybe<ActorInShowWhereUniqueInput>;
  distinct?: InputMaybe<ActorInShowScalarFieldEnum[]>;
  orderBy?: InputMaybe<ActorInShowOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ActorInShowWhereInput>;
};

export type ShowFavouriteArgs = {
  cursor?: InputMaybe<FavouriteWhereUniqueInput>;
  distinct?: InputMaybe<FavouriteScalarFieldEnum[]>;
  orderBy?: InputMaybe<FavouriteOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FavouriteWhereInput>;
};

export type ShowGenresArgs = {
  cursor?: InputMaybe<GenreWhereUniqueInput>;
  distinct?: InputMaybe<GenreScalarFieldEnum[]>;
  orderBy?: InputMaybe<GenreOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GenreWhereInput>;
};

export type ShowPlatformsArgs = {
  cursor?: InputMaybe<PlatformWhereUniqueInput>;
  distinct?: InputMaybe<PlatformScalarFieldEnum[]>;
  orderBy?: InputMaybe<PlatformOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlatformWhereInput>;
};

export type ShowRatingArgs = {
  cursor?: InputMaybe<RatingWhereUniqueInput>;
  distinct?: InputMaybe<RatingScalarFieldEnum[]>;
  orderBy?: InputMaybe<RatingOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RatingWhereInput>;
};

export type ShowReviewsArgs = {
  cursor?: InputMaybe<ReviewWhereUniqueInput>;
  distinct?: InputMaybe<ReviewScalarFieldEnum[]>;
  orderBy?: InputMaybe<ReviewOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ReviewWhereInput>;
};

export type ShowSoundtrackArgs = {
  cursor?: InputMaybe<SongInShowWhereUniqueInput>;
  distinct?: InputMaybe<SongInShowScalarFieldEnum[]>;
  orderBy?: InputMaybe<SongInShowOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SongInShowWhereInput>;
};

export type ShowWatchlistArgs = {
  cursor?: InputMaybe<WatchlistWhereUniqueInput>;
  distinct?: InputMaybe<WatchlistScalarFieldEnum[]>;
  orderBy?: InputMaybe<WatchlistOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WatchlistWhereInput>;
};

export type ShowCount = {
  __typename?: 'ShowCount';
  actors: Scalars['Int'];
  favourite: Scalars['Int'];
  genres: Scalars['Int'];
  platforms: Scalars['Int'];
  rating: Scalars['Int'];
  reviews: Scalars['Int'];
  soundtrack: Scalars['Int'];
  watchlist: Scalars['Int'];
};

export type ShowCreateNestedManyWithoutGenresInput = {
  connect?: InputMaybe<ShowWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<ShowCreateOrConnectWithoutGenresInput[]>;
  create?: InputMaybe<ShowCreateWithoutGenresInput[]>;
};

export type ShowCreateNestedManyWithoutPlatformsInput = {
  connect?: InputMaybe<ShowWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<ShowCreateOrConnectWithoutPlatformsInput[]>;
  create?: InputMaybe<ShowCreateWithoutPlatformsInput[]>;
};

export type ShowCreateNestedManyWithoutRatingInput = {
  connect?: InputMaybe<ShowWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<ShowCreateOrConnectWithoutRatingInput[]>;
  create?: InputMaybe<ShowCreateWithoutRatingInput[]>;
};

export type ShowCreateNestedManyWithoutWatchlistInput = {
  connect?: InputMaybe<ShowWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<ShowCreateOrConnectWithoutWatchlistInput[]>;
  create?: InputMaybe<ShowCreateWithoutWatchlistInput[]>;
};

export type ShowCreateNestedOneWithoutActorsInput = {
  connect?: InputMaybe<ShowWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ShowCreateOrConnectWithoutActorsInput>;
  create?: InputMaybe<ShowCreateWithoutActorsInput>;
};

export type ShowCreateNestedOneWithoutFavouriteInput = {
  connect?: InputMaybe<ShowWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ShowCreateOrConnectWithoutFavouriteInput>;
  create?: InputMaybe<ShowCreateWithoutFavouriteInput>;
};

export type ShowCreateNestedOneWithoutReviewsInput = {
  connect?: InputMaybe<ShowWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ShowCreateOrConnectWithoutReviewsInput>;
  create?: InputMaybe<ShowCreateWithoutReviewsInput>;
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

export type ShowCreateOrConnectWithoutFavouriteInput = {
  create: ShowCreateWithoutFavouriteInput;
  where: ShowWhereUniqueInput;
};

export type ShowCreateOrConnectWithoutGenresInput = {
  create: ShowCreateWithoutGenresInput;
  where: ShowWhereUniqueInput;
};

export type ShowCreateOrConnectWithoutPlatformsInput = {
  create: ShowCreateWithoutPlatformsInput;
  where: ShowWhereUniqueInput;
};

export type ShowCreateOrConnectWithoutRatingInput = {
  create: ShowCreateWithoutRatingInput;
  where: ShowWhereUniqueInput;
};

export type ShowCreateOrConnectWithoutReviewsInput = {
  create: ShowCreateWithoutReviewsInput;
  where: ShowWhereUniqueInput;
};

export type ShowCreateOrConnectWithoutSoundtrackInput = {
  create: ShowCreateWithoutSoundtrackInput;
  where: ShowWhereUniqueInput;
};

export type ShowCreateOrConnectWithoutWatchlistInput = {
  create: ShowCreateWithoutWatchlistInput;
  where: ShowWhereUniqueInput;
};

export type ShowCreateWithoutActorsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  favourite?: InputMaybe<FavouriteCreateNestedManyWithoutShowInput>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutShowsInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  platforms?: InputMaybe<PlatformCreateNestedManyWithoutShowsInput>;
  rating?: InputMaybe<RatingCreateNestedManyWithoutShowsInput>;
  released?: InputMaybe<Scalars['DateTime']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutShowInput>;
  soundtrack?: InputMaybe<SongInShowCreateNestedManyWithoutShowInput>;
  thumbnail?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  watchlist?: InputMaybe<WatchlistCreateNestedManyWithoutShowsInput>;
};

export type ShowCreateWithoutFavouriteInput = {
  actors?: InputMaybe<ActorInShowCreateNestedManyWithoutShowInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  genres?: InputMaybe<GenreCreateNestedManyWithoutShowsInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  platforms?: InputMaybe<PlatformCreateNestedManyWithoutShowsInput>;
  rating?: InputMaybe<RatingCreateNestedManyWithoutShowsInput>;
  released?: InputMaybe<Scalars['DateTime']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutShowInput>;
  soundtrack?: InputMaybe<SongInShowCreateNestedManyWithoutShowInput>;
  thumbnail?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  watchlist?: InputMaybe<WatchlistCreateNestedManyWithoutShowsInput>;
};

export type ShowCreateWithoutGenresInput = {
  actors?: InputMaybe<ActorInShowCreateNestedManyWithoutShowInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  favourite?: InputMaybe<FavouriteCreateNestedManyWithoutShowInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  platforms?: InputMaybe<PlatformCreateNestedManyWithoutShowsInput>;
  rating?: InputMaybe<RatingCreateNestedManyWithoutShowsInput>;
  released?: InputMaybe<Scalars['DateTime']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutShowInput>;
  soundtrack?: InputMaybe<SongInShowCreateNestedManyWithoutShowInput>;
  thumbnail?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  watchlist?: InputMaybe<WatchlistCreateNestedManyWithoutShowsInput>;
};

export type ShowCreateWithoutPlatformsInput = {
  actors?: InputMaybe<ActorInShowCreateNestedManyWithoutShowInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  favourite?: InputMaybe<FavouriteCreateNestedManyWithoutShowInput>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutShowsInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  rating?: InputMaybe<RatingCreateNestedManyWithoutShowsInput>;
  released?: InputMaybe<Scalars['DateTime']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutShowInput>;
  soundtrack?: InputMaybe<SongInShowCreateNestedManyWithoutShowInput>;
  thumbnail?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  watchlist?: InputMaybe<WatchlistCreateNestedManyWithoutShowsInput>;
};

export type ShowCreateWithoutRatingInput = {
  actors?: InputMaybe<ActorInShowCreateNestedManyWithoutShowInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  favourite?: InputMaybe<FavouriteCreateNestedManyWithoutShowInput>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutShowsInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  platforms?: InputMaybe<PlatformCreateNestedManyWithoutShowsInput>;
  released?: InputMaybe<Scalars['DateTime']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutShowInput>;
  soundtrack?: InputMaybe<SongInShowCreateNestedManyWithoutShowInput>;
  thumbnail?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  watchlist?: InputMaybe<WatchlistCreateNestedManyWithoutShowsInput>;
};

export type ShowCreateWithoutReviewsInput = {
  actors?: InputMaybe<ActorInShowCreateNestedManyWithoutShowInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  favourite?: InputMaybe<FavouriteCreateNestedManyWithoutShowInput>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutShowsInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  platforms?: InputMaybe<PlatformCreateNestedManyWithoutShowsInput>;
  rating?: InputMaybe<RatingCreateNestedManyWithoutShowsInput>;
  released?: InputMaybe<Scalars['DateTime']>;
  soundtrack?: InputMaybe<SongInShowCreateNestedManyWithoutShowInput>;
  thumbnail?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  watchlist?: InputMaybe<WatchlistCreateNestedManyWithoutShowsInput>;
};

export type ShowCreateWithoutSoundtrackInput = {
  actors?: InputMaybe<ActorInShowCreateNestedManyWithoutShowInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  favourite?: InputMaybe<FavouriteCreateNestedManyWithoutShowInput>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutShowsInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  platforms?: InputMaybe<PlatformCreateNestedManyWithoutShowsInput>;
  rating?: InputMaybe<RatingCreateNestedManyWithoutShowsInput>;
  released?: InputMaybe<Scalars['DateTime']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutShowInput>;
  thumbnail?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  watchlist?: InputMaybe<WatchlistCreateNestedManyWithoutShowsInput>;
};

export type ShowCreateWithoutWatchlistInput = {
  actors?: InputMaybe<ActorInShowCreateNestedManyWithoutShowInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  favourite?: InputMaybe<FavouriteCreateNestedManyWithoutShowInput>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutShowsInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  platforms?: InputMaybe<PlatformCreateNestedManyWithoutShowsInput>;
  rating?: InputMaybe<RatingCreateNestedManyWithoutShowsInput>;
  released?: InputMaybe<Scalars['DateTime']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutShowInput>;
  soundtrack?: InputMaybe<SongInShowCreateNestedManyWithoutShowInput>;
  thumbnail?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ShowListRelationFilter = {
  every?: InputMaybe<ShowWhereInput>;
  none?: InputMaybe<ShowWhereInput>;
  some?: InputMaybe<ShowWhereInput>;
};

export type ShowOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ShowOrderByWithRelationInput = {
  actors?: InputMaybe<ActorInShowOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  favourite?: InputMaybe<FavouriteOrderByRelationAggregateInput>;
  genres?: InputMaybe<GenreOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  locked?: InputMaybe<SortOrder>;
  platforms?: InputMaybe<PlatformOrderByRelationAggregateInput>;
  rating?: InputMaybe<RatingOrderByRelationAggregateInput>;
  released?: InputMaybe<SortOrder>;
  reviews?: InputMaybe<ReviewOrderByRelationAggregateInput>;
  soundtrack?: InputMaybe<SongInShowOrderByRelationAggregateInput>;
  thumbnail?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  watchlist?: InputMaybe<WatchlistOrderByRelationAggregateInput>;
};

export type ShowRelationFilter = {
  is?: InputMaybe<ShowWhereInput>;
  isNot?: InputMaybe<ShowWhereInput>;
};

export enum ShowScalarFieldEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  Locked = 'locked',
  Released = 'released',
  Thumbnail = 'thumbnail',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type ShowScalarWhereInput = {
  AND?: InputMaybe<ShowScalarWhereInput[]>;
  NOT?: InputMaybe<ShowScalarWhereInput[]>;
  OR?: InputMaybe<ShowScalarWhereInput[]>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  locked?: InputMaybe<BoolFilter>;
  released?: InputMaybe<DateTimeNullableFilter>;
  thumbnail?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ShowUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ShowUpdateManyWithWhereWithoutGenresInput = {
  data: ShowUpdateManyMutationInput;
  where: ShowScalarWhereInput;
};

export type ShowUpdateManyWithWhereWithoutPlatformsInput = {
  data: ShowUpdateManyMutationInput;
  where: ShowScalarWhereInput;
};

export type ShowUpdateManyWithWhereWithoutRatingInput = {
  data: ShowUpdateManyMutationInput;
  where: ShowScalarWhereInput;
};

export type ShowUpdateManyWithWhereWithoutWatchlistInput = {
  data: ShowUpdateManyMutationInput;
  where: ShowScalarWhereInput;
};

export type ShowUpdateManyWithoutGenresInput = {
  connect?: InputMaybe<ShowWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<ShowCreateOrConnectWithoutGenresInput[]>;
  create?: InputMaybe<ShowCreateWithoutGenresInput[]>;
  delete?: InputMaybe<ShowWhereUniqueInput[]>;
  deleteMany?: InputMaybe<ShowScalarWhereInput[]>;
  disconnect?: InputMaybe<ShowWhereUniqueInput[]>;
  set?: InputMaybe<ShowWhereUniqueInput[]>;
  update?: InputMaybe<ShowUpdateWithWhereUniqueWithoutGenresInput[]>;
  updateMany?: InputMaybe<ShowUpdateManyWithWhereWithoutGenresInput[]>;
  upsert?: InputMaybe<ShowUpsertWithWhereUniqueWithoutGenresInput[]>;
};

export type ShowUpdateManyWithoutPlatformsInput = {
  connect?: InputMaybe<ShowWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<ShowCreateOrConnectWithoutPlatformsInput[]>;
  create?: InputMaybe<ShowCreateWithoutPlatformsInput[]>;
  delete?: InputMaybe<ShowWhereUniqueInput[]>;
  deleteMany?: InputMaybe<ShowScalarWhereInput[]>;
  disconnect?: InputMaybe<ShowWhereUniqueInput[]>;
  set?: InputMaybe<ShowWhereUniqueInput[]>;
  update?: InputMaybe<ShowUpdateWithWhereUniqueWithoutPlatformsInput[]>;
  updateMany?: InputMaybe<ShowUpdateManyWithWhereWithoutPlatformsInput[]>;
  upsert?: InputMaybe<ShowUpsertWithWhereUniqueWithoutPlatformsInput[]>;
};

export type ShowUpdateManyWithoutRatingInput = {
  connect?: InputMaybe<ShowWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<ShowCreateOrConnectWithoutRatingInput[]>;
  create?: InputMaybe<ShowCreateWithoutRatingInput[]>;
  delete?: InputMaybe<ShowWhereUniqueInput[]>;
  deleteMany?: InputMaybe<ShowScalarWhereInput[]>;
  disconnect?: InputMaybe<ShowWhereUniqueInput[]>;
  set?: InputMaybe<ShowWhereUniqueInput[]>;
  update?: InputMaybe<ShowUpdateWithWhereUniqueWithoutRatingInput[]>;
  updateMany?: InputMaybe<ShowUpdateManyWithWhereWithoutRatingInput[]>;
  upsert?: InputMaybe<ShowUpsertWithWhereUniqueWithoutRatingInput[]>;
};

export type ShowUpdateManyWithoutWatchlistInput = {
  connect?: InputMaybe<ShowWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<ShowCreateOrConnectWithoutWatchlistInput[]>;
  create?: InputMaybe<ShowCreateWithoutWatchlistInput[]>;
  delete?: InputMaybe<ShowWhereUniqueInput[]>;
  deleteMany?: InputMaybe<ShowScalarWhereInput[]>;
  disconnect?: InputMaybe<ShowWhereUniqueInput[]>;
  set?: InputMaybe<ShowWhereUniqueInput[]>;
  update?: InputMaybe<ShowUpdateWithWhereUniqueWithoutWatchlistInput[]>;
  updateMany?: InputMaybe<ShowUpdateManyWithWhereWithoutWatchlistInput[]>;
  upsert?: InputMaybe<ShowUpsertWithWhereUniqueWithoutWatchlistInput[]>;
};

export type ShowUpdateOneRequiredWithoutActorsInput = {
  connect?: InputMaybe<ShowWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ShowCreateOrConnectWithoutActorsInput>;
  create?: InputMaybe<ShowCreateWithoutActorsInput>;
  update?: InputMaybe<ShowUpdateWithoutActorsInput>;
  upsert?: InputMaybe<ShowUpsertWithoutActorsInput>;
};

export type ShowUpdateOneRequiredWithoutSoundtrackInput = {
  connect?: InputMaybe<ShowWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ShowCreateOrConnectWithoutSoundtrackInput>;
  create?: InputMaybe<ShowCreateWithoutSoundtrackInput>;
  update?: InputMaybe<ShowUpdateWithoutSoundtrackInput>;
  upsert?: InputMaybe<ShowUpsertWithoutSoundtrackInput>;
};

export type ShowUpdateOneWithoutFavouriteInput = {
  connect?: InputMaybe<ShowWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ShowCreateOrConnectWithoutFavouriteInput>;
  create?: InputMaybe<ShowCreateWithoutFavouriteInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<ShowUpdateWithoutFavouriteInput>;
  upsert?: InputMaybe<ShowUpsertWithoutFavouriteInput>;
};

export type ShowUpdateOneWithoutReviewsInput = {
  connect?: InputMaybe<ShowWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ShowCreateOrConnectWithoutReviewsInput>;
  create?: InputMaybe<ShowCreateWithoutReviewsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<ShowUpdateWithoutReviewsInput>;
  upsert?: InputMaybe<ShowUpsertWithoutReviewsInput>;
};

export type ShowUpdateWithWhereUniqueWithoutGenresInput = {
  data: ShowUpdateWithoutGenresInput;
  where: ShowWhereUniqueInput;
};

export type ShowUpdateWithWhereUniqueWithoutPlatformsInput = {
  data: ShowUpdateWithoutPlatformsInput;
  where: ShowWhereUniqueInput;
};

export type ShowUpdateWithWhereUniqueWithoutRatingInput = {
  data: ShowUpdateWithoutRatingInput;
  where: ShowWhereUniqueInput;
};

export type ShowUpdateWithWhereUniqueWithoutWatchlistInput = {
  data: ShowUpdateWithoutWatchlistInput;
  where: ShowWhereUniqueInput;
};

export type ShowUpdateWithoutActorsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  favourite?: InputMaybe<FavouriteUpdateManyWithoutShowInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutShowsInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  platforms?: InputMaybe<PlatformUpdateManyWithoutShowsInput>;
  rating?: InputMaybe<RatingUpdateManyWithoutShowsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutShowInput>;
  soundtrack?: InputMaybe<SongInShowUpdateManyWithoutShowInput>;
  thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<WatchlistUpdateManyWithoutShowsInput>;
};

export type ShowUpdateWithoutFavouriteInput = {
  actors?: InputMaybe<ActorInShowUpdateManyWithoutShowInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutShowsInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  platforms?: InputMaybe<PlatformUpdateManyWithoutShowsInput>;
  rating?: InputMaybe<RatingUpdateManyWithoutShowsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutShowInput>;
  soundtrack?: InputMaybe<SongInShowUpdateManyWithoutShowInput>;
  thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<WatchlistUpdateManyWithoutShowsInput>;
};

export type ShowUpdateWithoutGenresInput = {
  actors?: InputMaybe<ActorInShowUpdateManyWithoutShowInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  favourite?: InputMaybe<FavouriteUpdateManyWithoutShowInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  platforms?: InputMaybe<PlatformUpdateManyWithoutShowsInput>;
  rating?: InputMaybe<RatingUpdateManyWithoutShowsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutShowInput>;
  soundtrack?: InputMaybe<SongInShowUpdateManyWithoutShowInput>;
  thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<WatchlistUpdateManyWithoutShowsInput>;
};

export type ShowUpdateWithoutPlatformsInput = {
  actors?: InputMaybe<ActorInShowUpdateManyWithoutShowInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  favourite?: InputMaybe<FavouriteUpdateManyWithoutShowInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutShowsInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  rating?: InputMaybe<RatingUpdateManyWithoutShowsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutShowInput>;
  soundtrack?: InputMaybe<SongInShowUpdateManyWithoutShowInput>;
  thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<WatchlistUpdateManyWithoutShowsInput>;
};

export type ShowUpdateWithoutRatingInput = {
  actors?: InputMaybe<ActorInShowUpdateManyWithoutShowInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  favourite?: InputMaybe<FavouriteUpdateManyWithoutShowInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutShowsInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  platforms?: InputMaybe<PlatformUpdateManyWithoutShowsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutShowInput>;
  soundtrack?: InputMaybe<SongInShowUpdateManyWithoutShowInput>;
  thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<WatchlistUpdateManyWithoutShowsInput>;
};

export type ShowUpdateWithoutReviewsInput = {
  actors?: InputMaybe<ActorInShowUpdateManyWithoutShowInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  favourite?: InputMaybe<FavouriteUpdateManyWithoutShowInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutShowsInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  platforms?: InputMaybe<PlatformUpdateManyWithoutShowsInput>;
  rating?: InputMaybe<RatingUpdateManyWithoutShowsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  soundtrack?: InputMaybe<SongInShowUpdateManyWithoutShowInput>;
  thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<WatchlistUpdateManyWithoutShowsInput>;
};

export type ShowUpdateWithoutSoundtrackInput = {
  actors?: InputMaybe<ActorInShowUpdateManyWithoutShowInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  favourite?: InputMaybe<FavouriteUpdateManyWithoutShowInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutShowsInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  platforms?: InputMaybe<PlatformUpdateManyWithoutShowsInput>;
  rating?: InputMaybe<RatingUpdateManyWithoutShowsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutShowInput>;
  thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<WatchlistUpdateManyWithoutShowsInput>;
};

export type ShowUpdateWithoutWatchlistInput = {
  actors?: InputMaybe<ActorInShowUpdateManyWithoutShowInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  favourite?: InputMaybe<FavouriteUpdateManyWithoutShowInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutShowsInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  platforms?: InputMaybe<PlatformUpdateManyWithoutShowsInput>;
  rating?: InputMaybe<RatingUpdateManyWithoutShowsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutShowInput>;
  soundtrack?: InputMaybe<SongInShowUpdateManyWithoutShowInput>;
  thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ShowUpsertWithWhereUniqueWithoutGenresInput = {
  create: ShowCreateWithoutGenresInput;
  update: ShowUpdateWithoutGenresInput;
  where: ShowWhereUniqueInput;
};

export type ShowUpsertWithWhereUniqueWithoutPlatformsInput = {
  create: ShowCreateWithoutPlatformsInput;
  update: ShowUpdateWithoutPlatformsInput;
  where: ShowWhereUniqueInput;
};

export type ShowUpsertWithWhereUniqueWithoutRatingInput = {
  create: ShowCreateWithoutRatingInput;
  update: ShowUpdateWithoutRatingInput;
  where: ShowWhereUniqueInput;
};

export type ShowUpsertWithWhereUniqueWithoutWatchlistInput = {
  create: ShowCreateWithoutWatchlistInput;
  update: ShowUpdateWithoutWatchlistInput;
  where: ShowWhereUniqueInput;
};

export type ShowUpsertWithoutActorsInput = {
  create: ShowCreateWithoutActorsInput;
  update: ShowUpdateWithoutActorsInput;
};

export type ShowUpsertWithoutFavouriteInput = {
  create: ShowCreateWithoutFavouriteInput;
  update: ShowUpdateWithoutFavouriteInput;
};

export type ShowUpsertWithoutReviewsInput = {
  create: ShowCreateWithoutReviewsInput;
  update: ShowUpdateWithoutReviewsInput;
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
  favourite?: InputMaybe<FavouriteListRelationFilter>;
  genres?: InputMaybe<GenreListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  locked?: InputMaybe<BoolFilter>;
  platforms?: InputMaybe<PlatformListRelationFilter>;
  rating?: InputMaybe<RatingListRelationFilter>;
  released?: InputMaybe<DateTimeNullableFilter>;
  reviews?: InputMaybe<ReviewListRelationFilter>;
  soundtrack?: InputMaybe<SongInShowListRelationFilter>;
  thumbnail?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  watchlist?: InputMaybe<WatchlistListRelationFilter>;
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
  favourites: Favourite[];
  genres: Genre[];
  id: Scalars['Int'];
  locked: Scalars['Boolean'];
  released?: Maybe<Scalars['DateTime']>;
  reviews: Review[];
  songInMovie: SongInMovie[];
  songInShow: SongInShow[];
  thumbnail: Scalars['String'];
  title: Scalars['String'];
};

export type SongArtistsArgs = {
  cursor?: InputMaybe<PersonWhereUniqueInput>;
  distinct?: InputMaybe<PersonScalarFieldEnum[]>;
  orderBy?: InputMaybe<PersonOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PersonWhereInput>;
};

export type SongFavouritesArgs = {
  cursor?: InputMaybe<FavouriteWhereUniqueInput>;
  distinct?: InputMaybe<FavouriteScalarFieldEnum[]>;
  orderBy?: InputMaybe<FavouriteOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FavouriteWhereInput>;
};

export type SongGenresArgs = {
  cursor?: InputMaybe<GenreWhereUniqueInput>;
  distinct?: InputMaybe<GenreScalarFieldEnum[]>;
  orderBy?: InputMaybe<GenreOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GenreWhereInput>;
};

export type SongReviewsArgs = {
  cursor?: InputMaybe<ReviewWhereUniqueInput>;
  distinct?: InputMaybe<ReviewScalarFieldEnum[]>;
  orderBy?: InputMaybe<ReviewOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ReviewWhereInput>;
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
  favourites: Scalars['Int'];
  genres: Scalars['Int'];
  reviews: Scalars['Int'];
  songInMovie: Scalars['Int'];
  songInShow: Scalars['Int'];
};

export type SongCreateInput = {
  artists?: InputMaybe<PersonCreateNestedManyWithoutSongsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  favourites?: InputMaybe<FavouriteCreateNestedManyWithoutSongInput>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutSongsInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  released?: InputMaybe<Scalars['DateTime']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutSongInput>;
  songInMovie?: InputMaybe<SongInMovieCreateNestedManyWithoutSongInput>;
  songInShow?: InputMaybe<SongInShowCreateNestedManyWithoutSongInput>;
  thumbnail?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type SongCreateNestedManyWithoutArtistsInput = {
  connect?: InputMaybe<SongWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<SongCreateOrConnectWithoutArtistsInput[]>;
  create?: InputMaybe<SongCreateWithoutArtistsInput[]>;
};

export type SongCreateNestedManyWithoutGenresInput = {
  connect?: InputMaybe<SongWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<SongCreateOrConnectWithoutGenresInput[]>;
  create?: InputMaybe<SongCreateWithoutGenresInput[]>;
};

export type SongCreateNestedOneWithoutFavouritesInput = {
  connect?: InputMaybe<SongWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SongCreateOrConnectWithoutFavouritesInput>;
  create?: InputMaybe<SongCreateWithoutFavouritesInput>;
};

export type SongCreateNestedOneWithoutReviewsInput = {
  connect?: InputMaybe<SongWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SongCreateOrConnectWithoutReviewsInput>;
  create?: InputMaybe<SongCreateWithoutReviewsInput>;
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

export type SongCreateOrConnectWithoutFavouritesInput = {
  create: SongCreateWithoutFavouritesInput;
  where: SongWhereUniqueInput;
};

export type SongCreateOrConnectWithoutGenresInput = {
  create: SongCreateWithoutGenresInput;
  where: SongWhereUniqueInput;
};

export type SongCreateOrConnectWithoutReviewsInput = {
  create: SongCreateWithoutReviewsInput;
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
  favourites?: InputMaybe<FavouriteCreateNestedManyWithoutSongInput>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutSongsInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  released?: InputMaybe<Scalars['DateTime']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutSongInput>;
  songInMovie?: InputMaybe<SongInMovieCreateNestedManyWithoutSongInput>;
  songInShow?: InputMaybe<SongInShowCreateNestedManyWithoutSongInput>;
  thumbnail?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type SongCreateWithoutFavouritesInput = {
  artists?: InputMaybe<PersonCreateNestedManyWithoutSongsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  genres?: InputMaybe<GenreCreateNestedManyWithoutSongsInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  released?: InputMaybe<Scalars['DateTime']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutSongInput>;
  songInMovie?: InputMaybe<SongInMovieCreateNestedManyWithoutSongInput>;
  songInShow?: InputMaybe<SongInShowCreateNestedManyWithoutSongInput>;
  thumbnail?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type SongCreateWithoutGenresInput = {
  artists?: InputMaybe<PersonCreateNestedManyWithoutSongsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  favourites?: InputMaybe<FavouriteCreateNestedManyWithoutSongInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  released?: InputMaybe<Scalars['DateTime']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutSongInput>;
  songInMovie?: InputMaybe<SongInMovieCreateNestedManyWithoutSongInput>;
  songInShow?: InputMaybe<SongInShowCreateNestedManyWithoutSongInput>;
  thumbnail?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type SongCreateWithoutReviewsInput = {
  artists?: InputMaybe<PersonCreateNestedManyWithoutSongsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  favourites?: InputMaybe<FavouriteCreateNestedManyWithoutSongInput>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutSongsInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  released?: InputMaybe<Scalars['DateTime']>;
  songInMovie?: InputMaybe<SongInMovieCreateNestedManyWithoutSongInput>;
  songInShow?: InputMaybe<SongInShowCreateNestedManyWithoutSongInput>;
  thumbnail?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type SongCreateWithoutSongInMovieInput = {
  artists?: InputMaybe<PersonCreateNestedManyWithoutSongsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  favourites?: InputMaybe<FavouriteCreateNestedManyWithoutSongInput>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutSongsInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  released?: InputMaybe<Scalars['DateTime']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutSongInput>;
  songInShow?: InputMaybe<SongInShowCreateNestedManyWithoutSongInput>;
  thumbnail?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type SongCreateWithoutSongInShowInput = {
  artists?: InputMaybe<PersonCreateNestedManyWithoutSongsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  favourites?: InputMaybe<FavouriteCreateNestedManyWithoutSongInput>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutSongsInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  released?: InputMaybe<Scalars['DateTime']>;
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutSongInput>;
  songInMovie?: InputMaybe<SongInMovieCreateNestedManyWithoutSongInput>;
  thumbnail?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
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

export type SongInMovieCreateInput = {
  description: Scalars['String'];
  movie: MovieCreateNestedOneWithoutSoundtrackInput;
  song: SongCreateNestedOneWithoutSongInMovieInput;
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

export type SongInShowCreateInput = {
  description: Scalars['String'];
  show: ShowCreateNestedOneWithoutSoundtrackInput;
  song: SongCreateNestedOneWithoutSongInShowInput;
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
  favourites?: InputMaybe<FavouriteOrderByRelationAggregateInput>;
  genres?: InputMaybe<GenreOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  locked?: InputMaybe<SortOrder>;
  released?: InputMaybe<SortOrder>;
  reviews?: InputMaybe<ReviewOrderByRelationAggregateInput>;
  songInMovie?: InputMaybe<SongInMovieOrderByRelationAggregateInput>;
  songInShow?: InputMaybe<SongInShowOrderByRelationAggregateInput>;
  thumbnail?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
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
  Title = 'title'
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
};

export type SongUpdateInput = {
  artists?: InputMaybe<PersonUpdateManyWithoutSongsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  favourites?: InputMaybe<FavouriteUpdateManyWithoutSongInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutSongsInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutSongInput>;
  songInMovie?: InputMaybe<SongInMovieUpdateManyWithoutSongInput>;
  songInShow?: InputMaybe<SongInShowUpdateManyWithoutSongInput>;
  thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SongUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SongUpdateManyWithWhereWithoutArtistsInput = {
  data: SongUpdateManyMutationInput;
  where: SongScalarWhereInput;
};

export type SongUpdateManyWithWhereWithoutGenresInput = {
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

export type SongUpdateManyWithoutGenresInput = {
  connect?: InputMaybe<SongWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<SongCreateOrConnectWithoutGenresInput[]>;
  create?: InputMaybe<SongCreateWithoutGenresInput[]>;
  delete?: InputMaybe<SongWhereUniqueInput[]>;
  deleteMany?: InputMaybe<SongScalarWhereInput[]>;
  disconnect?: InputMaybe<SongWhereUniqueInput[]>;
  set?: InputMaybe<SongWhereUniqueInput[]>;
  update?: InputMaybe<SongUpdateWithWhereUniqueWithoutGenresInput[]>;
  updateMany?: InputMaybe<SongUpdateManyWithWhereWithoutGenresInput[]>;
  upsert?: InputMaybe<SongUpsertWithWhereUniqueWithoutGenresInput[]>;
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

export type SongUpdateOneWithoutFavouritesInput = {
  connect?: InputMaybe<SongWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SongCreateOrConnectWithoutFavouritesInput>;
  create?: InputMaybe<SongCreateWithoutFavouritesInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<SongUpdateWithoutFavouritesInput>;
  upsert?: InputMaybe<SongUpsertWithoutFavouritesInput>;
};

export type SongUpdateOneWithoutReviewsInput = {
  connect?: InputMaybe<SongWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SongCreateOrConnectWithoutReviewsInput>;
  create?: InputMaybe<SongCreateWithoutReviewsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<SongUpdateWithoutReviewsInput>;
  upsert?: InputMaybe<SongUpsertWithoutReviewsInput>;
};

export type SongUpdateWithWhereUniqueWithoutArtistsInput = {
  data: SongUpdateWithoutArtistsInput;
  where: SongWhereUniqueInput;
};

export type SongUpdateWithWhereUniqueWithoutGenresInput = {
  data: SongUpdateWithoutGenresInput;
  where: SongWhereUniqueInput;
};

export type SongUpdateWithoutArtistsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  favourites?: InputMaybe<FavouriteUpdateManyWithoutSongInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutSongsInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutSongInput>;
  songInMovie?: InputMaybe<SongInMovieUpdateManyWithoutSongInput>;
  songInShow?: InputMaybe<SongInShowUpdateManyWithoutSongInput>;
  thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SongUpdateWithoutFavouritesInput = {
  artists?: InputMaybe<PersonUpdateManyWithoutSongsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutSongsInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutSongInput>;
  songInMovie?: InputMaybe<SongInMovieUpdateManyWithoutSongInput>;
  songInShow?: InputMaybe<SongInShowUpdateManyWithoutSongInput>;
  thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SongUpdateWithoutGenresInput = {
  artists?: InputMaybe<PersonUpdateManyWithoutSongsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  favourites?: InputMaybe<FavouriteUpdateManyWithoutSongInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutSongInput>;
  songInMovie?: InputMaybe<SongInMovieUpdateManyWithoutSongInput>;
  songInShow?: InputMaybe<SongInShowUpdateManyWithoutSongInput>;
  thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SongUpdateWithoutReviewsInput = {
  artists?: InputMaybe<PersonUpdateManyWithoutSongsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  favourites?: InputMaybe<FavouriteUpdateManyWithoutSongInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutSongsInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  songInMovie?: InputMaybe<SongInMovieUpdateManyWithoutSongInput>;
  songInShow?: InputMaybe<SongInShowUpdateManyWithoutSongInput>;
  thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SongUpdateWithoutSongInMovieInput = {
  artists?: InputMaybe<PersonUpdateManyWithoutSongsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  favourites?: InputMaybe<FavouriteUpdateManyWithoutSongInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutSongsInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutSongInput>;
  songInShow?: InputMaybe<SongInShowUpdateManyWithoutSongInput>;
  thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SongUpdateWithoutSongInShowInput = {
  artists?: InputMaybe<PersonUpdateManyWithoutSongsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  favourites?: InputMaybe<FavouriteUpdateManyWithoutSongInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutSongsInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutSongInput>;
  songInMovie?: InputMaybe<SongInMovieUpdateManyWithoutSongInput>;
  thumbnail?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SongUpsertWithWhereUniqueWithoutArtistsInput = {
  create: SongCreateWithoutArtistsInput;
  update: SongUpdateWithoutArtistsInput;
  where: SongWhereUniqueInput;
};

export type SongUpsertWithWhereUniqueWithoutGenresInput = {
  create: SongCreateWithoutGenresInput;
  update: SongUpdateWithoutGenresInput;
  where: SongWhereUniqueInput;
};

export type SongUpsertWithoutFavouritesInput = {
  create: SongCreateWithoutFavouritesInput;
  update: SongUpdateWithoutFavouritesInput;
};

export type SongUpsertWithoutReviewsInput = {
  create: SongCreateWithoutReviewsInput;
  update: SongUpdateWithoutReviewsInput;
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
  favourites?: InputMaybe<FavouriteListRelationFilter>;
  genres?: InputMaybe<GenreListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  locked?: InputMaybe<BoolFilter>;
  released?: InputMaybe<DateTimeNullableFilter>;
  reviews?: InputMaybe<ReviewListRelationFilter>;
  songInMovie?: InputMaybe<SongInMovieListRelationFilter>;
  songInShow?: InputMaybe<SongInShowListRelationFilter>;
  thumbnail?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
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
  Vote: Vote[];
  _count?: Maybe<UserCount>;
  avatar: Scalars['String'];
  bio: Scalars['String'];
  confirmed: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  displayname: Scalars['String'];
  dob: Scalars['String'];
  email: Scalars['String'];
  favourites: Favourite[];
  followers: Follows[];
  following: Follows[];
  id: Scalars['Int'];
  isFollowing: Scalars['Boolean'];
  location: Scalars['String'];
  notifications: Notification[];
  reviews: Review[];
  role: Role;
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
  watchlist?: Maybe<Watchlist>;
  website: Scalars['String'];
};

export type UserVoteArgs = {
  cursor?: InputMaybe<VoteWhereUniqueInput>;
  distinct?: InputMaybe<VoteScalarFieldEnum[]>;
  orderBy?: InputMaybe<VoteOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VoteWhereInput>;
};

export type UserFavouritesArgs = {
  cursor?: InputMaybe<FavouriteWhereUniqueInput>;
  distinct?: InputMaybe<FavouriteScalarFieldEnum[]>;
  orderBy?: InputMaybe<FavouriteOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FavouriteWhereInput>;
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

export type UserReviewsArgs = {
  cursor?: InputMaybe<ReviewWhereUniqueInput>;
  distinct?: InputMaybe<ReviewScalarFieldEnum[]>;
  orderBy?: InputMaybe<ReviewOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ReviewWhereInput>;
};

export type UserCount = {
  __typename?: 'UserCount';
  Vote: Scalars['Int'];
  favourites: Scalars['Int'];
  followers: Scalars['Int'];
  following: Scalars['Int'];
  notifications: Scalars['Int'];
  reviews: Scalars['Int'];
};

export type UserCreateNestedOneWithoutFavouritesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutFavouritesInput>;
  create?: InputMaybe<UserCreateWithoutFavouritesInput>;
};

export type UserCreateNestedOneWithoutFollowersInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutFollowersInput>;
  create?: InputMaybe<UserCreateWithoutFollowersInput>;
};

export type UserCreateNestedOneWithoutFollowingInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutFollowingInput>;
  create?: InputMaybe<UserCreateWithoutFollowingInput>;
};

export type UserCreateNestedOneWithoutReviewsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutReviewsInput>;
  create?: InputMaybe<UserCreateWithoutReviewsInput>;
};

export type UserCreateNestedOneWithoutVoteInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutVoteInput>;
  create?: InputMaybe<UserCreateWithoutVoteInput>;
};

export type UserCreateNestedOneWithoutWatchlistInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutWatchlistInput>;
  create?: InputMaybe<UserCreateWithoutWatchlistInput>;
};

export type UserCreateOrConnectWithoutFavouritesInput = {
  create: UserCreateWithoutFavouritesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutFollowersInput = {
  create: UserCreateWithoutFollowersInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutFollowingInput = {
  create: UserCreateWithoutFollowingInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutReviewsInput = {
  create: UserCreateWithoutReviewsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutVoteInput = {
  create: UserCreateWithoutVoteInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutWatchlistInput = {
  create: UserCreateWithoutWatchlistInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutFavouritesInput = {
  Vote?: InputMaybe<VoteCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  displayname: Scalars['String'];
  dob?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  followers?: InputMaybe<FollowsCreateNestedManyWithoutFollowerInput>;
  following?: InputMaybe<FollowsCreateNestedManyWithoutFollowingInput>;
  location?: InputMaybe<Scalars['String']>;
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  password: Scalars['String'];
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Role>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
  watchlist?: InputMaybe<WatchlistCreateNestedOneWithoutUserInput>;
  website?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutFollowersInput = {
  Vote?: InputMaybe<VoteCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  displayname: Scalars['String'];
  dob?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  favourites?: InputMaybe<FavouriteCreateNestedManyWithoutUserInput>;
  following?: InputMaybe<FollowsCreateNestedManyWithoutFollowingInput>;
  location?: InputMaybe<Scalars['String']>;
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  password: Scalars['String'];
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Role>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
  watchlist?: InputMaybe<WatchlistCreateNestedOneWithoutUserInput>;
  website?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutFollowingInput = {
  Vote?: InputMaybe<VoteCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  displayname: Scalars['String'];
  dob?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  favourites?: InputMaybe<FavouriteCreateNestedManyWithoutUserInput>;
  followers?: InputMaybe<FollowsCreateNestedManyWithoutFollowerInput>;
  location?: InputMaybe<Scalars['String']>;
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  password: Scalars['String'];
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Role>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
  watchlist?: InputMaybe<WatchlistCreateNestedOneWithoutUserInput>;
  website?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutReviewsInput = {
  Vote?: InputMaybe<VoteCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  displayname: Scalars['String'];
  dob?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  favourites?: InputMaybe<FavouriteCreateNestedManyWithoutUserInput>;
  followers?: InputMaybe<FollowsCreateNestedManyWithoutFollowerInput>;
  following?: InputMaybe<FollowsCreateNestedManyWithoutFollowingInput>;
  location?: InputMaybe<Scalars['String']>;
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  password: Scalars['String'];
  role?: InputMaybe<Role>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
  watchlist?: InputMaybe<WatchlistCreateNestedOneWithoutUserInput>;
  website?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutVoteInput = {
  avatar?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  displayname: Scalars['String'];
  dob?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  favourites?: InputMaybe<FavouriteCreateNestedManyWithoutUserInput>;
  followers?: InputMaybe<FollowsCreateNestedManyWithoutFollowerInput>;
  following?: InputMaybe<FollowsCreateNestedManyWithoutFollowingInput>;
  location?: InputMaybe<Scalars['String']>;
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  password: Scalars['String'];
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Role>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
  watchlist?: InputMaybe<WatchlistCreateNestedOneWithoutUserInput>;
  website?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutWatchlistInput = {
  Vote?: InputMaybe<VoteCreateNestedManyWithoutUserInput>;
  avatar?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  displayname: Scalars['String'];
  dob?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  favourites?: InputMaybe<FavouriteCreateNestedManyWithoutUserInput>;
  followers?: InputMaybe<FollowsCreateNestedManyWithoutFollowerInput>;
  following?: InputMaybe<FollowsCreateNestedManyWithoutFollowingInput>;
  location?: InputMaybe<Scalars['String']>;
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  password: Scalars['String'];
  reviews?: InputMaybe<ReviewCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Role>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
  website?: InputMaybe<Scalars['String']>;
};

export type UserOrderByWithRelationInput = {
  Vote?: InputMaybe<VoteOrderByRelationAggregateInput>;
  avatar?: InputMaybe<SortOrder>;
  bio?: InputMaybe<SortOrder>;
  confirmed?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  displayname?: InputMaybe<SortOrder>;
  dob?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  favourites?: InputMaybe<FavouriteOrderByRelationAggregateInput>;
  followers?: InputMaybe<FollowsOrderByRelationAggregateInput>;
  following?: InputMaybe<FollowsOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  notifications?: InputMaybe<NotificationOrderByRelationAggregateInput>;
  password?: InputMaybe<SortOrder>;
  reviews?: InputMaybe<ReviewOrderByRelationAggregateInput>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
  watchlist?: InputMaybe<WatchlistOrderByWithRelationInput>;
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

export type UserUpdateOneRequiredWithoutFavouritesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutFavouritesInput>;
  create?: InputMaybe<UserCreateWithoutFavouritesInput>;
  update?: InputMaybe<UserUpdateWithoutFavouritesInput>;
  upsert?: InputMaybe<UserUpsertWithoutFavouritesInput>;
};

export type UserUpdateOneRequiredWithoutFollowersInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutFollowersInput>;
  create?: InputMaybe<UserCreateWithoutFollowersInput>;
  update?: InputMaybe<UserUpdateWithoutFollowersInput>;
  upsert?: InputMaybe<UserUpsertWithoutFollowersInput>;
};

export type UserUpdateOneRequiredWithoutFollowingInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutFollowingInput>;
  create?: InputMaybe<UserCreateWithoutFollowingInput>;
  update?: InputMaybe<UserUpdateWithoutFollowingInput>;
  upsert?: InputMaybe<UserUpsertWithoutFollowingInput>;
};

export type UserUpdateOneRequiredWithoutVoteInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutVoteInput>;
  create?: InputMaybe<UserCreateWithoutVoteInput>;
  update?: InputMaybe<UserUpdateWithoutVoteInput>;
  upsert?: InputMaybe<UserUpsertWithoutVoteInput>;
};

export type UserUpdateOneRequiredWithoutWatchlistInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutWatchlistInput>;
  create?: InputMaybe<UserCreateWithoutWatchlistInput>;
  update?: InputMaybe<UserUpdateWithoutWatchlistInput>;
  upsert?: InputMaybe<UserUpsertWithoutWatchlistInput>;
};

export type UserUpdateOneWithoutReviewsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutReviewsInput>;
  create?: InputMaybe<UserCreateWithoutReviewsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<UserUpdateWithoutReviewsInput>;
  upsert?: InputMaybe<UserUpsertWithoutReviewsInput>;
};

export type UserUpdateWithoutFavouritesInput = {
  Vote?: InputMaybe<VoteUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<StringFieldUpdateOperationsInput>;
  bio?: InputMaybe<StringFieldUpdateOperationsInput>;
  confirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  displayname?: InputMaybe<StringFieldUpdateOperationsInput>;
  dob?: InputMaybe<StringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  followers?: InputMaybe<FollowsUpdateManyWithoutFollowerInput>;
  following?: InputMaybe<FollowsUpdateManyWithoutFollowingInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutUserInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutUserInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<WatchlistUpdateOneWithoutUserInput>;
  website?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutFollowersInput = {
  Vote?: InputMaybe<VoteUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<StringFieldUpdateOperationsInput>;
  bio?: InputMaybe<StringFieldUpdateOperationsInput>;
  confirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  displayname?: InputMaybe<StringFieldUpdateOperationsInput>;
  dob?: InputMaybe<StringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  favourites?: InputMaybe<FavouriteUpdateManyWithoutUserInput>;
  following?: InputMaybe<FollowsUpdateManyWithoutFollowingInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutUserInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutUserInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<WatchlistUpdateOneWithoutUserInput>;
  website?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutFollowingInput = {
  Vote?: InputMaybe<VoteUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<StringFieldUpdateOperationsInput>;
  bio?: InputMaybe<StringFieldUpdateOperationsInput>;
  confirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  displayname?: InputMaybe<StringFieldUpdateOperationsInput>;
  dob?: InputMaybe<StringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  favourites?: InputMaybe<FavouriteUpdateManyWithoutUserInput>;
  followers?: InputMaybe<FollowsUpdateManyWithoutFollowerInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutUserInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutUserInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<WatchlistUpdateOneWithoutUserInput>;
  website?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutReviewsInput = {
  Vote?: InputMaybe<VoteUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<StringFieldUpdateOperationsInput>;
  bio?: InputMaybe<StringFieldUpdateOperationsInput>;
  confirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  displayname?: InputMaybe<StringFieldUpdateOperationsInput>;
  dob?: InputMaybe<StringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  favourites?: InputMaybe<FavouriteUpdateManyWithoutUserInput>;
  followers?: InputMaybe<FollowsUpdateManyWithoutFollowerInput>;
  following?: InputMaybe<FollowsUpdateManyWithoutFollowingInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutUserInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<WatchlistUpdateOneWithoutUserInput>;
  website?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutVoteInput = {
  avatar?: InputMaybe<StringFieldUpdateOperationsInput>;
  bio?: InputMaybe<StringFieldUpdateOperationsInput>;
  confirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  displayname?: InputMaybe<StringFieldUpdateOperationsInput>;
  dob?: InputMaybe<StringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  favourites?: InputMaybe<FavouriteUpdateManyWithoutUserInput>;
  followers?: InputMaybe<FollowsUpdateManyWithoutFollowerInput>;
  following?: InputMaybe<FollowsUpdateManyWithoutFollowingInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutUserInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutUserInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<WatchlistUpdateOneWithoutUserInput>;
  website?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutWatchlistInput = {
  Vote?: InputMaybe<VoteUpdateManyWithoutUserInput>;
  avatar?: InputMaybe<StringFieldUpdateOperationsInput>;
  bio?: InputMaybe<StringFieldUpdateOperationsInput>;
  confirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  displayname?: InputMaybe<StringFieldUpdateOperationsInput>;
  dob?: InputMaybe<StringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  favourites?: InputMaybe<FavouriteUpdateManyWithoutUserInput>;
  followers?: InputMaybe<FollowsUpdateManyWithoutFollowerInput>;
  following?: InputMaybe<FollowsUpdateManyWithoutFollowingInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutUserInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  reviews?: InputMaybe<ReviewUpdateManyWithoutUserInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  website?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutFavouritesInput = {
  create: UserCreateWithoutFavouritesInput;
  update: UserUpdateWithoutFavouritesInput;
};

export type UserUpsertWithoutFollowersInput = {
  create: UserCreateWithoutFollowersInput;
  update: UserUpdateWithoutFollowersInput;
};

export type UserUpsertWithoutFollowingInput = {
  create: UserCreateWithoutFollowingInput;
  update: UserUpdateWithoutFollowingInput;
};

export type UserUpsertWithoutReviewsInput = {
  create: UserCreateWithoutReviewsInput;
  update: UserUpdateWithoutReviewsInput;
};

export type UserUpsertWithoutVoteInput = {
  create: UserCreateWithoutVoteInput;
  update: UserUpdateWithoutVoteInput;
};

export type UserUpsertWithoutWatchlistInput = {
  create: UserCreateWithoutWatchlistInput;
  update: UserUpdateWithoutWatchlistInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<UserWhereInput[]>;
  NOT?: InputMaybe<UserWhereInput[]>;
  OR?: InputMaybe<UserWhereInput[]>;
  Vote?: InputMaybe<VoteListRelationFilter>;
  avatar?: InputMaybe<StringFilter>;
  bio?: InputMaybe<StringFilter>;
  confirmed?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  displayname?: InputMaybe<StringFilter>;
  dob?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringFilter>;
  favourites?: InputMaybe<FavouriteListRelationFilter>;
  followers?: InputMaybe<FollowsListRelationFilter>;
  following?: InputMaybe<FollowsListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  location?: InputMaybe<StringFilter>;
  notifications?: InputMaybe<NotificationListRelationFilter>;
  password?: InputMaybe<StringFilter>;
  reviews?: InputMaybe<ReviewListRelationFilter>;
  role?: InputMaybe<EnumRoleFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  username?: InputMaybe<StringFilter>;
  watchlist?: InputMaybe<WatchlistRelationFilter>;
  website?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  username?: InputMaybe<Scalars['String']>;
};

export type Vote = {
  __typename?: 'Vote';
  createdAt: Scalars['DateTime'];
  review: Review;
  reviewId: Scalars['Int'];
  user: User;
  userId: Scalars['Int'];
};

export type VoteCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  review: ReviewCreateNestedOneWithoutVoteInput;
  user: UserCreateNestedOneWithoutVoteInput;
};

export type VoteCreateManyReviewInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type VoteCreateManyReviewInputEnvelope = {
  data: VoteCreateManyReviewInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type VoteCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  reviewId: Scalars['Int'];
};

export type VoteCreateManyUserInputEnvelope = {
  data: VoteCreateManyUserInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type VoteCreateNestedManyWithoutReviewInput = {
  connect?: InputMaybe<VoteWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<VoteCreateOrConnectWithoutReviewInput[]>;
  create?: InputMaybe<VoteCreateWithoutReviewInput[]>;
  createMany?: InputMaybe<VoteCreateManyReviewInputEnvelope>;
};

export type VoteCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<VoteWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<VoteCreateOrConnectWithoutUserInput[]>;
  create?: InputMaybe<VoteCreateWithoutUserInput[]>;
  createMany?: InputMaybe<VoteCreateManyUserInputEnvelope>;
};

export type VoteCreateOrConnectWithoutReviewInput = {
  create: VoteCreateWithoutReviewInput;
  where: VoteWhereUniqueInput;
};

export type VoteCreateOrConnectWithoutUserInput = {
  create: VoteCreateWithoutUserInput;
  where: VoteWhereUniqueInput;
};

export type VoteCreateWithoutReviewInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutVoteInput;
};

export type VoteCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  review: ReviewCreateNestedOneWithoutVoteInput;
};

export type VoteListRelationFilter = {
  every?: InputMaybe<VoteWhereInput>;
  none?: InputMaybe<VoteWhereInput>;
  some?: InputMaybe<VoteWhereInput>;
};

export type VoteOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type VoteOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  review?: InputMaybe<ReviewOrderByWithRelationInput>;
  reviewId?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum VoteScalarFieldEnum {
  CreatedAt = 'createdAt',
  ReviewId = 'reviewId',
  UserId = 'userId'
}

export type VoteScalarWhereInput = {
  AND?: InputMaybe<VoteScalarWhereInput[]>;
  NOT?: InputMaybe<VoteScalarWhereInput[]>;
  OR?: InputMaybe<VoteScalarWhereInput[]>;
  createdAt?: InputMaybe<DateTimeFilter>;
  reviewId?: InputMaybe<IntFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type VoteUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type VoteUpdateManyWithWhereWithoutReviewInput = {
  data: VoteUpdateManyMutationInput;
  where: VoteScalarWhereInput;
};

export type VoteUpdateManyWithWhereWithoutUserInput = {
  data: VoteUpdateManyMutationInput;
  where: VoteScalarWhereInput;
};

export type VoteUpdateManyWithoutReviewInput = {
  connect?: InputMaybe<VoteWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<VoteCreateOrConnectWithoutReviewInput[]>;
  create?: InputMaybe<VoteCreateWithoutReviewInput[]>;
  createMany?: InputMaybe<VoteCreateManyReviewInputEnvelope>;
  delete?: InputMaybe<VoteWhereUniqueInput[]>;
  deleteMany?: InputMaybe<VoteScalarWhereInput[]>;
  disconnect?: InputMaybe<VoteWhereUniqueInput[]>;
  set?: InputMaybe<VoteWhereUniqueInput[]>;
  update?: InputMaybe<VoteUpdateWithWhereUniqueWithoutReviewInput[]>;
  updateMany?: InputMaybe<VoteUpdateManyWithWhereWithoutReviewInput[]>;
  upsert?: InputMaybe<VoteUpsertWithWhereUniqueWithoutReviewInput[]>;
};

export type VoteUpdateManyWithoutUserInput = {
  connect?: InputMaybe<VoteWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<VoteCreateOrConnectWithoutUserInput[]>;
  create?: InputMaybe<VoteCreateWithoutUserInput[]>;
  createMany?: InputMaybe<VoteCreateManyUserInputEnvelope>;
  delete?: InputMaybe<VoteWhereUniqueInput[]>;
  deleteMany?: InputMaybe<VoteScalarWhereInput[]>;
  disconnect?: InputMaybe<VoteWhereUniqueInput[]>;
  set?: InputMaybe<VoteWhereUniqueInput[]>;
  update?: InputMaybe<VoteUpdateWithWhereUniqueWithoutUserInput[]>;
  updateMany?: InputMaybe<VoteUpdateManyWithWhereWithoutUserInput[]>;
  upsert?: InputMaybe<VoteUpsertWithWhereUniqueWithoutUserInput[]>;
};

export type VoteUpdateWithWhereUniqueWithoutReviewInput = {
  data: VoteUpdateWithoutReviewInput;
  where: VoteWhereUniqueInput;
};

export type VoteUpdateWithWhereUniqueWithoutUserInput = {
  data: VoteUpdateWithoutUserInput;
  where: VoteWhereUniqueInput;
};

export type VoteUpdateWithoutReviewInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutVoteInput>;
};

export type VoteUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  review?: InputMaybe<ReviewUpdateOneRequiredWithoutVoteInput>;
};

export type VoteUpsertWithWhereUniqueWithoutReviewInput = {
  create: VoteCreateWithoutReviewInput;
  update: VoteUpdateWithoutReviewInput;
  where: VoteWhereUniqueInput;
};

export type VoteUpsertWithWhereUniqueWithoutUserInput = {
  create: VoteCreateWithoutUserInput;
  update: VoteUpdateWithoutUserInput;
  where: VoteWhereUniqueInput;
};

export type VoteUserIdReviewIdCompoundUniqueInput = {
  reviewId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type VoteWhereInput = {
  AND?: InputMaybe<VoteWhereInput[]>;
  NOT?: InputMaybe<VoteWhereInput[]>;
  OR?: InputMaybe<VoteWhereInput[]>;
  createdAt?: InputMaybe<DateTimeFilter>;
  review?: InputMaybe<ReviewRelationFilter>;
  reviewId?: InputMaybe<IntFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type VoteWhereUniqueInput = {
  userId_reviewId?: InputMaybe<VoteUserIdReviewIdCompoundUniqueInput>;
};

export type Watchlist = {
  __typename?: 'Watchlist';
  _count?: Maybe<WatchlistCount>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  movies: Movie[];
  shows: Show[];
  user: User;
  userId: Scalars['Int'];
};

export type WatchlistMoviesArgs = {
  cursor?: InputMaybe<MovieWhereUniqueInput>;
  distinct?: InputMaybe<MovieScalarFieldEnum[]>;
  orderBy?: InputMaybe<MovieOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieWhereInput>;
};

export type WatchlistShowsArgs = {
  cursor?: InputMaybe<ShowWhereUniqueInput>;
  distinct?: InputMaybe<ShowScalarFieldEnum[]>;
  orderBy?: InputMaybe<ShowOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ShowWhereInput>;
};

export type WatchlistCount = {
  __typename?: 'WatchlistCount';
  movies: Scalars['Int'];
  shows: Scalars['Int'];
};

export type WatchlistCreateNestedManyWithoutMoviesInput = {
  connect?: InputMaybe<WatchlistWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<WatchlistCreateOrConnectWithoutMoviesInput[]>;
  create?: InputMaybe<WatchlistCreateWithoutMoviesInput[]>;
};

export type WatchlistCreateNestedManyWithoutShowsInput = {
  connect?: InputMaybe<WatchlistWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<WatchlistCreateOrConnectWithoutShowsInput[]>;
  create?: InputMaybe<WatchlistCreateWithoutShowsInput[]>;
};

export type WatchlistCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<WatchlistWhereUniqueInput>;
  connectOrCreate?: InputMaybe<WatchlistCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<WatchlistCreateWithoutUserInput>;
};

export type WatchlistCreateOrConnectWithoutMoviesInput = {
  create: WatchlistCreateWithoutMoviesInput;
  where: WatchlistWhereUniqueInput;
};

export type WatchlistCreateOrConnectWithoutShowsInput = {
  create: WatchlistCreateWithoutShowsInput;
  where: WatchlistWhereUniqueInput;
};

export type WatchlistCreateOrConnectWithoutUserInput = {
  create: WatchlistCreateWithoutUserInput;
  where: WatchlistWhereUniqueInput;
};

export type WatchlistCreateWithoutMoviesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  shows?: InputMaybe<ShowCreateNestedManyWithoutWatchlistInput>;
  user: UserCreateNestedOneWithoutWatchlistInput;
};

export type WatchlistCreateWithoutShowsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  movies?: InputMaybe<MovieCreateNestedManyWithoutWatchlistInput>;
  user: UserCreateNestedOneWithoutWatchlistInput;
};

export type WatchlistCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  movies?: InputMaybe<MovieCreateNestedManyWithoutWatchlistInput>;
  shows?: InputMaybe<ShowCreateNestedManyWithoutWatchlistInput>;
};

export type WatchlistListRelationFilter = {
  every?: InputMaybe<WatchlistWhereInput>;
  none?: InputMaybe<WatchlistWhereInput>;
  some?: InputMaybe<WatchlistWhereInput>;
};

export type WatchlistOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type WatchlistOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  movies?: InputMaybe<MovieOrderByRelationAggregateInput>;
  shows?: InputMaybe<ShowOrderByRelationAggregateInput>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type WatchlistRelationFilter = {
  is?: InputMaybe<WatchlistWhereInput>;
  isNot?: InputMaybe<WatchlistWhereInput>;
};

export enum WatchlistScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  UserId = 'userId'
}

export type WatchlistScalarWhereInput = {
  AND?: InputMaybe<WatchlistScalarWhereInput[]>;
  NOT?: InputMaybe<WatchlistScalarWhereInput[]>;
  OR?: InputMaybe<WatchlistScalarWhereInput[]>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type WatchlistUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  movies?: InputMaybe<MovieUpdateManyWithoutWatchlistInput>;
  shows?: InputMaybe<ShowUpdateManyWithoutWatchlistInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutWatchlistInput>;
};

export type WatchlistUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type WatchlistUpdateManyWithWhereWithoutMoviesInput = {
  data: WatchlistUpdateManyMutationInput;
  where: WatchlistScalarWhereInput;
};

export type WatchlistUpdateManyWithWhereWithoutShowsInput = {
  data: WatchlistUpdateManyMutationInput;
  where: WatchlistScalarWhereInput;
};

export type WatchlistUpdateManyWithoutMoviesInput = {
  connect?: InputMaybe<WatchlistWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<WatchlistCreateOrConnectWithoutMoviesInput[]>;
  create?: InputMaybe<WatchlistCreateWithoutMoviesInput[]>;
  delete?: InputMaybe<WatchlistWhereUniqueInput[]>;
  deleteMany?: InputMaybe<WatchlistScalarWhereInput[]>;
  disconnect?: InputMaybe<WatchlistWhereUniqueInput[]>;
  set?: InputMaybe<WatchlistWhereUniqueInput[]>;
  update?: InputMaybe<WatchlistUpdateWithWhereUniqueWithoutMoviesInput[]>;
  updateMany?: InputMaybe<WatchlistUpdateManyWithWhereWithoutMoviesInput[]>;
  upsert?: InputMaybe<WatchlistUpsertWithWhereUniqueWithoutMoviesInput[]>;
};

export type WatchlistUpdateManyWithoutShowsInput = {
  connect?: InputMaybe<WatchlistWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<WatchlistCreateOrConnectWithoutShowsInput[]>;
  create?: InputMaybe<WatchlistCreateWithoutShowsInput[]>;
  delete?: InputMaybe<WatchlistWhereUniqueInput[]>;
  deleteMany?: InputMaybe<WatchlistScalarWhereInput[]>;
  disconnect?: InputMaybe<WatchlistWhereUniqueInput[]>;
  set?: InputMaybe<WatchlistWhereUniqueInput[]>;
  update?: InputMaybe<WatchlistUpdateWithWhereUniqueWithoutShowsInput[]>;
  updateMany?: InputMaybe<WatchlistUpdateManyWithWhereWithoutShowsInput[]>;
  upsert?: InputMaybe<WatchlistUpsertWithWhereUniqueWithoutShowsInput[]>;
};

export type WatchlistUpdateOneWithoutUserInput = {
  connect?: InputMaybe<WatchlistWhereUniqueInput>;
  connectOrCreate?: InputMaybe<WatchlistCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<WatchlistCreateWithoutUserInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<WatchlistUpdateWithoutUserInput>;
  upsert?: InputMaybe<WatchlistUpsertWithoutUserInput>;
};

export type WatchlistUpdateWithWhereUniqueWithoutMoviesInput = {
  data: WatchlistUpdateWithoutMoviesInput;
  where: WatchlistWhereUniqueInput;
};

export type WatchlistUpdateWithWhereUniqueWithoutShowsInput = {
  data: WatchlistUpdateWithoutShowsInput;
  where: WatchlistWhereUniqueInput;
};

export type WatchlistUpdateWithoutMoviesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  shows?: InputMaybe<ShowUpdateManyWithoutWatchlistInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutWatchlistInput>;
};

export type WatchlistUpdateWithoutShowsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  movies?: InputMaybe<MovieUpdateManyWithoutWatchlistInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutWatchlistInput>;
};

export type WatchlistUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  movies?: InputMaybe<MovieUpdateManyWithoutWatchlistInput>;
  shows?: InputMaybe<ShowUpdateManyWithoutWatchlistInput>;
};

export type WatchlistUpsertWithWhereUniqueWithoutMoviesInput = {
  create: WatchlistCreateWithoutMoviesInput;
  update: WatchlistUpdateWithoutMoviesInput;
  where: WatchlistWhereUniqueInput;
};

export type WatchlistUpsertWithWhereUniqueWithoutShowsInput = {
  create: WatchlistCreateWithoutShowsInput;
  update: WatchlistUpdateWithoutShowsInput;
  where: WatchlistWhereUniqueInput;
};

export type WatchlistUpsertWithoutUserInput = {
  create: WatchlistCreateWithoutUserInput;
  update: WatchlistUpdateWithoutUserInput;
};

export type WatchlistWhereInput = {
  AND?: InputMaybe<WatchlistWhereInput[]>;
  NOT?: InputMaybe<WatchlistWhereInput[]>;
  OR?: InputMaybe<WatchlistWhereInput[]>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  movies?: InputMaybe<MovieListRelationFilter>;
  shows?: InputMaybe<ShowListRelationFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type WatchlistWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type RegularUserFragment = {__typename?: 'User'; id: number; email: string; username: string; avatar: string};

export type AddActorToMovieMutationVariables = Exact<{
  role: Scalars['String'];
  movieId: Scalars['Int'];
  personId: Scalars['Int'];
}>;

export type AddActorToMovieMutation = {__typename?: 'Mutation'; addActorToMovie?: boolean | null | undefined};

export type ConfirmMutationVariables = Exact<{
  token: Scalars['String'];
}>;

export type ConfirmMutation = {__typename?: 'Mutation'; confirm: boolean};

export type CreateMovieMutationVariables = Exact<{
  data: MovieCreateInput;
}>;

export type CreateMovieMutation = {__typename?: 'Mutation'; createMovie: {__typename?: 'Movie'; id: number; title: string; overview: string}};

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

export type RemoveActorFromMovieMutationVariables = Exact<{
  movieId: Scalars['Int'];
  personId: Scalars['Int'];
}>;

export type RemoveActorFromMovieMutation = {__typename?: 'Mutation'; removeActorFromMovie: boolean};

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

export type FollowersQuery = {__typename?: 'Query'; follows: Array<{__typename?: 'Follows'; following: {__typename?: 'User'; id: number; username: string; avatar: string}}>};

export type FollowingQueryVariables = Exact<{
  where?: InputMaybe<FollowsWhereInput>;
  orderBy?: InputMaybe<FollowsOrderByWithRelationInput[] | FollowsOrderByWithRelationInput>;
  cursor?: InputMaybe<FollowsWhereUniqueInput>;
}>;

export type FollowingQuery = {__typename?: 'Query'; follows: Array<{__typename?: 'Follows'; follower: {__typename?: 'User'; id: number; username: string; avatar: string}}>};

export type MeQueryVariables = Exact<Record<string, never>>;

export type MeQuery = {__typename?: 'Query'; me?: {__typename?: 'User'; id: number; email: string; username: string; avatar: string} | null | undefined};

export type MovieQueryVariables = Exact<{
  movieId: Scalars['Int'];
  where?: InputMaybe<ActorInMovieWhereInput>;
  orderBy?: InputMaybe<ActorInMovieOrderByWithRelationInput[] | ActorInMovieOrderByWithRelationInput>;
  cursor?: InputMaybe<ActorInMovieWhereUniqueInput>;
}>;

export type MovieQuery = {__typename?: 'Query'; movie?: {__typename?: 'Movie'; id: number; title: string; overview: string; thumbnail: string; status: string; runtime?: number | null | undefined; trailer?: string | null | undefined; revenue?: number | null | undefined; released?: any | null | undefined; locked: boolean; createdAt: any; updatedAt: any; actors: Array<{__typename?: 'ActorInMovie'; role: string; person: {__typename?: 'Person'; id: number; name: string; thumbnail: string}}>; rating: Array<{__typename?: 'Rating'; age: string}>; genres: Array<{__typename?: 'Genre'; name: string}>; platforms: Array<{__typename?: 'Platform'; name: string}>; soundtrack: Array<{__typename?: 'SongInMovie'; timestamp: any; description: string; song: {__typename?: 'Song'; title: string}}>} | null | undefined};

export type MoviesQueryVariables = Exact<{
  where?: InputMaybe<MovieWhereInput>;
  orderBy?: InputMaybe<MovieOrderByWithRelationInput[] | MovieOrderByWithRelationInput>;
  cursor?: InputMaybe<MovieWhereUniqueInput>;
}>;

export type MoviesQuery = {__typename?: 'Query'; movies?: Array<{__typename?: 'Movie'; id: number; title: string; overview: string; thumbnail: string}> | null | undefined};

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
export const AddActorToMovieDocument = gql`
    mutation addActorToMovie($role: String!, $movieId: Int!, $personId: Int!) {
  addActorToMovie(role: $role, movieId: $movieId, personId: $personId)
}
    `;
export type AddActorToMovieMutationFn = Apollo.MutationFunction<AddActorToMovieMutation, AddActorToMovieMutationVariables>;

/**
 * __useAddActorToMovieMutation__
 *
 * To run a mutation, you first call `useAddActorToMovieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddActorToMovieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addActorToMovieMutation, { data, loading, error }] = useAddActorToMovieMutation({
 *   variables: {
 *      role: // value for 'role'
 *      movieId: // value for 'movieId'
 *      personId: // value for 'personId'
 *   },
 * });
 */
export function useAddActorToMovieMutation(baseOptions?: Apollo.MutationHookOptions<AddActorToMovieMutation, AddActorToMovieMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<AddActorToMovieMutation, AddActorToMovieMutationVariables>(AddActorToMovieDocument, options);
      }

export type AddActorToMovieMutationHookResult = ReturnType<typeof useAddActorToMovieMutation>;
export type AddActorToMovieMutationResult = Apollo.MutationResult<AddActorToMovieMutation>;
export type AddActorToMovieMutationOptions = Apollo.BaseMutationOptions<AddActorToMovieMutation, AddActorToMovieMutationVariables>;
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
    overview
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
export const RemoveActorFromMovieDocument = gql`
    mutation removeActorFromMovie($movieId: Int!, $personId: Int!) {
  removeActorFromMovie(movieId: $movieId, personId: $personId)
}
    `;
export type RemoveActorFromMovieMutationFn = Apollo.MutationFunction<RemoveActorFromMovieMutation, RemoveActorFromMovieMutationVariables>;

/**
 * __useRemoveActorFromMovieMutation__
 *
 * To run a mutation, you first call `useRemoveActorFromMovieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveActorFromMovieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeActorFromMovieMutation, { data, loading, error }] = useRemoveActorFromMovieMutation({
 *   variables: {
 *      movieId: // value for 'movieId'
 *      personId: // value for 'personId'
 *   },
 * });
 */
export function useRemoveActorFromMovieMutation(baseOptions?: Apollo.MutationHookOptions<RemoveActorFromMovieMutation, RemoveActorFromMovieMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<RemoveActorFromMovieMutation, RemoveActorFromMovieMutationVariables>(RemoveActorFromMovieDocument, options);
      }

export type RemoveActorFromMovieMutationHookResult = ReturnType<typeof useRemoveActorFromMovieMutation>;
export type RemoveActorFromMovieMutationResult = Apollo.MutationResult<RemoveActorFromMovieMutation>;
export type RemoveActorFromMovieMutationOptions = Apollo.BaseMutationOptions<RemoveActorFromMovieMutation, RemoveActorFromMovieMutationVariables>;
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
    following {
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
    follower {
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
    overview
    thumbnail
    status
    runtime
    trailer
    revenue
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
    rating {
      age
    }
    genres {
      name
    }
    platforms {
      name
    }
    soundtrack {
      timestamp
      description
      song {
        title
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
    overview
    thumbnail
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
