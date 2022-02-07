import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutLikedSongsInput } from "../inputs/UserCreateOrConnectWithoutLikedSongsInput";
import { UserCreateWithoutLikedSongsInput } from "../inputs/UserCreateWithoutLikedSongsInput";
import { UserUpdateWithoutLikedSongsInput } from "../inputs/UserUpdateWithoutLikedSongsInput";
import { UserUpsertWithoutLikedSongsInput } from "../inputs/UserUpsertWithoutLikedSongsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutLikedSongsInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutLikedSongsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutLikedSongsInput, {
    nullable: true
  })
  create?: UserCreateWithoutLikedSongsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutLikedSongsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutLikedSongsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutLikedSongsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutLikedSongsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutLikedSongsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutLikedSongsInput | undefined;
}
