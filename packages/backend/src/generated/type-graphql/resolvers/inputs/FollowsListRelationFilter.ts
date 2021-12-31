import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowsWhereInput } from "../inputs/FollowsWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FollowsListRelationFilter {
  @TypeGraphQL.Field(_type => FollowsWhereInput, {
    nullable: true
  })
  every?: FollowsWhereInput | undefined;

  @TypeGraphQL.Field(_type => FollowsWhereInput, {
    nullable: true
  })
  some?: FollowsWhereInput | undefined;

  @TypeGraphQL.Field(_type => FollowsWhereInput, {
    nullable: true
  })
  none?: FollowsWhereInput | undefined;
}
