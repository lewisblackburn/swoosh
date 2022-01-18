import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonUpdateWithoutSongsInput } from "../inputs/PersonUpdateWithoutSongsInput";
import { PersonWhereUniqueInput } from "../inputs/PersonWhereUniqueInput";

@TypeGraphQL.InputType("PersonUpdateWithWhereUniqueWithoutSongsInput", {
  isAbstract: true
})
export class PersonUpdateWithWhereUniqueWithoutSongsInput {
  @TypeGraphQL.Field(_type => PersonWhereUniqueInput, {
    nullable: false
  })
  where!: PersonWhereUniqueInput;

  @TypeGraphQL.Field(_type => PersonUpdateWithoutSongsInput, {
    nullable: false
  })
  data!: PersonUpdateWithoutSongsInput;
}
