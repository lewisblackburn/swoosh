import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateWithoutSoundtrackInput } from "../inputs/MovieCreateWithoutSoundtrackInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieCreateOrConnectWithoutSoundtrackInput", {
  isAbstract: true
})
export class MovieCreateOrConnectWithoutSoundtrackInput {
  @TypeGraphQL.Field(_type => MovieWhereUniqueInput, {
    nullable: false
  })
  where!: MovieWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieCreateWithoutSoundtrackInput, {
    nullable: false
  })
  create!: MovieCreateWithoutSoundtrackInput;
}
