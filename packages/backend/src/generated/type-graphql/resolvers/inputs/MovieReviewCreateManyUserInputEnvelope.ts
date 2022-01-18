import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewCreateManyUserInput } from "../inputs/MovieReviewCreateManyUserInput";

@TypeGraphQL.InputType("MovieReviewCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class MovieReviewCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [MovieReviewCreateManyUserInput], {
    nullable: false
  })
  data!: MovieReviewCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
