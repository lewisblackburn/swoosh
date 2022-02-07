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

export type ActorInMovieAvgAggregate = {
  __typename?: 'ActorInMovieAvgAggregate';
  movieId?: Maybe<Scalars['Float']>;
  personId?: Maybe<Scalars['Float']>;
};

export type ActorInMovieAvgOrderByAggregateInput = {
  movieId?: InputMaybe<SortOrder>;
  personId?: InputMaybe<SortOrder>;
};

export type ActorInMovieCountAggregate = {
  __typename?: 'ActorInMovieCountAggregate';
  _all: Scalars['Int'];
  movieId: Scalars['Int'];
  personId: Scalars['Int'];
  role: Scalars['Int'];
};

export type ActorInMovieCountOrderByAggregateInput = {
  movieId?: InputMaybe<SortOrder>;
  personId?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
};

export type ActorInMovieCreateInput = {
  movie: MovieCreateNestedOneWithoutActorsInput;
  person: PersonCreateNestedOneWithoutMoviesInput;
  role: Scalars['String'];
};

export type ActorInMovieCreateManyInput = {
  movieId: Scalars['Int'];
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

export type ActorInMovieGroupBy = {
  __typename?: 'ActorInMovieGroupBy';
  _avg?: Maybe<ActorInMovieAvgAggregate>;
  _count?: Maybe<ActorInMovieCountAggregate>;
  _max?: Maybe<ActorInMovieMaxAggregate>;
  _min?: Maybe<ActorInMovieMinAggregate>;
  _sum?: Maybe<ActorInMovieSumAggregate>;
  movieId: Scalars['Int'];
  personId: Scalars['Int'];
  role: Scalars['String'];
};

export type ActorInMovieListRelationFilter = {
  every?: InputMaybe<ActorInMovieWhereInput>;
  none?: InputMaybe<ActorInMovieWhereInput>;
  some?: InputMaybe<ActorInMovieWhereInput>;
};

export type ActorInMovieMaxAggregate = {
  __typename?: 'ActorInMovieMaxAggregate';
  movieId?: Maybe<Scalars['Int']>;
  personId?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['String']>;
};

export type ActorInMovieMaxOrderByAggregateInput = {
  movieId?: InputMaybe<SortOrder>;
  personId?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
};

export type ActorInMovieMinAggregate = {
  __typename?: 'ActorInMovieMinAggregate';
  movieId?: Maybe<Scalars['Int']>;
  personId?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['String']>;
};

export type ActorInMovieMinOrderByAggregateInput = {
  movieId?: InputMaybe<SortOrder>;
  personId?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
};

export type ActorInMovieOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ActorInMovieOrderByWithAggregationInput = {
  _avg?: InputMaybe<ActorInMovieAvgOrderByAggregateInput>;
  _count?: InputMaybe<ActorInMovieCountOrderByAggregateInput>;
  _max?: InputMaybe<ActorInMovieMaxOrderByAggregateInput>;
  _min?: InputMaybe<ActorInMovieMinOrderByAggregateInput>;
  _sum?: InputMaybe<ActorInMovieSumOrderByAggregateInput>;
  movieId?: InputMaybe<SortOrder>;
  personId?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
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

export type ActorInMovieScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<ActorInMovieScalarWhereWithAggregatesInput[]>;
  NOT?: InputMaybe<ActorInMovieScalarWhereWithAggregatesInput[]>;
  OR?: InputMaybe<ActorInMovieScalarWhereWithAggregatesInput[]>;
  movieId?: InputMaybe<IntWithAggregatesFilter>;
  personId?: InputMaybe<IntWithAggregatesFilter>;
  role?: InputMaybe<StringWithAggregatesFilter>;
};

export type ActorInMovieSumAggregate = {
  __typename?: 'ActorInMovieSumAggregate';
  movieId?: Maybe<Scalars['Int']>;
  personId?: Maybe<Scalars['Int']>;
};

export type ActorInMovieSumOrderByAggregateInput = {
  movieId?: InputMaybe<SortOrder>;
  personId?: InputMaybe<SortOrder>;
};

export type ActorInMovieUpdateInput = {
  movie?: InputMaybe<MovieUpdateOneRequiredWithoutActorsInput>;
  person?: InputMaybe<PersonUpdateOneRequiredWithoutMoviesInput>;
  role?: InputMaybe<StringFieldUpdateOperationsInput>;
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

export type ActorInShowAvgAggregate = {
  __typename?: 'ActorInShowAvgAggregate';
  personId?: Maybe<Scalars['Float']>;
  showId?: Maybe<Scalars['Float']>;
};

export type ActorInShowAvgOrderByAggregateInput = {
  personId?: InputMaybe<SortOrder>;
  showId?: InputMaybe<SortOrder>;
};

export type ActorInShowCountAggregate = {
  __typename?: 'ActorInShowCountAggregate';
  _all: Scalars['Int'];
  personId: Scalars['Int'];
  role: Scalars['Int'];
  showId: Scalars['Int'];
};

export type ActorInShowCountOrderByAggregateInput = {
  personId?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  showId?: InputMaybe<SortOrder>;
};

export type ActorInShowCreateInput = {
  person: PersonCreateNestedOneWithoutShowsInput;
  role: Scalars['String'];
  show: ShowCreateNestedOneWithoutActorsInput;
};

export type ActorInShowCreateManyInput = {
  personId: Scalars['Int'];
  role: Scalars['String'];
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

export type ActorInShowGroupBy = {
  __typename?: 'ActorInShowGroupBy';
  _avg?: Maybe<ActorInShowAvgAggregate>;
  _count?: Maybe<ActorInShowCountAggregate>;
  _max?: Maybe<ActorInShowMaxAggregate>;
  _min?: Maybe<ActorInShowMinAggregate>;
  _sum?: Maybe<ActorInShowSumAggregate>;
  personId: Scalars['Int'];
  role: Scalars['String'];
  showId: Scalars['Int'];
};

export type ActorInShowListRelationFilter = {
  every?: InputMaybe<ActorInShowWhereInput>;
  none?: InputMaybe<ActorInShowWhereInput>;
  some?: InputMaybe<ActorInShowWhereInput>;
};

export type ActorInShowMaxAggregate = {
  __typename?: 'ActorInShowMaxAggregate';
  personId?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['String']>;
  showId?: Maybe<Scalars['Int']>;
};

export type ActorInShowMaxOrderByAggregateInput = {
  personId?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  showId?: InputMaybe<SortOrder>;
};

export type ActorInShowMinAggregate = {
  __typename?: 'ActorInShowMinAggregate';
  personId?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['String']>;
  showId?: Maybe<Scalars['Int']>;
};

export type ActorInShowMinOrderByAggregateInput = {
  personId?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  showId?: InputMaybe<SortOrder>;
};

export type ActorInShowOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ActorInShowOrderByWithAggregationInput = {
  _avg?: InputMaybe<ActorInShowAvgOrderByAggregateInput>;
  _count?: InputMaybe<ActorInShowCountOrderByAggregateInput>;
  _max?: InputMaybe<ActorInShowMaxOrderByAggregateInput>;
  _min?: InputMaybe<ActorInShowMinOrderByAggregateInput>;
  _sum?: InputMaybe<ActorInShowSumOrderByAggregateInput>;
  personId?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  showId?: InputMaybe<SortOrder>;
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

export type ActorInShowScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<ActorInShowScalarWhereWithAggregatesInput[]>;
  NOT?: InputMaybe<ActorInShowScalarWhereWithAggregatesInput[]>;
  OR?: InputMaybe<ActorInShowScalarWhereWithAggregatesInput[]>;
  personId?: InputMaybe<IntWithAggregatesFilter>;
  role?: InputMaybe<StringWithAggregatesFilter>;
  showId?: InputMaybe<IntWithAggregatesFilter>;
};

export type ActorInShowSumAggregate = {
  __typename?: 'ActorInShowSumAggregate';
  personId?: Maybe<Scalars['Int']>;
  showId?: Maybe<Scalars['Int']>;
};

export type ActorInShowSumOrderByAggregateInput = {
  personId?: InputMaybe<SortOrder>;
  showId?: InputMaybe<SortOrder>;
};

export type ActorInShowUpdateInput = {
  person?: InputMaybe<PersonUpdateOneRequiredWithoutShowsInput>;
  role?: InputMaybe<StringFieldUpdateOperationsInput>;
  show?: InputMaybe<ShowUpdateOneRequiredWithoutActorsInput>;
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

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateActorInMovie = {
  __typename?: 'AggregateActorInMovie';
  _avg?: Maybe<ActorInMovieAvgAggregate>;
  _count?: Maybe<ActorInMovieCountAggregate>;
  _max?: Maybe<ActorInMovieMaxAggregate>;
  _min?: Maybe<ActorInMovieMinAggregate>;
  _sum?: Maybe<ActorInMovieSumAggregate>;
};

export type AggregateActorInShow = {
  __typename?: 'AggregateActorInShow';
  _avg?: Maybe<ActorInShowAvgAggregate>;
  _count?: Maybe<ActorInShowCountAggregate>;
  _max?: Maybe<ActorInShowMaxAggregate>;
  _min?: Maybe<ActorInShowMinAggregate>;
  _sum?: Maybe<ActorInShowSumAggregate>;
};

export type AggregateBook = {
  __typename?: 'AggregateBook';
  _avg?: Maybe<BookAvgAggregate>;
  _count?: Maybe<BookCountAggregate>;
  _max?: Maybe<BookMaxAggregate>;
  _min?: Maybe<BookMinAggregate>;
  _sum?: Maybe<BookSumAggregate>;
};

export type AggregateBookReview = {
  __typename?: 'AggregateBookReview';
  _avg?: Maybe<BookReviewAvgAggregate>;
  _count?: Maybe<BookReviewCountAggregate>;
  _max?: Maybe<BookReviewMaxAggregate>;
  _min?: Maybe<BookReviewMinAggregate>;
  _sum?: Maybe<BookReviewSumAggregate>;
};

export type AggregateBookReviewLike = {
  __typename?: 'AggregateBookReviewLike';
  _avg?: Maybe<BookReviewLikeAvgAggregate>;
  _count?: Maybe<BookReviewLikeCountAggregate>;
  _max?: Maybe<BookReviewLikeMaxAggregate>;
  _min?: Maybe<BookReviewLikeMinAggregate>;
  _sum?: Maybe<BookReviewLikeSumAggregate>;
};

export type AggregateFollows = {
  __typename?: 'AggregateFollows';
  _avg?: Maybe<FollowsAvgAggregate>;
  _count?: Maybe<FollowsCountAggregate>;
  _max?: Maybe<FollowsMaxAggregate>;
  _min?: Maybe<FollowsMinAggregate>;
  _sum?: Maybe<FollowsSumAggregate>;
};

export type AggregateGenre = {
  __typename?: 'AggregateGenre';
  _avg?: Maybe<GenreAvgAggregate>;
  _count?: Maybe<GenreCountAggregate>;
  _max?: Maybe<GenreMaxAggregate>;
  _min?: Maybe<GenreMinAggregate>;
  _sum?: Maybe<GenreSumAggregate>;
};

export type AggregateMovie = {
  __typename?: 'AggregateMovie';
  _avg?: Maybe<MovieAvgAggregate>;
  _count?: Maybe<MovieCountAggregate>;
  _max?: Maybe<MovieMaxAggregate>;
  _min?: Maybe<MovieMinAggregate>;
  _sum?: Maybe<MovieSumAggregate>;
};

export type AggregateMovieLike = {
  __typename?: 'AggregateMovieLike';
  _avg?: Maybe<MovieLikeAvgAggregate>;
  _count?: Maybe<MovieLikeCountAggregate>;
  _max?: Maybe<MovieLikeMaxAggregate>;
  _min?: Maybe<MovieLikeMinAggregate>;
  _sum?: Maybe<MovieLikeSumAggregate>;
};

export type AggregateMovieReview = {
  __typename?: 'AggregateMovieReview';
  _avg?: Maybe<MovieReviewAvgAggregate>;
  _count?: Maybe<MovieReviewCountAggregate>;
  _max?: Maybe<MovieReviewMaxAggregate>;
  _min?: Maybe<MovieReviewMinAggregate>;
  _sum?: Maybe<MovieReviewSumAggregate>;
};

export type AggregateMovieReviewLike = {
  __typename?: 'AggregateMovieReviewLike';
  _avg?: Maybe<MovieReviewLikeAvgAggregate>;
  _count?: Maybe<MovieReviewLikeCountAggregate>;
  _max?: Maybe<MovieReviewLikeMaxAggregate>;
  _min?: Maybe<MovieReviewLikeMinAggregate>;
  _sum?: Maybe<MovieReviewLikeSumAggregate>;
};

export type AggregateNotification = {
  __typename?: 'AggregateNotification';
  _avg?: Maybe<NotificationAvgAggregate>;
  _count?: Maybe<NotificationCountAggregate>;
  _max?: Maybe<NotificationMaxAggregate>;
  _min?: Maybe<NotificationMinAggregate>;
  _sum?: Maybe<NotificationSumAggregate>;
};

export type AggregatePerson = {
  __typename?: 'AggregatePerson';
  _avg?: Maybe<PersonAvgAggregate>;
  _count?: Maybe<PersonCountAggregate>;
  _max?: Maybe<PersonMaxAggregate>;
  _min?: Maybe<PersonMinAggregate>;
  _sum?: Maybe<PersonSumAggregate>;
};

export type AggregatePlatform = {
  __typename?: 'AggregatePlatform';
  _avg?: Maybe<PlatformAvgAggregate>;
  _count?: Maybe<PlatformCountAggregate>;
  _max?: Maybe<PlatformMaxAggregate>;
  _min?: Maybe<PlatformMinAggregate>;
  _sum?: Maybe<PlatformSumAggregate>;
};

export type AggregateShow = {
  __typename?: 'AggregateShow';
  _avg?: Maybe<ShowAvgAggregate>;
  _count?: Maybe<ShowCountAggregate>;
  _max?: Maybe<ShowMaxAggregate>;
  _min?: Maybe<ShowMinAggregate>;
  _sum?: Maybe<ShowSumAggregate>;
};

export type AggregateShowLike = {
  __typename?: 'AggregateShowLike';
  _avg?: Maybe<ShowLikeAvgAggregate>;
  _count?: Maybe<ShowLikeCountAggregate>;
  _max?: Maybe<ShowLikeMaxAggregate>;
  _min?: Maybe<ShowLikeMinAggregate>;
  _sum?: Maybe<ShowLikeSumAggregate>;
};

export type AggregateShowReview = {
  __typename?: 'AggregateShowReview';
  _avg?: Maybe<ShowReviewAvgAggregate>;
  _count?: Maybe<ShowReviewCountAggregate>;
  _max?: Maybe<ShowReviewMaxAggregate>;
  _min?: Maybe<ShowReviewMinAggregate>;
  _sum?: Maybe<ShowReviewSumAggregate>;
};

export type AggregateShowReviewLike = {
  __typename?: 'AggregateShowReviewLike';
  _avg?: Maybe<ShowReviewLikeAvgAggregate>;
  _count?: Maybe<ShowReviewLikeCountAggregate>;
  _max?: Maybe<ShowReviewLikeMaxAggregate>;
  _min?: Maybe<ShowReviewLikeMinAggregate>;
  _sum?: Maybe<ShowReviewLikeSumAggregate>;
};

export type AggregateSong = {
  __typename?: 'AggregateSong';
  _avg?: Maybe<SongAvgAggregate>;
  _count?: Maybe<SongCountAggregate>;
  _max?: Maybe<SongMaxAggregate>;
  _min?: Maybe<SongMinAggregate>;
  _sum?: Maybe<SongSumAggregate>;
};

export type AggregateSongInMovie = {
  __typename?: 'AggregateSongInMovie';
  _avg?: Maybe<SongInMovieAvgAggregate>;
  _count?: Maybe<SongInMovieCountAggregate>;
  _max?: Maybe<SongInMovieMaxAggregate>;
  _min?: Maybe<SongInMovieMinAggregate>;
  _sum?: Maybe<SongInMovieSumAggregate>;
};

export type AggregateSongInShow = {
  __typename?: 'AggregateSongInShow';
  _avg?: Maybe<SongInShowAvgAggregate>;
  _count?: Maybe<SongInShowCountAggregate>;
  _max?: Maybe<SongInShowMaxAggregate>;
  _min?: Maybe<SongInShowMinAggregate>;
  _sum?: Maybe<SongInShowSumAggregate>;
};

export type AggregateSongReview = {
  __typename?: 'AggregateSongReview';
  _avg?: Maybe<SongReviewAvgAggregate>;
  _count?: Maybe<SongReviewCountAggregate>;
  _max?: Maybe<SongReviewMaxAggregate>;
  _min?: Maybe<SongReviewMinAggregate>;
  _sum?: Maybe<SongReviewSumAggregate>;
};

export type AggregateSongReviewLike = {
  __typename?: 'AggregateSongReviewLike';
  _avg?: Maybe<SongReviewLikeAvgAggregate>;
  _count?: Maybe<SongReviewLikeCountAggregate>;
  _max?: Maybe<SongReviewLikeMaxAggregate>;
  _min?: Maybe<SongReviewLikeMinAggregate>;
  _sum?: Maybe<SongReviewLikeSumAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
};

export type AggregateWatchlist = {
  __typename?: 'AggregateWatchlist';
  _avg?: Maybe<WatchlistAvgAggregate>;
  _count?: Maybe<WatchlistCountAggregate>;
  _max?: Maybe<WatchlistMaxAggregate>;
  _min?: Maybe<WatchlistMinAggregate>;
  _sum?: Maybe<WatchlistSumAggregate>;
};

export type Book = {
  __typename?: 'Book';
  _count?: Maybe<BookCount>;
  authors: Person[];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  genres: Genre[];
  id: Scalars['Int'];
  locked: Scalars['Boolean'];
  poster: Scalars['String'];
  released?: Maybe<Scalars['DateTime']>;
  reviews: BookReview[];
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

export type BookGenresArgs = {
  cursor?: InputMaybe<GenreWhereUniqueInput>;
  distinct?: InputMaybe<GenreScalarFieldEnum[]>;
  orderBy?: InputMaybe<GenreOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GenreWhereInput>;
};

export type BookReviewsArgs = {
  cursor?: InputMaybe<BookReviewWhereUniqueInput>;
  distinct?: InputMaybe<BookReviewScalarFieldEnum[]>;
  orderBy?: InputMaybe<BookReviewOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BookReviewWhereInput>;
};

export type BookAvgAggregate = {
  __typename?: 'BookAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type BookAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type BookCount = {
  __typename?: 'BookCount';
  authors: Scalars['Int'];
  genres: Scalars['Int'];
  reviews: Scalars['Int'];
};

export type BookCountAggregate = {
  __typename?: 'BookCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  locked: Scalars['Int'];
  poster: Scalars['Int'];
  released: Scalars['Int'];
  title: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type BookCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  locked?: InputMaybe<SortOrder>;
  poster?: InputMaybe<SortOrder>;
  released?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type BookCreateInput = {
  authors?: InputMaybe<PersonCreateNestedManyWithoutBooksInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  genres?: InputMaybe<GenreCreateNestedManyWithoutBooksInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  poster?: InputMaybe<Scalars['String']>;
  released?: InputMaybe<Scalars['DateTime']>;
  reviews?: InputMaybe<BookReviewCreateNestedManyWithoutBookInput>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BookCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  locked?: InputMaybe<Scalars['Boolean']>;
  poster?: InputMaybe<Scalars['String']>;
  released?: InputMaybe<Scalars['DateTime']>;
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

export type BookCreateNestedOneWithoutReviewsInput = {
  connect?: InputMaybe<BookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutReviewsInput>;
  create?: InputMaybe<BookCreateWithoutReviewsInput>;
};

export type BookCreateOrConnectWithoutAuthorsInput = {
  create: BookCreateWithoutAuthorsInput;
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
  genres?: InputMaybe<GenreCreateNestedManyWithoutBooksInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  poster?: InputMaybe<Scalars['String']>;
  released?: InputMaybe<Scalars['DateTime']>;
  reviews?: InputMaybe<BookReviewCreateNestedManyWithoutBookInput>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BookCreateWithoutGenresInput = {
  authors?: InputMaybe<PersonCreateNestedManyWithoutBooksInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  locked?: InputMaybe<Scalars['Boolean']>;
  poster?: InputMaybe<Scalars['String']>;
  released?: InputMaybe<Scalars['DateTime']>;
  reviews?: InputMaybe<BookReviewCreateNestedManyWithoutBookInput>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BookCreateWithoutReviewsInput = {
  authors?: InputMaybe<PersonCreateNestedManyWithoutBooksInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  genres?: InputMaybe<GenreCreateNestedManyWithoutBooksInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  poster?: InputMaybe<Scalars['String']>;
  released?: InputMaybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BookGroupBy = {
  __typename?: 'BookGroupBy';
  _avg?: Maybe<BookAvgAggregate>;
  _count?: Maybe<BookCountAggregate>;
  _max?: Maybe<BookMaxAggregate>;
  _min?: Maybe<BookMinAggregate>;
  _sum?: Maybe<BookSumAggregate>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['Int'];
  locked: Scalars['Boolean'];
  poster: Scalars['String'];
  released?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type BookListRelationFilter = {
  every?: InputMaybe<BookWhereInput>;
  none?: InputMaybe<BookWhereInput>;
  some?: InputMaybe<BookWhereInput>;
};

export type BookMaxAggregate = {
  __typename?: 'BookMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  locked?: Maybe<Scalars['Boolean']>;
  poster?: Maybe<Scalars['String']>;
  released?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BookMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  locked?: InputMaybe<SortOrder>;
  poster?: InputMaybe<SortOrder>;
  released?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type BookMinAggregate = {
  __typename?: 'BookMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  locked?: Maybe<Scalars['Boolean']>;
  poster?: Maybe<Scalars['String']>;
  released?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BookMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  locked?: InputMaybe<SortOrder>;
  poster?: InputMaybe<SortOrder>;
  released?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type BookOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type BookOrderByWithAggregationInput = {
  _avg?: InputMaybe<BookAvgOrderByAggregateInput>;
  _count?: InputMaybe<BookCountOrderByAggregateInput>;
  _max?: InputMaybe<BookMaxOrderByAggregateInput>;
  _min?: InputMaybe<BookMinOrderByAggregateInput>;
  _sum?: InputMaybe<BookSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  locked?: InputMaybe<SortOrder>;
  poster?: InputMaybe<SortOrder>;
  released?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type BookOrderByWithRelationInput = {
  authors?: InputMaybe<PersonOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  genres?: InputMaybe<GenreOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  locked?: InputMaybe<SortOrder>;
  poster?: InputMaybe<SortOrder>;
  released?: InputMaybe<SortOrder>;
  reviews?: InputMaybe<BookReviewOrderByRelationAggregateInput>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type BookRelationFilter = {
  is?: InputMaybe<BookWhereInput>;
  isNot?: InputMaybe<BookWhereInput>;
};

export type BookReview = {
  __typename?: 'BookReview';
  _count?: Maybe<BookReviewCount>;
  book: Book;
  bookId: Scalars['Int'];
  likes: BookReviewLike[];
  rating: Scalars['Int'];
  review?: Maybe<Scalars['String']>;
  user: User;
  userId: Scalars['Int'];
};

export type BookReviewLikesArgs = {
  cursor?: InputMaybe<BookReviewLikeWhereUniqueInput>;
  distinct?: InputMaybe<BookReviewLikeScalarFieldEnum[]>;
  orderBy?: InputMaybe<BookReviewLikeOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BookReviewLikeWhereInput>;
};

export type BookReviewAvgAggregate = {
  __typename?: 'BookReviewAvgAggregate';
  bookId?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type BookReviewAvgOrderByAggregateInput = {
  bookId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type BookReviewCount = {
  __typename?: 'BookReviewCount';
  likes: Scalars['Int'];
};

export type BookReviewCountAggregate = {
  __typename?: 'BookReviewCountAggregate';
  _all: Scalars['Int'];
  bookId: Scalars['Int'];
  rating: Scalars['Int'];
  review: Scalars['Int'];
  userId: Scalars['Int'];
};

export type BookReviewCountOrderByAggregateInput = {
  bookId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  review?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type BookReviewCreateInput = {
  book: BookCreateNestedOneWithoutReviewsInput;
  likes?: InputMaybe<BookReviewLikeCreateNestedManyWithoutBookReviewInput>;
  rating: Scalars['Int'];
  review?: InputMaybe<Scalars['String']>;
  user: UserCreateNestedOneWithoutBookReviewsInput;
};

export type BookReviewCreateManyBookInput = {
  rating: Scalars['Int'];
  review?: InputMaybe<Scalars['String']>;
  userId: Scalars['Int'];
};

export type BookReviewCreateManyBookInputEnvelope = {
  data: BookReviewCreateManyBookInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type BookReviewCreateManyInput = {
  bookId: Scalars['Int'];
  rating: Scalars['Int'];
  review?: InputMaybe<Scalars['String']>;
  userId: Scalars['Int'];
};

export type BookReviewCreateManyUserInput = {
  bookId: Scalars['Int'];
  rating: Scalars['Int'];
  review?: InputMaybe<Scalars['String']>;
};

export type BookReviewCreateManyUserInputEnvelope = {
  data: BookReviewCreateManyUserInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type BookReviewCreateNestedManyWithoutBookInput = {
  connect?: InputMaybe<BookReviewWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<BookReviewCreateOrConnectWithoutBookInput[]>;
  create?: InputMaybe<BookReviewCreateWithoutBookInput[]>;
  createMany?: InputMaybe<BookReviewCreateManyBookInputEnvelope>;
};

export type BookReviewCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<BookReviewWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<BookReviewCreateOrConnectWithoutUserInput[]>;
  create?: InputMaybe<BookReviewCreateWithoutUserInput[]>;
  createMany?: InputMaybe<BookReviewCreateManyUserInputEnvelope>;
};

export type BookReviewCreateNestedOneWithoutLikesInput = {
  connect?: InputMaybe<BookReviewWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookReviewCreateOrConnectWithoutLikesInput>;
  create?: InputMaybe<BookReviewCreateWithoutLikesInput>;
};

export type BookReviewCreateOrConnectWithoutBookInput = {
  create: BookReviewCreateWithoutBookInput;
  where: BookReviewWhereUniqueInput;
};

export type BookReviewCreateOrConnectWithoutLikesInput = {
  create: BookReviewCreateWithoutLikesInput;
  where: BookReviewWhereUniqueInput;
};

export type BookReviewCreateOrConnectWithoutUserInput = {
  create: BookReviewCreateWithoutUserInput;
  where: BookReviewWhereUniqueInput;
};

export type BookReviewCreateWithoutBookInput = {
  likes?: InputMaybe<BookReviewLikeCreateNestedManyWithoutBookReviewInput>;
  rating: Scalars['Int'];
  review?: InputMaybe<Scalars['String']>;
  user: UserCreateNestedOneWithoutBookReviewsInput;
};

export type BookReviewCreateWithoutLikesInput = {
  book: BookCreateNestedOneWithoutReviewsInput;
  rating: Scalars['Int'];
  review?: InputMaybe<Scalars['String']>;
  user: UserCreateNestedOneWithoutBookReviewsInput;
};

export type BookReviewCreateWithoutUserInput = {
  book: BookCreateNestedOneWithoutReviewsInput;
  likes?: InputMaybe<BookReviewLikeCreateNestedManyWithoutBookReviewInput>;
  rating: Scalars['Int'];
  review?: InputMaybe<Scalars['String']>;
};

export type BookReviewGroupBy = {
  __typename?: 'BookReviewGroupBy';
  _avg?: Maybe<BookReviewAvgAggregate>;
  _count?: Maybe<BookReviewCountAggregate>;
  _max?: Maybe<BookReviewMaxAggregate>;
  _min?: Maybe<BookReviewMinAggregate>;
  _sum?: Maybe<BookReviewSumAggregate>;
  bookId: Scalars['Int'];
  rating: Scalars['Int'];
  review?: Maybe<Scalars['String']>;
  userId: Scalars['Int'];
};

export type BookReviewLike = {
  __typename?: 'BookReviewLike';
  bookReview: BookReview;
  createdAt: Scalars['DateTime'];
  reviewBookId: Scalars['Int'];
  reviewUserId: Scalars['Int'];
  user: User;
  userId: Scalars['Int'];
};

export type BookReviewLikeAvgAggregate = {
  __typename?: 'BookReviewLikeAvgAggregate';
  reviewBookId?: Maybe<Scalars['Float']>;
  reviewUserId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type BookReviewLikeAvgOrderByAggregateInput = {
  reviewBookId?: InputMaybe<SortOrder>;
  reviewUserId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type BookReviewLikeCountAggregate = {
  __typename?: 'BookReviewLikeCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  reviewBookId: Scalars['Int'];
  reviewUserId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type BookReviewLikeCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  reviewBookId?: InputMaybe<SortOrder>;
  reviewUserId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type BookReviewLikeCreateInput = {
  bookReview: BookReviewCreateNestedOneWithoutLikesInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutBookReviewLikesInput;
};

export type BookReviewLikeCreateManyBookReviewInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type BookReviewLikeCreateManyBookReviewInputEnvelope = {
  data: BookReviewLikeCreateManyBookReviewInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type BookReviewLikeCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  reviewBookId: Scalars['Int'];
  reviewUserId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type BookReviewLikeCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  reviewBookId: Scalars['Int'];
  reviewUserId: Scalars['Int'];
};

export type BookReviewLikeCreateManyUserInputEnvelope = {
  data: BookReviewLikeCreateManyUserInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type BookReviewLikeCreateNestedManyWithoutBookReviewInput = {
  connect?: InputMaybe<BookReviewLikeWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<BookReviewLikeCreateOrConnectWithoutBookReviewInput[]>;
  create?: InputMaybe<BookReviewLikeCreateWithoutBookReviewInput[]>;
  createMany?: InputMaybe<BookReviewLikeCreateManyBookReviewInputEnvelope>;
};

export type BookReviewLikeCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<BookReviewLikeWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<BookReviewLikeCreateOrConnectWithoutUserInput[]>;
  create?: InputMaybe<BookReviewLikeCreateWithoutUserInput[]>;
  createMany?: InputMaybe<BookReviewLikeCreateManyUserInputEnvelope>;
};

export type BookReviewLikeCreateOrConnectWithoutBookReviewInput = {
  create: BookReviewLikeCreateWithoutBookReviewInput;
  where: BookReviewLikeWhereUniqueInput;
};

export type BookReviewLikeCreateOrConnectWithoutUserInput = {
  create: BookReviewLikeCreateWithoutUserInput;
  where: BookReviewLikeWhereUniqueInput;
};

export type BookReviewLikeCreateWithoutBookReviewInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutBookReviewLikesInput;
};

export type BookReviewLikeCreateWithoutUserInput = {
  bookReview: BookReviewCreateNestedOneWithoutLikesInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
};

export type BookReviewLikeGroupBy = {
  __typename?: 'BookReviewLikeGroupBy';
  _avg?: Maybe<BookReviewLikeAvgAggregate>;
  _count?: Maybe<BookReviewLikeCountAggregate>;
  _max?: Maybe<BookReviewLikeMaxAggregate>;
  _min?: Maybe<BookReviewLikeMinAggregate>;
  _sum?: Maybe<BookReviewLikeSumAggregate>;
  createdAt: Scalars['DateTime'];
  reviewBookId: Scalars['Int'];
  reviewUserId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type BookReviewLikeListRelationFilter = {
  every?: InputMaybe<BookReviewLikeWhereInput>;
  none?: InputMaybe<BookReviewLikeWhereInput>;
  some?: InputMaybe<BookReviewLikeWhereInput>;
};

export type BookReviewLikeMaxAggregate = {
  __typename?: 'BookReviewLikeMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  reviewBookId?: Maybe<Scalars['Int']>;
  reviewUserId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type BookReviewLikeMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  reviewBookId?: InputMaybe<SortOrder>;
  reviewUserId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type BookReviewLikeMinAggregate = {
  __typename?: 'BookReviewLikeMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  reviewBookId?: Maybe<Scalars['Int']>;
  reviewUserId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type BookReviewLikeMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  reviewBookId?: InputMaybe<SortOrder>;
  reviewUserId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type BookReviewLikeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type BookReviewLikeOrderByWithAggregationInput = {
  _avg?: InputMaybe<BookReviewLikeAvgOrderByAggregateInput>;
  _count?: InputMaybe<BookReviewLikeCountOrderByAggregateInput>;
  _max?: InputMaybe<BookReviewLikeMaxOrderByAggregateInput>;
  _min?: InputMaybe<BookReviewLikeMinOrderByAggregateInput>;
  _sum?: InputMaybe<BookReviewLikeSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  reviewBookId?: InputMaybe<SortOrder>;
  reviewUserId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type BookReviewLikeOrderByWithRelationInput = {
  bookReview?: InputMaybe<BookReviewOrderByWithRelationInput>;
  createdAt?: InputMaybe<SortOrder>;
  reviewBookId?: InputMaybe<SortOrder>;
  reviewUserId?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum BookReviewLikeScalarFieldEnum {
  CreatedAt = 'createdAt',
  ReviewBookId = 'reviewBookId',
  ReviewUserId = 'reviewUserId',
  UserId = 'userId'
}

export type BookReviewLikeScalarWhereInput = {
  AND?: InputMaybe<BookReviewLikeScalarWhereInput[]>;
  NOT?: InputMaybe<BookReviewLikeScalarWhereInput[]>;
  OR?: InputMaybe<BookReviewLikeScalarWhereInput[]>;
  createdAt?: InputMaybe<DateTimeFilter>;
  reviewBookId?: InputMaybe<IntFilter>;
  reviewUserId?: InputMaybe<IntFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type BookReviewLikeScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<BookReviewLikeScalarWhereWithAggregatesInput[]>;
  NOT?: InputMaybe<BookReviewLikeScalarWhereWithAggregatesInput[]>;
  OR?: InputMaybe<BookReviewLikeScalarWhereWithAggregatesInput[]>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  reviewBookId?: InputMaybe<IntWithAggregatesFilter>;
  reviewUserId?: InputMaybe<IntWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
};

export type BookReviewLikeSumAggregate = {
  __typename?: 'BookReviewLikeSumAggregate';
  reviewBookId?: Maybe<Scalars['Int']>;
  reviewUserId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type BookReviewLikeSumOrderByAggregateInput = {
  reviewBookId?: InputMaybe<SortOrder>;
  reviewUserId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type BookReviewLikeUpdateInput = {
  bookReview?: InputMaybe<BookReviewUpdateOneRequiredWithoutLikesInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutBookReviewLikesInput>;
};

export type BookReviewLikeUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BookReviewLikeUpdateManyWithWhereWithoutBookReviewInput = {
  data: BookReviewLikeUpdateManyMutationInput;
  where: BookReviewLikeScalarWhereInput;
};

export type BookReviewLikeUpdateManyWithWhereWithoutUserInput = {
  data: BookReviewLikeUpdateManyMutationInput;
  where: BookReviewLikeScalarWhereInput;
};

export type BookReviewLikeUpdateManyWithoutBookReviewInput = {
  connect?: InputMaybe<BookReviewLikeWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<BookReviewLikeCreateOrConnectWithoutBookReviewInput[]>;
  create?: InputMaybe<BookReviewLikeCreateWithoutBookReviewInput[]>;
  createMany?: InputMaybe<BookReviewLikeCreateManyBookReviewInputEnvelope>;
  delete?: InputMaybe<BookReviewLikeWhereUniqueInput[]>;
  deleteMany?: InputMaybe<BookReviewLikeScalarWhereInput[]>;
  disconnect?: InputMaybe<BookReviewLikeWhereUniqueInput[]>;
  set?: InputMaybe<BookReviewLikeWhereUniqueInput[]>;
  update?: InputMaybe<BookReviewLikeUpdateWithWhereUniqueWithoutBookReviewInput[]>;
  updateMany?: InputMaybe<BookReviewLikeUpdateManyWithWhereWithoutBookReviewInput[]>;
  upsert?: InputMaybe<BookReviewLikeUpsertWithWhereUniqueWithoutBookReviewInput[]>;
};

export type BookReviewLikeUpdateManyWithoutUserInput = {
  connect?: InputMaybe<BookReviewLikeWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<BookReviewLikeCreateOrConnectWithoutUserInput[]>;
  create?: InputMaybe<BookReviewLikeCreateWithoutUserInput[]>;
  createMany?: InputMaybe<BookReviewLikeCreateManyUserInputEnvelope>;
  delete?: InputMaybe<BookReviewLikeWhereUniqueInput[]>;
  deleteMany?: InputMaybe<BookReviewLikeScalarWhereInput[]>;
  disconnect?: InputMaybe<BookReviewLikeWhereUniqueInput[]>;
  set?: InputMaybe<BookReviewLikeWhereUniqueInput[]>;
  update?: InputMaybe<BookReviewLikeUpdateWithWhereUniqueWithoutUserInput[]>;
  updateMany?: InputMaybe<BookReviewLikeUpdateManyWithWhereWithoutUserInput[]>;
  upsert?: InputMaybe<BookReviewLikeUpsertWithWhereUniqueWithoutUserInput[]>;
};

export type BookReviewLikeUpdateWithWhereUniqueWithoutBookReviewInput = {
  data: BookReviewLikeUpdateWithoutBookReviewInput;
  where: BookReviewLikeWhereUniqueInput;
};

export type BookReviewLikeUpdateWithWhereUniqueWithoutUserInput = {
  data: BookReviewLikeUpdateWithoutUserInput;
  where: BookReviewLikeWhereUniqueInput;
};

export type BookReviewLikeUpdateWithoutBookReviewInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutBookReviewLikesInput>;
};

export type BookReviewLikeUpdateWithoutUserInput = {
  bookReview?: InputMaybe<BookReviewUpdateOneRequiredWithoutLikesInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BookReviewLikeUpsertWithWhereUniqueWithoutBookReviewInput = {
  create: BookReviewLikeCreateWithoutBookReviewInput;
  update: BookReviewLikeUpdateWithoutBookReviewInput;
  where: BookReviewLikeWhereUniqueInput;
};

export type BookReviewLikeUpsertWithWhereUniqueWithoutUserInput = {
  create: BookReviewLikeCreateWithoutUserInput;
  update: BookReviewLikeUpdateWithoutUserInput;
  where: BookReviewLikeWhereUniqueInput;
};

export type BookReviewLikeUserIdReviewUserIdReviewBookIdCompoundUniqueInput = {
  reviewBookId: Scalars['Int'];
  reviewUserId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type BookReviewLikeWhereInput = {
  AND?: InputMaybe<BookReviewLikeWhereInput[]>;
  NOT?: InputMaybe<BookReviewLikeWhereInput[]>;
  OR?: InputMaybe<BookReviewLikeWhereInput[]>;
  bookReview?: InputMaybe<BookReviewRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  reviewBookId?: InputMaybe<IntFilter>;
  reviewUserId?: InputMaybe<IntFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type BookReviewLikeWhereUniqueInput = {
  userId_reviewUserId_reviewBookId?: InputMaybe<BookReviewLikeUserIdReviewUserIdReviewBookIdCompoundUniqueInput>;
};

export type BookReviewListRelationFilter = {
  every?: InputMaybe<BookReviewWhereInput>;
  none?: InputMaybe<BookReviewWhereInput>;
  some?: InputMaybe<BookReviewWhereInput>;
};

export type BookReviewMaxAggregate = {
  __typename?: 'BookReviewMaxAggregate';
  bookId?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
  review?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

export type BookReviewMaxOrderByAggregateInput = {
  bookId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  review?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type BookReviewMinAggregate = {
  __typename?: 'BookReviewMinAggregate';
  bookId?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
  review?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

export type BookReviewMinOrderByAggregateInput = {
  bookId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  review?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type BookReviewOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type BookReviewOrderByWithAggregationInput = {
  _avg?: InputMaybe<BookReviewAvgOrderByAggregateInput>;
  _count?: InputMaybe<BookReviewCountOrderByAggregateInput>;
  _max?: InputMaybe<BookReviewMaxOrderByAggregateInput>;
  _min?: InputMaybe<BookReviewMinOrderByAggregateInput>;
  _sum?: InputMaybe<BookReviewSumOrderByAggregateInput>;
  bookId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  review?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type BookReviewOrderByWithRelationInput = {
  book?: InputMaybe<BookOrderByWithRelationInput>;
  bookId?: InputMaybe<SortOrder>;
  likes?: InputMaybe<BookReviewLikeOrderByRelationAggregateInput>;
  rating?: InputMaybe<SortOrder>;
  review?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type BookReviewRelationFilter = {
  is?: InputMaybe<BookReviewWhereInput>;
  isNot?: InputMaybe<BookReviewWhereInput>;
};

export enum BookReviewScalarFieldEnum {
  BookId = 'bookId',
  Rating = 'rating',
  Review = 'review',
  UserId = 'userId'
}

export type BookReviewScalarWhereInput = {
  AND?: InputMaybe<BookReviewScalarWhereInput[]>;
  NOT?: InputMaybe<BookReviewScalarWhereInput[]>;
  OR?: InputMaybe<BookReviewScalarWhereInput[]>;
  bookId?: InputMaybe<IntFilter>;
  rating?: InputMaybe<IntFilter>;
  review?: InputMaybe<StringNullableFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type BookReviewScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<BookReviewScalarWhereWithAggregatesInput[]>;
  NOT?: InputMaybe<BookReviewScalarWhereWithAggregatesInput[]>;
  OR?: InputMaybe<BookReviewScalarWhereWithAggregatesInput[]>;
  bookId?: InputMaybe<IntWithAggregatesFilter>;
  rating?: InputMaybe<IntWithAggregatesFilter>;
  review?: InputMaybe<StringNullableWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
};

export type BookReviewSumAggregate = {
  __typename?: 'BookReviewSumAggregate';
  bookId?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type BookReviewSumOrderByAggregateInput = {
  bookId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type BookReviewUpdateInput = {
  book?: InputMaybe<BookUpdateOneRequiredWithoutReviewsInput>;
  likes?: InputMaybe<BookReviewLikeUpdateManyWithoutBookReviewInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  review?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutBookReviewsInput>;
};

export type BookReviewUpdateManyMutationInput = {
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  review?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type BookReviewUpdateManyWithWhereWithoutBookInput = {
  data: BookReviewUpdateManyMutationInput;
  where: BookReviewScalarWhereInput;
};

export type BookReviewUpdateManyWithWhereWithoutUserInput = {
  data: BookReviewUpdateManyMutationInput;
  where: BookReviewScalarWhereInput;
};

export type BookReviewUpdateManyWithoutBookInput = {
  connect?: InputMaybe<BookReviewWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<BookReviewCreateOrConnectWithoutBookInput[]>;
  create?: InputMaybe<BookReviewCreateWithoutBookInput[]>;
  createMany?: InputMaybe<BookReviewCreateManyBookInputEnvelope>;
  delete?: InputMaybe<BookReviewWhereUniqueInput[]>;
  deleteMany?: InputMaybe<BookReviewScalarWhereInput[]>;
  disconnect?: InputMaybe<BookReviewWhereUniqueInput[]>;
  set?: InputMaybe<BookReviewWhereUniqueInput[]>;
  update?: InputMaybe<BookReviewUpdateWithWhereUniqueWithoutBookInput[]>;
  updateMany?: InputMaybe<BookReviewUpdateManyWithWhereWithoutBookInput[]>;
  upsert?: InputMaybe<BookReviewUpsertWithWhereUniqueWithoutBookInput[]>;
};

export type BookReviewUpdateManyWithoutUserInput = {
  connect?: InputMaybe<BookReviewWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<BookReviewCreateOrConnectWithoutUserInput[]>;
  create?: InputMaybe<BookReviewCreateWithoutUserInput[]>;
  createMany?: InputMaybe<BookReviewCreateManyUserInputEnvelope>;
  delete?: InputMaybe<BookReviewWhereUniqueInput[]>;
  deleteMany?: InputMaybe<BookReviewScalarWhereInput[]>;
  disconnect?: InputMaybe<BookReviewWhereUniqueInput[]>;
  set?: InputMaybe<BookReviewWhereUniqueInput[]>;
  update?: InputMaybe<BookReviewUpdateWithWhereUniqueWithoutUserInput[]>;
  updateMany?: InputMaybe<BookReviewUpdateManyWithWhereWithoutUserInput[]>;
  upsert?: InputMaybe<BookReviewUpsertWithWhereUniqueWithoutUserInput[]>;
};

export type BookReviewUpdateOneRequiredWithoutLikesInput = {
  connect?: InputMaybe<BookReviewWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookReviewCreateOrConnectWithoutLikesInput>;
  create?: InputMaybe<BookReviewCreateWithoutLikesInput>;
  update?: InputMaybe<BookReviewUpdateWithoutLikesInput>;
  upsert?: InputMaybe<BookReviewUpsertWithoutLikesInput>;
};

export type BookReviewUpdateWithWhereUniqueWithoutBookInput = {
  data: BookReviewUpdateWithoutBookInput;
  where: BookReviewWhereUniqueInput;
};

export type BookReviewUpdateWithWhereUniqueWithoutUserInput = {
  data: BookReviewUpdateWithoutUserInput;
  where: BookReviewWhereUniqueInput;
};

export type BookReviewUpdateWithoutBookInput = {
  likes?: InputMaybe<BookReviewLikeUpdateManyWithoutBookReviewInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  review?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutBookReviewsInput>;
};

export type BookReviewUpdateWithoutLikesInput = {
  book?: InputMaybe<BookUpdateOneRequiredWithoutReviewsInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  review?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutBookReviewsInput>;
};

export type BookReviewUpdateWithoutUserInput = {
  book?: InputMaybe<BookUpdateOneRequiredWithoutReviewsInput>;
  likes?: InputMaybe<BookReviewLikeUpdateManyWithoutBookReviewInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  review?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type BookReviewUpsertWithWhereUniqueWithoutBookInput = {
  create: BookReviewCreateWithoutBookInput;
  update: BookReviewUpdateWithoutBookInput;
  where: BookReviewWhereUniqueInput;
};

export type BookReviewUpsertWithWhereUniqueWithoutUserInput = {
  create: BookReviewCreateWithoutUserInput;
  update: BookReviewUpdateWithoutUserInput;
  where: BookReviewWhereUniqueInput;
};

export type BookReviewUpsertWithoutLikesInput = {
  create: BookReviewCreateWithoutLikesInput;
  update: BookReviewUpdateWithoutLikesInput;
};

export type BookReviewUserIdBookIdCompoundUniqueInput = {
  bookId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type BookReviewWhereInput = {
  AND?: InputMaybe<BookReviewWhereInput[]>;
  NOT?: InputMaybe<BookReviewWhereInput[]>;
  OR?: InputMaybe<BookReviewWhereInput[]>;
  book?: InputMaybe<BookRelationFilter>;
  bookId?: InputMaybe<IntFilter>;
  likes?: InputMaybe<BookReviewLikeListRelationFilter>;
  rating?: InputMaybe<IntFilter>;
  review?: InputMaybe<StringNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type BookReviewWhereUniqueInput = {
  userId_bookId?: InputMaybe<BookReviewUserIdBookIdCompoundUniqueInput>;
};

export enum BookScalarFieldEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  Locked = 'locked',
  Poster = 'poster',
  Released = 'released',
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
  poster?: InputMaybe<StringFilter>;
  released?: InputMaybe<DateTimeNullableFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type BookScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<BookScalarWhereWithAggregatesInput[]>;
  NOT?: InputMaybe<BookScalarWhereWithAggregatesInput[]>;
  OR?: InputMaybe<BookScalarWhereWithAggregatesInput[]>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  locked?: InputMaybe<BoolWithAggregatesFilter>;
  poster?: InputMaybe<StringWithAggregatesFilter>;
  released?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type BookSumAggregate = {
  __typename?: 'BookSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type BookSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type BookUpdateInput = {
  authors?: InputMaybe<PersonUpdateManyWithoutBooksInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutBooksInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  poster?: InputMaybe<StringFieldUpdateOperationsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  reviews?: InputMaybe<BookReviewUpdateManyWithoutBookInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BookUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  poster?: InputMaybe<StringFieldUpdateOperationsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
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

export type BookUpdateOneRequiredWithoutReviewsInput = {
  connect?: InputMaybe<BookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutReviewsInput>;
  create?: InputMaybe<BookCreateWithoutReviewsInput>;
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
  genres?: InputMaybe<GenreUpdateManyWithoutBooksInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  poster?: InputMaybe<StringFieldUpdateOperationsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  reviews?: InputMaybe<BookReviewUpdateManyWithoutBookInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BookUpdateWithoutGenresInput = {
  authors?: InputMaybe<PersonUpdateManyWithoutBooksInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  poster?: InputMaybe<StringFieldUpdateOperationsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  reviews?: InputMaybe<BookReviewUpdateManyWithoutBookInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BookUpdateWithoutReviewsInput = {
  authors?: InputMaybe<PersonUpdateManyWithoutBooksInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutBooksInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  poster?: InputMaybe<StringFieldUpdateOperationsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
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
  genres?: InputMaybe<GenreListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  locked?: InputMaybe<BoolFilter>;
  poster?: InputMaybe<StringFilter>;
  released?: InputMaybe<DateTimeNullableFilter>;
  reviews?: InputMaybe<BookReviewListRelationFilter>;
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

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
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

export type DateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
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

export type EnumRoleWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumRoleFilter>;
  _min?: InputMaybe<NestedEnumRoleFilter>;
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Role[]>;
  not?: InputMaybe<NestedEnumRoleWithAggregatesFilter>;
  notIn?: InputMaybe<Role[]>;
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

export type FloatNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedFloatNullableFilter>;
  _min?: InputMaybe<NestedFloatNullableFilter>;
  _sum?: InputMaybe<NestedFloatNullableFilter>;
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableWithAggregatesFilter>;
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

export type FollowsAvgAggregate = {
  __typename?: 'FollowsAvgAggregate';
  followerId?: Maybe<Scalars['Float']>;
  followingId?: Maybe<Scalars['Float']>;
};

export type FollowsAvgOrderByAggregateInput = {
  followerId?: InputMaybe<SortOrder>;
  followingId?: InputMaybe<SortOrder>;
};

export type FollowsCountAggregate = {
  __typename?: 'FollowsCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  followerId: Scalars['Int'];
  followingId: Scalars['Int'];
};

export type FollowsCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  followerId?: InputMaybe<SortOrder>;
  followingId?: InputMaybe<SortOrder>;
};

export type FollowsCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  follower: UserCreateNestedOneWithoutFollowersInput;
  following: UserCreateNestedOneWithoutFollowingInput;
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

export type FollowsCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  followerId: Scalars['Int'];
  followingId: Scalars['Int'];
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

export type FollowsGroupBy = {
  __typename?: 'FollowsGroupBy';
  _avg?: Maybe<FollowsAvgAggregate>;
  _count?: Maybe<FollowsCountAggregate>;
  _max?: Maybe<FollowsMaxAggregate>;
  _min?: Maybe<FollowsMinAggregate>;
  _sum?: Maybe<FollowsSumAggregate>;
  createdAt: Scalars['DateTime'];
  followerId: Scalars['Int'];
  followingId: Scalars['Int'];
};

export type FollowsListRelationFilter = {
  every?: InputMaybe<FollowsWhereInput>;
  none?: InputMaybe<FollowsWhereInput>;
  some?: InputMaybe<FollowsWhereInput>;
};

export type FollowsMaxAggregate = {
  __typename?: 'FollowsMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  followerId?: Maybe<Scalars['Int']>;
  followingId?: Maybe<Scalars['Int']>;
};

export type FollowsMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  followerId?: InputMaybe<SortOrder>;
  followingId?: InputMaybe<SortOrder>;
};

export type FollowsMinAggregate = {
  __typename?: 'FollowsMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  followerId?: Maybe<Scalars['Int']>;
  followingId?: Maybe<Scalars['Int']>;
};

export type FollowsMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  followerId?: InputMaybe<SortOrder>;
  followingId?: InputMaybe<SortOrder>;
};

export type FollowsOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type FollowsOrderByWithAggregationInput = {
  _avg?: InputMaybe<FollowsAvgOrderByAggregateInput>;
  _count?: InputMaybe<FollowsCountOrderByAggregateInput>;
  _max?: InputMaybe<FollowsMaxOrderByAggregateInput>;
  _min?: InputMaybe<FollowsMinOrderByAggregateInput>;
  _sum?: InputMaybe<FollowsSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  followerId?: InputMaybe<SortOrder>;
  followingId?: InputMaybe<SortOrder>;
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

export type FollowsScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<FollowsScalarWhereWithAggregatesInput[]>;
  NOT?: InputMaybe<FollowsScalarWhereWithAggregatesInput[]>;
  OR?: InputMaybe<FollowsScalarWhereWithAggregatesInput[]>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  followerId?: InputMaybe<IntWithAggregatesFilter>;
  followingId?: InputMaybe<IntWithAggregatesFilter>;
};

export type FollowsSumAggregate = {
  __typename?: 'FollowsSumAggregate';
  followerId?: Maybe<Scalars['Int']>;
  followingId?: Maybe<Scalars['Int']>;
};

export type FollowsSumOrderByAggregateInput = {
  followerId?: InputMaybe<SortOrder>;
  followingId?: InputMaybe<SortOrder>;
};

export type FollowsUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  follower?: InputMaybe<UserUpdateOneRequiredWithoutFollowersInput>;
  following?: InputMaybe<UserUpdateOneRequiredWithoutFollowingInput>;
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

export type GenreAvgAggregate = {
  __typename?: 'GenreAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type GenreAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type GenreCount = {
  __typename?: 'GenreCount';
  books: Scalars['Int'];
  movies: Scalars['Int'];
  shows: Scalars['Int'];
  songs: Scalars['Int'];
};

export type GenreCountAggregate = {
  __typename?: 'GenreCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
};

export type GenreCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type GenreCreateInput = {
  books?: InputMaybe<BookCreateNestedManyWithoutGenresInput>;
  movies?: InputMaybe<MovieCreateNestedManyWithoutGenresInput>;
  name: Scalars['String'];
  shows?: InputMaybe<ShowCreateNestedManyWithoutGenresInput>;
  songs?: InputMaybe<SongCreateNestedManyWithoutGenresInput>;
};

export type GenreCreateManyInput = {
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
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

export type GenreGroupBy = {
  __typename?: 'GenreGroupBy';
  _avg?: Maybe<GenreAvgAggregate>;
  _count?: Maybe<GenreCountAggregate>;
  _max?: Maybe<GenreMaxAggregate>;
  _min?: Maybe<GenreMinAggregate>;
  _sum?: Maybe<GenreSumAggregate>;
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type GenreListRelationFilter = {
  every?: InputMaybe<GenreWhereInput>;
  none?: InputMaybe<GenreWhereInput>;
  some?: InputMaybe<GenreWhereInput>;
};

export type GenreMaxAggregate = {
  __typename?: 'GenreMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type GenreMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type GenreMinAggregate = {
  __typename?: 'GenreMinAggregate';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type GenreMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type GenreOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type GenreOrderByWithAggregationInput = {
  _avg?: InputMaybe<GenreAvgOrderByAggregateInput>;
  _count?: InputMaybe<GenreCountOrderByAggregateInput>;
  _max?: InputMaybe<GenreMaxOrderByAggregateInput>;
  _min?: InputMaybe<GenreMinOrderByAggregateInput>;
  _sum?: InputMaybe<GenreSumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
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

export type GenreScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<GenreScalarWhereWithAggregatesInput[]>;
  NOT?: InputMaybe<GenreScalarWhereWithAggregatesInput[]>;
  OR?: InputMaybe<GenreScalarWhereWithAggregatesInput[]>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
};

export type GenreSumAggregate = {
  __typename?: 'GenreSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type GenreSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type GenreUpdateInput = {
  books?: InputMaybe<BookUpdateManyWithoutGenresInput>;
  movies?: InputMaybe<MovieUpdateManyWithoutGenresInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  shows?: InputMaybe<ShowUpdateManyWithoutGenresInput>;
  songs?: InputMaybe<SongUpdateManyWithoutGenresInput>;
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

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
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

export type IntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
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
  aggregateMovieReview: AggregateMovieReview;
  backdrop: Scalars['String'];
  createdAt: Scalars['DateTime'];
  genres: Genre[];
  id: Scalars['Int'];
  isLiked: Scalars['Boolean'];
  likes: MovieLike[];
  locked: Scalars['Boolean'];
  overview: Scalars['String'];
  platforms: Platform[];
  poster: Scalars['String'];
  rating?: Maybe<Scalars['String']>;
  released?: Maybe<Scalars['DateTime']>;
  reviews: MovieReview[];
  runtime?: Maybe<Scalars['Float']>;
  soundtrack: SongInMovie[];
  tagline: Scalars['String'];
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

export type MovieAggregateMovieReviewArgs = {
  cursor?: InputMaybe<MovieReviewWhereUniqueInput>;
  orderBy?: InputMaybe<MovieReviewOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieReviewWhereInput>;
};

export type MovieGenresArgs = {
  cursor?: InputMaybe<GenreWhereUniqueInput>;
  distinct?: InputMaybe<GenreScalarFieldEnum[]>;
  orderBy?: InputMaybe<GenreOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GenreWhereInput>;
};

export type MovieLikesArgs = {
  cursor?: InputMaybe<MovieLikeWhereUniqueInput>;
  distinct?: InputMaybe<MovieLikeScalarFieldEnum[]>;
  orderBy?: InputMaybe<MovieLikeOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieLikeWhereInput>;
};

export type MoviePlatformsArgs = {
  cursor?: InputMaybe<PlatformWhereUniqueInput>;
  distinct?: InputMaybe<PlatformScalarFieldEnum[]>;
  orderBy?: InputMaybe<PlatformOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlatformWhereInput>;
};

export type MovieReviewsArgs = {
  cursor?: InputMaybe<MovieReviewWhereUniqueInput>;
  distinct?: InputMaybe<MovieReviewScalarFieldEnum[]>;
  orderBy?: InputMaybe<MovieReviewOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieReviewWhereInput>;
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

export type MovieAvgAggregate = {
  __typename?: 'MovieAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  runtime?: Maybe<Scalars['Float']>;
};

export type MovieAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  runtime?: InputMaybe<SortOrder>;
};

export type MovieCount = {
  __typename?: 'MovieCount';
  actors: Scalars['Int'];
  genres: Scalars['Int'];
  likes: Scalars['Int'];
  platforms: Scalars['Int'];
  reviews: Scalars['Int'];
  soundtrack: Scalars['Int'];
  watchlist: Scalars['Int'];
};

export type MovieCountAggregate = {
  __typename?: 'MovieCountAggregate';
  _all: Scalars['Int'];
  backdrop: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  locked: Scalars['Int'];
  overview: Scalars['Int'];
  poster: Scalars['Int'];
  rating: Scalars['Int'];
  released: Scalars['Int'];
  runtime: Scalars['Int'];
  tagline: Scalars['Int'];
  title: Scalars['Int'];
  trailer: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type MovieCountOrderByAggregateInput = {
  backdrop?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  locked?: InputMaybe<SortOrder>;
  overview?: InputMaybe<SortOrder>;
  poster?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  released?: InputMaybe<SortOrder>;
  runtime?: InputMaybe<SortOrder>;
  tagline?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  trailer?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MovieCreateInput = {
  actors?: InputMaybe<ActorInMovieCreateNestedManyWithoutMovieInput>;
  backdrop?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutMoviesInput>;
  likes?: InputMaybe<MovieLikeCreateNestedManyWithoutMovieInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  overview: Scalars['String'];
  platforms?: InputMaybe<PlatformCreateNestedManyWithoutMoviesInput>;
  poster?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['String']>;
  released?: InputMaybe<Scalars['DateTime']>;
  reviews?: InputMaybe<MovieReviewCreateNestedManyWithoutMovieInput>;
  runtime?: InputMaybe<Scalars['Float']>;
  soundtrack?: InputMaybe<SongInMovieCreateNestedManyWithoutMovieInput>;
  tagline: Scalars['String'];
  title: Scalars['String'];
  trailer?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  watchlist?: InputMaybe<WatchlistCreateNestedManyWithoutMoviesInput>;
};

export type MovieCreateManyInput = {
  backdrop?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  locked?: InputMaybe<Scalars['Boolean']>;
  overview: Scalars['String'];
  poster?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['String']>;
  released?: InputMaybe<Scalars['DateTime']>;
  runtime?: InputMaybe<Scalars['Float']>;
  tagline: Scalars['String'];
  title: Scalars['String'];
  trailer?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
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

export type MovieCreateNestedOneWithoutLikesInput = {
  connect?: InputMaybe<MovieWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutLikesInput>;
  create?: InputMaybe<MovieCreateWithoutLikesInput>;
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

export type MovieCreateOrConnectWithoutGenresInput = {
  create: MovieCreateWithoutGenresInput;
  where: MovieWhereUniqueInput;
};

export type MovieCreateOrConnectWithoutLikesInput = {
  create: MovieCreateWithoutLikesInput;
  where: MovieWhereUniqueInput;
};

export type MovieCreateOrConnectWithoutPlatformsInput = {
  create: MovieCreateWithoutPlatformsInput;
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
  backdrop?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutMoviesInput>;
  likes?: InputMaybe<MovieLikeCreateNestedManyWithoutMovieInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  overview: Scalars['String'];
  platforms?: InputMaybe<PlatformCreateNestedManyWithoutMoviesInput>;
  poster?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['String']>;
  released?: InputMaybe<Scalars['DateTime']>;
  reviews?: InputMaybe<MovieReviewCreateNestedManyWithoutMovieInput>;
  runtime?: InputMaybe<Scalars['Float']>;
  soundtrack?: InputMaybe<SongInMovieCreateNestedManyWithoutMovieInput>;
  tagline: Scalars['String'];
  title: Scalars['String'];
  trailer?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  watchlist?: InputMaybe<WatchlistCreateNestedManyWithoutMoviesInput>;
};

export type MovieCreateWithoutGenresInput = {
  actors?: InputMaybe<ActorInMovieCreateNestedManyWithoutMovieInput>;
  backdrop?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  likes?: InputMaybe<MovieLikeCreateNestedManyWithoutMovieInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  overview: Scalars['String'];
  platforms?: InputMaybe<PlatformCreateNestedManyWithoutMoviesInput>;
  poster?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['String']>;
  released?: InputMaybe<Scalars['DateTime']>;
  reviews?: InputMaybe<MovieReviewCreateNestedManyWithoutMovieInput>;
  runtime?: InputMaybe<Scalars['Float']>;
  soundtrack?: InputMaybe<SongInMovieCreateNestedManyWithoutMovieInput>;
  tagline: Scalars['String'];
  title: Scalars['String'];
  trailer?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  watchlist?: InputMaybe<WatchlistCreateNestedManyWithoutMoviesInput>;
};

export type MovieCreateWithoutLikesInput = {
  actors?: InputMaybe<ActorInMovieCreateNestedManyWithoutMovieInput>;
  backdrop?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutMoviesInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  overview: Scalars['String'];
  platforms?: InputMaybe<PlatformCreateNestedManyWithoutMoviesInput>;
  poster?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['String']>;
  released?: InputMaybe<Scalars['DateTime']>;
  reviews?: InputMaybe<MovieReviewCreateNestedManyWithoutMovieInput>;
  runtime?: InputMaybe<Scalars['Float']>;
  soundtrack?: InputMaybe<SongInMovieCreateNestedManyWithoutMovieInput>;
  tagline: Scalars['String'];
  title: Scalars['String'];
  trailer?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  watchlist?: InputMaybe<WatchlistCreateNestedManyWithoutMoviesInput>;
};

export type MovieCreateWithoutPlatformsInput = {
  actors?: InputMaybe<ActorInMovieCreateNestedManyWithoutMovieInput>;
  backdrop?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutMoviesInput>;
  likes?: InputMaybe<MovieLikeCreateNestedManyWithoutMovieInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  overview: Scalars['String'];
  poster?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['String']>;
  released?: InputMaybe<Scalars['DateTime']>;
  reviews?: InputMaybe<MovieReviewCreateNestedManyWithoutMovieInput>;
  runtime?: InputMaybe<Scalars['Float']>;
  soundtrack?: InputMaybe<SongInMovieCreateNestedManyWithoutMovieInput>;
  tagline: Scalars['String'];
  title: Scalars['String'];
  trailer?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  watchlist?: InputMaybe<WatchlistCreateNestedManyWithoutMoviesInput>;
};

export type MovieCreateWithoutReviewsInput = {
  actors?: InputMaybe<ActorInMovieCreateNestedManyWithoutMovieInput>;
  backdrop?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutMoviesInput>;
  likes?: InputMaybe<MovieLikeCreateNestedManyWithoutMovieInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  overview: Scalars['String'];
  platforms?: InputMaybe<PlatformCreateNestedManyWithoutMoviesInput>;
  poster?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['String']>;
  released?: InputMaybe<Scalars['DateTime']>;
  runtime?: InputMaybe<Scalars['Float']>;
  soundtrack?: InputMaybe<SongInMovieCreateNestedManyWithoutMovieInput>;
  tagline: Scalars['String'];
  title: Scalars['String'];
  trailer?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  watchlist?: InputMaybe<WatchlistCreateNestedManyWithoutMoviesInput>;
};

export type MovieCreateWithoutSoundtrackInput = {
  actors?: InputMaybe<ActorInMovieCreateNestedManyWithoutMovieInput>;
  backdrop?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutMoviesInput>;
  likes?: InputMaybe<MovieLikeCreateNestedManyWithoutMovieInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  overview: Scalars['String'];
  platforms?: InputMaybe<PlatformCreateNestedManyWithoutMoviesInput>;
  poster?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['String']>;
  released?: InputMaybe<Scalars['DateTime']>;
  reviews?: InputMaybe<MovieReviewCreateNestedManyWithoutMovieInput>;
  runtime?: InputMaybe<Scalars['Float']>;
  tagline: Scalars['String'];
  title: Scalars['String'];
  trailer?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  watchlist?: InputMaybe<WatchlistCreateNestedManyWithoutMoviesInput>;
};

export type MovieCreateWithoutWatchlistInput = {
  actors?: InputMaybe<ActorInMovieCreateNestedManyWithoutMovieInput>;
  backdrop?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutMoviesInput>;
  likes?: InputMaybe<MovieLikeCreateNestedManyWithoutMovieInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  overview: Scalars['String'];
  platforms?: InputMaybe<PlatformCreateNestedManyWithoutMoviesInput>;
  poster?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['String']>;
  released?: InputMaybe<Scalars['DateTime']>;
  reviews?: InputMaybe<MovieReviewCreateNestedManyWithoutMovieInput>;
  runtime?: InputMaybe<Scalars['Float']>;
  soundtrack?: InputMaybe<SongInMovieCreateNestedManyWithoutMovieInput>;
  tagline: Scalars['String'];
  title: Scalars['String'];
  trailer?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type MovieGroupBy = {
  __typename?: 'MovieGroupBy';
  _avg?: Maybe<MovieAvgAggregate>;
  _count?: Maybe<MovieCountAggregate>;
  _max?: Maybe<MovieMaxAggregate>;
  _min?: Maybe<MovieMinAggregate>;
  _sum?: Maybe<MovieSumAggregate>;
  backdrop: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  locked: Scalars['Boolean'];
  overview: Scalars['String'];
  poster: Scalars['String'];
  rating?: Maybe<Scalars['String']>;
  released?: Maybe<Scalars['DateTime']>;
  runtime?: Maybe<Scalars['Float']>;
  tagline: Scalars['String'];
  title: Scalars['String'];
  trailer?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type MovieLike = {
  __typename?: 'MovieLike';
  createdAt: Scalars['DateTime'];
  movie: Movie;
  movieId: Scalars['Int'];
  user: User;
  userId: Scalars['Int'];
};

export type MovieLikeAvgAggregate = {
  __typename?: 'MovieLikeAvgAggregate';
  movieId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type MovieLikeAvgOrderByAggregateInput = {
  movieId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieLikeCountAggregate = {
  __typename?: 'MovieLikeCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  movieId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type MovieLikeCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  movieId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieLikeCreateCustomInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  movie: MovieCreateNestedOneWithoutLikesInput;
};

export type MovieLikeCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  movie: MovieCreateNestedOneWithoutLikesInput;
  user: UserCreateNestedOneWithoutLikedMoviesInput;
};

export type MovieLikeCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  movieId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type MovieLikeCreateManyMovieInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type MovieLikeCreateManyMovieInputEnvelope = {
  data: MovieLikeCreateManyMovieInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MovieLikeCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  movieId: Scalars['Int'];
};

export type MovieLikeCreateManyUserInputEnvelope = {
  data: MovieLikeCreateManyUserInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MovieLikeCreateNestedManyWithoutMovieInput = {
  connect?: InputMaybe<MovieLikeWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<MovieLikeCreateOrConnectWithoutMovieInput[]>;
  create?: InputMaybe<MovieLikeCreateWithoutMovieInput[]>;
  createMany?: InputMaybe<MovieLikeCreateManyMovieInputEnvelope>;
};

export type MovieLikeCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<MovieLikeWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<MovieLikeCreateOrConnectWithoutUserInput[]>;
  create?: InputMaybe<MovieLikeCreateWithoutUserInput[]>;
  createMany?: InputMaybe<MovieLikeCreateManyUserInputEnvelope>;
};

export type MovieLikeCreateOrConnectWithoutMovieInput = {
  create: MovieLikeCreateWithoutMovieInput;
  where: MovieLikeWhereUniqueInput;
};

export type MovieLikeCreateOrConnectWithoutUserInput = {
  create: MovieLikeCreateWithoutUserInput;
  where: MovieLikeWhereUniqueInput;
};

export type MovieLikeCreateWithoutMovieInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutLikedMoviesInput;
};

export type MovieLikeCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  movie: MovieCreateNestedOneWithoutLikesInput;
};

export type MovieLikeGroupBy = {
  __typename?: 'MovieLikeGroupBy';
  _avg?: Maybe<MovieLikeAvgAggregate>;
  _count?: Maybe<MovieLikeCountAggregate>;
  _max?: Maybe<MovieLikeMaxAggregate>;
  _min?: Maybe<MovieLikeMinAggregate>;
  _sum?: Maybe<MovieLikeSumAggregate>;
  createdAt: Scalars['DateTime'];
  movieId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type MovieLikeListRelationFilter = {
  every?: InputMaybe<MovieLikeWhereInput>;
  none?: InputMaybe<MovieLikeWhereInput>;
  some?: InputMaybe<MovieLikeWhereInput>;
};

export type MovieLikeMaxAggregate = {
  __typename?: 'MovieLikeMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  movieId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type MovieLikeMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  movieId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieLikeMinAggregate = {
  __typename?: 'MovieLikeMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  movieId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type MovieLikeMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  movieId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieLikeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MovieLikeOrderByWithAggregationInput = {
  _avg?: InputMaybe<MovieLikeAvgOrderByAggregateInput>;
  _count?: InputMaybe<MovieLikeCountOrderByAggregateInput>;
  _max?: InputMaybe<MovieLikeMaxOrderByAggregateInput>;
  _min?: InputMaybe<MovieLikeMinOrderByAggregateInput>;
  _sum?: InputMaybe<MovieLikeSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  movieId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieLikeOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  movie?: InputMaybe<MovieOrderByWithRelationInput>;
  movieId?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum MovieLikeScalarFieldEnum {
  CreatedAt = 'createdAt',
  MovieId = 'movieId',
  UserId = 'userId'
}

export type MovieLikeScalarWhereInput = {
  AND?: InputMaybe<MovieLikeScalarWhereInput[]>;
  NOT?: InputMaybe<MovieLikeScalarWhereInput[]>;
  OR?: InputMaybe<MovieLikeScalarWhereInput[]>;
  createdAt?: InputMaybe<DateTimeFilter>;
  movieId?: InputMaybe<IntFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type MovieLikeScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<MovieLikeScalarWhereWithAggregatesInput[]>;
  NOT?: InputMaybe<MovieLikeScalarWhereWithAggregatesInput[]>;
  OR?: InputMaybe<MovieLikeScalarWhereWithAggregatesInput[]>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  movieId?: InputMaybe<IntWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
};

export type MovieLikeSumAggregate = {
  __typename?: 'MovieLikeSumAggregate';
  movieId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type MovieLikeSumOrderByAggregateInput = {
  movieId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieLikeUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  movie?: InputMaybe<MovieUpdateOneRequiredWithoutLikesInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutLikedMoviesInput>;
};

export type MovieLikeUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieLikeUpdateManyWithWhereWithoutMovieInput = {
  data: MovieLikeUpdateManyMutationInput;
  where: MovieLikeScalarWhereInput;
};

export type MovieLikeUpdateManyWithWhereWithoutUserInput = {
  data: MovieLikeUpdateManyMutationInput;
  where: MovieLikeScalarWhereInput;
};

export type MovieLikeUpdateManyWithoutMovieInput = {
  connect?: InputMaybe<MovieLikeWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<MovieLikeCreateOrConnectWithoutMovieInput[]>;
  create?: InputMaybe<MovieLikeCreateWithoutMovieInput[]>;
  createMany?: InputMaybe<MovieLikeCreateManyMovieInputEnvelope>;
  delete?: InputMaybe<MovieLikeWhereUniqueInput[]>;
  deleteMany?: InputMaybe<MovieLikeScalarWhereInput[]>;
  disconnect?: InputMaybe<MovieLikeWhereUniqueInput[]>;
  set?: InputMaybe<MovieLikeWhereUniqueInput[]>;
  update?: InputMaybe<MovieLikeUpdateWithWhereUniqueWithoutMovieInput[]>;
  updateMany?: InputMaybe<MovieLikeUpdateManyWithWhereWithoutMovieInput[]>;
  upsert?: InputMaybe<MovieLikeUpsertWithWhereUniqueWithoutMovieInput[]>;
};

export type MovieLikeUpdateManyWithoutUserInput = {
  connect?: InputMaybe<MovieLikeWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<MovieLikeCreateOrConnectWithoutUserInput[]>;
  create?: InputMaybe<MovieLikeCreateWithoutUserInput[]>;
  createMany?: InputMaybe<MovieLikeCreateManyUserInputEnvelope>;
  delete?: InputMaybe<MovieLikeWhereUniqueInput[]>;
  deleteMany?: InputMaybe<MovieLikeScalarWhereInput[]>;
  disconnect?: InputMaybe<MovieLikeWhereUniqueInput[]>;
  set?: InputMaybe<MovieLikeWhereUniqueInput[]>;
  update?: InputMaybe<MovieLikeUpdateWithWhereUniqueWithoutUserInput[]>;
  updateMany?: InputMaybe<MovieLikeUpdateManyWithWhereWithoutUserInput[]>;
  upsert?: InputMaybe<MovieLikeUpsertWithWhereUniqueWithoutUserInput[]>;
};

export type MovieLikeUpdateWithWhereUniqueWithoutMovieInput = {
  data: MovieLikeUpdateWithoutMovieInput;
  where: MovieLikeWhereUniqueInput;
};

export type MovieLikeUpdateWithWhereUniqueWithoutUserInput = {
  data: MovieLikeUpdateWithoutUserInput;
  where: MovieLikeWhereUniqueInput;
};

export type MovieLikeUpdateWithoutMovieInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutLikedMoviesInput>;
};

export type MovieLikeUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  movie?: InputMaybe<MovieUpdateOneRequiredWithoutLikesInput>;
};

export type MovieLikeUpsertWithWhereUniqueWithoutMovieInput = {
  create: MovieLikeCreateWithoutMovieInput;
  update: MovieLikeUpdateWithoutMovieInput;
  where: MovieLikeWhereUniqueInput;
};

export type MovieLikeUpsertWithWhereUniqueWithoutUserInput = {
  create: MovieLikeCreateWithoutUserInput;
  update: MovieLikeUpdateWithoutUserInput;
  where: MovieLikeWhereUniqueInput;
};

export type MovieLikeUserIdMovieIdCompoundUniqueInput = {
  movieId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type MovieLikeWhereInput = {
  AND?: InputMaybe<MovieLikeWhereInput[]>;
  NOT?: InputMaybe<MovieLikeWhereInput[]>;
  OR?: InputMaybe<MovieLikeWhereInput[]>;
  createdAt?: InputMaybe<DateTimeFilter>;
  movie?: InputMaybe<MovieRelationFilter>;
  movieId?: InputMaybe<IntFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type MovieLikeWhereUniqueInput = {
  userId_movieId?: InputMaybe<MovieLikeUserIdMovieIdCompoundUniqueInput>;
};

export type MovieListRelationFilter = {
  every?: InputMaybe<MovieWhereInput>;
  none?: InputMaybe<MovieWhereInput>;
  some?: InputMaybe<MovieWhereInput>;
};

export type MovieMaxAggregate = {
  __typename?: 'MovieMaxAggregate';
  backdrop?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  locked?: Maybe<Scalars['Boolean']>;
  overview?: Maybe<Scalars['String']>;
  poster?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['String']>;
  released?: Maybe<Scalars['DateTime']>;
  runtime?: Maybe<Scalars['Float']>;
  tagline?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  trailer?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type MovieMaxOrderByAggregateInput = {
  backdrop?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  locked?: InputMaybe<SortOrder>;
  overview?: InputMaybe<SortOrder>;
  poster?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  released?: InputMaybe<SortOrder>;
  runtime?: InputMaybe<SortOrder>;
  tagline?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  trailer?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MovieMinAggregate = {
  __typename?: 'MovieMinAggregate';
  backdrop?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  locked?: Maybe<Scalars['Boolean']>;
  overview?: Maybe<Scalars['String']>;
  poster?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['String']>;
  released?: Maybe<Scalars['DateTime']>;
  runtime?: Maybe<Scalars['Float']>;
  tagline?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  trailer?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type MovieMinOrderByAggregateInput = {
  backdrop?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  locked?: InputMaybe<SortOrder>;
  overview?: InputMaybe<SortOrder>;
  poster?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  released?: InputMaybe<SortOrder>;
  runtime?: InputMaybe<SortOrder>;
  tagline?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  trailer?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MovieOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MovieOrderByWithAggregationInput = {
  _avg?: InputMaybe<MovieAvgOrderByAggregateInput>;
  _count?: InputMaybe<MovieCountOrderByAggregateInput>;
  _max?: InputMaybe<MovieMaxOrderByAggregateInput>;
  _min?: InputMaybe<MovieMinOrderByAggregateInput>;
  _sum?: InputMaybe<MovieSumOrderByAggregateInput>;
  backdrop?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  locked?: InputMaybe<SortOrder>;
  overview?: InputMaybe<SortOrder>;
  poster?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  released?: InputMaybe<SortOrder>;
  runtime?: InputMaybe<SortOrder>;
  tagline?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  trailer?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MovieOrderByWithRelationInput = {
  actors?: InputMaybe<ActorInMovieOrderByRelationAggregateInput>;
  backdrop?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  genres?: InputMaybe<GenreOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  likes?: InputMaybe<MovieLikeOrderByRelationAggregateInput>;
  locked?: InputMaybe<SortOrder>;
  overview?: InputMaybe<SortOrder>;
  platforms?: InputMaybe<PlatformOrderByRelationAggregateInput>;
  poster?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  released?: InputMaybe<SortOrder>;
  reviews?: InputMaybe<MovieReviewOrderByRelationAggregateInput>;
  runtime?: InputMaybe<SortOrder>;
  soundtrack?: InputMaybe<SongInMovieOrderByRelationAggregateInput>;
  tagline?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  trailer?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  watchlist?: InputMaybe<WatchlistOrderByRelationAggregateInput>;
};

export type MovieRelationFilter = {
  is?: InputMaybe<MovieWhereInput>;
  isNot?: InputMaybe<MovieWhereInput>;
};

export type MovieReview = {
  __typename?: 'MovieReview';
  _count?: Maybe<MovieReviewCount>;
  likes: MovieReviewLike[];
  movie: Movie;
  movieId: Scalars['Int'];
  rating: Scalars['Int'];
  review?: Maybe<Scalars['String']>;
  user: User;
  userId: Scalars['Int'];
};

export type MovieReviewLikesArgs = {
  cursor?: InputMaybe<MovieReviewLikeWhereUniqueInput>;
  distinct?: InputMaybe<MovieReviewLikeScalarFieldEnum[]>;
  orderBy?: InputMaybe<MovieReviewLikeOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieReviewLikeWhereInput>;
};

export type MovieReviewAvgAggregate = {
  __typename?: 'MovieReviewAvgAggregate';
  movieId?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type MovieReviewAvgOrderByAggregateInput = {
  movieId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieReviewCount = {
  __typename?: 'MovieReviewCount';
  likes: Scalars['Int'];
};

export type MovieReviewCountAggregate = {
  __typename?: 'MovieReviewCountAggregate';
  _all: Scalars['Int'];
  movieId: Scalars['Int'];
  rating: Scalars['Int'];
  review: Scalars['Int'];
  userId: Scalars['Int'];
};

export type MovieReviewCountOrderByAggregateInput = {
  movieId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  review?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieReviewCreateCustomInput = {
  likes?: InputMaybe<MovieReviewLikeCreateNestedManyWithoutMovieReviewInput>;
  movie: MovieCreateNestedOneWithoutReviewsInput;
  rating: Scalars['Int'];
  review?: InputMaybe<Scalars['String']>;
};

export type MovieReviewCreateInput = {
  likes?: InputMaybe<MovieReviewLikeCreateNestedManyWithoutMovieReviewInput>;
  movie: MovieCreateNestedOneWithoutReviewsInput;
  rating: Scalars['Int'];
  review?: InputMaybe<Scalars['String']>;
  user: UserCreateNestedOneWithoutMovieReviewsInput;
};

export type MovieReviewCreateManyInput = {
  movieId: Scalars['Int'];
  rating: Scalars['Int'];
  review?: InputMaybe<Scalars['String']>;
  userId: Scalars['Int'];
};

export type MovieReviewCreateManyMovieInput = {
  rating: Scalars['Int'];
  review?: InputMaybe<Scalars['String']>;
  userId: Scalars['Int'];
};

export type MovieReviewCreateManyMovieInputEnvelope = {
  data: MovieReviewCreateManyMovieInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MovieReviewCreateManyUserInput = {
  movieId: Scalars['Int'];
  rating: Scalars['Int'];
  review?: InputMaybe<Scalars['String']>;
};

export type MovieReviewCreateManyUserInputEnvelope = {
  data: MovieReviewCreateManyUserInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MovieReviewCreateNestedManyWithoutMovieInput = {
  connect?: InputMaybe<MovieReviewWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<MovieReviewCreateOrConnectWithoutMovieInput[]>;
  create?: InputMaybe<MovieReviewCreateWithoutMovieInput[]>;
  createMany?: InputMaybe<MovieReviewCreateManyMovieInputEnvelope>;
};

export type MovieReviewCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<MovieReviewWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<MovieReviewCreateOrConnectWithoutUserInput[]>;
  create?: InputMaybe<MovieReviewCreateWithoutUserInput[]>;
  createMany?: InputMaybe<MovieReviewCreateManyUserInputEnvelope>;
};

export type MovieReviewCreateNestedOneWithoutLikesInput = {
  connect?: InputMaybe<MovieReviewWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieReviewCreateOrConnectWithoutLikesInput>;
  create?: InputMaybe<MovieReviewCreateWithoutLikesInput>;
};

export type MovieReviewCreateOrConnectWithoutLikesInput = {
  create: MovieReviewCreateWithoutLikesInput;
  where: MovieReviewWhereUniqueInput;
};

export type MovieReviewCreateOrConnectWithoutMovieInput = {
  create: MovieReviewCreateWithoutMovieInput;
  where: MovieReviewWhereUniqueInput;
};

export type MovieReviewCreateOrConnectWithoutUserInput = {
  create: MovieReviewCreateWithoutUserInput;
  where: MovieReviewWhereUniqueInput;
};

export type MovieReviewCreateWithoutLikesInput = {
  movie: MovieCreateNestedOneWithoutReviewsInput;
  rating: Scalars['Int'];
  review?: InputMaybe<Scalars['String']>;
  user: UserCreateNestedOneWithoutMovieReviewsInput;
};

export type MovieReviewCreateWithoutMovieInput = {
  likes?: InputMaybe<MovieReviewLikeCreateNestedManyWithoutMovieReviewInput>;
  rating: Scalars['Int'];
  review?: InputMaybe<Scalars['String']>;
  user: UserCreateNestedOneWithoutMovieReviewsInput;
};

export type MovieReviewCreateWithoutUserInput = {
  likes?: InputMaybe<MovieReviewLikeCreateNestedManyWithoutMovieReviewInput>;
  movie: MovieCreateNestedOneWithoutReviewsInput;
  rating: Scalars['Int'];
  review?: InputMaybe<Scalars['String']>;
};

export type MovieReviewGroupBy = {
  __typename?: 'MovieReviewGroupBy';
  _avg?: Maybe<MovieReviewAvgAggregate>;
  _count?: Maybe<MovieReviewCountAggregate>;
  _max?: Maybe<MovieReviewMaxAggregate>;
  _min?: Maybe<MovieReviewMinAggregate>;
  _sum?: Maybe<MovieReviewSumAggregate>;
  movieId: Scalars['Int'];
  rating: Scalars['Int'];
  review?: Maybe<Scalars['String']>;
  userId: Scalars['Int'];
};

export type MovieReviewLike = {
  __typename?: 'MovieReviewLike';
  createdAt: Scalars['DateTime'];
  movieReview: MovieReview;
  reviewMovieId: Scalars['Int'];
  reviewUserId: Scalars['Int'];
  user: User;
  userId: Scalars['Int'];
};

export type MovieReviewLikeAvgAggregate = {
  __typename?: 'MovieReviewLikeAvgAggregate';
  reviewMovieId?: Maybe<Scalars['Float']>;
  reviewUserId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type MovieReviewLikeAvgOrderByAggregateInput = {
  reviewMovieId?: InputMaybe<SortOrder>;
  reviewUserId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieReviewLikeCountAggregate = {
  __typename?: 'MovieReviewLikeCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  reviewMovieId: Scalars['Int'];
  reviewUserId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type MovieReviewLikeCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  reviewMovieId?: InputMaybe<SortOrder>;
  reviewUserId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieReviewLikeCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  movieReview: MovieReviewCreateNestedOneWithoutLikesInput;
  user: UserCreateNestedOneWithoutLikedMovieReviewsInput;
};

export type MovieReviewLikeCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  reviewMovieId: Scalars['Int'];
  reviewUserId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type MovieReviewLikeCreateManyMovieReviewInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type MovieReviewLikeCreateManyMovieReviewInputEnvelope = {
  data: MovieReviewLikeCreateManyMovieReviewInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MovieReviewLikeCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  reviewMovieId: Scalars['Int'];
  reviewUserId: Scalars['Int'];
};

export type MovieReviewLikeCreateManyUserInputEnvelope = {
  data: MovieReviewLikeCreateManyUserInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MovieReviewLikeCreateNestedManyWithoutMovieReviewInput = {
  connect?: InputMaybe<MovieReviewLikeWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<MovieReviewLikeCreateOrConnectWithoutMovieReviewInput[]>;
  create?: InputMaybe<MovieReviewLikeCreateWithoutMovieReviewInput[]>;
  createMany?: InputMaybe<MovieReviewLikeCreateManyMovieReviewInputEnvelope>;
};

export type MovieReviewLikeCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<MovieReviewLikeWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<MovieReviewLikeCreateOrConnectWithoutUserInput[]>;
  create?: InputMaybe<MovieReviewLikeCreateWithoutUserInput[]>;
  createMany?: InputMaybe<MovieReviewLikeCreateManyUserInputEnvelope>;
};

export type MovieReviewLikeCreateOrConnectWithoutMovieReviewInput = {
  create: MovieReviewLikeCreateWithoutMovieReviewInput;
  where: MovieReviewLikeWhereUniqueInput;
};

export type MovieReviewLikeCreateOrConnectWithoutUserInput = {
  create: MovieReviewLikeCreateWithoutUserInput;
  where: MovieReviewLikeWhereUniqueInput;
};

export type MovieReviewLikeCreateWithoutMovieReviewInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutLikedMovieReviewsInput;
};

export type MovieReviewLikeCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  movieReview: MovieReviewCreateNestedOneWithoutLikesInput;
};

export type MovieReviewLikeGroupBy = {
  __typename?: 'MovieReviewLikeGroupBy';
  _avg?: Maybe<MovieReviewLikeAvgAggregate>;
  _count?: Maybe<MovieReviewLikeCountAggregate>;
  _max?: Maybe<MovieReviewLikeMaxAggregate>;
  _min?: Maybe<MovieReviewLikeMinAggregate>;
  _sum?: Maybe<MovieReviewLikeSumAggregate>;
  createdAt: Scalars['DateTime'];
  reviewMovieId: Scalars['Int'];
  reviewUserId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type MovieReviewLikeListRelationFilter = {
  every?: InputMaybe<MovieReviewLikeWhereInput>;
  none?: InputMaybe<MovieReviewLikeWhereInput>;
  some?: InputMaybe<MovieReviewLikeWhereInput>;
};

export type MovieReviewLikeMaxAggregate = {
  __typename?: 'MovieReviewLikeMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  reviewMovieId?: Maybe<Scalars['Int']>;
  reviewUserId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type MovieReviewLikeMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  reviewMovieId?: InputMaybe<SortOrder>;
  reviewUserId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieReviewLikeMinAggregate = {
  __typename?: 'MovieReviewLikeMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  reviewMovieId?: Maybe<Scalars['Int']>;
  reviewUserId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type MovieReviewLikeMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  reviewMovieId?: InputMaybe<SortOrder>;
  reviewUserId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieReviewLikeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MovieReviewLikeOrderByWithAggregationInput = {
  _avg?: InputMaybe<MovieReviewLikeAvgOrderByAggregateInput>;
  _count?: InputMaybe<MovieReviewLikeCountOrderByAggregateInput>;
  _max?: InputMaybe<MovieReviewLikeMaxOrderByAggregateInput>;
  _min?: InputMaybe<MovieReviewLikeMinOrderByAggregateInput>;
  _sum?: InputMaybe<MovieReviewLikeSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  reviewMovieId?: InputMaybe<SortOrder>;
  reviewUserId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieReviewLikeOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  movieReview?: InputMaybe<MovieReviewOrderByWithRelationInput>;
  reviewMovieId?: InputMaybe<SortOrder>;
  reviewUserId?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum MovieReviewLikeScalarFieldEnum {
  CreatedAt = 'createdAt',
  ReviewMovieId = 'reviewMovieId',
  ReviewUserId = 'reviewUserId',
  UserId = 'userId'
}

export type MovieReviewLikeScalarWhereInput = {
  AND?: InputMaybe<MovieReviewLikeScalarWhereInput[]>;
  NOT?: InputMaybe<MovieReviewLikeScalarWhereInput[]>;
  OR?: InputMaybe<MovieReviewLikeScalarWhereInput[]>;
  createdAt?: InputMaybe<DateTimeFilter>;
  reviewMovieId?: InputMaybe<IntFilter>;
  reviewUserId?: InputMaybe<IntFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type MovieReviewLikeScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<MovieReviewLikeScalarWhereWithAggregatesInput[]>;
  NOT?: InputMaybe<MovieReviewLikeScalarWhereWithAggregatesInput[]>;
  OR?: InputMaybe<MovieReviewLikeScalarWhereWithAggregatesInput[]>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  reviewMovieId?: InputMaybe<IntWithAggregatesFilter>;
  reviewUserId?: InputMaybe<IntWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
};

export type MovieReviewLikeSumAggregate = {
  __typename?: 'MovieReviewLikeSumAggregate';
  reviewMovieId?: Maybe<Scalars['Int']>;
  reviewUserId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type MovieReviewLikeSumOrderByAggregateInput = {
  reviewMovieId?: InputMaybe<SortOrder>;
  reviewUserId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieReviewLikeUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  movieReview?: InputMaybe<MovieReviewUpdateOneRequiredWithoutLikesInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutLikedMovieReviewsInput>;
};

export type MovieReviewLikeUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieReviewLikeUpdateManyWithWhereWithoutMovieReviewInput = {
  data: MovieReviewLikeUpdateManyMutationInput;
  where: MovieReviewLikeScalarWhereInput;
};

export type MovieReviewLikeUpdateManyWithWhereWithoutUserInput = {
  data: MovieReviewLikeUpdateManyMutationInput;
  where: MovieReviewLikeScalarWhereInput;
};

export type MovieReviewLikeUpdateManyWithoutMovieReviewInput = {
  connect?: InputMaybe<MovieReviewLikeWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<MovieReviewLikeCreateOrConnectWithoutMovieReviewInput[]>;
  create?: InputMaybe<MovieReviewLikeCreateWithoutMovieReviewInput[]>;
  createMany?: InputMaybe<MovieReviewLikeCreateManyMovieReviewInputEnvelope>;
  delete?: InputMaybe<MovieReviewLikeWhereUniqueInput[]>;
  deleteMany?: InputMaybe<MovieReviewLikeScalarWhereInput[]>;
  disconnect?: InputMaybe<MovieReviewLikeWhereUniqueInput[]>;
  set?: InputMaybe<MovieReviewLikeWhereUniqueInput[]>;
  update?: InputMaybe<MovieReviewLikeUpdateWithWhereUniqueWithoutMovieReviewInput[]>;
  updateMany?: InputMaybe<MovieReviewLikeUpdateManyWithWhereWithoutMovieReviewInput[]>;
  upsert?: InputMaybe<MovieReviewLikeUpsertWithWhereUniqueWithoutMovieReviewInput[]>;
};

export type MovieReviewLikeUpdateManyWithoutUserInput = {
  connect?: InputMaybe<MovieReviewLikeWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<MovieReviewLikeCreateOrConnectWithoutUserInput[]>;
  create?: InputMaybe<MovieReviewLikeCreateWithoutUserInput[]>;
  createMany?: InputMaybe<MovieReviewLikeCreateManyUserInputEnvelope>;
  delete?: InputMaybe<MovieReviewLikeWhereUniqueInput[]>;
  deleteMany?: InputMaybe<MovieReviewLikeScalarWhereInput[]>;
  disconnect?: InputMaybe<MovieReviewLikeWhereUniqueInput[]>;
  set?: InputMaybe<MovieReviewLikeWhereUniqueInput[]>;
  update?: InputMaybe<MovieReviewLikeUpdateWithWhereUniqueWithoutUserInput[]>;
  updateMany?: InputMaybe<MovieReviewLikeUpdateManyWithWhereWithoutUserInput[]>;
  upsert?: InputMaybe<MovieReviewLikeUpsertWithWhereUniqueWithoutUserInput[]>;
};

export type MovieReviewLikeUpdateWithWhereUniqueWithoutMovieReviewInput = {
  data: MovieReviewLikeUpdateWithoutMovieReviewInput;
  where: MovieReviewLikeWhereUniqueInput;
};

export type MovieReviewLikeUpdateWithWhereUniqueWithoutUserInput = {
  data: MovieReviewLikeUpdateWithoutUserInput;
  where: MovieReviewLikeWhereUniqueInput;
};

export type MovieReviewLikeUpdateWithoutMovieReviewInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutLikedMovieReviewsInput>;
};

export type MovieReviewLikeUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  movieReview?: InputMaybe<MovieReviewUpdateOneRequiredWithoutLikesInput>;
};

export type MovieReviewLikeUpsertWithWhereUniqueWithoutMovieReviewInput = {
  create: MovieReviewLikeCreateWithoutMovieReviewInput;
  update: MovieReviewLikeUpdateWithoutMovieReviewInput;
  where: MovieReviewLikeWhereUniqueInput;
};

export type MovieReviewLikeUpsertWithWhereUniqueWithoutUserInput = {
  create: MovieReviewLikeCreateWithoutUserInput;
  update: MovieReviewLikeUpdateWithoutUserInput;
  where: MovieReviewLikeWhereUniqueInput;
};

export type MovieReviewLikeUserIdReviewUserIdReviewMovieIdCompoundUniqueInput = {
  reviewMovieId: Scalars['Int'];
  reviewUserId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type MovieReviewLikeWhereInput = {
  AND?: InputMaybe<MovieReviewLikeWhereInput[]>;
  NOT?: InputMaybe<MovieReviewLikeWhereInput[]>;
  OR?: InputMaybe<MovieReviewLikeWhereInput[]>;
  createdAt?: InputMaybe<DateTimeFilter>;
  movieReview?: InputMaybe<MovieReviewRelationFilter>;
  reviewMovieId?: InputMaybe<IntFilter>;
  reviewUserId?: InputMaybe<IntFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type MovieReviewLikeWhereUniqueInput = {
  userId_reviewUserId_reviewMovieId?: InputMaybe<MovieReviewLikeUserIdReviewUserIdReviewMovieIdCompoundUniqueInput>;
};

export type MovieReviewListRelationFilter = {
  every?: InputMaybe<MovieReviewWhereInput>;
  none?: InputMaybe<MovieReviewWhereInput>;
  some?: InputMaybe<MovieReviewWhereInput>;
};

export type MovieReviewMaxAggregate = {
  __typename?: 'MovieReviewMaxAggregate';
  movieId?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
  review?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

export type MovieReviewMaxOrderByAggregateInput = {
  movieId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  review?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieReviewMinAggregate = {
  __typename?: 'MovieReviewMinAggregate';
  movieId?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
  review?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

export type MovieReviewMinOrderByAggregateInput = {
  movieId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  review?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieReviewOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MovieReviewOrderByWithAggregationInput = {
  _avg?: InputMaybe<MovieReviewAvgOrderByAggregateInput>;
  _count?: InputMaybe<MovieReviewCountOrderByAggregateInput>;
  _max?: InputMaybe<MovieReviewMaxOrderByAggregateInput>;
  _min?: InputMaybe<MovieReviewMinOrderByAggregateInput>;
  _sum?: InputMaybe<MovieReviewSumOrderByAggregateInput>;
  movieId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  review?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieReviewOrderByWithRelationInput = {
  likes?: InputMaybe<MovieReviewLikeOrderByRelationAggregateInput>;
  movie?: InputMaybe<MovieOrderByWithRelationInput>;
  movieId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  review?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieReviewRelationFilter = {
  is?: InputMaybe<MovieReviewWhereInput>;
  isNot?: InputMaybe<MovieReviewWhereInput>;
};

export enum MovieReviewScalarFieldEnum {
  MovieId = 'movieId',
  Rating = 'rating',
  Review = 'review',
  UserId = 'userId'
}

export type MovieReviewScalarWhereInput = {
  AND?: InputMaybe<MovieReviewScalarWhereInput[]>;
  NOT?: InputMaybe<MovieReviewScalarWhereInput[]>;
  OR?: InputMaybe<MovieReviewScalarWhereInput[]>;
  movieId?: InputMaybe<IntFilter>;
  rating?: InputMaybe<IntFilter>;
  review?: InputMaybe<StringNullableFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type MovieReviewScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<MovieReviewScalarWhereWithAggregatesInput[]>;
  NOT?: InputMaybe<MovieReviewScalarWhereWithAggregatesInput[]>;
  OR?: InputMaybe<MovieReviewScalarWhereWithAggregatesInput[]>;
  movieId?: InputMaybe<IntWithAggregatesFilter>;
  rating?: InputMaybe<IntWithAggregatesFilter>;
  review?: InputMaybe<StringNullableWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
};

export type MovieReviewSumAggregate = {
  __typename?: 'MovieReviewSumAggregate';
  movieId?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type MovieReviewSumOrderByAggregateInput = {
  movieId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieReviewUpdateInput = {
  likes?: InputMaybe<MovieReviewLikeUpdateManyWithoutMovieReviewInput>;
  movie?: InputMaybe<MovieUpdateOneRequiredWithoutReviewsInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  review?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutMovieReviewsInput>;
};

export type MovieReviewUpdateManyMutationInput = {
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  review?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type MovieReviewUpdateManyWithWhereWithoutMovieInput = {
  data: MovieReviewUpdateManyMutationInput;
  where: MovieReviewScalarWhereInput;
};

export type MovieReviewUpdateManyWithWhereWithoutUserInput = {
  data: MovieReviewUpdateManyMutationInput;
  where: MovieReviewScalarWhereInput;
};

export type MovieReviewUpdateManyWithoutMovieInput = {
  connect?: InputMaybe<MovieReviewWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<MovieReviewCreateOrConnectWithoutMovieInput[]>;
  create?: InputMaybe<MovieReviewCreateWithoutMovieInput[]>;
  createMany?: InputMaybe<MovieReviewCreateManyMovieInputEnvelope>;
  delete?: InputMaybe<MovieReviewWhereUniqueInput[]>;
  deleteMany?: InputMaybe<MovieReviewScalarWhereInput[]>;
  disconnect?: InputMaybe<MovieReviewWhereUniqueInput[]>;
  set?: InputMaybe<MovieReviewWhereUniqueInput[]>;
  update?: InputMaybe<MovieReviewUpdateWithWhereUniqueWithoutMovieInput[]>;
  updateMany?: InputMaybe<MovieReviewUpdateManyWithWhereWithoutMovieInput[]>;
  upsert?: InputMaybe<MovieReviewUpsertWithWhereUniqueWithoutMovieInput[]>;
};

export type MovieReviewUpdateManyWithoutUserInput = {
  connect?: InputMaybe<MovieReviewWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<MovieReviewCreateOrConnectWithoutUserInput[]>;
  create?: InputMaybe<MovieReviewCreateWithoutUserInput[]>;
  createMany?: InputMaybe<MovieReviewCreateManyUserInputEnvelope>;
  delete?: InputMaybe<MovieReviewWhereUniqueInput[]>;
  deleteMany?: InputMaybe<MovieReviewScalarWhereInput[]>;
  disconnect?: InputMaybe<MovieReviewWhereUniqueInput[]>;
  set?: InputMaybe<MovieReviewWhereUniqueInput[]>;
  update?: InputMaybe<MovieReviewUpdateWithWhereUniqueWithoutUserInput[]>;
  updateMany?: InputMaybe<MovieReviewUpdateManyWithWhereWithoutUserInput[]>;
  upsert?: InputMaybe<MovieReviewUpsertWithWhereUniqueWithoutUserInput[]>;
};

export type MovieReviewUpdateOneRequiredWithoutLikesInput = {
  connect?: InputMaybe<MovieReviewWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieReviewCreateOrConnectWithoutLikesInput>;
  create?: InputMaybe<MovieReviewCreateWithoutLikesInput>;
  update?: InputMaybe<MovieReviewUpdateWithoutLikesInput>;
  upsert?: InputMaybe<MovieReviewUpsertWithoutLikesInput>;
};

export type MovieReviewUpdateWithWhereUniqueWithoutMovieInput = {
  data: MovieReviewUpdateWithoutMovieInput;
  where: MovieReviewWhereUniqueInput;
};

export type MovieReviewUpdateWithWhereUniqueWithoutUserInput = {
  data: MovieReviewUpdateWithoutUserInput;
  where: MovieReviewWhereUniqueInput;
};

export type MovieReviewUpdateWithoutLikesInput = {
  movie?: InputMaybe<MovieUpdateOneRequiredWithoutReviewsInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  review?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutMovieReviewsInput>;
};

export type MovieReviewUpdateWithoutMovieInput = {
  likes?: InputMaybe<MovieReviewLikeUpdateManyWithoutMovieReviewInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  review?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutMovieReviewsInput>;
};

export type MovieReviewUpdateWithoutUserInput = {
  likes?: InputMaybe<MovieReviewLikeUpdateManyWithoutMovieReviewInput>;
  movie?: InputMaybe<MovieUpdateOneRequiredWithoutReviewsInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  review?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type MovieReviewUpsertWithWhereUniqueWithoutMovieInput = {
  create: MovieReviewCreateWithoutMovieInput;
  update: MovieReviewUpdateWithoutMovieInput;
  where: MovieReviewWhereUniqueInput;
};

export type MovieReviewUpsertWithWhereUniqueWithoutUserInput = {
  create: MovieReviewCreateWithoutUserInput;
  update: MovieReviewUpdateWithoutUserInput;
  where: MovieReviewWhereUniqueInput;
};

export type MovieReviewUpsertWithoutLikesInput = {
  create: MovieReviewCreateWithoutLikesInput;
  update: MovieReviewUpdateWithoutLikesInput;
};

export type MovieReviewUserIdMovieIdCompoundUniqueInput = {
  movieId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type MovieReviewWhereInput = {
  AND?: InputMaybe<MovieReviewWhereInput[]>;
  NOT?: InputMaybe<MovieReviewWhereInput[]>;
  OR?: InputMaybe<MovieReviewWhereInput[]>;
  likes?: InputMaybe<MovieReviewLikeListRelationFilter>;
  movie?: InputMaybe<MovieRelationFilter>;
  movieId?: InputMaybe<IntFilter>;
  rating?: InputMaybe<IntFilter>;
  review?: InputMaybe<StringNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type MovieReviewWhereUniqueInput = {
  userId_movieId?: InputMaybe<MovieReviewUserIdMovieIdCompoundUniqueInput>;
};

export enum MovieScalarFieldEnum {
  Backdrop = 'backdrop',
  CreatedAt = 'createdAt',
  Id = 'id',
  Locked = 'locked',
  Overview = 'overview',
  Poster = 'poster',
  Rating = 'rating',
  Released = 'released',
  Runtime = 'runtime',
  Tagline = 'tagline',
  Title = 'title',
  Trailer = 'trailer',
  UpdatedAt = 'updatedAt'
}

export type MovieScalarWhereInput = {
  AND?: InputMaybe<MovieScalarWhereInput[]>;
  NOT?: InputMaybe<MovieScalarWhereInput[]>;
  OR?: InputMaybe<MovieScalarWhereInput[]>;
  backdrop?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  locked?: InputMaybe<BoolFilter>;
  overview?: InputMaybe<StringFilter>;
  poster?: InputMaybe<StringFilter>;
  rating?: InputMaybe<StringNullableFilter>;
  released?: InputMaybe<DateTimeNullableFilter>;
  runtime?: InputMaybe<FloatNullableFilter>;
  tagline?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  trailer?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MovieScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<MovieScalarWhereWithAggregatesInput[]>;
  NOT?: InputMaybe<MovieScalarWhereWithAggregatesInput[]>;
  OR?: InputMaybe<MovieScalarWhereWithAggregatesInput[]>;
  backdrop?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  locked?: InputMaybe<BoolWithAggregatesFilter>;
  overview?: InputMaybe<StringWithAggregatesFilter>;
  poster?: InputMaybe<StringWithAggregatesFilter>;
  rating?: InputMaybe<StringNullableWithAggregatesFilter>;
  released?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  runtime?: InputMaybe<FloatNullableWithAggregatesFilter>;
  tagline?: InputMaybe<StringWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  trailer?: InputMaybe<StringNullableWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type MovieSumAggregate = {
  __typename?: 'MovieSumAggregate';
  id?: Maybe<Scalars['Int']>;
  runtime?: Maybe<Scalars['Float']>;
};

export type MovieSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  runtime?: InputMaybe<SortOrder>;
};

export type MovieUpdateInput = {
  actors?: InputMaybe<ActorInMovieUpdateManyWithoutMovieInput>;
  backdrop?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutMoviesInput>;
  likes?: InputMaybe<MovieLikeUpdateManyWithoutMovieInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  overview?: InputMaybe<StringFieldUpdateOperationsInput>;
  platforms?: InputMaybe<PlatformUpdateManyWithoutMoviesInput>;
  poster?: InputMaybe<StringFieldUpdateOperationsInput>;
  rating?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  reviews?: InputMaybe<MovieReviewUpdateManyWithoutMovieInput>;
  runtime?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  soundtrack?: InputMaybe<SongInMovieUpdateManyWithoutMovieInput>;
  tagline?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  trailer?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<WatchlistUpdateManyWithoutMoviesInput>;
};

export type MovieUpdateManyMutationInput = {
  backdrop?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  overview?: InputMaybe<StringFieldUpdateOperationsInput>;
  poster?: InputMaybe<StringFieldUpdateOperationsInput>;
  rating?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  runtime?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  tagline?: InputMaybe<StringFieldUpdateOperationsInput>;
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

export type MovieUpdateOneRequiredWithoutLikesInput = {
  connect?: InputMaybe<MovieWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutLikesInput>;
  create?: InputMaybe<MovieCreateWithoutLikesInput>;
  update?: InputMaybe<MovieUpdateWithoutLikesInput>;
  upsert?: InputMaybe<MovieUpsertWithoutLikesInput>;
};

export type MovieUpdateOneRequiredWithoutReviewsInput = {
  connect?: InputMaybe<MovieWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutReviewsInput>;
  create?: InputMaybe<MovieCreateWithoutReviewsInput>;
  update?: InputMaybe<MovieUpdateWithoutReviewsInput>;
  upsert?: InputMaybe<MovieUpsertWithoutReviewsInput>;
};

export type MovieUpdateOneRequiredWithoutSoundtrackInput = {
  connect?: InputMaybe<MovieWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutSoundtrackInput>;
  create?: InputMaybe<MovieCreateWithoutSoundtrackInput>;
  update?: InputMaybe<MovieUpdateWithoutSoundtrackInput>;
  upsert?: InputMaybe<MovieUpsertWithoutSoundtrackInput>;
};

export type MovieUpdateWithWhereUniqueWithoutGenresInput = {
  data: MovieUpdateWithoutGenresInput;
  where: MovieWhereUniqueInput;
};

export type MovieUpdateWithWhereUniqueWithoutPlatformsInput = {
  data: MovieUpdateWithoutPlatformsInput;
  where: MovieWhereUniqueInput;
};

export type MovieUpdateWithWhereUniqueWithoutWatchlistInput = {
  data: MovieUpdateWithoutWatchlistInput;
  where: MovieWhereUniqueInput;
};

export type MovieUpdateWithoutActorsInput = {
  backdrop?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutMoviesInput>;
  likes?: InputMaybe<MovieLikeUpdateManyWithoutMovieInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  overview?: InputMaybe<StringFieldUpdateOperationsInput>;
  platforms?: InputMaybe<PlatformUpdateManyWithoutMoviesInput>;
  poster?: InputMaybe<StringFieldUpdateOperationsInput>;
  rating?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  reviews?: InputMaybe<MovieReviewUpdateManyWithoutMovieInput>;
  runtime?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  soundtrack?: InputMaybe<SongInMovieUpdateManyWithoutMovieInput>;
  tagline?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  trailer?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<WatchlistUpdateManyWithoutMoviesInput>;
};

export type MovieUpdateWithoutGenresInput = {
  actors?: InputMaybe<ActorInMovieUpdateManyWithoutMovieInput>;
  backdrop?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  likes?: InputMaybe<MovieLikeUpdateManyWithoutMovieInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  overview?: InputMaybe<StringFieldUpdateOperationsInput>;
  platforms?: InputMaybe<PlatformUpdateManyWithoutMoviesInput>;
  poster?: InputMaybe<StringFieldUpdateOperationsInput>;
  rating?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  reviews?: InputMaybe<MovieReviewUpdateManyWithoutMovieInput>;
  runtime?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  soundtrack?: InputMaybe<SongInMovieUpdateManyWithoutMovieInput>;
  tagline?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  trailer?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<WatchlistUpdateManyWithoutMoviesInput>;
};

export type MovieUpdateWithoutLikesInput = {
  actors?: InputMaybe<ActorInMovieUpdateManyWithoutMovieInput>;
  backdrop?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutMoviesInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  overview?: InputMaybe<StringFieldUpdateOperationsInput>;
  platforms?: InputMaybe<PlatformUpdateManyWithoutMoviesInput>;
  poster?: InputMaybe<StringFieldUpdateOperationsInput>;
  rating?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  reviews?: InputMaybe<MovieReviewUpdateManyWithoutMovieInput>;
  runtime?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  soundtrack?: InputMaybe<SongInMovieUpdateManyWithoutMovieInput>;
  tagline?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  trailer?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<WatchlistUpdateManyWithoutMoviesInput>;
};

export type MovieUpdateWithoutPlatformsInput = {
  actors?: InputMaybe<ActorInMovieUpdateManyWithoutMovieInput>;
  backdrop?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutMoviesInput>;
  likes?: InputMaybe<MovieLikeUpdateManyWithoutMovieInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  overview?: InputMaybe<StringFieldUpdateOperationsInput>;
  poster?: InputMaybe<StringFieldUpdateOperationsInput>;
  rating?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  reviews?: InputMaybe<MovieReviewUpdateManyWithoutMovieInput>;
  runtime?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  soundtrack?: InputMaybe<SongInMovieUpdateManyWithoutMovieInput>;
  tagline?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  trailer?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<WatchlistUpdateManyWithoutMoviesInput>;
};

export type MovieUpdateWithoutReviewsInput = {
  actors?: InputMaybe<ActorInMovieUpdateManyWithoutMovieInput>;
  backdrop?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutMoviesInput>;
  likes?: InputMaybe<MovieLikeUpdateManyWithoutMovieInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  overview?: InputMaybe<StringFieldUpdateOperationsInput>;
  platforms?: InputMaybe<PlatformUpdateManyWithoutMoviesInput>;
  poster?: InputMaybe<StringFieldUpdateOperationsInput>;
  rating?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  runtime?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  soundtrack?: InputMaybe<SongInMovieUpdateManyWithoutMovieInput>;
  tagline?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  trailer?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<WatchlistUpdateManyWithoutMoviesInput>;
};

export type MovieUpdateWithoutSoundtrackInput = {
  actors?: InputMaybe<ActorInMovieUpdateManyWithoutMovieInput>;
  backdrop?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutMoviesInput>;
  likes?: InputMaybe<MovieLikeUpdateManyWithoutMovieInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  overview?: InputMaybe<StringFieldUpdateOperationsInput>;
  platforms?: InputMaybe<PlatformUpdateManyWithoutMoviesInput>;
  poster?: InputMaybe<StringFieldUpdateOperationsInput>;
  rating?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  reviews?: InputMaybe<MovieReviewUpdateManyWithoutMovieInput>;
  runtime?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  tagline?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  trailer?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<WatchlistUpdateManyWithoutMoviesInput>;
};

export type MovieUpdateWithoutWatchlistInput = {
  actors?: InputMaybe<ActorInMovieUpdateManyWithoutMovieInput>;
  backdrop?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutMoviesInput>;
  likes?: InputMaybe<MovieLikeUpdateManyWithoutMovieInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  overview?: InputMaybe<StringFieldUpdateOperationsInput>;
  platforms?: InputMaybe<PlatformUpdateManyWithoutMoviesInput>;
  poster?: InputMaybe<StringFieldUpdateOperationsInput>;
  rating?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  reviews?: InputMaybe<MovieReviewUpdateManyWithoutMovieInput>;
  runtime?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  soundtrack?: InputMaybe<SongInMovieUpdateManyWithoutMovieInput>;
  tagline?: InputMaybe<StringFieldUpdateOperationsInput>;
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

export type MovieUpsertWithWhereUniqueWithoutWatchlistInput = {
  create: MovieCreateWithoutWatchlistInput;
  update: MovieUpdateWithoutWatchlistInput;
  where: MovieWhereUniqueInput;
};

export type MovieUpsertWithoutActorsInput = {
  create: MovieCreateWithoutActorsInput;
  update: MovieUpdateWithoutActorsInput;
};

export type MovieUpsertWithoutLikesInput = {
  create: MovieCreateWithoutLikesInput;
  update: MovieUpdateWithoutLikesInput;
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
  backdrop?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  genres?: InputMaybe<GenreListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  likes?: InputMaybe<MovieLikeListRelationFilter>;
  locked?: InputMaybe<BoolFilter>;
  overview?: InputMaybe<StringFilter>;
  platforms?: InputMaybe<PlatformListRelationFilter>;
  poster?: InputMaybe<StringFilter>;
  rating?: InputMaybe<StringNullableFilter>;
  released?: InputMaybe<DateTimeNullableFilter>;
  reviews?: InputMaybe<MovieReviewListRelationFilter>;
  runtime?: InputMaybe<FloatNullableFilter>;
  soundtrack?: InputMaybe<SongInMovieListRelationFilter>;
  tagline?: InputMaybe<StringFilter>;
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
  addArtist?: Maybe<Book>;
  changePassword: User;
  confirm: Scalars['Boolean'];
  createActorInMovie: Scalars['Boolean'];
  createActorInShow: Scalars['Boolean'];
  createBook?: Maybe<Book>;
  createBookReview: BookReview;
  createBookReviewLike: BookReviewLike;
  createBookeReview: BookReview;
  createFollows: Follows;
  createGenre: Genre;
  createManyActorInMovie: AffectedRowsOutput;
  createManyActorInShow: AffectedRowsOutput;
  createManyBook: AffectedRowsOutput;
  createManyBookReview: AffectedRowsOutput;
  createManyBookReviewLike: AffectedRowsOutput;
  createManyFollows: AffectedRowsOutput;
  createManyGenre: AffectedRowsOutput;
  createManyMovie: AffectedRowsOutput;
  createManyMovieLike: AffectedRowsOutput;
  createManyMovieReview: AffectedRowsOutput;
  createManyMovieReviewLike: AffectedRowsOutput;
  createManyNotification: AffectedRowsOutput;
  createManyPerson: AffectedRowsOutput;
  createManyPlatform: AffectedRowsOutput;
  createManyShow: AffectedRowsOutput;
  createManyShowLike: AffectedRowsOutput;
  createManyShowReview: AffectedRowsOutput;
  createManyShowReviewLike: AffectedRowsOutput;
  createManySong: AffectedRowsOutput;
  createManySongInMovie: AffectedRowsOutput;
  createManySongInShow: AffectedRowsOutput;
  createManySongReview: AffectedRowsOutput;
  createManySongReviewLike: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createManyWatchlist: AffectedRowsOutput;
  createMovie: Movie;
  createMovieLike: MovieLike;
  createMovieReview: Scalars['Boolean'];
  createMovieReviewLike: Scalars['Boolean'];
  createNotification: Notification;
  createPerson: Person;
  createPlatform: Platform;
  createShow: Show;
  createShowLike: ShowLike;
  createShowReview: Scalars['Boolean'];
  createShowReviewLike: Scalars['Boolean'];
  createSong: Song;
  createSongInMovie: Scalars['Boolean'];
  createSongInShow: Scalars['Boolean'];
  createSongReview: SongReview;
  createSongReviewLike: SongReviewLike;
  createUser: User;
  createWatchlist: Watchlist;
  deleteActorInMovie?: Maybe<Scalars['Boolean']>;
  deleteActorInShow?: Maybe<Scalars['Boolean']>;
  deleteBook?: Maybe<Book>;
  deleteBookReview?: Maybe<BookReview>;
  deleteBookReviewLike?: Maybe<BookReviewLike>;
  deleteFollows?: Maybe<Follows>;
  deleteGenre?: Maybe<Genre>;
  deleteManyActorInMovie: AffectedRowsOutput;
  deleteManyActorInShow: AffectedRowsOutput;
  deleteManyBook: AffectedRowsOutput;
  deleteManyBookReview: AffectedRowsOutput;
  deleteManyBookReviewLike: AffectedRowsOutput;
  deleteManyFollows: AffectedRowsOutput;
  deleteManyGenre: AffectedRowsOutput;
  deleteManyMovie: AffectedRowsOutput;
  deleteManyMovieLike: AffectedRowsOutput;
  deleteManyMovieReview: AffectedRowsOutput;
  deleteManyMovieReviewLike: AffectedRowsOutput;
  deleteManyNotification: AffectedRowsOutput;
  deleteManyPerson: AffectedRowsOutput;
  deleteManyPlatform: AffectedRowsOutput;
  deleteManyShow: AffectedRowsOutput;
  deleteManyShowLike: AffectedRowsOutput;
  deleteManyShowReview: AffectedRowsOutput;
  deleteManyShowReviewLike: AffectedRowsOutput;
  deleteManySong: AffectedRowsOutput;
  deleteManySongInMovie: AffectedRowsOutput;
  deleteManySongInShow: AffectedRowsOutput;
  deleteManySongReview: AffectedRowsOutput;
  deleteManySongReviewLike: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteManyWatchlist: AffectedRowsOutput;
  deleteMovie?: Maybe<Movie>;
  deleteMovieLike?: Maybe<MovieLike>;
  deleteMovieReview: Scalars['Boolean'];
  deleteMovieReviewLike?: Maybe<Scalars['Boolean']>;
  deleteNotification?: Maybe<Notification>;
  deletePerson?: Maybe<Person>;
  deletePlatform?: Maybe<Platform>;
  deleteShow?: Maybe<Show>;
  deleteShowLike?: Maybe<ShowLike>;
  deleteShowReview: Scalars['Boolean'];
  deleteShowReviewLike?: Maybe<Scalars['Boolean']>;
  deleteSong?: Maybe<Song>;
  deleteSongInMovie?: Maybe<Scalars['Boolean']>;
  deleteSongInShow?: Maybe<Scalars['Boolean']>;
  deleteSongReview?: Maybe<SongReview>;
  deleteSongReviewLike?: Maybe<SongReviewLike>;
  deleteUser?: Maybe<User>;
  deleteWatchlist?: Maybe<Watchlist>;
  editBook?: Maybe<Book>;
  editMovie?: Maybe<Movie>;
  editPerson?: Maybe<Person>;
  editShow?: Maybe<Show>;
  follow: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  likeMovie: Scalars['Boolean'];
  likeShow: Scalars['Boolean'];
  lockBook?: Maybe<Book>;
  lockMovie?: Maybe<Movie>;
  lockShow?: Maybe<Show>;
  login: User;
  logout: Scalars['Boolean'];
  register: User;
  removeArtist?: Maybe<Book>;
  unfollow: Scalars['Boolean'];
  unlikeMovie: Scalars['Boolean'];
  unlikeShow: Scalars['Boolean'];
  updateActorInMovie?: Maybe<ActorInMovie>;
  updateActorInShow?: Maybe<ActorInShow>;
  updateBook?: Maybe<Book>;
  updateBookReview?: Maybe<BookReview>;
  updateBookReviewLike?: Maybe<BookReviewLike>;
  updateFollows?: Maybe<Follows>;
  updateGenre?: Maybe<Genre>;
  updateManyActorInMovie: AffectedRowsOutput;
  updateManyActorInShow: AffectedRowsOutput;
  updateManyBook: AffectedRowsOutput;
  updateManyBookReview: AffectedRowsOutput;
  updateManyBookReviewLike: AffectedRowsOutput;
  updateManyFollows: AffectedRowsOutput;
  updateManyGenre: AffectedRowsOutput;
  updateManyMovie: AffectedRowsOutput;
  updateManyMovieLike: AffectedRowsOutput;
  updateManyMovieReview: AffectedRowsOutput;
  updateManyMovieReviewLike: AffectedRowsOutput;
  updateManyNotification: AffectedRowsOutput;
  updateManyPerson: AffectedRowsOutput;
  updateManyPlatform: AffectedRowsOutput;
  updateManyShow: AffectedRowsOutput;
  updateManyShowLike: AffectedRowsOutput;
  updateManyShowReview: AffectedRowsOutput;
  updateManyShowReviewLike: AffectedRowsOutput;
  updateManySong: AffectedRowsOutput;
  updateManySongInMovie: AffectedRowsOutput;
  updateManySongInShow: AffectedRowsOutput;
  updateManySongReview: AffectedRowsOutput;
  updateManySongReviewLike: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateManyWatchlist: AffectedRowsOutput;
  updateMovie?: Maybe<Movie>;
  updateMovieLike?: Maybe<MovieLike>;
  updateMovieReview: MovieReview;
  updateMovieReviewLike?: Maybe<MovieReviewLike>;
  updateNotification?: Maybe<Notification>;
  updatePerson?: Maybe<Person>;
  updatePlatform?: Maybe<Platform>;
  updateShow?: Maybe<Show>;
  updateShowLike?: Maybe<ShowLike>;
  updateShowReview: ShowReview;
  updateShowReviewLike?: Maybe<ShowReviewLike>;
  updateSong?: Maybe<Song>;
  updateSongInMovie?: Maybe<SongInMovie>;
  updateSongInShow?: Maybe<SongInShow>;
  updateSongReview?: Maybe<SongReview>;
  updateSongReviewLike?: Maybe<SongReviewLike>;
  updateUser?: Maybe<User>;
  updateWatchlist?: Maybe<Watchlist>;
  uploadAvatar: Scalars['Boolean'];
  uploadBackdrop: Scalars['Boolean'];
  uploadPoster: Scalars['Boolean'];
  upsertActorInMovie: ActorInMovie;
  upsertActorInShow: ActorInShow;
  upsertBook: Book;
  upsertBookReview: BookReview;
  upsertBookReviewLike: BookReviewLike;
  upsertFollows: Follows;
  upsertGenre: Genre;
  upsertMovie: Movie;
  upsertMovieLike: MovieLike;
  upsertMovieReview: MovieReview;
  upsertMovieReviewLike: MovieReviewLike;
  upsertNotification: Notification;
  upsertPerson: Person;
  upsertPlatform: Platform;
  upsertShow: Show;
  upsertShowLike: ShowLike;
  upsertShowReview: ShowReview;
  upsertShowReviewLike: ShowReviewLike;
  upsertSong: Song;
  upsertSongInMovie: SongInMovie;
  upsertSongInShow: SongInShow;
  upsertSongReview: SongReview;
  upsertSongReviewLike: SongReviewLike;
  upsertUser: User;
  upsertWatchlist: Watchlist;
};

export type MutationAddArtistArgs = {
  bookId: Scalars['Int'];
  personId: Scalars['Int'];
};

export type MutationChangePasswordArgs = {
  data: ChangePasswordInput;
};

export type MutationConfirmArgs = {
  token: Scalars['String'];
};

export type MutationCreateActorInMovieArgs = {
  data: ActorInMovieCreateInput;
};

export type MutationCreateActorInShowArgs = {
  data: ActorInShowCreateInput;
};

export type MutationCreateBookArgs = {
  data: BookCreateInput;
};

export type MutationCreateBookReviewArgs = {
  data: BookReviewCreateInput;
};

export type MutationCreateBookReviewLikeArgs = {
  data: BookReviewLikeCreateInput;
};

export type MutationCreateBookeReviewArgs = {
  data: BookReviewCreateInput;
};

export type MutationCreateFollowsArgs = {
  data: FollowsCreateInput;
};

export type MutationCreateGenreArgs = {
  data: GenreCreateInput;
};

export type MutationCreateManyActorInMovieArgs = {
  data: ActorInMovieCreateManyInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MutationCreateManyActorInShowArgs = {
  data: ActorInShowCreateManyInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MutationCreateManyBookArgs = {
  data: BookCreateManyInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MutationCreateManyBookReviewArgs = {
  data: BookReviewCreateManyInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MutationCreateManyBookReviewLikeArgs = {
  data: BookReviewLikeCreateManyInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MutationCreateManyFollowsArgs = {
  data: FollowsCreateManyInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MutationCreateManyGenreArgs = {
  data: GenreCreateManyInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MutationCreateManyMovieArgs = {
  data: MovieCreateManyInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MutationCreateManyMovieLikeArgs = {
  data: MovieLikeCreateManyInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MutationCreateManyMovieReviewArgs = {
  data: MovieReviewCreateManyInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MutationCreateManyMovieReviewLikeArgs = {
  data: MovieReviewLikeCreateManyInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MutationCreateManyNotificationArgs = {
  data: NotificationCreateManyInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MutationCreateManyPersonArgs = {
  data: PersonCreateManyInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MutationCreateManyPlatformArgs = {
  data: PlatformCreateManyInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MutationCreateManyShowArgs = {
  data: ShowCreateManyInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MutationCreateManyShowLikeArgs = {
  data: ShowLikeCreateManyInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MutationCreateManyShowReviewArgs = {
  data: ShowReviewCreateManyInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MutationCreateManyShowReviewLikeArgs = {
  data: ShowReviewLikeCreateManyInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MutationCreateManySongArgs = {
  data: SongCreateManyInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MutationCreateManySongInMovieArgs = {
  data: SongInMovieCreateManyInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MutationCreateManySongInShowArgs = {
  data: SongInShowCreateManyInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MutationCreateManySongReviewArgs = {
  data: SongReviewCreateManyInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MutationCreateManySongReviewLikeArgs = {
  data: SongReviewLikeCreateManyInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MutationCreateManyUserArgs = {
  data: UserCreateManyInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MutationCreateManyWatchlistArgs = {
  data: WatchlistCreateManyInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MutationCreateMovieArgs = {
  data: MovieCreateInput;
};

export type MutationCreateMovieLikeArgs = {
  data: MovieLikeCreateInput;
};

export type MutationCreateMovieReviewArgs = {
  data: MovieReviewCreateCustomInput;
};

export type MutationCreateMovieReviewLikeArgs = {
  data: MovieReviewLikeCreateInput;
};

export type MutationCreateNotificationArgs = {
  data: NotificationCreateInput;
};

export type MutationCreatePersonArgs = {
  data: PersonCreateInput;
};

export type MutationCreatePlatformArgs = {
  data: PlatformCreateInput;
};

export type MutationCreateShowArgs = {
  data: ShowCreateInput;
};

export type MutationCreateShowLikeArgs = {
  data: ShowLikeCreateInput;
};

export type MutationCreateShowReviewArgs = {
  data: ShowReviewCreateCustomInput;
};

export type MutationCreateShowReviewLikeArgs = {
  data: ShowReviewLikeCreateInput;
};

export type MutationCreateSongArgs = {
  data: SongCreateInput;
};

export type MutationCreateSongInMovieArgs = {
  data: SongInMovieCreateInput;
};

export type MutationCreateSongInShowArgs = {
  data: SongInShowCreateInput;
};

export type MutationCreateSongReviewArgs = {
  data: SongReviewCreateInput;
};

export type MutationCreateSongReviewLikeArgs = {
  data: SongReviewLikeCreateInput;
};

export type MutationCreateUserArgs = {
  data: UserCreateInput;
};

export type MutationCreateWatchlistArgs = {
  data: WatchlistCreateInput;
};

export type MutationDeleteActorInMovieArgs = {
  where: ActorInMovieWhereUniqueInput;
};

export type MutationDeleteActorInShowArgs = {
  where: ActorInShowWhereUniqueInput;
};

export type MutationDeleteBookArgs = {
  where: BookWhereUniqueInput;
};

export type MutationDeleteBookReviewArgs = {
  where: BookReviewWhereUniqueInput;
};

export type MutationDeleteBookReviewLikeArgs = {
  where: BookReviewLikeWhereUniqueInput;
};

export type MutationDeleteFollowsArgs = {
  where: FollowsWhereUniqueInput;
};

export type MutationDeleteGenreArgs = {
  where: GenreWhereUniqueInput;
};

export type MutationDeleteManyActorInMovieArgs = {
  where?: InputMaybe<ActorInMovieWhereInput>;
};

export type MutationDeleteManyActorInShowArgs = {
  where?: InputMaybe<ActorInShowWhereInput>;
};

export type MutationDeleteManyBookArgs = {
  where?: InputMaybe<BookWhereInput>;
};

export type MutationDeleteManyBookReviewArgs = {
  where?: InputMaybe<BookReviewWhereInput>;
};

export type MutationDeleteManyBookReviewLikeArgs = {
  where?: InputMaybe<BookReviewLikeWhereInput>;
};

export type MutationDeleteManyFollowsArgs = {
  where?: InputMaybe<FollowsWhereInput>;
};

export type MutationDeleteManyGenreArgs = {
  where?: InputMaybe<GenreWhereInput>;
};

export type MutationDeleteManyMovieArgs = {
  where?: InputMaybe<MovieWhereInput>;
};

export type MutationDeleteManyMovieLikeArgs = {
  where?: InputMaybe<MovieLikeWhereInput>;
};

export type MutationDeleteManyMovieReviewArgs = {
  where?: InputMaybe<MovieReviewWhereInput>;
};

export type MutationDeleteManyMovieReviewLikeArgs = {
  where?: InputMaybe<MovieReviewLikeWhereInput>;
};

export type MutationDeleteManyNotificationArgs = {
  where?: InputMaybe<NotificationWhereInput>;
};

export type MutationDeleteManyPersonArgs = {
  where?: InputMaybe<PersonWhereInput>;
};

export type MutationDeleteManyPlatformArgs = {
  where?: InputMaybe<PlatformWhereInput>;
};

export type MutationDeleteManyShowArgs = {
  where?: InputMaybe<ShowWhereInput>;
};

export type MutationDeleteManyShowLikeArgs = {
  where?: InputMaybe<ShowLikeWhereInput>;
};

export type MutationDeleteManyShowReviewArgs = {
  where?: InputMaybe<ShowReviewWhereInput>;
};

export type MutationDeleteManyShowReviewLikeArgs = {
  where?: InputMaybe<ShowReviewLikeWhereInput>;
};

export type MutationDeleteManySongArgs = {
  where?: InputMaybe<SongWhereInput>;
};

export type MutationDeleteManySongInMovieArgs = {
  where?: InputMaybe<SongInMovieWhereInput>;
};

export type MutationDeleteManySongInShowArgs = {
  where?: InputMaybe<SongInShowWhereInput>;
};

export type MutationDeleteManySongReviewArgs = {
  where?: InputMaybe<SongReviewWhereInput>;
};

export type MutationDeleteManySongReviewLikeArgs = {
  where?: InputMaybe<SongReviewLikeWhereInput>;
};

export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};

export type MutationDeleteManyWatchlistArgs = {
  where?: InputMaybe<WatchlistWhereInput>;
};

export type MutationDeleteMovieArgs = {
  where: MovieWhereUniqueInput;
};

export type MutationDeleteMovieLikeArgs = {
  where: MovieLikeWhereUniqueInput;
};

export type MutationDeleteMovieReviewArgs = {
  movieId: Scalars['Int'];
};

export type MutationDeleteMovieReviewLikeArgs = {
  where: MovieReviewLikeWhereUniqueInput;
};

export type MutationDeleteNotificationArgs = {
  where: NotificationWhereUniqueInput;
};

export type MutationDeletePersonArgs = {
  where: PersonWhereUniqueInput;
};

export type MutationDeletePlatformArgs = {
  where: PlatformWhereUniqueInput;
};

export type MutationDeleteShowArgs = {
  where: ShowWhereUniqueInput;
};

export type MutationDeleteShowLikeArgs = {
  where: ShowLikeWhereUniqueInput;
};

export type MutationDeleteShowReviewArgs = {
  showId: Scalars['Int'];
};

export type MutationDeleteShowReviewLikeArgs = {
  where: ShowReviewLikeWhereUniqueInput;
};

export type MutationDeleteSongArgs = {
  where: SongWhereUniqueInput;
};

export type MutationDeleteSongInMovieArgs = {
  where: SongInMovieWhereUniqueInput;
};

export type MutationDeleteSongInShowArgs = {
  where: SongInShowWhereUniqueInput;
};

export type MutationDeleteSongReviewArgs = {
  where: SongReviewWhereUniqueInput;
};

export type MutationDeleteSongReviewLikeArgs = {
  where: SongReviewLikeWhereUniqueInput;
};

export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};

export type MutationDeleteWatchlistArgs = {
  where: WatchlistWhereUniqueInput;
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

export type MutationEditShowArgs = {
  data: ShowUpdateInput;
  where: ShowWhereUniqueInput;
};

export type MutationFollowArgs = {
  userId: Scalars['Int'];
};

export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};

export type MutationLikeMovieArgs = {
  data: MovieLikeCreateCustomInput;
};

export type MutationLikeShowArgs = {
  data: ShowLikeCreateCustomInput;
};

export type MutationLockBookArgs = {
  bookId: Scalars['Int'];
  lock: Scalars['Boolean'];
};

export type MutationLockMovieArgs = {
  lock: Scalars['Boolean'];
  movieId: Scalars['Int'];
};

export type MutationLockShowArgs = {
  lock: Scalars['Boolean'];
  showId: Scalars['Int'];
};

export type MutationLoginArgs = {
  data: LoginInput;
};

export type MutationRegisterArgs = {
  data: RegisterInput;
};

export type MutationRemoveArtistArgs = {
  bookId: Scalars['Int'];
  personId: Scalars['Int'];
};

export type MutationUnfollowArgs = {
  userId: Scalars['Int'];
};

export type MutationUnlikeMovieArgs = {
  movieId: Scalars['Int'];
};

export type MutationUnlikeShowArgs = {
  showId: Scalars['Int'];
};

export type MutationUpdateActorInMovieArgs = {
  data: ActorInMovieUpdateInput;
  where: ActorInMovieWhereUniqueInput;
};

export type MutationUpdateActorInShowArgs = {
  data: ActorInShowUpdateInput;
  where: ActorInShowWhereUniqueInput;
};

export type MutationUpdateBookArgs = {
  data: BookUpdateInput;
  where: BookWhereUniqueInput;
};

export type MutationUpdateBookReviewArgs = {
  data: BookReviewUpdateInput;
  where: BookReviewWhereUniqueInput;
};

export type MutationUpdateBookReviewLikeArgs = {
  data: BookReviewLikeUpdateInput;
  where: BookReviewLikeWhereUniqueInput;
};

export type MutationUpdateFollowsArgs = {
  data: FollowsUpdateInput;
  where: FollowsWhereUniqueInput;
};

export type MutationUpdateGenreArgs = {
  data: GenreUpdateInput;
  where: GenreWhereUniqueInput;
};

export type MutationUpdateManyActorInMovieArgs = {
  data: ActorInMovieUpdateManyMutationInput;
  where?: InputMaybe<ActorInMovieWhereInput>;
};

export type MutationUpdateManyActorInShowArgs = {
  data: ActorInShowUpdateManyMutationInput;
  where?: InputMaybe<ActorInShowWhereInput>;
};

export type MutationUpdateManyBookArgs = {
  data: BookUpdateManyMutationInput;
  where?: InputMaybe<BookWhereInput>;
};

export type MutationUpdateManyBookReviewArgs = {
  data: BookReviewUpdateManyMutationInput;
  where?: InputMaybe<BookReviewWhereInput>;
};

export type MutationUpdateManyBookReviewLikeArgs = {
  data: BookReviewLikeUpdateManyMutationInput;
  where?: InputMaybe<BookReviewLikeWhereInput>;
};

export type MutationUpdateManyFollowsArgs = {
  data: FollowsUpdateManyMutationInput;
  where?: InputMaybe<FollowsWhereInput>;
};

export type MutationUpdateManyGenreArgs = {
  data: GenreUpdateManyMutationInput;
  where?: InputMaybe<GenreWhereInput>;
};

export type MutationUpdateManyMovieArgs = {
  data: MovieUpdateManyMutationInput;
  where?: InputMaybe<MovieWhereInput>;
};

export type MutationUpdateManyMovieLikeArgs = {
  data: MovieLikeUpdateManyMutationInput;
  where?: InputMaybe<MovieLikeWhereInput>;
};

export type MutationUpdateManyMovieReviewArgs = {
  data: MovieReviewUpdateManyMutationInput;
  where?: InputMaybe<MovieReviewWhereInput>;
};

export type MutationUpdateManyMovieReviewLikeArgs = {
  data: MovieReviewLikeUpdateManyMutationInput;
  where?: InputMaybe<MovieReviewLikeWhereInput>;
};

export type MutationUpdateManyNotificationArgs = {
  data: NotificationUpdateManyMutationInput;
  where?: InputMaybe<NotificationWhereInput>;
};

export type MutationUpdateManyPersonArgs = {
  data: PersonUpdateManyMutationInput;
  where?: InputMaybe<PersonWhereInput>;
};

export type MutationUpdateManyPlatformArgs = {
  data: PlatformUpdateManyMutationInput;
  where?: InputMaybe<PlatformWhereInput>;
};

export type MutationUpdateManyShowArgs = {
  data: ShowUpdateManyMutationInput;
  where?: InputMaybe<ShowWhereInput>;
};

export type MutationUpdateManyShowLikeArgs = {
  data: ShowLikeUpdateManyMutationInput;
  where?: InputMaybe<ShowLikeWhereInput>;
};

export type MutationUpdateManyShowReviewArgs = {
  data: ShowReviewUpdateManyMutationInput;
  where?: InputMaybe<ShowReviewWhereInput>;
};

export type MutationUpdateManyShowReviewLikeArgs = {
  data: ShowReviewLikeUpdateManyMutationInput;
  where?: InputMaybe<ShowReviewLikeWhereInput>;
};

export type MutationUpdateManySongArgs = {
  data: SongUpdateManyMutationInput;
  where?: InputMaybe<SongWhereInput>;
};

export type MutationUpdateManySongInMovieArgs = {
  data: SongInMovieUpdateManyMutationInput;
  where?: InputMaybe<SongInMovieWhereInput>;
};

export type MutationUpdateManySongInShowArgs = {
  data: SongInShowUpdateManyMutationInput;
  where?: InputMaybe<SongInShowWhereInput>;
};

export type MutationUpdateManySongReviewArgs = {
  data: SongReviewUpdateManyMutationInput;
  where?: InputMaybe<SongReviewWhereInput>;
};

export type MutationUpdateManySongReviewLikeArgs = {
  data: SongReviewLikeUpdateManyMutationInput;
  where?: InputMaybe<SongReviewLikeWhereInput>;
};

export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};

export type MutationUpdateManyWatchlistArgs = {
  data: WatchlistUpdateManyMutationInput;
  where?: InputMaybe<WatchlistWhereInput>;
};

export type MutationUpdateMovieArgs = {
  data: MovieUpdateInput;
  where: MovieWhereUniqueInput;
};

export type MutationUpdateMovieLikeArgs = {
  data: MovieLikeUpdateInput;
  where: MovieLikeWhereUniqueInput;
};

export type MutationUpdateMovieReviewArgs = {
  data: MovieReviewUpdateInput;
  where: MovieReviewWhereUniqueInput;
};

export type MutationUpdateMovieReviewLikeArgs = {
  data: MovieReviewLikeUpdateInput;
  where: MovieReviewLikeWhereUniqueInput;
};

export type MutationUpdateNotificationArgs = {
  data: NotificationUpdateInput;
  where: NotificationWhereUniqueInput;
};

export type MutationUpdatePersonArgs = {
  data: PersonUpdateInput;
  where: PersonWhereUniqueInput;
};

export type MutationUpdatePlatformArgs = {
  data: PlatformUpdateInput;
  where: PlatformWhereUniqueInput;
};

export type MutationUpdateShowArgs = {
  data: ShowUpdateInput;
  where: ShowWhereUniqueInput;
};

export type MutationUpdateShowLikeArgs = {
  data: ShowLikeUpdateInput;
  where: ShowLikeWhereUniqueInput;
};

export type MutationUpdateShowReviewArgs = {
  data: ShowReviewUpdateInput;
  where: ShowReviewWhereUniqueInput;
};

export type MutationUpdateShowReviewLikeArgs = {
  data: ShowReviewLikeUpdateInput;
  where: ShowReviewLikeWhereUniqueInput;
};

export type MutationUpdateSongArgs = {
  data: SongUpdateInput;
  where: SongWhereUniqueInput;
};

export type MutationUpdateSongInMovieArgs = {
  data: SongInMovieUpdateInput;
  where: SongInMovieWhereUniqueInput;
};

export type MutationUpdateSongInShowArgs = {
  data: SongInShowUpdateInput;
  where: SongInShowWhereUniqueInput;
};

export type MutationUpdateSongReviewArgs = {
  data: SongReviewUpdateInput;
  where: SongReviewWhereUniqueInput;
};

export type MutationUpdateSongReviewLikeArgs = {
  data: SongReviewLikeUpdateInput;
  where: SongReviewLikeWhereUniqueInput;
};

export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type MutationUpdateWatchlistArgs = {
  data: WatchlistUpdateInput;
  where: WatchlistWhereUniqueInput;
};

export type MutationUploadAvatarArgs = {
  file: Scalars['Upload'];
};

export type MutationUploadBackdropArgs = {
  file: Scalars['Upload'];
  id: Scalars['Int'];
  type: UploadType;
};

export type MutationUploadPosterArgs = {
  file: Scalars['Upload'];
  id: Scalars['Int'];
  type: UploadType;
};

export type MutationUpsertActorInMovieArgs = {
  create: ActorInMovieCreateInput;
  update: ActorInMovieUpdateInput;
  where: ActorInMovieWhereUniqueInput;
};

export type MutationUpsertActorInShowArgs = {
  create: ActorInShowCreateInput;
  update: ActorInShowUpdateInput;
  where: ActorInShowWhereUniqueInput;
};

export type MutationUpsertBookArgs = {
  create: BookCreateInput;
  update: BookUpdateInput;
  where: BookWhereUniqueInput;
};

export type MutationUpsertBookReviewArgs = {
  create: BookReviewCreateInput;
  update: BookReviewUpdateInput;
  where: BookReviewWhereUniqueInput;
};

export type MutationUpsertBookReviewLikeArgs = {
  create: BookReviewLikeCreateInput;
  update: BookReviewLikeUpdateInput;
  where: BookReviewLikeWhereUniqueInput;
};

export type MutationUpsertFollowsArgs = {
  create: FollowsCreateInput;
  update: FollowsUpdateInput;
  where: FollowsWhereUniqueInput;
};

export type MutationUpsertGenreArgs = {
  create: GenreCreateInput;
  update: GenreUpdateInput;
  where: GenreWhereUniqueInput;
};

export type MutationUpsertMovieArgs = {
  create: MovieCreateInput;
  update: MovieUpdateInput;
  where: MovieWhereUniqueInput;
};

export type MutationUpsertMovieLikeArgs = {
  create: MovieLikeCreateInput;
  update: MovieLikeUpdateInput;
  where: MovieLikeWhereUniqueInput;
};

export type MutationUpsertMovieReviewArgs = {
  create: MovieReviewCreateInput;
  update: MovieReviewUpdateInput;
  where: MovieReviewWhereUniqueInput;
};

export type MutationUpsertMovieReviewLikeArgs = {
  create: MovieReviewLikeCreateInput;
  update: MovieReviewLikeUpdateInput;
  where: MovieReviewLikeWhereUniqueInput;
};

export type MutationUpsertNotificationArgs = {
  create: NotificationCreateInput;
  update: NotificationUpdateInput;
  where: NotificationWhereUniqueInput;
};

export type MutationUpsertPersonArgs = {
  create: PersonCreateInput;
  update: PersonUpdateInput;
  where: PersonWhereUniqueInput;
};

export type MutationUpsertPlatformArgs = {
  create: PlatformCreateInput;
  update: PlatformUpdateInput;
  where: PlatformWhereUniqueInput;
};

export type MutationUpsertShowArgs = {
  create: ShowCreateInput;
  update: ShowUpdateInput;
  where: ShowWhereUniqueInput;
};

export type MutationUpsertShowLikeArgs = {
  create: ShowLikeCreateInput;
  update: ShowLikeUpdateInput;
  where: ShowLikeWhereUniqueInput;
};

export type MutationUpsertShowReviewArgs = {
  create: ShowReviewCreateInput;
  update: ShowReviewUpdateInput;
  where: ShowReviewWhereUniqueInput;
};

export type MutationUpsertShowReviewLikeArgs = {
  create: ShowReviewLikeCreateInput;
  update: ShowReviewLikeUpdateInput;
  where: ShowReviewLikeWhereUniqueInput;
};

export type MutationUpsertSongArgs = {
  create: SongCreateInput;
  update: SongUpdateInput;
  where: SongWhereUniqueInput;
};

export type MutationUpsertSongInMovieArgs = {
  create: SongInMovieCreateInput;
  update: SongInMovieUpdateInput;
  where: SongInMovieWhereUniqueInput;
};

export type MutationUpsertSongInShowArgs = {
  create: SongInShowCreateInput;
  update: SongInShowUpdateInput;
  where: SongInShowWhereUniqueInput;
};

export type MutationUpsertSongReviewArgs = {
  create: SongReviewCreateInput;
  update: SongReviewUpdateInput;
  where: SongReviewWhereUniqueInput;
};

export type MutationUpsertSongReviewLikeArgs = {
  create: SongReviewLikeCreateInput;
  update: SongReviewLikeUpdateInput;
  where: SongReviewLikeWhereUniqueInput;
};

export type MutationUpsertUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type MutationUpsertWatchlistArgs = {
  create: WatchlistCreateInput;
  update: WatchlistUpdateInput;
  where: WatchlistWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
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

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Role[]>;
  not?: InputMaybe<NestedEnumRoleFilter>;
  notIn?: InputMaybe<Role[]>;
};

export type NestedEnumRoleWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumRoleFilter>;
  _min?: InputMaybe<NestedEnumRoleFilter>;
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Role[]>;
  not?: InputMaybe<NestedEnumRoleWithAggregatesFilter>;
  notIn?: InputMaybe<Role[]>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
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

export type NestedFloatNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedFloatNullableFilter>;
  _min?: InputMaybe<NestedFloatNullableFilter>;
  _sum?: InputMaybe<NestedFloatNullableFilter>;
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableWithAggregatesFilter>;
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

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
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

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Notification = {
  __typename?: 'Notification';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  message: Scalars['String'];
  read: Scalars['Boolean'];
  user: User;
  userId: Scalars['Int'];
};

export type NotificationAvgAggregate = {
  __typename?: 'NotificationAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type NotificationAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type NotificationCountAggregate = {
  __typename?: 'NotificationCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  message: Scalars['Int'];
  read: Scalars['Int'];
  userId: Scalars['Int'];
};

export type NotificationCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  read?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type NotificationCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  message: Scalars['String'];
  read?: InputMaybe<Scalars['Boolean']>;
  user: UserCreateNestedOneWithoutNotificationsInput;
};

export type NotificationCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  message: Scalars['String'];
  read?: InputMaybe<Scalars['Boolean']>;
  userId: Scalars['Int'];
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

export type NotificationGroupBy = {
  __typename?: 'NotificationGroupBy';
  _avg?: Maybe<NotificationAvgAggregate>;
  _count?: Maybe<NotificationCountAggregate>;
  _max?: Maybe<NotificationMaxAggregate>;
  _min?: Maybe<NotificationMinAggregate>;
  _sum?: Maybe<NotificationSumAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  message: Scalars['String'];
  read: Scalars['Boolean'];
  userId: Scalars['Int'];
};

export type NotificationListRelationFilter = {
  every?: InputMaybe<NotificationWhereInput>;
  none?: InputMaybe<NotificationWhereInput>;
  some?: InputMaybe<NotificationWhereInput>;
};

export type NotificationMaxAggregate = {
  __typename?: 'NotificationMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  read?: Maybe<Scalars['Boolean']>;
  userId?: Maybe<Scalars['Int']>;
};

export type NotificationMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  read?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type NotificationMinAggregate = {
  __typename?: 'NotificationMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  read?: Maybe<Scalars['Boolean']>;
  userId?: Maybe<Scalars['Int']>;
};

export type NotificationMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  read?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type NotificationOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type NotificationOrderByWithAggregationInput = {
  _avg?: InputMaybe<NotificationAvgOrderByAggregateInput>;
  _count?: InputMaybe<NotificationCountOrderByAggregateInput>;
  _max?: InputMaybe<NotificationMaxOrderByAggregateInput>;
  _min?: InputMaybe<NotificationMinOrderByAggregateInput>;
  _sum?: InputMaybe<NotificationSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  read?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
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
  userId?: InputMaybe<IntFilter>;
};

export type NotificationScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<NotificationScalarWhereWithAggregatesInput[]>;
  NOT?: InputMaybe<NotificationScalarWhereWithAggregatesInput[]>;
  OR?: InputMaybe<NotificationScalarWhereWithAggregatesInput[]>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  message?: InputMaybe<StringWithAggregatesFilter>;
  read?: InputMaybe<BoolWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
};

export type NotificationSumAggregate = {
  __typename?: 'NotificationSumAggregate';
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type NotificationSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type NotificationUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  read?: InputMaybe<BoolFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutNotificationsInput>;
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
  userId?: InputMaybe<IntFilter>;
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
  id: Scalars['Int'];
  movies: ActorInMovie[];
  name: Scalars['String'];
  poster: Scalars['String'];
  shows: ActorInShow[];
  songs: Song[];
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

export type PersonAvgAggregate = {
  __typename?: 'PersonAvgAggregate';
  age?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type PersonAvgOrderByAggregateInput = {
  age?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type PersonCount = {
  __typename?: 'PersonCount';
  books: Scalars['Int'];
  movies: Scalars['Int'];
  shows: Scalars['Int'];
  songs: Scalars['Int'];
};

export type PersonCountAggregate = {
  __typename?: 'PersonCountAggregate';
  _all: Scalars['Int'];
  age: Scalars['Int'];
  bio: Scalars['Int'];
  career: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  poster: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type PersonCountOrderByAggregateInput = {
  age?: InputMaybe<SortOrder>;
  bio?: InputMaybe<SortOrder>;
  career?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  poster?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PersonCreateInput = {
  age?: InputMaybe<Scalars['Int']>;
  bio?: InputMaybe<Scalars['String']>;
  books?: InputMaybe<BookCreateNestedManyWithoutAuthorsInput>;
  career?: InputMaybe<PersonCreatecareerInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  movies?: InputMaybe<ActorInMovieCreateNestedManyWithoutPersonInput>;
  name: Scalars['String'];
  poster?: InputMaybe<Scalars['String']>;
  shows?: InputMaybe<ActorInShowCreateNestedManyWithoutPersonInput>;
  songs?: InputMaybe<SongCreateNestedManyWithoutArtistsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PersonCreateManyInput = {
  age?: InputMaybe<Scalars['Int']>;
  bio?: InputMaybe<Scalars['String']>;
  career?: InputMaybe<PersonCreateManycareerInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  poster?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PersonCreateManycareerInput = {
  set: Career[];
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
  poster?: InputMaybe<Scalars['String']>;
  shows?: InputMaybe<ActorInShowCreateNestedManyWithoutPersonInput>;
  songs?: InputMaybe<SongCreateNestedManyWithoutArtistsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PersonCreateWithoutMoviesInput = {
  age?: InputMaybe<Scalars['Int']>;
  bio?: InputMaybe<Scalars['String']>;
  books?: InputMaybe<BookCreateNestedManyWithoutAuthorsInput>;
  career?: InputMaybe<PersonCreatecareerInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  poster?: InputMaybe<Scalars['String']>;
  shows?: InputMaybe<ActorInShowCreateNestedManyWithoutPersonInput>;
  songs?: InputMaybe<SongCreateNestedManyWithoutArtistsInput>;
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
  poster?: InputMaybe<Scalars['String']>;
  songs?: InputMaybe<SongCreateNestedManyWithoutArtistsInput>;
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
  poster?: InputMaybe<Scalars['String']>;
  shows?: InputMaybe<ActorInShowCreateNestedManyWithoutPersonInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PersonCreatecareerInput = {
  set: Career[];
};

export type PersonGroupBy = {
  __typename?: 'PersonGroupBy';
  _avg?: Maybe<PersonAvgAggregate>;
  _count?: Maybe<PersonCountAggregate>;
  _max?: Maybe<PersonMaxAggregate>;
  _min?: Maybe<PersonMinAggregate>;
  _sum?: Maybe<PersonSumAggregate>;
  age?: Maybe<Scalars['Int']>;
  bio?: Maybe<Scalars['String']>;
  career?: Maybe<Career[]>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  poster: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type PersonListRelationFilter = {
  every?: InputMaybe<PersonWhereInput>;
  none?: InputMaybe<PersonWhereInput>;
  some?: InputMaybe<PersonWhereInput>;
};

export type PersonMaxAggregate = {
  __typename?: 'PersonMaxAggregate';
  age?: Maybe<Scalars['Int']>;
  bio?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  poster?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PersonMaxOrderByAggregateInput = {
  age?: InputMaybe<SortOrder>;
  bio?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  poster?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PersonMinAggregate = {
  __typename?: 'PersonMinAggregate';
  age?: Maybe<Scalars['Int']>;
  bio?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  poster?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PersonMinOrderByAggregateInput = {
  age?: InputMaybe<SortOrder>;
  bio?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  poster?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PersonOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PersonOrderByWithAggregationInput = {
  _avg?: InputMaybe<PersonAvgOrderByAggregateInput>;
  _count?: InputMaybe<PersonCountOrderByAggregateInput>;
  _max?: InputMaybe<PersonMaxOrderByAggregateInput>;
  _min?: InputMaybe<PersonMinOrderByAggregateInput>;
  _sum?: InputMaybe<PersonSumOrderByAggregateInput>;
  age?: InputMaybe<SortOrder>;
  bio?: InputMaybe<SortOrder>;
  career?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  poster?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
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
  poster?: InputMaybe<SortOrder>;
  shows?: InputMaybe<ActorInShowOrderByRelationAggregateInput>;
  songs?: InputMaybe<SongOrderByRelationAggregateInput>;
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
  Poster = 'poster',
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
  poster?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PersonScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<PersonScalarWhereWithAggregatesInput[]>;
  NOT?: InputMaybe<PersonScalarWhereWithAggregatesInput[]>;
  OR?: InputMaybe<PersonScalarWhereWithAggregatesInput[]>;
  age?: InputMaybe<IntNullableWithAggregatesFilter>;
  bio?: InputMaybe<StringNullableWithAggregatesFilter>;
  career?: InputMaybe<EnumCareerNullableListFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  poster?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type PersonSumAggregate = {
  __typename?: 'PersonSumAggregate';
  age?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type PersonSumOrderByAggregateInput = {
  age?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type PersonUpdateInput = {
  age?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  books?: InputMaybe<BookUpdateManyWithoutAuthorsInput>;
  career?: InputMaybe<PersonUpdatecareerInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  movies?: InputMaybe<ActorInMovieUpdateManyWithoutPersonInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  poster?: InputMaybe<StringFieldUpdateOperationsInput>;
  shows?: InputMaybe<ActorInShowUpdateManyWithoutPersonInput>;
  songs?: InputMaybe<SongUpdateManyWithoutArtistsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PersonUpdateManyMutationInput = {
  age?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  career?: InputMaybe<PersonUpdatecareerInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  poster?: InputMaybe<StringFieldUpdateOperationsInput>;
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
  poster?: InputMaybe<StringFieldUpdateOperationsInput>;
  shows?: InputMaybe<ActorInShowUpdateManyWithoutPersonInput>;
  songs?: InputMaybe<SongUpdateManyWithoutArtistsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PersonUpdateWithoutMoviesInput = {
  age?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  books?: InputMaybe<BookUpdateManyWithoutAuthorsInput>;
  career?: InputMaybe<PersonUpdatecareerInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  poster?: InputMaybe<StringFieldUpdateOperationsInput>;
  shows?: InputMaybe<ActorInShowUpdateManyWithoutPersonInput>;
  songs?: InputMaybe<SongUpdateManyWithoutArtistsInput>;
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
  poster?: InputMaybe<StringFieldUpdateOperationsInput>;
  songs?: InputMaybe<SongUpdateManyWithoutArtistsInput>;
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
  poster?: InputMaybe<StringFieldUpdateOperationsInput>;
  shows?: InputMaybe<ActorInShowUpdateManyWithoutPersonInput>;
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
  poster?: InputMaybe<StringFilter>;
  shows?: InputMaybe<ActorInShowListRelationFilter>;
  songs?: InputMaybe<SongListRelationFilter>;
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

export type PlatformAvgAggregate = {
  __typename?: 'PlatformAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type PlatformAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type PlatformCount = {
  __typename?: 'PlatformCount';
  movies: Scalars['Int'];
  shows: Scalars['Int'];
};

export type PlatformCountAggregate = {
  __typename?: 'PlatformCountAggregate';
  _all: Scalars['Int'];
  apiKey: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
};

export type PlatformCountOrderByAggregateInput = {
  apiKey?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type PlatformCreateInput = {
  apiKey: Scalars['String'];
  movies?: InputMaybe<MovieCreateNestedManyWithoutPlatformsInput>;
  name: Scalars['String'];
  shows?: InputMaybe<ShowCreateNestedManyWithoutPlatformsInput>;
};

export type PlatformCreateManyInput = {
  apiKey: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
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

export type PlatformGroupBy = {
  __typename?: 'PlatformGroupBy';
  _avg?: Maybe<PlatformAvgAggregate>;
  _count?: Maybe<PlatformCountAggregate>;
  _max?: Maybe<PlatformMaxAggregate>;
  _min?: Maybe<PlatformMinAggregate>;
  _sum?: Maybe<PlatformSumAggregate>;
  apiKey: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type PlatformListRelationFilter = {
  every?: InputMaybe<PlatformWhereInput>;
  none?: InputMaybe<PlatformWhereInput>;
  some?: InputMaybe<PlatformWhereInput>;
};

export type PlatformMaxAggregate = {
  __typename?: 'PlatformMaxAggregate';
  apiKey?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type PlatformMaxOrderByAggregateInput = {
  apiKey?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type PlatformMinAggregate = {
  __typename?: 'PlatformMinAggregate';
  apiKey?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type PlatformMinOrderByAggregateInput = {
  apiKey?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type PlatformOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PlatformOrderByWithAggregationInput = {
  _avg?: InputMaybe<PlatformAvgOrderByAggregateInput>;
  _count?: InputMaybe<PlatformCountOrderByAggregateInput>;
  _max?: InputMaybe<PlatformMaxOrderByAggregateInput>;
  _min?: InputMaybe<PlatformMinOrderByAggregateInput>;
  _sum?: InputMaybe<PlatformSumOrderByAggregateInput>;
  apiKey?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
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

export type PlatformScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<PlatformScalarWhereWithAggregatesInput[]>;
  NOT?: InputMaybe<PlatformScalarWhereWithAggregatesInput[]>;
  OR?: InputMaybe<PlatformScalarWhereWithAggregatesInput[]>;
  apiKey?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
};

export type PlatformSumAggregate = {
  __typename?: 'PlatformSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type PlatformSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type PlatformUpdateInput = {
  apiKey?: InputMaybe<StringFieldUpdateOperationsInput>;
  movies?: InputMaybe<MovieUpdateManyWithoutPlatformsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  shows?: InputMaybe<ShowUpdateManyWithoutPlatformsInput>;
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
  actorInMovie?: Maybe<ActorInMovie>;
  actorInMovies: ActorInMovie[];
  actorInShow?: Maybe<ActorInShow>;
  actorInShows: ActorInShow[];
  aggregateActorInMovie: AggregateActorInMovie;
  aggregateActorInShow: AggregateActorInShow;
  aggregateBook: AggregateBook;
  aggregateBookReview: AggregateBookReview;
  aggregateBookReviewLike: AggregateBookReviewLike;
  aggregateFollows: AggregateFollows;
  aggregateGenre: AggregateGenre;
  aggregateMovie: AggregateMovie;
  aggregateMovieLike: AggregateMovieLike;
  aggregateMovieReview: AggregateMovieReview;
  aggregateMovieReviewLike: AggregateMovieReviewLike;
  aggregateNotification: AggregateNotification;
  aggregatePerson: AggregatePerson;
  aggregatePlatform: AggregatePlatform;
  aggregateShow: AggregateShow;
  aggregateShowLike: AggregateShowLike;
  aggregateShowReview: AggregateShowReview;
  aggregateShowReviewLike: AggregateShowReviewLike;
  aggregateSong: AggregateSong;
  aggregateSongInMovie: AggregateSongInMovie;
  aggregateSongInShow: AggregateSongInShow;
  aggregateSongReview: AggregateSongReview;
  aggregateSongReviewLike: AggregateSongReviewLike;
  aggregateUser: AggregateUser;
  aggregateWatchlist: AggregateWatchlist;
  book?: Maybe<Book>;
  bookReview?: Maybe<BookReview>;
  bookReviewLike?: Maybe<BookReviewLike>;
  bookReviewLikes: BookReviewLike[];
  bookReviews: BookReview[];
  books?: Maybe<Book[]>;
  findFirstActorInMovie?: Maybe<ActorInMovie>;
  findFirstActorInShow?: Maybe<ActorInShow>;
  findFirstBook?: Maybe<Book>;
  findFirstBookReview?: Maybe<BookReview>;
  findFirstBookReviewLike?: Maybe<BookReviewLike>;
  findFirstFollows?: Maybe<Follows>;
  findFirstGenre?: Maybe<Genre>;
  findFirstMovie?: Maybe<Movie>;
  findFirstMovieLike?: Maybe<MovieLike>;
  findFirstMovieReview?: Maybe<MovieReview>;
  findFirstMovieReviewLike?: Maybe<MovieReviewLike>;
  findFirstNotification?: Maybe<Notification>;
  findFirstPerson?: Maybe<Person>;
  findFirstPlatform?: Maybe<Platform>;
  findFirstShow?: Maybe<Show>;
  findFirstShowLike?: Maybe<ShowLike>;
  findFirstShowReview?: Maybe<ShowReview>;
  findFirstShowReviewLike?: Maybe<ShowReviewLike>;
  findFirstSong?: Maybe<Song>;
  findFirstSongInMovie?: Maybe<SongInMovie>;
  findFirstSongInShow?: Maybe<SongInShow>;
  findFirstSongReview?: Maybe<SongReview>;
  findFirstSongReviewLike?: Maybe<SongReviewLike>;
  findFirstUser?: Maybe<User>;
  findFirstWatchlist?: Maybe<Watchlist>;
  findManyFollows: Follows[];
  findUniqueFollows?: Maybe<Follows>;
  follows: Follows[];
  genre?: Maybe<Genre>;
  genres: Genre[];
  groupByActorInMovie: ActorInMovieGroupBy[];
  groupByActorInShow: ActorInShowGroupBy[];
  groupByBook: BookGroupBy[];
  groupByBookReview: BookReviewGroupBy[];
  groupByBookReviewLike: BookReviewLikeGroupBy[];
  groupByFollows: FollowsGroupBy[];
  groupByGenre: GenreGroupBy[];
  groupByMovie: MovieGroupBy[];
  groupByMovieLike: MovieLikeGroupBy[];
  groupByMovieReview: MovieReviewGroupBy[];
  groupByMovieReviewLike: MovieReviewLikeGroupBy[];
  groupByNotification: NotificationGroupBy[];
  groupByPerson: PersonGroupBy[];
  groupByPlatform: PlatformGroupBy[];
  groupByShow: ShowGroupBy[];
  groupByShowLike: ShowLikeGroupBy[];
  groupByShowReview: ShowReviewGroupBy[];
  groupByShowReviewLike: ShowReviewLikeGroupBy[];
  groupBySong: SongGroupBy[];
  groupBySongInMovie: SongInMovieGroupBy[];
  groupBySongInShow: SongInShowGroupBy[];
  groupBySongReview: SongReviewGroupBy[];
  groupBySongReviewLike: SongReviewLikeGroupBy[];
  groupByUser: UserGroupBy[];
  groupByWatchlist: WatchlistGroupBy[];
  likedMovies: MovieLike[];
  likedShows: ShowLike[];
  me?: Maybe<User>;
  movie?: Maybe<Movie>;
  movieLike?: Maybe<MovieLike>;
  movieLikes: MovieLike[];
  movieReview?: Maybe<MovieReview>;
  movieReviewLike?: Maybe<MovieReviewLike>;
  movieReviewLikes: MovieReviewLike[];
  movieReviews: MovieReview[];
  movies?: Maybe<Movie[]>;
  notification?: Maybe<Notification>;
  notifications: Notification[];
  people?: Maybe<Person[]>;
  person?: Maybe<Person>;
  platform?: Maybe<Platform>;
  platforms: Platform[];
  show?: Maybe<Show>;
  showLike?: Maybe<ShowLike>;
  showLikes: ShowLike[];
  showReview?: Maybe<ShowReview>;
  showReviewLike?: Maybe<ShowReviewLike>;
  showReviewLikes: ShowReviewLike[];
  showReviews: ShowReview[];
  shows?: Maybe<Show[]>;
  song?: Maybe<Song>;
  songInMovie?: Maybe<SongInMovie>;
  songInMovies: SongInMovie[];
  songInShow?: Maybe<SongInShow>;
  songInShows: SongInShow[];
  songReview?: Maybe<SongReview>;
  songReviewLike?: Maybe<SongReviewLike>;
  songReviewLikes: SongReviewLike[];
  songReviews: SongReview[];
  songs?: Maybe<Song[]>;
  user?: Maybe<User>;
  users: User[];
  watchlist?: Maybe<Watchlist>;
  watchlists: Watchlist[];
};

export type QueryActorInMovieArgs = {
  where: ActorInMovieWhereUniqueInput;
};

export type QueryActorInMoviesArgs = {
  cursor?: InputMaybe<ActorInMovieWhereUniqueInput>;
  distinct?: InputMaybe<ActorInMovieScalarFieldEnum[]>;
  orderBy?: InputMaybe<ActorInMovieOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ActorInMovieWhereInput>;
};

export type QueryActorInShowArgs = {
  where: ActorInShowWhereUniqueInput;
};

export type QueryActorInShowsArgs = {
  cursor?: InputMaybe<ActorInShowWhereUniqueInput>;
  distinct?: InputMaybe<ActorInShowScalarFieldEnum[]>;
  orderBy?: InputMaybe<ActorInShowOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ActorInShowWhereInput>;
};

export type QueryAggregateActorInMovieArgs = {
  cursor?: InputMaybe<ActorInMovieWhereUniqueInput>;
  orderBy?: InputMaybe<ActorInMovieOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ActorInMovieWhereInput>;
};

export type QueryAggregateActorInShowArgs = {
  cursor?: InputMaybe<ActorInShowWhereUniqueInput>;
  orderBy?: InputMaybe<ActorInShowOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ActorInShowWhereInput>;
};

export type QueryAggregateBookArgs = {
  cursor?: InputMaybe<BookWhereUniqueInput>;
  orderBy?: InputMaybe<BookOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BookWhereInput>;
};

export type QueryAggregateBookReviewArgs = {
  cursor?: InputMaybe<BookReviewWhereUniqueInput>;
  orderBy?: InputMaybe<BookReviewOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BookReviewWhereInput>;
};

export type QueryAggregateBookReviewLikeArgs = {
  cursor?: InputMaybe<BookReviewLikeWhereUniqueInput>;
  orderBy?: InputMaybe<BookReviewLikeOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BookReviewLikeWhereInput>;
};

export type QueryAggregateFollowsArgs = {
  cursor?: InputMaybe<FollowsWhereUniqueInput>;
  orderBy?: InputMaybe<FollowsOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FollowsWhereInput>;
};

export type QueryAggregateGenreArgs = {
  cursor?: InputMaybe<GenreWhereUniqueInput>;
  orderBy?: InputMaybe<GenreOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GenreWhereInput>;
};

export type QueryAggregateMovieArgs = {
  cursor?: InputMaybe<MovieWhereUniqueInput>;
  orderBy?: InputMaybe<MovieOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieWhereInput>;
};

export type QueryAggregateMovieLikeArgs = {
  cursor?: InputMaybe<MovieLikeWhereUniqueInput>;
  orderBy?: InputMaybe<MovieLikeOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieLikeWhereInput>;
};

export type QueryAggregateMovieReviewArgs = {
  cursor?: InputMaybe<MovieReviewWhereUniqueInput>;
  orderBy?: InputMaybe<MovieReviewOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieReviewWhereInput>;
};

export type QueryAggregateMovieReviewLikeArgs = {
  cursor?: InputMaybe<MovieReviewLikeWhereUniqueInput>;
  orderBy?: InputMaybe<MovieReviewLikeOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieReviewLikeWhereInput>;
};

export type QueryAggregateNotificationArgs = {
  cursor?: InputMaybe<NotificationWhereUniqueInput>;
  orderBy?: InputMaybe<NotificationOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NotificationWhereInput>;
};

export type QueryAggregatePersonArgs = {
  cursor?: InputMaybe<PersonWhereUniqueInput>;
  orderBy?: InputMaybe<PersonOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PersonWhereInput>;
};

export type QueryAggregatePlatformArgs = {
  cursor?: InputMaybe<PlatformWhereUniqueInput>;
  orderBy?: InputMaybe<PlatformOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlatformWhereInput>;
};

export type QueryAggregateShowArgs = {
  cursor?: InputMaybe<ShowWhereUniqueInput>;
  orderBy?: InputMaybe<ShowOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ShowWhereInput>;
};

export type QueryAggregateShowLikeArgs = {
  cursor?: InputMaybe<ShowLikeWhereUniqueInput>;
  orderBy?: InputMaybe<ShowLikeOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ShowLikeWhereInput>;
};

export type QueryAggregateShowReviewArgs = {
  cursor?: InputMaybe<ShowReviewWhereUniqueInput>;
  orderBy?: InputMaybe<ShowReviewOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ShowReviewWhereInput>;
};

export type QueryAggregateShowReviewLikeArgs = {
  cursor?: InputMaybe<ShowReviewLikeWhereUniqueInput>;
  orderBy?: InputMaybe<ShowReviewLikeOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ShowReviewLikeWhereInput>;
};

export type QueryAggregateSongArgs = {
  cursor?: InputMaybe<SongWhereUniqueInput>;
  orderBy?: InputMaybe<SongOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SongWhereInput>;
};

export type QueryAggregateSongInMovieArgs = {
  cursor?: InputMaybe<SongInMovieWhereUniqueInput>;
  orderBy?: InputMaybe<SongInMovieOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SongInMovieWhereInput>;
};

export type QueryAggregateSongInShowArgs = {
  cursor?: InputMaybe<SongInShowWhereUniqueInput>;
  orderBy?: InputMaybe<SongInShowOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SongInShowWhereInput>;
};

export type QueryAggregateSongReviewArgs = {
  cursor?: InputMaybe<SongReviewWhereUniqueInput>;
  orderBy?: InputMaybe<SongReviewOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SongReviewWhereInput>;
};

export type QueryAggregateSongReviewLikeArgs = {
  cursor?: InputMaybe<SongReviewLikeWhereUniqueInput>;
  orderBy?: InputMaybe<SongReviewLikeOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SongReviewLikeWhereInput>;
};

export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<UserOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export type QueryAggregateWatchlistArgs = {
  cursor?: InputMaybe<WatchlistWhereUniqueInput>;
  orderBy?: InputMaybe<WatchlistOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WatchlistWhereInput>;
};

export type QueryBookArgs = {
  bookId: Scalars['Int'];
};

export type QueryBookReviewArgs = {
  where: BookReviewWhereUniqueInput;
};

export type QueryBookReviewLikeArgs = {
  where: BookReviewLikeWhereUniqueInput;
};

export type QueryBookReviewLikesArgs = {
  cursor?: InputMaybe<BookReviewLikeWhereUniqueInput>;
  distinct?: InputMaybe<BookReviewLikeScalarFieldEnum[]>;
  orderBy?: InputMaybe<BookReviewLikeOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BookReviewLikeWhereInput>;
};

export type QueryBookReviewsArgs = {
  cursor?: InputMaybe<BookReviewWhereUniqueInput>;
  distinct?: InputMaybe<BookReviewScalarFieldEnum[]>;
  orderBy?: InputMaybe<BookReviewOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BookReviewWhereInput>;
};

export type QueryBooksArgs = {
  title: Scalars['String'];
};

export type QueryFindFirstActorInMovieArgs = {
  cursor?: InputMaybe<ActorInMovieWhereUniqueInput>;
  distinct?: InputMaybe<ActorInMovieScalarFieldEnum[]>;
  orderBy?: InputMaybe<ActorInMovieOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ActorInMovieWhereInput>;
};

export type QueryFindFirstActorInShowArgs = {
  cursor?: InputMaybe<ActorInShowWhereUniqueInput>;
  distinct?: InputMaybe<ActorInShowScalarFieldEnum[]>;
  orderBy?: InputMaybe<ActorInShowOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ActorInShowWhereInput>;
};

export type QueryFindFirstBookArgs = {
  cursor?: InputMaybe<BookWhereUniqueInput>;
  distinct?: InputMaybe<BookScalarFieldEnum[]>;
  orderBy?: InputMaybe<BookOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BookWhereInput>;
};

export type QueryFindFirstBookReviewArgs = {
  cursor?: InputMaybe<BookReviewWhereUniqueInput>;
  distinct?: InputMaybe<BookReviewScalarFieldEnum[]>;
  orderBy?: InputMaybe<BookReviewOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BookReviewWhereInput>;
};

export type QueryFindFirstBookReviewLikeArgs = {
  cursor?: InputMaybe<BookReviewLikeWhereUniqueInput>;
  distinct?: InputMaybe<BookReviewLikeScalarFieldEnum[]>;
  orderBy?: InputMaybe<BookReviewLikeOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BookReviewLikeWhereInput>;
};

export type QueryFindFirstFollowsArgs = {
  cursor?: InputMaybe<FollowsWhereUniqueInput>;
  distinct?: InputMaybe<FollowsScalarFieldEnum[]>;
  orderBy?: InputMaybe<FollowsOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FollowsWhereInput>;
};

export type QueryFindFirstGenreArgs = {
  cursor?: InputMaybe<GenreWhereUniqueInput>;
  distinct?: InputMaybe<GenreScalarFieldEnum[]>;
  orderBy?: InputMaybe<GenreOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GenreWhereInput>;
};

export type QueryFindFirstMovieArgs = {
  cursor?: InputMaybe<MovieWhereUniqueInput>;
  distinct?: InputMaybe<MovieScalarFieldEnum[]>;
  orderBy?: InputMaybe<MovieOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieWhereInput>;
};

export type QueryFindFirstMovieLikeArgs = {
  cursor?: InputMaybe<MovieLikeWhereUniqueInput>;
  distinct?: InputMaybe<MovieLikeScalarFieldEnum[]>;
  orderBy?: InputMaybe<MovieLikeOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieLikeWhereInput>;
};

export type QueryFindFirstMovieReviewArgs = {
  cursor?: InputMaybe<MovieReviewWhereUniqueInput>;
  distinct?: InputMaybe<MovieReviewScalarFieldEnum[]>;
  orderBy?: InputMaybe<MovieReviewOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieReviewWhereInput>;
};

export type QueryFindFirstMovieReviewLikeArgs = {
  cursor?: InputMaybe<MovieReviewLikeWhereUniqueInput>;
  distinct?: InputMaybe<MovieReviewLikeScalarFieldEnum[]>;
  orderBy?: InputMaybe<MovieReviewLikeOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieReviewLikeWhereInput>;
};

export type QueryFindFirstNotificationArgs = {
  cursor?: InputMaybe<NotificationWhereUniqueInput>;
  distinct?: InputMaybe<NotificationScalarFieldEnum[]>;
  orderBy?: InputMaybe<NotificationOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NotificationWhereInput>;
};

export type QueryFindFirstPersonArgs = {
  cursor?: InputMaybe<PersonWhereUniqueInput>;
  distinct?: InputMaybe<PersonScalarFieldEnum[]>;
  orderBy?: InputMaybe<PersonOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PersonWhereInput>;
};

export type QueryFindFirstPlatformArgs = {
  cursor?: InputMaybe<PlatformWhereUniqueInput>;
  distinct?: InputMaybe<PlatformScalarFieldEnum[]>;
  orderBy?: InputMaybe<PlatformOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlatformWhereInput>;
};

export type QueryFindFirstShowArgs = {
  cursor?: InputMaybe<ShowWhereUniqueInput>;
  distinct?: InputMaybe<ShowScalarFieldEnum[]>;
  orderBy?: InputMaybe<ShowOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ShowWhereInput>;
};

export type QueryFindFirstShowLikeArgs = {
  cursor?: InputMaybe<ShowLikeWhereUniqueInput>;
  distinct?: InputMaybe<ShowLikeScalarFieldEnum[]>;
  orderBy?: InputMaybe<ShowLikeOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ShowLikeWhereInput>;
};

export type QueryFindFirstShowReviewArgs = {
  cursor?: InputMaybe<ShowReviewWhereUniqueInput>;
  distinct?: InputMaybe<ShowReviewScalarFieldEnum[]>;
  orderBy?: InputMaybe<ShowReviewOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ShowReviewWhereInput>;
};

export type QueryFindFirstShowReviewLikeArgs = {
  cursor?: InputMaybe<ShowReviewLikeWhereUniqueInput>;
  distinct?: InputMaybe<ShowReviewLikeScalarFieldEnum[]>;
  orderBy?: InputMaybe<ShowReviewLikeOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ShowReviewLikeWhereInput>;
};

export type QueryFindFirstSongArgs = {
  cursor?: InputMaybe<SongWhereUniqueInput>;
  distinct?: InputMaybe<SongScalarFieldEnum[]>;
  orderBy?: InputMaybe<SongOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SongWhereInput>;
};

export type QueryFindFirstSongInMovieArgs = {
  cursor?: InputMaybe<SongInMovieWhereUniqueInput>;
  distinct?: InputMaybe<SongInMovieScalarFieldEnum[]>;
  orderBy?: InputMaybe<SongInMovieOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SongInMovieWhereInput>;
};

export type QueryFindFirstSongInShowArgs = {
  cursor?: InputMaybe<SongInShowWhereUniqueInput>;
  distinct?: InputMaybe<SongInShowScalarFieldEnum[]>;
  orderBy?: InputMaybe<SongInShowOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SongInShowWhereInput>;
};

export type QueryFindFirstSongReviewArgs = {
  cursor?: InputMaybe<SongReviewWhereUniqueInput>;
  distinct?: InputMaybe<SongReviewScalarFieldEnum[]>;
  orderBy?: InputMaybe<SongReviewOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SongReviewWhereInput>;
};

export type QueryFindFirstSongReviewLikeArgs = {
  cursor?: InputMaybe<SongReviewLikeWhereUniqueInput>;
  distinct?: InputMaybe<SongReviewLikeScalarFieldEnum[]>;
  orderBy?: InputMaybe<SongReviewLikeOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SongReviewLikeWhereInput>;
};

export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<UserScalarFieldEnum[]>;
  orderBy?: InputMaybe<UserOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export type QueryFindFirstWatchlistArgs = {
  cursor?: InputMaybe<WatchlistWhereUniqueInput>;
  distinct?: InputMaybe<WatchlistScalarFieldEnum[]>;
  orderBy?: InputMaybe<WatchlistOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WatchlistWhereInput>;
};

export type QueryFindManyFollowsArgs = {
  cursor?: InputMaybe<FollowsWhereUniqueInput>;
  distinct?: InputMaybe<FollowsScalarFieldEnum[]>;
  orderBy?: InputMaybe<FollowsOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FollowsWhereInput>;
};

export type QueryFindUniqueFollowsArgs = {
  where: FollowsWhereUniqueInput;
};

export type QueryFollowsArgs = {
  cursor?: InputMaybe<FollowsWhereUniqueInput>;
  distinct?: InputMaybe<FollowsScalarFieldEnum[]>;
  orderBy?: InputMaybe<FollowsOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FollowsWhereInput>;
};

export type QueryGenreArgs = {
  where: GenreWhereUniqueInput;
};

export type QueryGenresArgs = {
  cursor?: InputMaybe<GenreWhereUniqueInput>;
  distinct?: InputMaybe<GenreScalarFieldEnum[]>;
  orderBy?: InputMaybe<GenreOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GenreWhereInput>;
};

export type QueryGroupByActorInMovieArgs = {
  by: ActorInMovieScalarFieldEnum[];
  having?: InputMaybe<ActorInMovieScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<ActorInMovieOrderByWithAggregationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ActorInMovieWhereInput>;
};

export type QueryGroupByActorInShowArgs = {
  by: ActorInShowScalarFieldEnum[];
  having?: InputMaybe<ActorInShowScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<ActorInShowOrderByWithAggregationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ActorInShowWhereInput>;
};

export type QueryGroupByBookArgs = {
  by: BookScalarFieldEnum[];
  having?: InputMaybe<BookScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<BookOrderByWithAggregationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BookWhereInput>;
};

export type QueryGroupByBookReviewArgs = {
  by: BookReviewScalarFieldEnum[];
  having?: InputMaybe<BookReviewScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<BookReviewOrderByWithAggregationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BookReviewWhereInput>;
};

export type QueryGroupByBookReviewLikeArgs = {
  by: BookReviewLikeScalarFieldEnum[];
  having?: InputMaybe<BookReviewLikeScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<BookReviewLikeOrderByWithAggregationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BookReviewLikeWhereInput>;
};

export type QueryGroupByFollowsArgs = {
  by: FollowsScalarFieldEnum[];
  having?: InputMaybe<FollowsScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<FollowsOrderByWithAggregationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FollowsWhereInput>;
};

export type QueryGroupByGenreArgs = {
  by: GenreScalarFieldEnum[];
  having?: InputMaybe<GenreScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<GenreOrderByWithAggregationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GenreWhereInput>;
};

export type QueryGroupByMovieArgs = {
  by: MovieScalarFieldEnum[];
  having?: InputMaybe<MovieScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<MovieOrderByWithAggregationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieWhereInput>;
};

export type QueryGroupByMovieLikeArgs = {
  by: MovieLikeScalarFieldEnum[];
  having?: InputMaybe<MovieLikeScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<MovieLikeOrderByWithAggregationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieLikeWhereInput>;
};

export type QueryGroupByMovieReviewArgs = {
  by: MovieReviewScalarFieldEnum[];
  having?: InputMaybe<MovieReviewScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<MovieReviewOrderByWithAggregationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieReviewWhereInput>;
};

export type QueryGroupByMovieReviewLikeArgs = {
  by: MovieReviewLikeScalarFieldEnum[];
  having?: InputMaybe<MovieReviewLikeScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<MovieReviewLikeOrderByWithAggregationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieReviewLikeWhereInput>;
};

export type QueryGroupByNotificationArgs = {
  by: NotificationScalarFieldEnum[];
  having?: InputMaybe<NotificationScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<NotificationOrderByWithAggregationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NotificationWhereInput>;
};

export type QueryGroupByPersonArgs = {
  by: PersonScalarFieldEnum[];
  having?: InputMaybe<PersonScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<PersonOrderByWithAggregationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PersonWhereInput>;
};

export type QueryGroupByPlatformArgs = {
  by: PlatformScalarFieldEnum[];
  having?: InputMaybe<PlatformScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<PlatformOrderByWithAggregationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlatformWhereInput>;
};

export type QueryGroupByShowArgs = {
  by: ShowScalarFieldEnum[];
  having?: InputMaybe<ShowScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<ShowOrderByWithAggregationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ShowWhereInput>;
};

export type QueryGroupByShowLikeArgs = {
  by: ShowLikeScalarFieldEnum[];
  having?: InputMaybe<ShowLikeScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<ShowLikeOrderByWithAggregationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ShowLikeWhereInput>;
};

export type QueryGroupByShowReviewArgs = {
  by: ShowReviewScalarFieldEnum[];
  having?: InputMaybe<ShowReviewScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<ShowReviewOrderByWithAggregationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ShowReviewWhereInput>;
};

export type QueryGroupByShowReviewLikeArgs = {
  by: ShowReviewLikeScalarFieldEnum[];
  having?: InputMaybe<ShowReviewLikeScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<ShowReviewLikeOrderByWithAggregationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ShowReviewLikeWhereInput>;
};

export type QueryGroupBySongArgs = {
  by: SongScalarFieldEnum[];
  having?: InputMaybe<SongScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<SongOrderByWithAggregationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SongWhereInput>;
};

export type QueryGroupBySongInMovieArgs = {
  by: SongInMovieScalarFieldEnum[];
  having?: InputMaybe<SongInMovieScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<SongInMovieOrderByWithAggregationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SongInMovieWhereInput>;
};

export type QueryGroupBySongInShowArgs = {
  by: SongInShowScalarFieldEnum[];
  having?: InputMaybe<SongInShowScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<SongInShowOrderByWithAggregationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SongInShowWhereInput>;
};

export type QueryGroupBySongReviewArgs = {
  by: SongReviewScalarFieldEnum[];
  having?: InputMaybe<SongReviewScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<SongReviewOrderByWithAggregationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SongReviewWhereInput>;
};

export type QueryGroupBySongReviewLikeArgs = {
  by: SongReviewLikeScalarFieldEnum[];
  having?: InputMaybe<SongReviewLikeScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<SongReviewLikeOrderByWithAggregationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SongReviewLikeWhereInput>;
};

export type QueryGroupByUserArgs = {
  by: UserScalarFieldEnum[];
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<UserOrderByWithAggregationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export type QueryGroupByWatchlistArgs = {
  by: WatchlistScalarFieldEnum[];
  having?: InputMaybe<WatchlistScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<WatchlistOrderByWithAggregationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WatchlistWhereInput>;
};

export type QueryLikedMoviesArgs = {
  cursor?: InputMaybe<MovieLikeWhereUniqueInput>;
  distinct?: InputMaybe<MovieLikeScalarFieldEnum[]>;
  orderBy?: InputMaybe<MovieLikeOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieLikeWhereInput>;
};

export type QueryLikedShowsArgs = {
  cursor?: InputMaybe<ShowLikeWhereUniqueInput>;
  distinct?: InputMaybe<ShowLikeScalarFieldEnum[]>;
  orderBy?: InputMaybe<ShowLikeOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ShowLikeWhereInput>;
};

export type QueryMovieArgs = {
  movieId: Scalars['Int'];
};

export type QueryMovieLikeArgs = {
  where: MovieLikeWhereUniqueInput;
};

export type QueryMovieLikesArgs = {
  cursor?: InputMaybe<MovieLikeWhereUniqueInput>;
  distinct?: InputMaybe<MovieLikeScalarFieldEnum[]>;
  orderBy?: InputMaybe<MovieLikeOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieLikeWhereInput>;
};

export type QueryMovieReviewArgs = {
  where: MovieReviewWhereUniqueInput;
};

export type QueryMovieReviewLikeArgs = {
  where: MovieReviewLikeWhereUniqueInput;
};

export type QueryMovieReviewLikesArgs = {
  cursor?: InputMaybe<MovieReviewLikeWhereUniqueInput>;
  distinct?: InputMaybe<MovieReviewLikeScalarFieldEnum[]>;
  orderBy?: InputMaybe<MovieReviewLikeOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieReviewLikeWhereInput>;
};

export type QueryMovieReviewsArgs = {
  cursor?: InputMaybe<MovieReviewWhereUniqueInput>;
  distinct?: InputMaybe<MovieReviewScalarFieldEnum[]>;
  orderBy?: InputMaybe<MovieReviewOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieReviewWhereInput>;
};

export type QueryMoviesArgs = {
  cursor?: InputMaybe<MovieWhereUniqueInput>;
  distinct?: InputMaybe<MovieScalarFieldEnum[]>;
  orderBy?: InputMaybe<MovieOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieWhereInput>;
};

export type QueryNotificationArgs = {
  where: NotificationWhereUniqueInput;
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
  cursor?: InputMaybe<PlatformWhereUniqueInput>;
  distinct?: InputMaybe<PlatformScalarFieldEnum[]>;
  orderBy?: InputMaybe<PlatformOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlatformWhereInput>;
};

export type QueryShowArgs = {
  showId: Scalars['Int'];
};

export type QueryShowLikeArgs = {
  where: ShowLikeWhereUniqueInput;
};

export type QueryShowLikesArgs = {
  cursor?: InputMaybe<ShowLikeWhereUniqueInput>;
  distinct?: InputMaybe<ShowLikeScalarFieldEnum[]>;
  orderBy?: InputMaybe<ShowLikeOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ShowLikeWhereInput>;
};

export type QueryShowReviewArgs = {
  where: ShowReviewWhereUniqueInput;
};

export type QueryShowReviewLikeArgs = {
  where: ShowReviewLikeWhereUniqueInput;
};

export type QueryShowReviewLikesArgs = {
  cursor?: InputMaybe<ShowReviewLikeWhereUniqueInput>;
  distinct?: InputMaybe<ShowReviewLikeScalarFieldEnum[]>;
  orderBy?: InputMaybe<ShowReviewLikeOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ShowReviewLikeWhereInput>;
};

export type QueryShowReviewsArgs = {
  cursor?: InputMaybe<ShowReviewWhereUniqueInput>;
  distinct?: InputMaybe<ShowReviewScalarFieldEnum[]>;
  orderBy?: InputMaybe<ShowReviewOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ShowReviewWhereInput>;
};

export type QueryShowsArgs = {
  cursor?: InputMaybe<ShowWhereUniqueInput>;
  distinct?: InputMaybe<ShowScalarFieldEnum[]>;
  orderBy?: InputMaybe<ShowOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ShowWhereInput>;
};

export type QuerySongArgs = {
  where: SongWhereUniqueInput;
};

export type QuerySongInMovieArgs = {
  where: SongInMovieWhereUniqueInput;
};

export type QuerySongInMoviesArgs = {
  cursor?: InputMaybe<SongInMovieWhereUniqueInput>;
  distinct?: InputMaybe<SongInMovieScalarFieldEnum[]>;
  orderBy?: InputMaybe<SongInMovieOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SongInMovieWhereInput>;
};

export type QuerySongInShowArgs = {
  where: SongInShowWhereUniqueInput;
};

export type QuerySongInShowsArgs = {
  cursor?: InputMaybe<SongInShowWhereUniqueInput>;
  distinct?: InputMaybe<SongInShowScalarFieldEnum[]>;
  orderBy?: InputMaybe<SongInShowOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SongInShowWhereInput>;
};

export type QuerySongReviewArgs = {
  where: SongReviewWhereUniqueInput;
};

export type QuerySongReviewLikeArgs = {
  where: SongReviewLikeWhereUniqueInput;
};

export type QuerySongReviewLikesArgs = {
  cursor?: InputMaybe<SongReviewLikeWhereUniqueInput>;
  distinct?: InputMaybe<SongReviewLikeScalarFieldEnum[]>;
  orderBy?: InputMaybe<SongReviewLikeOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SongReviewLikeWhereInput>;
};

export type QuerySongReviewsArgs = {
  cursor?: InputMaybe<SongReviewWhereUniqueInput>;
  distinct?: InputMaybe<SongReviewScalarFieldEnum[]>;
  orderBy?: InputMaybe<SongReviewOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SongReviewWhereInput>;
};

export type QuerySongsArgs = {
  cursor?: InputMaybe<SongWhereUniqueInput>;
  distinct?: InputMaybe<SongScalarFieldEnum[]>;
  orderBy?: InputMaybe<SongOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SongWhereInput>;
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

export type QueryWatchlistArgs = {
  where: WatchlistWhereUniqueInput;
};

export type QueryWatchlistsArgs = {
  cursor?: InputMaybe<WatchlistWhereUniqueInput>;
  distinct?: InputMaybe<WatchlistScalarFieldEnum[]>;
  orderBy?: InputMaybe<WatchlistOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WatchlistWhereInput>;
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
  aggregateShowReview: AggregateShowReview;
  backdrop: Scalars['String'];
  createdAt: Scalars['DateTime'];
  genres: Genre[];
  id: Scalars['Int'];
  isLiked: Scalars['Boolean'];
  likes: ShowLike[];
  locked: Scalars['Boolean'];
  overview: Scalars['String'];
  platforms: Platform[];
  poster: Scalars['String'];
  rating?: Maybe<Scalars['String']>;
  released?: Maybe<Scalars['DateTime']>;
  reviews: ShowReview[];
  runtime?: Maybe<Scalars['Float']>;
  soundtrack: SongInShow[];
  tagline: Scalars['String'];
  title: Scalars['String'];
  trailer?: Maybe<Scalars['String']>;
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

export type ShowAggregateShowReviewArgs = {
  cursor?: InputMaybe<ShowReviewWhereUniqueInput>;
  orderBy?: InputMaybe<ShowReviewOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ShowReviewWhereInput>;
};

export type ShowGenresArgs = {
  cursor?: InputMaybe<GenreWhereUniqueInput>;
  distinct?: InputMaybe<GenreScalarFieldEnum[]>;
  orderBy?: InputMaybe<GenreOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GenreWhereInput>;
};

export type ShowLikesArgs = {
  cursor?: InputMaybe<ShowLikeWhereUniqueInput>;
  distinct?: InputMaybe<ShowLikeScalarFieldEnum[]>;
  orderBy?: InputMaybe<ShowLikeOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ShowLikeWhereInput>;
};

export type ShowPlatformsArgs = {
  cursor?: InputMaybe<PlatformWhereUniqueInput>;
  distinct?: InputMaybe<PlatformScalarFieldEnum[]>;
  orderBy?: InputMaybe<PlatformOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlatformWhereInput>;
};

export type ShowReviewsArgs = {
  cursor?: InputMaybe<ShowReviewWhereUniqueInput>;
  distinct?: InputMaybe<ShowReviewScalarFieldEnum[]>;
  orderBy?: InputMaybe<ShowReviewOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ShowReviewWhereInput>;
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

export type ShowAvgAggregate = {
  __typename?: 'ShowAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  runtime?: Maybe<Scalars['Float']>;
};

export type ShowAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  runtime?: InputMaybe<SortOrder>;
};

export type ShowCount = {
  __typename?: 'ShowCount';
  actors: Scalars['Int'];
  genres: Scalars['Int'];
  likes: Scalars['Int'];
  platforms: Scalars['Int'];
  reviews: Scalars['Int'];
  soundtrack: Scalars['Int'];
  watchlist: Scalars['Int'];
};

export type ShowCountAggregate = {
  __typename?: 'ShowCountAggregate';
  _all: Scalars['Int'];
  backdrop: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  locked: Scalars['Int'];
  overview: Scalars['Int'];
  poster: Scalars['Int'];
  rating: Scalars['Int'];
  released: Scalars['Int'];
  runtime: Scalars['Int'];
  tagline: Scalars['Int'];
  title: Scalars['Int'];
  trailer: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type ShowCountOrderByAggregateInput = {
  backdrop?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  locked?: InputMaybe<SortOrder>;
  overview?: InputMaybe<SortOrder>;
  poster?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  released?: InputMaybe<SortOrder>;
  runtime?: InputMaybe<SortOrder>;
  tagline?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  trailer?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ShowCreateInput = {
  actors?: InputMaybe<ActorInShowCreateNestedManyWithoutShowInput>;
  backdrop?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutShowsInput>;
  likes?: InputMaybe<ShowLikeCreateNestedManyWithoutShowInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  overview: Scalars['String'];
  platforms?: InputMaybe<PlatformCreateNestedManyWithoutShowsInput>;
  poster?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['String']>;
  released?: InputMaybe<Scalars['DateTime']>;
  reviews?: InputMaybe<ShowReviewCreateNestedManyWithoutShowInput>;
  runtime?: InputMaybe<Scalars['Float']>;
  soundtrack?: InputMaybe<SongInShowCreateNestedManyWithoutShowInput>;
  tagline: Scalars['String'];
  title: Scalars['String'];
  trailer?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  watchlist?: InputMaybe<WatchlistCreateNestedManyWithoutShowsInput>;
};

export type ShowCreateManyInput = {
  backdrop?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  locked?: InputMaybe<Scalars['Boolean']>;
  overview: Scalars['String'];
  poster?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['String']>;
  released?: InputMaybe<Scalars['DateTime']>;
  runtime?: InputMaybe<Scalars['Float']>;
  tagline: Scalars['String'];
  title: Scalars['String'];
  trailer?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
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

export type ShowCreateNestedOneWithoutLikesInput = {
  connect?: InputMaybe<ShowWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ShowCreateOrConnectWithoutLikesInput>;
  create?: InputMaybe<ShowCreateWithoutLikesInput>;
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

export type ShowCreateOrConnectWithoutGenresInput = {
  create: ShowCreateWithoutGenresInput;
  where: ShowWhereUniqueInput;
};

export type ShowCreateOrConnectWithoutLikesInput = {
  create: ShowCreateWithoutLikesInput;
  where: ShowWhereUniqueInput;
};

export type ShowCreateOrConnectWithoutPlatformsInput = {
  create: ShowCreateWithoutPlatformsInput;
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
  backdrop?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutShowsInput>;
  likes?: InputMaybe<ShowLikeCreateNestedManyWithoutShowInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  overview: Scalars['String'];
  platforms?: InputMaybe<PlatformCreateNestedManyWithoutShowsInput>;
  poster?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['String']>;
  released?: InputMaybe<Scalars['DateTime']>;
  reviews?: InputMaybe<ShowReviewCreateNestedManyWithoutShowInput>;
  runtime?: InputMaybe<Scalars['Float']>;
  soundtrack?: InputMaybe<SongInShowCreateNestedManyWithoutShowInput>;
  tagline: Scalars['String'];
  title: Scalars['String'];
  trailer?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  watchlist?: InputMaybe<WatchlistCreateNestedManyWithoutShowsInput>;
};

export type ShowCreateWithoutGenresInput = {
  actors?: InputMaybe<ActorInShowCreateNestedManyWithoutShowInput>;
  backdrop?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  likes?: InputMaybe<ShowLikeCreateNestedManyWithoutShowInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  overview: Scalars['String'];
  platforms?: InputMaybe<PlatformCreateNestedManyWithoutShowsInput>;
  poster?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['String']>;
  released?: InputMaybe<Scalars['DateTime']>;
  reviews?: InputMaybe<ShowReviewCreateNestedManyWithoutShowInput>;
  runtime?: InputMaybe<Scalars['Float']>;
  soundtrack?: InputMaybe<SongInShowCreateNestedManyWithoutShowInput>;
  tagline: Scalars['String'];
  title: Scalars['String'];
  trailer?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  watchlist?: InputMaybe<WatchlistCreateNestedManyWithoutShowsInput>;
};

export type ShowCreateWithoutLikesInput = {
  actors?: InputMaybe<ActorInShowCreateNestedManyWithoutShowInput>;
  backdrop?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutShowsInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  overview: Scalars['String'];
  platforms?: InputMaybe<PlatformCreateNestedManyWithoutShowsInput>;
  poster?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['String']>;
  released?: InputMaybe<Scalars['DateTime']>;
  reviews?: InputMaybe<ShowReviewCreateNestedManyWithoutShowInput>;
  runtime?: InputMaybe<Scalars['Float']>;
  soundtrack?: InputMaybe<SongInShowCreateNestedManyWithoutShowInput>;
  tagline: Scalars['String'];
  title: Scalars['String'];
  trailer?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  watchlist?: InputMaybe<WatchlistCreateNestedManyWithoutShowsInput>;
};

export type ShowCreateWithoutPlatformsInput = {
  actors?: InputMaybe<ActorInShowCreateNestedManyWithoutShowInput>;
  backdrop?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutShowsInput>;
  likes?: InputMaybe<ShowLikeCreateNestedManyWithoutShowInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  overview: Scalars['String'];
  poster?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['String']>;
  released?: InputMaybe<Scalars['DateTime']>;
  reviews?: InputMaybe<ShowReviewCreateNestedManyWithoutShowInput>;
  runtime?: InputMaybe<Scalars['Float']>;
  soundtrack?: InputMaybe<SongInShowCreateNestedManyWithoutShowInput>;
  tagline: Scalars['String'];
  title: Scalars['String'];
  trailer?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  watchlist?: InputMaybe<WatchlistCreateNestedManyWithoutShowsInput>;
};

export type ShowCreateWithoutReviewsInput = {
  actors?: InputMaybe<ActorInShowCreateNestedManyWithoutShowInput>;
  backdrop?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutShowsInput>;
  likes?: InputMaybe<ShowLikeCreateNestedManyWithoutShowInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  overview: Scalars['String'];
  platforms?: InputMaybe<PlatformCreateNestedManyWithoutShowsInput>;
  poster?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['String']>;
  released?: InputMaybe<Scalars['DateTime']>;
  runtime?: InputMaybe<Scalars['Float']>;
  soundtrack?: InputMaybe<SongInShowCreateNestedManyWithoutShowInput>;
  tagline: Scalars['String'];
  title: Scalars['String'];
  trailer?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  watchlist?: InputMaybe<WatchlistCreateNestedManyWithoutShowsInput>;
};

export type ShowCreateWithoutSoundtrackInput = {
  actors?: InputMaybe<ActorInShowCreateNestedManyWithoutShowInput>;
  backdrop?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutShowsInput>;
  likes?: InputMaybe<ShowLikeCreateNestedManyWithoutShowInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  overview: Scalars['String'];
  platforms?: InputMaybe<PlatformCreateNestedManyWithoutShowsInput>;
  poster?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['String']>;
  released?: InputMaybe<Scalars['DateTime']>;
  reviews?: InputMaybe<ShowReviewCreateNestedManyWithoutShowInput>;
  runtime?: InputMaybe<Scalars['Float']>;
  tagline: Scalars['String'];
  title: Scalars['String'];
  trailer?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  watchlist?: InputMaybe<WatchlistCreateNestedManyWithoutShowsInput>;
};

export type ShowCreateWithoutWatchlistInput = {
  actors?: InputMaybe<ActorInShowCreateNestedManyWithoutShowInput>;
  backdrop?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutShowsInput>;
  likes?: InputMaybe<ShowLikeCreateNestedManyWithoutShowInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  overview: Scalars['String'];
  platforms?: InputMaybe<PlatformCreateNestedManyWithoutShowsInput>;
  poster?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['String']>;
  released?: InputMaybe<Scalars['DateTime']>;
  reviews?: InputMaybe<ShowReviewCreateNestedManyWithoutShowInput>;
  runtime?: InputMaybe<Scalars['Float']>;
  soundtrack?: InputMaybe<SongInShowCreateNestedManyWithoutShowInput>;
  tagline: Scalars['String'];
  title: Scalars['String'];
  trailer?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ShowGroupBy = {
  __typename?: 'ShowGroupBy';
  _avg?: Maybe<ShowAvgAggregate>;
  _count?: Maybe<ShowCountAggregate>;
  _max?: Maybe<ShowMaxAggregate>;
  _min?: Maybe<ShowMinAggregate>;
  _sum?: Maybe<ShowSumAggregate>;
  backdrop: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  locked: Scalars['Boolean'];
  overview: Scalars['String'];
  poster: Scalars['String'];
  rating?: Maybe<Scalars['String']>;
  released?: Maybe<Scalars['DateTime']>;
  runtime?: Maybe<Scalars['Float']>;
  tagline: Scalars['String'];
  title: Scalars['String'];
  trailer?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type ShowLike = {
  __typename?: 'ShowLike';
  createdAt: Scalars['DateTime'];
  show: Show;
  showId: Scalars['Int'];
  user: User;
  userId: Scalars['Int'];
};

export type ShowLikeAvgAggregate = {
  __typename?: 'ShowLikeAvgAggregate';
  showId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type ShowLikeAvgOrderByAggregateInput = {
  showId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ShowLikeCountAggregate = {
  __typename?: 'ShowLikeCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  showId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type ShowLikeCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  showId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ShowLikeCreateCustomInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  show: ShowCreateNestedOneWithoutLikesInput;
};

export type ShowLikeCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  show: ShowCreateNestedOneWithoutLikesInput;
  user: UserCreateNestedOneWithoutLikedShowsInput;
};

export type ShowLikeCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  showId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type ShowLikeCreateManyShowInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type ShowLikeCreateManyShowInputEnvelope = {
  data: ShowLikeCreateManyShowInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ShowLikeCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  showId: Scalars['Int'];
};

export type ShowLikeCreateManyUserInputEnvelope = {
  data: ShowLikeCreateManyUserInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ShowLikeCreateNestedManyWithoutShowInput = {
  connect?: InputMaybe<ShowLikeWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<ShowLikeCreateOrConnectWithoutShowInput[]>;
  create?: InputMaybe<ShowLikeCreateWithoutShowInput[]>;
  createMany?: InputMaybe<ShowLikeCreateManyShowInputEnvelope>;
};

export type ShowLikeCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<ShowLikeWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<ShowLikeCreateOrConnectWithoutUserInput[]>;
  create?: InputMaybe<ShowLikeCreateWithoutUserInput[]>;
  createMany?: InputMaybe<ShowLikeCreateManyUserInputEnvelope>;
};

export type ShowLikeCreateOrConnectWithoutShowInput = {
  create: ShowLikeCreateWithoutShowInput;
  where: ShowLikeWhereUniqueInput;
};

export type ShowLikeCreateOrConnectWithoutUserInput = {
  create: ShowLikeCreateWithoutUserInput;
  where: ShowLikeWhereUniqueInput;
};

export type ShowLikeCreateWithoutShowInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutLikedShowsInput;
};

export type ShowLikeCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  show: ShowCreateNestedOneWithoutLikesInput;
};

export type ShowLikeGroupBy = {
  __typename?: 'ShowLikeGroupBy';
  _avg?: Maybe<ShowLikeAvgAggregate>;
  _count?: Maybe<ShowLikeCountAggregate>;
  _max?: Maybe<ShowLikeMaxAggregate>;
  _min?: Maybe<ShowLikeMinAggregate>;
  _sum?: Maybe<ShowLikeSumAggregate>;
  createdAt: Scalars['DateTime'];
  showId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type ShowLikeListRelationFilter = {
  every?: InputMaybe<ShowLikeWhereInput>;
  none?: InputMaybe<ShowLikeWhereInput>;
  some?: InputMaybe<ShowLikeWhereInput>;
};

export type ShowLikeMaxAggregate = {
  __typename?: 'ShowLikeMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  showId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type ShowLikeMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  showId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ShowLikeMinAggregate = {
  __typename?: 'ShowLikeMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  showId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type ShowLikeMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  showId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ShowLikeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ShowLikeOrderByWithAggregationInput = {
  _avg?: InputMaybe<ShowLikeAvgOrderByAggregateInput>;
  _count?: InputMaybe<ShowLikeCountOrderByAggregateInput>;
  _max?: InputMaybe<ShowLikeMaxOrderByAggregateInput>;
  _min?: InputMaybe<ShowLikeMinOrderByAggregateInput>;
  _sum?: InputMaybe<ShowLikeSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  showId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ShowLikeOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  show?: InputMaybe<ShowOrderByWithRelationInput>;
  showId?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum ShowLikeScalarFieldEnum {
  CreatedAt = 'createdAt',
  ShowId = 'showId',
  UserId = 'userId'
}

export type ShowLikeScalarWhereInput = {
  AND?: InputMaybe<ShowLikeScalarWhereInput[]>;
  NOT?: InputMaybe<ShowLikeScalarWhereInput[]>;
  OR?: InputMaybe<ShowLikeScalarWhereInput[]>;
  createdAt?: InputMaybe<DateTimeFilter>;
  showId?: InputMaybe<IntFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type ShowLikeScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<ShowLikeScalarWhereWithAggregatesInput[]>;
  NOT?: InputMaybe<ShowLikeScalarWhereWithAggregatesInput[]>;
  OR?: InputMaybe<ShowLikeScalarWhereWithAggregatesInput[]>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  showId?: InputMaybe<IntWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
};

export type ShowLikeSumAggregate = {
  __typename?: 'ShowLikeSumAggregate';
  showId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type ShowLikeSumOrderByAggregateInput = {
  showId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ShowLikeUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  show?: InputMaybe<ShowUpdateOneRequiredWithoutLikesInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutLikedShowsInput>;
};

export type ShowLikeUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ShowLikeUpdateManyWithWhereWithoutShowInput = {
  data: ShowLikeUpdateManyMutationInput;
  where: ShowLikeScalarWhereInput;
};

export type ShowLikeUpdateManyWithWhereWithoutUserInput = {
  data: ShowLikeUpdateManyMutationInput;
  where: ShowLikeScalarWhereInput;
};

export type ShowLikeUpdateManyWithoutShowInput = {
  connect?: InputMaybe<ShowLikeWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<ShowLikeCreateOrConnectWithoutShowInput[]>;
  create?: InputMaybe<ShowLikeCreateWithoutShowInput[]>;
  createMany?: InputMaybe<ShowLikeCreateManyShowInputEnvelope>;
  delete?: InputMaybe<ShowLikeWhereUniqueInput[]>;
  deleteMany?: InputMaybe<ShowLikeScalarWhereInput[]>;
  disconnect?: InputMaybe<ShowLikeWhereUniqueInput[]>;
  set?: InputMaybe<ShowLikeWhereUniqueInput[]>;
  update?: InputMaybe<ShowLikeUpdateWithWhereUniqueWithoutShowInput[]>;
  updateMany?: InputMaybe<ShowLikeUpdateManyWithWhereWithoutShowInput[]>;
  upsert?: InputMaybe<ShowLikeUpsertWithWhereUniqueWithoutShowInput[]>;
};

export type ShowLikeUpdateManyWithoutUserInput = {
  connect?: InputMaybe<ShowLikeWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<ShowLikeCreateOrConnectWithoutUserInput[]>;
  create?: InputMaybe<ShowLikeCreateWithoutUserInput[]>;
  createMany?: InputMaybe<ShowLikeCreateManyUserInputEnvelope>;
  delete?: InputMaybe<ShowLikeWhereUniqueInput[]>;
  deleteMany?: InputMaybe<ShowLikeScalarWhereInput[]>;
  disconnect?: InputMaybe<ShowLikeWhereUniqueInput[]>;
  set?: InputMaybe<ShowLikeWhereUniqueInput[]>;
  update?: InputMaybe<ShowLikeUpdateWithWhereUniqueWithoutUserInput[]>;
  updateMany?: InputMaybe<ShowLikeUpdateManyWithWhereWithoutUserInput[]>;
  upsert?: InputMaybe<ShowLikeUpsertWithWhereUniqueWithoutUserInput[]>;
};

export type ShowLikeUpdateWithWhereUniqueWithoutShowInput = {
  data: ShowLikeUpdateWithoutShowInput;
  where: ShowLikeWhereUniqueInput;
};

export type ShowLikeUpdateWithWhereUniqueWithoutUserInput = {
  data: ShowLikeUpdateWithoutUserInput;
  where: ShowLikeWhereUniqueInput;
};

export type ShowLikeUpdateWithoutShowInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutLikedShowsInput>;
};

export type ShowLikeUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  show?: InputMaybe<ShowUpdateOneRequiredWithoutLikesInput>;
};

export type ShowLikeUpsertWithWhereUniqueWithoutShowInput = {
  create: ShowLikeCreateWithoutShowInput;
  update: ShowLikeUpdateWithoutShowInput;
  where: ShowLikeWhereUniqueInput;
};

export type ShowLikeUpsertWithWhereUniqueWithoutUserInput = {
  create: ShowLikeCreateWithoutUserInput;
  update: ShowLikeUpdateWithoutUserInput;
  where: ShowLikeWhereUniqueInput;
};

export type ShowLikeUserIdShowIdCompoundUniqueInput = {
  showId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type ShowLikeWhereInput = {
  AND?: InputMaybe<ShowLikeWhereInput[]>;
  NOT?: InputMaybe<ShowLikeWhereInput[]>;
  OR?: InputMaybe<ShowLikeWhereInput[]>;
  createdAt?: InputMaybe<DateTimeFilter>;
  show?: InputMaybe<ShowRelationFilter>;
  showId?: InputMaybe<IntFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type ShowLikeWhereUniqueInput = {
  userId_showId?: InputMaybe<ShowLikeUserIdShowIdCompoundUniqueInput>;
};

export type ShowListRelationFilter = {
  every?: InputMaybe<ShowWhereInput>;
  none?: InputMaybe<ShowWhereInput>;
  some?: InputMaybe<ShowWhereInput>;
};

export type ShowMaxAggregate = {
  __typename?: 'ShowMaxAggregate';
  backdrop?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  locked?: Maybe<Scalars['Boolean']>;
  overview?: Maybe<Scalars['String']>;
  poster?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['String']>;
  released?: Maybe<Scalars['DateTime']>;
  runtime?: Maybe<Scalars['Float']>;
  tagline?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  trailer?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShowMaxOrderByAggregateInput = {
  backdrop?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  locked?: InputMaybe<SortOrder>;
  overview?: InputMaybe<SortOrder>;
  poster?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  released?: InputMaybe<SortOrder>;
  runtime?: InputMaybe<SortOrder>;
  tagline?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  trailer?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ShowMinAggregate = {
  __typename?: 'ShowMinAggregate';
  backdrop?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  locked?: Maybe<Scalars['Boolean']>;
  overview?: Maybe<Scalars['String']>;
  poster?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['String']>;
  released?: Maybe<Scalars['DateTime']>;
  runtime?: Maybe<Scalars['Float']>;
  tagline?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  trailer?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShowMinOrderByAggregateInput = {
  backdrop?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  locked?: InputMaybe<SortOrder>;
  overview?: InputMaybe<SortOrder>;
  poster?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  released?: InputMaybe<SortOrder>;
  runtime?: InputMaybe<SortOrder>;
  tagline?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  trailer?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ShowOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ShowOrderByWithAggregationInput = {
  _avg?: InputMaybe<ShowAvgOrderByAggregateInput>;
  _count?: InputMaybe<ShowCountOrderByAggregateInput>;
  _max?: InputMaybe<ShowMaxOrderByAggregateInput>;
  _min?: InputMaybe<ShowMinOrderByAggregateInput>;
  _sum?: InputMaybe<ShowSumOrderByAggregateInput>;
  backdrop?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  locked?: InputMaybe<SortOrder>;
  overview?: InputMaybe<SortOrder>;
  poster?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  released?: InputMaybe<SortOrder>;
  runtime?: InputMaybe<SortOrder>;
  tagline?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  trailer?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ShowOrderByWithRelationInput = {
  actors?: InputMaybe<ActorInShowOrderByRelationAggregateInput>;
  backdrop?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  genres?: InputMaybe<GenreOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  likes?: InputMaybe<ShowLikeOrderByRelationAggregateInput>;
  locked?: InputMaybe<SortOrder>;
  overview?: InputMaybe<SortOrder>;
  platforms?: InputMaybe<PlatformOrderByRelationAggregateInput>;
  poster?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  released?: InputMaybe<SortOrder>;
  reviews?: InputMaybe<ShowReviewOrderByRelationAggregateInput>;
  runtime?: InputMaybe<SortOrder>;
  soundtrack?: InputMaybe<SongInShowOrderByRelationAggregateInput>;
  tagline?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  trailer?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  watchlist?: InputMaybe<WatchlistOrderByRelationAggregateInput>;
};

export type ShowRelationFilter = {
  is?: InputMaybe<ShowWhereInput>;
  isNot?: InputMaybe<ShowWhereInput>;
};

export type ShowReview = {
  __typename?: 'ShowReview';
  _count?: Maybe<ShowReviewCount>;
  likes: ShowReviewLike[];
  rating: Scalars['Int'];
  review?: Maybe<Scalars['String']>;
  show: Show;
  showId: Scalars['Int'];
  user: User;
  userId: Scalars['Int'];
};

export type ShowReviewLikesArgs = {
  cursor?: InputMaybe<ShowReviewLikeWhereUniqueInput>;
  distinct?: InputMaybe<ShowReviewLikeScalarFieldEnum[]>;
  orderBy?: InputMaybe<ShowReviewLikeOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ShowReviewLikeWhereInput>;
};

export type ShowReviewAvgAggregate = {
  __typename?: 'ShowReviewAvgAggregate';
  rating?: Maybe<Scalars['Float']>;
  showId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type ShowReviewAvgOrderByAggregateInput = {
  rating?: InputMaybe<SortOrder>;
  showId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ShowReviewCount = {
  __typename?: 'ShowReviewCount';
  likes: Scalars['Int'];
};

export type ShowReviewCountAggregate = {
  __typename?: 'ShowReviewCountAggregate';
  _all: Scalars['Int'];
  rating: Scalars['Int'];
  review: Scalars['Int'];
  showId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type ShowReviewCountOrderByAggregateInput = {
  rating?: InputMaybe<SortOrder>;
  review?: InputMaybe<SortOrder>;
  showId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ShowReviewCreateCustomInput = {
  likes?: InputMaybe<ShowReviewLikeCreateNestedManyWithoutShowReviewInput>;
  rating: Scalars['Int'];
  review?: InputMaybe<Scalars['String']>;
  show: ShowCreateNestedOneWithoutReviewsInput;
};

export type ShowReviewCreateInput = {
  likes?: InputMaybe<ShowReviewLikeCreateNestedManyWithoutShowReviewInput>;
  rating: Scalars['Int'];
  review?: InputMaybe<Scalars['String']>;
  show: ShowCreateNestedOneWithoutReviewsInput;
  user: UserCreateNestedOneWithoutShowReviewsInput;
};

export type ShowReviewCreateManyInput = {
  rating: Scalars['Int'];
  review?: InputMaybe<Scalars['String']>;
  showId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type ShowReviewCreateManyShowInput = {
  rating: Scalars['Int'];
  review?: InputMaybe<Scalars['String']>;
  userId: Scalars['Int'];
};

export type ShowReviewCreateManyShowInputEnvelope = {
  data: ShowReviewCreateManyShowInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ShowReviewCreateManyUserInput = {
  rating: Scalars['Int'];
  review?: InputMaybe<Scalars['String']>;
  showId: Scalars['Int'];
};

export type ShowReviewCreateManyUserInputEnvelope = {
  data: ShowReviewCreateManyUserInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ShowReviewCreateNestedManyWithoutShowInput = {
  connect?: InputMaybe<ShowReviewWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<ShowReviewCreateOrConnectWithoutShowInput[]>;
  create?: InputMaybe<ShowReviewCreateWithoutShowInput[]>;
  createMany?: InputMaybe<ShowReviewCreateManyShowInputEnvelope>;
};

export type ShowReviewCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<ShowReviewWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<ShowReviewCreateOrConnectWithoutUserInput[]>;
  create?: InputMaybe<ShowReviewCreateWithoutUserInput[]>;
  createMany?: InputMaybe<ShowReviewCreateManyUserInputEnvelope>;
};

export type ShowReviewCreateNestedOneWithoutLikesInput = {
  connect?: InputMaybe<ShowReviewWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ShowReviewCreateOrConnectWithoutLikesInput>;
  create?: InputMaybe<ShowReviewCreateWithoutLikesInput>;
};

export type ShowReviewCreateOrConnectWithoutLikesInput = {
  create: ShowReviewCreateWithoutLikesInput;
  where: ShowReviewWhereUniqueInput;
};

export type ShowReviewCreateOrConnectWithoutShowInput = {
  create: ShowReviewCreateWithoutShowInput;
  where: ShowReviewWhereUniqueInput;
};

export type ShowReviewCreateOrConnectWithoutUserInput = {
  create: ShowReviewCreateWithoutUserInput;
  where: ShowReviewWhereUniqueInput;
};

export type ShowReviewCreateWithoutLikesInput = {
  rating: Scalars['Int'];
  review?: InputMaybe<Scalars['String']>;
  show: ShowCreateNestedOneWithoutReviewsInput;
  user: UserCreateNestedOneWithoutShowReviewsInput;
};

export type ShowReviewCreateWithoutShowInput = {
  likes?: InputMaybe<ShowReviewLikeCreateNestedManyWithoutShowReviewInput>;
  rating: Scalars['Int'];
  review?: InputMaybe<Scalars['String']>;
  user: UserCreateNestedOneWithoutShowReviewsInput;
};

export type ShowReviewCreateWithoutUserInput = {
  likes?: InputMaybe<ShowReviewLikeCreateNestedManyWithoutShowReviewInput>;
  rating: Scalars['Int'];
  review?: InputMaybe<Scalars['String']>;
  show: ShowCreateNestedOneWithoutReviewsInput;
};

export type ShowReviewGroupBy = {
  __typename?: 'ShowReviewGroupBy';
  _avg?: Maybe<ShowReviewAvgAggregate>;
  _count?: Maybe<ShowReviewCountAggregate>;
  _max?: Maybe<ShowReviewMaxAggregate>;
  _min?: Maybe<ShowReviewMinAggregate>;
  _sum?: Maybe<ShowReviewSumAggregate>;
  rating: Scalars['Int'];
  review?: Maybe<Scalars['String']>;
  showId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type ShowReviewLike = {
  __typename?: 'ShowReviewLike';
  createdAt: Scalars['DateTime'];
  reviewShowId: Scalars['Int'];
  reviewUserId: Scalars['Int'];
  showReview: ShowReview;
  user: User;
  userId: Scalars['Int'];
};

export type ShowReviewLikeAvgAggregate = {
  __typename?: 'ShowReviewLikeAvgAggregate';
  reviewShowId?: Maybe<Scalars['Float']>;
  reviewUserId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type ShowReviewLikeAvgOrderByAggregateInput = {
  reviewShowId?: InputMaybe<SortOrder>;
  reviewUserId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ShowReviewLikeCountAggregate = {
  __typename?: 'ShowReviewLikeCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  reviewShowId: Scalars['Int'];
  reviewUserId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type ShowReviewLikeCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  reviewShowId?: InputMaybe<SortOrder>;
  reviewUserId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ShowReviewLikeCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  showReview: ShowReviewCreateNestedOneWithoutLikesInput;
  user: UserCreateNestedOneWithoutShowReviewLikesInput;
};

export type ShowReviewLikeCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  reviewShowId: Scalars['Int'];
  reviewUserId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type ShowReviewLikeCreateManyShowReviewInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type ShowReviewLikeCreateManyShowReviewInputEnvelope = {
  data: ShowReviewLikeCreateManyShowReviewInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ShowReviewLikeCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  reviewShowId: Scalars['Int'];
  reviewUserId: Scalars['Int'];
};

export type ShowReviewLikeCreateManyUserInputEnvelope = {
  data: ShowReviewLikeCreateManyUserInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ShowReviewLikeCreateNestedManyWithoutShowReviewInput = {
  connect?: InputMaybe<ShowReviewLikeWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<ShowReviewLikeCreateOrConnectWithoutShowReviewInput[]>;
  create?: InputMaybe<ShowReviewLikeCreateWithoutShowReviewInput[]>;
  createMany?: InputMaybe<ShowReviewLikeCreateManyShowReviewInputEnvelope>;
};

export type ShowReviewLikeCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<ShowReviewLikeWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<ShowReviewLikeCreateOrConnectWithoutUserInput[]>;
  create?: InputMaybe<ShowReviewLikeCreateWithoutUserInput[]>;
  createMany?: InputMaybe<ShowReviewLikeCreateManyUserInputEnvelope>;
};

export type ShowReviewLikeCreateOrConnectWithoutShowReviewInput = {
  create: ShowReviewLikeCreateWithoutShowReviewInput;
  where: ShowReviewLikeWhereUniqueInput;
};

export type ShowReviewLikeCreateOrConnectWithoutUserInput = {
  create: ShowReviewLikeCreateWithoutUserInput;
  where: ShowReviewLikeWhereUniqueInput;
};

export type ShowReviewLikeCreateWithoutShowReviewInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutShowReviewLikesInput;
};

export type ShowReviewLikeCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  showReview: ShowReviewCreateNestedOneWithoutLikesInput;
};

export type ShowReviewLikeGroupBy = {
  __typename?: 'ShowReviewLikeGroupBy';
  _avg?: Maybe<ShowReviewLikeAvgAggregate>;
  _count?: Maybe<ShowReviewLikeCountAggregate>;
  _max?: Maybe<ShowReviewLikeMaxAggregate>;
  _min?: Maybe<ShowReviewLikeMinAggregate>;
  _sum?: Maybe<ShowReviewLikeSumAggregate>;
  createdAt: Scalars['DateTime'];
  reviewShowId: Scalars['Int'];
  reviewUserId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type ShowReviewLikeListRelationFilter = {
  every?: InputMaybe<ShowReviewLikeWhereInput>;
  none?: InputMaybe<ShowReviewLikeWhereInput>;
  some?: InputMaybe<ShowReviewLikeWhereInput>;
};

export type ShowReviewLikeMaxAggregate = {
  __typename?: 'ShowReviewLikeMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  reviewShowId?: Maybe<Scalars['Int']>;
  reviewUserId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type ShowReviewLikeMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  reviewShowId?: InputMaybe<SortOrder>;
  reviewUserId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ShowReviewLikeMinAggregate = {
  __typename?: 'ShowReviewLikeMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  reviewShowId?: Maybe<Scalars['Int']>;
  reviewUserId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type ShowReviewLikeMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  reviewShowId?: InputMaybe<SortOrder>;
  reviewUserId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ShowReviewLikeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ShowReviewLikeOrderByWithAggregationInput = {
  _avg?: InputMaybe<ShowReviewLikeAvgOrderByAggregateInput>;
  _count?: InputMaybe<ShowReviewLikeCountOrderByAggregateInput>;
  _max?: InputMaybe<ShowReviewLikeMaxOrderByAggregateInput>;
  _min?: InputMaybe<ShowReviewLikeMinOrderByAggregateInput>;
  _sum?: InputMaybe<ShowReviewLikeSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  reviewShowId?: InputMaybe<SortOrder>;
  reviewUserId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ShowReviewLikeOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  reviewShowId?: InputMaybe<SortOrder>;
  reviewUserId?: InputMaybe<SortOrder>;
  showReview?: InputMaybe<ShowReviewOrderByWithRelationInput>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum ShowReviewLikeScalarFieldEnum {
  CreatedAt = 'createdAt',
  ReviewShowId = 'reviewShowId',
  ReviewUserId = 'reviewUserId',
  UserId = 'userId'
}

export type ShowReviewLikeScalarWhereInput = {
  AND?: InputMaybe<ShowReviewLikeScalarWhereInput[]>;
  NOT?: InputMaybe<ShowReviewLikeScalarWhereInput[]>;
  OR?: InputMaybe<ShowReviewLikeScalarWhereInput[]>;
  createdAt?: InputMaybe<DateTimeFilter>;
  reviewShowId?: InputMaybe<IntFilter>;
  reviewUserId?: InputMaybe<IntFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type ShowReviewLikeScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<ShowReviewLikeScalarWhereWithAggregatesInput[]>;
  NOT?: InputMaybe<ShowReviewLikeScalarWhereWithAggregatesInput[]>;
  OR?: InputMaybe<ShowReviewLikeScalarWhereWithAggregatesInput[]>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  reviewShowId?: InputMaybe<IntWithAggregatesFilter>;
  reviewUserId?: InputMaybe<IntWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
};

export type ShowReviewLikeSumAggregate = {
  __typename?: 'ShowReviewLikeSumAggregate';
  reviewShowId?: Maybe<Scalars['Int']>;
  reviewUserId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type ShowReviewLikeSumOrderByAggregateInput = {
  reviewShowId?: InputMaybe<SortOrder>;
  reviewUserId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ShowReviewLikeUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  showReview?: InputMaybe<ShowReviewUpdateOneRequiredWithoutLikesInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutShowReviewLikesInput>;
};

export type ShowReviewLikeUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ShowReviewLikeUpdateManyWithWhereWithoutShowReviewInput = {
  data: ShowReviewLikeUpdateManyMutationInput;
  where: ShowReviewLikeScalarWhereInput;
};

export type ShowReviewLikeUpdateManyWithWhereWithoutUserInput = {
  data: ShowReviewLikeUpdateManyMutationInput;
  where: ShowReviewLikeScalarWhereInput;
};

export type ShowReviewLikeUpdateManyWithoutShowReviewInput = {
  connect?: InputMaybe<ShowReviewLikeWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<ShowReviewLikeCreateOrConnectWithoutShowReviewInput[]>;
  create?: InputMaybe<ShowReviewLikeCreateWithoutShowReviewInput[]>;
  createMany?: InputMaybe<ShowReviewLikeCreateManyShowReviewInputEnvelope>;
  delete?: InputMaybe<ShowReviewLikeWhereUniqueInput[]>;
  deleteMany?: InputMaybe<ShowReviewLikeScalarWhereInput[]>;
  disconnect?: InputMaybe<ShowReviewLikeWhereUniqueInput[]>;
  set?: InputMaybe<ShowReviewLikeWhereUniqueInput[]>;
  update?: InputMaybe<ShowReviewLikeUpdateWithWhereUniqueWithoutShowReviewInput[]>;
  updateMany?: InputMaybe<ShowReviewLikeUpdateManyWithWhereWithoutShowReviewInput[]>;
  upsert?: InputMaybe<ShowReviewLikeUpsertWithWhereUniqueWithoutShowReviewInput[]>;
};

export type ShowReviewLikeUpdateManyWithoutUserInput = {
  connect?: InputMaybe<ShowReviewLikeWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<ShowReviewLikeCreateOrConnectWithoutUserInput[]>;
  create?: InputMaybe<ShowReviewLikeCreateWithoutUserInput[]>;
  createMany?: InputMaybe<ShowReviewLikeCreateManyUserInputEnvelope>;
  delete?: InputMaybe<ShowReviewLikeWhereUniqueInput[]>;
  deleteMany?: InputMaybe<ShowReviewLikeScalarWhereInput[]>;
  disconnect?: InputMaybe<ShowReviewLikeWhereUniqueInput[]>;
  set?: InputMaybe<ShowReviewLikeWhereUniqueInput[]>;
  update?: InputMaybe<ShowReviewLikeUpdateWithWhereUniqueWithoutUserInput[]>;
  updateMany?: InputMaybe<ShowReviewLikeUpdateManyWithWhereWithoutUserInput[]>;
  upsert?: InputMaybe<ShowReviewLikeUpsertWithWhereUniqueWithoutUserInput[]>;
};

export type ShowReviewLikeUpdateWithWhereUniqueWithoutShowReviewInput = {
  data: ShowReviewLikeUpdateWithoutShowReviewInput;
  where: ShowReviewLikeWhereUniqueInput;
};

export type ShowReviewLikeUpdateWithWhereUniqueWithoutUserInput = {
  data: ShowReviewLikeUpdateWithoutUserInput;
  where: ShowReviewLikeWhereUniqueInput;
};

export type ShowReviewLikeUpdateWithoutShowReviewInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutShowReviewLikesInput>;
};

export type ShowReviewLikeUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  showReview?: InputMaybe<ShowReviewUpdateOneRequiredWithoutLikesInput>;
};

export type ShowReviewLikeUpsertWithWhereUniqueWithoutShowReviewInput = {
  create: ShowReviewLikeCreateWithoutShowReviewInput;
  update: ShowReviewLikeUpdateWithoutShowReviewInput;
  where: ShowReviewLikeWhereUniqueInput;
};

export type ShowReviewLikeUpsertWithWhereUniqueWithoutUserInput = {
  create: ShowReviewLikeCreateWithoutUserInput;
  update: ShowReviewLikeUpdateWithoutUserInput;
  where: ShowReviewLikeWhereUniqueInput;
};

export type ShowReviewLikeUserIdReviewUserIdReviewShowIdCompoundUniqueInput = {
  reviewShowId: Scalars['Int'];
  reviewUserId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type ShowReviewLikeWhereInput = {
  AND?: InputMaybe<ShowReviewLikeWhereInput[]>;
  NOT?: InputMaybe<ShowReviewLikeWhereInput[]>;
  OR?: InputMaybe<ShowReviewLikeWhereInput[]>;
  createdAt?: InputMaybe<DateTimeFilter>;
  reviewShowId?: InputMaybe<IntFilter>;
  reviewUserId?: InputMaybe<IntFilter>;
  showReview?: InputMaybe<ShowReviewRelationFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type ShowReviewLikeWhereUniqueInput = {
  userId_reviewUserId_reviewShowId?: InputMaybe<ShowReviewLikeUserIdReviewUserIdReviewShowIdCompoundUniqueInput>;
};

export type ShowReviewListRelationFilter = {
  every?: InputMaybe<ShowReviewWhereInput>;
  none?: InputMaybe<ShowReviewWhereInput>;
  some?: InputMaybe<ShowReviewWhereInput>;
};

export type ShowReviewMaxAggregate = {
  __typename?: 'ShowReviewMaxAggregate';
  rating?: Maybe<Scalars['Int']>;
  review?: Maybe<Scalars['String']>;
  showId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type ShowReviewMaxOrderByAggregateInput = {
  rating?: InputMaybe<SortOrder>;
  review?: InputMaybe<SortOrder>;
  showId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ShowReviewMinAggregate = {
  __typename?: 'ShowReviewMinAggregate';
  rating?: Maybe<Scalars['Int']>;
  review?: Maybe<Scalars['String']>;
  showId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type ShowReviewMinOrderByAggregateInput = {
  rating?: InputMaybe<SortOrder>;
  review?: InputMaybe<SortOrder>;
  showId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ShowReviewOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ShowReviewOrderByWithAggregationInput = {
  _avg?: InputMaybe<ShowReviewAvgOrderByAggregateInput>;
  _count?: InputMaybe<ShowReviewCountOrderByAggregateInput>;
  _max?: InputMaybe<ShowReviewMaxOrderByAggregateInput>;
  _min?: InputMaybe<ShowReviewMinOrderByAggregateInput>;
  _sum?: InputMaybe<ShowReviewSumOrderByAggregateInput>;
  rating?: InputMaybe<SortOrder>;
  review?: InputMaybe<SortOrder>;
  showId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ShowReviewOrderByWithRelationInput = {
  likes?: InputMaybe<ShowReviewLikeOrderByRelationAggregateInput>;
  rating?: InputMaybe<SortOrder>;
  review?: InputMaybe<SortOrder>;
  show?: InputMaybe<ShowOrderByWithRelationInput>;
  showId?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type ShowReviewRelationFilter = {
  is?: InputMaybe<ShowReviewWhereInput>;
  isNot?: InputMaybe<ShowReviewWhereInput>;
};

export enum ShowReviewScalarFieldEnum {
  Rating = 'rating',
  Review = 'review',
  ShowId = 'showId',
  UserId = 'userId'
}

export type ShowReviewScalarWhereInput = {
  AND?: InputMaybe<ShowReviewScalarWhereInput[]>;
  NOT?: InputMaybe<ShowReviewScalarWhereInput[]>;
  OR?: InputMaybe<ShowReviewScalarWhereInput[]>;
  rating?: InputMaybe<IntFilter>;
  review?: InputMaybe<StringNullableFilter>;
  showId?: InputMaybe<IntFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type ShowReviewScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<ShowReviewScalarWhereWithAggregatesInput[]>;
  NOT?: InputMaybe<ShowReviewScalarWhereWithAggregatesInput[]>;
  OR?: InputMaybe<ShowReviewScalarWhereWithAggregatesInput[]>;
  rating?: InputMaybe<IntWithAggregatesFilter>;
  review?: InputMaybe<StringNullableWithAggregatesFilter>;
  showId?: InputMaybe<IntWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
};

export type ShowReviewSumAggregate = {
  __typename?: 'ShowReviewSumAggregate';
  rating?: Maybe<Scalars['Int']>;
  showId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type ShowReviewSumOrderByAggregateInput = {
  rating?: InputMaybe<SortOrder>;
  showId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ShowReviewUpdateInput = {
  likes?: InputMaybe<ShowReviewLikeUpdateManyWithoutShowReviewInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  review?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  show?: InputMaybe<ShowUpdateOneRequiredWithoutReviewsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutShowReviewsInput>;
};

export type ShowReviewUpdateManyMutationInput = {
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  review?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ShowReviewUpdateManyWithWhereWithoutShowInput = {
  data: ShowReviewUpdateManyMutationInput;
  where: ShowReviewScalarWhereInput;
};

export type ShowReviewUpdateManyWithWhereWithoutUserInput = {
  data: ShowReviewUpdateManyMutationInput;
  where: ShowReviewScalarWhereInput;
};

export type ShowReviewUpdateManyWithoutShowInput = {
  connect?: InputMaybe<ShowReviewWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<ShowReviewCreateOrConnectWithoutShowInput[]>;
  create?: InputMaybe<ShowReviewCreateWithoutShowInput[]>;
  createMany?: InputMaybe<ShowReviewCreateManyShowInputEnvelope>;
  delete?: InputMaybe<ShowReviewWhereUniqueInput[]>;
  deleteMany?: InputMaybe<ShowReviewScalarWhereInput[]>;
  disconnect?: InputMaybe<ShowReviewWhereUniqueInput[]>;
  set?: InputMaybe<ShowReviewWhereUniqueInput[]>;
  update?: InputMaybe<ShowReviewUpdateWithWhereUniqueWithoutShowInput[]>;
  updateMany?: InputMaybe<ShowReviewUpdateManyWithWhereWithoutShowInput[]>;
  upsert?: InputMaybe<ShowReviewUpsertWithWhereUniqueWithoutShowInput[]>;
};

export type ShowReviewUpdateManyWithoutUserInput = {
  connect?: InputMaybe<ShowReviewWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<ShowReviewCreateOrConnectWithoutUserInput[]>;
  create?: InputMaybe<ShowReviewCreateWithoutUserInput[]>;
  createMany?: InputMaybe<ShowReviewCreateManyUserInputEnvelope>;
  delete?: InputMaybe<ShowReviewWhereUniqueInput[]>;
  deleteMany?: InputMaybe<ShowReviewScalarWhereInput[]>;
  disconnect?: InputMaybe<ShowReviewWhereUniqueInput[]>;
  set?: InputMaybe<ShowReviewWhereUniqueInput[]>;
  update?: InputMaybe<ShowReviewUpdateWithWhereUniqueWithoutUserInput[]>;
  updateMany?: InputMaybe<ShowReviewUpdateManyWithWhereWithoutUserInput[]>;
  upsert?: InputMaybe<ShowReviewUpsertWithWhereUniqueWithoutUserInput[]>;
};

export type ShowReviewUpdateOneRequiredWithoutLikesInput = {
  connect?: InputMaybe<ShowReviewWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ShowReviewCreateOrConnectWithoutLikesInput>;
  create?: InputMaybe<ShowReviewCreateWithoutLikesInput>;
  update?: InputMaybe<ShowReviewUpdateWithoutLikesInput>;
  upsert?: InputMaybe<ShowReviewUpsertWithoutLikesInput>;
};

export type ShowReviewUpdateWithWhereUniqueWithoutShowInput = {
  data: ShowReviewUpdateWithoutShowInput;
  where: ShowReviewWhereUniqueInput;
};

export type ShowReviewUpdateWithWhereUniqueWithoutUserInput = {
  data: ShowReviewUpdateWithoutUserInput;
  where: ShowReviewWhereUniqueInput;
};

export type ShowReviewUpdateWithoutLikesInput = {
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  review?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  show?: InputMaybe<ShowUpdateOneRequiredWithoutReviewsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutShowReviewsInput>;
};

export type ShowReviewUpdateWithoutShowInput = {
  likes?: InputMaybe<ShowReviewLikeUpdateManyWithoutShowReviewInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  review?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutShowReviewsInput>;
};

export type ShowReviewUpdateWithoutUserInput = {
  likes?: InputMaybe<ShowReviewLikeUpdateManyWithoutShowReviewInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  review?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  show?: InputMaybe<ShowUpdateOneRequiredWithoutReviewsInput>;
};

export type ShowReviewUpsertWithWhereUniqueWithoutShowInput = {
  create: ShowReviewCreateWithoutShowInput;
  update: ShowReviewUpdateWithoutShowInput;
  where: ShowReviewWhereUniqueInput;
};

export type ShowReviewUpsertWithWhereUniqueWithoutUserInput = {
  create: ShowReviewCreateWithoutUserInput;
  update: ShowReviewUpdateWithoutUserInput;
  where: ShowReviewWhereUniqueInput;
};

export type ShowReviewUpsertWithoutLikesInput = {
  create: ShowReviewCreateWithoutLikesInput;
  update: ShowReviewUpdateWithoutLikesInput;
};

export type ShowReviewUserIdShowIdCompoundUniqueInput = {
  showId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type ShowReviewWhereInput = {
  AND?: InputMaybe<ShowReviewWhereInput[]>;
  NOT?: InputMaybe<ShowReviewWhereInput[]>;
  OR?: InputMaybe<ShowReviewWhereInput[]>;
  likes?: InputMaybe<ShowReviewLikeListRelationFilter>;
  rating?: InputMaybe<IntFilter>;
  review?: InputMaybe<StringNullableFilter>;
  show?: InputMaybe<ShowRelationFilter>;
  showId?: InputMaybe<IntFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type ShowReviewWhereUniqueInput = {
  userId_showId?: InputMaybe<ShowReviewUserIdShowIdCompoundUniqueInput>;
};

export enum ShowScalarFieldEnum {
  Backdrop = 'backdrop',
  CreatedAt = 'createdAt',
  Id = 'id',
  Locked = 'locked',
  Overview = 'overview',
  Poster = 'poster',
  Rating = 'rating',
  Released = 'released',
  Runtime = 'runtime',
  Tagline = 'tagline',
  Title = 'title',
  Trailer = 'trailer',
  UpdatedAt = 'updatedAt'
}

export type ShowScalarWhereInput = {
  AND?: InputMaybe<ShowScalarWhereInput[]>;
  NOT?: InputMaybe<ShowScalarWhereInput[]>;
  OR?: InputMaybe<ShowScalarWhereInput[]>;
  backdrop?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  locked?: InputMaybe<BoolFilter>;
  overview?: InputMaybe<StringFilter>;
  poster?: InputMaybe<StringFilter>;
  rating?: InputMaybe<StringNullableFilter>;
  released?: InputMaybe<DateTimeNullableFilter>;
  runtime?: InputMaybe<FloatNullableFilter>;
  tagline?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  trailer?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ShowScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<ShowScalarWhereWithAggregatesInput[]>;
  NOT?: InputMaybe<ShowScalarWhereWithAggregatesInput[]>;
  OR?: InputMaybe<ShowScalarWhereWithAggregatesInput[]>;
  backdrop?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  locked?: InputMaybe<BoolWithAggregatesFilter>;
  overview?: InputMaybe<StringWithAggregatesFilter>;
  poster?: InputMaybe<StringWithAggregatesFilter>;
  rating?: InputMaybe<StringNullableWithAggregatesFilter>;
  released?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  runtime?: InputMaybe<FloatNullableWithAggregatesFilter>;
  tagline?: InputMaybe<StringWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  trailer?: InputMaybe<StringNullableWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type ShowSumAggregate = {
  __typename?: 'ShowSumAggregate';
  id?: Maybe<Scalars['Int']>;
  runtime?: Maybe<Scalars['Float']>;
};

export type ShowSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  runtime?: InputMaybe<SortOrder>;
};

export type ShowUpdateInput = {
  actors?: InputMaybe<ActorInShowUpdateManyWithoutShowInput>;
  backdrop?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutShowsInput>;
  likes?: InputMaybe<ShowLikeUpdateManyWithoutShowInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  overview?: InputMaybe<StringFieldUpdateOperationsInput>;
  platforms?: InputMaybe<PlatformUpdateManyWithoutShowsInput>;
  poster?: InputMaybe<StringFieldUpdateOperationsInput>;
  rating?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  reviews?: InputMaybe<ShowReviewUpdateManyWithoutShowInput>;
  runtime?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  soundtrack?: InputMaybe<SongInShowUpdateManyWithoutShowInput>;
  tagline?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  trailer?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<WatchlistUpdateManyWithoutShowsInput>;
};

export type ShowUpdateManyMutationInput = {
  backdrop?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  overview?: InputMaybe<StringFieldUpdateOperationsInput>;
  poster?: InputMaybe<StringFieldUpdateOperationsInput>;
  rating?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  runtime?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  tagline?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  trailer?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
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

export type ShowUpdateOneRequiredWithoutLikesInput = {
  connect?: InputMaybe<ShowWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ShowCreateOrConnectWithoutLikesInput>;
  create?: InputMaybe<ShowCreateWithoutLikesInput>;
  update?: InputMaybe<ShowUpdateWithoutLikesInput>;
  upsert?: InputMaybe<ShowUpsertWithoutLikesInput>;
};

export type ShowUpdateOneRequiredWithoutReviewsInput = {
  connect?: InputMaybe<ShowWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ShowCreateOrConnectWithoutReviewsInput>;
  create?: InputMaybe<ShowCreateWithoutReviewsInput>;
  update?: InputMaybe<ShowUpdateWithoutReviewsInput>;
  upsert?: InputMaybe<ShowUpsertWithoutReviewsInput>;
};

export type ShowUpdateOneRequiredWithoutSoundtrackInput = {
  connect?: InputMaybe<ShowWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ShowCreateOrConnectWithoutSoundtrackInput>;
  create?: InputMaybe<ShowCreateWithoutSoundtrackInput>;
  update?: InputMaybe<ShowUpdateWithoutSoundtrackInput>;
  upsert?: InputMaybe<ShowUpsertWithoutSoundtrackInput>;
};

export type ShowUpdateWithWhereUniqueWithoutGenresInput = {
  data: ShowUpdateWithoutGenresInput;
  where: ShowWhereUniqueInput;
};

export type ShowUpdateWithWhereUniqueWithoutPlatformsInput = {
  data: ShowUpdateWithoutPlatformsInput;
  where: ShowWhereUniqueInput;
};

export type ShowUpdateWithWhereUniqueWithoutWatchlistInput = {
  data: ShowUpdateWithoutWatchlistInput;
  where: ShowWhereUniqueInput;
};

export type ShowUpdateWithoutActorsInput = {
  backdrop?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutShowsInput>;
  likes?: InputMaybe<ShowLikeUpdateManyWithoutShowInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  overview?: InputMaybe<StringFieldUpdateOperationsInput>;
  platforms?: InputMaybe<PlatformUpdateManyWithoutShowsInput>;
  poster?: InputMaybe<StringFieldUpdateOperationsInput>;
  rating?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  reviews?: InputMaybe<ShowReviewUpdateManyWithoutShowInput>;
  runtime?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  soundtrack?: InputMaybe<SongInShowUpdateManyWithoutShowInput>;
  tagline?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  trailer?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<WatchlistUpdateManyWithoutShowsInput>;
};

export type ShowUpdateWithoutGenresInput = {
  actors?: InputMaybe<ActorInShowUpdateManyWithoutShowInput>;
  backdrop?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  likes?: InputMaybe<ShowLikeUpdateManyWithoutShowInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  overview?: InputMaybe<StringFieldUpdateOperationsInput>;
  platforms?: InputMaybe<PlatformUpdateManyWithoutShowsInput>;
  poster?: InputMaybe<StringFieldUpdateOperationsInput>;
  rating?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  reviews?: InputMaybe<ShowReviewUpdateManyWithoutShowInput>;
  runtime?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  soundtrack?: InputMaybe<SongInShowUpdateManyWithoutShowInput>;
  tagline?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  trailer?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<WatchlistUpdateManyWithoutShowsInput>;
};

export type ShowUpdateWithoutLikesInput = {
  actors?: InputMaybe<ActorInShowUpdateManyWithoutShowInput>;
  backdrop?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutShowsInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  overview?: InputMaybe<StringFieldUpdateOperationsInput>;
  platforms?: InputMaybe<PlatformUpdateManyWithoutShowsInput>;
  poster?: InputMaybe<StringFieldUpdateOperationsInput>;
  rating?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  reviews?: InputMaybe<ShowReviewUpdateManyWithoutShowInput>;
  runtime?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  soundtrack?: InputMaybe<SongInShowUpdateManyWithoutShowInput>;
  tagline?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  trailer?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<WatchlistUpdateManyWithoutShowsInput>;
};

export type ShowUpdateWithoutPlatformsInput = {
  actors?: InputMaybe<ActorInShowUpdateManyWithoutShowInput>;
  backdrop?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutShowsInput>;
  likes?: InputMaybe<ShowLikeUpdateManyWithoutShowInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  overview?: InputMaybe<StringFieldUpdateOperationsInput>;
  poster?: InputMaybe<StringFieldUpdateOperationsInput>;
  rating?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  reviews?: InputMaybe<ShowReviewUpdateManyWithoutShowInput>;
  runtime?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  soundtrack?: InputMaybe<SongInShowUpdateManyWithoutShowInput>;
  tagline?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  trailer?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<WatchlistUpdateManyWithoutShowsInput>;
};

export type ShowUpdateWithoutReviewsInput = {
  actors?: InputMaybe<ActorInShowUpdateManyWithoutShowInput>;
  backdrop?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutShowsInput>;
  likes?: InputMaybe<ShowLikeUpdateManyWithoutShowInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  overview?: InputMaybe<StringFieldUpdateOperationsInput>;
  platforms?: InputMaybe<PlatformUpdateManyWithoutShowsInput>;
  poster?: InputMaybe<StringFieldUpdateOperationsInput>;
  rating?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  runtime?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  soundtrack?: InputMaybe<SongInShowUpdateManyWithoutShowInput>;
  tagline?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  trailer?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<WatchlistUpdateManyWithoutShowsInput>;
};

export type ShowUpdateWithoutSoundtrackInput = {
  actors?: InputMaybe<ActorInShowUpdateManyWithoutShowInput>;
  backdrop?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutShowsInput>;
  likes?: InputMaybe<ShowLikeUpdateManyWithoutShowInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  overview?: InputMaybe<StringFieldUpdateOperationsInput>;
  platforms?: InputMaybe<PlatformUpdateManyWithoutShowsInput>;
  poster?: InputMaybe<StringFieldUpdateOperationsInput>;
  rating?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  reviews?: InputMaybe<ShowReviewUpdateManyWithoutShowInput>;
  runtime?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  tagline?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  trailer?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<WatchlistUpdateManyWithoutShowsInput>;
};

export type ShowUpdateWithoutWatchlistInput = {
  actors?: InputMaybe<ActorInShowUpdateManyWithoutShowInput>;
  backdrop?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutShowsInput>;
  likes?: InputMaybe<ShowLikeUpdateManyWithoutShowInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  overview?: InputMaybe<StringFieldUpdateOperationsInput>;
  platforms?: InputMaybe<PlatformUpdateManyWithoutShowsInput>;
  poster?: InputMaybe<StringFieldUpdateOperationsInput>;
  rating?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  reviews?: InputMaybe<ShowReviewUpdateManyWithoutShowInput>;
  runtime?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  soundtrack?: InputMaybe<SongInShowUpdateManyWithoutShowInput>;
  tagline?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  trailer?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
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

export type ShowUpsertWithWhereUniqueWithoutWatchlistInput = {
  create: ShowCreateWithoutWatchlistInput;
  update: ShowUpdateWithoutWatchlistInput;
  where: ShowWhereUniqueInput;
};

export type ShowUpsertWithoutActorsInput = {
  create: ShowCreateWithoutActorsInput;
  update: ShowUpdateWithoutActorsInput;
};

export type ShowUpsertWithoutLikesInput = {
  create: ShowCreateWithoutLikesInput;
  update: ShowUpdateWithoutLikesInput;
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
  backdrop?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  genres?: InputMaybe<GenreListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  likes?: InputMaybe<ShowLikeListRelationFilter>;
  locked?: InputMaybe<BoolFilter>;
  overview?: InputMaybe<StringFilter>;
  platforms?: InputMaybe<PlatformListRelationFilter>;
  poster?: InputMaybe<StringFilter>;
  rating?: InputMaybe<StringNullableFilter>;
  released?: InputMaybe<DateTimeNullableFilter>;
  reviews?: InputMaybe<ShowReviewListRelationFilter>;
  runtime?: InputMaybe<FloatNullableFilter>;
  soundtrack?: InputMaybe<SongInShowListRelationFilter>;
  tagline?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  trailer?: InputMaybe<StringNullableFilter>;
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
  genres: Genre[];
  id: Scalars['Int'];
  locked: Scalars['Boolean'];
  poster: Scalars['String'];
  released?: Maybe<Scalars['DateTime']>;
  reviews: SongReview[];
  songInMovie: SongInMovie[];
  songInShow: SongInShow[];
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

export type SongGenresArgs = {
  cursor?: InputMaybe<GenreWhereUniqueInput>;
  distinct?: InputMaybe<GenreScalarFieldEnum[]>;
  orderBy?: InputMaybe<GenreOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GenreWhereInput>;
};

export type SongReviewsArgs = {
  cursor?: InputMaybe<SongReviewWhereUniqueInput>;
  distinct?: InputMaybe<SongReviewScalarFieldEnum[]>;
  orderBy?: InputMaybe<SongReviewOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SongReviewWhereInput>;
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

export type SongAvgAggregate = {
  __typename?: 'SongAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type SongAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type SongCount = {
  __typename?: 'SongCount';
  artists: Scalars['Int'];
  genres: Scalars['Int'];
  reviews: Scalars['Int'];
  songInMovie: Scalars['Int'];
  songInShow: Scalars['Int'];
};

export type SongCountAggregate = {
  __typename?: 'SongCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  locked: Scalars['Int'];
  poster: Scalars['Int'];
  released: Scalars['Int'];
  title: Scalars['Int'];
};

export type SongCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  locked?: InputMaybe<SortOrder>;
  poster?: InputMaybe<SortOrder>;
  released?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type SongCreateInput = {
  artists?: InputMaybe<PersonCreateNestedManyWithoutSongsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  genres?: InputMaybe<GenreCreateNestedManyWithoutSongsInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  poster?: InputMaybe<Scalars['String']>;
  released?: InputMaybe<Scalars['DateTime']>;
  reviews?: InputMaybe<SongReviewCreateNestedManyWithoutSongInput>;
  songInMovie?: InputMaybe<SongInMovieCreateNestedManyWithoutSongInput>;
  songInShow?: InputMaybe<SongInShowCreateNestedManyWithoutSongInput>;
  title: Scalars['String'];
};

export type SongCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  locked?: InputMaybe<Scalars['Boolean']>;
  poster?: InputMaybe<Scalars['String']>;
  released?: InputMaybe<Scalars['DateTime']>;
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
  genres?: InputMaybe<GenreCreateNestedManyWithoutSongsInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  poster?: InputMaybe<Scalars['String']>;
  released?: InputMaybe<Scalars['DateTime']>;
  reviews?: InputMaybe<SongReviewCreateNestedManyWithoutSongInput>;
  songInMovie?: InputMaybe<SongInMovieCreateNestedManyWithoutSongInput>;
  songInShow?: InputMaybe<SongInShowCreateNestedManyWithoutSongInput>;
  title: Scalars['String'];
};

export type SongCreateWithoutGenresInput = {
  artists?: InputMaybe<PersonCreateNestedManyWithoutSongsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  locked?: InputMaybe<Scalars['Boolean']>;
  poster?: InputMaybe<Scalars['String']>;
  released?: InputMaybe<Scalars['DateTime']>;
  reviews?: InputMaybe<SongReviewCreateNestedManyWithoutSongInput>;
  songInMovie?: InputMaybe<SongInMovieCreateNestedManyWithoutSongInput>;
  songInShow?: InputMaybe<SongInShowCreateNestedManyWithoutSongInput>;
  title: Scalars['String'];
};

export type SongCreateWithoutReviewsInput = {
  artists?: InputMaybe<PersonCreateNestedManyWithoutSongsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  genres?: InputMaybe<GenreCreateNestedManyWithoutSongsInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  poster?: InputMaybe<Scalars['String']>;
  released?: InputMaybe<Scalars['DateTime']>;
  songInMovie?: InputMaybe<SongInMovieCreateNestedManyWithoutSongInput>;
  songInShow?: InputMaybe<SongInShowCreateNestedManyWithoutSongInput>;
  title: Scalars['String'];
};

export type SongCreateWithoutSongInMovieInput = {
  artists?: InputMaybe<PersonCreateNestedManyWithoutSongsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  genres?: InputMaybe<GenreCreateNestedManyWithoutSongsInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  poster?: InputMaybe<Scalars['String']>;
  released?: InputMaybe<Scalars['DateTime']>;
  reviews?: InputMaybe<SongReviewCreateNestedManyWithoutSongInput>;
  songInShow?: InputMaybe<SongInShowCreateNestedManyWithoutSongInput>;
  title: Scalars['String'];
};

export type SongCreateWithoutSongInShowInput = {
  artists?: InputMaybe<PersonCreateNestedManyWithoutSongsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  genres?: InputMaybe<GenreCreateNestedManyWithoutSongsInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  poster?: InputMaybe<Scalars['String']>;
  released?: InputMaybe<Scalars['DateTime']>;
  reviews?: InputMaybe<SongReviewCreateNestedManyWithoutSongInput>;
  songInMovie?: InputMaybe<SongInMovieCreateNestedManyWithoutSongInput>;
  title: Scalars['String'];
};

export type SongGroupBy = {
  __typename?: 'SongGroupBy';
  _avg?: Maybe<SongAvgAggregate>;
  _count?: Maybe<SongCountAggregate>;
  _max?: Maybe<SongMaxAggregate>;
  _min?: Maybe<SongMinAggregate>;
  _sum?: Maybe<SongSumAggregate>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['Int'];
  locked: Scalars['Boolean'];
  poster: Scalars['String'];
  released?: Maybe<Scalars['DateTime']>;
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

export type SongInMovieAvgAggregate = {
  __typename?: 'SongInMovieAvgAggregate';
  movieId?: Maybe<Scalars['Float']>;
  songId?: Maybe<Scalars['Float']>;
};

export type SongInMovieAvgOrderByAggregateInput = {
  movieId?: InputMaybe<SortOrder>;
  songId?: InputMaybe<SortOrder>;
};

export type SongInMovieCountAggregate = {
  __typename?: 'SongInMovieCountAggregate';
  _all: Scalars['Int'];
  description: Scalars['Int'];
  movieId: Scalars['Int'];
  songId: Scalars['Int'];
  timestamp: Scalars['Int'];
};

export type SongInMovieCountOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  movieId?: InputMaybe<SortOrder>;
  songId?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
};

export type SongInMovieCreateInput = {
  description: Scalars['String'];
  movie: MovieCreateNestedOneWithoutSoundtrackInput;
  song: SongCreateNestedOneWithoutSongInMovieInput;
  timestamp: Scalars['DateTime'];
};

export type SongInMovieCreateManyInput = {
  description: Scalars['String'];
  movieId: Scalars['Int'];
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

export type SongInMovieGroupBy = {
  __typename?: 'SongInMovieGroupBy';
  _avg?: Maybe<SongInMovieAvgAggregate>;
  _count?: Maybe<SongInMovieCountAggregate>;
  _max?: Maybe<SongInMovieMaxAggregate>;
  _min?: Maybe<SongInMovieMinAggregate>;
  _sum?: Maybe<SongInMovieSumAggregate>;
  description: Scalars['String'];
  movieId: Scalars['Int'];
  songId: Scalars['Int'];
  timestamp: Scalars['DateTime'];
};

export type SongInMovieListRelationFilter = {
  every?: InputMaybe<SongInMovieWhereInput>;
  none?: InputMaybe<SongInMovieWhereInput>;
  some?: InputMaybe<SongInMovieWhereInput>;
};

export type SongInMovieMaxAggregate = {
  __typename?: 'SongInMovieMaxAggregate';
  description?: Maybe<Scalars['String']>;
  movieId?: Maybe<Scalars['Int']>;
  songId?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['DateTime']>;
};

export type SongInMovieMaxOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  movieId?: InputMaybe<SortOrder>;
  songId?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
};

export type SongInMovieMinAggregate = {
  __typename?: 'SongInMovieMinAggregate';
  description?: Maybe<Scalars['String']>;
  movieId?: Maybe<Scalars['Int']>;
  songId?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['DateTime']>;
};

export type SongInMovieMinOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  movieId?: InputMaybe<SortOrder>;
  songId?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
};

export type SongInMovieOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SongInMovieOrderByWithAggregationInput = {
  _avg?: InputMaybe<SongInMovieAvgOrderByAggregateInput>;
  _count?: InputMaybe<SongInMovieCountOrderByAggregateInput>;
  _max?: InputMaybe<SongInMovieMaxOrderByAggregateInput>;
  _min?: InputMaybe<SongInMovieMinOrderByAggregateInput>;
  _sum?: InputMaybe<SongInMovieSumOrderByAggregateInput>;
  description?: InputMaybe<SortOrder>;
  movieId?: InputMaybe<SortOrder>;
  songId?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
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

export type SongInMovieScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<SongInMovieScalarWhereWithAggregatesInput[]>;
  NOT?: InputMaybe<SongInMovieScalarWhereWithAggregatesInput[]>;
  OR?: InputMaybe<SongInMovieScalarWhereWithAggregatesInput[]>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  movieId?: InputMaybe<IntWithAggregatesFilter>;
  songId?: InputMaybe<IntWithAggregatesFilter>;
  timestamp?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type SongInMovieSongIdMovieIdCompoundUniqueInput = {
  movieId: Scalars['Int'];
  songId: Scalars['Int'];
};

export type SongInMovieSumAggregate = {
  __typename?: 'SongInMovieSumAggregate';
  movieId?: Maybe<Scalars['Int']>;
  songId?: Maybe<Scalars['Int']>;
};

export type SongInMovieSumOrderByAggregateInput = {
  movieId?: InputMaybe<SortOrder>;
  songId?: InputMaybe<SortOrder>;
};

export type SongInMovieUpdateInput = {
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  movie?: InputMaybe<MovieUpdateOneRequiredWithoutSoundtrackInput>;
  song?: InputMaybe<SongUpdateOneRequiredWithoutSongInMovieInput>;
  timestamp?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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

export type SongInShowAvgAggregate = {
  __typename?: 'SongInShowAvgAggregate';
  showId?: Maybe<Scalars['Float']>;
  songId?: Maybe<Scalars['Float']>;
};

export type SongInShowAvgOrderByAggregateInput = {
  showId?: InputMaybe<SortOrder>;
  songId?: InputMaybe<SortOrder>;
};

export type SongInShowCountAggregate = {
  __typename?: 'SongInShowCountAggregate';
  _all: Scalars['Int'];
  description: Scalars['Int'];
  showId: Scalars['Int'];
  songId: Scalars['Int'];
  timestamp: Scalars['Int'];
};

export type SongInShowCountOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  showId?: InputMaybe<SortOrder>;
  songId?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
};

export type SongInShowCreateInput = {
  description: Scalars['String'];
  show: ShowCreateNestedOneWithoutSoundtrackInput;
  song: SongCreateNestedOneWithoutSongInShowInput;
  timestamp: Scalars['DateTime'];
};

export type SongInShowCreateManyInput = {
  description: Scalars['String'];
  showId: Scalars['Int'];
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

export type SongInShowGroupBy = {
  __typename?: 'SongInShowGroupBy';
  _avg?: Maybe<SongInShowAvgAggregate>;
  _count?: Maybe<SongInShowCountAggregate>;
  _max?: Maybe<SongInShowMaxAggregate>;
  _min?: Maybe<SongInShowMinAggregate>;
  _sum?: Maybe<SongInShowSumAggregate>;
  description: Scalars['String'];
  showId: Scalars['Int'];
  songId: Scalars['Int'];
  timestamp: Scalars['DateTime'];
};

export type SongInShowListRelationFilter = {
  every?: InputMaybe<SongInShowWhereInput>;
  none?: InputMaybe<SongInShowWhereInput>;
  some?: InputMaybe<SongInShowWhereInput>;
};

export type SongInShowMaxAggregate = {
  __typename?: 'SongInShowMaxAggregate';
  description?: Maybe<Scalars['String']>;
  showId?: Maybe<Scalars['Int']>;
  songId?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['DateTime']>;
};

export type SongInShowMaxOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  showId?: InputMaybe<SortOrder>;
  songId?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
};

export type SongInShowMinAggregate = {
  __typename?: 'SongInShowMinAggregate';
  description?: Maybe<Scalars['String']>;
  showId?: Maybe<Scalars['Int']>;
  songId?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['DateTime']>;
};

export type SongInShowMinOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  showId?: InputMaybe<SortOrder>;
  songId?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
};

export type SongInShowOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SongInShowOrderByWithAggregationInput = {
  _avg?: InputMaybe<SongInShowAvgOrderByAggregateInput>;
  _count?: InputMaybe<SongInShowCountOrderByAggregateInput>;
  _max?: InputMaybe<SongInShowMaxOrderByAggregateInput>;
  _min?: InputMaybe<SongInShowMinOrderByAggregateInput>;
  _sum?: InputMaybe<SongInShowSumOrderByAggregateInput>;
  description?: InputMaybe<SortOrder>;
  showId?: InputMaybe<SortOrder>;
  songId?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
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

export type SongInShowScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<SongInShowScalarWhereWithAggregatesInput[]>;
  NOT?: InputMaybe<SongInShowScalarWhereWithAggregatesInput[]>;
  OR?: InputMaybe<SongInShowScalarWhereWithAggregatesInput[]>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  showId?: InputMaybe<IntWithAggregatesFilter>;
  songId?: InputMaybe<IntWithAggregatesFilter>;
  timestamp?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type SongInShowSongIdShowIdCompoundUniqueInput = {
  showId: Scalars['Int'];
  songId: Scalars['Int'];
};

export type SongInShowSumAggregate = {
  __typename?: 'SongInShowSumAggregate';
  showId?: Maybe<Scalars['Int']>;
  songId?: Maybe<Scalars['Int']>;
};

export type SongInShowSumOrderByAggregateInput = {
  showId?: InputMaybe<SortOrder>;
  songId?: InputMaybe<SortOrder>;
};

export type SongInShowUpdateInput = {
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  show?: InputMaybe<ShowUpdateOneRequiredWithoutSoundtrackInput>;
  song?: InputMaybe<SongUpdateOneRequiredWithoutSongInShowInput>;
  timestamp?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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

export type SongMaxAggregate = {
  __typename?: 'SongMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  locked?: Maybe<Scalars['Boolean']>;
  poster?: Maybe<Scalars['String']>;
  released?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
};

export type SongMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  locked?: InputMaybe<SortOrder>;
  poster?: InputMaybe<SortOrder>;
  released?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type SongMinAggregate = {
  __typename?: 'SongMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  locked?: Maybe<Scalars['Boolean']>;
  poster?: Maybe<Scalars['String']>;
  released?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
};

export type SongMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  locked?: InputMaybe<SortOrder>;
  poster?: InputMaybe<SortOrder>;
  released?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type SongOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SongOrderByWithAggregationInput = {
  _avg?: InputMaybe<SongAvgOrderByAggregateInput>;
  _count?: InputMaybe<SongCountOrderByAggregateInput>;
  _max?: InputMaybe<SongMaxOrderByAggregateInput>;
  _min?: InputMaybe<SongMinOrderByAggregateInput>;
  _sum?: InputMaybe<SongSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  locked?: InputMaybe<SortOrder>;
  poster?: InputMaybe<SortOrder>;
  released?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type SongOrderByWithRelationInput = {
  artists?: InputMaybe<PersonOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  genres?: InputMaybe<GenreOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  locked?: InputMaybe<SortOrder>;
  poster?: InputMaybe<SortOrder>;
  released?: InputMaybe<SortOrder>;
  reviews?: InputMaybe<SongReviewOrderByRelationAggregateInput>;
  songInMovie?: InputMaybe<SongInMovieOrderByRelationAggregateInput>;
  songInShow?: InputMaybe<SongInShowOrderByRelationAggregateInput>;
  title?: InputMaybe<SortOrder>;
};

export type SongRelationFilter = {
  is?: InputMaybe<SongWhereInput>;
  isNot?: InputMaybe<SongWhereInput>;
};

export type SongReview = {
  __typename?: 'SongReview';
  _count?: Maybe<SongReviewCount>;
  likes: SongReviewLike[];
  rating: Scalars['Int'];
  review?: Maybe<Scalars['String']>;
  song: Song;
  songId: Scalars['Int'];
  user: User;
  userId: Scalars['Int'];
};

export type SongReviewLikesArgs = {
  cursor?: InputMaybe<SongReviewLikeWhereUniqueInput>;
  distinct?: InputMaybe<SongReviewLikeScalarFieldEnum[]>;
  orderBy?: InputMaybe<SongReviewLikeOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SongReviewLikeWhereInput>;
};

export type SongReviewAvgAggregate = {
  __typename?: 'SongReviewAvgAggregate';
  rating?: Maybe<Scalars['Float']>;
  songId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type SongReviewAvgOrderByAggregateInput = {
  rating?: InputMaybe<SortOrder>;
  songId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SongReviewCount = {
  __typename?: 'SongReviewCount';
  likes: Scalars['Int'];
};

export type SongReviewCountAggregate = {
  __typename?: 'SongReviewCountAggregate';
  _all: Scalars['Int'];
  rating: Scalars['Int'];
  review: Scalars['Int'];
  songId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type SongReviewCountOrderByAggregateInput = {
  rating?: InputMaybe<SortOrder>;
  review?: InputMaybe<SortOrder>;
  songId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SongReviewCreateInput = {
  likes?: InputMaybe<SongReviewLikeCreateNestedManyWithoutSongReviewInput>;
  rating: Scalars['Int'];
  review?: InputMaybe<Scalars['String']>;
  song: SongCreateNestedOneWithoutReviewsInput;
  user: UserCreateNestedOneWithoutSongReviewsInput;
};

export type SongReviewCreateManyInput = {
  rating: Scalars['Int'];
  review?: InputMaybe<Scalars['String']>;
  songId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type SongReviewCreateManySongInput = {
  rating: Scalars['Int'];
  review?: InputMaybe<Scalars['String']>;
  userId: Scalars['Int'];
};

export type SongReviewCreateManySongInputEnvelope = {
  data: SongReviewCreateManySongInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type SongReviewCreateManyUserInput = {
  rating: Scalars['Int'];
  review?: InputMaybe<Scalars['String']>;
  songId: Scalars['Int'];
};

export type SongReviewCreateManyUserInputEnvelope = {
  data: SongReviewCreateManyUserInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type SongReviewCreateNestedManyWithoutSongInput = {
  connect?: InputMaybe<SongReviewWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<SongReviewCreateOrConnectWithoutSongInput[]>;
  create?: InputMaybe<SongReviewCreateWithoutSongInput[]>;
  createMany?: InputMaybe<SongReviewCreateManySongInputEnvelope>;
};

export type SongReviewCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<SongReviewWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<SongReviewCreateOrConnectWithoutUserInput[]>;
  create?: InputMaybe<SongReviewCreateWithoutUserInput[]>;
  createMany?: InputMaybe<SongReviewCreateManyUserInputEnvelope>;
};

export type SongReviewCreateNestedOneWithoutLikesInput = {
  connect?: InputMaybe<SongReviewWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SongReviewCreateOrConnectWithoutLikesInput>;
  create?: InputMaybe<SongReviewCreateWithoutLikesInput>;
};

export type SongReviewCreateOrConnectWithoutLikesInput = {
  create: SongReviewCreateWithoutLikesInput;
  where: SongReviewWhereUniqueInput;
};

export type SongReviewCreateOrConnectWithoutSongInput = {
  create: SongReviewCreateWithoutSongInput;
  where: SongReviewWhereUniqueInput;
};

export type SongReviewCreateOrConnectWithoutUserInput = {
  create: SongReviewCreateWithoutUserInput;
  where: SongReviewWhereUniqueInput;
};

export type SongReviewCreateWithoutLikesInput = {
  rating: Scalars['Int'];
  review?: InputMaybe<Scalars['String']>;
  song: SongCreateNestedOneWithoutReviewsInput;
  user: UserCreateNestedOneWithoutSongReviewsInput;
};

export type SongReviewCreateWithoutSongInput = {
  likes?: InputMaybe<SongReviewLikeCreateNestedManyWithoutSongReviewInput>;
  rating: Scalars['Int'];
  review?: InputMaybe<Scalars['String']>;
  user: UserCreateNestedOneWithoutSongReviewsInput;
};

export type SongReviewCreateWithoutUserInput = {
  likes?: InputMaybe<SongReviewLikeCreateNestedManyWithoutSongReviewInput>;
  rating: Scalars['Int'];
  review?: InputMaybe<Scalars['String']>;
  song: SongCreateNestedOneWithoutReviewsInput;
};

export type SongReviewGroupBy = {
  __typename?: 'SongReviewGroupBy';
  _avg?: Maybe<SongReviewAvgAggregate>;
  _count?: Maybe<SongReviewCountAggregate>;
  _max?: Maybe<SongReviewMaxAggregate>;
  _min?: Maybe<SongReviewMinAggregate>;
  _sum?: Maybe<SongReviewSumAggregate>;
  rating: Scalars['Int'];
  review?: Maybe<Scalars['String']>;
  songId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type SongReviewLike = {
  __typename?: 'SongReviewLike';
  createdAt: Scalars['DateTime'];
  reviewSongId: Scalars['Int'];
  reviewUserId: Scalars['Int'];
  songReview: SongReview;
  user: User;
  userId: Scalars['Int'];
};

export type SongReviewLikeAvgAggregate = {
  __typename?: 'SongReviewLikeAvgAggregate';
  reviewSongId?: Maybe<Scalars['Float']>;
  reviewUserId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type SongReviewLikeAvgOrderByAggregateInput = {
  reviewSongId?: InputMaybe<SortOrder>;
  reviewUserId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SongReviewLikeCountAggregate = {
  __typename?: 'SongReviewLikeCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  reviewSongId: Scalars['Int'];
  reviewUserId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type SongReviewLikeCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  reviewSongId?: InputMaybe<SortOrder>;
  reviewUserId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SongReviewLikeCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  songReview: SongReviewCreateNestedOneWithoutLikesInput;
  user: UserCreateNestedOneWithoutSongReviewLikesInput;
};

export type SongReviewLikeCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  reviewSongId: Scalars['Int'];
  reviewUserId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type SongReviewLikeCreateManySongReviewInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type SongReviewLikeCreateManySongReviewInputEnvelope = {
  data: SongReviewLikeCreateManySongReviewInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type SongReviewLikeCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  reviewSongId: Scalars['Int'];
  reviewUserId: Scalars['Int'];
};

export type SongReviewLikeCreateManyUserInputEnvelope = {
  data: SongReviewLikeCreateManyUserInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type SongReviewLikeCreateNestedManyWithoutSongReviewInput = {
  connect?: InputMaybe<SongReviewLikeWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<SongReviewLikeCreateOrConnectWithoutSongReviewInput[]>;
  create?: InputMaybe<SongReviewLikeCreateWithoutSongReviewInput[]>;
  createMany?: InputMaybe<SongReviewLikeCreateManySongReviewInputEnvelope>;
};

export type SongReviewLikeCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<SongReviewLikeWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<SongReviewLikeCreateOrConnectWithoutUserInput[]>;
  create?: InputMaybe<SongReviewLikeCreateWithoutUserInput[]>;
  createMany?: InputMaybe<SongReviewLikeCreateManyUserInputEnvelope>;
};

export type SongReviewLikeCreateOrConnectWithoutSongReviewInput = {
  create: SongReviewLikeCreateWithoutSongReviewInput;
  where: SongReviewLikeWhereUniqueInput;
};

export type SongReviewLikeCreateOrConnectWithoutUserInput = {
  create: SongReviewLikeCreateWithoutUserInput;
  where: SongReviewLikeWhereUniqueInput;
};

export type SongReviewLikeCreateWithoutSongReviewInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutSongReviewLikesInput;
};

export type SongReviewLikeCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  songReview: SongReviewCreateNestedOneWithoutLikesInput;
};

export type SongReviewLikeGroupBy = {
  __typename?: 'SongReviewLikeGroupBy';
  _avg?: Maybe<SongReviewLikeAvgAggregate>;
  _count?: Maybe<SongReviewLikeCountAggregate>;
  _max?: Maybe<SongReviewLikeMaxAggregate>;
  _min?: Maybe<SongReviewLikeMinAggregate>;
  _sum?: Maybe<SongReviewLikeSumAggregate>;
  createdAt: Scalars['DateTime'];
  reviewSongId: Scalars['Int'];
  reviewUserId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type SongReviewLikeListRelationFilter = {
  every?: InputMaybe<SongReviewLikeWhereInput>;
  none?: InputMaybe<SongReviewLikeWhereInput>;
  some?: InputMaybe<SongReviewLikeWhereInput>;
};

export type SongReviewLikeMaxAggregate = {
  __typename?: 'SongReviewLikeMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  reviewSongId?: Maybe<Scalars['Int']>;
  reviewUserId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type SongReviewLikeMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  reviewSongId?: InputMaybe<SortOrder>;
  reviewUserId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SongReviewLikeMinAggregate = {
  __typename?: 'SongReviewLikeMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  reviewSongId?: Maybe<Scalars['Int']>;
  reviewUserId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type SongReviewLikeMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  reviewSongId?: InputMaybe<SortOrder>;
  reviewUserId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SongReviewLikeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SongReviewLikeOrderByWithAggregationInput = {
  _avg?: InputMaybe<SongReviewLikeAvgOrderByAggregateInput>;
  _count?: InputMaybe<SongReviewLikeCountOrderByAggregateInput>;
  _max?: InputMaybe<SongReviewLikeMaxOrderByAggregateInput>;
  _min?: InputMaybe<SongReviewLikeMinOrderByAggregateInput>;
  _sum?: InputMaybe<SongReviewLikeSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  reviewSongId?: InputMaybe<SortOrder>;
  reviewUserId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SongReviewLikeOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  reviewSongId?: InputMaybe<SortOrder>;
  reviewUserId?: InputMaybe<SortOrder>;
  songReview?: InputMaybe<SongReviewOrderByWithRelationInput>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum SongReviewLikeScalarFieldEnum {
  CreatedAt = 'createdAt',
  ReviewSongId = 'reviewSongId',
  ReviewUserId = 'reviewUserId',
  UserId = 'userId'
}

export type SongReviewLikeScalarWhereInput = {
  AND?: InputMaybe<SongReviewLikeScalarWhereInput[]>;
  NOT?: InputMaybe<SongReviewLikeScalarWhereInput[]>;
  OR?: InputMaybe<SongReviewLikeScalarWhereInput[]>;
  createdAt?: InputMaybe<DateTimeFilter>;
  reviewSongId?: InputMaybe<IntFilter>;
  reviewUserId?: InputMaybe<IntFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type SongReviewLikeScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<SongReviewLikeScalarWhereWithAggregatesInput[]>;
  NOT?: InputMaybe<SongReviewLikeScalarWhereWithAggregatesInput[]>;
  OR?: InputMaybe<SongReviewLikeScalarWhereWithAggregatesInput[]>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  reviewSongId?: InputMaybe<IntWithAggregatesFilter>;
  reviewUserId?: InputMaybe<IntWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
};

export type SongReviewLikeSumAggregate = {
  __typename?: 'SongReviewLikeSumAggregate';
  reviewSongId?: Maybe<Scalars['Int']>;
  reviewUserId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type SongReviewLikeSumOrderByAggregateInput = {
  reviewSongId?: InputMaybe<SortOrder>;
  reviewUserId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SongReviewLikeUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  songReview?: InputMaybe<SongReviewUpdateOneRequiredWithoutLikesInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSongReviewLikesInput>;
};

export type SongReviewLikeUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SongReviewLikeUpdateManyWithWhereWithoutSongReviewInput = {
  data: SongReviewLikeUpdateManyMutationInput;
  where: SongReviewLikeScalarWhereInput;
};

export type SongReviewLikeUpdateManyWithWhereWithoutUserInput = {
  data: SongReviewLikeUpdateManyMutationInput;
  where: SongReviewLikeScalarWhereInput;
};

export type SongReviewLikeUpdateManyWithoutSongReviewInput = {
  connect?: InputMaybe<SongReviewLikeWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<SongReviewLikeCreateOrConnectWithoutSongReviewInput[]>;
  create?: InputMaybe<SongReviewLikeCreateWithoutSongReviewInput[]>;
  createMany?: InputMaybe<SongReviewLikeCreateManySongReviewInputEnvelope>;
  delete?: InputMaybe<SongReviewLikeWhereUniqueInput[]>;
  deleteMany?: InputMaybe<SongReviewLikeScalarWhereInput[]>;
  disconnect?: InputMaybe<SongReviewLikeWhereUniqueInput[]>;
  set?: InputMaybe<SongReviewLikeWhereUniqueInput[]>;
  update?: InputMaybe<SongReviewLikeUpdateWithWhereUniqueWithoutSongReviewInput[]>;
  updateMany?: InputMaybe<SongReviewLikeUpdateManyWithWhereWithoutSongReviewInput[]>;
  upsert?: InputMaybe<SongReviewLikeUpsertWithWhereUniqueWithoutSongReviewInput[]>;
};

export type SongReviewLikeUpdateManyWithoutUserInput = {
  connect?: InputMaybe<SongReviewLikeWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<SongReviewLikeCreateOrConnectWithoutUserInput[]>;
  create?: InputMaybe<SongReviewLikeCreateWithoutUserInput[]>;
  createMany?: InputMaybe<SongReviewLikeCreateManyUserInputEnvelope>;
  delete?: InputMaybe<SongReviewLikeWhereUniqueInput[]>;
  deleteMany?: InputMaybe<SongReviewLikeScalarWhereInput[]>;
  disconnect?: InputMaybe<SongReviewLikeWhereUniqueInput[]>;
  set?: InputMaybe<SongReviewLikeWhereUniqueInput[]>;
  update?: InputMaybe<SongReviewLikeUpdateWithWhereUniqueWithoutUserInput[]>;
  updateMany?: InputMaybe<SongReviewLikeUpdateManyWithWhereWithoutUserInput[]>;
  upsert?: InputMaybe<SongReviewLikeUpsertWithWhereUniqueWithoutUserInput[]>;
};

export type SongReviewLikeUpdateWithWhereUniqueWithoutSongReviewInput = {
  data: SongReviewLikeUpdateWithoutSongReviewInput;
  where: SongReviewLikeWhereUniqueInput;
};

export type SongReviewLikeUpdateWithWhereUniqueWithoutUserInput = {
  data: SongReviewLikeUpdateWithoutUserInput;
  where: SongReviewLikeWhereUniqueInput;
};

export type SongReviewLikeUpdateWithoutSongReviewInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSongReviewLikesInput>;
};

export type SongReviewLikeUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  songReview?: InputMaybe<SongReviewUpdateOneRequiredWithoutLikesInput>;
};

export type SongReviewLikeUpsertWithWhereUniqueWithoutSongReviewInput = {
  create: SongReviewLikeCreateWithoutSongReviewInput;
  update: SongReviewLikeUpdateWithoutSongReviewInput;
  where: SongReviewLikeWhereUniqueInput;
};

export type SongReviewLikeUpsertWithWhereUniqueWithoutUserInput = {
  create: SongReviewLikeCreateWithoutUserInput;
  update: SongReviewLikeUpdateWithoutUserInput;
  where: SongReviewLikeWhereUniqueInput;
};

export type SongReviewLikeUserIdReviewUserIdReviewSongIdCompoundUniqueInput = {
  reviewSongId: Scalars['Int'];
  reviewUserId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type SongReviewLikeWhereInput = {
  AND?: InputMaybe<SongReviewLikeWhereInput[]>;
  NOT?: InputMaybe<SongReviewLikeWhereInput[]>;
  OR?: InputMaybe<SongReviewLikeWhereInput[]>;
  createdAt?: InputMaybe<DateTimeFilter>;
  reviewSongId?: InputMaybe<IntFilter>;
  reviewUserId?: InputMaybe<IntFilter>;
  songReview?: InputMaybe<SongReviewRelationFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type SongReviewLikeWhereUniqueInput = {
  userId_reviewUserId_reviewSongId?: InputMaybe<SongReviewLikeUserIdReviewUserIdReviewSongIdCompoundUniqueInput>;
};

export type SongReviewListRelationFilter = {
  every?: InputMaybe<SongReviewWhereInput>;
  none?: InputMaybe<SongReviewWhereInput>;
  some?: InputMaybe<SongReviewWhereInput>;
};

export type SongReviewMaxAggregate = {
  __typename?: 'SongReviewMaxAggregate';
  rating?: Maybe<Scalars['Int']>;
  review?: Maybe<Scalars['String']>;
  songId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type SongReviewMaxOrderByAggregateInput = {
  rating?: InputMaybe<SortOrder>;
  review?: InputMaybe<SortOrder>;
  songId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SongReviewMinAggregate = {
  __typename?: 'SongReviewMinAggregate';
  rating?: Maybe<Scalars['Int']>;
  review?: Maybe<Scalars['String']>;
  songId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type SongReviewMinOrderByAggregateInput = {
  rating?: InputMaybe<SortOrder>;
  review?: InputMaybe<SortOrder>;
  songId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SongReviewOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SongReviewOrderByWithAggregationInput = {
  _avg?: InputMaybe<SongReviewAvgOrderByAggregateInput>;
  _count?: InputMaybe<SongReviewCountOrderByAggregateInput>;
  _max?: InputMaybe<SongReviewMaxOrderByAggregateInput>;
  _min?: InputMaybe<SongReviewMinOrderByAggregateInput>;
  _sum?: InputMaybe<SongReviewSumOrderByAggregateInput>;
  rating?: InputMaybe<SortOrder>;
  review?: InputMaybe<SortOrder>;
  songId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SongReviewOrderByWithRelationInput = {
  likes?: InputMaybe<SongReviewLikeOrderByRelationAggregateInput>;
  rating?: InputMaybe<SortOrder>;
  review?: InputMaybe<SortOrder>;
  song?: InputMaybe<SongOrderByWithRelationInput>;
  songId?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type SongReviewRelationFilter = {
  is?: InputMaybe<SongReviewWhereInput>;
  isNot?: InputMaybe<SongReviewWhereInput>;
};

export enum SongReviewScalarFieldEnum {
  Rating = 'rating',
  Review = 'review',
  SongId = 'songId',
  UserId = 'userId'
}

export type SongReviewScalarWhereInput = {
  AND?: InputMaybe<SongReviewScalarWhereInput[]>;
  NOT?: InputMaybe<SongReviewScalarWhereInput[]>;
  OR?: InputMaybe<SongReviewScalarWhereInput[]>;
  rating?: InputMaybe<IntFilter>;
  review?: InputMaybe<StringNullableFilter>;
  songId?: InputMaybe<IntFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type SongReviewScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<SongReviewScalarWhereWithAggregatesInput[]>;
  NOT?: InputMaybe<SongReviewScalarWhereWithAggregatesInput[]>;
  OR?: InputMaybe<SongReviewScalarWhereWithAggregatesInput[]>;
  rating?: InputMaybe<IntWithAggregatesFilter>;
  review?: InputMaybe<StringNullableWithAggregatesFilter>;
  songId?: InputMaybe<IntWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
};

export type SongReviewSumAggregate = {
  __typename?: 'SongReviewSumAggregate';
  rating?: Maybe<Scalars['Int']>;
  songId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type SongReviewSumOrderByAggregateInput = {
  rating?: InputMaybe<SortOrder>;
  songId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SongReviewUpdateInput = {
  likes?: InputMaybe<SongReviewLikeUpdateManyWithoutSongReviewInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  review?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  song?: InputMaybe<SongUpdateOneRequiredWithoutReviewsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSongReviewsInput>;
};

export type SongReviewUpdateManyMutationInput = {
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  review?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type SongReviewUpdateManyWithWhereWithoutSongInput = {
  data: SongReviewUpdateManyMutationInput;
  where: SongReviewScalarWhereInput;
};

export type SongReviewUpdateManyWithWhereWithoutUserInput = {
  data: SongReviewUpdateManyMutationInput;
  where: SongReviewScalarWhereInput;
};

export type SongReviewUpdateManyWithoutSongInput = {
  connect?: InputMaybe<SongReviewWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<SongReviewCreateOrConnectWithoutSongInput[]>;
  create?: InputMaybe<SongReviewCreateWithoutSongInput[]>;
  createMany?: InputMaybe<SongReviewCreateManySongInputEnvelope>;
  delete?: InputMaybe<SongReviewWhereUniqueInput[]>;
  deleteMany?: InputMaybe<SongReviewScalarWhereInput[]>;
  disconnect?: InputMaybe<SongReviewWhereUniqueInput[]>;
  set?: InputMaybe<SongReviewWhereUniqueInput[]>;
  update?: InputMaybe<SongReviewUpdateWithWhereUniqueWithoutSongInput[]>;
  updateMany?: InputMaybe<SongReviewUpdateManyWithWhereWithoutSongInput[]>;
  upsert?: InputMaybe<SongReviewUpsertWithWhereUniqueWithoutSongInput[]>;
};

export type SongReviewUpdateManyWithoutUserInput = {
  connect?: InputMaybe<SongReviewWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<SongReviewCreateOrConnectWithoutUserInput[]>;
  create?: InputMaybe<SongReviewCreateWithoutUserInput[]>;
  createMany?: InputMaybe<SongReviewCreateManyUserInputEnvelope>;
  delete?: InputMaybe<SongReviewWhereUniqueInput[]>;
  deleteMany?: InputMaybe<SongReviewScalarWhereInput[]>;
  disconnect?: InputMaybe<SongReviewWhereUniqueInput[]>;
  set?: InputMaybe<SongReviewWhereUniqueInput[]>;
  update?: InputMaybe<SongReviewUpdateWithWhereUniqueWithoutUserInput[]>;
  updateMany?: InputMaybe<SongReviewUpdateManyWithWhereWithoutUserInput[]>;
  upsert?: InputMaybe<SongReviewUpsertWithWhereUniqueWithoutUserInput[]>;
};

export type SongReviewUpdateOneRequiredWithoutLikesInput = {
  connect?: InputMaybe<SongReviewWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SongReviewCreateOrConnectWithoutLikesInput>;
  create?: InputMaybe<SongReviewCreateWithoutLikesInput>;
  update?: InputMaybe<SongReviewUpdateWithoutLikesInput>;
  upsert?: InputMaybe<SongReviewUpsertWithoutLikesInput>;
};

export type SongReviewUpdateWithWhereUniqueWithoutSongInput = {
  data: SongReviewUpdateWithoutSongInput;
  where: SongReviewWhereUniqueInput;
};

export type SongReviewUpdateWithWhereUniqueWithoutUserInput = {
  data: SongReviewUpdateWithoutUserInput;
  where: SongReviewWhereUniqueInput;
};

export type SongReviewUpdateWithoutLikesInput = {
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  review?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  song?: InputMaybe<SongUpdateOneRequiredWithoutReviewsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSongReviewsInput>;
};

export type SongReviewUpdateWithoutSongInput = {
  likes?: InputMaybe<SongReviewLikeUpdateManyWithoutSongReviewInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  review?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSongReviewsInput>;
};

export type SongReviewUpdateWithoutUserInput = {
  likes?: InputMaybe<SongReviewLikeUpdateManyWithoutSongReviewInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  review?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  song?: InputMaybe<SongUpdateOneRequiredWithoutReviewsInput>;
};

export type SongReviewUpsertWithWhereUniqueWithoutSongInput = {
  create: SongReviewCreateWithoutSongInput;
  update: SongReviewUpdateWithoutSongInput;
  where: SongReviewWhereUniqueInput;
};

export type SongReviewUpsertWithWhereUniqueWithoutUserInput = {
  create: SongReviewCreateWithoutUserInput;
  update: SongReviewUpdateWithoutUserInput;
  where: SongReviewWhereUniqueInput;
};

export type SongReviewUpsertWithoutLikesInput = {
  create: SongReviewCreateWithoutLikesInput;
  update: SongReviewUpdateWithoutLikesInput;
};

export type SongReviewUserIdSongIdCompoundUniqueInput = {
  songId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type SongReviewWhereInput = {
  AND?: InputMaybe<SongReviewWhereInput[]>;
  NOT?: InputMaybe<SongReviewWhereInput[]>;
  OR?: InputMaybe<SongReviewWhereInput[]>;
  likes?: InputMaybe<SongReviewLikeListRelationFilter>;
  rating?: InputMaybe<IntFilter>;
  review?: InputMaybe<StringNullableFilter>;
  song?: InputMaybe<SongRelationFilter>;
  songId?: InputMaybe<IntFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type SongReviewWhereUniqueInput = {
  userId_songId?: InputMaybe<SongReviewUserIdSongIdCompoundUniqueInput>;
};

export enum SongScalarFieldEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  Locked = 'locked',
  Poster = 'poster',
  Released = 'released',
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
  poster?: InputMaybe<StringFilter>;
  released?: InputMaybe<DateTimeNullableFilter>;
  title?: InputMaybe<StringFilter>;
};

export type SongScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<SongScalarWhereWithAggregatesInput[]>;
  NOT?: InputMaybe<SongScalarWhereWithAggregatesInput[]>;
  OR?: InputMaybe<SongScalarWhereWithAggregatesInput[]>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  locked?: InputMaybe<BoolWithAggregatesFilter>;
  poster?: InputMaybe<StringWithAggregatesFilter>;
  released?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
};

export type SongSumAggregate = {
  __typename?: 'SongSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type SongSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type SongUpdateInput = {
  artists?: InputMaybe<PersonUpdateManyWithoutSongsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutSongsInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  poster?: InputMaybe<StringFieldUpdateOperationsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  reviews?: InputMaybe<SongReviewUpdateManyWithoutSongInput>;
  songInMovie?: InputMaybe<SongInMovieUpdateManyWithoutSongInput>;
  songInShow?: InputMaybe<SongInShowUpdateManyWithoutSongInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SongUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  poster?: InputMaybe<StringFieldUpdateOperationsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
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

export type SongUpdateOneRequiredWithoutReviewsInput = {
  connect?: InputMaybe<SongWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SongCreateOrConnectWithoutReviewsInput>;
  create?: InputMaybe<SongCreateWithoutReviewsInput>;
  update?: InputMaybe<SongUpdateWithoutReviewsInput>;
  upsert?: InputMaybe<SongUpsertWithoutReviewsInput>;
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

export type SongUpdateWithWhereUniqueWithoutGenresInput = {
  data: SongUpdateWithoutGenresInput;
  where: SongWhereUniqueInput;
};

export type SongUpdateWithoutArtistsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutSongsInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  poster?: InputMaybe<StringFieldUpdateOperationsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  reviews?: InputMaybe<SongReviewUpdateManyWithoutSongInput>;
  songInMovie?: InputMaybe<SongInMovieUpdateManyWithoutSongInput>;
  songInShow?: InputMaybe<SongInShowUpdateManyWithoutSongInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SongUpdateWithoutGenresInput = {
  artists?: InputMaybe<PersonUpdateManyWithoutSongsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  poster?: InputMaybe<StringFieldUpdateOperationsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  reviews?: InputMaybe<SongReviewUpdateManyWithoutSongInput>;
  songInMovie?: InputMaybe<SongInMovieUpdateManyWithoutSongInput>;
  songInShow?: InputMaybe<SongInShowUpdateManyWithoutSongInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SongUpdateWithoutReviewsInput = {
  artists?: InputMaybe<PersonUpdateManyWithoutSongsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutSongsInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  poster?: InputMaybe<StringFieldUpdateOperationsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  songInMovie?: InputMaybe<SongInMovieUpdateManyWithoutSongInput>;
  songInShow?: InputMaybe<SongInShowUpdateManyWithoutSongInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SongUpdateWithoutSongInMovieInput = {
  artists?: InputMaybe<PersonUpdateManyWithoutSongsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutSongsInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  poster?: InputMaybe<StringFieldUpdateOperationsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  reviews?: InputMaybe<SongReviewUpdateManyWithoutSongInput>;
  songInShow?: InputMaybe<SongInShowUpdateManyWithoutSongInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SongUpdateWithoutSongInShowInput = {
  artists?: InputMaybe<PersonUpdateManyWithoutSongsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutSongsInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  poster?: InputMaybe<StringFieldUpdateOperationsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  reviews?: InputMaybe<SongReviewUpdateManyWithoutSongInput>;
  songInMovie?: InputMaybe<SongInMovieUpdateManyWithoutSongInput>;
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
  genres?: InputMaybe<GenreListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  locked?: InputMaybe<BoolFilter>;
  poster?: InputMaybe<StringFilter>;
  released?: InputMaybe<DateTimeNullableFilter>;
  reviews?: InputMaybe<SongReviewListRelationFilter>;
  songInMovie?: InputMaybe<SongInMovieListRelationFilter>;
  songInShow?: InputMaybe<SongInShowListRelationFilter>;
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

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
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
  Show = 'Show',
  Song = 'Song'
}

export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCount>;
  avatar: Scalars['String'];
  bio: Scalars['String'];
  bookReviewLikes: BookReviewLike[];
  bookReviews: BookReview[];
  confirmed: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  displayname: Scalars['String'];
  dob: Scalars['String'];
  email: Scalars['String'];
  followers: Follows[];
  following: Follows[];
  id: Scalars['Int'];
  isFollowing: Scalars['Boolean'];
  likedMovieReviews: MovieReviewLike[];
  likedMovies: MovieLike[];
  likedShows: ShowLike[];
  location: Scalars['String'];
  movieReviews: MovieReview[];
  notifications: Notification[];
  role: Role;
  showReviewLikes: ShowReviewLike[];
  showReviews: ShowReview[];
  songReviewLikes: SongReviewLike[];
  songReviews: SongReview[];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
  watchlist?: Maybe<Watchlist>;
  website: Scalars['String'];
};

export type UserBookReviewLikesArgs = {
  cursor?: InputMaybe<BookReviewLikeWhereUniqueInput>;
  distinct?: InputMaybe<BookReviewLikeScalarFieldEnum[]>;
  orderBy?: InputMaybe<BookReviewLikeOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BookReviewLikeWhereInput>;
};

export type UserBookReviewsArgs = {
  cursor?: InputMaybe<BookReviewWhereUniqueInput>;
  distinct?: InputMaybe<BookReviewScalarFieldEnum[]>;
  orderBy?: InputMaybe<BookReviewOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BookReviewWhereInput>;
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

export type UserLikedMovieReviewsArgs = {
  cursor?: InputMaybe<MovieReviewLikeWhereUniqueInput>;
  distinct?: InputMaybe<MovieReviewLikeScalarFieldEnum[]>;
  orderBy?: InputMaybe<MovieReviewLikeOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieReviewLikeWhereInput>;
};

export type UserLikedMoviesArgs = {
  cursor?: InputMaybe<MovieLikeWhereUniqueInput>;
  distinct?: InputMaybe<MovieLikeScalarFieldEnum[]>;
  orderBy?: InputMaybe<MovieLikeOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieLikeWhereInput>;
};

export type UserLikedShowsArgs = {
  cursor?: InputMaybe<ShowLikeWhereUniqueInput>;
  distinct?: InputMaybe<ShowLikeScalarFieldEnum[]>;
  orderBy?: InputMaybe<ShowLikeOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ShowLikeWhereInput>;
};

export type UserMovieReviewsArgs = {
  cursor?: InputMaybe<MovieReviewWhereUniqueInput>;
  distinct?: InputMaybe<MovieReviewScalarFieldEnum[]>;
  orderBy?: InputMaybe<MovieReviewOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieReviewWhereInput>;
};

export type UserNotificationsArgs = {
  cursor?: InputMaybe<NotificationWhereUniqueInput>;
  distinct?: InputMaybe<NotificationScalarFieldEnum[]>;
  orderBy?: InputMaybe<NotificationOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NotificationWhereInput>;
};

export type UserShowReviewLikesArgs = {
  cursor?: InputMaybe<ShowReviewLikeWhereUniqueInput>;
  distinct?: InputMaybe<ShowReviewLikeScalarFieldEnum[]>;
  orderBy?: InputMaybe<ShowReviewLikeOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ShowReviewLikeWhereInput>;
};

export type UserShowReviewsArgs = {
  cursor?: InputMaybe<ShowReviewWhereUniqueInput>;
  distinct?: InputMaybe<ShowReviewScalarFieldEnum[]>;
  orderBy?: InputMaybe<ShowReviewOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ShowReviewWhereInput>;
};

export type UserSongReviewLikesArgs = {
  cursor?: InputMaybe<SongReviewLikeWhereUniqueInput>;
  distinct?: InputMaybe<SongReviewLikeScalarFieldEnum[]>;
  orderBy?: InputMaybe<SongReviewLikeOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SongReviewLikeWhereInput>;
};

export type UserSongReviewsArgs = {
  cursor?: InputMaybe<SongReviewWhereUniqueInput>;
  distinct?: InputMaybe<SongReviewScalarFieldEnum[]>;
  orderBy?: InputMaybe<SongReviewOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SongReviewWhereInput>;
};

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type UserAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type UserCount = {
  __typename?: 'UserCount';
  bookReviewLikes: Scalars['Int'];
  bookReviews: Scalars['Int'];
  followers: Scalars['Int'];
  following: Scalars['Int'];
  likedMovieReviews: Scalars['Int'];
  likedMovies: Scalars['Int'];
  likedShows: Scalars['Int'];
  movieReviews: Scalars['Int'];
  notifications: Scalars['Int'];
  showReviewLikes: Scalars['Int'];
  showReviews: Scalars['Int'];
  songReviewLikes: Scalars['Int'];
  songReviews: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  avatar: Scalars['Int'];
  bio: Scalars['Int'];
  confirmed: Scalars['Int'];
  createdAt: Scalars['Int'];
  displayname: Scalars['Int'];
  dob: Scalars['Int'];
  email: Scalars['Int'];
  id: Scalars['Int'];
  location: Scalars['Int'];
  password: Scalars['Int'];
  role: Scalars['Int'];
  updatedAt: Scalars['Int'];
  username: Scalars['Int'];
  website: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  avatar?: InputMaybe<SortOrder>;
  bio?: InputMaybe<SortOrder>;
  confirmed?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  displayname?: InputMaybe<SortOrder>;
  dob?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
  website?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  avatar?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  bookReviewLikes?: InputMaybe<BookReviewLikeCreateNestedManyWithoutUserInput>;
  bookReviews?: InputMaybe<BookReviewCreateNestedManyWithoutUserInput>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  displayname: Scalars['String'];
  dob?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  followers?: InputMaybe<FollowsCreateNestedManyWithoutFollowerInput>;
  following?: InputMaybe<FollowsCreateNestedManyWithoutFollowingInput>;
  likedMovieReviews?: InputMaybe<MovieReviewLikeCreateNestedManyWithoutUserInput>;
  likedMovies?: InputMaybe<MovieLikeCreateNestedManyWithoutUserInput>;
  likedShows?: InputMaybe<ShowLikeCreateNestedManyWithoutUserInput>;
  location?: InputMaybe<Scalars['String']>;
  movieReviews?: InputMaybe<MovieReviewCreateNestedManyWithoutUserInput>;
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Role>;
  showReviewLikes?: InputMaybe<ShowReviewLikeCreateNestedManyWithoutUserInput>;
  showReviews?: InputMaybe<ShowReviewCreateNestedManyWithoutUserInput>;
  songReviewLikes?: InputMaybe<SongReviewLikeCreateNestedManyWithoutUserInput>;
  songReviews?: InputMaybe<SongReviewCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
  watchlist?: InputMaybe<WatchlistCreateNestedOneWithoutUserInput>;
  website?: InputMaybe<Scalars['String']>;
};

export type UserCreateManyInput = {
  avatar?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  displayname: Scalars['String'];
  dob?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  location?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Role>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
  website?: InputMaybe<Scalars['String']>;
};

export type UserCreateNestedOneWithoutBookReviewLikesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutBookReviewLikesInput>;
  create?: InputMaybe<UserCreateWithoutBookReviewLikesInput>;
};

export type UserCreateNestedOneWithoutBookReviewsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutBookReviewsInput>;
  create?: InputMaybe<UserCreateWithoutBookReviewsInput>;
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

export type UserCreateNestedOneWithoutLikedMovieReviewsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutLikedMovieReviewsInput>;
  create?: InputMaybe<UserCreateWithoutLikedMovieReviewsInput>;
};

export type UserCreateNestedOneWithoutLikedMoviesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutLikedMoviesInput>;
  create?: InputMaybe<UserCreateWithoutLikedMoviesInput>;
};

export type UserCreateNestedOneWithoutLikedShowsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutLikedShowsInput>;
  create?: InputMaybe<UserCreateWithoutLikedShowsInput>;
};

export type UserCreateNestedOneWithoutMovieReviewsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutMovieReviewsInput>;
  create?: InputMaybe<UserCreateWithoutMovieReviewsInput>;
};

export type UserCreateNestedOneWithoutNotificationsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutNotificationsInput>;
  create?: InputMaybe<UserCreateWithoutNotificationsInput>;
};

export type UserCreateNestedOneWithoutShowReviewLikesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutShowReviewLikesInput>;
  create?: InputMaybe<UserCreateWithoutShowReviewLikesInput>;
};

export type UserCreateNestedOneWithoutShowReviewsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutShowReviewsInput>;
  create?: InputMaybe<UserCreateWithoutShowReviewsInput>;
};

export type UserCreateNestedOneWithoutSongReviewLikesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSongReviewLikesInput>;
  create?: InputMaybe<UserCreateWithoutSongReviewLikesInput>;
};

export type UserCreateNestedOneWithoutSongReviewsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSongReviewsInput>;
  create?: InputMaybe<UserCreateWithoutSongReviewsInput>;
};

export type UserCreateNestedOneWithoutWatchlistInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutWatchlistInput>;
  create?: InputMaybe<UserCreateWithoutWatchlistInput>;
};

export type UserCreateOrConnectWithoutBookReviewLikesInput = {
  create: UserCreateWithoutBookReviewLikesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutBookReviewsInput = {
  create: UserCreateWithoutBookReviewsInput;
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

export type UserCreateOrConnectWithoutLikedMovieReviewsInput = {
  create: UserCreateWithoutLikedMovieReviewsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutLikedMoviesInput = {
  create: UserCreateWithoutLikedMoviesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutLikedShowsInput = {
  create: UserCreateWithoutLikedShowsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutMovieReviewsInput = {
  create: UserCreateWithoutMovieReviewsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutNotificationsInput = {
  create: UserCreateWithoutNotificationsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutShowReviewLikesInput = {
  create: UserCreateWithoutShowReviewLikesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutShowReviewsInput = {
  create: UserCreateWithoutShowReviewsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutSongReviewLikesInput = {
  create: UserCreateWithoutSongReviewLikesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutSongReviewsInput = {
  create: UserCreateWithoutSongReviewsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutWatchlistInput = {
  create: UserCreateWithoutWatchlistInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutBookReviewLikesInput = {
  avatar?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  bookReviews?: InputMaybe<BookReviewCreateNestedManyWithoutUserInput>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  displayname: Scalars['String'];
  dob?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  followers?: InputMaybe<FollowsCreateNestedManyWithoutFollowerInput>;
  following?: InputMaybe<FollowsCreateNestedManyWithoutFollowingInput>;
  likedMovieReviews?: InputMaybe<MovieReviewLikeCreateNestedManyWithoutUserInput>;
  likedMovies?: InputMaybe<MovieLikeCreateNestedManyWithoutUserInput>;
  likedShows?: InputMaybe<ShowLikeCreateNestedManyWithoutUserInput>;
  location?: InputMaybe<Scalars['String']>;
  movieReviews?: InputMaybe<MovieReviewCreateNestedManyWithoutUserInput>;
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Role>;
  showReviewLikes?: InputMaybe<ShowReviewLikeCreateNestedManyWithoutUserInput>;
  showReviews?: InputMaybe<ShowReviewCreateNestedManyWithoutUserInput>;
  songReviewLikes?: InputMaybe<SongReviewLikeCreateNestedManyWithoutUserInput>;
  songReviews?: InputMaybe<SongReviewCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
  watchlist?: InputMaybe<WatchlistCreateNestedOneWithoutUserInput>;
  website?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutBookReviewsInput = {
  avatar?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  bookReviewLikes?: InputMaybe<BookReviewLikeCreateNestedManyWithoutUserInput>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  displayname: Scalars['String'];
  dob?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  followers?: InputMaybe<FollowsCreateNestedManyWithoutFollowerInput>;
  following?: InputMaybe<FollowsCreateNestedManyWithoutFollowingInput>;
  likedMovieReviews?: InputMaybe<MovieReviewLikeCreateNestedManyWithoutUserInput>;
  likedMovies?: InputMaybe<MovieLikeCreateNestedManyWithoutUserInput>;
  likedShows?: InputMaybe<ShowLikeCreateNestedManyWithoutUserInput>;
  location?: InputMaybe<Scalars['String']>;
  movieReviews?: InputMaybe<MovieReviewCreateNestedManyWithoutUserInput>;
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Role>;
  showReviewLikes?: InputMaybe<ShowReviewLikeCreateNestedManyWithoutUserInput>;
  showReviews?: InputMaybe<ShowReviewCreateNestedManyWithoutUserInput>;
  songReviewLikes?: InputMaybe<SongReviewLikeCreateNestedManyWithoutUserInput>;
  songReviews?: InputMaybe<SongReviewCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
  watchlist?: InputMaybe<WatchlistCreateNestedOneWithoutUserInput>;
  website?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutFollowersInput = {
  avatar?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  bookReviewLikes?: InputMaybe<BookReviewLikeCreateNestedManyWithoutUserInput>;
  bookReviews?: InputMaybe<BookReviewCreateNestedManyWithoutUserInput>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  displayname: Scalars['String'];
  dob?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  following?: InputMaybe<FollowsCreateNestedManyWithoutFollowingInput>;
  likedMovieReviews?: InputMaybe<MovieReviewLikeCreateNestedManyWithoutUserInput>;
  likedMovies?: InputMaybe<MovieLikeCreateNestedManyWithoutUserInput>;
  likedShows?: InputMaybe<ShowLikeCreateNestedManyWithoutUserInput>;
  location?: InputMaybe<Scalars['String']>;
  movieReviews?: InputMaybe<MovieReviewCreateNestedManyWithoutUserInput>;
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Role>;
  showReviewLikes?: InputMaybe<ShowReviewLikeCreateNestedManyWithoutUserInput>;
  showReviews?: InputMaybe<ShowReviewCreateNestedManyWithoutUserInput>;
  songReviewLikes?: InputMaybe<SongReviewLikeCreateNestedManyWithoutUserInput>;
  songReviews?: InputMaybe<SongReviewCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
  watchlist?: InputMaybe<WatchlistCreateNestedOneWithoutUserInput>;
  website?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutFollowingInput = {
  avatar?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  bookReviewLikes?: InputMaybe<BookReviewLikeCreateNestedManyWithoutUserInput>;
  bookReviews?: InputMaybe<BookReviewCreateNestedManyWithoutUserInput>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  displayname: Scalars['String'];
  dob?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  followers?: InputMaybe<FollowsCreateNestedManyWithoutFollowerInput>;
  likedMovieReviews?: InputMaybe<MovieReviewLikeCreateNestedManyWithoutUserInput>;
  likedMovies?: InputMaybe<MovieLikeCreateNestedManyWithoutUserInput>;
  likedShows?: InputMaybe<ShowLikeCreateNestedManyWithoutUserInput>;
  location?: InputMaybe<Scalars['String']>;
  movieReviews?: InputMaybe<MovieReviewCreateNestedManyWithoutUserInput>;
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Role>;
  showReviewLikes?: InputMaybe<ShowReviewLikeCreateNestedManyWithoutUserInput>;
  showReviews?: InputMaybe<ShowReviewCreateNestedManyWithoutUserInput>;
  songReviewLikes?: InputMaybe<SongReviewLikeCreateNestedManyWithoutUserInput>;
  songReviews?: InputMaybe<SongReviewCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
  watchlist?: InputMaybe<WatchlistCreateNestedOneWithoutUserInput>;
  website?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutLikedMovieReviewsInput = {
  avatar?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  bookReviewLikes?: InputMaybe<BookReviewLikeCreateNestedManyWithoutUserInput>;
  bookReviews?: InputMaybe<BookReviewCreateNestedManyWithoutUserInput>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  displayname: Scalars['String'];
  dob?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  followers?: InputMaybe<FollowsCreateNestedManyWithoutFollowerInput>;
  following?: InputMaybe<FollowsCreateNestedManyWithoutFollowingInput>;
  likedMovies?: InputMaybe<MovieLikeCreateNestedManyWithoutUserInput>;
  likedShows?: InputMaybe<ShowLikeCreateNestedManyWithoutUserInput>;
  location?: InputMaybe<Scalars['String']>;
  movieReviews?: InputMaybe<MovieReviewCreateNestedManyWithoutUserInput>;
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Role>;
  showReviewLikes?: InputMaybe<ShowReviewLikeCreateNestedManyWithoutUserInput>;
  showReviews?: InputMaybe<ShowReviewCreateNestedManyWithoutUserInput>;
  songReviewLikes?: InputMaybe<SongReviewLikeCreateNestedManyWithoutUserInput>;
  songReviews?: InputMaybe<SongReviewCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
  watchlist?: InputMaybe<WatchlistCreateNestedOneWithoutUserInput>;
  website?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutLikedMoviesInput = {
  avatar?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  bookReviewLikes?: InputMaybe<BookReviewLikeCreateNestedManyWithoutUserInput>;
  bookReviews?: InputMaybe<BookReviewCreateNestedManyWithoutUserInput>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  displayname: Scalars['String'];
  dob?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  followers?: InputMaybe<FollowsCreateNestedManyWithoutFollowerInput>;
  following?: InputMaybe<FollowsCreateNestedManyWithoutFollowingInput>;
  likedMovieReviews?: InputMaybe<MovieReviewLikeCreateNestedManyWithoutUserInput>;
  likedShows?: InputMaybe<ShowLikeCreateNestedManyWithoutUserInput>;
  location?: InputMaybe<Scalars['String']>;
  movieReviews?: InputMaybe<MovieReviewCreateNestedManyWithoutUserInput>;
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Role>;
  showReviewLikes?: InputMaybe<ShowReviewLikeCreateNestedManyWithoutUserInput>;
  showReviews?: InputMaybe<ShowReviewCreateNestedManyWithoutUserInput>;
  songReviewLikes?: InputMaybe<SongReviewLikeCreateNestedManyWithoutUserInput>;
  songReviews?: InputMaybe<SongReviewCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
  watchlist?: InputMaybe<WatchlistCreateNestedOneWithoutUserInput>;
  website?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutLikedShowsInput = {
  avatar?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  bookReviewLikes?: InputMaybe<BookReviewLikeCreateNestedManyWithoutUserInput>;
  bookReviews?: InputMaybe<BookReviewCreateNestedManyWithoutUserInput>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  displayname: Scalars['String'];
  dob?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  followers?: InputMaybe<FollowsCreateNestedManyWithoutFollowerInput>;
  following?: InputMaybe<FollowsCreateNestedManyWithoutFollowingInput>;
  likedMovieReviews?: InputMaybe<MovieReviewLikeCreateNestedManyWithoutUserInput>;
  likedMovies?: InputMaybe<MovieLikeCreateNestedManyWithoutUserInput>;
  location?: InputMaybe<Scalars['String']>;
  movieReviews?: InputMaybe<MovieReviewCreateNestedManyWithoutUserInput>;
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Role>;
  showReviewLikes?: InputMaybe<ShowReviewLikeCreateNestedManyWithoutUserInput>;
  showReviews?: InputMaybe<ShowReviewCreateNestedManyWithoutUserInput>;
  songReviewLikes?: InputMaybe<SongReviewLikeCreateNestedManyWithoutUserInput>;
  songReviews?: InputMaybe<SongReviewCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
  watchlist?: InputMaybe<WatchlistCreateNestedOneWithoutUserInput>;
  website?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutMovieReviewsInput = {
  avatar?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  bookReviewLikes?: InputMaybe<BookReviewLikeCreateNestedManyWithoutUserInput>;
  bookReviews?: InputMaybe<BookReviewCreateNestedManyWithoutUserInput>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  displayname: Scalars['String'];
  dob?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  followers?: InputMaybe<FollowsCreateNestedManyWithoutFollowerInput>;
  following?: InputMaybe<FollowsCreateNestedManyWithoutFollowingInput>;
  likedMovieReviews?: InputMaybe<MovieReviewLikeCreateNestedManyWithoutUserInput>;
  likedMovies?: InputMaybe<MovieLikeCreateNestedManyWithoutUserInput>;
  likedShows?: InputMaybe<ShowLikeCreateNestedManyWithoutUserInput>;
  location?: InputMaybe<Scalars['String']>;
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Role>;
  showReviewLikes?: InputMaybe<ShowReviewLikeCreateNestedManyWithoutUserInput>;
  showReviews?: InputMaybe<ShowReviewCreateNestedManyWithoutUserInput>;
  songReviewLikes?: InputMaybe<SongReviewLikeCreateNestedManyWithoutUserInput>;
  songReviews?: InputMaybe<SongReviewCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
  watchlist?: InputMaybe<WatchlistCreateNestedOneWithoutUserInput>;
  website?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutNotificationsInput = {
  avatar?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  bookReviewLikes?: InputMaybe<BookReviewLikeCreateNestedManyWithoutUserInput>;
  bookReviews?: InputMaybe<BookReviewCreateNestedManyWithoutUserInput>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  displayname: Scalars['String'];
  dob?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  followers?: InputMaybe<FollowsCreateNestedManyWithoutFollowerInput>;
  following?: InputMaybe<FollowsCreateNestedManyWithoutFollowingInput>;
  likedMovieReviews?: InputMaybe<MovieReviewLikeCreateNestedManyWithoutUserInput>;
  likedMovies?: InputMaybe<MovieLikeCreateNestedManyWithoutUserInput>;
  likedShows?: InputMaybe<ShowLikeCreateNestedManyWithoutUserInput>;
  location?: InputMaybe<Scalars['String']>;
  movieReviews?: InputMaybe<MovieReviewCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Role>;
  showReviewLikes?: InputMaybe<ShowReviewLikeCreateNestedManyWithoutUserInput>;
  showReviews?: InputMaybe<ShowReviewCreateNestedManyWithoutUserInput>;
  songReviewLikes?: InputMaybe<SongReviewLikeCreateNestedManyWithoutUserInput>;
  songReviews?: InputMaybe<SongReviewCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
  watchlist?: InputMaybe<WatchlistCreateNestedOneWithoutUserInput>;
  website?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutShowReviewLikesInput = {
  avatar?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  bookReviewLikes?: InputMaybe<BookReviewLikeCreateNestedManyWithoutUserInput>;
  bookReviews?: InputMaybe<BookReviewCreateNestedManyWithoutUserInput>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  displayname: Scalars['String'];
  dob?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  followers?: InputMaybe<FollowsCreateNestedManyWithoutFollowerInput>;
  following?: InputMaybe<FollowsCreateNestedManyWithoutFollowingInput>;
  likedMovieReviews?: InputMaybe<MovieReviewLikeCreateNestedManyWithoutUserInput>;
  likedMovies?: InputMaybe<MovieLikeCreateNestedManyWithoutUserInput>;
  likedShows?: InputMaybe<ShowLikeCreateNestedManyWithoutUserInput>;
  location?: InputMaybe<Scalars['String']>;
  movieReviews?: InputMaybe<MovieReviewCreateNestedManyWithoutUserInput>;
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Role>;
  showReviews?: InputMaybe<ShowReviewCreateNestedManyWithoutUserInput>;
  songReviewLikes?: InputMaybe<SongReviewLikeCreateNestedManyWithoutUserInput>;
  songReviews?: InputMaybe<SongReviewCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
  watchlist?: InputMaybe<WatchlistCreateNestedOneWithoutUserInput>;
  website?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutShowReviewsInput = {
  avatar?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  bookReviewLikes?: InputMaybe<BookReviewLikeCreateNestedManyWithoutUserInput>;
  bookReviews?: InputMaybe<BookReviewCreateNestedManyWithoutUserInput>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  displayname: Scalars['String'];
  dob?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  followers?: InputMaybe<FollowsCreateNestedManyWithoutFollowerInput>;
  following?: InputMaybe<FollowsCreateNestedManyWithoutFollowingInput>;
  likedMovieReviews?: InputMaybe<MovieReviewLikeCreateNestedManyWithoutUserInput>;
  likedMovies?: InputMaybe<MovieLikeCreateNestedManyWithoutUserInput>;
  likedShows?: InputMaybe<ShowLikeCreateNestedManyWithoutUserInput>;
  location?: InputMaybe<Scalars['String']>;
  movieReviews?: InputMaybe<MovieReviewCreateNestedManyWithoutUserInput>;
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Role>;
  showReviewLikes?: InputMaybe<ShowReviewLikeCreateNestedManyWithoutUserInput>;
  songReviewLikes?: InputMaybe<SongReviewLikeCreateNestedManyWithoutUserInput>;
  songReviews?: InputMaybe<SongReviewCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
  watchlist?: InputMaybe<WatchlistCreateNestedOneWithoutUserInput>;
  website?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutSongReviewLikesInput = {
  avatar?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  bookReviewLikes?: InputMaybe<BookReviewLikeCreateNestedManyWithoutUserInput>;
  bookReviews?: InputMaybe<BookReviewCreateNestedManyWithoutUserInput>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  displayname: Scalars['String'];
  dob?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  followers?: InputMaybe<FollowsCreateNestedManyWithoutFollowerInput>;
  following?: InputMaybe<FollowsCreateNestedManyWithoutFollowingInput>;
  likedMovieReviews?: InputMaybe<MovieReviewLikeCreateNestedManyWithoutUserInput>;
  likedMovies?: InputMaybe<MovieLikeCreateNestedManyWithoutUserInput>;
  likedShows?: InputMaybe<ShowLikeCreateNestedManyWithoutUserInput>;
  location?: InputMaybe<Scalars['String']>;
  movieReviews?: InputMaybe<MovieReviewCreateNestedManyWithoutUserInput>;
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Role>;
  showReviewLikes?: InputMaybe<ShowReviewLikeCreateNestedManyWithoutUserInput>;
  showReviews?: InputMaybe<ShowReviewCreateNestedManyWithoutUserInput>;
  songReviews?: InputMaybe<SongReviewCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
  watchlist?: InputMaybe<WatchlistCreateNestedOneWithoutUserInput>;
  website?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutSongReviewsInput = {
  avatar?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  bookReviewLikes?: InputMaybe<BookReviewLikeCreateNestedManyWithoutUserInput>;
  bookReviews?: InputMaybe<BookReviewCreateNestedManyWithoutUserInput>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  displayname: Scalars['String'];
  dob?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  followers?: InputMaybe<FollowsCreateNestedManyWithoutFollowerInput>;
  following?: InputMaybe<FollowsCreateNestedManyWithoutFollowingInput>;
  likedMovieReviews?: InputMaybe<MovieReviewLikeCreateNestedManyWithoutUserInput>;
  likedMovies?: InputMaybe<MovieLikeCreateNestedManyWithoutUserInput>;
  likedShows?: InputMaybe<ShowLikeCreateNestedManyWithoutUserInput>;
  location?: InputMaybe<Scalars['String']>;
  movieReviews?: InputMaybe<MovieReviewCreateNestedManyWithoutUserInput>;
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Role>;
  showReviewLikes?: InputMaybe<ShowReviewLikeCreateNestedManyWithoutUserInput>;
  showReviews?: InputMaybe<ShowReviewCreateNestedManyWithoutUserInput>;
  songReviewLikes?: InputMaybe<SongReviewLikeCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
  watchlist?: InputMaybe<WatchlistCreateNestedOneWithoutUserInput>;
  website?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutWatchlistInput = {
  avatar?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  bookReviewLikes?: InputMaybe<BookReviewLikeCreateNestedManyWithoutUserInput>;
  bookReviews?: InputMaybe<BookReviewCreateNestedManyWithoutUserInput>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  displayname: Scalars['String'];
  dob?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  followers?: InputMaybe<FollowsCreateNestedManyWithoutFollowerInput>;
  following?: InputMaybe<FollowsCreateNestedManyWithoutFollowingInput>;
  likedMovieReviews?: InputMaybe<MovieReviewLikeCreateNestedManyWithoutUserInput>;
  likedMovies?: InputMaybe<MovieLikeCreateNestedManyWithoutUserInput>;
  likedShows?: InputMaybe<ShowLikeCreateNestedManyWithoutUserInput>;
  location?: InputMaybe<Scalars['String']>;
  movieReviews?: InputMaybe<MovieReviewCreateNestedManyWithoutUserInput>;
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Role>;
  showReviewLikes?: InputMaybe<ShowReviewLikeCreateNestedManyWithoutUserInput>;
  showReviews?: InputMaybe<ShowReviewCreateNestedManyWithoutUserInput>;
  songReviewLikes?: InputMaybe<SongReviewLikeCreateNestedManyWithoutUserInput>;
  songReviews?: InputMaybe<SongReviewCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
  website?: InputMaybe<Scalars['String']>;
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
  avatar: Scalars['String'];
  bio: Scalars['String'];
  confirmed: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  displayname: Scalars['String'];
  dob: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['Int'];
  location: Scalars['String'];
  password: Scalars['String'];
  role: Role;
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
  website: Scalars['String'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  displayname?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  location?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export type UserMaxOrderByAggregateInput = {
  avatar?: InputMaybe<SortOrder>;
  bio?: InputMaybe<SortOrder>;
  confirmed?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  displayname?: InputMaybe<SortOrder>;
  dob?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
  website?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  displayname?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  location?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export type UserMinOrderByAggregateInput = {
  avatar?: InputMaybe<SortOrder>;
  bio?: InputMaybe<SortOrder>;
  confirmed?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  displayname?: InputMaybe<SortOrder>;
  dob?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
  website?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _avg?: InputMaybe<UserAvgOrderByAggregateInput>;
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  _sum?: InputMaybe<UserSumOrderByAggregateInput>;
  avatar?: InputMaybe<SortOrder>;
  bio?: InputMaybe<SortOrder>;
  confirmed?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  displayname?: InputMaybe<SortOrder>;
  dob?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
  website?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  avatar?: InputMaybe<SortOrder>;
  bio?: InputMaybe<SortOrder>;
  bookReviewLikes?: InputMaybe<BookReviewLikeOrderByRelationAggregateInput>;
  bookReviews?: InputMaybe<BookReviewOrderByRelationAggregateInput>;
  confirmed?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  displayname?: InputMaybe<SortOrder>;
  dob?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  followers?: InputMaybe<FollowsOrderByRelationAggregateInput>;
  following?: InputMaybe<FollowsOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  likedMovieReviews?: InputMaybe<MovieReviewLikeOrderByRelationAggregateInput>;
  likedMovies?: InputMaybe<MovieLikeOrderByRelationAggregateInput>;
  likedShows?: InputMaybe<ShowLikeOrderByRelationAggregateInput>;
  location?: InputMaybe<SortOrder>;
  movieReviews?: InputMaybe<MovieReviewOrderByRelationAggregateInput>;
  notifications?: InputMaybe<NotificationOrderByRelationAggregateInput>;
  role?: InputMaybe<SortOrder>;
  showReviewLikes?: InputMaybe<ShowReviewLikeOrderByRelationAggregateInput>;
  showReviews?: InputMaybe<ShowReviewOrderByRelationAggregateInput>;
  songReviewLikes?: InputMaybe<SongReviewLikeOrderByRelationAggregateInput>;
  songReviews?: InputMaybe<SongReviewOrderByRelationAggregateInput>;
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

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<UserScalarWhereWithAggregatesInput[]>;
  NOT?: InputMaybe<UserScalarWhereWithAggregatesInput[]>;
  OR?: InputMaybe<UserScalarWhereWithAggregatesInput[]>;
  avatar?: InputMaybe<StringWithAggregatesFilter>;
  bio?: InputMaybe<StringWithAggregatesFilter>;
  confirmed?: InputMaybe<BoolWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  displayname?: InputMaybe<StringWithAggregatesFilter>;
  dob?: InputMaybe<StringWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  location?: InputMaybe<StringWithAggregatesFilter>;
  role?: InputMaybe<EnumRoleWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  username?: InputMaybe<StringWithAggregatesFilter>;
  website?: InputMaybe<StringWithAggregatesFilter>;
};

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type UserSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type UserUpdateInput = {
  avatar?: InputMaybe<StringFieldUpdateOperationsInput>;
  bio?: InputMaybe<StringFieldUpdateOperationsInput>;
  bookReviewLikes?: InputMaybe<BookReviewLikeUpdateManyWithoutUserInput>;
  bookReviews?: InputMaybe<BookReviewUpdateManyWithoutUserInput>;
  confirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  displayname?: InputMaybe<StringFieldUpdateOperationsInput>;
  dob?: InputMaybe<StringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  followers?: InputMaybe<FollowsUpdateManyWithoutFollowerInput>;
  following?: InputMaybe<FollowsUpdateManyWithoutFollowingInput>;
  likedMovieReviews?: InputMaybe<MovieReviewLikeUpdateManyWithoutUserInput>;
  likedMovies?: InputMaybe<MovieLikeUpdateManyWithoutUserInput>;
  likedShows?: InputMaybe<ShowLikeUpdateManyWithoutUserInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  movieReviews?: InputMaybe<MovieReviewUpdateManyWithoutUserInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutUserInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  showReviewLikes?: InputMaybe<ShowReviewLikeUpdateManyWithoutUserInput>;
  showReviews?: InputMaybe<ShowReviewUpdateManyWithoutUserInput>;
  songReviewLikes?: InputMaybe<SongReviewLikeUpdateManyWithoutUserInput>;
  songReviews?: InputMaybe<SongReviewUpdateManyWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<WatchlistUpdateOneWithoutUserInput>;
  website?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  avatar?: InputMaybe<StringFieldUpdateOperationsInput>;
  bio?: InputMaybe<StringFieldUpdateOperationsInput>;
  confirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  displayname?: InputMaybe<StringFieldUpdateOperationsInput>;
  dob?: InputMaybe<StringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  website?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutBookReviewLikesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutBookReviewLikesInput>;
  create?: InputMaybe<UserCreateWithoutBookReviewLikesInput>;
  update?: InputMaybe<UserUpdateWithoutBookReviewLikesInput>;
  upsert?: InputMaybe<UserUpsertWithoutBookReviewLikesInput>;
};

export type UserUpdateOneRequiredWithoutBookReviewsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutBookReviewsInput>;
  create?: InputMaybe<UserCreateWithoutBookReviewsInput>;
  update?: InputMaybe<UserUpdateWithoutBookReviewsInput>;
  upsert?: InputMaybe<UserUpsertWithoutBookReviewsInput>;
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

export type UserUpdateOneRequiredWithoutLikedMovieReviewsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutLikedMovieReviewsInput>;
  create?: InputMaybe<UserCreateWithoutLikedMovieReviewsInput>;
  update?: InputMaybe<UserUpdateWithoutLikedMovieReviewsInput>;
  upsert?: InputMaybe<UserUpsertWithoutLikedMovieReviewsInput>;
};

export type UserUpdateOneRequiredWithoutLikedMoviesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutLikedMoviesInput>;
  create?: InputMaybe<UserCreateWithoutLikedMoviesInput>;
  update?: InputMaybe<UserUpdateWithoutLikedMoviesInput>;
  upsert?: InputMaybe<UserUpsertWithoutLikedMoviesInput>;
};

export type UserUpdateOneRequiredWithoutLikedShowsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutLikedShowsInput>;
  create?: InputMaybe<UserCreateWithoutLikedShowsInput>;
  update?: InputMaybe<UserUpdateWithoutLikedShowsInput>;
  upsert?: InputMaybe<UserUpsertWithoutLikedShowsInput>;
};

export type UserUpdateOneRequiredWithoutMovieReviewsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutMovieReviewsInput>;
  create?: InputMaybe<UserCreateWithoutMovieReviewsInput>;
  update?: InputMaybe<UserUpdateWithoutMovieReviewsInput>;
  upsert?: InputMaybe<UserUpsertWithoutMovieReviewsInput>;
};

export type UserUpdateOneRequiredWithoutNotificationsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutNotificationsInput>;
  create?: InputMaybe<UserCreateWithoutNotificationsInput>;
  update?: InputMaybe<UserUpdateWithoutNotificationsInput>;
  upsert?: InputMaybe<UserUpsertWithoutNotificationsInput>;
};

export type UserUpdateOneRequiredWithoutShowReviewLikesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutShowReviewLikesInput>;
  create?: InputMaybe<UserCreateWithoutShowReviewLikesInput>;
  update?: InputMaybe<UserUpdateWithoutShowReviewLikesInput>;
  upsert?: InputMaybe<UserUpsertWithoutShowReviewLikesInput>;
};

export type UserUpdateOneRequiredWithoutShowReviewsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutShowReviewsInput>;
  create?: InputMaybe<UserCreateWithoutShowReviewsInput>;
  update?: InputMaybe<UserUpdateWithoutShowReviewsInput>;
  upsert?: InputMaybe<UserUpsertWithoutShowReviewsInput>;
};

export type UserUpdateOneRequiredWithoutSongReviewLikesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSongReviewLikesInput>;
  create?: InputMaybe<UserCreateWithoutSongReviewLikesInput>;
  update?: InputMaybe<UserUpdateWithoutSongReviewLikesInput>;
  upsert?: InputMaybe<UserUpsertWithoutSongReviewLikesInput>;
};

export type UserUpdateOneRequiredWithoutSongReviewsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSongReviewsInput>;
  create?: InputMaybe<UserCreateWithoutSongReviewsInput>;
  update?: InputMaybe<UserUpdateWithoutSongReviewsInput>;
  upsert?: InputMaybe<UserUpsertWithoutSongReviewsInput>;
};

export type UserUpdateOneRequiredWithoutWatchlistInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutWatchlistInput>;
  create?: InputMaybe<UserCreateWithoutWatchlistInput>;
  update?: InputMaybe<UserUpdateWithoutWatchlistInput>;
  upsert?: InputMaybe<UserUpsertWithoutWatchlistInput>;
};

export type UserUpdateWithoutBookReviewLikesInput = {
  avatar?: InputMaybe<StringFieldUpdateOperationsInput>;
  bio?: InputMaybe<StringFieldUpdateOperationsInput>;
  bookReviews?: InputMaybe<BookReviewUpdateManyWithoutUserInput>;
  confirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  displayname?: InputMaybe<StringFieldUpdateOperationsInput>;
  dob?: InputMaybe<StringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  followers?: InputMaybe<FollowsUpdateManyWithoutFollowerInput>;
  following?: InputMaybe<FollowsUpdateManyWithoutFollowingInput>;
  likedMovieReviews?: InputMaybe<MovieReviewLikeUpdateManyWithoutUserInput>;
  likedMovies?: InputMaybe<MovieLikeUpdateManyWithoutUserInput>;
  likedShows?: InputMaybe<ShowLikeUpdateManyWithoutUserInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  movieReviews?: InputMaybe<MovieReviewUpdateManyWithoutUserInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutUserInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  showReviewLikes?: InputMaybe<ShowReviewLikeUpdateManyWithoutUserInput>;
  showReviews?: InputMaybe<ShowReviewUpdateManyWithoutUserInput>;
  songReviewLikes?: InputMaybe<SongReviewLikeUpdateManyWithoutUserInput>;
  songReviews?: InputMaybe<SongReviewUpdateManyWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<WatchlistUpdateOneWithoutUserInput>;
  website?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutBookReviewsInput = {
  avatar?: InputMaybe<StringFieldUpdateOperationsInput>;
  bio?: InputMaybe<StringFieldUpdateOperationsInput>;
  bookReviewLikes?: InputMaybe<BookReviewLikeUpdateManyWithoutUserInput>;
  confirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  displayname?: InputMaybe<StringFieldUpdateOperationsInput>;
  dob?: InputMaybe<StringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  followers?: InputMaybe<FollowsUpdateManyWithoutFollowerInput>;
  following?: InputMaybe<FollowsUpdateManyWithoutFollowingInput>;
  likedMovieReviews?: InputMaybe<MovieReviewLikeUpdateManyWithoutUserInput>;
  likedMovies?: InputMaybe<MovieLikeUpdateManyWithoutUserInput>;
  likedShows?: InputMaybe<ShowLikeUpdateManyWithoutUserInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  movieReviews?: InputMaybe<MovieReviewUpdateManyWithoutUserInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutUserInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  showReviewLikes?: InputMaybe<ShowReviewLikeUpdateManyWithoutUserInput>;
  showReviews?: InputMaybe<ShowReviewUpdateManyWithoutUserInput>;
  songReviewLikes?: InputMaybe<SongReviewLikeUpdateManyWithoutUserInput>;
  songReviews?: InputMaybe<SongReviewUpdateManyWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<WatchlistUpdateOneWithoutUserInput>;
  website?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutFollowersInput = {
  avatar?: InputMaybe<StringFieldUpdateOperationsInput>;
  bio?: InputMaybe<StringFieldUpdateOperationsInput>;
  bookReviewLikes?: InputMaybe<BookReviewLikeUpdateManyWithoutUserInput>;
  bookReviews?: InputMaybe<BookReviewUpdateManyWithoutUserInput>;
  confirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  displayname?: InputMaybe<StringFieldUpdateOperationsInput>;
  dob?: InputMaybe<StringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  following?: InputMaybe<FollowsUpdateManyWithoutFollowingInput>;
  likedMovieReviews?: InputMaybe<MovieReviewLikeUpdateManyWithoutUserInput>;
  likedMovies?: InputMaybe<MovieLikeUpdateManyWithoutUserInput>;
  likedShows?: InputMaybe<ShowLikeUpdateManyWithoutUserInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  movieReviews?: InputMaybe<MovieReviewUpdateManyWithoutUserInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutUserInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  showReviewLikes?: InputMaybe<ShowReviewLikeUpdateManyWithoutUserInput>;
  showReviews?: InputMaybe<ShowReviewUpdateManyWithoutUserInput>;
  songReviewLikes?: InputMaybe<SongReviewLikeUpdateManyWithoutUserInput>;
  songReviews?: InputMaybe<SongReviewUpdateManyWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<WatchlistUpdateOneWithoutUserInput>;
  website?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutFollowingInput = {
  avatar?: InputMaybe<StringFieldUpdateOperationsInput>;
  bio?: InputMaybe<StringFieldUpdateOperationsInput>;
  bookReviewLikes?: InputMaybe<BookReviewLikeUpdateManyWithoutUserInput>;
  bookReviews?: InputMaybe<BookReviewUpdateManyWithoutUserInput>;
  confirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  displayname?: InputMaybe<StringFieldUpdateOperationsInput>;
  dob?: InputMaybe<StringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  followers?: InputMaybe<FollowsUpdateManyWithoutFollowerInput>;
  likedMovieReviews?: InputMaybe<MovieReviewLikeUpdateManyWithoutUserInput>;
  likedMovies?: InputMaybe<MovieLikeUpdateManyWithoutUserInput>;
  likedShows?: InputMaybe<ShowLikeUpdateManyWithoutUserInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  movieReviews?: InputMaybe<MovieReviewUpdateManyWithoutUserInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutUserInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  showReviewLikes?: InputMaybe<ShowReviewLikeUpdateManyWithoutUserInput>;
  showReviews?: InputMaybe<ShowReviewUpdateManyWithoutUserInput>;
  songReviewLikes?: InputMaybe<SongReviewLikeUpdateManyWithoutUserInput>;
  songReviews?: InputMaybe<SongReviewUpdateManyWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<WatchlistUpdateOneWithoutUserInput>;
  website?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutLikedMovieReviewsInput = {
  avatar?: InputMaybe<StringFieldUpdateOperationsInput>;
  bio?: InputMaybe<StringFieldUpdateOperationsInput>;
  bookReviewLikes?: InputMaybe<BookReviewLikeUpdateManyWithoutUserInput>;
  bookReviews?: InputMaybe<BookReviewUpdateManyWithoutUserInput>;
  confirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  displayname?: InputMaybe<StringFieldUpdateOperationsInput>;
  dob?: InputMaybe<StringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  followers?: InputMaybe<FollowsUpdateManyWithoutFollowerInput>;
  following?: InputMaybe<FollowsUpdateManyWithoutFollowingInput>;
  likedMovies?: InputMaybe<MovieLikeUpdateManyWithoutUserInput>;
  likedShows?: InputMaybe<ShowLikeUpdateManyWithoutUserInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  movieReviews?: InputMaybe<MovieReviewUpdateManyWithoutUserInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutUserInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  showReviewLikes?: InputMaybe<ShowReviewLikeUpdateManyWithoutUserInput>;
  showReviews?: InputMaybe<ShowReviewUpdateManyWithoutUserInput>;
  songReviewLikes?: InputMaybe<SongReviewLikeUpdateManyWithoutUserInput>;
  songReviews?: InputMaybe<SongReviewUpdateManyWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<WatchlistUpdateOneWithoutUserInput>;
  website?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutLikedMoviesInput = {
  avatar?: InputMaybe<StringFieldUpdateOperationsInput>;
  bio?: InputMaybe<StringFieldUpdateOperationsInput>;
  bookReviewLikes?: InputMaybe<BookReviewLikeUpdateManyWithoutUserInput>;
  bookReviews?: InputMaybe<BookReviewUpdateManyWithoutUserInput>;
  confirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  displayname?: InputMaybe<StringFieldUpdateOperationsInput>;
  dob?: InputMaybe<StringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  followers?: InputMaybe<FollowsUpdateManyWithoutFollowerInput>;
  following?: InputMaybe<FollowsUpdateManyWithoutFollowingInput>;
  likedMovieReviews?: InputMaybe<MovieReviewLikeUpdateManyWithoutUserInput>;
  likedShows?: InputMaybe<ShowLikeUpdateManyWithoutUserInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  movieReviews?: InputMaybe<MovieReviewUpdateManyWithoutUserInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutUserInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  showReviewLikes?: InputMaybe<ShowReviewLikeUpdateManyWithoutUserInput>;
  showReviews?: InputMaybe<ShowReviewUpdateManyWithoutUserInput>;
  songReviewLikes?: InputMaybe<SongReviewLikeUpdateManyWithoutUserInput>;
  songReviews?: InputMaybe<SongReviewUpdateManyWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<WatchlistUpdateOneWithoutUserInput>;
  website?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutLikedShowsInput = {
  avatar?: InputMaybe<StringFieldUpdateOperationsInput>;
  bio?: InputMaybe<StringFieldUpdateOperationsInput>;
  bookReviewLikes?: InputMaybe<BookReviewLikeUpdateManyWithoutUserInput>;
  bookReviews?: InputMaybe<BookReviewUpdateManyWithoutUserInput>;
  confirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  displayname?: InputMaybe<StringFieldUpdateOperationsInput>;
  dob?: InputMaybe<StringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  followers?: InputMaybe<FollowsUpdateManyWithoutFollowerInput>;
  following?: InputMaybe<FollowsUpdateManyWithoutFollowingInput>;
  likedMovieReviews?: InputMaybe<MovieReviewLikeUpdateManyWithoutUserInput>;
  likedMovies?: InputMaybe<MovieLikeUpdateManyWithoutUserInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  movieReviews?: InputMaybe<MovieReviewUpdateManyWithoutUserInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutUserInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  showReviewLikes?: InputMaybe<ShowReviewLikeUpdateManyWithoutUserInput>;
  showReviews?: InputMaybe<ShowReviewUpdateManyWithoutUserInput>;
  songReviewLikes?: InputMaybe<SongReviewLikeUpdateManyWithoutUserInput>;
  songReviews?: InputMaybe<SongReviewUpdateManyWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<WatchlistUpdateOneWithoutUserInput>;
  website?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutMovieReviewsInput = {
  avatar?: InputMaybe<StringFieldUpdateOperationsInput>;
  bio?: InputMaybe<StringFieldUpdateOperationsInput>;
  bookReviewLikes?: InputMaybe<BookReviewLikeUpdateManyWithoutUserInput>;
  bookReviews?: InputMaybe<BookReviewUpdateManyWithoutUserInput>;
  confirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  displayname?: InputMaybe<StringFieldUpdateOperationsInput>;
  dob?: InputMaybe<StringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  followers?: InputMaybe<FollowsUpdateManyWithoutFollowerInput>;
  following?: InputMaybe<FollowsUpdateManyWithoutFollowingInput>;
  likedMovieReviews?: InputMaybe<MovieReviewLikeUpdateManyWithoutUserInput>;
  likedMovies?: InputMaybe<MovieLikeUpdateManyWithoutUserInput>;
  likedShows?: InputMaybe<ShowLikeUpdateManyWithoutUserInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutUserInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  showReviewLikes?: InputMaybe<ShowReviewLikeUpdateManyWithoutUserInput>;
  showReviews?: InputMaybe<ShowReviewUpdateManyWithoutUserInput>;
  songReviewLikes?: InputMaybe<SongReviewLikeUpdateManyWithoutUserInput>;
  songReviews?: InputMaybe<SongReviewUpdateManyWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<WatchlistUpdateOneWithoutUserInput>;
  website?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutNotificationsInput = {
  avatar?: InputMaybe<StringFieldUpdateOperationsInput>;
  bio?: InputMaybe<StringFieldUpdateOperationsInput>;
  bookReviewLikes?: InputMaybe<BookReviewLikeUpdateManyWithoutUserInput>;
  bookReviews?: InputMaybe<BookReviewUpdateManyWithoutUserInput>;
  confirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  displayname?: InputMaybe<StringFieldUpdateOperationsInput>;
  dob?: InputMaybe<StringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  followers?: InputMaybe<FollowsUpdateManyWithoutFollowerInput>;
  following?: InputMaybe<FollowsUpdateManyWithoutFollowingInput>;
  likedMovieReviews?: InputMaybe<MovieReviewLikeUpdateManyWithoutUserInput>;
  likedMovies?: InputMaybe<MovieLikeUpdateManyWithoutUserInput>;
  likedShows?: InputMaybe<ShowLikeUpdateManyWithoutUserInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  movieReviews?: InputMaybe<MovieReviewUpdateManyWithoutUserInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  showReviewLikes?: InputMaybe<ShowReviewLikeUpdateManyWithoutUserInput>;
  showReviews?: InputMaybe<ShowReviewUpdateManyWithoutUserInput>;
  songReviewLikes?: InputMaybe<SongReviewLikeUpdateManyWithoutUserInput>;
  songReviews?: InputMaybe<SongReviewUpdateManyWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<WatchlistUpdateOneWithoutUserInput>;
  website?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutShowReviewLikesInput = {
  avatar?: InputMaybe<StringFieldUpdateOperationsInput>;
  bio?: InputMaybe<StringFieldUpdateOperationsInput>;
  bookReviewLikes?: InputMaybe<BookReviewLikeUpdateManyWithoutUserInput>;
  bookReviews?: InputMaybe<BookReviewUpdateManyWithoutUserInput>;
  confirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  displayname?: InputMaybe<StringFieldUpdateOperationsInput>;
  dob?: InputMaybe<StringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  followers?: InputMaybe<FollowsUpdateManyWithoutFollowerInput>;
  following?: InputMaybe<FollowsUpdateManyWithoutFollowingInput>;
  likedMovieReviews?: InputMaybe<MovieReviewLikeUpdateManyWithoutUserInput>;
  likedMovies?: InputMaybe<MovieLikeUpdateManyWithoutUserInput>;
  likedShows?: InputMaybe<ShowLikeUpdateManyWithoutUserInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  movieReviews?: InputMaybe<MovieReviewUpdateManyWithoutUserInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutUserInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  showReviews?: InputMaybe<ShowReviewUpdateManyWithoutUserInput>;
  songReviewLikes?: InputMaybe<SongReviewLikeUpdateManyWithoutUserInput>;
  songReviews?: InputMaybe<SongReviewUpdateManyWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<WatchlistUpdateOneWithoutUserInput>;
  website?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutShowReviewsInput = {
  avatar?: InputMaybe<StringFieldUpdateOperationsInput>;
  bio?: InputMaybe<StringFieldUpdateOperationsInput>;
  bookReviewLikes?: InputMaybe<BookReviewLikeUpdateManyWithoutUserInput>;
  bookReviews?: InputMaybe<BookReviewUpdateManyWithoutUserInput>;
  confirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  displayname?: InputMaybe<StringFieldUpdateOperationsInput>;
  dob?: InputMaybe<StringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  followers?: InputMaybe<FollowsUpdateManyWithoutFollowerInput>;
  following?: InputMaybe<FollowsUpdateManyWithoutFollowingInput>;
  likedMovieReviews?: InputMaybe<MovieReviewLikeUpdateManyWithoutUserInput>;
  likedMovies?: InputMaybe<MovieLikeUpdateManyWithoutUserInput>;
  likedShows?: InputMaybe<ShowLikeUpdateManyWithoutUserInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  movieReviews?: InputMaybe<MovieReviewUpdateManyWithoutUserInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutUserInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  showReviewLikes?: InputMaybe<ShowReviewLikeUpdateManyWithoutUserInput>;
  songReviewLikes?: InputMaybe<SongReviewLikeUpdateManyWithoutUserInput>;
  songReviews?: InputMaybe<SongReviewUpdateManyWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<WatchlistUpdateOneWithoutUserInput>;
  website?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutSongReviewLikesInput = {
  avatar?: InputMaybe<StringFieldUpdateOperationsInput>;
  bio?: InputMaybe<StringFieldUpdateOperationsInput>;
  bookReviewLikes?: InputMaybe<BookReviewLikeUpdateManyWithoutUserInput>;
  bookReviews?: InputMaybe<BookReviewUpdateManyWithoutUserInput>;
  confirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  displayname?: InputMaybe<StringFieldUpdateOperationsInput>;
  dob?: InputMaybe<StringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  followers?: InputMaybe<FollowsUpdateManyWithoutFollowerInput>;
  following?: InputMaybe<FollowsUpdateManyWithoutFollowingInput>;
  likedMovieReviews?: InputMaybe<MovieReviewLikeUpdateManyWithoutUserInput>;
  likedMovies?: InputMaybe<MovieLikeUpdateManyWithoutUserInput>;
  likedShows?: InputMaybe<ShowLikeUpdateManyWithoutUserInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  movieReviews?: InputMaybe<MovieReviewUpdateManyWithoutUserInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutUserInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  showReviewLikes?: InputMaybe<ShowReviewLikeUpdateManyWithoutUserInput>;
  showReviews?: InputMaybe<ShowReviewUpdateManyWithoutUserInput>;
  songReviews?: InputMaybe<SongReviewUpdateManyWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<WatchlistUpdateOneWithoutUserInput>;
  website?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutSongReviewsInput = {
  avatar?: InputMaybe<StringFieldUpdateOperationsInput>;
  bio?: InputMaybe<StringFieldUpdateOperationsInput>;
  bookReviewLikes?: InputMaybe<BookReviewLikeUpdateManyWithoutUserInput>;
  bookReviews?: InputMaybe<BookReviewUpdateManyWithoutUserInput>;
  confirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  displayname?: InputMaybe<StringFieldUpdateOperationsInput>;
  dob?: InputMaybe<StringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  followers?: InputMaybe<FollowsUpdateManyWithoutFollowerInput>;
  following?: InputMaybe<FollowsUpdateManyWithoutFollowingInput>;
  likedMovieReviews?: InputMaybe<MovieReviewLikeUpdateManyWithoutUserInput>;
  likedMovies?: InputMaybe<MovieLikeUpdateManyWithoutUserInput>;
  likedShows?: InputMaybe<ShowLikeUpdateManyWithoutUserInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  movieReviews?: InputMaybe<MovieReviewUpdateManyWithoutUserInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutUserInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  showReviewLikes?: InputMaybe<ShowReviewLikeUpdateManyWithoutUserInput>;
  showReviews?: InputMaybe<ShowReviewUpdateManyWithoutUserInput>;
  songReviewLikes?: InputMaybe<SongReviewLikeUpdateManyWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  watchlist?: InputMaybe<WatchlistUpdateOneWithoutUserInput>;
  website?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutWatchlistInput = {
  avatar?: InputMaybe<StringFieldUpdateOperationsInput>;
  bio?: InputMaybe<StringFieldUpdateOperationsInput>;
  bookReviewLikes?: InputMaybe<BookReviewLikeUpdateManyWithoutUserInput>;
  bookReviews?: InputMaybe<BookReviewUpdateManyWithoutUserInput>;
  confirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  displayname?: InputMaybe<StringFieldUpdateOperationsInput>;
  dob?: InputMaybe<StringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  followers?: InputMaybe<FollowsUpdateManyWithoutFollowerInput>;
  following?: InputMaybe<FollowsUpdateManyWithoutFollowingInput>;
  likedMovieReviews?: InputMaybe<MovieReviewLikeUpdateManyWithoutUserInput>;
  likedMovies?: InputMaybe<MovieLikeUpdateManyWithoutUserInput>;
  likedShows?: InputMaybe<ShowLikeUpdateManyWithoutUserInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  movieReviews?: InputMaybe<MovieReviewUpdateManyWithoutUserInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutUserInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  showReviewLikes?: InputMaybe<ShowReviewLikeUpdateManyWithoutUserInput>;
  showReviews?: InputMaybe<ShowReviewUpdateManyWithoutUserInput>;
  songReviewLikes?: InputMaybe<SongReviewLikeUpdateManyWithoutUserInput>;
  songReviews?: InputMaybe<SongReviewUpdateManyWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  website?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutBookReviewLikesInput = {
  create: UserCreateWithoutBookReviewLikesInput;
  update: UserUpdateWithoutBookReviewLikesInput;
};

export type UserUpsertWithoutBookReviewsInput = {
  create: UserCreateWithoutBookReviewsInput;
  update: UserUpdateWithoutBookReviewsInput;
};

export type UserUpsertWithoutFollowersInput = {
  create: UserCreateWithoutFollowersInput;
  update: UserUpdateWithoutFollowersInput;
};

export type UserUpsertWithoutFollowingInput = {
  create: UserCreateWithoutFollowingInput;
  update: UserUpdateWithoutFollowingInput;
};

export type UserUpsertWithoutLikedMovieReviewsInput = {
  create: UserCreateWithoutLikedMovieReviewsInput;
  update: UserUpdateWithoutLikedMovieReviewsInput;
};

export type UserUpsertWithoutLikedMoviesInput = {
  create: UserCreateWithoutLikedMoviesInput;
  update: UserUpdateWithoutLikedMoviesInput;
};

export type UserUpsertWithoutLikedShowsInput = {
  create: UserCreateWithoutLikedShowsInput;
  update: UserUpdateWithoutLikedShowsInput;
};

export type UserUpsertWithoutMovieReviewsInput = {
  create: UserCreateWithoutMovieReviewsInput;
  update: UserUpdateWithoutMovieReviewsInput;
};

export type UserUpsertWithoutNotificationsInput = {
  create: UserCreateWithoutNotificationsInput;
  update: UserUpdateWithoutNotificationsInput;
};

export type UserUpsertWithoutShowReviewLikesInput = {
  create: UserCreateWithoutShowReviewLikesInput;
  update: UserUpdateWithoutShowReviewLikesInput;
};

export type UserUpsertWithoutShowReviewsInput = {
  create: UserCreateWithoutShowReviewsInput;
  update: UserUpdateWithoutShowReviewsInput;
};

export type UserUpsertWithoutSongReviewLikesInput = {
  create: UserCreateWithoutSongReviewLikesInput;
  update: UserUpdateWithoutSongReviewLikesInput;
};

export type UserUpsertWithoutSongReviewsInput = {
  create: UserCreateWithoutSongReviewsInput;
  update: UserUpdateWithoutSongReviewsInput;
};

export type UserUpsertWithoutWatchlistInput = {
  create: UserCreateWithoutWatchlistInput;
  update: UserUpdateWithoutWatchlistInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<UserWhereInput[]>;
  NOT?: InputMaybe<UserWhereInput[]>;
  OR?: InputMaybe<UserWhereInput[]>;
  avatar?: InputMaybe<StringFilter>;
  bio?: InputMaybe<StringFilter>;
  bookReviewLikes?: InputMaybe<BookReviewLikeListRelationFilter>;
  bookReviews?: InputMaybe<BookReviewListRelationFilter>;
  confirmed?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  displayname?: InputMaybe<StringFilter>;
  dob?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringFilter>;
  followers?: InputMaybe<FollowsListRelationFilter>;
  following?: InputMaybe<FollowsListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  likedMovieReviews?: InputMaybe<MovieReviewLikeListRelationFilter>;
  likedMovies?: InputMaybe<MovieLikeListRelationFilter>;
  likedShows?: InputMaybe<ShowLikeListRelationFilter>;
  location?: InputMaybe<StringFilter>;
  movieReviews?: InputMaybe<MovieReviewListRelationFilter>;
  notifications?: InputMaybe<NotificationListRelationFilter>;
  role?: InputMaybe<EnumRoleFilter>;
  showReviewLikes?: InputMaybe<ShowReviewLikeListRelationFilter>;
  showReviews?: InputMaybe<ShowReviewListRelationFilter>;
  songReviewLikes?: InputMaybe<SongReviewLikeListRelationFilter>;
  songReviews?: InputMaybe<SongReviewListRelationFilter>;
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

export type WatchlistAvgAggregate = {
  __typename?: 'WatchlistAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type WatchlistAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type WatchlistCount = {
  __typename?: 'WatchlistCount';
  movies: Scalars['Int'];
  shows: Scalars['Int'];
};

export type WatchlistCountAggregate = {
  __typename?: 'WatchlistCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  userId: Scalars['Int'];
};

export type WatchlistCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type WatchlistCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  movies?: InputMaybe<MovieCreateNestedManyWithoutWatchlistInput>;
  shows?: InputMaybe<ShowCreateNestedManyWithoutWatchlistInput>;
  user: UserCreateNestedOneWithoutWatchlistInput;
};

export type WatchlistCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  userId: Scalars['Int'];
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

export type WatchlistGroupBy = {
  __typename?: 'WatchlistGroupBy';
  _avg?: Maybe<WatchlistAvgAggregate>;
  _count?: Maybe<WatchlistCountAggregate>;
  _max?: Maybe<WatchlistMaxAggregate>;
  _min?: Maybe<WatchlistMinAggregate>;
  _sum?: Maybe<WatchlistSumAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  userId: Scalars['Int'];
};

export type WatchlistListRelationFilter = {
  every?: InputMaybe<WatchlistWhereInput>;
  none?: InputMaybe<WatchlistWhereInput>;
  some?: InputMaybe<WatchlistWhereInput>;
};

export type WatchlistMaxAggregate = {
  __typename?: 'WatchlistMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type WatchlistMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type WatchlistMinAggregate = {
  __typename?: 'WatchlistMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type WatchlistMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type WatchlistOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type WatchlistOrderByWithAggregationInput = {
  _avg?: InputMaybe<WatchlistAvgOrderByAggregateInput>;
  _count?: InputMaybe<WatchlistCountOrderByAggregateInput>;
  _max?: InputMaybe<WatchlistMaxOrderByAggregateInput>;
  _min?: InputMaybe<WatchlistMinOrderByAggregateInput>;
  _sum?: InputMaybe<WatchlistSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
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

export type WatchlistScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<WatchlistScalarWhereWithAggregatesInput[]>;
  NOT?: InputMaybe<WatchlistScalarWhereWithAggregatesInput[]>;
  OR?: InputMaybe<WatchlistScalarWhereWithAggregatesInput[]>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
};

export type WatchlistSumAggregate = {
  __typename?: 'WatchlistSumAggregate';
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type WatchlistSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
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

export type ConfirmMutationVariables = Exact<{
  token: Scalars['String'];
}>;

export type ConfirmMutation = {__typename?: 'Mutation'; confirm: boolean};

export type CreateActorInMovieMutationVariables = Exact<{
  data: ActorInMovieCreateInput;
}>;

export type CreateActorInMovieMutation = {__typename?: 'Mutation'; createActorInMovie: boolean};

export type CreateActorInShowMutationVariables = Exact<{
  data: ActorInShowCreateInput;
}>;

export type CreateActorInShowMutation = {__typename?: 'Mutation'; createActorInShow: boolean};

export type CreateMovieMutationVariables = Exact<{
  data: MovieCreateInput;
}>;

export type CreateMovieMutation = {__typename?: 'Mutation'; createMovie: {__typename?: 'Movie'; id: number; title: string; overview: string}};

export type CreateMovieReviewMutationVariables = Exact<{
  data: MovieReviewCreateCustomInput;
}>;

export type CreateMovieReviewMutation = {__typename?: 'Mutation'; createMovieReview: boolean};

export type CreateMovieReviewLikeMutationVariables = Exact<{
  data: MovieReviewLikeCreateInput;
}>;

export type CreateMovieReviewLikeMutation = {__typename?: 'Mutation'; createMovieReviewLike: boolean};

export type CreatePersonMutationVariables = Exact<{
  data: PersonCreateInput;
}>;

export type CreatePersonMutation = {__typename?: 'Mutation'; createPerson: {__typename?: 'Person'; id: number; career: Career[]; name: string; poster: string; bio?: string | null | undefined; age?: number | null | undefined}};

export type CreateShowMutationVariables = Exact<{
  data: ShowCreateInput;
}>;

export type CreateShowMutation = {__typename?: 'Mutation'; createShow: {__typename?: 'Show'; id: number; title: string; overview: string}};

export type CreateShowReviewMutationVariables = Exact<{
  data: ShowReviewCreateCustomInput;
}>;

export type CreateShowReviewMutation = {__typename?: 'Mutation'; createShowReview: boolean};

export type CreateSongInMovieMutationVariables = Exact<{
  data: SongInMovieCreateInput;
}>;

export type CreateSongInMovieMutation = {__typename?: 'Mutation'; createSongInMovie: boolean};

export type CreateSongInShowMutationVariables = Exact<{
  data: SongInShowCreateInput;
}>;

export type CreateSongInShowMutation = {__typename?: 'Mutation'; createSongInShow: boolean};

export type DeleteActorInMovieMutationVariables = Exact<{
  where: ActorInMovieWhereUniqueInput;
}>;

export type DeleteActorInMovieMutation = {__typename?: 'Mutation'; deleteActorInMovie?: boolean | null | undefined};

export type DeleteActorInShowMutationVariables = Exact<{
  where: ActorInShowWhereUniqueInput;
}>;

export type DeleteActorInShowMutation = {__typename?: 'Mutation'; deleteActorInShow?: boolean | null | undefined};

export type DeleteMovieReviewMutationVariables = Exact<{
  movieId: Scalars['Int'];
}>;

export type DeleteMovieReviewMutation = {__typename?: 'Mutation'; deleteMovieReview: boolean};

export type DeleteMovieReviewLikeMutationVariables = Exact<{
  where: MovieReviewLikeWhereUniqueInput;
}>;

export type DeleteMovieReviewLikeMutation = {__typename?: 'Mutation'; deleteMovieReviewLike?: boolean | null | undefined};

export type DeleteShowReviewMutationVariables = Exact<{
  showId: Scalars['Int'];
}>;

export type DeleteShowReviewMutation = {__typename?: 'Mutation'; deleteShowReview: boolean};

export type DeleteSongInMovieMutationVariables = Exact<{
  where: SongInMovieWhereUniqueInput;
}>;

export type DeleteSongInMovieMutation = {__typename?: 'Mutation'; deleteSongInMovie?: boolean | null | undefined};

export type DeleteSongInShowMutationVariables = Exact<{
  where: SongInShowWhereUniqueInput;
}>;

export type DeleteSongInShowMutation = {__typename?: 'Mutation'; deleteSongInShow?: boolean | null | undefined};

export type FollowMutationVariables = Exact<{
  userId: Scalars['Int'];
}>;

export type FollowMutation = {__typename?: 'Mutation'; follow: boolean};

export type LikeMovieMutationVariables = Exact<{
  data: MovieLikeCreateCustomInput;
}>;

export type LikeMovieMutation = {__typename?: 'Mutation'; likeMovie: boolean};

export type LikeShowMutationVariables = Exact<{
  data: ShowLikeCreateCustomInput;
}>;

export type LikeShowMutation = {__typename?: 'Mutation'; likeShow: boolean};

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

export type UnlikeMovieMutationVariables = Exact<{
  movieId: Scalars['Int'];
}>;

export type UnlikeMovieMutation = {__typename?: 'Mutation'; unlikeMovie: boolean};

export type UnlikeShowMutationVariables = Exact<{
  showId: Scalars['Int'];
}>;

export type UnlikeShowMutation = {__typename?: 'Mutation'; unlikeShow: boolean};

export type UpdateGenreMutationVariables = Exact<{
  data: GenreUpdateInput;
  where: GenreWhereUniqueInput;
}>;

export type UpdateGenreMutation = {__typename?: 'Mutation'; updateGenre?: {__typename?: 'Genre'; name: string} | null | undefined};

export type UpdateMovieMutationVariables = Exact<{
  data: MovieUpdateInput;
  where: MovieWhereUniqueInput;
}>;

export type UpdateMovieMutation = {__typename?: 'Mutation'; updateMovie?: {__typename?: 'Movie'; id: number} | null | undefined};

export type UpdateMovieReivewMutationVariables = Exact<{
  data: MovieReviewUpdateInput;
  where: MovieReviewWhereUniqueInput;
}>;

export type UpdateMovieReivewMutation = {__typename?: 'Mutation'; updateMovieReview: {__typename?: 'MovieReview'; review?: string | null | undefined; rating: number; _count?: {__typename?: 'MovieReviewCount'; likes: number} | null | undefined}};

export type UpdateShowMutationVariables = Exact<{
  data: ShowUpdateInput;
  where: ShowWhereUniqueInput;
}>;

export type UpdateShowMutation = {__typename?: 'Mutation'; updateShow?: {__typename?: 'Show'; id: number} | null | undefined};

export type UploadAvatarMutationVariables = Exact<{
  file: Scalars['Upload'];
}>;

export type UploadAvatarMutation = {__typename?: 'Mutation'; uploadAvatar: boolean};

export type UploadBackdropMutationVariables = Exact<{
  id: Scalars['Int'];
  file: Scalars['Upload'];
  type: UploadType;
}>;

export type UploadBackdropMutation = {__typename?: 'Mutation'; uploadBackdrop: boolean};

export type UploadPosterMutationVariables = Exact<{
  id: Scalars['Int'];
  file: Scalars['Upload'];
  type: UploadType;
}>;

export type UploadPosterMutation = {__typename?: 'Mutation'; uploadPoster: boolean};

export type ActorsInMovieQueryVariables = Exact<{
  movieId: Scalars['Int'];
  where?: InputMaybe<ActorInMovieWhereInput>;
  orderBy?: InputMaybe<ActorInMovieOrderByWithRelationInput[] | ActorInMovieOrderByWithRelationInput>;
  cursor?: InputMaybe<ActorInMovieWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']>;
}>;

export type ActorsInMovieQuery = {__typename?: 'Query'; movie?: {__typename?: 'Movie'; actors: Array<{__typename?: 'ActorInMovie'; personId: number}>} | null | undefined};

export type ActorsInShowQueryVariables = Exact<{
  showId: Scalars['Int'];
  where?: InputMaybe<ActorInShowWhereInput>;
  orderBy?: InputMaybe<ActorInShowOrderByWithRelationInput[] | ActorInShowOrderByWithRelationInput>;
  cursor?: InputMaybe<ActorInShowWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']>;
}>;

export type ActorsInShowQuery = {__typename?: 'Query'; show?: {__typename?: 'Show'; actors: Array<{__typename?: 'ActorInShow'; personId: number}>} | null | undefined};

export type CountMediaQueryVariables = Exact<Record<string, never>>;

export type CountMediaQuery = {__typename?: 'Query'; aggregateMovie: {__typename?: 'AggregateMovie'; _count?: {__typename?: 'MovieCountAggregate'; _all: number} | null | undefined}; aggregateShow: {__typename?: 'AggregateShow'; _count?: {__typename?: 'ShowCountAggregate'; _all: number} | null | undefined}; aggregateSong: {__typename?: 'AggregateSong'; _count?: {__typename?: 'SongCountAggregate'; _all: number} | null | undefined}; aggregateBook: {__typename?: 'AggregateBook'; _count?: {__typename?: 'BookCountAggregate'; _all: number} | null | undefined}};

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

export type GenresQueryVariables = Exact<{
  where?: InputMaybe<GenreWhereInput>;
}>;

export type GenresQuery = {__typename?: 'Query'; genres: Array<{__typename?: 'Genre'; id: number; name: string}>};

export type MeQueryVariables = Exact<Record<string, never>>;

export type MeQuery = {__typename?: 'Query'; me?: {__typename?: 'User'; id: number; email: string; username: string; avatar: string} | null | undefined};

export type MovieQueryVariables = Exact<{
  movieId: Scalars['Int'];
}>;

export type MovieQuery = {__typename?: 'Query'; movie?: {__typename?: 'Movie'; id: number; title: string; tagline: string; overview: string; poster: string; backdrop: string; released?: any | null | undefined; runtime?: number | null | undefined; trailer?: string | null | undefined; rating?: string | null | undefined; isLiked: boolean; _count?: {__typename?: 'MovieCount'; likes: number} | null | undefined; actors: Array<{__typename?: 'ActorInMovie'; role: string; person: {__typename?: 'Person'; id: number; name: string; poster: string}}>; genres: Array<{__typename?: 'Genre'; name: string}>; soundtrack: Array<{__typename?: 'SongInMovie'; timestamp: any; description: string; song: {__typename?: 'Song'; id: number; title: string; description: string; poster: string; artists: Array<{__typename?: 'Person'; id: number; name: string}>; songInMovie: Array<{__typename?: 'SongInMovie'; timestamp: any; description: string}>}}>; reviews: Array<{__typename?: 'MovieReview'; review?: string | null | undefined; rating: number; user: {__typename?: 'User'; username: string; avatar: string}; _count?: {__typename?: 'MovieReviewCount'; likes: number} | null | undefined}>; aggregateMovieReview: {__typename?: 'AggregateMovieReview'; _avg?: {__typename?: 'MovieReviewAvgAggregate'; rating?: number | null | undefined} | null | undefined}} | null | undefined};

export type MoviesQueryVariables = Exact<{
  where?: InputMaybe<MovieWhereInput>;
  orderBy?: InputMaybe<MovieOrderByWithRelationInput[] | MovieOrderByWithRelationInput>;
  cursor?: InputMaybe<MovieWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']>;
}>;

export type MoviesQuery = {__typename?: 'Query'; movies?: Array<{__typename?: 'Movie'; id: number; title: string; poster: string}> | null | undefined};

export type NotificationsQueryVariables = Exact<Record<string, never>>;

export type NotificationsQuery = {__typename?: 'Query'; notifications: Array<{__typename?: 'Notification'; id: number; message: string; read: boolean; createdAt: any}>};

export type PeopleQueryVariables = Exact<{
  where?: InputMaybe<PersonWhereInput>;
  orderBy?: InputMaybe<PersonOrderByWithRelationInput[] | PersonOrderByWithRelationInput>;
  cursor?: InputMaybe<PersonWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']>;
}>;

export type PeopleQuery = {__typename?: 'Query'; people?: Array<{__typename?: 'Person'; id: number; career: Career[]; name: string; poster: string}> | null | undefined};

export type PersonQueryVariables = Exact<{
  where: PersonWhereUniqueInput;
}>;

export type PersonQuery = {__typename?: 'Query'; person?: {__typename?: 'Person'; id: number; career: Career[]; name: string; poster: string; bio?: string | null | undefined; age?: number | null | undefined; _count?: {__typename?: 'PersonCount'; movies: number; shows: number; books: number; songs: number} | null | undefined} | null | undefined};

export type ShowQueryVariables = Exact<{
  showId: Scalars['Int'];
}>;

export type ShowQuery = {__typename?: 'Query'; show?: {__typename?: 'Show'; id: number; title: string; tagline: string; overview: string; poster: string; backdrop: string; released?: any | null | undefined; trailer?: string | null | undefined; rating?: string | null | undefined; isLiked: boolean; _count?: {__typename?: 'ShowCount'; likes: number} | null | undefined; actors: Array<{__typename?: 'ActorInShow'; role: string; person: {__typename?: 'Person'; id: number; name: string; poster: string}}>; genres: Array<{__typename?: 'Genre'; name: string}>; soundtrack: Array<{__typename?: 'SongInShow'; timestamp: any; description: string; song: {__typename?: 'Song'; id: number; title: string; description: string; poster: string; artists: Array<{__typename?: 'Person'; id: number; name: string}>; songInShow: Array<{__typename?: 'SongInShow'; timestamp: any; description: string}>}}>; reviews: Array<{__typename?: 'ShowReview'; review?: string | null | undefined; rating: number; user: {__typename?: 'User'; username: string; avatar: string}; _count?: {__typename?: 'ShowReviewCount'; likes: number} | null | undefined}>; aggregateShowReview: {__typename?: 'AggregateShowReview'; _avg?: {__typename?: 'ShowReviewAvgAggregate'; rating?: number | null | undefined} | null | undefined}} | null | undefined};

export type ShowsQueryVariables = Exact<{
  where?: InputMaybe<ShowWhereInput>;
  orderBy?: InputMaybe<ShowOrderByWithRelationInput[] | ShowOrderByWithRelationInput>;
  cursor?: InputMaybe<ShowWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']>;
}>;

export type ShowsQuery = {__typename?: 'Query'; shows?: Array<{__typename?: 'Show'; id: number; title: string; poster: string}> | null | undefined};

export type SongsQueryVariables = Exact<{
  where?: InputMaybe<SongWhereInput>;
  orderBy?: InputMaybe<SongOrderByWithRelationInput[] | SongOrderByWithRelationInput>;
  cursor?: InputMaybe<SongWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']>;
}>;

export type SongsQuery = {__typename?: 'Query'; songs?: Array<{__typename?: 'Song'; id: number; title: string; poster: string; artists: Array<{__typename?: 'Person'; name: string}>}> | null | undefined};

export type UserQueryVariables = Exact<{
  username: Scalars['String'];
}>;

export type UserQuery = {__typename?: 'Query'; user?: {__typename?: 'User'; id: number; confirmed: boolean; email: string; username: string; displayname: string; role: Role; avatar: string; bio: string; location: string; website: string; dob: string; isFollowing: boolean; createdAt: any; updatedAt: any; _count?: {__typename?: 'UserCount'; following: number; followers: number} | null | undefined} | null | undefined};

export type NotificationListenerSubscriptionVariables = Exact<{
  listenerId: Scalars['Int'];
}>;

export type NotificationListenerSubscription = {__typename?: 'Subscription'; notificationListener: {__typename?: 'Notification'; id: number; userId: number; message: string; read: boolean; createdAt: any}};

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
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<ConfirmMutation, ConfirmMutationVariables>(ConfirmDocument, options);
      }

export type ConfirmMutationHookResult = ReturnType<typeof useConfirmMutation>;
export type ConfirmMutationResult = Apollo.MutationResult<ConfirmMutation>;
export type ConfirmMutationOptions = Apollo.BaseMutationOptions<ConfirmMutation, ConfirmMutationVariables>;
export const CreateActorInMovieDocument = gql`
    mutation createActorInMovie($data: ActorInMovieCreateInput!) {
  createActorInMovie(data: $data)
}
    `;
export type CreateActorInMovieMutationFn = Apollo.MutationFunction<CreateActorInMovieMutation, CreateActorInMovieMutationVariables>;

/**
 * __useCreateActorInMovieMutation__
 *
 * To run a mutation, you first call `useCreateActorInMovieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateActorInMovieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createActorInMovieMutation, { data, loading, error }] = useCreateActorInMovieMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateActorInMovieMutation(baseOptions?: Apollo.MutationHookOptions<CreateActorInMovieMutation, CreateActorInMovieMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<CreateActorInMovieMutation, CreateActorInMovieMutationVariables>(CreateActorInMovieDocument, options);
      }

export type CreateActorInMovieMutationHookResult = ReturnType<typeof useCreateActorInMovieMutation>;
export type CreateActorInMovieMutationResult = Apollo.MutationResult<CreateActorInMovieMutation>;
export type CreateActorInMovieMutationOptions = Apollo.BaseMutationOptions<CreateActorInMovieMutation, CreateActorInMovieMutationVariables>;
export const CreateActorInShowDocument = gql`
    mutation createActorInShow($data: ActorInShowCreateInput!) {
  createActorInShow(data: $data)
}
    `;
export type CreateActorInShowMutationFn = Apollo.MutationFunction<CreateActorInShowMutation, CreateActorInShowMutationVariables>;

/**
 * __useCreateActorInShowMutation__
 *
 * To run a mutation, you first call `useCreateActorInShowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateActorInShowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createActorInShowMutation, { data, loading, error }] = useCreateActorInShowMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateActorInShowMutation(baseOptions?: Apollo.MutationHookOptions<CreateActorInShowMutation, CreateActorInShowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<CreateActorInShowMutation, CreateActorInShowMutationVariables>(CreateActorInShowDocument, options);
      }

export type CreateActorInShowMutationHookResult = ReturnType<typeof useCreateActorInShowMutation>;
export type CreateActorInShowMutationResult = Apollo.MutationResult<CreateActorInShowMutation>;
export type CreateActorInShowMutationOptions = Apollo.BaseMutationOptions<CreateActorInShowMutation, CreateActorInShowMutationVariables>;
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
export const CreateMovieReviewDocument = gql`
    mutation createMovieReview($data: MovieReviewCreateCustomInput!) {
  createMovieReview(data: $data)
}
    `;
export type CreateMovieReviewMutationFn = Apollo.MutationFunction<CreateMovieReviewMutation, CreateMovieReviewMutationVariables>;

/**
 * __useCreateMovieReviewMutation__
 *
 * To run a mutation, you first call `useCreateMovieReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMovieReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMovieReviewMutation, { data, loading, error }] = useCreateMovieReviewMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateMovieReviewMutation(baseOptions?: Apollo.MutationHookOptions<CreateMovieReviewMutation, CreateMovieReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<CreateMovieReviewMutation, CreateMovieReviewMutationVariables>(CreateMovieReviewDocument, options);
      }

export type CreateMovieReviewMutationHookResult = ReturnType<typeof useCreateMovieReviewMutation>;
export type CreateMovieReviewMutationResult = Apollo.MutationResult<CreateMovieReviewMutation>;
export type CreateMovieReviewMutationOptions = Apollo.BaseMutationOptions<CreateMovieReviewMutation, CreateMovieReviewMutationVariables>;
export const CreateMovieReviewLikeDocument = gql`
    mutation createMovieReviewLike($data: MovieReviewLikeCreateInput!) {
  createMovieReviewLike(data: $data)
}
    `;
export type CreateMovieReviewLikeMutationFn = Apollo.MutationFunction<CreateMovieReviewLikeMutation, CreateMovieReviewLikeMutationVariables>;

/**
 * __useCreateMovieReviewLikeMutation__
 *
 * To run a mutation, you first call `useCreateMovieReviewLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMovieReviewLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMovieReviewLikeMutation, { data, loading, error }] = useCreateMovieReviewLikeMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateMovieReviewLikeMutation(baseOptions?: Apollo.MutationHookOptions<CreateMovieReviewLikeMutation, CreateMovieReviewLikeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<CreateMovieReviewLikeMutation, CreateMovieReviewLikeMutationVariables>(CreateMovieReviewLikeDocument, options);
      }

export type CreateMovieReviewLikeMutationHookResult = ReturnType<typeof useCreateMovieReviewLikeMutation>;
export type CreateMovieReviewLikeMutationResult = Apollo.MutationResult<CreateMovieReviewLikeMutation>;
export type CreateMovieReviewLikeMutationOptions = Apollo.BaseMutationOptions<CreateMovieReviewLikeMutation, CreateMovieReviewLikeMutationVariables>;
export const CreatePersonDocument = gql`
    mutation CreatePerson($data: PersonCreateInput!) {
  createPerson(data: $data) {
    id
    career
    name
    poster
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
export const CreateShowDocument = gql`
    mutation CreateShow($data: ShowCreateInput!) {
  createShow(data: $data) {
    id
    title
    overview
  }
}
    `;
export type CreateShowMutationFn = Apollo.MutationFunction<CreateShowMutation, CreateShowMutationVariables>;

/**
 * __useCreateShowMutation__
 *
 * To run a mutation, you first call `useCreateShowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateShowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createShowMutation, { data, loading, error }] = useCreateShowMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateShowMutation(baseOptions?: Apollo.MutationHookOptions<CreateShowMutation, CreateShowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<CreateShowMutation, CreateShowMutationVariables>(CreateShowDocument, options);
      }

export type CreateShowMutationHookResult = ReturnType<typeof useCreateShowMutation>;
export type CreateShowMutationResult = Apollo.MutationResult<CreateShowMutation>;
export type CreateShowMutationOptions = Apollo.BaseMutationOptions<CreateShowMutation, CreateShowMutationVariables>;
export const CreateShowReviewDocument = gql`
    mutation createShowReview($data: ShowReviewCreateCustomInput!) {
  createShowReview(data: $data)
}
    `;
export type CreateShowReviewMutationFn = Apollo.MutationFunction<CreateShowReviewMutation, CreateShowReviewMutationVariables>;

/**
 * __useCreateShowReviewMutation__
 *
 * To run a mutation, you first call `useCreateShowReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateShowReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createShowReviewMutation, { data, loading, error }] = useCreateShowReviewMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateShowReviewMutation(baseOptions?: Apollo.MutationHookOptions<CreateShowReviewMutation, CreateShowReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<CreateShowReviewMutation, CreateShowReviewMutationVariables>(CreateShowReviewDocument, options);
      }

export type CreateShowReviewMutationHookResult = ReturnType<typeof useCreateShowReviewMutation>;
export type CreateShowReviewMutationResult = Apollo.MutationResult<CreateShowReviewMutation>;
export type CreateShowReviewMutationOptions = Apollo.BaseMutationOptions<CreateShowReviewMutation, CreateShowReviewMutationVariables>;
export const CreateSongInMovieDocument = gql`
    mutation createSongInMovie($data: SongInMovieCreateInput!) {
  createSongInMovie(data: $data)
}
    `;
export type CreateSongInMovieMutationFn = Apollo.MutationFunction<CreateSongInMovieMutation, CreateSongInMovieMutationVariables>;

/**
 * __useCreateSongInMovieMutation__
 *
 * To run a mutation, you first call `useCreateSongInMovieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSongInMovieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSongInMovieMutation, { data, loading, error }] = useCreateSongInMovieMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateSongInMovieMutation(baseOptions?: Apollo.MutationHookOptions<CreateSongInMovieMutation, CreateSongInMovieMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<CreateSongInMovieMutation, CreateSongInMovieMutationVariables>(CreateSongInMovieDocument, options);
      }

export type CreateSongInMovieMutationHookResult = ReturnType<typeof useCreateSongInMovieMutation>;
export type CreateSongInMovieMutationResult = Apollo.MutationResult<CreateSongInMovieMutation>;
export type CreateSongInMovieMutationOptions = Apollo.BaseMutationOptions<CreateSongInMovieMutation, CreateSongInMovieMutationVariables>;
export const CreateSongInShowDocument = gql`
    mutation createSongInShow($data: SongInShowCreateInput!) {
  createSongInShow(data: $data)
}
    `;
export type CreateSongInShowMutationFn = Apollo.MutationFunction<CreateSongInShowMutation, CreateSongInShowMutationVariables>;

/**
 * __useCreateSongInShowMutation__
 *
 * To run a mutation, you first call `useCreateSongInShowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSongInShowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSongInShowMutation, { data, loading, error }] = useCreateSongInShowMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateSongInShowMutation(baseOptions?: Apollo.MutationHookOptions<CreateSongInShowMutation, CreateSongInShowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<CreateSongInShowMutation, CreateSongInShowMutationVariables>(CreateSongInShowDocument, options);
      }

export type CreateSongInShowMutationHookResult = ReturnType<typeof useCreateSongInShowMutation>;
export type CreateSongInShowMutationResult = Apollo.MutationResult<CreateSongInShowMutation>;
export type CreateSongInShowMutationOptions = Apollo.BaseMutationOptions<CreateSongInShowMutation, CreateSongInShowMutationVariables>;
export const DeleteActorInMovieDocument = gql`
    mutation deleteActorInMovie($where: ActorInMovieWhereUniqueInput!) {
  deleteActorInMovie(where: $where)
}
    `;
export type DeleteActorInMovieMutationFn = Apollo.MutationFunction<DeleteActorInMovieMutation, DeleteActorInMovieMutationVariables>;

/**
 * __useDeleteActorInMovieMutation__
 *
 * To run a mutation, you first call `useDeleteActorInMovieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteActorInMovieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteActorInMovieMutation, { data, loading, error }] = useDeleteActorInMovieMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteActorInMovieMutation(baseOptions?: Apollo.MutationHookOptions<DeleteActorInMovieMutation, DeleteActorInMovieMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<DeleteActorInMovieMutation, DeleteActorInMovieMutationVariables>(DeleteActorInMovieDocument, options);
      }

export type DeleteActorInMovieMutationHookResult = ReturnType<typeof useDeleteActorInMovieMutation>;
export type DeleteActorInMovieMutationResult = Apollo.MutationResult<DeleteActorInMovieMutation>;
export type DeleteActorInMovieMutationOptions = Apollo.BaseMutationOptions<DeleteActorInMovieMutation, DeleteActorInMovieMutationVariables>;
export const DeleteActorInShowDocument = gql`
    mutation deleteActorInShow($where: ActorInShowWhereUniqueInput!) {
  deleteActorInShow(where: $where)
}
    `;
export type DeleteActorInShowMutationFn = Apollo.MutationFunction<DeleteActorInShowMutation, DeleteActorInShowMutationVariables>;

/**
 * __useDeleteActorInShowMutation__
 *
 * To run a mutation, you first call `useDeleteActorInShowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteActorInShowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteActorInShowMutation, { data, loading, error }] = useDeleteActorInShowMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteActorInShowMutation(baseOptions?: Apollo.MutationHookOptions<DeleteActorInShowMutation, DeleteActorInShowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<DeleteActorInShowMutation, DeleteActorInShowMutationVariables>(DeleteActorInShowDocument, options);
      }

export type DeleteActorInShowMutationHookResult = ReturnType<typeof useDeleteActorInShowMutation>;
export type DeleteActorInShowMutationResult = Apollo.MutationResult<DeleteActorInShowMutation>;
export type DeleteActorInShowMutationOptions = Apollo.BaseMutationOptions<DeleteActorInShowMutation, DeleteActorInShowMutationVariables>;
export const DeleteMovieReviewDocument = gql`
    mutation deleteMovieReview($movieId: Int!) {
  deleteMovieReview(movieId: $movieId)
}
    `;
export type DeleteMovieReviewMutationFn = Apollo.MutationFunction<DeleteMovieReviewMutation, DeleteMovieReviewMutationVariables>;

/**
 * __useDeleteMovieReviewMutation__
 *
 * To run a mutation, you first call `useDeleteMovieReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMovieReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMovieReviewMutation, { data, loading, error }] = useDeleteMovieReviewMutation({
 *   variables: {
 *      movieId: // value for 'movieId'
 *   },
 * });
 */
export function useDeleteMovieReviewMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMovieReviewMutation, DeleteMovieReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<DeleteMovieReviewMutation, DeleteMovieReviewMutationVariables>(DeleteMovieReviewDocument, options);
      }

export type DeleteMovieReviewMutationHookResult = ReturnType<typeof useDeleteMovieReviewMutation>;
export type DeleteMovieReviewMutationResult = Apollo.MutationResult<DeleteMovieReviewMutation>;
export type DeleteMovieReviewMutationOptions = Apollo.BaseMutationOptions<DeleteMovieReviewMutation, DeleteMovieReviewMutationVariables>;
export const DeleteMovieReviewLikeDocument = gql`
    mutation deleteMovieReviewLike($where: MovieReviewLikeWhereUniqueInput!) {
  deleteMovieReviewLike(where: $where)
}
    `;
export type DeleteMovieReviewLikeMutationFn = Apollo.MutationFunction<DeleteMovieReviewLikeMutation, DeleteMovieReviewLikeMutationVariables>;

/**
 * __useDeleteMovieReviewLikeMutation__
 *
 * To run a mutation, you first call `useDeleteMovieReviewLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMovieReviewLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMovieReviewLikeMutation, { data, loading, error }] = useDeleteMovieReviewLikeMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteMovieReviewLikeMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMovieReviewLikeMutation, DeleteMovieReviewLikeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<DeleteMovieReviewLikeMutation, DeleteMovieReviewLikeMutationVariables>(DeleteMovieReviewLikeDocument, options);
      }

export type DeleteMovieReviewLikeMutationHookResult = ReturnType<typeof useDeleteMovieReviewLikeMutation>;
export type DeleteMovieReviewLikeMutationResult = Apollo.MutationResult<DeleteMovieReviewLikeMutation>;
export type DeleteMovieReviewLikeMutationOptions = Apollo.BaseMutationOptions<DeleteMovieReviewLikeMutation, DeleteMovieReviewLikeMutationVariables>;
export const DeleteShowReviewDocument = gql`
    mutation deleteShowReview($showId: Int!) {
  deleteShowReview(showId: $showId)
}
    `;
export type DeleteShowReviewMutationFn = Apollo.MutationFunction<DeleteShowReviewMutation, DeleteShowReviewMutationVariables>;

/**
 * __useDeleteShowReviewMutation__
 *
 * To run a mutation, you first call `useDeleteShowReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteShowReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteShowReviewMutation, { data, loading, error }] = useDeleteShowReviewMutation({
 *   variables: {
 *      showId: // value for 'showId'
 *   },
 * });
 */
export function useDeleteShowReviewMutation(baseOptions?: Apollo.MutationHookOptions<DeleteShowReviewMutation, DeleteShowReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<DeleteShowReviewMutation, DeleteShowReviewMutationVariables>(DeleteShowReviewDocument, options);
      }

export type DeleteShowReviewMutationHookResult = ReturnType<typeof useDeleteShowReviewMutation>;
export type DeleteShowReviewMutationResult = Apollo.MutationResult<DeleteShowReviewMutation>;
export type DeleteShowReviewMutationOptions = Apollo.BaseMutationOptions<DeleteShowReviewMutation, DeleteShowReviewMutationVariables>;
export const DeleteSongInMovieDocument = gql`
    mutation deleteSongInMovie($where: SongInMovieWhereUniqueInput!) {
  deleteSongInMovie(where: $where)
}
    `;
export type DeleteSongInMovieMutationFn = Apollo.MutationFunction<DeleteSongInMovieMutation, DeleteSongInMovieMutationVariables>;

/**
 * __useDeleteSongInMovieMutation__
 *
 * To run a mutation, you first call `useDeleteSongInMovieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSongInMovieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSongInMovieMutation, { data, loading, error }] = useDeleteSongInMovieMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteSongInMovieMutation(baseOptions?: Apollo.MutationHookOptions<DeleteSongInMovieMutation, DeleteSongInMovieMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<DeleteSongInMovieMutation, DeleteSongInMovieMutationVariables>(DeleteSongInMovieDocument, options);
      }

export type DeleteSongInMovieMutationHookResult = ReturnType<typeof useDeleteSongInMovieMutation>;
export type DeleteSongInMovieMutationResult = Apollo.MutationResult<DeleteSongInMovieMutation>;
export type DeleteSongInMovieMutationOptions = Apollo.BaseMutationOptions<DeleteSongInMovieMutation, DeleteSongInMovieMutationVariables>;
export const DeleteSongInShowDocument = gql`
    mutation deleteSongInShow($where: SongInShowWhereUniqueInput!) {
  deleteSongInShow(where: $where)
}
    `;
export type DeleteSongInShowMutationFn = Apollo.MutationFunction<DeleteSongInShowMutation, DeleteSongInShowMutationVariables>;

/**
 * __useDeleteSongInShowMutation__
 *
 * To run a mutation, you first call `useDeleteSongInShowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSongInShowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSongInShowMutation, { data, loading, error }] = useDeleteSongInShowMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteSongInShowMutation(baseOptions?: Apollo.MutationHookOptions<DeleteSongInShowMutation, DeleteSongInShowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<DeleteSongInShowMutation, DeleteSongInShowMutationVariables>(DeleteSongInShowDocument, options);
      }

export type DeleteSongInShowMutationHookResult = ReturnType<typeof useDeleteSongInShowMutation>;
export type DeleteSongInShowMutationResult = Apollo.MutationResult<DeleteSongInShowMutation>;
export type DeleteSongInShowMutationOptions = Apollo.BaseMutationOptions<DeleteSongInShowMutation, DeleteSongInShowMutationVariables>;
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
export const LikeMovieDocument = gql`
    mutation LikeMovie($data: MovieLikeCreateCustomInput!) {
  likeMovie(data: $data)
}
    `;
export type LikeMovieMutationFn = Apollo.MutationFunction<LikeMovieMutation, LikeMovieMutationVariables>;

/**
 * __useLikeMovieMutation__
 *
 * To run a mutation, you first call `useLikeMovieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikeMovieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likeMovieMutation, { data, loading, error }] = useLikeMovieMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLikeMovieMutation(baseOptions?: Apollo.MutationHookOptions<LikeMovieMutation, LikeMovieMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<LikeMovieMutation, LikeMovieMutationVariables>(LikeMovieDocument, options);
      }

export type LikeMovieMutationHookResult = ReturnType<typeof useLikeMovieMutation>;
export type LikeMovieMutationResult = Apollo.MutationResult<LikeMovieMutation>;
export type LikeMovieMutationOptions = Apollo.BaseMutationOptions<LikeMovieMutation, LikeMovieMutationVariables>;
export const LikeShowDocument = gql`
    mutation LikeShow($data: ShowLikeCreateCustomInput!) {
  likeShow(data: $data)
}
    `;
export type LikeShowMutationFn = Apollo.MutationFunction<LikeShowMutation, LikeShowMutationVariables>;

/**
 * __useLikeShowMutation__
 *
 * To run a mutation, you first call `useLikeShowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikeShowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likeShowMutation, { data, loading, error }] = useLikeShowMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLikeShowMutation(baseOptions?: Apollo.MutationHookOptions<LikeShowMutation, LikeShowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<LikeShowMutation, LikeShowMutationVariables>(LikeShowDocument, options);
      }

export type LikeShowMutationHookResult = ReturnType<typeof useLikeShowMutation>;
export type LikeShowMutationResult = Apollo.MutationResult<LikeShowMutation>;
export type LikeShowMutationOptions = Apollo.BaseMutationOptions<LikeShowMutation, LikeShowMutationVariables>;
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
export const UnlikeMovieDocument = gql`
    mutation UnlikeMovie($movieId: Int!) {
  unlikeMovie(movieId: $movieId)
}
    `;
export type UnlikeMovieMutationFn = Apollo.MutationFunction<UnlikeMovieMutation, UnlikeMovieMutationVariables>;

/**
 * __useUnlikeMovieMutation__
 *
 * To run a mutation, you first call `useUnlikeMovieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnlikeMovieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unlikeMovieMutation, { data, loading, error }] = useUnlikeMovieMutation({
 *   variables: {
 *      movieId: // value for 'movieId'
 *   },
 * });
 */
export function useUnlikeMovieMutation(baseOptions?: Apollo.MutationHookOptions<UnlikeMovieMutation, UnlikeMovieMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<UnlikeMovieMutation, UnlikeMovieMutationVariables>(UnlikeMovieDocument, options);
      }

export type UnlikeMovieMutationHookResult = ReturnType<typeof useUnlikeMovieMutation>;
export type UnlikeMovieMutationResult = Apollo.MutationResult<UnlikeMovieMutation>;
export type UnlikeMovieMutationOptions = Apollo.BaseMutationOptions<UnlikeMovieMutation, UnlikeMovieMutationVariables>;
export const UnlikeShowDocument = gql`
    mutation UnlikeShow($showId: Int!) {
  unlikeShow(showId: $showId)
}
    `;
export type UnlikeShowMutationFn = Apollo.MutationFunction<UnlikeShowMutation, UnlikeShowMutationVariables>;

/**
 * __useUnlikeShowMutation__
 *
 * To run a mutation, you first call `useUnlikeShowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnlikeShowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unlikeShowMutation, { data, loading, error }] = useUnlikeShowMutation({
 *   variables: {
 *      showId: // value for 'showId'
 *   },
 * });
 */
export function useUnlikeShowMutation(baseOptions?: Apollo.MutationHookOptions<UnlikeShowMutation, UnlikeShowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<UnlikeShowMutation, UnlikeShowMutationVariables>(UnlikeShowDocument, options);
      }

export type UnlikeShowMutationHookResult = ReturnType<typeof useUnlikeShowMutation>;
export type UnlikeShowMutationResult = Apollo.MutationResult<UnlikeShowMutation>;
export type UnlikeShowMutationOptions = Apollo.BaseMutationOptions<UnlikeShowMutation, UnlikeShowMutationVariables>;
export const UpdateGenreDocument = gql`
    mutation updateGenre($data: GenreUpdateInput!, $where: GenreWhereUniqueInput!) {
  updateGenre(data: $data, where: $where) {
    name
  }
}
    `;
export type UpdateGenreMutationFn = Apollo.MutationFunction<UpdateGenreMutation, UpdateGenreMutationVariables>;

/**
 * __useUpdateGenreMutation__
 *
 * To run a mutation, you first call `useUpdateGenreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGenreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGenreMutation, { data, loading, error }] = useUpdateGenreMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateGenreMutation(baseOptions?: Apollo.MutationHookOptions<UpdateGenreMutation, UpdateGenreMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<UpdateGenreMutation, UpdateGenreMutationVariables>(UpdateGenreDocument, options);
      }

export type UpdateGenreMutationHookResult = ReturnType<typeof useUpdateGenreMutation>;
export type UpdateGenreMutationResult = Apollo.MutationResult<UpdateGenreMutation>;
export type UpdateGenreMutationOptions = Apollo.BaseMutationOptions<UpdateGenreMutation, UpdateGenreMutationVariables>;
export const UpdateMovieDocument = gql`
    mutation UpdateMovie($data: MovieUpdateInput!, $where: MovieWhereUniqueInput!) {
  updateMovie(data: $data, where: $where) {
    id
  }
}
    `;
export type UpdateMovieMutationFn = Apollo.MutationFunction<UpdateMovieMutation, UpdateMovieMutationVariables>;

/**
 * __useUpdateMovieMutation__
 *
 * To run a mutation, you first call `useUpdateMovieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMovieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMovieMutation, { data, loading, error }] = useUpdateMovieMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateMovieMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMovieMutation, UpdateMovieMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<UpdateMovieMutation, UpdateMovieMutationVariables>(UpdateMovieDocument, options);
      }

export type UpdateMovieMutationHookResult = ReturnType<typeof useUpdateMovieMutation>;
export type UpdateMovieMutationResult = Apollo.MutationResult<UpdateMovieMutation>;
export type UpdateMovieMutationOptions = Apollo.BaseMutationOptions<UpdateMovieMutation, UpdateMovieMutationVariables>;
export const UpdateMovieReivewDocument = gql`
    mutation updateMovieReivew($data: MovieReviewUpdateInput!, $where: MovieReviewWhereUniqueInput!) {
  updateMovieReview(data: $data, where: $where) {
    review
    rating
    _count {
      likes
    }
  }
}
    `;
export type UpdateMovieReivewMutationFn = Apollo.MutationFunction<UpdateMovieReivewMutation, UpdateMovieReivewMutationVariables>;

/**
 * __useUpdateMovieReivewMutation__
 *
 * To run a mutation, you first call `useUpdateMovieReivewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMovieReivewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMovieReivewMutation, { data, loading, error }] = useUpdateMovieReivewMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateMovieReivewMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMovieReivewMutation, UpdateMovieReivewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<UpdateMovieReivewMutation, UpdateMovieReivewMutationVariables>(UpdateMovieReivewDocument, options);
      }

export type UpdateMovieReivewMutationHookResult = ReturnType<typeof useUpdateMovieReivewMutation>;
export type UpdateMovieReivewMutationResult = Apollo.MutationResult<UpdateMovieReivewMutation>;
export type UpdateMovieReivewMutationOptions = Apollo.BaseMutationOptions<UpdateMovieReivewMutation, UpdateMovieReivewMutationVariables>;
export const UpdateShowDocument = gql`
    mutation UpdateShow($data: ShowUpdateInput!, $where: ShowWhereUniqueInput!) {
  updateShow(data: $data, where: $where) {
    id
  }
}
    `;
export type UpdateShowMutationFn = Apollo.MutationFunction<UpdateShowMutation, UpdateShowMutationVariables>;

/**
 * __useUpdateShowMutation__
 *
 * To run a mutation, you first call `useUpdateShowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateShowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateShowMutation, { data, loading, error }] = useUpdateShowMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateShowMutation(baseOptions?: Apollo.MutationHookOptions<UpdateShowMutation, UpdateShowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<UpdateShowMutation, UpdateShowMutationVariables>(UpdateShowDocument, options);
      }

export type UpdateShowMutationHookResult = ReturnType<typeof useUpdateShowMutation>;
export type UpdateShowMutationResult = Apollo.MutationResult<UpdateShowMutation>;
export type UpdateShowMutationOptions = Apollo.BaseMutationOptions<UpdateShowMutation, UpdateShowMutationVariables>;
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
export const UploadBackdropDocument = gql`
    mutation UploadBackdrop($id: Int!, $file: Upload!, $type: UploadType!) {
  uploadBackdrop(id: $id, file: $file, type: $type)
}
    `;
export type UploadBackdropMutationFn = Apollo.MutationFunction<UploadBackdropMutation, UploadBackdropMutationVariables>;

/**
 * __useUploadBackdropMutation__
 *
 * To run a mutation, you first call `useUploadBackdropMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadBackdropMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadBackdropMutation, { data, loading, error }] = useUploadBackdropMutation({
 *   variables: {
 *      id: // value for 'id'
 *      file: // value for 'file'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useUploadBackdropMutation(baseOptions?: Apollo.MutationHookOptions<UploadBackdropMutation, UploadBackdropMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<UploadBackdropMutation, UploadBackdropMutationVariables>(UploadBackdropDocument, options);
      }

export type UploadBackdropMutationHookResult = ReturnType<typeof useUploadBackdropMutation>;
export type UploadBackdropMutationResult = Apollo.MutationResult<UploadBackdropMutation>;
export type UploadBackdropMutationOptions = Apollo.BaseMutationOptions<UploadBackdropMutation, UploadBackdropMutationVariables>;
export const UploadPosterDocument = gql`
    mutation UploadPoster($id: Int!, $file: Upload!, $type: UploadType!) {
  uploadPoster(id: $id, file: $file, type: $type)
}
    `;
export type UploadPosterMutationFn = Apollo.MutationFunction<UploadPosterMutation, UploadPosterMutationVariables>;

/**
 * __useUploadPosterMutation__
 *
 * To run a mutation, you first call `useUploadPosterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadPosterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadPosterMutation, { data, loading, error }] = useUploadPosterMutation({
 *   variables: {
 *      id: // value for 'id'
 *      file: // value for 'file'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useUploadPosterMutation(baseOptions?: Apollo.MutationHookOptions<UploadPosterMutation, UploadPosterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<UploadPosterMutation, UploadPosterMutationVariables>(UploadPosterDocument, options);
      }

export type UploadPosterMutationHookResult = ReturnType<typeof useUploadPosterMutation>;
export type UploadPosterMutationResult = Apollo.MutationResult<UploadPosterMutation>;
export type UploadPosterMutationOptions = Apollo.BaseMutationOptions<UploadPosterMutation, UploadPosterMutationVariables>;
export const ActorsInMovieDocument = gql`
    query ActorsInMovie($movieId: Int!, $where: ActorInMovieWhereInput, $orderBy: [ActorInMovieOrderByWithRelationInput!], $cursor: ActorInMovieWhereUniqueInput, $take: Int) {
  movie(movieId: $movieId) {
    actors(where: $where, orderBy: $orderBy, cursor: $cursor, take: $take) {
      personId
    }
  }
}
    `;

/**
 * __useActorsInMovieQuery__
 *
 * To run a query within a React component, call `useActorsInMovieQuery` and pass it any options that fit your needs.
 * When your component renders, `useActorsInMovieQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActorsInMovieQuery({
 *   variables: {
 *      movieId: // value for 'movieId'
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useActorsInMovieQuery(baseOptions: Apollo.QueryHookOptions<ActorsInMovieQuery, ActorsInMovieQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useQuery<ActorsInMovieQuery, ActorsInMovieQueryVariables>(ActorsInMovieDocument, options);
      }

export function useActorsInMovieLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ActorsInMovieQuery, ActorsInMovieQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions};
          return Apollo.useLazyQuery<ActorsInMovieQuery, ActorsInMovieQueryVariables>(ActorsInMovieDocument, options);
        }

export type ActorsInMovieQueryHookResult = ReturnType<typeof useActorsInMovieQuery>;
export type ActorsInMovieLazyQueryHookResult = ReturnType<typeof useActorsInMovieLazyQuery>;
export type ActorsInMovieQueryResult = Apollo.QueryResult<ActorsInMovieQuery, ActorsInMovieQueryVariables>;
export const ActorsInShowDocument = gql`
    query ActorsInShow($showId: Int!, $where: ActorInShowWhereInput, $orderBy: [ActorInShowOrderByWithRelationInput!], $cursor: ActorInShowWhereUniqueInput, $take: Int) {
  show(showId: $showId) {
    actors(where: $where, orderBy: $orderBy, cursor: $cursor, take: $take) {
      personId
    }
  }
}
    `;

/**
 * __useActorsInShowQuery__
 *
 * To run a query within a React component, call `useActorsInShowQuery` and pass it any options that fit your needs.
 * When your component renders, `useActorsInShowQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActorsInShowQuery({
 *   variables: {
 *      showId: // value for 'showId'
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useActorsInShowQuery(baseOptions: Apollo.QueryHookOptions<ActorsInShowQuery, ActorsInShowQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useQuery<ActorsInShowQuery, ActorsInShowQueryVariables>(ActorsInShowDocument, options);
      }

export function useActorsInShowLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ActorsInShowQuery, ActorsInShowQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions};
          return Apollo.useLazyQuery<ActorsInShowQuery, ActorsInShowQueryVariables>(ActorsInShowDocument, options);
        }

export type ActorsInShowQueryHookResult = ReturnType<typeof useActorsInShowQuery>;
export type ActorsInShowLazyQueryHookResult = ReturnType<typeof useActorsInShowLazyQuery>;
export type ActorsInShowQueryResult = Apollo.QueryResult<ActorsInShowQuery, ActorsInShowQueryVariables>;
export const CountMediaDocument = gql`
    query CountMedia {
  aggregateMovie {
    _count {
      _all
    }
  }
  aggregateShow {
    _count {
      _all
    }
  }
  aggregateSong {
    _count {
      _all
    }
  }
  aggregateBook {
    _count {
      _all
    }
  }
}
    `;

/**
 * __useCountMediaQuery__
 *
 * To run a query within a React component, call `useCountMediaQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountMediaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountMediaQuery({
 *   variables: {
 *   },
 * });
 */
export function useCountMediaQuery(baseOptions?: Apollo.QueryHookOptions<CountMediaQuery, CountMediaQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useQuery<CountMediaQuery, CountMediaQueryVariables>(CountMediaDocument, options);
      }

export function useCountMediaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountMediaQuery, CountMediaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions};
          return Apollo.useLazyQuery<CountMediaQuery, CountMediaQueryVariables>(CountMediaDocument, options);
        }

export type CountMediaQueryHookResult = ReturnType<typeof useCountMediaQuery>;
export type CountMediaLazyQueryHookResult = ReturnType<typeof useCountMediaLazyQuery>;
export type CountMediaQueryResult = Apollo.QueryResult<CountMediaQuery, CountMediaQueryVariables>;
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
export const GenresDocument = gql`
    query Genres($where: GenreWhereInput) {
  genres(where: $where) {
    id
    name
  }
}
    `;

/**
 * __useGenresQuery__
 *
 * To run a query within a React component, call `useGenresQuery` and pass it any options that fit your needs.
 * When your component renders, `useGenresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGenresQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGenresQuery(baseOptions?: Apollo.QueryHookOptions<GenresQuery, GenresQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useQuery<GenresQuery, GenresQueryVariables>(GenresDocument, options);
      }

export function useGenresLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GenresQuery, GenresQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions};
          return Apollo.useLazyQuery<GenresQuery, GenresQueryVariables>(GenresDocument, options);
        }

export type GenresQueryHookResult = ReturnType<typeof useGenresQuery>;
export type GenresLazyQueryHookResult = ReturnType<typeof useGenresLazyQuery>;
export type GenresQueryResult = Apollo.QueryResult<GenresQuery, GenresQueryVariables>;
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
    tagline
    overview
    poster
    backdrop
    released
    runtime
    trailer
    rating
    isLiked
    _count {
      likes
    }
    actors(take: 8) {
      role
      person {
        id
        name
        poster
      }
    }
    genres {
      name
    }
    soundtrack {
      timestamp
      description
      song {
        id
        title
        description
        poster
        artists {
          id
          name
        }
        songInMovie {
          timestamp
          description
        }
      }
    }
    reviews(take: 8) {
      review
      rating
      user {
        username
        avatar
      }
      _count {
        likes
      }
    }
    aggregateMovieReview {
      _avg {
        rating
      }
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
    query Movies($where: MovieWhereInput, $orderBy: [MovieOrderByWithRelationInput!], $cursor: MovieWhereUniqueInput, $take: Int) {
  movies(where: $where, orderBy: $orderBy, cursor: $cursor, take: $take) {
    id
    title
    poster
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
 *      take: // value for 'take'
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
    poster
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
    poster
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
export const ShowDocument = gql`
    query Show($showId: Int!) {
  show(showId: $showId) {
    id
    title
    tagline
    overview
    poster
    backdrop
    released
    trailer
    rating
    isLiked
    _count {
      likes
    }
    actors(take: 8) {
      role
      person {
        id
        name
        poster
      }
    }
    genres {
      name
    }
    soundtrack {
      timestamp
      description
      song {
        id
        title
        description
        poster
        artists {
          id
          name
        }
        songInShow {
          timestamp
          description
        }
      }
    }
    reviews(take: 8) {
      review
      rating
      user {
        username
        avatar
      }
      _count {
        likes
      }
    }
    aggregateShowReview {
      _avg {
        rating
      }
    }
  }
}
    `;

/**
 * __useShowQuery__
 *
 * To run a query within a React component, call `useShowQuery` and pass it any options that fit your needs.
 * When your component renders, `useShowQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShowQuery({
 *   variables: {
 *      showId: // value for 'showId'
 *   },
 * });
 */
export function useShowQuery(baseOptions: Apollo.QueryHookOptions<ShowQuery, ShowQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useQuery<ShowQuery, ShowQueryVariables>(ShowDocument, options);
      }

export function useShowLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ShowQuery, ShowQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions};
          return Apollo.useLazyQuery<ShowQuery, ShowQueryVariables>(ShowDocument, options);
        }

export type ShowQueryHookResult = ReturnType<typeof useShowQuery>;
export type ShowLazyQueryHookResult = ReturnType<typeof useShowLazyQuery>;
export type ShowQueryResult = Apollo.QueryResult<ShowQuery, ShowQueryVariables>;
export const ShowsDocument = gql`
    query Shows($where: ShowWhereInput, $orderBy: [ShowOrderByWithRelationInput!], $cursor: ShowWhereUniqueInput, $take: Int) {
  shows(where: $where, orderBy: $orderBy, cursor: $cursor, take: $take) {
    id
    title
    poster
  }
}
    `;

/**
 * __useShowsQuery__
 *
 * To run a query within a React component, call `useShowsQuery` and pass it any options that fit your needs.
 * When your component renders, `useShowsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShowsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useShowsQuery(baseOptions?: Apollo.QueryHookOptions<ShowsQuery, ShowsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useQuery<ShowsQuery, ShowsQueryVariables>(ShowsDocument, options);
      }

export function useShowsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ShowsQuery, ShowsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions};
          return Apollo.useLazyQuery<ShowsQuery, ShowsQueryVariables>(ShowsDocument, options);
        }

export type ShowsQueryHookResult = ReturnType<typeof useShowsQuery>;
export type ShowsLazyQueryHookResult = ReturnType<typeof useShowsLazyQuery>;
export type ShowsQueryResult = Apollo.QueryResult<ShowsQuery, ShowsQueryVariables>;
export const SongsDocument = gql`
    query Songs($where: SongWhereInput, $orderBy: [SongOrderByWithRelationInput!], $cursor: SongWhereUniqueInput, $take: Int) {
  songs(where: $where, orderBy: $orderBy, cursor: $cursor, take: $take) {
    id
    title
    poster
    artists {
      name
    }
  }
}
    `;

/**
 * __useSongsQuery__
 *
 * To run a query within a React component, call `useSongsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSongsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSongsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useSongsQuery(baseOptions?: Apollo.QueryHookOptions<SongsQuery, SongsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useQuery<SongsQuery, SongsQueryVariables>(SongsDocument, options);
      }

export function useSongsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SongsQuery, SongsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions};
          return Apollo.useLazyQuery<SongsQuery, SongsQueryVariables>(SongsDocument, options);
        }

export type SongsQueryHookResult = ReturnType<typeof useSongsQuery>;
export type SongsLazyQueryHookResult = ReturnType<typeof useSongsLazyQuery>;
export type SongsQueryResult = Apollo.QueryResult<SongsQuery, SongsQueryVariables>;
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
