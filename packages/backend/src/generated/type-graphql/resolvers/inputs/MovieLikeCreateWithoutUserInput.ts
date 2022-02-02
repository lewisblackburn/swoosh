import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateNestedOneWithoutLikesInput } from "../inputs/MovieCreateNestedOneWithoutLikesInput";

@TypeGraphQL.InputType("MovieLikeCreateWithoutUserInput", {
  isAbstract: true
})
export class MovieLikeCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => MovieCreateNestedOneWithoutLikesInput, {
    nullable: false
  })
  movie!: MovieCreateNestedOneWithoutLikesInput;
}
