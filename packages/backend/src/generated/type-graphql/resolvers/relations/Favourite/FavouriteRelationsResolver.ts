import * as TypeGraphQL from "type-graphql";
import { Book } from "../../../models/Book";
import { Favourite } from "../../../models/Favourite";
import { Movie } from "../../../models/Movie";
import { Person } from "../../../models/Person";
import { Show } from "../../../models/Show";
import { Song } from "../../../models/Song";
import { User } from "../../../models/User";
import { FavouriteBooksArgs } from "./args/FavouriteBooksArgs";
import { FavouriteMoviesArgs } from "./args/FavouriteMoviesArgs";
import { FavouritePeopleArgs } from "./args/FavouritePeopleArgs";
import { FavouriteShowsArgs } from "./args/FavouriteShowsArgs";
import { FavouriteSongsArgs } from "./args/FavouriteSongsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Favourite)
export class FavouriteRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() favourite: Favourite, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).favourite.findUnique({
      where: {
        id: favourite.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => [Movie], {
    nullable: false
  })
  async movies(@TypeGraphQL.Root() favourite: Favourite, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FavouriteMoviesArgs): Promise<Movie[]> {
    return getPrismaFromContext(ctx).favourite.findUnique({
      where: {
        id: favourite.id,
      },
    }).movies(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Show], {
    nullable: false
  })
  async shows(@TypeGraphQL.Root() favourite: Favourite, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FavouriteShowsArgs): Promise<Show[]> {
    return getPrismaFromContext(ctx).favourite.findUnique({
      where: {
        id: favourite.id,
      },
    }).shows(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Song], {
    nullable: false
  })
  async songs(@TypeGraphQL.Root() favourite: Favourite, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FavouriteSongsArgs): Promise<Song[]> {
    return getPrismaFromContext(ctx).favourite.findUnique({
      where: {
        id: favourite.id,
      },
    }).songs(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Book], {
    nullable: false
  })
  async books(@TypeGraphQL.Root() favourite: Favourite, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FavouriteBooksArgs): Promise<Book[]> {
    return getPrismaFromContext(ctx).favourite.findUnique({
      where: {
        id: favourite.id,
      },
    }).books(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Person], {
    nullable: false
  })
  async people(@TypeGraphQL.Root() favourite: Favourite, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FavouritePeopleArgs): Promise<Person[]> {
    return getPrismaFromContext(ctx).favourite.findUnique({
      where: {
        id: favourite.id,
      },
    }).people(args);
  }
}
