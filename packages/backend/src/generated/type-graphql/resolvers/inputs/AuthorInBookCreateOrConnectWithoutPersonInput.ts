import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorInBookCreateWithoutPersonInput } from "../inputs/AuthorInBookCreateWithoutPersonInput";
import { AuthorInBookWhereUniqueInput } from "../inputs/AuthorInBookWhereUniqueInput";

@TypeGraphQL.InputType("AuthorInBookCreateOrConnectWithoutPersonInput", {
  isAbstract: true
})
export class AuthorInBookCreateOrConnectWithoutPersonInput {
  @TypeGraphQL.Field(_type => AuthorInBookWhereUniqueInput, {
    nullable: false
  })
  where!: AuthorInBookWhereUniqueInput;

  @TypeGraphQL.Field(_type => AuthorInBookCreateWithoutPersonInput, {
    nullable: false
  })
  create!: AuthorInBookCreateWithoutPersonInput;
}
