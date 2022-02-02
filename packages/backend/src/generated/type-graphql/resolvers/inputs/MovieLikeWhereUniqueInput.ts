import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieLikeUserIdMovieIdCompoundUniqueInput } from "../inputs/MovieLikeUserIdMovieIdCompoundUniqueInput";

@TypeGraphQL.InputType("MovieLikeWhereUniqueInput", {
  isAbstract: true
})
export class MovieLikeWhereUniqueInput {
  @TypeGraphQL.Field(_type => MovieLikeUserIdMovieIdCompoundUniqueInput, {
    nullable: true
  })
  userId_movieId?: MovieLikeUserIdMovieIdCompoundUniqueInput | undefined;
}
