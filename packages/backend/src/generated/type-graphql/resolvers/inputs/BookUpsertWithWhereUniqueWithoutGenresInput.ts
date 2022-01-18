import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateWithoutGenresInput } from "../inputs/BookCreateWithoutGenresInput";
import { BookUpdateWithoutGenresInput } from "../inputs/BookUpdateWithoutGenresInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType("BookUpsertWithWhereUniqueWithoutGenresInput", {
  isAbstract: true
})
export class BookUpsertWithWhereUniqueWithoutGenresInput {
  @TypeGraphQL.Field(_type => BookWhereUniqueInput, {
    nullable: false
  })
  where!: BookWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookUpdateWithoutGenresInput, {
    nullable: false
  })
  update!: BookUpdateWithoutGenresInput;

  @TypeGraphQL.Field(_type => BookCreateWithoutGenresInput, {
    nullable: false
  })
  create!: BookCreateWithoutGenresInput;
}
