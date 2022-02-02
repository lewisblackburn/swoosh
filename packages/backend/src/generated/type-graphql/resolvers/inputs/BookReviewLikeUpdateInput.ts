import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookReviewUpdateOneRequiredWithoutLikesInput } from "../inputs/BookReviewUpdateOneRequiredWithoutLikesInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutBookReviewLikesInput } from "../inputs/UserUpdateOneRequiredWithoutBookReviewLikesInput";

@TypeGraphQL.InputType("BookReviewLikeUpdateInput", {
  isAbstract: true
})
export class BookReviewLikeUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutBookReviewLikesInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutBookReviewLikesInput | undefined;

  @TypeGraphQL.Field(_type => BookReviewUpdateOneRequiredWithoutLikesInput, {
    nullable: true
  })
  bookReview?: BookReviewUpdateOneRequiredWithoutLikesInput | undefined;
}
