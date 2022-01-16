import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutReviewsInput } from "../inputs/UserCreateOrConnectWithoutReviewsInput";
import { UserCreateWithoutReviewsInput } from "../inputs/UserCreateWithoutReviewsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedOneWithoutReviewsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutReviewsInput, {
    nullable: true
  })
  create?: UserCreateWithoutReviewsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutReviewsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutReviewsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
