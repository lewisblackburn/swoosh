import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongInShowCreateInput } from "../../../inputs/SongInShowCreateInput";
import { SongInShowUpdateInput } from "../../../inputs/SongInShowUpdateInput";
import { SongInShowWhereUniqueInput } from "../../../inputs/SongInShowWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertSongInShowArgs {
  @TypeGraphQL.Field(_type => SongInShowWhereUniqueInput, {
    nullable: false
  })
  where!: SongInShowWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongInShowCreateInput, {
    nullable: false
  })
  create!: SongInShowCreateInput;

  @TypeGraphQL.Field(_type => SongInShowUpdateInput, {
    nullable: false
  })
  update!: SongInShowUpdateInput;
}
