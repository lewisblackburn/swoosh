import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookListRelationFilter } from "../inputs/BookListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MovieListRelationFilter } from "../inputs/MovieListRelationFilter";
import { ShowListRelationFilter } from "../inputs/ShowListRelationFilter";
import { SongListRelationFilter } from "../inputs/SongListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class GenreWhereInput {
  @TypeGraphQL.Field(_type => [GenreWhereInput], {
    nullable: true
  })
  AND?: GenreWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreWhereInput], {
    nullable: true
  })
  OR?: GenreWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GenreWhereInput], {
    nullable: true
  })
  NOT?: GenreWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => MovieListRelationFilter, {
    nullable: true
  })
  movies?: MovieListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ShowListRelationFilter, {
    nullable: true
  })
  shows?: ShowListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SongListRelationFilter, {
    nullable: true
  })
  songs?: SongListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BookListRelationFilter, {
    nullable: true
  })
  books?: BookListRelationFilter | undefined;
}
