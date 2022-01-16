import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FavouriteCreateWithoutMoviesInput } from "../inputs/FavouriteCreateWithoutMoviesInput";
import { FavouriteUpdateWithoutMoviesInput } from "../inputs/FavouriteUpdateWithoutMoviesInput";
import { FavouriteWhereUniqueInput } from "../inputs/FavouriteWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FavouriteUpsertWithWhereUniqueWithoutMoviesInput {
  @TypeGraphQL.Field(_type => FavouriteWhereUniqueInput, {
    nullable: false
  })
  where!: FavouriteWhereUniqueInput;

  @TypeGraphQL.Field(_type => FavouriteUpdateWithoutMoviesInput, {
    nullable: false
  })
  update!: FavouriteUpdateWithoutMoviesInput;

  @TypeGraphQL.Field(_type => FavouriteCreateWithoutMoviesInput, {
    nullable: false
  })
  create!: FavouriteCreateWithoutMoviesInput;
}
