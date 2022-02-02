import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieLikeCreateWithoutUserInput } from "../inputs/MovieLikeCreateWithoutUserInput";
import { MovieLikeWhereUniqueInput } from "../inputs/MovieLikeWhereUniqueInput";

@TypeGraphQL.InputType("MovieLikeCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class MovieLikeCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => MovieLikeWhereUniqueInput, {
    nullable: false
  })
  where!: MovieLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieLikeCreateWithoutUserInput, {
    nullable: false
  })
  create!: MovieLikeCreateWithoutUserInput;
}
