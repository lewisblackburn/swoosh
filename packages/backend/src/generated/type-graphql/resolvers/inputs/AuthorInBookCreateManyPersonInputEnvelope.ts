import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorInBookCreateManyPersonInput } from "../inputs/AuthorInBookCreateManyPersonInput";

@TypeGraphQL.InputType("AuthorInBookCreateManyPersonInputEnvelope", {
  isAbstract: true
})
export class AuthorInBookCreateManyPersonInputEnvelope {
  @TypeGraphQL.Field(_type => [AuthorInBookCreateManyPersonInput], {
    nullable: false
  })
  data!: AuthorInBookCreateManyPersonInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
