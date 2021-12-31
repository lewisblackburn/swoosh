import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowsCreateWithoutFollowerInput } from "../inputs/FollowsCreateWithoutFollowerInput";
import { FollowsUpdateWithoutFollowerInput } from "../inputs/FollowsUpdateWithoutFollowerInput";
import { FollowsWhereUniqueInput } from "../inputs/FollowsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FollowsUpsertWithWhereUniqueWithoutFollowerInput {
  @TypeGraphQL.Field(_type => FollowsWhereUniqueInput, {
    nullable: false
  })
  where!: FollowsWhereUniqueInput;

  @TypeGraphQL.Field(_type => FollowsUpdateWithoutFollowerInput, {
    nullable: false
  })
  update!: FollowsUpdateWithoutFollowerInput;

  @TypeGraphQL.Field(_type => FollowsCreateWithoutFollowerInput, {
    nullable: false
  })
  create!: FollowsCreateWithoutFollowerInput;
}
