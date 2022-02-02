import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MovieReviewRelationFilter } from "../inputs/MovieReviewRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("MovieReviewLikeWhereInput", {
  isAbstract: true
})
export class MovieReviewLikeWhereInput {
  @TypeGraphQL.Field(_type => [MovieReviewLikeWhereInput], {
    nullable: true
  })
  AND?: MovieReviewLikeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikeWhereInput], {
    nullable: true
  })
  OR?: MovieReviewLikeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikeWhereInput], {
    nullable: true
  })
  NOT?: MovieReviewLikeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  reviewUserId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  reviewMovieId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => MovieReviewRelationFilter, {
    nullable: true
  })
  movieReview?: MovieReviewRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
