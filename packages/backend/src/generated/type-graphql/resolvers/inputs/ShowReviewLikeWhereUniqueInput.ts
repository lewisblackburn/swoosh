import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowReviewLikeUserIdReviewUserIdReviewShowIdCompoundUniqueInput } from "../inputs/ShowReviewLikeUserIdReviewUserIdReviewShowIdCompoundUniqueInput";

@TypeGraphQL.InputType("ShowReviewLikeWhereUniqueInput", {
  isAbstract: true
})
export class ShowReviewLikeWhereUniqueInput {
  @TypeGraphQL.Field(_type => ShowReviewLikeUserIdReviewUserIdReviewShowIdCompoundUniqueInput, {
    nullable: true
  })
  userId_reviewUserId_reviewShowId?: ShowReviewLikeUserIdReviewUserIdReviewShowIdCompoundUniqueInput | undefined;
}
