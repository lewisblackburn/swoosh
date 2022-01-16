import * as TypeGraphQL from "type-graphql";
import { ActorInMovie } from "../../../models/ActorInMovie";
import { ActorInShow } from "../../../models/ActorInShow";
import { Book } from "../../../models/Book";
import { Favourite } from "../../../models/Favourite";
import { Person } from "../../../models/Person";
import { Song } from "../../../models/Song";
import { PersonBooksArgs } from "./args/PersonBooksArgs";
import { PersonFavouritesArgs } from "./args/PersonFavouritesArgs";
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

  @TypeGraphQL.FieldResolver(_type => [Book], {
    nullable: false
  })
  async books(@TypeGraphQL.Root() person: Person, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PersonBooksArgs): Promise<Book[]> {
    return getPrismaFromContext(ctx).person.findUnique({
      where: {
        id: person.id,
      },
    }).books(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Song], {
    nullable: false
  })
  async songs(@TypeGraphQL.Root() person: Person, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PersonSongsArgs): Promise<Song[]> {
    return getPrismaFromContext(ctx).person.findUnique({
      where: {
        id: person.id,
      },
    }).songs(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Favourite], {
    nullable: false
  })
  async favourites(@TypeGraphQL.Root() person: Person, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PersonFavouritesArgs): Promise<Favourite[]> {
    return getPrismaFromContext(ctx).person.findUnique({
      where: {
        id: person.id,
      },
    }).favourites(args);
  }
}
