import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookUpdateOneRequiredWithoutAuthorsInput } from "../inputs/BookUpdateOneRequiredWithoutAuthorsInput";
import { PersonUpdateOneRequiredWithoutBooksInput } from "../inputs/PersonUpdateOneRequiredWithoutBooksInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("AuthorInBookUpdateInput", {
  isAbstract: true
})
export class AuthorInBookUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  penname?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BookUpdateOneRequiredWithoutAuthorsInput, {
    nullable: true
  })
  book?: BookUpdateOneRequiredWithoutAuthorsInput | undefined;

  @TypeGraphQL.Field(_type => PersonUpdateOneRequiredWithoutBooksInput, {
    nullable: true
  })
  person?: PersonUpdateOneRequiredWithoutBooksInput | undefined;
}
