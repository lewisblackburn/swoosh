import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorInBookCreateWithoutBookInput } from "../inputs/AuthorInBookCreateWithoutBookInput";
import { AuthorInBookWhereUniqueInput } from "../inputs/AuthorInBookWhereUniqueInput";

@TypeGraphQL.InputType("AuthorInBookCreateOrConnectWithoutBookInput", {
  isAbstract: true
})
export class AuthorInBookCreateOrConnectWithoutBookInput {
  @TypeGraphQL.Field(_type => AuthorInBookWhereUniqueInput, {
    nullable: false
  })
  where!: AuthorInBookWhereUniqueInput;

  @TypeGraphQL.Field(_type => AuthorInBookCreateWithoutBookInput, {
    nullable: false
  })
  create!: AuthorInBookCreateWithoutBookInput;
}
