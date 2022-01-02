import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongInShowUpdateInput } from "../../../inputs/SongInShowUpdateInput";
import { SongInShowWhereUniqueInput } from "../../../inputs/SongInShowWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateSongInShowArgs {
  @TypeGraphQL.Field(_type => SongInShowUpdateInput, {
    nullable: false
  })
  data!: SongInShowUpdateInput;

  @TypeGraphQL.Field(_type => SongInShowWhereUniqueInput, {
    nullable: false
  })
  where!: SongInShowWhereUniqueInput;
}
