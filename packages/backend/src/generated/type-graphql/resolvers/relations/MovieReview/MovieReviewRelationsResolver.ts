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
        id: movieReview.id,
      },
    }).likes(args);
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async User(@TypeGraphQL.Root() movieReview: MovieReview, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).movieReview.findUnique({
      where: {
        id: movieReview.id,
      },
    }).User({});
  }

  @TypeGraphQL.FieldResolver(_type => Movie, {
    nullable: true
  })
  async Movie(@TypeGraphQL.Root() movieReview: MovieReview, @TypeGraphQL.Ctx() ctx: any): Promise<Movie | null> {
    return getPrismaFromContext(ctx).movieReview.findUnique({
      where: {
        id: movieReview.id,
      },
    }).Movie({});
  }
}
