import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateWithoutSongInShowInput } from "../inputs/SongCreateWithoutSongInShowInput";
import { SongUpdateWithoutSongInShowInput } from "../inputs/SongUpdateWithoutSongInShowInput";

@TypeGraphQL.InputType("SongUpsertWithoutSongInShowInput", {
  isAbstract: true
})
export class SongUpsertWithoutSongInShowInput {
  @TypeGraphQL.Field(_type => SongUpdateWithoutSongInShowInput, {
    nullable: false
  })
  update!: SongUpdateWithoutSongInShowInput;

  @TypeGraphQL.Field(_type => SongCreateWithoutSongInShowInput, {
    nullable: false
  })
  create!: SongCreateWithoutSongInShowInput;
}
