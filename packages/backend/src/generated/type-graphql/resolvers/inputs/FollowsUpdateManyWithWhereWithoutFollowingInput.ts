import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowsScalarWhereInput } from "../inputs/FollowsScalarWhereInput";
import { FollowsUpdateManyMutationInput } from "../inputs/FollowsUpdateManyMutationInput";

@TypeGraphQL.InputType("FollowsUpdateManyWithWhereWithoutFollowingInput", {
  isAbstract: true
})
export class FollowsUpdateManyWithWhereWithoutFollowingInput {
  @TypeGraphQL.Field(_type => FollowsScalarWhereInput, {
    nullable: false
  })
  where!: FollowsScalarWhereInput;

  @TypeGraphQL.Field(_type => FollowsUpdateManyMutationInput, {
    nullable: false
  })
  data!: FollowsUpdateManyMutationInput;
}
