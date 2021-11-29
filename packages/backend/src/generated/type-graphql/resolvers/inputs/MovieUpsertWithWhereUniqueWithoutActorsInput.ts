import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateWithoutActorsInput } from "../inputs/MovieCreateWithoutActorsInput";
import { MovieUpdateWithoutActorsInput } from "../inputs/MovieUpdateWithoutActorsInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MovieUpsertWithWhereUniqueWithoutActorsInput {
  @TypeGraphQL.Field(_type => MovieWhereUniqueInput, {
    nullable: false
  })
  where!: MovieWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieUpdateWithoutActorsInput, {
    nullable: false
  })
  update!: MovieUpdateWithoutActorsInput;

  @TypeGraphQL.Field(_type => MovieCreateWithoutActorsInput, {
    nullable: false
  })
  create!: MovieCreateWithoutActorsInput;
}
