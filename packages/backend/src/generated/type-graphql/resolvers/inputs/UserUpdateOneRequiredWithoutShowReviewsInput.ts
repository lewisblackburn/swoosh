import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutShowReviewsInput } from "../inputs/UserCreateOrConnectWithoutShowReviewsInput";
import { UserCreateWithoutShowReviewsInput } from "../inputs/UserCreateWithoutShowReviewsInput";
import { UserUpdateWithoutShowReviewsInput } from "../inputs/UserUpdateWithoutShowReviewsInput";
import { UserUpsertWithoutShowReviewsInput } from "../inputs/UserUpsertWithoutShowReviewsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutShowReviewsInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutShowReviewsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutShowReviewsInput, {
    nullable: true
  })
  create?: UserCreateWithoutShowReviewsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutShowReviewsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutShowReviewsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutShowReviewsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutShowReviewsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutShowReviewsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutShowReviewsInput | undefined;
}
