import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFavouritesInput } from "../inputs/UserCreateOrConnectWithoutFavouritesInput";
import { UserCreateWithoutFavouritesInput } from "../inputs/UserCreateWithoutFavouritesInput";
import { UserUpdateWithoutFavouritesInput } from "../inputs/UserUpdateWithoutFavouritesInput";
import { UserUpsertWithoutFavouritesInput } from "../inputs/UserUpsertWithoutFavouritesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutFavouritesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFavouritesInput, {
    nullable: true
  })
  create?: UserCreateWithoutFavouritesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFavouritesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFavouritesInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutFavouritesInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutFavouritesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutFavouritesInput, {
    nullable: true
  })
  update?: UserUpdateWithoutFavouritesInput | undefined;
}
