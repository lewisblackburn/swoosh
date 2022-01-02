import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongInMovieCreateInput } from "../../../inputs/SongInMovieCreateInput";
import { SongInMovieUpdateInput } from "../../../inputs/SongInMovieUpdateInput";
import { SongInMovieWhereUniqueInput } from "../../../inputs/SongInMovieWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertSongInMovieArgs {
  @TypeGraphQL.Field(_type => SongInMovieWhereUniqueInput, {
    nullable: false
  })
  where!: SongInMovieWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongInMovieCreateInput, {
    nullable: false
  })
  create!: SongInMovieCreateInput;

  @TypeGraphQL.Field(_type => SongInMovieUpdateInput, {
    nullable: false
  })
  update!: SongInMovieUpdateInput;
}
