import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumCareerFieldUpdateOperationsInput } from "../inputs/EnumCareerFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PersonUpdateManyMutationInput {
  @TypeGraphQL.Field(_type => EnumCareerFieldUpdateOperationsInput, {
    nullable: true
  })
  type?: EnumCareerFieldUpdateOperationsInput | undefined;
}
