import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class VoteScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [VoteScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: VoteScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [VoteScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: VoteScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [VoteScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: VoteScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  userId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  reviewId?: IntWithAggregatesFilter | undefined;
}
