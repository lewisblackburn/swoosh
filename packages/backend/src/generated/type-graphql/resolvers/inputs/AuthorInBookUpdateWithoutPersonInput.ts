import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookUpdateOneRequiredWithoutAuthorsInput } from "../inputs/BookUpdateOneRequiredWithoutAuthorsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";

@TypeGraphQL.InputType("AuthorInBookUpdateWithoutPersonInput", {
  isAbstract: true
})
export class AuthorInBookUpdateWithoutPersonInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BookUpdateOneRequiredWithoutAuthorsInput, {
    nullable: true
  })
  book?: BookUpdateOneRequiredWithoutAuthorsInput | undefined;
}
