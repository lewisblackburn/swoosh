import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShowReviewLikeCreateInput } from "../../../inputs/ShowReviewLikeCreateInput";
import { ShowReviewLikeUpdateInput } from "../../../inputs/ShowReviewLikeUpdateInput";
import { ShowReviewLikeWhereUniqueInput } from "../../../inputs/ShowReviewLikeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertShowReviewLikeArgs {
  @TypeGraphQL.Field(_type => ShowReviewLikeWhereUniqueInput, {
    nullable: false
  })
  where!: ShowReviewLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShowReviewLikeCreateInput, {
    nullable: false
  })
  create!: ShowReviewLikeCreateInput;

  @TypeGraphQL.Field(_type => ShowReviewLikeUpdateInput, {
    nullable: false
  })
  update!: ShowReviewLikeUpdateInput;
}
