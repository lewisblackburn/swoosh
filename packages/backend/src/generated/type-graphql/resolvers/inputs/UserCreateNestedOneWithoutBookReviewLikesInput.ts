import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutBookReviewLikesInput } from "../inputs/UserCreateOrConnectWithoutBookReviewLikesInput";
import { UserCreateWithoutBookReviewLikesInput } from "../inputs/UserCreateWithoutBookReviewLikesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutBookReviewLikesInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutBookReviewLikesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutBookReviewLikesInput, {
    nullable: true
  })
  create?: UserCreateWithoutBookReviewLikesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutBookReviewLikesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutBookReviewLikesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
