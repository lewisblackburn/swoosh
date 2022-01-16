import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FavouriteScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [FavouriteScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: FavouriteScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavouriteScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: FavouriteScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavouriteScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: FavouriteScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  userId?: IntWithAggregatesFilter | undefined;
}
