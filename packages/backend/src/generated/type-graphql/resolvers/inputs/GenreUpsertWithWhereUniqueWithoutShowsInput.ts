import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenreCreateWithoutShowsInput } from "../inputs/GenreCreateWithoutShowsInput";
import { GenreUpdateWithoutShowsInput } from "../inputs/GenreUpdateWithoutShowsInput";
import { GenreWhereUniqueInput } from "../inputs/GenreWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class GenreUpsertWithWhereUniqueWithoutShowsInput {
  @TypeGraphQL.Field(_type => GenreWhereUniqueInput, {
    nullable: false
  })
  where!: GenreWhereUniqueInput;

  @TypeGraphQL.Field(_type => GenreUpdateWithoutShowsInput, {
    nullable: false
  })
  update!: GenreUpdateWithoutShowsInput;

  @TypeGraphQL.Field(_type => GenreCreateWithoutShowsInput, {
    nullable: false
  })
  create!: GenreCreateWithoutShowsInput;
}
