import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorInBookUpdateWithoutBookInput } from "../inputs/AuthorInBookUpdateWithoutBookInput";
import { AuthorInBookWhereUniqueInput } from "../inputs/AuthorInBookWhereUniqueInput";

@TypeGraphQL.InputType("AuthorInBookUpdateWithWhereUniqueWithoutBookInput", {
  isAbstract: true
})
export class AuthorInBookUpdateWithWhereUniqueWithoutBookInput {
  @TypeGraphQL.Field(_type => AuthorInBookWhereUniqueInput, {
    nullable: false
  })
  where!: AuthorInBookWhereUniqueInput;

  @TypeGraphQL.Field(_type => AuthorInBookUpdateWithoutBookInput, {
    nullable: false
  })
  data!: AuthorInBookUpdateWithoutBookInput;
}
