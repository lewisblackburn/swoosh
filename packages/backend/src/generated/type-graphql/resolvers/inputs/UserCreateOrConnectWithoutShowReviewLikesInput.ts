import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutShowReviewLikesInput } from "../inputs/UserCreateWithoutShowReviewLikesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutShowReviewLikesInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutShowReviewLikesInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutShowReviewLikesInput, {
    nullable: false
  })
  create!: UserCreateWithoutShowReviewLikesInput;
}
