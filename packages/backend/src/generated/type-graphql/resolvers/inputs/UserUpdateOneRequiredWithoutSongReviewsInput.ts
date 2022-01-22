import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutSongReviewsInput } from "../inputs/UserCreateOrConnectWithoutSongReviewsInput";
import { UserCreateWithoutSongReviewsInput } from "../inputs/UserCreateWithoutSongReviewsInput";
import { UserUpdateWithoutSongReviewsInput } from "../inputs/UserUpdateWithoutSongReviewsInput";
import { UserUpsertWithoutSongReviewsInput } from "../inputs/UserUpsertWithoutSongReviewsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutSongReviewsInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutSongReviewsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutSongReviewsInput, {
    nullable: true
  })
  create?: UserCreateWithoutSongReviewsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutSongReviewsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutSongReviewsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutSongReviewsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutSongReviewsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutSongReviewsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutSongReviewsInput | undefined;
}
