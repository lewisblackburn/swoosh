import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("AuthorInBookCreateManyPersonInput", {
  isAbstract: true
})
export class AuthorInBookCreateManyPersonInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  bookId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  stagename!: string;
}
