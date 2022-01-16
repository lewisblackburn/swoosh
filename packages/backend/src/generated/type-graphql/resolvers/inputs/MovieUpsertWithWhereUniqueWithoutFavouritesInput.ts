import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateWithoutFavouritesInput } from "../inputs/MovieCreateWithoutFavouritesInput";
import { MovieUpdateWithoutFavouritesInput } from "../inputs/MovieUpdateWithoutFavouritesInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MovieUpsertWithWhereUniqueWithoutFavouritesInput {
  @TypeGraphQL.Field(_type => MovieWhereUniqueInput, {
    nullable: false
  })
  where!: MovieWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieUpdateWithoutFavouritesInput, {
    nullable: false
  })
  update!: MovieUpdateWithoutFavouritesInput;

  @TypeGraphQL.Field(_type => MovieCreateWithoutFavouritesInput, {
    nullable: false
  })
  create!: MovieCreateWithoutFavouritesInput;
}
