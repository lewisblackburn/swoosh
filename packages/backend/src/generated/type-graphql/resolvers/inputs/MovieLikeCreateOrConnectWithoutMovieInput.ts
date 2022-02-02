import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieLikeCreateWithoutMovieInput } from "../inputs/MovieLikeCreateWithoutMovieInput";
import { MovieLikeWhereUniqueInput } from "../inputs/MovieLikeWhereUniqueInput";

@TypeGraphQL.InputType("MovieLikeCreateOrConnectWithoutMovieInput", {
  isAbstract: true
})
export class MovieLikeCreateOrConnectWithoutMovieInput {
  @TypeGraphQL.Field(_type => MovieLikeWhereUniqueInput, {
    nullable: false
  })
  where!: MovieLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieLikeCreateWithoutMovieInput, {
    nullable: false
  })
  create!: MovieLikeCreateWithoutMovieInput;
}
