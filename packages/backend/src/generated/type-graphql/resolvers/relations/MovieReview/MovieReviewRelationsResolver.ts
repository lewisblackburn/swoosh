import * as TypeGraphQL from "type-graphql";
import { Movie } from "../../../models/Movie";
import { MovieReview } from "../../../models/MovieReview";
import { MovieReviewLike } from "../../../models/MovieReviewLike";
import { User } from "../../../models/User";
import { MovieReviewLikesArgs } from "./args/MovieReviewLikesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieReview)
export class MovieReviewRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [MovieReviewLike], {
    nullable: false
  })
  async likes(@TypeGraphQL.Root() movieReview: MovieReview, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: MovieReviewLikesArgs): Promise<MovieReviewLike[]> {
    return getPrismaFromContext(ctx).movieReview.findUnique({
      where: {
        userId_movieId: {
          userId: movieReview.userId,
          movieId: movieReview.movieId,
        },
      },
    }).likes(args);
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() movieReview: MovieReview, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).movieReview.findUnique({
      where: {
        userId_movieId: {
          userId: movieReview.userId,
          movieId: movieReview.movieId,
        },
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => Movie, {
    nullable: false
  })
  async movie(@TypeGraphQL.Root() movieReview: MovieReview, @TypeGraphQL.Ctx() ctx: any): Promise<Movie> {
    return getPrismaFromContext(ctx).movieReview.findUnique({
      where: {
        userId_movieId: {
          userId: movieReview.userId,
          movieId: movieReview.movieId,
        },
      },
    }).movie({});
  }
}
