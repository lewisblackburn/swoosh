import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutBookReviewLikesInput } from "../inputs/UserCreateWithoutBookReviewLikesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutBookReviewLikesInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutBookReviewLikesInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutBookReviewLikesInput, {
    nullable: false
  })
  create!: UserCreateWithoutBookReviewLikesInput;
}
