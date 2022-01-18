import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewLikeScalarWhereInput } from "../inputs/MovieReviewLikeScalarWhereInput";
import { MovieReviewLikeUpdateManyMutationInput } from "../inputs/MovieReviewLikeUpdateManyMutationInput";

@TypeGraphQL.InputType("MovieReviewLikeUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class MovieReviewLikeUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => MovieReviewLikeScalarWhereInput, {
    nullable: false
  })
  where!: MovieReviewLikeScalarWhereInput;

  @TypeGraphQL.Field(_type => MovieReviewLikeUpdateManyMutationInput, {
    nullable: false
  })
  data!: MovieReviewLikeUpdateManyMutationInput;
}
