import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowsCreateWithoutFollowingInput } from "../inputs/FollowsCreateWithoutFollowingInput";
import { FollowsUpdateWithoutFollowingInput } from "../inputs/FollowsUpdateWithoutFollowingInput";
import { FollowsWhereUniqueInput } from "../inputs/FollowsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FollowsUpsertWithWhereUniqueWithoutFollowingInput {
  @TypeGraphQL.Field(_type => FollowsWhereUniqueInput, {
    nullable: false
  })
  where!: FollowsWhereUniqueInput;

  @TypeGraphQL.Field(_type => FollowsUpdateWithoutFollowingInput, {
    nullable: false
  })
  update!: FollowsUpdateWithoutFollowingInput;

  @TypeGraphQL.Field(_type => FollowsCreateWithoutFollowingInput, {
    nullable: false
  })
  create!: FollowsCreateWithoutFollowingInput;
}
