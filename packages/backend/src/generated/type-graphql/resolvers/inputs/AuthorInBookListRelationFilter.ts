import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorInBookWhereInput } from "../inputs/AuthorInBookWhereInput";

@TypeGraphQL.InputType("AuthorInBookListRelationFilter", {
  isAbstract: true
})
export class AuthorInBookListRelationFilter {
  @TypeGraphQL.Field(_type => AuthorInBookWhereInput, {
    nullable: true
  })
  every?: AuthorInBookWhereInput | undefined;

  @TypeGraphQL.Field(_type => AuthorInBookWhereInput, {
    nullable: true
  })
  some?: AuthorInBookWhereInput | undefined;

  @TypeGraphQL.Field(_type => AuthorInBookWhereInput, {
    nullable: true
  })
  none?: AuthorInBookWhereInput | undefined;
}
