import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewCreateManyMovieInput } from "../inputs/MovieReviewCreateManyMovieInput";

@TypeGraphQL.InputType("MovieReviewCreateManyMovieInputEnvelope", {
  isAbstract: true
})
export class MovieReviewCreateManyMovieInputEnvelope {
  @TypeGraphQL.Field(_type => [MovieReviewCreateManyMovieInput], {
    nullable: false
  })
  data!: MovieReviewCreateManyMovieInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
