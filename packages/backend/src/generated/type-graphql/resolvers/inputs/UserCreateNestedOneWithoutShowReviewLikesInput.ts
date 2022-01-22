import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutShowReviewLikesInput } from "../inputs/UserCreateOrConnectWithoutShowReviewLikesInput";
import { UserCreateWithoutShowReviewLikesInput } from "../inputs/UserCreateWithoutShowReviewLikesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutShowReviewLikesInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutShowReviewLikesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutShowReviewLikesInput, {
    nullable: true
  })
  create?: UserCreateWithoutShowReviewLikesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutShowReviewLikesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutShowReviewLikesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
