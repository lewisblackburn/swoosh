import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewLikeCreateWithoutUserInput } from "../inputs/MovieReviewLikeCreateWithoutUserInput";
import { MovieReviewLikeWhereUniqueInput } from "../inputs/MovieReviewLikeWhereUniqueInput";

@TypeGraphQL.InputType("MovieReviewLikeCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class MovieReviewLikeCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => MovieReviewLikeWhereUniqueInput, {
    nullable: false
  })
  where!: MovieReviewLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieReviewLikeCreateWithoutUserInput, {
    nullable: false
  })
  create!: MovieReviewLikeCreateWithoutUserInput;
}
