import * as TypeGraphQL from "type-graphql";
import { Book } from "../../../models/Book";
import { Movie } from "../../../models/Movie";
import { Song } from "../../../models/Song";
import { User } from "../../../models/User";
import { UserBooksArgs } from "./args/UserBooksArgs";
import { UserFollowersArgs } from "./args/UserFollowersArgs";
import { UserFollowingArgs } from "./args/UserFollowingArgs";
import { UserMoviesArgs } from "./args/UserMoviesArgs";
import { UserSongsArgs } from "./args/UserSongsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Movie], {
    nullable: false
  })
  async movies(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserMoviesArgs): Promise<Movie[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).movies(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Book], {
    nullable: false
  })
  async books(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserBooksArgs): Promise<Book[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).books(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Song], {
    nullable: false
  })
  async songs(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserSongsArgs): Promise<Song[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).songs(args);
  }

  @TypeGraphQL.FieldResolver(_type => [User], {
    nullable: false
  })
  async following(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserFollowingArgs): Promise<User[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).following(args);
  }

  @TypeGraphQL.FieldResolver(_type => [User], {
    nullable: false
  })
  async followers(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserFollowersArgs): Promise<User[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).followers(args);
  }
}
