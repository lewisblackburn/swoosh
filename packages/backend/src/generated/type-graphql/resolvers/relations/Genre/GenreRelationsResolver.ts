import * as TypeGraphQL from "type-graphql";
import { Book } from "../../../models/Book";
import { Genre } from "../../../models/Genre";
import { Movie } from "../../../models/Movie";
import { Show } from "../../../models/Show";
import { Song } from "../../../models/Song";
import { GenreBooksArgs } from "./args/GenreBooksArgs";
import { GenreMoviesArgs } from "./args/GenreMoviesArgs";
import { GenreShowsArgs } from "./args/GenreShowsArgs";
import { GenreSongsArgs } from "./args/GenreSongsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Genre)
export class GenreRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Movie], {
    nullable: false
  })
  async movies(@TypeGraphQL.Root() genre: Genre, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: GenreMoviesArgs): Promise<Movie[]> {
    return getPrismaFromContext(ctx).genre.findUnique({
      where: {
        id: genre.id,
      },
    }).movies(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Show], {
    nullable: false
  })
  async shows(@TypeGraphQL.Root() genre: Genre, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: GenreShowsArgs): Promise<Show[]> {
    return getPrismaFromContext(ctx).genre.findUnique({
      where: {
        id: genre.id,
      },
    }).shows(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Song], {
    nullable: false
  })
  async songs(@TypeGraphQL.Root() genre: Genre, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: GenreSongsArgs): Promise<Song[]> {
    return getPrismaFromContext(ctx).genre.findUnique({
      where: {
        id: genre.id,
      },
    }).songs(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Book], {
    nullable: false
  })
  async books(@TypeGraphQL.Root() genre: Genre, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: GenreBooksArgs): Promise<Book[]> {
    return getPrismaFromContext(ctx).genre.findUnique({
      where: {
        id: genre.id,
      },
    }).books(args);
  }
}
