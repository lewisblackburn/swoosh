import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutMoviesInput } from "../inputs/UserCreateWithoutMoviesInput";
import { UserUpdateWithoutMoviesInput } from "../inputs/UserUpdateWithoutMoviesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutMoviesInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutMoviesInput, {
    nullable: false
  })
  update!: UserUpdateWithoutMoviesInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutMoviesInput, {
    nullable: false
  })
  create!: UserCreateWithoutMoviesInput;
}
