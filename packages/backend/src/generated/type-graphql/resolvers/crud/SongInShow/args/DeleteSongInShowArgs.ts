import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongInShowWhereUniqueInput } from "../../../inputs/SongInShowWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteSongInShowArgs {
  @TypeGraphQL.Field(_type => SongInShowWhereUniqueInput, {
    nullable: false
  })
  where!: SongInShowWhereUniqueInput;
}
