import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("WatchlistScalarWhereInput", {
  isAbstract: true
})
export class WatchlistScalarWhereInput {
  @TypeGraphQL.Field(_type => [WatchlistScalarWhereInput], {
    nullable: true
  })
  AND?: WatchlistScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WatchlistScalarWhereInput], {
    nullable: true
  })
  OR?: WatchlistScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WatchlistScalarWhereInput], {
    nullable: true
  })
  NOT?: WatchlistScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
