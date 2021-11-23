import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookListRelationFilter } from "../inputs/BookListRelationFilter";
import { EnumCareerFilter } from "../inputs/EnumCareerFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MovieListRelationFilter } from "../inputs/MovieListRelationFilter";
import { SongListRelationFilter } from "../inputs/SongListRelationFilter";

@TypeGraphQL.InputType({
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

  @TypeGraphQL.Field(_type => EnumCareerFilter, {
    nullable: true
  })
  type?: EnumCareerFilter | undefined;

  @TypeGraphQL.Field(_type => BookListRelationFilter, {
    nullable: true
  })
  books?: BookListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MovieListRelationFilter, {
    nullable: true
  })
  movies?: MovieListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SongListRelationFilter, {
    nullable: true
  })
  songs?: SongListRelationFilter | undefined;
}
