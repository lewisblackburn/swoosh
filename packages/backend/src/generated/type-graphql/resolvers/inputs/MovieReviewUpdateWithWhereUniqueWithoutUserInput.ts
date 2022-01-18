import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewUpdateWithoutUserInput } from "../inputs/MovieReviewUpdateWithoutUserInput";
import { MovieReviewWhereUniqueInput } from "../inputs/MovieReviewWhereUniqueInput";

@TypeGraphQL.InputType("MovieReviewUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class MovieReviewUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => MovieReviewWhereUniqueInput, {
    nullable: false
  })
  where!: MovieReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieReviewUpdateWithoutUserInput, {
    nullable: false
  })
  data!: MovieReviewUpdateWithoutUserInput;
}
