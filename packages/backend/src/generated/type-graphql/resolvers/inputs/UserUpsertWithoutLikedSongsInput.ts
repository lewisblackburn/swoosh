import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutLikedSongsInput } from "../inputs/UserCreateWithoutLikedSongsInput";
import { UserUpdateWithoutLikedSongsInput } from "../inputs/UserUpdateWithoutLikedSongsInput";

@TypeGraphQL.InputType("UserUpsertWithoutLikedSongsInput", {
  isAbstract: true
})
export class UserUpsertWithoutLikedSongsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutLikedSongsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutLikedSongsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutLikedSongsInput, {
    nullable: false
  })
  create!: UserCreateWithoutLikedSongsInput;
}
