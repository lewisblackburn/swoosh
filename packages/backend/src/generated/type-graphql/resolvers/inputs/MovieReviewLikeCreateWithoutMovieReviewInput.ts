import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutLikedMovieReviewsInput } from "../inputs/UserCreateNestedOneWithoutLikedMovieReviewsInput";

@TypeGraphQL.InputType("MovieReviewLikeCreateWithoutMovieReviewInput", {
  isAbstract: true
})
export class MovieReviewLikeCreateWithoutMovieReviewInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;
}
