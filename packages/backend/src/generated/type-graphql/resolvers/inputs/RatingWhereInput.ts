import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { MovieListRelationFilter } from "../inputs/MovieListRelationFilter";
import { ShowListRelationFilter } from "../inputs/ShowListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RatingWhereInput {
  @TypeGraphQL.Field(_type => [RatingWhereInput], {
    nullable: true
  })
  AND?: RatingWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RatingWhereInput], {
    nullable: true
  })
  OR?: RatingWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RatingWhereInput], {
    nullable: true
  })
  NOT?: RatingWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  age?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => MovieListRelationFilter, {
    nullable: true
  })
  movies?: MovieListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ShowListRelationFilter, {
    nullable: true
  })
  shows?: ShowListRelationFilter | undefined;
}
