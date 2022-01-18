import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("NotificationScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class NotificationScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [NotificationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: NotificationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: NotificationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: NotificationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  userId?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  message?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  read?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;
}
