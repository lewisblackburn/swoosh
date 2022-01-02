import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateWithoutSoundtrackInput } from "../inputs/MovieCreateWithoutSoundtrackInput";
import { MovieUpdateWithoutSoundtrackInput } from "../inputs/MovieUpdateWithoutSoundtrackInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MovieUpsertWithoutSoundtrackInput {
  @TypeGraphQL.Field(_type => MovieUpdateWithoutSoundtrackInput, {
    nullable: false
  })
  update!: MovieUpdateWithoutSoundtrackInput;

  @TypeGraphQL.Field(_type => MovieCreateWithoutSoundtrackInput, {
    nullable: false
  })
  create!: MovieCreateWithoutSoundtrackInput;
}
