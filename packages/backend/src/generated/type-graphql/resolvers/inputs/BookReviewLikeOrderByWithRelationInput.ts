import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookReviewOrderByWithRelationInput } from "../inputs/BookReviewOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("BookReviewLikeOrderByWithRelationInput", {
  isAbstract: true
})
export class BookReviewLikeOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => UserOrderByWithRelationInput, {
    nullable: true
  })
  user?: UserOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  reviewUserId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  reviewBookId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => BookReviewOrderByWithRelationInput, {
    nullable: true
  })
  bookReview?: BookReviewOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;
}
