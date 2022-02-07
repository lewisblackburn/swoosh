import * as TypeGraphQL from "type-graphql";
import { ActorInMovie } from "../../../models/ActorInMovie";
import { ActorInShow } from "../../../models/ActorInShow";
import { ArtistInSong } from "../../../models/ArtistInSong";
import { AuthorInBook } from "../../../models/AuthorInBook";
import { Person } from "../../../models/Person";
import { PersonBooksArgs } from "./args/PersonBooksArgs";
import { PersonMoviesArgs } from "./args/PersonMoviesArgs";
import { PersonShowsArgs } from "./args/PersonShowsArgs";
import { PersonSongsArgs } from "./args/PersonSongsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Person)
export class PersonRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [ActorInMovie], {
    nullable: false
  })
  async movies(@TypeGraphQL.Root() person: Person, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PersonMoviesArgs): Promise<ActorInMovie[]> {
    return getPrismaFromContext(ctx).person.findUnique({
      where: {
        id: person.id,
      },
    }).movies(args);
  }

  @TypeGraphQL.FieldResolver(_type => [ActorInShow], {
    nullable: false
  })
  async shows(@TypeGraphQL.Root() person: Person, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PersonShowsArgs): Promise<ActorInShow[]> {
    return getPrismaFromContext(ctx).person.findUnique({
      where: {
        id: person.id,
      },
    }).shows(args);
  }

  @TypeGraphQL.FieldResolver(_type => [AuthorInBook], {
    nullable: false
  })
  async books(@TypeGraphQL.Root() person: Person, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PersonBooksArgs): Promise<AuthorInBook[]> {
    return getPrismaFromContext(ctx).person.findUnique({
      where: {
        id: person.id,
      },
    }).books(args);
  }

  @TypeGraphQL.FieldResolver(_type => [ArtistInSong], {
    nullable: false
  })
  async songs(@TypeGraphQL.Root() person: Person, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PersonSongsArgs): Promise<ArtistInSong[]> {
    return getPrismaFromContext(ctx).person.findUnique({
      where: {
        id: person.id,
      },
    }).songs(args);
  }
}
