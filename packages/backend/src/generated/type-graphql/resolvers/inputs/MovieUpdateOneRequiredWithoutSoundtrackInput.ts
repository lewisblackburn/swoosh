import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateOrConnectWithoutSoundtrackInput } from "../inputs/MovieCreateOrConnectWithoutSoundtrackInput";
import { MovieCreateWithoutSoundtrackInput } from "../inputs/MovieCreateWithoutSoundtrackInput";
import { MovieUpdateWithoutSoundtrackInput } from "../inputs/MovieUpdateWithoutSoundtrackInput";
import { MovieUpsertWithoutSoundtrackInput } from "../inputs/MovieUpsertWithoutSoundtrackInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieUpdateOneRequiredWithoutSoundtrackInput", {
  isAbstract: true
})
export class MovieUpdateOneRequiredWithoutSoundtrackInput {
  @TypeGraphQL.Field(_type => MovieCreateWithoutSoundtrackInput, {
    nullable: true
  })
  create?: MovieCreateWithoutSoundtrackInput | undefined;

  @TypeGraphQL.Field(_type => MovieCreateOrConnectWithoutSoundtrackInput, {
    nullable: true
  })
  connectOrCreate?: MovieCreateOrConnectWithoutSoundtrackInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpsertWithoutSoundtrackInput, {
    nullable: true
  })
  upsert?: MovieUpsertWithoutSoundtrackInput | undefined;

  @TypeGraphQL.Field(_type => MovieWhereUniqueInput, {
    nullable: true
  })
  connect?: MovieWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpdateWithoutSoundtrackInput, {
    nullable: true
  })
  update?: MovieUpdateWithoutSoundtrackInput | undefined;
}
