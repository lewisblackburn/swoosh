import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewLikeUpdateWithoutUserInput } from "../inputs/MovieReviewLikeUpdateWithoutUserInput";
import { MovieReviewLikeWhereUniqueInput } from "../inputs/MovieReviewLikeWhereUniqueInput";

@TypeGraphQL.InputType("MovieReviewLikeUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class MovieReviewLikeUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => MovieReviewLikeWhereUniqueInput, {
    nullable: false
  })
  where!: MovieReviewLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieReviewLikeUpdateWithoutUserInput, {
    nullable: false
  })
  data!: MovieReviewLikeUpdateWithoutUserInput;
}
