import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { MovieListRelationFilter } from "../inputs/MovieListRelationFilter";
import { ShowListRelationFilter } from "../inputs/ShowListRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class WatchlistWhereInput {
  @TypeGraphQL.Field(_type => [WatchlistWhereInput], {
    nullable: true
  })
  AND?: WatchlistWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WatchlistWhereInput], {
    nullable: true
  })
  OR?: WatchlistWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [WatchlistWhereInput], {
    nullable: true
  })
  NOT?: WatchlistWhereInput[] | undefined;

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
}
