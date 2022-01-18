import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewLikeCreateManyMovieReviewInput } from "../inputs/MovieReviewLikeCreateManyMovieReviewInput";

@TypeGraphQL.InputType("MovieReviewLikeCreateManyMovieReviewInputEnvelope", {
  isAbstract: true
})
export class MovieReviewLikeCreateManyMovieReviewInputEnvelope {
  @TypeGraphQL.Field(_type => [MovieReviewLikeCreateManyMovieReviewInput], {
    nullable: false
  })
  data!: MovieReviewLikeCreateManyMovieReviewInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
