import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongReviewOrderByWithAggregationInput } from "../../../inputs/SongReviewOrderByWithAggregationInput";
import { SongReviewScalarWhereWithAggregatesInput } from "../../../inputs/SongReviewScalarWhereWithAggregatesInput";
import { SongReviewWhereInput } from "../../../inputs/SongReviewWhereInput";
import { SongReviewScalarFieldEnum } from "../../../../enums/SongReviewScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySongReviewArgs {
  @TypeGraphQL.Field(_type => SongReviewWhereInput, {
    nullable: true
  })
  where?: SongReviewWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SongReviewOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SongReviewOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongReviewScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"review" | "rating" | "userId" | "songId">;

  @TypeGraphQL.Field(_type => SongReviewScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SongReviewScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
