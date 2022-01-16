import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateWithoutGenresInput } from "../inputs/BookCreateWithoutGenresInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BookCreateOrConnectWithoutGenresInput {
  @TypeGraphQL.Field(_type => BookWhereUniqueInput, {
    nullable: false
  })
  where!: BookWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookCreateWithoutGenresInput, {
    nullable: false
  })
  create!: BookCreateWithoutGenresInput;
}
