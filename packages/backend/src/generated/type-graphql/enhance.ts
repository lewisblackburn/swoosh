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
  Follows: crudResolvers.FollowsCrudResolver,
  Notification: crudResolvers.NotificationCrudResolver,
  Person: crudResolvers.PersonCrudResolver,
  Movie: crudResolvers.MovieCrudResolver,
  Show: crudResolvers.ShowCrudResolver,
  Platform: crudResolvers.PlatformCrudResolver,
  PlatformOnMovie: crudResolvers.PlatformOnMovieCrudResolver,
  PlatformOnShow: crudResolvers.PlatformOnShowCrudResolver,
  SongInMovie: crudResolvers.SongInMovieCrudResolver,
  SongInShow: crudResolvers.SongInShowCrudResolver,
  ActorInMovie: crudResolvers.ActorInMovieCrudResolver,
  ActorInShow: crudResolvers.ActorInShowCrudResolver,
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
  Follows: {
    findUniqueFollows: actionResolvers.FindUniqueFollowsResolver,
    findFirstFollows: actionResolvers.FindFirstFollowsResolver,
    findManyFollows: actionResolvers.FindManyFollowsResolver,
    createFollows: actionResolvers.CreateFollowsResolver,
    createManyFollows: actionResolvers.CreateManyFollowsResolver,
    deleteFollows: actionResolvers.DeleteFollowsResolver,
    updateFollows: actionResolvers.UpdateFollowsResolver,
    deleteManyFollows: actionResolvers.DeleteManyFollowsResolver,
    updateManyFollows: actionResolvers.UpdateManyFollowsResolver,
    upsertFollows: actionResolvers.UpsertFollowsResolver,
    aggregateFollows: actionResolvers.AggregateFollowsResolver,
    groupByFollows: actionResolvers.GroupByFollowsResolver
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
  Show: {
    show: actionResolvers.FindUniqueShowResolver,
    findFirstShow: actionResolvers.FindFirstShowResolver,
    shows: actionResolvers.FindManyShowResolver,
    createShow: actionResolvers.CreateShowResolver,
    createManyShow: actionResolvers.CreateManyShowResolver,
    deleteShow: actionResolvers.DeleteShowResolver,
    updateShow: actionResolvers.UpdateShowResolver,
    deleteManyShow: actionResolvers.DeleteManyShowResolver,
    updateManyShow: actionResolvers.UpdateManyShowResolver,
    upsertShow: actionResolvers.UpsertShowResolver,
    aggregateShow: actionResolvers.AggregateShowResolver,
    groupByShow: actionResolvers.GroupByShowResolver
  },
  Platform: {
    platform: actionResolvers.FindUniquePlatformResolver,
    findFirstPlatform: actionResolvers.FindFirstPlatformResolver,
    platforms: actionResolvers.FindManyPlatformResolver,
    createPlatform: actionResolvers.CreatePlatformResolver,
    createManyPlatform: actionResolvers.CreateManyPlatformResolver,
    deletePlatform: actionResolvers.DeletePlatformResolver,
    updatePlatform: actionResolvers.UpdatePlatformResolver,
    deleteManyPlatform: actionResolvers.DeleteManyPlatformResolver,
    updateManyPlatform: actionResolvers.UpdateManyPlatformResolver,
    upsertPlatform: actionResolvers.UpsertPlatformResolver,
    aggregatePlatform: actionResolvers.AggregatePlatformResolver,
    groupByPlatform: actionResolvers.GroupByPlatformResolver
  },
  PlatformOnMovie: {
    platformOnMovie: actionResolvers.FindUniquePlatformOnMovieResolver,
    findFirstPlatformOnMovie: actionResolvers.FindFirstPlatformOnMovieResolver,
    platformOnMovies: actionResolvers.FindManyPlatformOnMovieResolver,
    createPlatformOnMovie: actionResolvers.CreatePlatformOnMovieResolver,
    createManyPlatformOnMovie: actionResolvers.CreateManyPlatformOnMovieResolver,
    deletePlatformOnMovie: actionResolvers.DeletePlatformOnMovieResolver,
    updatePlatformOnMovie: actionResolvers.UpdatePlatformOnMovieResolver,
    deleteManyPlatformOnMovie: actionResolvers.DeleteManyPlatformOnMovieResolver,
    updateManyPlatformOnMovie: actionResolvers.UpdateManyPlatformOnMovieResolver,
    upsertPlatformOnMovie: actionResolvers.UpsertPlatformOnMovieResolver,
    aggregatePlatformOnMovie: actionResolvers.AggregatePlatformOnMovieResolver,
    groupByPlatformOnMovie: actionResolvers.GroupByPlatformOnMovieResolver
  },
  PlatformOnShow: {
    platformOnShow: actionResolvers.FindUniquePlatformOnShowResolver,
    findFirstPlatformOnShow: actionResolvers.FindFirstPlatformOnShowResolver,
    platformOnShows: actionResolvers.FindManyPlatformOnShowResolver,
    createPlatformOnShow: actionResolvers.CreatePlatformOnShowResolver,
    createManyPlatformOnShow: actionResolvers.CreateManyPlatformOnShowResolver,
    deletePlatformOnShow: actionResolvers.DeletePlatformOnShowResolver,
    updatePlatformOnShow: actionResolvers.UpdatePlatformOnShowResolver,
    deleteManyPlatformOnShow: actionResolvers.DeleteManyPlatformOnShowResolver,
    updateManyPlatformOnShow: actionResolvers.UpdateManyPlatformOnShowResolver,
    upsertPlatformOnShow: actionResolvers.UpsertPlatformOnShowResolver,
    aggregatePlatformOnShow: actionResolvers.AggregatePlatformOnShowResolver,
    groupByPlatformOnShow: actionResolvers.GroupByPlatformOnShowResolver
  },
  SongInMovie: {
    songInMovie: actionResolvers.FindUniqueSongInMovieResolver,
    findFirstSongInMovie: actionResolvers.FindFirstSongInMovieResolver,
    songInMovies: actionResolvers.FindManySongInMovieResolver,
    createSongInMovie: actionResolvers.CreateSongInMovieResolver,
    createManySongInMovie: actionResolvers.CreateManySongInMovieResolver,
    deleteSongInMovie: actionResolvers.DeleteSongInMovieResolver,
    updateSongInMovie: actionResolvers.UpdateSongInMovieResolver,
    deleteManySongInMovie: actionResolvers.DeleteManySongInMovieResolver,
    updateManySongInMovie: actionResolvers.UpdateManySongInMovieResolver,
    upsertSongInMovie: actionResolvers.UpsertSongInMovieResolver,
    aggregateSongInMovie: actionResolvers.AggregateSongInMovieResolver,
    groupBySongInMovie: actionResolvers.GroupBySongInMovieResolver
  },
  SongInShow: {
    songInShow: actionResolvers.FindUniqueSongInShowResolver,
    findFirstSongInShow: actionResolvers.FindFirstSongInShowResolver,
    songInShows: actionResolvers.FindManySongInShowResolver,
    createSongInShow: actionResolvers.CreateSongInShowResolver,
    createManySongInShow: actionResolvers.CreateManySongInShowResolver,
    deleteSongInShow: actionResolvers.DeleteSongInShowResolver,
    updateSongInShow: actionResolvers.UpdateSongInShowResolver,
    deleteManySongInShow: actionResolvers.DeleteManySongInShowResolver,
    updateManySongInShow: actionResolvers.UpdateManySongInShowResolver,
    upsertSongInShow: actionResolvers.UpsertSongInShowResolver,
    aggregateSongInShow: actionResolvers.AggregateSongInShowResolver,
    groupBySongInShow: actionResolvers.GroupBySongInShowResolver
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
  ActorInShow: {
    actorInShow: actionResolvers.FindUniqueActorInShowResolver,
    findFirstActorInShow: actionResolvers.FindFirstActorInShowResolver,
    actorInShows: actionResolvers.FindManyActorInShowResolver,
    createActorInShow: actionResolvers.CreateActorInShowResolver,
    createManyActorInShow: actionResolvers.CreateManyActorInShowResolver,
    deleteActorInShow: actionResolvers.DeleteActorInShowResolver,
    updateActorInShow: actionResolvers.UpdateActorInShowResolver,
    deleteManyActorInShow: actionResolvers.DeleteManyActorInShowResolver,
    updateManyActorInShow: actionResolvers.UpdateManyActorInShowResolver,
    upsertActorInShow: actionResolvers.UpsertActorInShowResolver,
    aggregateActorInShow: actionResolvers.AggregateActorInShowResolver,
    groupByActorInShow: actionResolvers.GroupByActorInShowResolver
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
  Follows: ["findUniqueFollows", "findFirstFollows", "findManyFollows", "createFollows", "createManyFollows", "deleteFollows", "updateFollows", "deleteManyFollows", "updateManyFollows", "upsertFollows", "aggregateFollows", "groupByFollows"],
  Notification: ["notification", "findFirstNotification", "notifications", "createNotification", "createManyNotification", "deleteNotification", "updateNotification", "deleteManyNotification", "updateManyNotification", "upsertNotification", "aggregateNotification", "groupByNotification"],
  Person: ["person", "findFirstPerson", "people", "createPerson", "createManyPerson", "deletePerson", "updatePerson", "deleteManyPerson", "updateManyPerson", "upsertPerson", "aggregatePerson", "groupByPerson"],
  Movie: ["movie", "findFirstMovie", "movies", "createMovie", "createManyMovie", "deleteMovie", "updateMovie", "deleteManyMovie", "updateManyMovie", "upsertMovie", "aggregateMovie", "groupByMovie"],
  Show: ["show", "findFirstShow", "shows", "createShow", "createManyShow", "deleteShow", "updateShow", "deleteManyShow", "updateManyShow", "upsertShow", "aggregateShow", "groupByShow"],
  Platform: ["platform", "findFirstPlatform", "platforms", "createPlatform", "createManyPlatform", "deletePlatform", "updatePlatform", "deleteManyPlatform", "updateManyPlatform", "upsertPlatform", "aggregatePlatform", "groupByPlatform"],
  PlatformOnMovie: ["platformOnMovie", "findFirstPlatformOnMovie", "platformOnMovies", "createPlatformOnMovie", "createManyPlatformOnMovie", "deletePlatformOnMovie", "updatePlatformOnMovie", "deleteManyPlatformOnMovie", "updateManyPlatformOnMovie", "upsertPlatformOnMovie", "aggregatePlatformOnMovie", "groupByPlatformOnMovie"],
  PlatformOnShow: ["platformOnShow", "findFirstPlatformOnShow", "platformOnShows", "createPlatformOnShow", "createManyPlatformOnShow", "deletePlatformOnShow", "updatePlatformOnShow", "deleteManyPlatformOnShow", "updateManyPlatformOnShow", "upsertPlatformOnShow", "aggregatePlatformOnShow", "groupByPlatformOnShow"],
  SongInMovie: ["songInMovie", "findFirstSongInMovie", "songInMovies", "createSongInMovie", "createManySongInMovie", "deleteSongInMovie", "updateSongInMovie", "deleteManySongInMovie", "updateManySongInMovie", "upsertSongInMovie", "aggregateSongInMovie", "groupBySongInMovie"],
  SongInShow: ["songInShow", "findFirstSongInShow", "songInShows", "createSongInShow", "createManySongInShow", "deleteSongInShow", "updateSongInShow", "deleteManySongInShow", "updateManySongInShow", "upsertSongInShow", "aggregateSongInShow", "groupBySongInShow"],
  ActorInMovie: ["actorInMovie", "findFirstActorInMovie", "actorInMovies", "createActorInMovie", "createManyActorInMovie", "deleteActorInMovie", "updateActorInMovie", "deleteManyActorInMovie", "updateManyActorInMovie", "upsertActorInMovie", "aggregateActorInMovie", "groupByActorInMovie"],
  ActorInShow: ["actorInShow", "findFirstActorInShow", "actorInShows", "createActorInShow", "createManyActorInShow", "deleteActorInShow", "updateActorInShow", "deleteManyActorInShow", "updateManyActorInShow", "upsertActorInShow", "aggregateActorInShow", "groupByActorInShow"],
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
  FindUniqueFollowsArgs: ["where"],
  FindFirstFollowsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyFollowsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateFollowsArgs: ["data"],
  CreateManyFollowsArgs: ["data", "skipDuplicates"],
  DeleteFollowsArgs: ["where"],
  UpdateFollowsArgs: ["data", "where"],
  DeleteManyFollowsArgs: ["where"],
  UpdateManyFollowsArgs: ["data", "where"],
  UpsertFollowsArgs: ["where", "create", "update"],
  AggregateFollowsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByFollowsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
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
  FindUniqueShowArgs: ["where"],
  FindFirstShowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyShowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateShowArgs: ["data"],
  CreateManyShowArgs: ["data", "skipDuplicates"],
  DeleteShowArgs: ["where"],
  UpdateShowArgs: ["data", "where"],
  DeleteManyShowArgs: ["where"],
  UpdateManyShowArgs: ["data", "where"],
  UpsertShowArgs: ["where", "create", "update"],
  AggregateShowArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByShowArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniquePlatformArgs: ["where"],
  FindFirstPlatformArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPlatformArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreatePlatformArgs: ["data"],
  CreateManyPlatformArgs: ["data", "skipDuplicates"],
  DeletePlatformArgs: ["where"],
  UpdatePlatformArgs: ["data", "where"],
  DeleteManyPlatformArgs: ["where"],
  UpdateManyPlatformArgs: ["data", "where"],
  UpsertPlatformArgs: ["where", "create", "update"],
  AggregatePlatformArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByPlatformArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniquePlatformOnMovieArgs: ["where"],
  FindFirstPlatformOnMovieArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPlatformOnMovieArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreatePlatformOnMovieArgs: ["data"],
  CreateManyPlatformOnMovieArgs: ["data", "skipDuplicates"],
  DeletePlatformOnMovieArgs: ["where"],
  UpdatePlatformOnMovieArgs: ["data", "where"],
  DeleteManyPlatformOnMovieArgs: ["where"],
  UpdateManyPlatformOnMovieArgs: ["data", "where"],
  UpsertPlatformOnMovieArgs: ["where", "create", "update"],
  AggregatePlatformOnMovieArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByPlatformOnMovieArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniquePlatformOnShowArgs: ["where"],
  FindFirstPlatformOnShowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPlatformOnShowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreatePlatformOnShowArgs: ["data"],
  CreateManyPlatformOnShowArgs: ["data", "skipDuplicates"],
  DeletePlatformOnShowArgs: ["where"],
  UpdatePlatformOnShowArgs: ["data", "where"],
  DeleteManyPlatformOnShowArgs: ["where"],
  UpdateManyPlatformOnShowArgs: ["data", "where"],
  UpsertPlatformOnShowArgs: ["where", "create", "update"],
  AggregatePlatformOnShowArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByPlatformOnShowArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueSongInMovieArgs: ["where"],
  FindFirstSongInMovieArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySongInMovieArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateSongInMovieArgs: ["data"],
  CreateManySongInMovieArgs: ["data", "skipDuplicates"],
  DeleteSongInMovieArgs: ["where"],
  UpdateSongInMovieArgs: ["data", "where"],
  DeleteManySongInMovieArgs: ["where"],
  UpdateManySongInMovieArgs: ["data", "where"],
  UpsertSongInMovieArgs: ["where", "create", "update"],
  AggregateSongInMovieArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupBySongInMovieArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueSongInShowArgs: ["where"],
  FindFirstSongInShowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySongInShowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateSongInShowArgs: ["data"],
  CreateManySongInShowArgs: ["data", "skipDuplicates"],
  DeleteSongInShowArgs: ["where"],
  UpdateSongInShowArgs: ["data", "where"],
  DeleteManySongInShowArgs: ["where"],
  UpdateManySongInShowArgs: ["data", "where"],
  UpsertSongInShowArgs: ["where", "create", "update"],
  AggregateSongInShowArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupBySongInShowArgs: ["where", "orderBy", "by", "having", "take", "skip"],
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
  FindUniqueActorInShowArgs: ["where"],
  FindFirstActorInShowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyActorInShowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateActorInShowArgs: ["data"],
  CreateManyActorInShowArgs: ["data", "skipDuplicates"],
  DeleteActorInShowArgs: ["where"],
  UpdateActorInShowArgs: ["data", "where"],
  DeleteManyActorInShowArgs: ["where"],
  UpdateManyActorInShowArgs: ["data", "where"],
  UpsertActorInShowArgs: ["where", "create", "update"],
  AggregateActorInShowArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByActorInShowArgs: ["where", "orderBy", "by", "having", "take", "skip"],
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
  Follows: relationResolvers.FollowsRelationsResolver,
  Notification: relationResolvers.NotificationRelationsResolver,
  Person: relationResolvers.PersonRelationsResolver,
  Movie: relationResolvers.MovieRelationsResolver,
  Show: relationResolvers.ShowRelationsResolver,
  Platform: relationResolvers.PlatformRelationsResolver,
  PlatformOnMovie: relationResolvers.PlatformOnMovieRelationsResolver,
  PlatformOnShow: relationResolvers.PlatformOnShowRelationsResolver,
  SongInMovie: relationResolvers.SongInMovieRelationsResolver,
  SongInShow: relationResolvers.SongInShowRelationsResolver,
  ActorInMovie: relationResolvers.ActorInMovieRelationsResolver,
  ActorInShow: relationResolvers.ActorInShowRelationsResolver,
  Book: relationResolvers.BookRelationsResolver,
  Song: relationResolvers.SongRelationsResolver
};
const relationResolversInfo = {
  User: ["following", "followers", "notifications"],
  Follows: ["following", "follower"],
  Notification: ["user"],
  Person: ["movies", "shows", "books", "songs"],
  Movie: ["actors", "platforms", "soundtrack"],
  Show: ["actors", "platforms", "soundtrack"],
  Platform: ["PlatformOnMovie", "PlatformOnShow"],
  PlatformOnMovie: ["platform", "movie"],
  PlatformOnShow: ["platform", "show"],
  SongInMovie: ["song", "movie"],
  SongInShow: ["song", "show"],
  ActorInMovie: ["movie", "person"],
  ActorInShow: ["show", "person"],
  Book: ["authors"],
  Song: ["artists", "songInShow", "songInMovie"]
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
  Follows: ["followingId", "followerId"],
  Notification: ["id", "userId", "message", "read", "createdAt"],
  Person: ["id", "career", "name", "thumbnail", "bio", "age", "createdAt", "updatedAt"],
  Movie: ["id", "title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt"],
  Show: ["id", "title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt"],
  Platform: ["id", "name"],
  PlatformOnMovie: ["price", "platformId", "movieId"],
  PlatformOnShow: ["price", "platformId", "showId"],
  SongInMovie: ["timestamp", "description", "songId", "movieId"],
  SongInShow: ["timestamp", "description", "songId", "showId"],
  ActorInMovie: ["movieId", "personId", "role"],
  ActorInShow: ["showId", "personId", "role"],
  Book: ["id", "title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt"],
  Song: ["id", "title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt"]
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
  AggregateFollows: ["_count", "_avg", "_sum", "_min", "_max"],
  FollowsGroupBy: ["followingId", "followerId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateNotification: ["_count", "_avg", "_sum", "_min", "_max"],
  NotificationGroupBy: ["id", "userId", "message", "read", "createdAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePerson: ["_count", "_avg", "_sum", "_min", "_max"],
  PersonGroupBy: ["id", "career", "name", "thumbnail", "bio", "age", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateMovie: ["_count", "_avg", "_sum", "_min", "_max"],
  MovieGroupBy: ["id", "title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateShow: ["_count", "_avg", "_sum", "_min", "_max"],
  ShowGroupBy: ["id", "title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePlatform: ["_count", "_avg", "_sum", "_min", "_max"],
  PlatformGroupBy: ["id", "name", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePlatformOnMovie: ["_count", "_avg", "_sum", "_min", "_max"],
  PlatformOnMovieGroupBy: ["price", "platformId", "movieId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePlatformOnShow: ["_count", "_avg", "_sum", "_min", "_max"],
  PlatformOnShowGroupBy: ["price", "platformId", "showId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateSongInMovie: ["_count", "_avg", "_sum", "_min", "_max"],
  SongInMovieGroupBy: ["timestamp", "description", "songId", "movieId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateSongInShow: ["_count", "_avg", "_sum", "_min", "_max"],
  SongInShowGroupBy: ["timestamp", "description", "songId", "showId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateActorInMovie: ["_count", "_avg", "_sum", "_min", "_max"],
  ActorInMovieGroupBy: ["movieId", "personId", "role", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateActorInShow: ["_count", "_avg", "_sum", "_min", "_max"],
  ActorInShowGroupBy: ["showId", "personId", "role", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateBook: ["_count", "_avg", "_sum", "_min", "_max"],
  BookGroupBy: ["id", "title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateSong: ["_count", "_avg", "_sum", "_min", "_max"],
  SongGroupBy: ["id", "title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["following", "followers", "notifications"],
  UserCountAggregate: ["id", "confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "_all"],
  UserAvgAggregate: ["id"],
  UserSumAggregate: ["id"],
  UserMinAggregate: ["id", "confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt"],
  UserMaxAggregate: ["id", "confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt"],
  FollowsCountAggregate: ["followingId", "followerId", "_all"],
  FollowsAvgAggregate: ["followingId", "followerId"],
  FollowsSumAggregate: ["followingId", "followerId"],
  FollowsMinAggregate: ["followingId", "followerId"],
  FollowsMaxAggregate: ["followingId", "followerId"],
  NotificationCountAggregate: ["id", "userId", "message", "read", "createdAt", "_all"],
  NotificationAvgAggregate: ["id", "userId"],
  NotificationSumAggregate: ["id", "userId"],
  NotificationMinAggregate: ["id", "userId", "message", "read", "createdAt"],
  NotificationMaxAggregate: ["id", "userId", "message", "read", "createdAt"],
  PersonCount: ["movies", "shows", "books", "songs"],
  PersonCountAggregate: ["id", "career", "name", "thumbnail", "bio", "age", "createdAt", "updatedAt", "_all"],
  PersonAvgAggregate: ["id", "age"],
  PersonSumAggregate: ["id", "age"],
  PersonMinAggregate: ["id", "name", "thumbnail", "bio", "age", "createdAt", "updatedAt"],
  PersonMaxAggregate: ["id", "name", "thumbnail", "bio", "age", "createdAt", "updatedAt"],
  MovieCount: ["actors", "platforms", "soundtrack"],
  MovieCountAggregate: ["id", "title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt", "_all"],
  MovieAvgAggregate: ["id"],
  MovieSumAggregate: ["id"],
  MovieMinAggregate: ["id", "title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt"],
  MovieMaxAggregate: ["id", "title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt"],
  ShowCount: ["actors", "platforms", "soundtrack"],
  ShowCountAggregate: ["id", "title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt", "_all"],
  ShowAvgAggregate: ["id"],
  ShowSumAggregate: ["id"],
  ShowMinAggregate: ["id", "title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt"],
  ShowMaxAggregate: ["id", "title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt"],
  PlatformCount: ["PlatformOnMovie", "PlatformOnShow"],
  PlatformCountAggregate: ["id", "name", "_all"],
  PlatformAvgAggregate: ["id"],
  PlatformSumAggregate: ["id"],
  PlatformMinAggregate: ["id", "name"],
  PlatformMaxAggregate: ["id", "name"],
  PlatformOnMovieCountAggregate: ["price", "platformId", "movieId", "_all"],
  PlatformOnMovieAvgAggregate: ["platformId", "movieId"],
  PlatformOnMovieSumAggregate: ["platformId", "movieId"],
  PlatformOnMovieMinAggregate: ["price", "platformId", "movieId"],
  PlatformOnMovieMaxAggregate: ["price", "platformId", "movieId"],
  PlatformOnShowCountAggregate: ["price", "platformId", "showId", "_all"],
  PlatformOnShowAvgAggregate: ["platformId", "showId"],
  PlatformOnShowSumAggregate: ["platformId", "showId"],
  PlatformOnShowMinAggregate: ["price", "platformId", "showId"],
  PlatformOnShowMaxAggregate: ["price", "platformId", "showId"],
  SongInMovieCountAggregate: ["timestamp", "description", "songId", "movieId", "_all"],
  SongInMovieAvgAggregate: ["songId", "movieId"],
  SongInMovieSumAggregate: ["songId", "movieId"],
  SongInMovieMinAggregate: ["timestamp", "description", "songId", "movieId"],
  SongInMovieMaxAggregate: ["timestamp", "description", "songId", "movieId"],
  SongInShowCountAggregate: ["timestamp", "description", "songId", "showId", "_all"],
  SongInShowAvgAggregate: ["songId", "showId"],
  SongInShowSumAggregate: ["songId", "showId"],
  SongInShowMinAggregate: ["timestamp", "description", "songId", "showId"],
  SongInShowMaxAggregate: ["timestamp", "description", "songId", "showId"],
  ActorInMovieCountAggregate: ["movieId", "personId", "role", "_all"],
  ActorInMovieAvgAggregate: ["movieId", "personId"],
  ActorInMovieSumAggregate: ["movieId", "personId"],
  ActorInMovieMinAggregate: ["movieId", "personId", "role"],
  ActorInMovieMaxAggregate: ["movieId", "personId", "role"],
  ActorInShowCountAggregate: ["showId", "personId", "role", "_all"],
  ActorInShowAvgAggregate: ["showId", "personId"],
  ActorInShowSumAggregate: ["showId", "personId"],
  ActorInShowMinAggregate: ["showId", "personId", "role"],
  ActorInShowMaxAggregate: ["showId", "personId", "role"],
  BookCount: ["authors"],
  BookCountAggregate: ["id", "title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt", "_all"],
  BookAvgAggregate: ["id"],
  BookSumAggregate: ["id"],
  BookMinAggregate: ["id", "title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt"],
  BookMaxAggregate: ["id", "title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt"],
  SongCount: ["artists", "songInShow", "songInMovie"],
  SongCountAggregate: ["id", "title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt", "_all"],
  SongAvgAggregate: ["id"],
  SongSumAggregate: ["id"],
  SongMinAggregate: ["id", "title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt"],
  SongMaxAggregate: ["id", "title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt"]
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
  FollowsWhereInput: ["AND", "OR", "NOT", "following", "followingId", "follower", "followerId"],
  FollowsOrderByWithRelationInput: ["following", "followingId", "follower", "followerId"],
  FollowsWhereUniqueInput: ["followerId_followingId"],
  FollowsOrderByWithAggregationInput: ["followingId", "followerId", "_count", "_avg", "_max", "_min", "_sum"],
  FollowsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "followingId", "followerId"],
  NotificationWhereInput: ["AND", "OR", "NOT", "id", "user", "userId", "message", "read", "createdAt"],
  NotificationOrderByWithRelationInput: ["id", "user", "userId", "message", "read", "createdAt"],
  NotificationWhereUniqueInput: ["id"],
  NotificationOrderByWithAggregationInput: ["id", "userId", "message", "read", "createdAt", "_count", "_avg", "_max", "_min", "_sum"],
  NotificationScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "message", "read", "createdAt"],
  PersonWhereInput: ["AND", "OR", "NOT", "id", "career", "name", "thumbnail", "bio", "age", "movies", "shows", "books", "songs", "createdAt", "updatedAt"],
  PersonOrderByWithRelationInput: ["id", "career", "name", "thumbnail", "bio", "age", "movies", "shows", "books", "songs", "createdAt", "updatedAt"],
  PersonWhereUniqueInput: ["id"],
  PersonOrderByWithAggregationInput: ["id", "career", "name", "thumbnail", "bio", "age", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  PersonScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "career", "name", "thumbnail", "bio", "age", "createdAt", "updatedAt"],
  MovieWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "thumbnail", "locked", "released", "actors", "platforms", "soundtrack", "createdAt", "updatedAt"],
  MovieOrderByWithRelationInput: ["id", "title", "description", "thumbnail", "locked", "released", "actors", "platforms", "soundtrack", "createdAt", "updatedAt"],
  MovieWhereUniqueInput: ["id"],
  MovieOrderByWithAggregationInput: ["id", "title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  MovieScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt"],
  ShowWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "thumbnail", "locked", "released", "actors", "platforms", "soundtrack", "createdAt", "updatedAt"],
  ShowOrderByWithRelationInput: ["id", "title", "description", "thumbnail", "locked", "released", "actors", "platforms", "soundtrack", "createdAt", "updatedAt"],
  ShowWhereUniqueInput: ["id"],
  ShowOrderByWithAggregationInput: ["id", "title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  ShowScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt"],
  PlatformWhereInput: ["AND", "OR", "NOT", "id", "name", "PlatformOnMovie", "PlatformOnShow"],
  PlatformOrderByWithRelationInput: ["id", "name", "PlatformOnMovie", "PlatformOnShow"],
  PlatformWhereUniqueInput: ["id"],
  PlatformOrderByWithAggregationInput: ["id", "name", "_count", "_avg", "_max", "_min", "_sum"],
  PlatformScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name"],
  PlatformOnMovieWhereInput: ["AND", "OR", "NOT", "price", "platform", "platformId", "movie", "movieId"],
  PlatformOnMovieOrderByWithRelationInput: ["price", "platform", "platformId", "movie", "movieId"],
  PlatformOnMovieWhereUniqueInput: ["platformId_movieId"],
  PlatformOnMovieOrderByWithAggregationInput: ["price", "platformId", "movieId", "_count", "_avg", "_max", "_min", "_sum"],
  PlatformOnMovieScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "price", "platformId", "movieId"],
  PlatformOnShowWhereInput: ["AND", "OR", "NOT", "price", "platform", "platformId", "show", "showId"],
  PlatformOnShowOrderByWithRelationInput: ["price", "platform", "platformId", "show", "showId"],
  PlatformOnShowWhereUniqueInput: ["platformId_showId"],
  PlatformOnShowOrderByWithAggregationInput: ["price", "platformId", "showId", "_count", "_avg", "_max", "_min", "_sum"],
  PlatformOnShowScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "price", "platformId", "showId"],
  SongInMovieWhereInput: ["AND", "OR", "NOT", "timestamp", "description", "song", "songId", "movie", "movieId"],
  SongInMovieOrderByWithRelationInput: ["timestamp", "description", "song", "songId", "movie", "movieId"],
  SongInMovieWhereUniqueInput: ["songId_movieId"],
  SongInMovieOrderByWithAggregationInput: ["timestamp", "description", "songId", "movieId", "_count", "_avg", "_max", "_min", "_sum"],
  SongInMovieScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "timestamp", "description", "songId", "movieId"],
  SongInShowWhereInput: ["AND", "OR", "NOT", "timestamp", "description", "song", "songId", "show", "showId"],
  SongInShowOrderByWithRelationInput: ["timestamp", "description", "song", "songId", "show", "showId"],
  SongInShowWhereUniqueInput: ["songId_showId"],
  SongInShowOrderByWithAggregationInput: ["timestamp", "description", "songId", "showId", "_count", "_avg", "_max", "_min", "_sum"],
  SongInShowScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "timestamp", "description", "songId", "showId"],
  ActorInMovieWhereInput: ["AND", "OR", "NOT", "movie", "movieId", "person", "personId", "role"],
  ActorInMovieOrderByWithRelationInput: ["movie", "movieId", "person", "personId", "role"],
  ActorInMovieWhereUniqueInput: ["personId_movieId"],
  ActorInMovieOrderByWithAggregationInput: ["movieId", "personId", "role", "_count", "_avg", "_max", "_min", "_sum"],
  ActorInMovieScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "movieId", "personId", "role"],
  ActorInShowWhereInput: ["AND", "OR", "NOT", "show", "showId", "person", "personId", "role"],
  ActorInShowOrderByWithRelationInput: ["show", "showId", "person", "personId", "role"],
  ActorInShowWhereUniqueInput: ["personId_showId"],
  ActorInShowOrderByWithAggregationInput: ["showId", "personId", "role", "_count", "_avg", "_max", "_min", "_sum"],
  ActorInShowScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "showId", "personId", "role"],
  BookWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "thumbnail", "locked", "released", "authors", "createdAt", "updatedAt"],
  BookOrderByWithRelationInput: ["id", "title", "description", "thumbnail", "locked", "released", "authors", "createdAt", "updatedAt"],
  BookWhereUniqueInput: ["id"],
  BookOrderByWithAggregationInput: ["id", "title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  BookScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt"],
  SongWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "thumbnail", "locked", "released", "artists", "songInShow", "songInMovie", "createdAt", "updatedAt"],
  SongOrderByWithRelationInput: ["id", "title", "description", "thumbnail", "locked", "released", "artists", "songInShow", "songInMovie", "createdAt", "updatedAt"],
  SongWhereUniqueInput: ["id"],
  SongOrderByWithAggregationInput: ["id", "title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  SongScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt"],
  UserCreateInput: ["confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "following", "followers", "notifications"],
  UserUpdateInput: ["confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "following", "followers", "notifications"],
  UserCreateManyInput: ["id", "confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt"],
  UserUpdateManyMutationInput: ["confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt"],
  FollowsCreateInput: ["following", "follower"],
  FollowsUpdateInput: ["following", "follower"],
  FollowsCreateManyInput: ["followingId", "followerId"],
  FollowsUpdateManyMutationInput: [],
  NotificationCreateInput: ["message", "read", "createdAt", "user"],
  NotificationUpdateInput: ["message", "read", "createdAt", "user"],
  NotificationCreateManyInput: ["id", "userId", "message", "read", "createdAt"],
  NotificationUpdateManyMutationInput: ["message", "read", "createdAt"],
  PersonCreateInput: ["name", "thumbnail", "bio", "age", "createdAt", "updatedAt", "career", "movies", "shows", "books", "songs"],
  PersonUpdateInput: ["name", "thumbnail", "bio", "age", "createdAt", "updatedAt", "career", "movies", "shows", "books", "songs"],
  PersonCreateManyInput: ["id", "name", "thumbnail", "bio", "age", "createdAt", "updatedAt", "career"],
  PersonUpdateManyMutationInput: ["name", "thumbnail", "bio", "age", "createdAt", "updatedAt", "career"],
  MovieCreateInput: ["title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt", "actors", "platforms", "soundtrack"],
  MovieUpdateInput: ["title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt", "actors", "platforms", "soundtrack"],
  MovieCreateManyInput: ["id", "title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt"],
  MovieUpdateManyMutationInput: ["title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt"],
  ShowCreateInput: ["title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt", "actors", "platforms", "soundtrack"],
  ShowUpdateInput: ["title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt", "actors", "platforms", "soundtrack"],
  ShowCreateManyInput: ["id", "title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt"],
  ShowUpdateManyMutationInput: ["title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt"],
  PlatformCreateInput: ["name", "PlatformOnMovie", "PlatformOnShow"],
  PlatformUpdateInput: ["name", "PlatformOnMovie", "PlatformOnShow"],
  PlatformCreateManyInput: ["id", "name"],
  PlatformUpdateManyMutationInput: ["name"],
  PlatformOnMovieCreateInput: ["price", "platform", "movie"],
  PlatformOnMovieUpdateInput: ["price", "platform", "movie"],
  PlatformOnMovieCreateManyInput: ["price", "platformId", "movieId"],
  PlatformOnMovieUpdateManyMutationInput: ["price"],
  PlatformOnShowCreateInput: ["price", "platform", "show"],
  PlatformOnShowUpdateInput: ["price", "platform", "show"],
  PlatformOnShowCreateManyInput: ["price", "platformId", "showId"],
  PlatformOnShowUpdateManyMutationInput: ["price"],
  SongInMovieCreateInput: ["timestamp", "description", "song", "movie"],
  SongInMovieUpdateInput: ["timestamp", "description", "song", "movie"],
  SongInMovieCreateManyInput: ["timestamp", "description", "songId", "movieId"],
  SongInMovieUpdateManyMutationInput: ["timestamp", "description"],
  SongInShowCreateInput: ["timestamp", "description", "song", "show"],
  SongInShowUpdateInput: ["timestamp", "description", "song", "show"],
  SongInShowCreateManyInput: ["timestamp", "description", "songId", "showId"],
  SongInShowUpdateManyMutationInput: ["timestamp", "description"],
  ActorInMovieCreateInput: ["role", "movie", "person"],
  ActorInMovieUpdateInput: ["role", "movie", "person"],
  ActorInMovieCreateManyInput: ["movieId", "personId", "role"],
  ActorInMovieUpdateManyMutationInput: ["role"],
  ActorInShowCreateInput: ["role", "show", "person"],
  ActorInShowUpdateInput: ["role", "show", "person"],
  ActorInShowCreateManyInput: ["showId", "personId", "role"],
  ActorInShowUpdateManyMutationInput: ["role"],
  BookCreateInput: ["title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt", "authors"],
  BookUpdateInput: ["title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt", "authors"],
  BookCreateManyInput: ["id", "title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt"],
  BookUpdateManyMutationInput: ["title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt"],
  SongCreateInput: ["title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt", "artists", "songInShow", "songInMovie"],
  SongUpdateInput: ["title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt", "artists", "songInShow", "songInMovie"],
  SongCreateManyInput: ["id", "title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt"],
  SongUpdateManyMutationInput: ["title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  BoolFilter: ["equals", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  EnumRoleFilter: ["equals", "in", "notIn", "not"],
  FollowsListRelationFilter: ["every", "some", "none"],
  NotificationListRelationFilter: ["every", "some", "none"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  FollowsOrderByRelationAggregateInput: ["_count"],
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
  FollowsFollowerIdFollowingIdCompoundUniqueInput: ["followerId", "followingId"],
  FollowsCountOrderByAggregateInput: ["followingId", "followerId"],
  FollowsAvgOrderByAggregateInput: ["followingId", "followerId"],
  FollowsMaxOrderByAggregateInput: ["followingId", "followerId"],
  FollowsMinOrderByAggregateInput: ["followingId", "followerId"],
  FollowsSumOrderByAggregateInput: ["followingId", "followerId"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NotificationCountOrderByAggregateInput: ["id", "userId", "message", "read", "createdAt"],
  NotificationAvgOrderByAggregateInput: ["id", "userId"],
  NotificationMaxOrderByAggregateInput: ["id", "userId", "message", "read", "createdAt"],
  NotificationMinOrderByAggregateInput: ["id", "userId", "message", "read", "createdAt"],
  NotificationSumOrderByAggregateInput: ["id", "userId"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  EnumCareerNullableListFilter: ["equals", "has", "hasEvery", "hasSome", "isEmpty"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  ActorInMovieListRelationFilter: ["every", "some", "none"],
  ActorInShowListRelationFilter: ["every", "some", "none"],
  BookListRelationFilter: ["every", "some", "none"],
  SongListRelationFilter: ["every", "some", "none"],
  ActorInMovieOrderByRelationAggregateInput: ["_count"],
  ActorInShowOrderByRelationAggregateInput: ["_count"],
  BookOrderByRelationAggregateInput: ["_count"],
  SongOrderByRelationAggregateInput: ["_count"],
  PersonCountOrderByAggregateInput: ["id", "career", "name", "thumbnail", "bio", "age", "createdAt", "updatedAt"],
  PersonAvgOrderByAggregateInput: ["id", "age"],
  PersonMaxOrderByAggregateInput: ["id", "name", "thumbnail", "bio", "age", "createdAt", "updatedAt"],
  PersonMinOrderByAggregateInput: ["id", "name", "thumbnail", "bio", "age", "createdAt", "updatedAt"],
  PersonSumOrderByAggregateInput: ["id", "age"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  PlatformOnMovieListRelationFilter: ["every", "some", "none"],
  SongInMovieListRelationFilter: ["every", "some", "none"],
  PlatformOnMovieOrderByRelationAggregateInput: ["_count"],
  SongInMovieOrderByRelationAggregateInput: ["_count"],
  MovieCountOrderByAggregateInput: ["id", "title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt"],
  MovieAvgOrderByAggregateInput: ["id"],
  MovieMaxOrderByAggregateInput: ["id", "title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt"],
  MovieMinOrderByAggregateInput: ["id", "title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt"],
  MovieSumOrderByAggregateInput: ["id"],
  DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  PlatformOnShowListRelationFilter: ["every", "some", "none"],
  SongInShowListRelationFilter: ["every", "some", "none"],
  PlatformOnShowOrderByRelationAggregateInput: ["_count"],
  SongInShowOrderByRelationAggregateInput: ["_count"],
  ShowCountOrderByAggregateInput: ["id", "title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt"],
  ShowAvgOrderByAggregateInput: ["id"],
  ShowMaxOrderByAggregateInput: ["id", "title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt"],
  ShowMinOrderByAggregateInput: ["id", "title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt"],
  ShowSumOrderByAggregateInput: ["id"],
  PlatformCountOrderByAggregateInput: ["id", "name"],
  PlatformAvgOrderByAggregateInput: ["id"],
  PlatformMaxOrderByAggregateInput: ["id", "name"],
  PlatformMinOrderByAggregateInput: ["id", "name"],
  PlatformSumOrderByAggregateInput: ["id"],
  PlatformRelationFilter: ["is", "isNot"],
  MovieRelationFilter: ["is", "isNot"],
  PlatformOnMoviePlatformIdMovieIdCompoundUniqueInput: ["platformId", "movieId"],
  PlatformOnMovieCountOrderByAggregateInput: ["price", "platformId", "movieId"],
  PlatformOnMovieAvgOrderByAggregateInput: ["platformId", "movieId"],
  PlatformOnMovieMaxOrderByAggregateInput: ["price", "platformId", "movieId"],
  PlatformOnMovieMinOrderByAggregateInput: ["price", "platformId", "movieId"],
  PlatformOnMovieSumOrderByAggregateInput: ["platformId", "movieId"],
  ShowRelationFilter: ["is", "isNot"],
  PlatformOnShowPlatformIdShowIdCompoundUniqueInput: ["platformId", "showId"],
  PlatformOnShowCountOrderByAggregateInput: ["price", "platformId", "showId"],
  PlatformOnShowAvgOrderByAggregateInput: ["platformId", "showId"],
  PlatformOnShowMaxOrderByAggregateInput: ["price", "platformId", "showId"],
  PlatformOnShowMinOrderByAggregateInput: ["price", "platformId", "showId"],
  PlatformOnShowSumOrderByAggregateInput: ["platformId", "showId"],
  SongRelationFilter: ["is", "isNot"],
  SongInMovieSongIdMovieIdCompoundUniqueInput: ["songId", "movieId"],
  SongInMovieCountOrderByAggregateInput: ["timestamp", "description", "songId", "movieId"],
  SongInMovieAvgOrderByAggregateInput: ["songId", "movieId"],
  SongInMovieMaxOrderByAggregateInput: ["timestamp", "description", "songId", "movieId"],
  SongInMovieMinOrderByAggregateInput: ["timestamp", "description", "songId", "movieId"],
  SongInMovieSumOrderByAggregateInput: ["songId", "movieId"],
  SongInShowSongIdShowIdCompoundUniqueInput: ["songId", "showId"],
  SongInShowCountOrderByAggregateInput: ["timestamp", "description", "songId", "showId"],
  SongInShowAvgOrderByAggregateInput: ["songId", "showId"],
  SongInShowMaxOrderByAggregateInput: ["timestamp", "description", "songId", "showId"],
  SongInShowMinOrderByAggregateInput: ["timestamp", "description", "songId", "showId"],
  SongInShowSumOrderByAggregateInput: ["songId", "showId"],
  PersonRelationFilter: ["is", "isNot"],
  ActorInMoviePersonIdMovieIdCompoundUniqueInput: ["personId", "movieId"],
  ActorInMovieCountOrderByAggregateInput: ["movieId", "personId", "role"],
  ActorInMovieAvgOrderByAggregateInput: ["movieId", "personId"],
  ActorInMovieMaxOrderByAggregateInput: ["movieId", "personId", "role"],
  ActorInMovieMinOrderByAggregateInput: ["movieId", "personId", "role"],
  ActorInMovieSumOrderByAggregateInput: ["movieId", "personId"],
  ActorInShowPersonIdShowIdCompoundUniqueInput: ["personId", "showId"],
  ActorInShowCountOrderByAggregateInput: ["showId", "personId", "role"],
  ActorInShowAvgOrderByAggregateInput: ["showId", "personId"],
  ActorInShowMaxOrderByAggregateInput: ["showId", "personId", "role"],
  ActorInShowMinOrderByAggregateInput: ["showId", "personId", "role"],
  ActorInShowSumOrderByAggregateInput: ["showId", "personId"],
  PersonListRelationFilter: ["every", "some", "none"],
  PersonOrderByRelationAggregateInput: ["_count"],
  BookCountOrderByAggregateInput: ["id", "title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt"],
  BookAvgOrderByAggregateInput: ["id"],
  BookMaxOrderByAggregateInput: ["id", "title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt"],
  BookMinOrderByAggregateInput: ["id", "title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt"],
  BookSumOrderByAggregateInput: ["id"],
  SongCountOrderByAggregateInput: ["id", "title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt"],
  SongAvgOrderByAggregateInput: ["id"],
  SongMaxOrderByAggregateInput: ["id", "title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt"],
  SongMinOrderByAggregateInput: ["id", "title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt"],
  SongSumOrderByAggregateInput: ["id"],
  FollowsCreateNestedManyWithoutFollowingInput: ["create", "connectOrCreate", "createMany", "connect"],
  FollowsCreateNestedManyWithoutFollowerInput: ["create", "connectOrCreate", "createMany", "connect"],
  NotificationCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  BoolFieldUpdateOperationsInput: ["set"],
  StringFieldUpdateOperationsInput: ["set"],
  EnumRoleFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  FollowsUpdateManyWithoutFollowingInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  FollowsUpdateManyWithoutFollowerInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  NotificationUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserCreateNestedOneWithoutFollowingInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedOneWithoutFollowersInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutFollowingInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserUpdateOneRequiredWithoutFollowersInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutNotificationsInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneWithoutNotificationsInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  PersonCreatecareerInput: ["set"],
  ActorInMovieCreateNestedManyWithoutPersonInput: ["create", "connectOrCreate", "createMany", "connect"],
  ActorInShowCreateNestedManyWithoutPersonInput: ["create", "connectOrCreate", "createMany", "connect"],
  BookCreateNestedManyWithoutAuthorsInput: ["create", "connectOrCreate", "connect"],
  SongCreateNestedManyWithoutArtistsInput: ["create", "connectOrCreate", "connect"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  PersonUpdatecareerInput: ["set", "push"],
  ActorInMovieUpdateManyWithoutPersonInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  ActorInShowUpdateManyWithoutPersonInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  BookUpdateManyWithoutAuthorsInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  SongUpdateManyWithoutArtistsInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  PersonCreateManycareerInput: ["set"],
  ActorInMovieCreateNestedManyWithoutMovieInput: ["create", "connectOrCreate", "createMany", "connect"],
  PlatformOnMovieCreateNestedManyWithoutMovieInput: ["create", "connectOrCreate", "createMany", "connect"],
  SongInMovieCreateNestedManyWithoutMovieInput: ["create", "connectOrCreate", "createMany", "connect"],
  NullableDateTimeFieldUpdateOperationsInput: ["set"],
  ActorInMovieUpdateManyWithoutMovieInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  PlatformOnMovieUpdateManyWithoutMovieInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  SongInMovieUpdateManyWithoutMovieInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  ActorInShowCreateNestedManyWithoutShowInput: ["create", "connectOrCreate", "createMany", "connect"],
  PlatformOnShowCreateNestedManyWithoutShowInput: ["create", "connectOrCreate", "createMany", "connect"],
  SongInShowCreateNestedManyWithoutShowInput: ["create", "connectOrCreate", "createMany", "connect"],
  ActorInShowUpdateManyWithoutShowInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  PlatformOnShowUpdateManyWithoutShowInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  SongInShowUpdateManyWithoutShowInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  PlatformOnMovieCreateNestedManyWithoutPlatformInput: ["create", "connectOrCreate", "createMany", "connect"],
  PlatformOnShowCreateNestedManyWithoutPlatformInput: ["create", "connectOrCreate", "createMany", "connect"],
  PlatformOnMovieUpdateManyWithoutPlatformInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  PlatformOnShowUpdateManyWithoutPlatformInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  PlatformCreateNestedOneWithoutPlatformOnMovieInput: ["create", "connectOrCreate", "connect"],
  MovieCreateNestedOneWithoutPlatformsInput: ["create", "connectOrCreate", "connect"],
  PlatformUpdateOneRequiredWithoutPlatformOnMovieInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  MovieUpdateOneRequiredWithoutPlatformsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PlatformCreateNestedOneWithoutPlatformOnShowInput: ["create", "connectOrCreate", "connect"],
  ShowCreateNestedOneWithoutPlatformsInput: ["create", "connectOrCreate", "connect"],
  PlatformUpdateOneRequiredWithoutPlatformOnShowInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ShowUpdateOneRequiredWithoutPlatformsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  SongCreateNestedOneWithoutSongInMovieInput: ["create", "connectOrCreate", "connect"],
  MovieCreateNestedOneWithoutSoundtrackInput: ["create", "connectOrCreate", "connect"],
  SongUpdateOneRequiredWithoutSongInMovieInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  MovieUpdateOneRequiredWithoutSoundtrackInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  SongCreateNestedOneWithoutSongInShowInput: ["create", "connectOrCreate", "connect"],
  ShowCreateNestedOneWithoutSoundtrackInput: ["create", "connectOrCreate", "connect"],
  SongUpdateOneRequiredWithoutSongInShowInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ShowUpdateOneRequiredWithoutSoundtrackInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  MovieCreateNestedOneWithoutActorsInput: ["create", "connectOrCreate", "connect"],
  PersonCreateNestedOneWithoutMoviesInput: ["create", "connectOrCreate", "connect"],
  MovieUpdateOneRequiredWithoutActorsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PersonUpdateOneRequiredWithoutMoviesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ShowCreateNestedOneWithoutActorsInput: ["create", "connectOrCreate", "connect"],
  PersonCreateNestedOneWithoutShowsInput: ["create", "connectOrCreate", "connect"],
  ShowUpdateOneRequiredWithoutActorsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PersonUpdateOneRequiredWithoutShowsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PersonCreateNestedManyWithoutBooksInput: ["create", "connectOrCreate", "connect"],
  PersonUpdateManyWithoutBooksInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  PersonCreateNestedManyWithoutSongsInput: ["create", "connectOrCreate", "connect"],
  SongInShowCreateNestedManyWithoutSongInput: ["create", "connectOrCreate", "createMany", "connect"],
  SongInMovieCreateNestedManyWithoutSongInput: ["create", "connectOrCreate", "createMany", "connect"],
  PersonUpdateManyWithoutSongsInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  SongInShowUpdateManyWithoutSongInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  SongInMovieUpdateManyWithoutSongInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
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
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  FollowsCreateWithoutFollowingInput: ["follower"],
  FollowsCreateOrConnectWithoutFollowingInput: ["where", "create"],
  FollowsCreateManyFollowingInputEnvelope: ["data", "skipDuplicates"],
  FollowsCreateWithoutFollowerInput: ["following"],
  FollowsCreateOrConnectWithoutFollowerInput: ["where", "create"],
  FollowsCreateManyFollowerInputEnvelope: ["data", "skipDuplicates"],
  NotificationCreateWithoutUserInput: ["message", "read", "createdAt"],
  NotificationCreateOrConnectWithoutUserInput: ["where", "create"],
  NotificationCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  FollowsUpsertWithWhereUniqueWithoutFollowingInput: ["where", "update", "create"],
  FollowsUpdateWithWhereUniqueWithoutFollowingInput: ["where", "data"],
  FollowsUpdateManyWithWhereWithoutFollowingInput: ["where", "data"],
  FollowsScalarWhereInput: ["AND", "OR", "NOT", "followingId", "followerId"],
  FollowsUpsertWithWhereUniqueWithoutFollowerInput: ["where", "update", "create"],
  FollowsUpdateWithWhereUniqueWithoutFollowerInput: ["where", "data"],
  FollowsUpdateManyWithWhereWithoutFollowerInput: ["where", "data"],
  NotificationUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  NotificationUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  NotificationUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  NotificationScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "message", "read", "createdAt"],
  UserCreateWithoutFollowingInput: ["confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "followers", "notifications"],
  UserCreateOrConnectWithoutFollowingInput: ["where", "create"],
  UserCreateWithoutFollowersInput: ["confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "following", "notifications"],
  UserCreateOrConnectWithoutFollowersInput: ["where", "create"],
  UserUpsertWithoutFollowingInput: ["update", "create"],
  UserUpdateWithoutFollowingInput: ["confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "followers", "notifications"],
  UserUpsertWithoutFollowersInput: ["update", "create"],
  UserUpdateWithoutFollowersInput: ["confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "following", "notifications"],
  UserCreateWithoutNotificationsInput: ["confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "following", "followers"],
  UserCreateOrConnectWithoutNotificationsInput: ["where", "create"],
  UserUpsertWithoutNotificationsInput: ["update", "create"],
  UserUpdateWithoutNotificationsInput: ["confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "following", "followers"],
  ActorInMovieCreateWithoutPersonInput: ["role", "movie"],
  ActorInMovieCreateOrConnectWithoutPersonInput: ["where", "create"],
  ActorInMovieCreateManyPersonInputEnvelope: ["data", "skipDuplicates"],
  ActorInShowCreateWithoutPersonInput: ["role", "show"],
  ActorInShowCreateOrConnectWithoutPersonInput: ["where", "create"],
  ActorInShowCreateManyPersonInputEnvelope: ["data", "skipDuplicates"],
  BookCreateWithoutAuthorsInput: ["title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt"],
  BookCreateOrConnectWithoutAuthorsInput: ["where", "create"],
  SongCreateWithoutArtistsInput: ["title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt", "songInShow", "songInMovie"],
  SongCreateOrConnectWithoutArtistsInput: ["where", "create"],
  ActorInMovieUpsertWithWhereUniqueWithoutPersonInput: ["where", "update", "create"],
  ActorInMovieUpdateWithWhereUniqueWithoutPersonInput: ["where", "data"],
  ActorInMovieUpdateManyWithWhereWithoutPersonInput: ["where", "data"],
  ActorInMovieScalarWhereInput: ["AND", "OR", "NOT", "movieId", "personId", "role"],
  ActorInShowUpsertWithWhereUniqueWithoutPersonInput: ["where", "update", "create"],
  ActorInShowUpdateWithWhereUniqueWithoutPersonInput: ["where", "data"],
  ActorInShowUpdateManyWithWhereWithoutPersonInput: ["where", "data"],
  ActorInShowScalarWhereInput: ["AND", "OR", "NOT", "showId", "personId", "role"],
  BookUpsertWithWhereUniqueWithoutAuthorsInput: ["where", "update", "create"],
  BookUpdateWithWhereUniqueWithoutAuthorsInput: ["where", "data"],
  BookUpdateManyWithWhereWithoutAuthorsInput: ["where", "data"],
  BookScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt"],
  SongUpsertWithWhereUniqueWithoutArtistsInput: ["where", "update", "create"],
  SongUpdateWithWhereUniqueWithoutArtistsInput: ["where", "data"],
  SongUpdateManyWithWhereWithoutArtistsInput: ["where", "data"],
  SongScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt"],
  ActorInMovieCreateWithoutMovieInput: ["role", "person"],
  ActorInMovieCreateOrConnectWithoutMovieInput: ["where", "create"],
  ActorInMovieCreateManyMovieInputEnvelope: ["data", "skipDuplicates"],
  PlatformOnMovieCreateWithoutMovieInput: ["price", "platform"],
  PlatformOnMovieCreateOrConnectWithoutMovieInput: ["where", "create"],
  PlatformOnMovieCreateManyMovieInputEnvelope: ["data", "skipDuplicates"],
  SongInMovieCreateWithoutMovieInput: ["timestamp", "description", "song"],
  SongInMovieCreateOrConnectWithoutMovieInput: ["where", "create"],
  SongInMovieCreateManyMovieInputEnvelope: ["data", "skipDuplicates"],
  ActorInMovieUpsertWithWhereUniqueWithoutMovieInput: ["where", "update", "create"],
  ActorInMovieUpdateWithWhereUniqueWithoutMovieInput: ["where", "data"],
  ActorInMovieUpdateManyWithWhereWithoutMovieInput: ["where", "data"],
  PlatformOnMovieUpsertWithWhereUniqueWithoutMovieInput: ["where", "update", "create"],
  PlatformOnMovieUpdateWithWhereUniqueWithoutMovieInput: ["where", "data"],
  PlatformOnMovieUpdateManyWithWhereWithoutMovieInput: ["where", "data"],
  PlatformOnMovieScalarWhereInput: ["AND", "OR", "NOT", "price", "platformId", "movieId"],
  SongInMovieUpsertWithWhereUniqueWithoutMovieInput: ["where", "update", "create"],
  SongInMovieUpdateWithWhereUniqueWithoutMovieInput: ["where", "data"],
  SongInMovieUpdateManyWithWhereWithoutMovieInput: ["where", "data"],
  SongInMovieScalarWhereInput: ["AND", "OR", "NOT", "timestamp", "description", "songId", "movieId"],
  ActorInShowCreateWithoutShowInput: ["role", "person"],
  ActorInShowCreateOrConnectWithoutShowInput: ["where", "create"],
  ActorInShowCreateManyShowInputEnvelope: ["data", "skipDuplicates"],
  PlatformOnShowCreateWithoutShowInput: ["price", "platform"],
  PlatformOnShowCreateOrConnectWithoutShowInput: ["where", "create"],
  PlatformOnShowCreateManyShowInputEnvelope: ["data", "skipDuplicates"],
  SongInShowCreateWithoutShowInput: ["timestamp", "description", "song"],
  SongInShowCreateOrConnectWithoutShowInput: ["where", "create"],
  SongInShowCreateManyShowInputEnvelope: ["data", "skipDuplicates"],
  ActorInShowUpsertWithWhereUniqueWithoutShowInput: ["where", "update", "create"],
  ActorInShowUpdateWithWhereUniqueWithoutShowInput: ["where", "data"],
  ActorInShowUpdateManyWithWhereWithoutShowInput: ["where", "data"],
  PlatformOnShowUpsertWithWhereUniqueWithoutShowInput: ["where", "update", "create"],
  PlatformOnShowUpdateWithWhereUniqueWithoutShowInput: ["where", "data"],
  PlatformOnShowUpdateManyWithWhereWithoutShowInput: ["where", "data"],
  PlatformOnShowScalarWhereInput: ["AND", "OR", "NOT", "price", "platformId", "showId"],
  SongInShowUpsertWithWhereUniqueWithoutShowInput: ["where", "update", "create"],
  SongInShowUpdateWithWhereUniqueWithoutShowInput: ["where", "data"],
  SongInShowUpdateManyWithWhereWithoutShowInput: ["where", "data"],
  SongInShowScalarWhereInput: ["AND", "OR", "NOT", "timestamp", "description", "songId", "showId"],
  PlatformOnMovieCreateWithoutPlatformInput: ["price", "movie"],
  PlatformOnMovieCreateOrConnectWithoutPlatformInput: ["where", "create"],
  PlatformOnMovieCreateManyPlatformInputEnvelope: ["data", "skipDuplicates"],
  PlatformOnShowCreateWithoutPlatformInput: ["price", "show"],
  PlatformOnShowCreateOrConnectWithoutPlatformInput: ["where", "create"],
  PlatformOnShowCreateManyPlatformInputEnvelope: ["data", "skipDuplicates"],
  PlatformOnMovieUpsertWithWhereUniqueWithoutPlatformInput: ["where", "update", "create"],
  PlatformOnMovieUpdateWithWhereUniqueWithoutPlatformInput: ["where", "data"],
  PlatformOnMovieUpdateManyWithWhereWithoutPlatformInput: ["where", "data"],
  PlatformOnShowUpsertWithWhereUniqueWithoutPlatformInput: ["where", "update", "create"],
  PlatformOnShowUpdateWithWhereUniqueWithoutPlatformInput: ["where", "data"],
  PlatformOnShowUpdateManyWithWhereWithoutPlatformInput: ["where", "data"],
  PlatformCreateWithoutPlatformOnMovieInput: ["name", "PlatformOnShow"],
  PlatformCreateOrConnectWithoutPlatformOnMovieInput: ["where", "create"],
  MovieCreateWithoutPlatformsInput: ["title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt", "actors", "soundtrack"],
  MovieCreateOrConnectWithoutPlatformsInput: ["where", "create"],
  PlatformUpsertWithoutPlatformOnMovieInput: ["update", "create"],
  PlatformUpdateWithoutPlatformOnMovieInput: ["name", "PlatformOnShow"],
  MovieUpsertWithoutPlatformsInput: ["update", "create"],
  MovieUpdateWithoutPlatformsInput: ["title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt", "actors", "soundtrack"],
  PlatformCreateWithoutPlatformOnShowInput: ["name", "PlatformOnMovie"],
  PlatformCreateOrConnectWithoutPlatformOnShowInput: ["where", "create"],
  ShowCreateWithoutPlatformsInput: ["title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt", "actors", "soundtrack"],
  ShowCreateOrConnectWithoutPlatformsInput: ["where", "create"],
  PlatformUpsertWithoutPlatformOnShowInput: ["update", "create"],
  PlatformUpdateWithoutPlatformOnShowInput: ["name", "PlatformOnMovie"],
  ShowUpsertWithoutPlatformsInput: ["update", "create"],
  ShowUpdateWithoutPlatformsInput: ["title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt", "actors", "soundtrack"],
  SongCreateWithoutSongInMovieInput: ["title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt", "artists", "songInShow"],
  SongCreateOrConnectWithoutSongInMovieInput: ["where", "create"],
  MovieCreateWithoutSoundtrackInput: ["title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt", "actors", "platforms"],
  MovieCreateOrConnectWithoutSoundtrackInput: ["where", "create"],
  SongUpsertWithoutSongInMovieInput: ["update", "create"],
  SongUpdateWithoutSongInMovieInput: ["title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt", "artists", "songInShow"],
  MovieUpsertWithoutSoundtrackInput: ["update", "create"],
  MovieUpdateWithoutSoundtrackInput: ["title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt", "actors", "platforms"],
  SongCreateWithoutSongInShowInput: ["title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt", "artists", "songInMovie"],
  SongCreateOrConnectWithoutSongInShowInput: ["where", "create"],
  ShowCreateWithoutSoundtrackInput: ["title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt", "actors", "platforms"],
  ShowCreateOrConnectWithoutSoundtrackInput: ["where", "create"],
  SongUpsertWithoutSongInShowInput: ["update", "create"],
  SongUpdateWithoutSongInShowInput: ["title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt", "artists", "songInMovie"],
  ShowUpsertWithoutSoundtrackInput: ["update", "create"],
  ShowUpdateWithoutSoundtrackInput: ["title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt", "actors", "platforms"],
  MovieCreateWithoutActorsInput: ["title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt", "platforms", "soundtrack"],
  MovieCreateOrConnectWithoutActorsInput: ["where", "create"],
  PersonCreateWithoutMoviesInput: ["name", "thumbnail", "bio", "age", "createdAt", "updatedAt", "career", "shows", "books", "songs"],
  PersonCreateOrConnectWithoutMoviesInput: ["where", "create"],
  MovieUpsertWithoutActorsInput: ["update", "create"],
  MovieUpdateWithoutActorsInput: ["title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt", "platforms", "soundtrack"],
  PersonUpsertWithoutMoviesInput: ["update", "create"],
  PersonUpdateWithoutMoviesInput: ["name", "thumbnail", "bio", "age", "createdAt", "updatedAt", "career", "shows", "books", "songs"],
  ShowCreateWithoutActorsInput: ["title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt", "platforms", "soundtrack"],
  ShowCreateOrConnectWithoutActorsInput: ["where", "create"],
  PersonCreateWithoutShowsInput: ["name", "thumbnail", "bio", "age", "createdAt", "updatedAt", "career", "movies", "books", "songs"],
  PersonCreateOrConnectWithoutShowsInput: ["where", "create"],
  ShowUpsertWithoutActorsInput: ["update", "create"],
  ShowUpdateWithoutActorsInput: ["title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt", "platforms", "soundtrack"],
  PersonUpsertWithoutShowsInput: ["update", "create"],
  PersonUpdateWithoutShowsInput: ["name", "thumbnail", "bio", "age", "createdAt", "updatedAt", "career", "movies", "books", "songs"],
  PersonCreateWithoutBooksInput: ["name", "thumbnail", "bio", "age", "createdAt", "updatedAt", "career", "movies", "shows", "songs"],
  PersonCreateOrConnectWithoutBooksInput: ["where", "create"],
  PersonUpsertWithWhereUniqueWithoutBooksInput: ["where", "update", "create"],
  PersonUpdateWithWhereUniqueWithoutBooksInput: ["where", "data"],
  PersonUpdateManyWithWhereWithoutBooksInput: ["where", "data"],
  PersonScalarWhereInput: ["AND", "OR", "NOT", "id", "career", "name", "thumbnail", "bio", "age", "createdAt", "updatedAt"],
  PersonCreateWithoutSongsInput: ["name", "thumbnail", "bio", "age", "createdAt", "updatedAt", "career", "movies", "shows", "books"],
  PersonCreateOrConnectWithoutSongsInput: ["where", "create"],
  SongInShowCreateWithoutSongInput: ["timestamp", "description", "show"],
  SongInShowCreateOrConnectWithoutSongInput: ["where", "create"],
  SongInShowCreateManySongInputEnvelope: ["data", "skipDuplicates"],
  SongInMovieCreateWithoutSongInput: ["timestamp", "description", "movie"],
  SongInMovieCreateOrConnectWithoutSongInput: ["where", "create"],
  SongInMovieCreateManySongInputEnvelope: ["data", "skipDuplicates"],
  PersonUpsertWithWhereUniqueWithoutSongsInput: ["where", "update", "create"],
  PersonUpdateWithWhereUniqueWithoutSongsInput: ["where", "data"],
  PersonUpdateManyWithWhereWithoutSongsInput: ["where", "data"],
  SongInShowUpsertWithWhereUniqueWithoutSongInput: ["where", "update", "create"],
  SongInShowUpdateWithWhereUniqueWithoutSongInput: ["where", "data"],
  SongInShowUpdateManyWithWhereWithoutSongInput: ["where", "data"],
  SongInMovieUpsertWithWhereUniqueWithoutSongInput: ["where", "update", "create"],
  SongInMovieUpdateWithWhereUniqueWithoutSongInput: ["where", "data"],
  SongInMovieUpdateManyWithWhereWithoutSongInput: ["where", "data"],
  FollowsCreateManyFollowingInput: ["followerId"],
  FollowsCreateManyFollowerInput: ["followingId"],
  NotificationCreateManyUserInput: ["id", "message", "read", "createdAt"],
  FollowsUpdateWithoutFollowingInput: ["follower"],
  FollowsUpdateWithoutFollowerInput: ["following"],
  NotificationUpdateWithoutUserInput: ["message", "read", "createdAt"],
  ActorInMovieCreateManyPersonInput: ["movieId", "role"],
  ActorInShowCreateManyPersonInput: ["showId", "role"],
  ActorInMovieUpdateWithoutPersonInput: ["role", "movie"],
  ActorInShowUpdateWithoutPersonInput: ["role", "show"],
  BookUpdateWithoutAuthorsInput: ["title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt"],
  SongUpdateWithoutArtistsInput: ["title", "description", "thumbnail", "locked", "released", "createdAt", "updatedAt", "songInShow", "songInMovie"],
  ActorInMovieCreateManyMovieInput: ["personId", "role"],
  PlatformOnMovieCreateManyMovieInput: ["price", "platformId"],
  SongInMovieCreateManyMovieInput: ["timestamp", "description", "songId"],
  ActorInMovieUpdateWithoutMovieInput: ["role", "person"],
  PlatformOnMovieUpdateWithoutMovieInput: ["price", "platform"],
  SongInMovieUpdateWithoutMovieInput: ["timestamp", "description", "song"],
  ActorInShowCreateManyShowInput: ["personId", "role"],
  PlatformOnShowCreateManyShowInput: ["price", "platformId"],
  SongInShowCreateManyShowInput: ["timestamp", "description", "songId"],
  ActorInShowUpdateWithoutShowInput: ["role", "person"],
  PlatformOnShowUpdateWithoutShowInput: ["price", "platform"],
  SongInShowUpdateWithoutShowInput: ["timestamp", "description", "song"],
  PlatformOnMovieCreateManyPlatformInput: ["price", "movieId"],
  PlatformOnShowCreateManyPlatformInput: ["price", "showId"],
  PlatformOnMovieUpdateWithoutPlatformInput: ["price", "movie"],
  PlatformOnShowUpdateWithoutPlatformInput: ["price", "show"],
  PersonUpdateWithoutBooksInput: ["name", "thumbnail", "bio", "age", "createdAt", "updatedAt", "career", "movies", "shows", "songs"],
  SongInShowCreateManySongInput: ["timestamp", "description", "showId"],
  SongInMovieCreateManySongInput: ["timestamp", "description", "movieId"],
  PersonUpdateWithoutSongsInput: ["name", "thumbnail", "bio", "age", "createdAt", "updatedAt", "career", "movies", "shows", "books"],
  SongInShowUpdateWithoutSongInput: ["timestamp", "description", "show"],
  SongInMovieUpdateWithoutSongInput: ["timestamp", "description", "movie"]
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

