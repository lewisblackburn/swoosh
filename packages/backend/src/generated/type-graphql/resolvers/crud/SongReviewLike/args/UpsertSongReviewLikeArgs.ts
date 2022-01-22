import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongReviewLikeCreateInput } from "../../../inputs/SongReviewLikeCreateInput";
import { SongReviewLikeUpdateInput } from "../../../inputs/SongReviewLikeUpdateInput";
import { SongReviewLikeWhereUniqueInput } from "../../../inputs/SongReviewLikeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertSongReviewLikeArgs {
  @TypeGraphQL.Field(_type => SongReviewLikeWhereUniqueInput, {
    nullable: false
  })
  where!: SongReviewLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongReviewLikeCreateInput, {
    nullable: false
  })
  create!: SongReviewLikeCreateInput;

  @TypeGraphQL.Field(_type => SongReviewLikeUpdateInput, {
    nullable: false
  })
  update!: SongReviewLikeUpdateInput;
}
