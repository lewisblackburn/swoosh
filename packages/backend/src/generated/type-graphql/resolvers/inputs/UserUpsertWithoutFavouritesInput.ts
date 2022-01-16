import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFavouritesInput } from "../inputs/UserCreateWithoutFavouritesInput";
import { UserUpdateWithoutFavouritesInput } from "../inputs/UserUpdateWithoutFavouritesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutFavouritesInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutFavouritesInput, {
    nullable: false
  })
  update!: UserUpdateWithoutFavouritesInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFavouritesInput, {
    nullable: false
  })
  create!: UserCreateWithoutFavouritesInput;
}
