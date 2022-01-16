import * as TypeGraphQL from "type-graphql";
import { Movie } from "../../../models/Movie";
import { Rating } from "../../../models/Rating";
import { Show } from "../../../models/Show";
import { RatingMoviesArgs } from "./args/RatingMoviesArgs";
import { RatingShowsArgs } from "./args/RatingShowsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Rating)
export class RatingRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Movie], {
    nullable: false
  })
  async movies(@TypeGraphQL.Root() rating: Rating, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: RatingMoviesArgs): Promise<Movie[]> {
    return getPrismaFromContext(ctx).rating.findUnique({
      where: {
        id: rating.id,
      },
    }).movies(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Show], {
    nullable: false
  })
  async shows(@TypeGraphQL.Root() rating: Rating, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: RatingShowsArgs): Promise<Show[]> {
    return getPrismaFromContext(ctx).rating.findUnique({
      where: {
        id: rating.id,
      },
    }).shows(args);
  }
}
