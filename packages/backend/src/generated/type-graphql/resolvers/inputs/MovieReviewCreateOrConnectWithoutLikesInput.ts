import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewCreateWithoutLikesInput } from "../inputs/MovieReviewCreateWithoutLikesInput";
import { MovieReviewWhereUniqueInput } from "../inputs/MovieReviewWhereUniqueInput";

@TypeGraphQL.InputType("MovieReviewCreateOrConnectWithoutLikesInput", {
  isAbstract: true
})
export class MovieReviewCreateOrConnectWithoutLikesInput {
  @TypeGraphQL.Field(_type => MovieReviewWhereUniqueInput, {
    nullable: false
  })
  where!: MovieReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieReviewCreateWithoutLikesInput, {
    nullable: false
  })
  create!: MovieReviewCreateWithoutLikesInput;
}
