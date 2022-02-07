import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongLikeWhereUniqueInput } from "../../../inputs/SongLikeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteSongLikeArgs {
  @TypeGraphQL.Field(_type => SongLikeWhereUniqueInput, {
    nullable: false
  })
  where!: SongLikeWhereUniqueInput;
}
