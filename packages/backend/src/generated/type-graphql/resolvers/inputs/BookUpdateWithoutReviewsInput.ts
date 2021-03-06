import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorInBookUpdateManyWithoutBookInput } from "../inputs/AuthorInBookUpdateManyWithoutBookInput";
import { BookLikeUpdateManyWithoutBookInput } from "../inputs/BookLikeUpdateManyWithoutBookInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { GenreUpdateManyWithoutBooksInput } from "../inputs/GenreUpdateManyWithoutBooksInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("BookUpdateWithoutReviewsInput", {
  isAbstract: true
})
export class BookUpdateWithoutReviewsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  poster?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  locked?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  released?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => AuthorInBookUpdateManyWithoutBookInput, {
    nullable: true
  })
  authors?: AuthorInBookUpdateManyWithoutBookInput | undefined;

  @TypeGraphQL.Field(_type => GenreUpdateManyWithoutBooksInput, {
    nullable: true
  })
  genres?: GenreUpdateManyWithoutBooksInput | undefined;

  @TypeGraphQL.Field(_type => BookLikeUpdateManyWithoutBookInput, {
    nullable: true
  })
  likes?: BookLikeUpdateManyWithoutBookInput | undefined;
}
