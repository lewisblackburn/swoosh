import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutLikedShowsInput } from "../inputs/UserCreateWithoutLikedShowsInput";
import { UserUpdateWithoutLikedShowsInput } from "../inputs/UserUpdateWithoutLikedShowsInput";

@TypeGraphQL.InputType("UserUpsertWithoutLikedShowsInput", {
  isAbstract: true
})
export class UserUpsertWithoutLikedShowsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutLikedShowsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutLikedShowsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutLikedShowsInput, {
    nullable: false
  })
  create!: UserCreateWithoutLikedShowsInput;
}
