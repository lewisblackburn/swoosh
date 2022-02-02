import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MovieRelationFilter } from "../inputs/MovieRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("MovieLikeWhereInput", {
  isAbstract: true
})
export class MovieLikeWhereInput {
  @TypeGraphQL.Field(_type => [MovieLikeWhereInput], {
    nullable: true
  })
  AND?: MovieLikeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieLikeWhereInput], {
    nullable: true
  })
  OR?: MovieLikeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieLikeWhereInput], {
    nullable: true
  })
  NOT?: MovieLikeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => MovieRelationFilter, {
    nullable: true
  })
  movie?: MovieRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  movieId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
