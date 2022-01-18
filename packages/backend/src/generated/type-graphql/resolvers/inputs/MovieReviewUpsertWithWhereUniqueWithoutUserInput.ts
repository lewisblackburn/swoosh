import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewCreateWithoutUserInput } from "../inputs/MovieReviewCreateWithoutUserInput";
import { MovieReviewUpdateWithoutUserInput } from "../inputs/MovieReviewUpdateWithoutUserInput";
import { MovieReviewWhereUniqueInput } from "../inputs/MovieReviewWhereUniqueInput";

@TypeGraphQL.InputType("MovieReviewUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class MovieReviewUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => MovieReviewWhereUniqueInput, {
    nullable: false
  })
  where!: MovieReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieReviewUpdateWithoutUserInput, {
    nullable: false
  })
  update!: MovieReviewUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => MovieReviewCreateWithoutUserInput, {
    nullable: false
  })
  create!: MovieReviewCreateWithoutUserInput;
}
