import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieLikeCreateWithoutMovieInput } from "../inputs/MovieLikeCreateWithoutMovieInput";
import { MovieLikeUpdateWithoutMovieInput } from "../inputs/MovieLikeUpdateWithoutMovieInput";
import { MovieLikeWhereUniqueInput } from "../inputs/MovieLikeWhereUniqueInput";

@TypeGraphQL.InputType("MovieLikeUpsertWithWhereUniqueWithoutMovieInput", {
  isAbstract: true
})
export class MovieLikeUpsertWithWhereUniqueWithoutMovieInput {
  @TypeGraphQL.Field(_type => MovieLikeWhereUniqueInput, {
    nullable: false
  })
  where!: MovieLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieLikeUpdateWithoutMovieInput, {
    nullable: false
  })
  update!: MovieLikeUpdateWithoutMovieInput;

  @TypeGraphQL.Field(_type => MovieLikeCreateWithoutMovieInput, {
    nullable: false
  })
  create!: MovieLikeCreateWithoutMovieInput;
}
