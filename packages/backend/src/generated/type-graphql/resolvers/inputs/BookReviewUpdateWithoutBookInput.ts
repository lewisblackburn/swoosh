import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookReviewLikeUpdateManyWithoutBookReviewInput } from "../inputs/BookReviewLikeUpdateManyWithoutBookReviewInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutBookReviewsInput } from "../inputs/UserUpdateOneRequiredWithoutBookReviewsInput";

@TypeGraphQL.InputType("BookReviewUpdateWithoutBookInput", {
  isAbstract: true
})
export class BookReviewUpdateWithoutBookInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  review?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  rating?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BookReviewLikeUpdateManyWithoutBookReviewInput, {
    nullable: true
  })
  likes?: BookReviewLikeUpdateManyWithoutBookReviewInput | undefined;
}
