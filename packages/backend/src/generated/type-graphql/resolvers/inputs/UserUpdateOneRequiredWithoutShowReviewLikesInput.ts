import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutShowReviewLikesInput } from "../inputs/UserCreateOrConnectWithoutShowReviewLikesInput";
import { UserCreateWithoutShowReviewLikesInput } from "../inputs/UserCreateWithoutShowReviewLikesInput";
import { UserUpdateWithoutShowReviewLikesInput } from "../inputs/UserUpdateWithoutShowReviewLikesInput";
import { UserUpsertWithoutShowReviewLikesInput } from "../inputs/UserUpsertWithoutShowReviewLikesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutShowReviewLikesInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutShowReviewLikesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutShowReviewLikesInput, {
    nullable: true
  })
  create?: UserCreateWithoutShowReviewLikesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutShowReviewLikesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutShowReviewLikesInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutShowReviewLikesInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutShowReviewLikesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutShowReviewLikesInput, {
    nullable: true
  })
  update?: UserUpdateWithoutShowReviewLikesInput | undefined;
}
