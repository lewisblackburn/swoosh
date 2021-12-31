import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FollowsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [FollowsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: FollowsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: FollowsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: FollowsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  followingId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  followerId?: IntWithAggregatesFilter | undefined;
}
