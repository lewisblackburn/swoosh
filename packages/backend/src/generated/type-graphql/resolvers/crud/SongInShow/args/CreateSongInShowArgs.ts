import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongInShowCreateInput } from "../../../inputs/SongInShowCreateInput";

@TypeGraphQL.ArgsType()
export class CreateSongInShowArgs {
  @TypeGraphQL.Field(_type => SongInShowCreateInput, {
    nullable: false
  })
  data!: SongInShowCreateInput;
}
