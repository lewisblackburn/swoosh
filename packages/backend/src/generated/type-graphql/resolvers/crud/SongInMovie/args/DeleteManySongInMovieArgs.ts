import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongInMovieWhereInput } from "../../../inputs/SongInMovieWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySongInMovieArgs {
  @TypeGraphQL.Field(_type => SongInMovieWhereInput, {
    nullable: true
  })
  where?: SongInMovieWhereInput | undefined;
}
