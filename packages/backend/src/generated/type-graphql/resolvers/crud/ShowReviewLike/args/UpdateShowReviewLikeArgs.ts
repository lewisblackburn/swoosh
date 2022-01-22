import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShowReviewLikeUpdateInput } from "../../../inputs/ShowReviewLikeUpdateInput";
import { ShowReviewLikeWhereUniqueInput } from "../../../inputs/ShowReviewLikeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateShowReviewLikeArgs {
  @TypeGraphQL.Field(_type => ShowReviewLikeUpdateInput, {
    nullable: false
  })
  data!: ShowReviewLikeUpdateInput;

  @TypeGraphQL.Field(_type => ShowReviewLikeWhereUniqueInput, {
    nullable: false
  })
  where!: ShowReviewLikeWhereUniqueInput;
}
