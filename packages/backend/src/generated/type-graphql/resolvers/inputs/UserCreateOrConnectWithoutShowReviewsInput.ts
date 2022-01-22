import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutShowReviewsInput } from "../inputs/UserCreateWithoutShowReviewsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutShowReviewsInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutShowReviewsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutShowReviewsInput, {
    nullable: false
  })
  create!: UserCreateWithoutShowReviewsInput;
}
