import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorInBookCreateWithoutPersonInput } from "../inputs/AuthorInBookCreateWithoutPersonInput";
import { AuthorInBookUpdateWithoutPersonInput } from "../inputs/AuthorInBookUpdateWithoutPersonInput";
import { AuthorInBookWhereUniqueInput } from "../inputs/AuthorInBookWhereUniqueInput";

@TypeGraphQL.InputType("AuthorInBookUpsertWithWhereUniqueWithoutPersonInput", {
  isAbstract: true
})
export class AuthorInBookUpsertWithWhereUniqueWithoutPersonInput {
  @TypeGraphQL.Field(_type => AuthorInBookWhereUniqueInput, {
    nullable: false
  })
  where!: AuthorInBookWhereUniqueInput;

  @TypeGraphQL.Field(_type => AuthorInBookUpdateWithoutPersonInput, {
    nullable: false
  })
  update!: AuthorInBookUpdateWithoutPersonInput;

  @TypeGraphQL.Field(_type => AuthorInBookCreateWithoutPersonInput, {
    nullable: false
  })
  create!: AuthorInBookCreateWithoutPersonInput;
}
