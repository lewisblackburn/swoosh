import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookReviewRelationFilter } from "../inputs/BookReviewRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("BookReviewLikeWhereInput", {
  isAbstract: true
})
export class BookReviewLikeWhereInput {
  @TypeGraphQL.Field(_type => [BookReviewLikeWhereInput], {
    nullable: true
  })
  AND?: BookReviewLikeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookReviewLikeWhereInput], {
    nullable: true
  })
  OR?: BookReviewLikeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookReviewLikeWhereInput], {
    nullable: true
  })
  NOT?: BookReviewLikeWhereInput[] | undefined;

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
  reviewBookId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => BookReviewRelationFilter, {
    nullable: true
  })
  bookReview?: BookReviewRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
