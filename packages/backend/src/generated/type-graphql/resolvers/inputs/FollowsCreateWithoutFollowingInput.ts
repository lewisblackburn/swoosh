import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutFollowersInput } from "../inputs/UserCreateNestedOneWithoutFollowersInput";

@TypeGraphQL.InputType("FollowsCreateWithoutFollowingInput", {
  isAbstract: true
})
export class FollowsCreateWithoutFollowingInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutFollowersInput, {
    nullable: false
  })
  follower!: UserCreateNestedOneWithoutFollowersInput;
}
