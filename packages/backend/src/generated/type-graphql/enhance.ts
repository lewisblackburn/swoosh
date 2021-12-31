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
  Notification: crudResolvers.NotificationCrudResolver,
  Person: crudResolvers.PersonCrudResolver,
  Movie: crudResolvers.MovieCrudResolver,
  ActorInMovie: crudResolvers.ActorInMovieCrudResolver,
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
  Notification: {
    notification: actionResolvers.FindUniqueNotificationResolver,
    findFirstNotification: actionResolvers.FindFirstNotificationResolver,
    notifications: actionResolvers.FindManyNotificationResolver,
    createNotification: actionResolvers.CreateNotificationResolver,
    createManyNotification: actionResolvers.CreateManyNotificationResolver,
    deleteNotification: actionResolvers.DeleteNotificationResolver,
    updateNotification: actionResolvers.UpdateNotificationResolver,
    deleteManyNotification: actionResolvers.DeleteManyNotificationResolver,
    updateManyNotification: actionResolvers.UpdateManyNotificationResolver,
    upsertNotification: actionResolvers.UpsertNotificationResolver,
    aggregateNotification: actionResolvers.AggregateNotificationResolver,
    groupByNotification: actionResolvers.GroupByNotificationResolver
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
  ActorInMovie: {
    actorInMovie: actionResolvers.FindUniqueActorInMovieResolver,
    findFirstActorInMovie: actionResolvers.FindFirstActorInMovieResolver,
    actorInMovies: actionResolvers.FindManyActorInMovieResolver,
    createActorInMovie: actionResolvers.CreateActorInMovieResolver,
    createManyActorInMovie: actionResolvers.CreateManyActorInMovieResolver,
    deleteActorInMovie: actionResolvers.DeleteActorInMovieResolver,
    updateActorInMovie: actionResolvers.UpdateActorInMovieResolver,
    deleteManyActorInMovie: actionResolvers.DeleteManyActorInMovieResolver,
    updateManyActorInMovie: actionResolvers.UpdateManyActorInMovieResolver,
    upsertActorInMovie: actionResolvers.UpsertActorInMovieResolver,
    aggregateActorInMovie: actionResolvers.AggregateActorInMovieResolver,
    groupByActorInMovie: actionResolvers.GroupByActorInMovieResolver
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
  Notification: ["notification", "findFirstNotification", "notifications", "createNotification", "createManyNotification", "deleteNotification", "updateNotification", "deleteManyNotification", "updateManyNotification", "upsertNotification", "aggregateNotification", "groupByNotification"],
  Person: ["person", "findFirstPerson", "people", "createPerson", "createManyPerson", "deletePerson", "updatePerson", "deleteManyPerson", "updateManyPerson", "upsertPerson", "aggregatePerson", "groupByPerson"],
  Movie: ["movie", "findFirstMovie", "movies", "createMovie", "createManyMovie", "deleteMovie", "updateMovie", "deleteManyMovie", "updateManyMovie", "upsertMovie", "aggregateMovie", "groupByMovie"],
  ActorInMovie: ["actorInMovie", "findFirstActorInMovie", "actorInMovies", "createActorInMovie", "createManyActorInMovie", "deleteActorInMovie", "updateActorInMovie", "deleteManyActorInMovie", "updateManyActorInMovie", "upsertActorInMovie", "aggregateActorInMovie", "groupByActorInMovie"],
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
  FindUniqueNotificationArgs: ["where"],
  FindFirstNotificationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyNotificationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateNotificationArgs: ["data"],
  CreateManyNotificationArgs: ["data", "skipDuplicates"],
  DeleteNotificationArgs: ["where"],
  UpdateNotificationArgs: ["data", "where"],
  DeleteManyNotificationArgs: ["where"],
  UpdateManyNotificationArgs: ["data", "where"],
  UpsertNotificationArgs: ["where", "create", "update"],
  AggregateNotificationArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByNotificationArgs: ["where", "orderBy", "by", "having", "take", "skip"],
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
  FindUniqueActorInMovieArgs: ["where"],
  FindFirstActorInMovieArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyActorInMovieArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateActorInMovieArgs: ["data"],
  CreateManyActorInMovieArgs: ["data", "skipDuplicates"],
  DeleteActorInMovieArgs: ["where"],
  UpdateActorInMovieArgs: ["data", "where"],
  DeleteManyActorInMovieArgs: ["where"],
  UpdateManyActorInMovieArgs: ["data", "where"],
  UpsertActorInMovieArgs: ["where", "create", "update"],
  AggregateActorInMovieArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByActorInMovieArgs: ["where", "orderBy", "by", "having", "take", "skip"],
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
  Notification: relationResolvers.NotificationRelationsResolver,
  Person: relationResolvers.PersonRelationsResolver,
  Movie: relationResolvers.MovieRelationsResolver,
  ActorInMovie: relationResolvers.ActorInMovieRelationsResolver,
  Book: relationResolvers.BookRelationsResolver,
  Song: relationResolvers.SongRelationsResolver
};
const relationResolversInfo = {
  User: ["following", "followers", "notifications"],
  Notification: ["user"],
  Person: ["movies", "books", "songs"],
  Movie: ["actors"],
  ActorInMovie: ["movie", "person"],
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
  Notification: ["id", "userId", "message", "read", "createdAt"],
  Person: ["id", "career", "name"],
  Movie: ["id", "title", "description", "thumbnail", "locked", "createdAt", "updatedAt"],
  ActorInMovie: ["movieId", "personId", "role"],
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
  AggregateNotification: ["_count", "_avg", "_sum", "_min", "_max"],
  NotificationGroupBy: ["id", "userId", "message", "read", "createdAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePerson: ["_count", "_avg", "_sum", "_min", "_max"],
  PersonGroupBy: ["id", "career", "name", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateMovie: ["_count", "_avg", "_sum", "_min", "_max"],
  MovieGroupBy: ["id", "title", "description", "thumbnail", "locked", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateActorInMovie: ["_count", "_avg", "_sum", "_min", "_max"],
  ActorInMovieGroupBy: ["movieId", "personId", "role", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateBook: ["_count", "_avg", "_sum", "_min", "_max"],
  BookGroupBy: ["id", "title", "description", "locked", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateSong: ["_count", "_avg", "_sum", "_min", "_max"],
  SongGroupBy: ["id", "title", "description", "locked", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["following", "followers", "notifications"],
  UserCountAggregate: ["id", "confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "_all"],
  UserAvgAggregate: ["id"],
  UserSumAggregate: ["id"],
  UserMinAggregate: ["id", "confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt"],
  UserMaxAggregate: ["id", "confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt"],
  NotificationCountAggregate: ["id", "userId", "message", "read", "createdAt", "_all"],
  NotificationAvgAggregate: ["id", "userId"],
  NotificationSumAggregate: ["id", "userId"],
  NotificationMinAggregate: ["id", "userId", "message", "read", "createdAt"],
  NotificationMaxAggregate: ["id", "userId", "message", "read", "createdAt"],
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
  ActorInMovieCountAggregate: ["movieId", "personId", "role", "_all"],
  ActorInMovieAvgAggregate: ["movieId", "personId"],
  ActorInMovieSumAggregate: ["movieId", "personId"],
  ActorInMovieMinAggregate: ["movieId", "personId", "role"],
  ActorInMovieMaxAggregate: ["movieId", "personId", "role"],
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
  UserWhereInput: ["AND", "OR", "NOT", "id", "confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "following", "followers", "notifications", "createdAt", "updatedAt"],
  UserOrderByWithRelationInput: ["id", "confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "following", "followers", "notifications", "createdAt", "updatedAt"],
  UserWhereUniqueInput: ["id", "email", "username"],
  UserOrderByWithAggregationInput: ["id", "confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt"],
  NotificationWhereInput: ["AND", "OR", "NOT", "id", "user", "userId", "message", "read", "createdAt"],
  NotificationOrderByWithRelationInput: ["id", "user", "userId", "message", "read", "createdAt"],
  NotificationWhereUniqueInput: ["id"],
  NotificationOrderByWithAggregationInput: ["id", "userId", "message", "read", "createdAt", "_count", "_avg", "_max", "_min", "_sum"],
  NotificationScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "message", "read", "createdAt"],
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
  ActorInMovieWhereInput: ["AND", "OR", "NOT", "movie", "movieId", "person", "personId", "role"],
  ActorInMovieOrderByWithRelationInput: ["movie", "movieId", "person", "personId", "role"],
  ActorInMovieWhereUniqueInput: ["personId_movieId"],
  ActorInMovieOrderByWithAggregationInput: ["movieId", "personId", "role", "_count", "_avg", "_max", "_min", "_sum"],
  ActorInMovieScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "movieId", "personId", "role"],
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
  UserCreateInput: ["confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "following", "followers", "notifications"],
  UserUpdateInput: ["confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "following", "followers", "notifications"],
  UserCreateManyInput: ["id", "confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt"],
  UserUpdateManyMutationInput: ["confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt"],
  NotificationCreateInput: ["message", "read", "createdAt", "user"],
  NotificationUpdateInput: ["message", "read", "createdAt", "user"],
  NotificationCreateManyInput: ["id", "userId", "message", "read", "createdAt"],
  NotificationUpdateManyMutationInput: ["message", "read", "createdAt"],
  PersonCreateInput: ["name", "career", "movies", "books", "songs"],
  PersonUpdateInput: ["name", "career", "movies", "books", "songs"],
  PersonCreateManyInput: ["id", "name", "career"],
  PersonUpdateManyMutationInput: ["name", "career"],
  MovieCreateInput: ["title", "description", "thumbnail", "locked", "createdAt", "updatedAt", "actors"],
  MovieUpdateInput: ["title", "description", "thumbnail", "locked", "createdAt", "updatedAt", "actors"],
  MovieCreateManyInput: ["id", "title", "description", "thumbnail", "locked", "createdAt", "updatedAt"],
  MovieUpdateManyMutationInput: ["title", "description", "thumbnail", "locked", "createdAt", "updatedAt"],
  ActorInMovieCreateInput: ["role", "movie", "person"],
  ActorInMovieUpdateInput: ["role", "movie", "person"],
  ActorInMovieCreateManyInput: ["movieId", "personId", "role"],
  ActorInMovieUpdateManyMutationInput: ["role"],
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
  NotificationListRelationFilter: ["every", "some", "none"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  UserOrderByRelationAggregateInput: ["_count"],
  NotificationOrderByRelationAggregateInput: ["_count"],
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
  UserRelationFilter: ["is", "isNot"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NotificationCountOrderByAggregateInput: ["id", "userId", "message", "read", "createdAt"],
  NotificationAvgOrderByAggregateInput: ["id", "userId"],
  NotificationMaxOrderByAggregateInput: ["id", "userId", "message", "read", "createdAt"],
  NotificationMinOrderByAggregateInput: ["id", "userId", "message", "read", "createdAt"],
  NotificationSumOrderByAggregateInput: ["id", "userId"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  EnumCareerNullableListFilter: ["equals", "has", "hasEvery", "hasSome", "isEmpty"],
  ActorInMovieListRelationFilter: ["every", "some", "none"],
  BookListRelationFilter: ["every", "some", "none"],
  SongListRelationFilter: ["every", "some", "none"],
  ActorInMovieOrderByRelationAggregateInput: ["_count"],
  BookOrderByRelationAggregateInput: ["_count"],
  SongOrderByRelationAggregateInput: ["_count"],
  PersonCountOrderByAggregateInput: ["id", "career", "name"],
  PersonAvgOrderByAggregateInput: ["id"],
  PersonMaxOrderByAggregateInput: ["id", "name"],
  PersonMinOrderByAggregateInput: ["id", "name"],
  PersonSumOrderByAggregateInput: ["id"],
  MovieCountOrderByAggregateInput: ["id", "title", "description", "thumbnail", "locked", "createdAt", "updatedAt"],
  MovieAvgOrderByAggregateInput: ["id"],
  MovieMaxOrderByAggregateInput: ["id", "title", "description", "thumbnail", "locked", "createdAt", "updatedAt"],
  MovieMinOrderByAggregateInput: ["id", "title", "description", "thumbnail", "locked", "createdAt", "updatedAt"],
  MovieSumOrderByAggregateInput: ["id"],
  MovieRelationFilter: ["is", "isNot"],
  PersonRelationFilter: ["is", "isNot"],
  ActorInMoviePersonIdMovieIdCompoundUniqueInput: ["personId", "movieId"],
  ActorInMovieCountOrderByAggregateInput: ["movieId", "personId", "role"],
  ActorInMovieAvgOrderByAggregateInput: ["movieId", "personId"],
  ActorInMovieMaxOrderByAggregateInput: ["movieId", "personId", "role"],
  ActorInMovieMinOrderByAggregateInput: ["movieId", "personId", "role"],
  ActorInMovieSumOrderByAggregateInput: ["movieId", "personId"],
  PersonListRelationFilter: ["every", "some", "none"],
  PersonOrderByRelationAggregateInput: ["_count"],
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
  NotificationCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  BoolFieldUpdateOperationsInput: ["set"],
  StringFieldUpdateOperationsInput: ["set"],
  EnumRoleFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  UserUpdateManyWithoutFollowersInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserUpdateManyWithoutFollowingInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  NotificationUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserCreateNestedOneWithoutNotificationsInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneWithoutNotificationsInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  PersonCreatecareerInput: ["set"],
  ActorInMovieCreateNestedManyWithoutPersonInput: ["create", "connectOrCreate", "createMany", "connect"],
  BookCreateNestedManyWithoutAuthorsInput: ["create", "connectOrCreate", "connect"],
  SongCreateNestedManyWithoutArtistsInput: ["create", "connectOrCreate", "connect"],
  PersonUpdatecareerInput: ["set", "push"],
  ActorInMovieUpdateManyWithoutPersonInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  BookUpdateManyWithoutAuthorsInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  SongUpdateManyWithoutArtistsInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  PersonCreateManycareerInput: ["set"],
  ActorInMovieCreateNestedManyWithoutMovieInput: ["create", "connectOrCreate", "createMany", "connect"],
  ActorInMovieUpdateManyWithoutMovieInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  MovieCreateNestedOneWithoutActorsInput: ["create", "connectOrCreate", "connect"],
  PersonCreateNestedOneWithoutMoviesInput: ["create", "connectOrCreate", "connect"],
  MovieUpdateOneRequiredWithoutActorsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PersonUpdateOneRequiredWithoutMoviesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
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
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  UserCreateWithoutFollowersInput: ["confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "following", "notifications"],
  UserCreateOrConnectWithoutFollowersInput: ["where", "create"],
  UserCreateWithoutFollowingInput: ["confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "followers", "notifications"],
  UserCreateOrConnectWithoutFollowingInput: ["where", "create"],
  NotificationCreateWithoutUserInput: ["message", "read", "createdAt"],
  NotificationCreateOrConnectWithoutUserInput: ["where", "create"],
  NotificationCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithWhereUniqueWithoutFollowersInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutFollowersInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutFollowersInput: ["where", "data"],
  UserScalarWhereInput: ["AND", "OR", "NOT", "id", "confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt"],
  UserUpsertWithWhereUniqueWithoutFollowingInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutFollowingInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutFollowingInput: ["where", "data"],
  NotificationUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  NotificationUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  NotificationUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  NotificationScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "message", "read", "createdAt"],
  UserCreateWithoutNotificationsInput: ["confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "following", "followers"],
  UserCreateOrConnectWithoutNotificationsInput: ["where", "create"],
  UserUpsertWithoutNotificationsInput: ["update", "create"],
  UserUpdateWithoutNotificationsInput: ["confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "following", "followers"],
  ActorInMovieCreateWithoutPersonInput: ["role", "movie"],
  ActorInMovieCreateOrConnectWithoutPersonInput: ["where", "create"],
  ActorInMovieCreateManyPersonInputEnvelope: ["data", "skipDuplicates"],
  BookCreateWithoutAuthorsInput: ["title", "description", "locked", "createdAt", "updatedAt"],
  BookCreateOrConnectWithoutAuthorsInput: ["where", "create"],
  SongCreateWithoutArtistsInput: ["title", "description", "locked", "createdAt", "updatedAt"],
  SongCreateOrConnectWithoutArtistsInput: ["where", "create"],
  ActorInMovieUpsertWithWhereUniqueWithoutPersonInput: ["where", "update", "create"],
  ActorInMovieUpdateWithWhereUniqueWithoutPersonInput: ["where", "data"],
  ActorInMovieUpdateManyWithWhereWithoutPersonInput: ["where", "data"],
  ActorInMovieScalarWhereInput: ["AND", "OR", "NOT", "movieId", "personId", "role"],
  BookUpsertWithWhereUniqueWithoutAuthorsInput: ["where", "update", "create"],
  BookUpdateWithWhereUniqueWithoutAuthorsInput: ["where", "data"],
  BookUpdateManyWithWhereWithoutAuthorsInput: ["where", "data"],
  BookScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "locked", "createdAt", "updatedAt"],
  SongUpsertWithWhereUniqueWithoutArtistsInput: ["where", "update", "create"],
  SongUpdateWithWhereUniqueWithoutArtistsInput: ["where", "data"],
  SongUpdateManyWithWhereWithoutArtistsInput: ["where", "data"],
  SongScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "locked", "createdAt", "updatedAt"],
  ActorInMovieCreateWithoutMovieInput: ["role", "person"],
  ActorInMovieCreateOrConnectWithoutMovieInput: ["where", "create"],
  ActorInMovieCreateManyMovieInputEnvelope: ["data", "skipDuplicates"],
  ActorInMovieUpsertWithWhereUniqueWithoutMovieInput: ["where", "update", "create"],
  ActorInMovieUpdateWithWhereUniqueWithoutMovieInput: ["where", "data"],
  ActorInMovieUpdateManyWithWhereWithoutMovieInput: ["where", "data"],
  MovieCreateWithoutActorsInput: ["title", "description", "thumbnail", "locked", "createdAt", "updatedAt"],
  MovieCreateOrConnectWithoutActorsInput: ["where", "create"],
  PersonCreateWithoutMoviesInput: ["name", "career", "books", "songs"],
  PersonCreateOrConnectWithoutMoviesInput: ["where", "create"],
  MovieUpsertWithoutActorsInput: ["update", "create"],
  MovieUpdateWithoutActorsInput: ["title", "description", "thumbnail", "locked", "createdAt", "updatedAt"],
  PersonUpsertWithoutMoviesInput: ["update", "create"],
  PersonUpdateWithoutMoviesInput: ["name", "career", "books", "songs"],
  PersonCreateWithoutBooksInput: ["name", "career", "movies", "songs"],
  PersonCreateOrConnectWithoutBooksInput: ["where", "create"],
  PersonUpsertWithWhereUniqueWithoutBooksInput: ["where", "update", "create"],
  PersonUpdateWithWhereUniqueWithoutBooksInput: ["where", "data"],
  PersonUpdateManyWithWhereWithoutBooksInput: ["where", "data"],
  PersonScalarWhereInput: ["AND", "OR", "NOT", "id", "career", "name"],
  PersonCreateWithoutSongsInput: ["name", "career", "movies", "books"],
  PersonCreateOrConnectWithoutSongsInput: ["where", "create"],
  PersonUpsertWithWhereUniqueWithoutSongsInput: ["where", "update", "create"],
  PersonUpdateWithWhereUniqueWithoutSongsInput: ["where", "data"],
  PersonUpdateManyWithWhereWithoutSongsInput: ["where", "data"],
  NotificationCreateManyUserInput: ["id", "message", "read", "createdAt"],
  UserUpdateWithoutFollowersInput: ["confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "following", "notifications"],
  UserUpdateWithoutFollowingInput: ["confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "followers", "notifications"],
  NotificationUpdateWithoutUserInput: ["message", "read", "createdAt"],
  ActorInMovieCreateManyPersonInput: ["movieId", "role"],
  ActorInMovieUpdateWithoutPersonInput: ["role", "movie"],
  BookUpdateWithoutAuthorsInput: ["title", "description", "locked", "createdAt", "updatedAt"],
  SongUpdateWithoutArtistsInput: ["title", "description", "locked", "createdAt", "updatedAt"],
  ActorInMovieCreateManyMovieInput: ["personId", "role"],
  ActorInMovieUpdateWithoutMovieInput: ["role", "person"],
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

