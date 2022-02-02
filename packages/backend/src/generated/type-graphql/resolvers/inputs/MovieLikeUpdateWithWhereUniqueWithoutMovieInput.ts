import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieLikeUpdateWithoutMovieInput } from "../inputs/MovieLikeUpdateWithoutMovieInput";
import { MovieLikeWhereUniqueInput } from "../inputs/MovieLikeWhereUniqueInput";

@TypeGraphQL.InputType("MovieLikeUpdateWithWhereUniqueWithoutMovieInput", {
  isAbstract: true
})
export class MovieLikeUpdateWithWhereUniqueWithoutMovieInput {
  @TypeGraphQL.Field(_type => MovieLikeWhereUniqueInput, {
    nullable: false
  })
  where!: MovieLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieLikeUpdateWithoutMovieInput, {
    nullable: false
  })
  data!: MovieLikeUpdateWithoutMovieInput;
}
