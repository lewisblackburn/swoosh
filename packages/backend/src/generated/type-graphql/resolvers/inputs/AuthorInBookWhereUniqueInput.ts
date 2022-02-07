import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorInBookPersonIdBookIdCompoundUniqueInput } from "../inputs/AuthorInBookPersonIdBookIdCompoundUniqueInput";

@TypeGraphQL.InputType("AuthorInBookWhereUniqueInput", {
  isAbstract: true
})
export class AuthorInBookWhereUniqueInput {
  @TypeGraphQL.Field(_type => AuthorInBookPersonIdBookIdCompoundUniqueInput, {
    nullable: true
  })
  personId_bookId?: AuthorInBookPersonIdBookIdCompoundUniqueInput | undefined;
}
