import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowsUpdateWithoutFollowingInput } from "../inputs/FollowsUpdateWithoutFollowingInput";
import { FollowsWhereUniqueInput } from "../inputs/FollowsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FollowsUpdateWithWhereUniqueWithoutFollowingInput {
  @TypeGraphQL.Field(_type => FollowsWhereUniqueInput, {
    nullable: false
  })
  where!: FollowsWhereUniqueInput;

  @TypeGraphQL.Field(_type => FollowsUpdateWithoutFollowingInput, {
    nullable: false
  })
  data!: FollowsUpdateWithoutFollowingInput;
}
