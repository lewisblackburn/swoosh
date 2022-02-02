import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { GenreListRelationFilter } from "../inputs/GenreListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PersonListRelationFilter } from "../inputs/PersonListRelationFilter";
import { SongInMovieListRelationFilter } from "../inputs/SongInMovieListRelationFilter";
import { SongInShowListRelationFilter } from "../inputs/SongInShowListRelationFilter";
import { SongReviewListRelationFilter } from "../inputs/SongReviewListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("SongWhereInput", {
  isAbstract: true
})
export class SongWhereInput {
  @TypeGraphQL.Field(_type => [SongWhereInput], {
    nullable: true
  })
  AND?: SongWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongWhereInput], {
    nullable: true
  })
  OR?: SongWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongWhereInput], {
    nullable: true
  })
  NOT?: SongWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  poster?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  locked?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  released?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => PersonListRelationFilter, {
    nullable: true
  })
  artists?: PersonListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SongInShowListRelationFilter, {
    nullable: true
  })
  songInShow?: SongInShowListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SongInMovieListRelationFilter, {
    nullable: true
  })
  songInMovie?: SongInMovieListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => GenreListRelationFilter, {
    nullable: true
  })
  genres?: GenreListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SongReviewListRelationFilter, {
    nullable: true
  })
  reviews?: SongReviewListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
