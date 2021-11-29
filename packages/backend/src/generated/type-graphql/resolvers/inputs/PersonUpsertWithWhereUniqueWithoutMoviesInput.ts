import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateWithoutMoviesInput } from "../inputs/PersonCreateWithoutMoviesInput";
import { PersonUpdateWithoutMoviesInput } from "../inputs/PersonUpdateWithoutMoviesInput";
import { PersonWhereUniqueInput } from "../inputs/PersonWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PersonUpsertWithWhereUniqueWithoutMoviesInput {
  @TypeGraphQL.Field(_type => PersonWhereUniqueInput, {
    nullable: false
  })
  where!: PersonWhereUniqueInput;

  @TypeGraphQL.Field(_type => PersonUpdateWithoutMoviesInput, {
    nullable: false
  })
  update!: PersonUpdateWithoutMoviesInput;

  @TypeGraphQL.Field(_type => PersonCreateWithoutMoviesInput, {
    nullable: false
  })
  create!: PersonCreateWithoutMoviesInput;
}
