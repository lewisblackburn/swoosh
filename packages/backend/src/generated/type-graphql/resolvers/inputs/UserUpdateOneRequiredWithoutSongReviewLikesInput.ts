import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutSongReviewLikesInput } from "../inputs/UserCreateOrConnectWithoutSongReviewLikesInput";
import { UserCreateWithoutSongReviewLikesInput } from "../inputs/UserCreateWithoutSongReviewLikesInput";
import { UserUpdateWithoutSongReviewLikesInput } from "../inputs/UserUpdateWithoutSongReviewLikesInput";
import { UserUpsertWithoutSongReviewLikesInput } from "../inputs/UserUpsertWithoutSongReviewLikesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutSongReviewLikesInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutSongReviewLikesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutSongReviewLikesInput, {
    nullable: true
  })
  create?: UserCreateWithoutSongReviewLikesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutSongReviewLikesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutSongReviewLikesInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutSongReviewLikesInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutSongReviewLikesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutSongReviewLikesInput, {
    nullable: true
  })
  update?: UserUpdateWithoutSongReviewLikesInput | undefined;
}
