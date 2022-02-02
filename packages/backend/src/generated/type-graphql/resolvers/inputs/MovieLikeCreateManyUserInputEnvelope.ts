import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieLikeCreateManyUserInput } from "../inputs/MovieLikeCreateManyUserInput";

@TypeGraphQL.InputType("MovieLikeCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class MovieLikeCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [MovieLikeCreateManyUserInput], {
    nullable: false
  })
  data!: MovieLikeCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
