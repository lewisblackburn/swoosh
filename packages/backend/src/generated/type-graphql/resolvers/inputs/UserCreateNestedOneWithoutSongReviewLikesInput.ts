import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutSongReviewLikesInput } from "../inputs/UserCreateOrConnectWithoutSongReviewLikesInput";
import { UserCreateWithoutSongReviewLikesInput } from "../inputs/UserCreateWithoutSongReviewLikesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutSongReviewLikesInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutSongReviewLikesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutSongReviewLikesInput, {
    nullable: true
  })
  create?: UserCreateWithoutSongReviewLikesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutSongReviewLikesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutSongReviewLikesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
