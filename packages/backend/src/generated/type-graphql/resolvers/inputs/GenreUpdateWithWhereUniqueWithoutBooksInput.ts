import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenreUpdateWithoutBooksInput } from "../inputs/GenreUpdateWithoutBooksInput";
import { GenreWhereUniqueInput } from "../inputs/GenreWhereUniqueInput";

@TypeGraphQL.InputType("GenreUpdateWithWhereUniqueWithoutBooksInput", {
  isAbstract: true
})
export class GenreUpdateWithWhereUniqueWithoutBooksInput {
  @TypeGraphQL.Field(_type => GenreWhereUniqueInput, {
    nullable: false
  })
  where!: GenreWhereUniqueInput;

  @TypeGraphQL.Field(_type => GenreUpdateWithoutBooksInput, {
    nullable: false
  })
  data!: GenreUpdateWithoutBooksInput;
}
