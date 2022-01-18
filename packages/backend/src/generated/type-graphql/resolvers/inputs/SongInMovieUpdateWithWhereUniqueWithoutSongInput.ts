import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongInMovieUpdateWithoutSongInput } from "../inputs/SongInMovieUpdateWithoutSongInput";
import { SongInMovieWhereUniqueInput } from "../inputs/SongInMovieWhereUniqueInput";

@TypeGraphQL.InputType("SongInMovieUpdateWithWhereUniqueWithoutSongInput", {
  isAbstract: true
})
export class SongInMovieUpdateWithWhereUniqueWithoutSongInput {
  @TypeGraphQL.Field(_type => SongInMovieWhereUniqueInput, {
    nullable: false
  })
  where!: SongInMovieWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongInMovieUpdateWithoutSongInput, {
    nullable: false
  })
  data!: SongInMovieUpdateWithoutSongInput;
}
