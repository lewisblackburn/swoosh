import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateWithoutMoviesInput } from "../inputs/PersonCreateWithoutMoviesInput";
import { PersonUpdateWithoutMoviesInput } from "../inputs/PersonUpdateWithoutMoviesInput";

@TypeGraphQL.InputType("PersonUpsertWithoutMoviesInput", {
  isAbstract: true
})
export class PersonUpsertWithoutMoviesInput {
  @TypeGraphQL.Field(_type => PersonUpdateWithoutMoviesInput, {
    nullable: false
  })
  update!: PersonUpdateWithoutMoviesInput;

  @TypeGraphQL.Field(_type => PersonCreateWithoutMoviesInput, {
    nullable: false
  })
  create!: PersonCreateWithoutMoviesInput;
}
