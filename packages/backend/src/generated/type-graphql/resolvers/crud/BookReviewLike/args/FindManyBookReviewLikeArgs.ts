import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookReviewLikeOrderByWithRelationInput } from "../../../inputs/BookReviewLikeOrderByWithRelationInput";
import { BookReviewLikeWhereInput } from "../../../inputs/BookReviewLikeWhereInput";
import { BookReviewLikeWhereUniqueInput } from "../../../inputs/BookReviewLikeWhereUniqueInput";
import { BookReviewLikeScalarFieldEnum } from "../../../../enums/BookReviewLikeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyBookReviewLikeArgs {
  @TypeGraphQL.Field(_type => BookReviewLikeWhereInput, {
    nullable: true
  })
  where?: BookReviewLikeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BookReviewLikeOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: BookReviewLikeOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => BookReviewLikeWhereUniqueInput, {
    nullable: true
  })
  cursor?: BookReviewLikeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [BookReviewLikeScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"userId" | "reviewUserId" | "reviewBookId" | "createdAt"> | undefined;
}
