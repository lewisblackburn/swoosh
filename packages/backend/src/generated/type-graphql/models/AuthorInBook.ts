import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Book } from "../models/Book";
import { Person } from "../models/Person";

@TypeGraphQL.ObjectType("AuthorInBook", {
  isAbstract: true
})
export class AuthorInBook {
  book?: Book;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  bookId!: number;

  person?: Person;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  personId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  stagename!: string;
}
