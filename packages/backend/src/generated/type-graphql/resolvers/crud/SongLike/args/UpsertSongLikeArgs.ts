import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongLikeCreateInput } from "../../../inputs/SongLikeCreateInput";
import { SongLikeUpdateInput } from "../../../inputs/SongLikeUpdateInput";
import { SongLikeWhereUniqueInput } from "../../../inputs/SongLikeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertSongLikeArgs {
  @TypeGraphQL.Field(_type => SongLikeWhereUniqueInput, {
    nullable: false
  })
  where!: SongLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongLikeCreateInput, {
    nullable: false
  })
  create!: SongLikeCreateInput;

  @TypeGraphQL.Field(_type => SongLikeUpdateInput, {
    nullable: false
  })
  update!: SongLikeUpdateInput;
}
