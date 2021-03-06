import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookReviewLikeUpdateManyWithoutBookReviewInput } from "../inputs/BookReviewLikeUpdateManyWithoutBookReviewInput";
import { BookUpdateOneRequiredWithoutReviewsInput } from "../inputs/BookUpdateOneRequiredWithoutReviewsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutBookReviewsInput } from "../inputs/UserUpdateOneRequiredWithoutBookReviewsInput";

@TypeGraphQL.InputType("BookReviewUpdateInput", {
  isAbstract: true
})
export class BookReviewUpdateInput {
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

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutBookReviewsInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutBookReviewsInput | undefined;

  @TypeGraphQL.Field(_type => BookUpdateOneRequiredWithoutReviewsInput, {
    nullable: true
  })
  book?: BookUpdateOneRequiredWithoutReviewsInput | undefined;
}
