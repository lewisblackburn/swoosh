import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewCreateWithoutUserInput } from "../inputs/MovieReviewCreateWithoutUserInput";
import { MovieReviewWhereUniqueInput } from "../inputs/MovieReviewWhereUniqueInput";

@TypeGraphQL.InputType("MovieReviewCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class MovieReviewCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => MovieReviewWhereUniqueInput, {
    nullable: false
  })
  where!: MovieReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieReviewCreateWithoutUserInput, {
    nullable: false
  })
  create!: MovieReviewCreateWithoutUserInput;
}
