import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookListRelationFilter } from "../inputs/BookListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MovieListRelationFilter } from "../inputs/MovieListRelationFilter";
import { PersonListRelationFilter } from "../inputs/PersonListRelationFilter";
import { ShowListRelationFilter } from "../inputs/ShowListRelationFilter";
import { SongListRelationFilter } from "../inputs/SongListRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FavouriteWhereInput {
  @TypeGraphQL.Field(_type => [FavouriteWhereInput], {
    nullable: true
  })
  AND?: FavouriteWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavouriteWhereInput], {
    nullable: true
  })
  OR?: FavouriteWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavouriteWhereInput], {
    nullable: true
  })
  NOT?: FavouriteWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

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

  @TypeGraphQL.Field(_type => PersonListRelationFilter, {
    nullable: true
  })
  people?: PersonListRelationFilter | undefined;
}
