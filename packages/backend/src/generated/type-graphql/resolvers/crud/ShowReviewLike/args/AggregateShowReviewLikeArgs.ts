import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShowReviewLikeOrderByWithRelationInput } from "../../../inputs/ShowReviewLikeOrderByWithRelationInput";
import { ShowReviewLikeWhereInput } from "../../../inputs/ShowReviewLikeWhereInput";
import { ShowReviewLikeWhereUniqueInput } from "../../../inputs/ShowReviewLikeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateShowReviewLikeArgs {
  @TypeGraphQL.Field(_type => ShowReviewLikeWhereInput, {
    nullable: true
  })
  where?: ShowReviewLikeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ShowReviewLikeOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ShowReviewLikeOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ShowReviewLikeWhereUniqueInput, {
    nullable: true
  })
  cursor?: ShowReviewLikeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
