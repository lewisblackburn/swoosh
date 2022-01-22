import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutBookReviewLikesInput } from "../inputs/UserCreateOrConnectWithoutBookReviewLikesInput";
import { UserCreateWithoutBookReviewLikesInput } from "../inputs/UserCreateWithoutBookReviewLikesInput";
import { UserUpdateWithoutBookReviewLikesInput } from "../inputs/UserUpdateWithoutBookReviewLikesInput";
import { UserUpsertWithoutBookReviewLikesInput } from "../inputs/UserUpsertWithoutBookReviewLikesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutBookReviewLikesInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutBookReviewLikesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutBookReviewLikesInput, {
    nullable: true
  })
  create?: UserCreateWithoutBookReviewLikesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutBookReviewLikesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutBookReviewLikesInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutBookReviewLikesInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutBookReviewLikesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutBookReviewLikesInput, {
    nullable: true
  })
  update?: UserUpdateWithoutBookReviewLikesInput | undefined;
}
