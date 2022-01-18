import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewLikeWhereInput } from "../inputs/MovieReviewLikeWhereInput";

@TypeGraphQL.InputType("MovieReviewLikeListRelationFilter", {
  isAbstract: true
})
export class MovieReviewLikeListRelationFilter {
  @TypeGraphQL.Field(_type => MovieReviewLikeWhereInput, {
    nullable: true
  })
  every?: MovieReviewLikeWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovieReviewLikeWhereInput, {
    nullable: true
  })
  some?: MovieReviewLikeWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovieReviewLikeWhereInput, {
    nullable: true
  })
  none?: MovieReviewLikeWhereInput | undefined;
}
