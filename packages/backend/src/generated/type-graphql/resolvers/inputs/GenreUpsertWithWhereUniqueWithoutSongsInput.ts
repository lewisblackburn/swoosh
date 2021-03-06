import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenreCreateWithoutSongsInput } from "../inputs/GenreCreateWithoutSongsInput";
import { GenreUpdateWithoutSongsInput } from "../inputs/GenreUpdateWithoutSongsInput";
import { GenreWhereUniqueInput } from "../inputs/GenreWhereUniqueInput";

@TypeGraphQL.InputType("GenreUpsertWithWhereUniqueWithoutSongsInput", {
  isAbstract: true
})
export class GenreUpsertWithWhereUniqueWithoutSongsInput {
  @TypeGraphQL.Field(_type => GenreWhereUniqueInput, {
    nullable: false
  })
  where!: GenreWhereUniqueInput;

  @TypeGraphQL.Field(_type => GenreUpdateWithoutSongsInput, {
    nullable: false
  })
  update!: GenreUpdateWithoutSongsInput;

  @TypeGraphQL.Field(_type => GenreCreateWithoutSongsInput, {
    nullable: false
  })
  create!: GenreCreateWithoutSongsInput;
}
