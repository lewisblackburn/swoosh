import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieLikeWhereInput } from "../inputs/MovieLikeWhereInput";

@TypeGraphQL.InputType("MovieLikeListRelationFilter", {
  isAbstract: true
})
export class MovieLikeListRelationFilter {
  @TypeGraphQL.Field(_type => MovieLikeWhereInput, {
    nullable: true
  })
  every?: MovieLikeWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovieLikeWhereInput, {
    nullable: true
  })
  some?: MovieLikeWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovieLikeWhereInput, {
    nullable: true
  })
  none?: MovieLikeWhereInput | undefined;
}
