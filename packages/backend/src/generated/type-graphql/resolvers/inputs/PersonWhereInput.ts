import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorInMovieListRelationFilter } from "../inputs/ActorInMovieListRelationFilter";
import { ActorInShowListRelationFilter } from "../inputs/ActorInShowListRelationFilter";
import { ArtistInSongListRelationFilter } from "../inputs/ArtistInSongListRelationFilter";
import { AuthorInBookListRelationFilter } from "../inputs/AuthorInBookListRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumCareerNullableListFilter } from "../inputs/EnumCareerNullableListFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("PersonWhereInput", {
  isAbstract: true
})
export class PersonWhereInput {
  @TypeGraphQL.Field(_type => [PersonWhereInput], {
    nullable: true
  })
  AND?: PersonWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonWhereInput], {
    nullable: true
  })
  OR?: PersonWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonWhereInput], {
    nullable: true
  })
  NOT?: PersonWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => EnumCareerNullableListFilter, {
    nullable: true
  })
  career?: EnumCareerNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  poster?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  locked?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  bio?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  age?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => ActorInMovieListRelationFilter, {
    nullable: true
  })
  movies?: ActorInMovieListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ActorInShowListRelationFilter, {
    nullable: true
  })
  shows?: ActorInShowListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => AuthorInBookListRelationFilter, {
    nullable: true
  })
  books?: AuthorInBookListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ArtistInSongListRelationFilter, {
    nullable: true
  })
  songs?: ArtistInSongListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
