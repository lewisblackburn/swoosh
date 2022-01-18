import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { ShowRelationFilter } from "../inputs/ShowRelationFilter";
import { SongRelationFilter } from "../inputs/SongRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("SongInShowWhereInput", {
  isAbstract: true
})
export class SongInShowWhereInput {
  @TypeGraphQL.Field(_type => [SongInShowWhereInput], {
    nullable: true
  })
  AND?: SongInShowWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongInShowWhereInput], {
    nullable: true
  })
  OR?: SongInShowWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongInShowWhereInput], {
    nullable: true
  })
  NOT?: SongInShowWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  timestamp?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => SongRelationFilter, {
    nullable: true
  })
  song?: SongRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  songId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => ShowRelationFilter, {
    nullable: true
  })
  show?: ShowRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  showId?: IntFilter | undefined;
}
