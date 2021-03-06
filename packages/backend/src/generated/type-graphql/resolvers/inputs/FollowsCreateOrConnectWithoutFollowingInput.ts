import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowsCreateWithoutFollowingInput } from "../inputs/FollowsCreateWithoutFollowingInput";
import { FollowsWhereUniqueInput } from "../inputs/FollowsWhereUniqueInput";

@TypeGraphQL.InputType("FollowsCreateOrConnectWithoutFollowingInput", {
  isAbstract: true
})
export class FollowsCreateOrConnectWithoutFollowingInput {
  @TypeGraphQL.Field(_type => FollowsWhereUniqueInput, {
    nullable: false
  })
  where!: FollowsWhereUniqueInput;

  @TypeGraphQL.Field(_type => FollowsCreateWithoutFollowingInput, {
    nullable: false
  })
  create!: FollowsCreateWithoutFollowingInput;
}
