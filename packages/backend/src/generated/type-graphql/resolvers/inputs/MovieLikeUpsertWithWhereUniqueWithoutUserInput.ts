import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieLikeCreateWithoutUserInput } from "../inputs/MovieLikeCreateWithoutUserInput";
import { MovieLikeUpdateWithoutUserInput } from "../inputs/MovieLikeUpdateWithoutUserInput";
import { MovieLikeWhereUniqueInput } from "../inputs/MovieLikeWhereUniqueInput";

@TypeGraphQL.InputType("MovieLikeUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class MovieLikeUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => MovieLikeWhereUniqueInput, {
    nullable: false
  })
  where!: MovieLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieLikeUpdateWithoutUserInput, {
    nullable: false
  })
  update!: MovieLikeUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => MovieLikeCreateWithoutUserInput, {
    nullable: false
  })
  create!: MovieLikeCreateWithoutUserInput;
}
