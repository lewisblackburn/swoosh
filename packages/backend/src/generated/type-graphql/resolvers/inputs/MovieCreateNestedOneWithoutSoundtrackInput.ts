import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateOrConnectWithoutSoundtrackInput } from "../inputs/MovieCreateOrConnectWithoutSoundtrackInput";
import { MovieCreateWithoutSoundtrackInput } from "../inputs/MovieCreateWithoutSoundtrackInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieCreateNestedOneWithoutSoundtrackInput", {
  isAbstract: true
})
export class MovieCreateNestedOneWithoutSoundtrackInput {
  @TypeGraphQL.Field(_type => MovieCreateWithoutSoundtrackInput, {
    nullable: true
  })
  create?: MovieCreateWithoutSoundtrackInput | undefined;

  @TypeGraphQL.Field(_type => MovieCreateOrConnectWithoutSoundtrackInput, {
    nullable: true
  })
  connectOrCreate?: MovieCreateOrConnectWithoutSoundtrackInput | undefined;

  @TypeGraphQL.Field(_type => MovieWhereUniqueInput, {
    nullable: true
  })
  connect?: MovieWhereUniqueInput | undefined;
}
