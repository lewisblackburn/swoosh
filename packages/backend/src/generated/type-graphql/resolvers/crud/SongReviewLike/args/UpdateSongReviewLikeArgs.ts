import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongReviewLikeUpdateInput } from "../../../inputs/SongReviewLikeUpdateInput";
import { SongReviewLikeWhereUniqueInput } from "../../../inputs/SongReviewLikeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateSongReviewLikeArgs {
  @TypeGraphQL.Field(_type => SongReviewLikeUpdateInput, {
    nullable: false
  })
  data!: SongReviewLikeUpdateInput;

  @TypeGraphQL.Field(_type => SongReviewLikeWhereUniqueInput, {
    nullable: false
  })
  where!: SongReviewLikeWhereUniqueInput;
}
