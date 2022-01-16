import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFavouritesInput } from "../inputs/UserCreateOrConnectWithoutFavouritesInput";
import { UserCreateWithoutFavouritesInput } from "../inputs/UserCreateWithoutFavouritesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedOneWithoutFavouritesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFavouritesInput, {
    nullable: true
  })
  create?: UserCreateWithoutFavouritesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFavouritesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFavouritesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
