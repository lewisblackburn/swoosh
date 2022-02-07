import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutLikedShowsInput } from "../inputs/UserCreateOrConnectWithoutLikedShowsInput";
import { UserCreateWithoutLikedShowsInput } from "../inputs/UserCreateWithoutLikedShowsInput";
import { UserUpdateWithoutLikedShowsInput } from "../inputs/UserUpdateWithoutLikedShowsInput";
import { UserUpsertWithoutLikedShowsInput } from "../inputs/UserUpsertWithoutLikedShowsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutLikedShowsInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutLikedShowsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutLikedShowsInput, {
    nullable: true
  })
  create?: UserCreateWithoutLikedShowsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutLikedShowsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutLikedShowsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutLikedShowsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutLikedShowsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutLikedShowsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutLikedShowsInput | undefined;
}
