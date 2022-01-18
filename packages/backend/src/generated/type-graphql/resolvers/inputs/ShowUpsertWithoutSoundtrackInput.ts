import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowCreateWithoutSoundtrackInput } from "../inputs/ShowCreateWithoutSoundtrackInput";
import { ShowUpdateWithoutSoundtrackInput } from "../inputs/ShowUpdateWithoutSoundtrackInput";

@TypeGraphQL.InputType("ShowUpsertWithoutSoundtrackInput", {
  isAbstract: true
})
export class ShowUpsertWithoutSoundtrackInput {
  @TypeGraphQL.Field(_type => ShowUpdateWithoutSoundtrackInput, {
    nullable: false
  })
  update!: ShowUpdateWithoutSoundtrackInput;

  @TypeGraphQL.Field(_type => ShowCreateWithoutSoundtrackInput, {
    nullable: false
  })
  create!: ShowCreateWithoutSoundtrackInput;
}
