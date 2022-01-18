import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongInShowCreateWithoutSongInput } from "../inputs/SongInShowCreateWithoutSongInput";
import { SongInShowUpdateWithoutSongInput } from "../inputs/SongInShowUpdateWithoutSongInput";
import { SongInShowWhereUniqueInput } from "../inputs/SongInShowWhereUniqueInput";

@TypeGraphQL.InputType("SongInShowUpsertWithWhereUniqueWithoutSongInput", {
  isAbstract: true
})
export class SongInShowUpsertWithWhereUniqueWithoutSongInput {
  @TypeGraphQL.Field(_type => SongInShowWhereUniqueInput, {
    nullable: false
  })
  where!: SongInShowWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongInShowUpdateWithoutSongInput, {
    nullable: false
  })
  update!: SongInShowUpdateWithoutSongInput;

  @TypeGraphQL.Field(_type => SongInShowCreateWithoutSongInput, {
    nullable: false
  })
  create!: SongInShowCreateWithoutSongInput;
}
