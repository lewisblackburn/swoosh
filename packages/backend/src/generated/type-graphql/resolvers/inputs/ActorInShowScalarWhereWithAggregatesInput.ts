import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ActorInShowScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ActorInShowScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ActorInShowScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ActorInShowScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActorInShowScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ActorInShowScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActorInShowScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ActorInShowScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  showId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  personId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  role?: StringWithAggregatesFilter | undefined;
}
