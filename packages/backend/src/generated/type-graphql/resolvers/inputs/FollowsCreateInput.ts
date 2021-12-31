import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutFollowersInput } from "../inputs/UserCreateNestedOneWithoutFollowersInput";
import { UserCreateNestedOneWithoutFollowingInput } from "../inputs/UserCreateNestedOneWithoutFollowingInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FollowsCreateInput {
  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutFollowingInput, {
    nullable: false
  })
  following!: UserCreateNestedOneWithoutFollowingInput;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutFollowersInput, {
    nullable: false
  })
  follower!: UserCreateNestedOneWithoutFollowersInput;
}
