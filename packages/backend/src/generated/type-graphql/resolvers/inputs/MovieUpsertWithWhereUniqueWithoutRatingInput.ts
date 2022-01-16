import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateWithoutRatingInput } from "../inputs/MovieCreateWithoutRatingInput";
import { MovieUpdateWithoutRatingInput } from "../inputs/MovieUpdateWithoutRatingInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MovieUpsertWithWhereUniqueWithoutRatingInput {
  @TypeGraphQL.Field(_type => MovieWhereUniqueInput, {
    nullable: false
  })
  where!: MovieWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieUpdateWithoutRatingInput, {
    nullable: false
  })
  update!: MovieUpdateWithoutRatingInput;

  @TypeGraphQL.Field(_type => MovieCreateWithoutRatingInput, {
    nullable: false
  })
  create!: MovieCreateWithoutRatingInput;
}
