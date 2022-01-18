import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewLikeCreateWithoutUserInput } from "../inputs/MovieReviewLikeCreateWithoutUserInput";
import { MovieReviewLikeUpdateWithoutUserInput } from "../inputs/MovieReviewLikeUpdateWithoutUserInput";
import { MovieReviewLikeWhereUniqueInput } from "../inputs/MovieReviewLikeWhereUniqueInput";

@TypeGraphQL.InputType("MovieReviewLikeUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class MovieReviewLikeUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => MovieReviewLikeWhereUniqueInput, {
    nullable: false
  })
  where!: MovieReviewLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieReviewLikeUpdateWithoutUserInput, {
    nullable: false
  })
  update!: MovieReviewLikeUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => MovieReviewLikeCreateWithoutUserInput, {
    nullable: false
  })
  create!: MovieReviewLikeCreateWithoutUserInput;
}
