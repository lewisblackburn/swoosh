import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { ShowReviewRelationFilter } from "../inputs/ShowReviewRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("ShowReviewLikeWhereInput", {
  isAbstract: true
})
export class ShowReviewLikeWhereInput {
  @TypeGraphQL.Field(_type => [ShowReviewLikeWhereInput], {
    nullable: true
  })
  AND?: ShowReviewLikeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowReviewLikeWhereInput], {
    nullable: true
  })
  OR?: ShowReviewLikeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowReviewLikeWhereInput], {
    nullable: true
  })
  NOT?: ShowReviewLikeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  reviewUserId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  reviewShowId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => ShowReviewRelationFilter, {
    nullable: true
  })
  showReview?: ShowReviewRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
