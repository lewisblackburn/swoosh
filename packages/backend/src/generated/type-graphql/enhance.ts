import { ClassType } from "type-graphql";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  Person: crudResolvers.PersonCrudResolver,
  Movie: crudResolvers.MovieCrudResolver,
  Book: crudResolvers.BookCrudResolver,
  Song: crudResolvers.SongCrudResolver
};
const actionResolversMap = {
  User: {
    user: actionResolvers.FindUniqueUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    users: actionResolvers.FindManyUserResolver,
    createUser: actionResolvers.CreateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    deleteUser: actionResolvers.DeleteUserResolver,
    updateUser: actionResolvers.UpdateUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    upsertUser: actionResolvers.UpsertUserResolver,
    aggregateUser: actionResolvers.AggregateUserResolver,
    groupByUser: actionResolvers.GroupByUserResolver
  },
  Person: {
    person: actionResolvers.FindUniquePersonResolver,
    findFirstPerson: actionResolvers.FindFirstPersonResolver,
    people: actionResolvers.FindManyPersonResolver,
    createPerson: actionResolvers.CreatePersonResolver,
    createManyPerson: actionResolvers.CreateManyPersonResolver,
    deletePerson: actionResolvers.DeletePersonResolver,
    updatePerson: actionResolvers.UpdatePersonResolver,
    deleteManyPerson: actionResolvers.DeleteManyPersonResolver,
    updateManyPerson: actionResolvers.UpdateManyPersonResolver,
    upsertPerson: actionResolvers.UpsertPersonResolver,
    aggregatePerson: actionResolvers.AggregatePersonResolver,
    groupByPerson: actionResolvers.GroupByPersonResolver
  },
  Movie: {
    movie: actionResolvers.FindUniqueMovieResolver,
    findFirstMovie: actionResolvers.FindFirstMovieResolver,
    movies: actionResolvers.FindManyMovieResolver,
    createMovie: actionResolvers.CreateMovieResolver,
    createManyMovie: actionResolvers.CreateManyMovieResolver,
    deleteMovie: actionResolvers.DeleteMovieResolver,
    updateMovie: actionResolvers.UpdateMovieResolver,
    deleteManyMovie: actionResolvers.DeleteManyMovieResolver,
    updateManyMovie: actionResolvers.UpdateManyMovieResolver,
    upsertMovie: actionResolvers.UpsertMovieResolver,
    aggregateMovie: actionResolvers.AggregateMovieResolver,
    groupByMovie: actionResolvers.GroupByMovieResolver
  },
  Book: {
    book: actionResolvers.FindUniqueBookResolver,
    findFirstBook: actionResolvers.FindFirstBookResolver,
    books: actionResolvers.FindManyBookResolver,
    createBook: actionResolvers.CreateBookResolver,
    createManyBook: actionResolvers.CreateManyBookResolver,
    deleteBook: actionResolvers.DeleteBookResolver,
    updateBook: actionResolvers.UpdateBookResolver,
    deleteManyBook: actionResolvers.DeleteManyBookResolver,
    updateManyBook: actionResolvers.UpdateManyBookResolver,
    upsertBook: actionResolvers.UpsertBookResolver,
    aggregateBook: actionResolvers.AggregateBookResolver,
    groupByBook: actionResolvers.GroupByBookResolver
  },
  Song: {
    song: actionResolvers.FindUniqueSongResolver,
    findFirstSong: actionResolvers.FindFirstSongResolver,
    songs: actionResolvers.FindManySongResolver,
    createSong: actionResolvers.CreateSongResolver,
    createManySong: actionResolvers.CreateManySongResolver,
    deleteSong: actionResolvers.DeleteSongResolver,
    updateSong: actionResolvers.UpdateSongResolver,
    deleteManySong: actionResolvers.DeleteManySongResolver,
    updateManySong: actionResolvers.UpdateManySongResolver,
    upsertSong: actionResolvers.UpsertSongResolver,
    aggregateSong: actionResolvers.AggregateSongResolver,
    groupBySong: actionResolvers.GroupBySongResolver
  }
};
const crudResolversInfo = {
  User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
  Person: ["person", "findFirstPerson", "people", "createPerson", "createManyPerson", "deletePerson", "updatePerson", "deleteManyPerson", "updateManyPerson", "upsertPerson", "aggregatePerson", "groupByPerson"],
  Movie: ["movie", "findFirstMovie", "movies", "createMovie", "createManyMovie", "deleteMovie", "updateMovie", "deleteManyMovie", "updateManyMovie", "upsertMovie", "aggregateMovie", "groupByMovie"],
  Book: ["book", "findFirstBook", "books", "createBook", "createManyBook", "deleteBook", "updateBook", "deleteManyBook", "updateManyBook", "upsertBook", "aggregateBook", "groupByBook"],
  Song: ["song", "findFirstSong", "songs", "createSong", "createManySong", "deleteSong", "updateSong", "deleteManySong", "updateManySong", "upsertSong", "aggregateSong", "groupBySong"]
};
const argsInfo = {
  FindUniqueUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUserArgs: ["data"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  DeleteUserArgs: ["where"],
  UpdateUserArgs: ["data", "where"],
  DeleteManyUserArgs: ["where"],
  UpdateManyUserArgs: ["data", "where"],
  UpsertUserArgs: ["where", "create", "update"],
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniquePersonArgs: ["where"],
  FindFirstPersonArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPersonArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreatePersonArgs: ["data"],
  CreateManyPersonArgs: ["data", "skipDuplicates"],
  DeletePersonArgs: ["where"],
  UpdatePersonArgs: ["data", "where"],
  DeleteManyPersonArgs: ["where"],
  UpdateManyPersonArgs: ["data", "where"],
  UpsertPersonArgs: ["where", "create", "update"],
  AggregatePersonArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByPersonArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueMovieArgs: ["where"],
  FindFirstMovieArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyMovieArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateMovieArgs: ["data"],
  CreateManyMovieArgs: ["data", "skipDuplicates"],
  DeleteMovieArgs: ["where"],
  UpdateMovieArgs: ["data", "where"],
  DeleteManyMovieArgs: ["where"],
  UpdateManyMovieArgs: ["data", "where"],
  UpsertMovieArgs: ["where", "create", "update"],
  AggregateMovieArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByMovieArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueBookArgs: ["where"],
  FindFirstBookArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyBookArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateBookArgs: ["data"],
  CreateManyBookArgs: ["data", "skipDuplicates"],
  DeleteBookArgs: ["where"],
  UpdateBookArgs: ["data", "where"],
  DeleteManyBookArgs: ["where"],
  UpdateManyBookArgs: ["data", "where"],
  UpsertBookArgs: ["where", "create", "update"],
  AggregateBookArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByBookArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueSongArgs: ["where"],
  FindFirstSongArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySongArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateSongArgs: ["data"],
  CreateManySongArgs: ["data", "skipDuplicates"],
  DeleteSongArgs: ["where"],
  UpdateSongArgs: ["data", "where"],
  DeleteManySongArgs: ["where"],
  UpdateManySongArgs: ["data", "where"],
  UpsertSongArgs: ["where", "create", "update"],
  AggregateSongArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupBySongArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            crudTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
          );
          allActionsDecorator(
            actionTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
          );
        }
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      for (const decorator of decorators) {
        decorator(
          crudTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
        );
        decorator(
          actionTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
        );
      }
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  User: relationResolvers.UserRelationsResolver,
  Person: relationResolvers.PersonRelationsResolver,
  Movie: relationResolvers.MovieRelationsResolver,
  Book: relationResolvers.BookRelationsResolver,
  Song: relationResolvers.SongRelationsResolver
};
const relationResolversInfo = {
  User: ["movies", "books", "songs", "following", "followers"],
  Person: ["books", "movies", "songs"],
  Movie: ["user", "actor"],
  Book: ["user", "author"],
  Song: ["user", "artist"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            relationResolverTarget,
            relationResolverActionName,
            Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
          );
        }
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      for (const decorator of decorators) {
        decorator(
          relationResolverTarget,
          relationResolverActionName,
          Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
        );
      }
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    for (const decorator of enhanceConfig.class) {
      decorator(typeClass);
    }
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        for (const allFieldsDecorator of allFieldsDecorators) {
          allFieldsDecorator(typePrototype, typeFieldName);
        }
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      for (const fieldDecorator of fieldDecorators) {
        fieldDecorator(typePrototype, typeFieldName);
      }
    }
  }
}

const modelsInfo = {
  User: ["id", "confirmed", "email", "username", "displayname", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt"],
  Person: ["id", "type"],
  Movie: ["id", "userId", "title", "description", "personId", "createdAt", "updatedAt"],
  Book: ["id", "userId", "title", "description", "personId", "createdAt", "updatedAt"],
  Song: ["id", "userId", "title", "description", "personId", "createdAt", "updatedAt"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
  UserGroupBy: ["id", "confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePerson: ["_count", "_avg", "_sum", "_min", "_max"],
  PersonGroupBy: ["id", "type", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateMovie: ["_count", "_avg", "_sum", "_min", "_max"],
  MovieGroupBy: ["id", "userId", "title", "description", "personId", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateBook: ["_count", "_avg", "_sum", "_min", "_max"],
  BookGroupBy: ["id", "userId", "title", "description", "personId", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateSong: ["_count", "_avg", "_sum", "_min", "_max"],
  SongGroupBy: ["id", "userId", "title", "description", "personId", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["movies", "books", "songs", "following", "followers"],
  UserCountAggregate: ["id", "confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "_all"],
  UserAvgAggregate: ["id"],
  UserSumAggregate: ["id"],
  UserMinAggregate: ["id", "confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt"],
  UserMaxAggregate: ["id", "confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt"],
  PersonCount: ["books", "movies", "songs"],
  PersonCountAggregate: ["id", "type", "_all"],
  PersonAvgAggregate: ["id"],
  PersonSumAggregate: ["id"],
  PersonMinAggregate: ["id", "type"],
  PersonMaxAggregate: ["id", "type"],
  MovieCountAggregate: ["id", "userId", "title", "description", "personId", "createdAt", "updatedAt", "_all"],
  MovieAvgAggregate: ["id", "userId", "personId"],
  MovieSumAggregate: ["id", "userId", "personId"],
  MovieMinAggregate: ["id", "userId", "title", "description", "personId", "createdAt", "updatedAt"],
  MovieMaxAggregate: ["id", "userId", "title", "description", "personId", "createdAt", "updatedAt"],
  BookCountAggregate: ["id", "userId", "title", "description", "personId", "createdAt", "updatedAt", "_all"],
  BookAvgAggregate: ["id", "userId", "personId"],
  BookSumAggregate: ["id", "userId", "personId"],
  BookMinAggregate: ["id", "userId", "title", "description", "personId", "createdAt", "updatedAt"],
  BookMaxAggregate: ["id", "userId", "title", "description", "personId", "createdAt", "updatedAt"],
  SongCountAggregate: ["id", "userId", "title", "description", "personId", "createdAt", "updatedAt", "_all"],
  SongAvgAggregate: ["id", "userId", "personId"],
  SongSumAggregate: ["id", "userId", "personId"],
  SongMinAggregate: ["id", "userId", "title", "description", "personId", "createdAt", "updatedAt"],
  SongMaxAggregate: ["id", "userId", "title", "description", "personId", "createdAt", "updatedAt"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  UserWhereInput: ["AND", "OR", "NOT", "id", "confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "movies", "books", "songs", "following", "followers", "createdAt", "updatedAt"],
  UserOrderByWithRelationInput: ["id", "confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "movies", "books", "songs", "following", "followers", "createdAt", "updatedAt"],
  UserWhereUniqueInput: ["id", "email", "username"],
  UserOrderByWithAggregationInput: ["id", "confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt"],
  PersonWhereInput: ["AND", "OR", "NOT", "id", "type", "books", "movies", "songs"],
  PersonOrderByWithRelationInput: ["id", "type", "books", "movies", "songs"],
  PersonWhereUniqueInput: ["id"],
  PersonOrderByWithAggregationInput: ["id", "type", "_count", "_avg", "_max", "_min", "_sum"],
  PersonScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "type"],
  MovieWhereInput: ["AND", "OR", "NOT", "id", "user", "userId", "title", "description", "personId", "actor", "createdAt", "updatedAt"],
  MovieOrderByWithRelationInput: ["id", "user", "userId", "title", "description", "personId", "actor", "createdAt", "updatedAt"],
  MovieWhereUniqueInput: ["id"],
  MovieOrderByWithAggregationInput: ["id", "userId", "title", "description", "personId", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  MovieScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "title", "description", "personId", "createdAt", "updatedAt"],
  BookWhereInput: ["AND", "OR", "NOT", "id", "user", "userId", "title", "description", "personId", "author", "createdAt", "updatedAt"],
  BookOrderByWithRelationInput: ["id", "user", "userId", "title", "description", "personId", "author", "createdAt", "updatedAt"],
  BookWhereUniqueInput: ["id"],
  BookOrderByWithAggregationInput: ["id", "userId", "title", "description", "personId", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  BookScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "title", "description", "personId", "createdAt", "updatedAt"],
  SongWhereInput: ["AND", "OR", "NOT", "id", "user", "userId", "title", "description", "personId", "artist", "createdAt", "updatedAt"],
  SongOrderByWithRelationInput: ["id", "user", "userId", "title", "description", "personId", "artist", "createdAt", "updatedAt"],
  SongWhereUniqueInput: ["id"],
  SongOrderByWithAggregationInput: ["id", "userId", "title", "description", "personId", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  SongScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "title", "description", "personId", "createdAt", "updatedAt"],
  UserCreateInput: ["confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "movies", "books", "songs", "following", "followers"],
  UserUpdateInput: ["confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "movies", "books", "songs", "following", "followers"],
  UserCreateManyInput: ["id", "confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt"],
  UserUpdateManyMutationInput: ["confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt"],
  PersonCreateInput: ["type", "books", "movies", "songs"],
  PersonUpdateInput: ["type", "books", "movies", "songs"],
  PersonCreateManyInput: ["id", "type"],
  PersonUpdateManyMutationInput: ["type"],
  MovieCreateInput: ["title", "description", "createdAt", "updatedAt", "user", "actor"],
  MovieUpdateInput: ["title", "description", "createdAt", "updatedAt", "user", "actor"],
  MovieCreateManyInput: ["id", "userId", "title", "description", "personId", "createdAt", "updatedAt"],
  MovieUpdateManyMutationInput: ["title", "description", "createdAt", "updatedAt"],
  BookCreateInput: ["title", "description", "createdAt", "updatedAt", "user", "author"],
  BookUpdateInput: ["title", "description", "createdAt", "updatedAt", "user", "author"],
  BookCreateManyInput: ["id", "userId", "title", "description", "personId", "createdAt", "updatedAt"],
  BookUpdateManyMutationInput: ["title", "description", "createdAt", "updatedAt"],
  SongCreateInput: ["title", "description", "createdAt", "updatedAt", "user", "artist"],
  SongUpdateInput: ["title", "description", "createdAt", "updatedAt", "user", "artist"],
  SongCreateManyInput: ["id", "userId", "title", "description", "personId", "createdAt", "updatedAt"],
  SongUpdateManyMutationInput: ["title", "description", "createdAt", "updatedAt"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  BoolFilter: ["equals", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  EnumRoleFilter: ["equals", "in", "notIn", "not"],
  MovieListRelationFilter: ["every", "some", "none"],
  BookListRelationFilter: ["every", "some", "none"],
  SongListRelationFilter: ["every", "some", "none"],
  UserListRelationFilter: ["every", "some", "none"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  MovieOrderByRelationAggregateInput: ["_count"],
  BookOrderByRelationAggregateInput: ["_count"],
  SongOrderByRelationAggregateInput: ["_count"],
  UserOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt"],
  UserAvgOrderByAggregateInput: ["id"],
  UserMaxOrderByAggregateInput: ["id", "confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt"],
  UserMinOrderByAggregateInput: ["id", "confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt"],
  UserSumOrderByAggregateInput: ["id"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  EnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  EnumCareerFilter: ["equals", "in", "notIn", "not"],
  PersonCountOrderByAggregateInput: ["id", "type"],
  PersonAvgOrderByAggregateInput: ["id"],
  PersonMaxOrderByAggregateInput: ["id", "type"],
  PersonMinOrderByAggregateInput: ["id", "type"],
  PersonSumOrderByAggregateInput: ["id"],
  EnumCareerWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  UserRelationFilter: ["is", "isNot"],
  PersonRelationFilter: ["is", "isNot"],
  MovieCountOrderByAggregateInput: ["id", "userId", "title", "description", "personId", "createdAt", "updatedAt"],
  MovieAvgOrderByAggregateInput: ["id", "userId", "personId"],
  MovieMaxOrderByAggregateInput: ["id", "userId", "title", "description", "personId", "createdAt", "updatedAt"],
  MovieMinOrderByAggregateInput: ["id", "userId", "title", "description", "personId", "createdAt", "updatedAt"],
  MovieSumOrderByAggregateInput: ["id", "userId", "personId"],
  BookCountOrderByAggregateInput: ["id", "userId", "title", "description", "personId", "createdAt", "updatedAt"],
  BookAvgOrderByAggregateInput: ["id", "userId", "personId"],
  BookMaxOrderByAggregateInput: ["id", "userId", "title", "description", "personId", "createdAt", "updatedAt"],
  BookMinOrderByAggregateInput: ["id", "userId", "title", "description", "personId", "createdAt", "updatedAt"],
  BookSumOrderByAggregateInput: ["id", "userId", "personId"],
  SongCountOrderByAggregateInput: ["id", "userId", "title", "description", "personId", "createdAt", "updatedAt"],
  SongAvgOrderByAggregateInput: ["id", "userId", "personId"],
  SongMaxOrderByAggregateInput: ["id", "userId", "title", "description", "personId", "createdAt", "updatedAt"],
  SongMinOrderByAggregateInput: ["id", "userId", "title", "description", "personId", "createdAt", "updatedAt"],
  SongSumOrderByAggregateInput: ["id", "userId", "personId"],
  MovieCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  BookCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  SongCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserCreateNestedManyWithoutFollowersInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedManyWithoutFollowingInput: ["create", "connectOrCreate", "connect"],
  BoolFieldUpdateOperationsInput: ["set"],
  StringFieldUpdateOperationsInput: ["set"],
  EnumRoleFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  MovieUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  BookUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  SongUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserUpdateManyWithoutFollowersInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserUpdateManyWithoutFollowingInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  BookCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
  MovieCreateNestedManyWithoutActorInput: ["create", "connectOrCreate", "createMany", "connect"],
  SongCreateNestedManyWithoutArtistInput: ["create", "connectOrCreate", "createMany", "connect"],
  EnumCareerFieldUpdateOperationsInput: ["set"],
  BookUpdateManyWithoutAuthorInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  MovieUpdateManyWithoutActorInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  SongUpdateManyWithoutArtistInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutMoviesInput: ["create", "connectOrCreate", "connect"],
  PersonCreateNestedOneWithoutMoviesInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutMoviesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PersonUpdateOneRequiredWithoutMoviesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutBooksInput: ["create", "connectOrCreate", "connect"],
  PersonCreateNestedOneWithoutBooksInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutBooksInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PersonUpdateOneRequiredWithoutBooksInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutSongsInput: ["create", "connectOrCreate", "connect"],
  PersonCreateNestedOneWithoutSongsInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutSongsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PersonUpdateOneRequiredWithoutSongsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedEnumRoleFilter: ["equals", "in", "notIn", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedEnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedEnumCareerFilter: ["equals", "in", "notIn", "not"],
  NestedEnumCareerWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  MovieCreateWithoutUserInput: ["title", "description", "createdAt", "updatedAt", "actor"],
  MovieCreateOrConnectWithoutUserInput: ["where", "create"],
  MovieCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  BookCreateWithoutUserInput: ["title", "description", "createdAt", "updatedAt", "author"],
  BookCreateOrConnectWithoutUserInput: ["where", "create"],
  BookCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  SongCreateWithoutUserInput: ["title", "description", "createdAt", "updatedAt", "artist"],
  SongCreateOrConnectWithoutUserInput: ["where", "create"],
  SongCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  UserCreateWithoutFollowersInput: ["confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "movies", "books", "songs", "following"],
  UserCreateOrConnectWithoutFollowersInput: ["where", "create"],
  UserCreateWithoutFollowingInput: ["confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "movies", "books", "songs", "followers"],
  UserCreateOrConnectWithoutFollowingInput: ["where", "create"],
  MovieUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  MovieUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  MovieUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  MovieScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "title", "description", "personId", "createdAt", "updatedAt"],
  BookUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  BookUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  BookUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  BookScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "title", "description", "personId", "createdAt", "updatedAt"],
  SongUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  SongUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  SongUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  SongScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "title", "description", "personId", "createdAt", "updatedAt"],
  UserUpsertWithWhereUniqueWithoutFollowersInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutFollowersInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutFollowersInput: ["where", "data"],
  UserScalarWhereInput: ["AND", "OR", "NOT", "id", "confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt"],
  UserUpsertWithWhereUniqueWithoutFollowingInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutFollowingInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutFollowingInput: ["where", "data"],
  BookCreateWithoutAuthorInput: ["title", "description", "createdAt", "updatedAt", "user"],
  BookCreateOrConnectWithoutAuthorInput: ["where", "create"],
  BookCreateManyAuthorInputEnvelope: ["data", "skipDuplicates"],
  MovieCreateWithoutActorInput: ["title", "description", "createdAt", "updatedAt", "user"],
  MovieCreateOrConnectWithoutActorInput: ["where", "create"],
  MovieCreateManyActorInputEnvelope: ["data", "skipDuplicates"],
  SongCreateWithoutArtistInput: ["title", "description", "createdAt", "updatedAt", "user"],
  SongCreateOrConnectWithoutArtistInput: ["where", "create"],
  SongCreateManyArtistInputEnvelope: ["data", "skipDuplicates"],
  BookUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
  BookUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
  BookUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
  MovieUpsertWithWhereUniqueWithoutActorInput: ["where", "update", "create"],
  MovieUpdateWithWhereUniqueWithoutActorInput: ["where", "data"],
  MovieUpdateManyWithWhereWithoutActorInput: ["where", "data"],
  SongUpsertWithWhereUniqueWithoutArtistInput: ["where", "update", "create"],
  SongUpdateWithWhereUniqueWithoutArtistInput: ["where", "data"],
  SongUpdateManyWithWhereWithoutArtistInput: ["where", "data"],
  UserCreateWithoutMoviesInput: ["confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "books", "songs", "following", "followers"],
  UserCreateOrConnectWithoutMoviesInput: ["where", "create"],
  PersonCreateWithoutMoviesInput: ["type", "books", "songs"],
  PersonCreateOrConnectWithoutMoviesInput: ["where", "create"],
  UserUpsertWithoutMoviesInput: ["update", "create"],
  UserUpdateWithoutMoviesInput: ["confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "books", "songs", "following", "followers"],
  PersonUpsertWithoutMoviesInput: ["update", "create"],
  PersonUpdateWithoutMoviesInput: ["type", "books", "songs"],
  UserCreateWithoutBooksInput: ["confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "movies", "songs", "following", "followers"],
  UserCreateOrConnectWithoutBooksInput: ["where", "create"],
  PersonCreateWithoutBooksInput: ["type", "movies", "songs"],
  PersonCreateOrConnectWithoutBooksInput: ["where", "create"],
  UserUpsertWithoutBooksInput: ["update", "create"],
  UserUpdateWithoutBooksInput: ["confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "movies", "songs", "following", "followers"],
  PersonUpsertWithoutBooksInput: ["update", "create"],
  PersonUpdateWithoutBooksInput: ["type", "movies", "songs"],
  UserCreateWithoutSongsInput: ["confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "movies", "books", "following", "followers"],
  UserCreateOrConnectWithoutSongsInput: ["where", "create"],
  PersonCreateWithoutSongsInput: ["type", "books", "movies"],
  PersonCreateOrConnectWithoutSongsInput: ["where", "create"],
  UserUpsertWithoutSongsInput: ["update", "create"],
  UserUpdateWithoutSongsInput: ["confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "movies", "books", "following", "followers"],
  PersonUpsertWithoutSongsInput: ["update", "create"],
  PersonUpdateWithoutSongsInput: ["type", "books", "movies"],
  MovieCreateManyUserInput: ["id", "title", "description", "personId", "createdAt", "updatedAt"],
  BookCreateManyUserInput: ["id", "title", "description", "personId", "createdAt", "updatedAt"],
  SongCreateManyUserInput: ["id", "title", "description", "personId", "createdAt", "updatedAt"],
  MovieUpdateWithoutUserInput: ["title", "description", "createdAt", "updatedAt", "actor"],
  BookUpdateWithoutUserInput: ["title", "description", "createdAt", "updatedAt", "author"],
  SongUpdateWithoutUserInput: ["title", "description", "createdAt", "updatedAt", "artist"],
  UserUpdateWithoutFollowersInput: ["confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "movies", "books", "songs", "following"],
  UserUpdateWithoutFollowingInput: ["confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "movies", "books", "songs", "followers"],
  BookCreateManyAuthorInput: ["id", "userId", "title", "description", "createdAt", "updatedAt"],
  MovieCreateManyActorInput: ["id", "userId", "title", "description", "createdAt", "updatedAt"],
  SongCreateManyArtistInput: ["id", "userId", "title", "description", "createdAt", "updatedAt"],
  BookUpdateWithoutAuthorInput: ["title", "description", "createdAt", "updatedAt", "user"],
  MovieUpdateWithoutActorInput: ["title", "description", "createdAt", "updatedAt", "user"],
  SongUpdateWithoutArtistInput: ["title", "description", "createdAt", "updatedAt", "user"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

