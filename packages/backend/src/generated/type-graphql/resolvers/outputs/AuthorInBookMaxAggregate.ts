import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("AuthorInBookMaxAggregate", {
  isAbstract: true
})
export class AuthorInBookMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  bookId!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  personId!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  stagename!: string | null;
}
