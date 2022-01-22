import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("SongReviewScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class SongReviewScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SongReviewScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SongReviewScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongReviewScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SongReviewScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongReviewScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SongReviewScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  review?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  rating?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  userId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  songId?: IntWithAggregatesFilter | undefined;
}
