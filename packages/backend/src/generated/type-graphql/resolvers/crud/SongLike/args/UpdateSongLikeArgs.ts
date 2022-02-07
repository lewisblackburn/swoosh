import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongLikeUpdateInput } from "../../../inputs/SongLikeUpdateInput";
import { SongLikeWhereUniqueInput } from "../../../inputs/SongLikeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateSongLikeArgs {
  @TypeGraphQL.Field(_type => SongLikeUpdateInput, {
    nullable: false
  })
  data!: SongLikeUpdateInput;

  @TypeGraphQL.Field(_type => SongLikeWhereUniqueInput, {
    nullable: false
  })
  where!: SongLikeWhereUniqueInput;
}
