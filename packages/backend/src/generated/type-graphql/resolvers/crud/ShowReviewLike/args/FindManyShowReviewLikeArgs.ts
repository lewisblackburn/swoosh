import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShowReviewLikeOrderByWithRelationInput } from "../../../inputs/ShowReviewLikeOrderByWithRelationInput";
import { ShowReviewLikeWhereInput } from "../../../inputs/ShowReviewLikeWhereInput";
import { ShowReviewLikeWhereUniqueInput } from "../../../inputs/ShowReviewLikeWhereUniqueInput";
import { ShowReviewLikeScalarFieldEnum } from "../../../../enums/ShowReviewLikeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyShowReviewLikeArgs {
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

  @TypeGraphQL.Field(_type => [ShowReviewLikeScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"userId" | "reviewUserId" | "reviewShowId" | "createdAt"> | undefined;
}
