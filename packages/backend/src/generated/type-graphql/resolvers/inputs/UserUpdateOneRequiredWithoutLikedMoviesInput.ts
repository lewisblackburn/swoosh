import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutLikedMoviesInput } from "../inputs/UserCreateOrConnectWithoutLikedMoviesInput";
import { UserCreateWithoutLikedMoviesInput } from "../inputs/UserCreateWithoutLikedMoviesInput";
import { UserUpdateWithoutLikedMoviesInput } from "../inputs/UserUpdateWithoutLikedMoviesInput";
import { UserUpsertWithoutLikedMoviesInput } from "../inputs/UserUpsertWithoutLikedMoviesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutLikedMoviesInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutLikedMoviesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutLikedMoviesInput, {
    nullable: true
  })
  create?: UserCreateWithoutLikedMoviesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutLikedMoviesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutLikedMoviesInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutLikedMoviesInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutLikedMoviesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutLikedMoviesInput, {
    nullable: true
  })
  update?: UserUpdateWithoutLikedMoviesInput | undefined;
}
