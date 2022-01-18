import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenreUpdateWithoutShowsInput } from "../inputs/GenreUpdateWithoutShowsInput";
import { GenreWhereUniqueInput } from "../inputs/GenreWhereUniqueInput";

@TypeGraphQL.InputType("GenreUpdateWithWhereUniqueWithoutShowsInput", {
  isAbstract: true
})
export class GenreUpdateWithWhereUniqueWithoutShowsInput {
  @TypeGraphQL.Field(_type => GenreWhereUniqueInput, {
    nullable: false
  })
  where!: GenreWhereUniqueInput;

  @TypeGraphQL.Field(_type => GenreUpdateWithoutShowsInput, {
    nullable: false
  })
  data!: GenreUpdateWithoutShowsInput;
}
