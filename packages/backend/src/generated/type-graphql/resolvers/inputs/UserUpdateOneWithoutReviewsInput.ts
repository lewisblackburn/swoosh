import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutReviewsInput } from "../inputs/UserCreateOrConnectWithoutReviewsInput";
import { UserCreateWithoutReviewsInput } from "../inputs/UserCreateWithoutReviewsInput";
import { UserUpdateWithoutReviewsInput } from "../inputs/UserUpdateWithoutReviewsInput";
import { UserUpsertWithoutReviewsInput } from "../inputs/UserUpsertWithoutReviewsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneWithoutReviewsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutReviewsInput, {
    nullable: true
  })
  create?: UserCreateWithoutReviewsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutReviewsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutReviewsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutReviewsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutReviewsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutReviewsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutReviewsInput | undefined;
}
