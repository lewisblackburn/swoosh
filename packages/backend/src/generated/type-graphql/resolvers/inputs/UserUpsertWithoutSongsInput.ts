import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutSongsInput } from "../inputs/UserCreateWithoutSongsInput";
import { UserUpdateWithoutSongsInput } from "../inputs/UserUpdateWithoutSongsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutSongsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutSongsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutSongsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutSongsInput, {
    nullable: false
  })
  create!: UserCreateWithoutSongsInput;
}
