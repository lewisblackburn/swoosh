import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookOrderByWithRelationInput } from "../inputs/BookOrderByWithRelationInput";
import { BookReviewLikeOrderByRelationAggregateInput } from "../inputs/BookReviewLikeOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("BookReviewOrderByWithRelationInput", {
  isAbstract: true
})
export class BookReviewOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  review?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  rating?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => BookReviewLikeOrderByRelationAggregateInput, {
    nullable: true
  })
  likes?: BookReviewLikeOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserOrderByWithRelationInput, {
    nullable: true
  })
  user?: UserOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => BookOrderByWithRelationInput, {
    nullable: true
  })
  book?: BookOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  bookId?: "asc" | "desc" | undefined;
}
