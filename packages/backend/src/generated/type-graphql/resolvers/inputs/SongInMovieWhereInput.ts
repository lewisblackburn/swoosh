import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MovieRelationFilter } from "../inputs/MovieRelationFilter";
import { SongRelationFilter } from "../inputs/SongRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("SongInMovieWhereInput", {
  isAbstract: true
})
export class SongInMovieWhereInput {
  @TypeGraphQL.Field(_type => [SongInMovieWhereInput], {
    nullable: true
  })
  AND?: SongInMovieWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongInMovieWhereInput], {
    nullable: true
  })
  OR?: SongInMovieWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongInMovieWhereInput], {
    nullable: true
  })
  NOT?: SongInMovieWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => MovieRelationFilter, {
    nullable: true
  })
  movie?: MovieRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  movieId?: IntFilter | undefined;
}
