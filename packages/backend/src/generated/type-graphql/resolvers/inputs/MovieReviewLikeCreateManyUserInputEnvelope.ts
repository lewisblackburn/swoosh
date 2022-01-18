import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewLikeCreateManyUserInput } from "../inputs/MovieReviewLikeCreateManyUserInput";

@TypeGraphQL.InputType("MovieReviewLikeCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class MovieReviewLikeCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [MovieReviewLikeCreateManyUserInput], {
    nullable: false
  })
  data!: MovieReviewLikeCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
