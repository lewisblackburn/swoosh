import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongReviewCreateInput } from "../../../inputs/SongReviewCreateInput";
import { SongReviewUpdateInput } from "../../../inputs/SongReviewUpdateInput";
import { SongReviewWhereUniqueInput } from "../../../inputs/SongReviewWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertSongReviewArgs {
  @TypeGraphQL.Field(_type => SongReviewWhereUniqueInput, {
    nullable: false
  })
  where!: SongReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongReviewCreateInput, {
    nullable: false
  })
  create!: SongReviewCreateInput;

  @TypeGraphQL.Field(_type => SongReviewUpdateInput, {
    nullable: false
  })
  update!: SongReviewUpdateInput;
}
