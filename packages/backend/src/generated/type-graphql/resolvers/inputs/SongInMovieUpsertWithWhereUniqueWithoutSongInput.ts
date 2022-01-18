import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongInMovieCreateWithoutSongInput } from "../inputs/SongInMovieCreateWithoutSongInput";
import { SongInMovieUpdateWithoutSongInput } from "../inputs/SongInMovieUpdateWithoutSongInput";
import { SongInMovieWhereUniqueInput } from "../inputs/SongInMovieWhereUniqueInput";

@TypeGraphQL.InputType("SongInMovieUpsertWithWhereUniqueWithoutSongInput", {
  isAbstract: true
})
export class SongInMovieUpsertWithWhereUniqueWithoutSongInput {
  @TypeGraphQL.Field(_type => SongInMovieWhereUniqueInput, {
    nullable: false
  })
  where!: SongInMovieWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongInMovieUpdateWithoutSongInput, {
    nullable: false
  })
  update!: SongInMovieUpdateWithoutSongInput;

  @TypeGraphQL.Field(_type => SongInMovieCreateWithoutSongInput, {
    nullable: false
  })
  create!: SongInMovieCreateWithoutSongInput;
}
