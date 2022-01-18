import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowOrderByWithRelationInput } from "../inputs/ShowOrderByWithRelationInput";
import { SongOrderByWithRelationInput } from "../inputs/SongOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SongInShowOrderByWithRelationInput", {
  isAbstract: true
})
export class SongInShowOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  timestamp?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SongOrderByWithRelationInput, {
    nullable: true
  })
  song?: SongOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  songId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ShowOrderByWithRelationInput, {
    nullable: true
  })
  show?: ShowOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  showId?: "asc" | "desc" | undefined;
}
