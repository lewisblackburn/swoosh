import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutSongReviewsInput } from "../inputs/UserCreateOrConnectWithoutSongReviewsInput";
import { UserCreateWithoutSongReviewsInput } from "../inputs/UserCreateWithoutSongReviewsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutSongReviewsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutSongReviewsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutSongReviewsInput, {
    nullable: true
  })
  create?: UserCreateWithoutSongReviewsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutSongReviewsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutSongReviewsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
