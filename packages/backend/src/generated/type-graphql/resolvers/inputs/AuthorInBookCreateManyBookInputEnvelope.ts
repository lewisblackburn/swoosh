import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorInBookCreateManyBookInput } from "../inputs/AuthorInBookCreateManyBookInput";

@TypeGraphQL.InputType("AuthorInBookCreateManyBookInputEnvelope", {
  isAbstract: true
})
export class AuthorInBookCreateManyBookInputEnvelope {
  @TypeGraphQL.Field(_type => [AuthorInBookCreateManyBookInput], {
    nullable: false
  })
  data!: AuthorInBookCreateManyBookInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
