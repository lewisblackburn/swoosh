import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookUpdateOneRequiredWithoutLikesInput } from "../inputs/BookUpdateOneRequiredWithoutLikesInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutLikedBooksInput } from "../inputs/UserUpdateOneRequiredWithoutLikedBooksInput";

@TypeGraphQL.InputType("BookLikeUpdateInput", {
  isAbstract: true
})
export class BookLikeUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutLikedBooksInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutLikedBooksInput | undefined;

  @TypeGraphQL.Field(_type => BookUpdateOneRequiredWithoutLikesInput, {
    nullable: true
  })
  book?: BookUpdateOneRequiredWithoutLikesInput | undefined;
}
