import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutVoteInput } from "../inputs/UserCreateWithoutVoteInput";
import { UserUpdateWithoutVoteInput } from "../inputs/UserUpdateWithoutVoteInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutVoteInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutVoteInput, {
    nullable: false
  })
  update!: UserUpdateWithoutVoteInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutVoteInput, {
    nullable: false
  })
  create!: UserCreateWithoutVoteInput;
}
