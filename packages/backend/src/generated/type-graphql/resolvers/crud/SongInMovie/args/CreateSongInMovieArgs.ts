import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongInMovieCreateInput } from "../../../inputs/SongInMovieCreateInput";

@TypeGraphQL.ArgsType()
export class CreateSongInMovieArgs {
  @TypeGraphQL.Field(_type => SongInMovieCreateInput, {
    nullable: false
  })
  data!: SongInMovieCreateInput;
}
