import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowCreateNestedOneWithoutSoundtrackInput } from "../inputs/ShowCreateNestedOneWithoutSoundtrackInput";

@TypeGraphQL.InputType("SongInShowCreateWithoutSongInput", {
  isAbstract: true
})
export class SongInShowCreateWithoutSongInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  timestamp!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => ShowCreateNestedOneWithoutSoundtrackInput, {
    nullable: false
  })
  show!: ShowCreateNestedOneWithoutSoundtrackInput;
}
