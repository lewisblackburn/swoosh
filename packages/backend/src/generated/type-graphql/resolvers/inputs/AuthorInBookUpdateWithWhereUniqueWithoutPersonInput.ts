import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorInBookUpdateWithoutPersonInput } from "../inputs/AuthorInBookUpdateWithoutPersonInput";
import { AuthorInBookWhereUniqueInput } from "../inputs/AuthorInBookWhereUniqueInput";

@TypeGraphQL.InputType("AuthorInBookUpdateWithWhereUniqueWithoutPersonInput", {
  isAbstract: true
})
export class AuthorInBookUpdateWithWhereUniqueWithoutPersonInput {
  @TypeGraphQL.Field(_type => AuthorInBookWhereUniqueInput, {
    nullable: false
  })
  where!: AuthorInBookWhereUniqueInput;

  @TypeGraphQL.Field(_type => AuthorInBookUpdateWithoutPersonInput, {
    nullable: false
  })
  data!: AuthorInBookUpdateWithoutPersonInput;
}
