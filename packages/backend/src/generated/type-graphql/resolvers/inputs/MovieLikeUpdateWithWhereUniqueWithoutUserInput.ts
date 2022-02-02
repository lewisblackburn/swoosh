import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieLikeUpdateWithoutUserInput } from "../inputs/MovieLikeUpdateWithoutUserInput";
import { MovieLikeWhereUniqueInput } from "../inputs/MovieLikeWhereUniqueInput";

@TypeGraphQL.InputType("MovieLikeUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class MovieLikeUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => MovieLikeWhereUniqueInput, {
    nullable: false
  })
  where!: MovieLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieLikeUpdateWithoutUserInput, {
    nullable: false
  })
  data!: MovieLikeUpdateWithoutUserInput;
}
