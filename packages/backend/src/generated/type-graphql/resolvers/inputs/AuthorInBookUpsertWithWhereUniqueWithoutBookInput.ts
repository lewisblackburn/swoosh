import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorInBookCreateWithoutBookInput } from "../inputs/AuthorInBookCreateWithoutBookInput";
import { AuthorInBookUpdateWithoutBookInput } from "../inputs/AuthorInBookUpdateWithoutBookInput";
import { AuthorInBookWhereUniqueInput } from "../inputs/AuthorInBookWhereUniqueInput";

@TypeGraphQL.InputType("AuthorInBookUpsertWithWhereUniqueWithoutBookInput", {
  isAbstract: true
})
export class AuthorInBookUpsertWithWhereUniqueWithoutBookInput {
  @TypeGraphQL.Field(_type => AuthorInBookWhereUniqueInput, {
    nullable: false
  })
  where!: AuthorInBookWhereUniqueInput;

  @TypeGraphQL.Field(_type => AuthorInBookUpdateWithoutBookInput, {
    nullable: false
  })
  update!: AuthorInBookUpdateWithoutBookInput;

  @TypeGraphQL.Field(_type => AuthorInBookCreateWithoutBookInput, {
    nullable: false
  })
  create!: AuthorInBookCreateWithoutBookInput;
}
