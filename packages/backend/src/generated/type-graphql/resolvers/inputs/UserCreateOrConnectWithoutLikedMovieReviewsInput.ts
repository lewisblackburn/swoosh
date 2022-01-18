import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutLikedMovieReviewsInput } from "../inputs/UserCreateWithoutLikedMovieReviewsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutLikedMovieReviewsInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutLikedMovieReviewsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutLikedMovieReviewsInput, {
    nullable: false
  })
  create!: UserCreateWithoutLikedMovieReviewsInput;
}
