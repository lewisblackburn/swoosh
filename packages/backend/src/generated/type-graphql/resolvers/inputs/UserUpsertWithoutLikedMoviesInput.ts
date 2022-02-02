import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutLikedMoviesInput } from "../inputs/UserCreateWithoutLikedMoviesInput";
import { UserUpdateWithoutLikedMoviesInput } from "../inputs/UserUpdateWithoutLikedMoviesInput";

@TypeGraphQL.InputType("UserUpsertWithoutLikedMoviesInput", {
  isAbstract: true
})
export class UserUpsertWithoutLikedMoviesInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutLikedMoviesInput, {
    nullable: false
  })
  update!: UserUpdateWithoutLikedMoviesInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutLikedMoviesInput, {
    nullable: false
  })
  create!: UserCreateWithoutLikedMoviesInput;
}
