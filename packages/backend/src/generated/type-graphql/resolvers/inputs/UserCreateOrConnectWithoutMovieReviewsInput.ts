import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutMovieReviewsInput } from "../inputs/UserCreateWithoutMovieReviewsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutMovieReviewsInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutMovieReviewsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutMovieReviewsInput, {
    nullable: false
  })
  create!: UserCreateWithoutMovieReviewsInput;
}
