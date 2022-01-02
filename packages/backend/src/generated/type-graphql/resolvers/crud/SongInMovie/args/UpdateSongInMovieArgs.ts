import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongInMovieUpdateInput } from "../../../inputs/SongInMovieUpdateInput";
import { SongInMovieWhereUniqueInput } from "../../../inputs/SongInMovieWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateSongInMovieArgs {
  @TypeGraphQL.Field(_type => SongInMovieUpdateInput, {
    nullable: false
  })
  data!: SongInMovieUpdateInput;

  @TypeGraphQL.Field(_type => SongInMovieWhereUniqueInput, {
    nullable: false
  })
  where!: SongInMovieWhereUniqueInput;
}
