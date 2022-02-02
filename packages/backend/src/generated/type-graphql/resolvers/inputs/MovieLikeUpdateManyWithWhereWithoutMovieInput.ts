import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieLikeScalarWhereInput } from "../inputs/MovieLikeScalarWhereInput";
import { MovieLikeUpdateManyMutationInput } from "../inputs/MovieLikeUpdateManyMutationInput";

@TypeGraphQL.InputType("MovieLikeUpdateManyWithWhereWithoutMovieInput", {
  isAbstract: true
})
export class MovieLikeUpdateManyWithWhereWithoutMovieInput {
  @TypeGraphQL.Field(_type => MovieLikeScalarWhereInput, {
    nullable: false
  })
  where!: MovieLikeScalarWhereInput;

  @TypeGraphQL.Field(_type => MovieLikeUpdateManyMutationInput, {
    nullable: false
  })
  data!: MovieLikeUpdateManyMutationInput;
}
