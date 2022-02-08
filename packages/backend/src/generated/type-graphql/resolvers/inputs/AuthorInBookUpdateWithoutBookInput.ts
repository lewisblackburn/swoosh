import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonUpdateOneRequiredWithoutBooksInput } from "../inputs/PersonUpdateOneRequiredWithoutBooksInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("AuthorInBookUpdateWithoutBookInput", {
  isAbstract: true
})
export class AuthorInBookUpdateWithoutBookInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  penname?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PersonUpdateOneRequiredWithoutBooksInput, {
    nullable: true
  })
  person?: PersonUpdateOneRequiredWithoutBooksInput | undefined;
}
