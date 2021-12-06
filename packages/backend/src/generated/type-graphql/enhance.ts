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
  User: ["following", "followers"],
  Person: ["movies", "books", "songs"],
  Movie: ["actors"],
  Book: ["authors"],
  Song: ["artists"]
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
  Person: ["id", "career", "name"],
  Movie: ["id", "title", "description", "thumbnail", "locked", "createdAt", "updatedAt"],
  Book: ["id", "title", "description", "locked", "createdAt", "updatedAt"],
  Song: ["id", "title", "description", "locked", "createdAt", "updatedAt"]
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
  PersonGroupBy: ["id", "career", "name", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateMovie: ["_count", "_avg", "_sum", "_min", "_max"],
  MovieGroupBy: ["id", "title", "description", "thumbnail", "locked", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateBook: ["_count", "_avg", "_sum", "_min", "_max"],
  BookGroupBy: ["id", "title", "description", "locked", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateSong: ["_count", "_avg", "_sum", "_min", "_max"],
  SongGroupBy: ["id", "title", "description", "locked", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["following", "followers"],
  UserCountAggregate: ["id", "confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "_all"],
  UserAvgAggregate: ["id"],
  UserSumAggregate: ["id"],
  UserMinAggregate: ["id", "confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt"],
  UserMaxAggregate: ["id", "confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt"],
  PersonCount: ["movies", "books", "songs"],
  PersonCountAggregate: ["id", "career", "name", "_all"],
  PersonAvgAggregate: ["id"],
  PersonSumAggregate: ["id"],
  PersonMinAggregate: ["id", "name"],
  PersonMaxAggregate: ["id", "name"],
  MovieCount: ["actors"],
  MovieCountAggregate: ["id", "title", "description", "thumbnail", "locked", "createdAt", "updatedAt", "_all"],
  MovieAvgAggregate: ["id"],
  MovieSumAggregate: ["id"],
  MovieMinAggregate: ["id", "title", "description", "thumbnail", "locked", "createdAt", "updatedAt"],
  MovieMaxAggregate: ["id", "title", "description", "thumbnail", "locked", "createdAt", "updatedAt"],
  BookCount: ["authors"],
  BookCountAggregate: ["id", "title", "description", "locked", "createdAt", "updatedAt", "_all"],
  BookAvgAggregate: ["id"],
  BookSumAggregate: ["id"],
  BookMinAggregate: ["id", "title", "description", "locked", "createdAt", "updatedAt"],
  BookMaxAggregate: ["id", "title", "description", "locked", "createdAt", "updatedAt"],
  SongCount: ["artists"],
  SongCountAggregate: ["id", "title", "description", "locked", "createdAt", "updatedAt", "_all"],
  SongAvgAggregate: ["id"],
  SongSumAggregate: ["id"],
  SongMinAggregate: ["id", "title", "description", "locked", "createdAt", "updatedAt"],
  SongMaxAggregate: ["id", "title", "description", "locked", "createdAt", "updatedAt"]
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
  UserWhereInput: ["AND", "OR", "NOT", "id", "confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "following", "followers", "createdAt", "updatedAt"],
  UserOrderByWithRelationInput: ["id", "confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "following", "followers", "createdAt", "updatedAt"],
  UserWhereUniqueInput: ["id", "email", "username"],
  UserOrderByWithAggregationInput: ["id", "confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt"],
  PersonWhereInput: ["AND", "OR", "NOT", "id", "career", "name", "movies", "books", "songs"],
  PersonOrderByWithRelationInput: ["id", "career", "name", "movies", "books", "songs"],
  PersonWhereUniqueInput: ["id"],
  PersonOrderByWithAggregationInput: ["id", "career", "name", "_count", "_avg", "_max", "_min", "_sum"],
  PersonScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "career", "name"],
  MovieWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "thumbnail", "locked", "actors", "createdAt", "updatedAt"],
  MovieOrderByWithRelationInput: ["id", "title", "description", "thumbnail", "locked", "actors", "createdAt", "updatedAt"],
  MovieWhereUniqueInput: ["id"],
  MovieOrderByWithAggregationInput: ["id", "title", "description", "thumbnail", "locked", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  MovieScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "description", "thumbnail", "locked", "createdAt", "updatedAt"],
  BookWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "locked", "authors", "createdAt", "updatedAt"],
  BookOrderByWithRelationInput: ["id", "title", "description", "locked", "authors", "createdAt", "updatedAt"],
  BookWhereUniqueInput: ["id"],
  BookOrderByWithAggregationInput: ["id", "title", "description", "locked", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  BookScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "description", "locked", "createdAt", "updatedAt"],
  SongWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "locked", "artists", "createdAt", "updatedAt"],
  SongOrderByWithRelationInput: ["id", "title", "description", "locked", "artists", "createdAt", "updatedAt"],
  SongWhereUniqueInput: ["id"],
  SongOrderByWithAggregationInput: ["id", "title", "description", "locked", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  SongScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "description", "locked", "createdAt", "updatedAt"],
  UserCreateInput: ["confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "following", "followers"],
  UserUpdateInput: ["confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "following", "followers"],
  UserCreateManyInput: ["id", "confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt"],
  UserUpdateManyMutationInput: ["confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt"],
  PersonCreateInput: ["name", "career", "movies", "books", "songs"],
  PersonUpdateInput: ["name", "career", "movies", "books", "songs"],
  PersonCreateManyInput: ["id", "name", "career"],
  PersonUpdateManyMutationInput: ["name", "career"],
  MovieCreateInput: ["title", "description", "thumbnail", "locked", "createdAt", "updatedAt", "actors"],
  MovieUpdateInput: ["title", "description", "thumbnail", "locked", "createdAt", "updatedAt", "actors"],
  MovieCreateManyInput: ["id", "title", "description", "thumbnail", "locked", "createdAt", "updatedAt"],
  MovieUpdateManyMutationInput: ["title", "description", "thumbnail", "locked", "createdAt", "updatedAt"],
  BookCreateInput: ["title", "description", "locked", "createdAt", "updatedAt", "authors"],
  BookUpdateInput: ["title", "description", "locked", "createdAt", "updatedAt", "authors"],
  BookCreateManyInput: ["id", "title", "description", "locked", "createdAt", "updatedAt"],
  BookUpdateManyMutationInput: ["title", "description", "locked", "createdAt", "updatedAt"],
  SongCreateInput: ["title", "description", "locked", "createdAt", "updatedAt", "artists"],
  SongUpdateInput: ["title", "description", "locked", "createdAt", "updatedAt", "artists"],
  SongCreateManyInput: ["id", "title", "description", "locked", "createdAt", "updatedAt"],
  SongUpdateManyMutationInput: ["title", "description", "locked", "createdAt", "updatedAt"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  BoolFilter: ["equals", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  EnumRoleFilter: ["equals", "in", "notIn", "not"],
  UserListRelationFilter: ["every", "some", "none"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
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
  EnumCareerNullableListFilter: ["equals", "has", "hasEvery", "hasSome", "isEmpty"],
  MovieListRelationFilter: ["every", "some", "none"],
  BookListRelationFilter: ["every", "some", "none"],
  SongListRelationFilter: ["every", "some", "none"],
  MovieOrderByRelationAggregateInput: ["_count"],
  BookOrderByRelationAggregateInput: ["_count"],
  SongOrderByRelationAggregateInput: ["_count"],
  PersonCountOrderByAggregateInput: ["id", "career", "name"],
  PersonAvgOrderByAggregateInput: ["id"],
  PersonMaxOrderByAggregateInput: ["id", "name"],
  PersonMinOrderByAggregateInput: ["id", "name"],
  PersonSumOrderByAggregateInput: ["id"],
  PersonListRelationFilter: ["every", "some", "none"],
  PersonOrderByRelationAggregateInput: ["_count"],
  MovieCountOrderByAggregateInput: ["id", "title", "description", "thumbnail", "locked", "createdAt", "updatedAt"],
  MovieAvgOrderByAggregateInput: ["id"],
  MovieMaxOrderByAggregateInput: ["id", "title", "description", "thumbnail", "locked", "createdAt", "updatedAt"],
  MovieMinOrderByAggregateInput: ["id", "title", "description", "thumbnail", "locked", "createdAt", "updatedAt"],
  MovieSumOrderByAggregateInput: ["id"],
  BookCountOrderByAggregateInput: ["id", "title", "description", "locked", "createdAt", "updatedAt"],
  BookAvgOrderByAggregateInput: ["id"],
  BookMaxOrderByAggregateInput: ["id", "title", "description", "locked", "createdAt", "updatedAt"],
  BookMinOrderByAggregateInput: ["id", "title", "description", "locked", "createdAt", "updatedAt"],
  BookSumOrderByAggregateInput: ["id"],
  SongCountOrderByAggregateInput: ["id", "title", "description", "locked", "createdAt", "updatedAt"],
  SongAvgOrderByAggregateInput: ["id"],
  SongMaxOrderByAggregateInput: ["id", "title", "description", "locked", "createdAt", "updatedAt"],
  SongMinOrderByAggregateInput: ["id", "title", "description", "locked", "createdAt", "updatedAt"],
  SongSumOrderByAggregateInput: ["id"],
  UserCreateNestedManyWithoutFollowersInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedManyWithoutFollowingInput: ["create", "connectOrCreate", "connect"],
  BoolFieldUpdateOperationsInput: ["set"],
  StringFieldUpdateOperationsInput: ["set"],
  EnumRoleFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  UserUpdateManyWithoutFollowersInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserUpdateManyWithoutFollowingInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  PersonCreatecareerInput: ["set"],
  MovieCreateNestedManyWithoutActorsInput: ["create", "connectOrCreate", "connect"],
  BookCreateNestedManyWithoutAuthorsInput: ["create", "connectOrCreate", "connect"],
  SongCreateNestedManyWithoutArtistsInput: ["create", "connectOrCreate", "connect"],
  PersonUpdatecareerInput: ["set", "push"],
  MovieUpdateManyWithoutActorsInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  BookUpdateManyWithoutAuthorsInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  SongUpdateManyWithoutArtistsInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  PersonCreateManycareerInput: ["set"],
  PersonCreateNestedManyWithoutMoviesInput: ["create", "connectOrCreate", "connect"],
  PersonUpdateManyWithoutMoviesInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  PersonCreateNestedManyWithoutBooksInput: ["create", "connectOrCreate", "connect"],
  PersonUpdateManyWithoutBooksInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  PersonCreateNestedManyWithoutSongsInput: ["create", "connectOrCreate", "connect"],
  PersonUpdateManyWithoutSongsInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
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
  UserCreateWithoutFollowersInput: ["confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "following"],
  UserCreateOrConnectWithoutFollowersInput: ["where", "create"],
  UserCreateWithoutFollowingInput: ["confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "followers"],
  UserCreateOrConnectWithoutFollowingInput: ["where", "create"],
  UserUpsertWithWhereUniqueWithoutFollowersInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutFollowersInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutFollowersInput: ["where", "data"],
  UserScalarWhereInput: ["AND", "OR", "NOT", "id", "confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt"],
  UserUpsertWithWhereUniqueWithoutFollowingInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutFollowingInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutFollowingInput: ["where", "data"],
  MovieCreateWithoutActorsInput: ["title", "description", "thumbnail", "locked", "createdAt", "updatedAt"],
  MovieCreateOrConnectWithoutActorsInput: ["where", "create"],
  BookCreateWithoutAuthorsInput: ["title", "description", "locked", "createdAt", "updatedAt"],
  BookCreateOrConnectWithoutAuthorsInput: ["where", "create"],
  SongCreateWithoutArtistsInput: ["title", "description", "locked", "createdAt", "updatedAt"],
  SongCreateOrConnectWithoutArtistsInput: ["where", "create"],
  MovieUpsertWithWhereUniqueWithoutActorsInput: ["where", "update", "create"],
  MovieUpdateWithWhereUniqueWithoutActorsInput: ["where", "data"],
  MovieUpdateManyWithWhereWithoutActorsInput: ["where", "data"],
  MovieScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "thumbnail", "locked", "createdAt", "updatedAt"],
  BookUpsertWithWhereUniqueWithoutAuthorsInput: ["where", "update", "create"],
  BookUpdateWithWhereUniqueWithoutAuthorsInput: ["where", "data"],
  BookUpdateManyWithWhereWithoutAuthorsInput: ["where", "data"],
  BookScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "locked", "createdAt", "updatedAt"],
  SongUpsertWithWhereUniqueWithoutArtistsInput: ["where", "update", "create"],
  SongUpdateWithWhereUniqueWithoutArtistsInput: ["where", "data"],
  SongUpdateManyWithWhereWithoutArtistsInput: ["where", "data"],
  SongScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "locked", "createdAt", "updatedAt"],
  PersonCreateWithoutMoviesInput: ["name", "career", "books", "songs"],
  PersonCreateOrConnectWithoutMoviesInput: ["where", "create"],
  PersonUpsertWithWhereUniqueWithoutMoviesInput: ["where", "update", "create"],
  PersonUpdateWithWhereUniqueWithoutMoviesInput: ["where", "data"],
  PersonUpdateManyWithWhereWithoutMoviesInput: ["where", "data"],
  PersonScalarWhereInput: ["AND", "OR", "NOT", "id", "career", "name"],
  PersonCreateWithoutBooksInput: ["name", "career", "movies", "songs"],
  PersonCreateOrConnectWithoutBooksInput: ["where", "create"],
  PersonUpsertWithWhereUniqueWithoutBooksInput: ["where", "update", "create"],
  PersonUpdateWithWhereUniqueWithoutBooksInput: ["where", "data"],
  PersonUpdateManyWithWhereWithoutBooksInput: ["where", "data"],
  PersonCreateWithoutSongsInput: ["name", "career", "movies", "books"],
  PersonCreateOrConnectWithoutSongsInput: ["where", "create"],
  PersonUpsertWithWhereUniqueWithoutSongsInput: ["where", "update", "create"],
  PersonUpdateWithWhereUniqueWithoutSongsInput: ["where", "data"],
  PersonUpdateManyWithWhereWithoutSongsInput: ["where", "data"],
  UserUpdateWithoutFollowersInput: ["confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "following"],
  UserUpdateWithoutFollowingInput: ["confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "followers"],
  MovieUpdateWithoutActorsInput: ["title", "description", "thumbnail", "locked", "createdAt", "updatedAt"],
  BookUpdateWithoutAuthorsInput: ["title", "description", "locked", "createdAt", "updatedAt"],
  SongUpdateWithoutArtistsInput: ["title", "description", "locked", "createdAt", "updatedAt"],
  PersonUpdateWithoutMoviesInput: ["name", "career", "books", "songs"],
  PersonUpdateWithoutBooksInput: ["name", "career", "movies", "songs"],
  PersonUpdateWithoutSongsInput: ["name", "career", "movies", "books"]
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

