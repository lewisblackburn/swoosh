import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorInBookScalarWhereInput } from "../inputs/AuthorInBookScalarWhereInput";
import { AuthorInBookUpdateManyMutationInput } from "../inputs/AuthorInBookUpdateManyMutationInput";

@TypeGraphQL.InputType("AuthorInBookUpdateManyWithWhereWithoutPersonInput", {
  isAbstract: true
})
export class AuthorInBookUpdateManyWithWhereWithoutPersonInput {
  @TypeGraphQL.Field(_type => AuthorInBookScalarWhereInput, {
    nullable: false
  })
  where!: AuthorInBookScalarWhereInput;

  @TypeGraphQL.Field(_type => AuthorInBookUpdateManyMutationInput, {
    nullable: false
  })
  data!: AuthorInBookUpdateManyMutationInput;
}
