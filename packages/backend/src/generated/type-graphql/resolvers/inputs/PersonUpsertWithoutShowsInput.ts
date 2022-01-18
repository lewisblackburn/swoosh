import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateWithoutShowsInput } from "../inputs/PersonCreateWithoutShowsInput";
import { PersonUpdateWithoutShowsInput } from "../inputs/PersonUpdateWithoutShowsInput";

@TypeGraphQL.InputType("PersonUpsertWithoutShowsInput", {
  isAbstract: true
})
export class PersonUpsertWithoutShowsInput {
  @TypeGraphQL.Field(_type => PersonUpdateWithoutShowsInput, {
    nullable: false
  })
  update!: PersonUpdateWithoutShowsInput;

  @TypeGraphQL.Field(_type => PersonCreateWithoutShowsInput, {
    nullable: false
  })
  create!: PersonCreateWithoutShowsInput;
}
