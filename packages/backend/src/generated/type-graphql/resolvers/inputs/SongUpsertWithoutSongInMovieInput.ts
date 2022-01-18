import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateWithoutSongInMovieInput } from "../inputs/SongCreateWithoutSongInMovieInput";
import { SongUpdateWithoutSongInMovieInput } from "../inputs/SongUpdateWithoutSongInMovieInput";

@TypeGraphQL.InputType("SongUpsertWithoutSongInMovieInput", {
  isAbstract: true
})
export class SongUpsertWithoutSongInMovieInput {
  @TypeGraphQL.Field(_type => SongUpdateWithoutSongInMovieInput, {
    nullable: false
  })
  update!: SongUpdateWithoutSongInMovieInput;

  @TypeGraphQL.Field(_type => SongCreateWithoutSongInMovieInput, {
    nullable: false
  })
  create!: SongCreateWithoutSongInMovieInput;
}
