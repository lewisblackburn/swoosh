import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenreCreateWithoutBooksInput } from "../inputs/GenreCreateWithoutBooksInput";
import { GenreUpdateWithoutBooksInput } from "../inputs/GenreUpdateWithoutBooksInput";
import { GenreWhereUniqueInput } from "../inputs/GenreWhereUniqueInput";

@TypeGraphQL.InputType("GenreUpsertWithWhereUniqueWithoutBooksInput", {
  isAbstract: true
})
export class GenreUpsertWithWhereUniqueWithoutBooksInput {
  @TypeGraphQL.Field(_type => GenreWhereUniqueInput, {
    nullable: false
  })
  where!: GenreWhereUniqueInput;

  @TypeGraphQL.Field(_type => GenreUpdateWithoutBooksInput, {
    nullable: false
  })
  update!: GenreUpdateWithoutBooksInput;

  @TypeGraphQL.Field(_type => GenreCreateWithoutBooksInput, {
    nullable: false
  })
  create!: GenreCreateWithoutBooksInput;
}
