import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookUpdateWithoutGenresInput } from "../inputs/BookUpdateWithoutGenresInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType("BookUpdateWithWhereUniqueWithoutGenresInput", {
  isAbstract: true
})
export class BookUpdateWithWhereUniqueWithoutGenresInput {
  @TypeGraphQL.Field(_type => BookWhereUniqueInput, {
    nullable: false
  })
  where!: BookWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookUpdateWithoutGenresInput, {
    nullable: false
  })
  data!: BookUpdateWithoutGenresInput;
}
