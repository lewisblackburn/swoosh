import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieLikeCreateManyMovieInput } from "../inputs/MovieLikeCreateManyMovieInput";

@TypeGraphQL.InputType("MovieLikeCreateManyMovieInputEnvelope", {
  isAbstract: true
})
export class MovieLikeCreateManyMovieInputEnvelope {
  @TypeGraphQL.Field(_type => [MovieLikeCreateManyMovieInput], {
    nullable: false
  })
  data!: MovieLikeCreateManyMovieInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
