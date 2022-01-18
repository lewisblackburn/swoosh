import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenreCreateWithoutSongsInput } from "../inputs/GenreCreateWithoutSongsInput";
import { GenreWhereUniqueInput } from "../inputs/GenreWhereUniqueInput";

@TypeGraphQL.InputType("GenreCreateOrConnectWithoutSongsInput", {
  isAbstract: true
})
export class GenreCreateOrConnectWithoutSongsInput {
  @TypeGraphQL.Field(_type => GenreWhereUniqueInput, {
    nullable: false
  })
  where!: GenreWhereUniqueInput;

  @TypeGraphQL.Field(_type => GenreCreateWithoutSongsInput, {
    nullable: false
  })
  create!: GenreCreateWithoutSongsInput;
}
