import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongInMovieWhereUniqueInput } from "../../../inputs/SongInMovieWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSongInMovieArgs {
  @TypeGraphQL.Field(_type => SongInMovieWhereUniqueInput, {
    nullable: false
  })
  where!: SongInMovieWhereUniqueInput;
}
