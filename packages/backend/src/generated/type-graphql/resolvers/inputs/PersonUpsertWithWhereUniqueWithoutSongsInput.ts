import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateWithoutSongsInput } from "../inputs/PersonCreateWithoutSongsInput";
import { PersonUpdateWithoutSongsInput } from "../inputs/PersonUpdateWithoutSongsInput";
import { PersonWhereUniqueInput } from "../inputs/PersonWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PersonUpsertWithWhereUniqueWithoutSongsInput {
  @TypeGraphQL.Field(_type => PersonWhereUniqueInput, {
    nullable: false
  })
  where!: PersonWhereUniqueInput;

  @TypeGraphQL.Field(_type => PersonUpdateWithoutSongsInput, {
    nullable: false
  })
  update!: PersonUpdateWithoutSongsInput;

  @TypeGraphQL.Field(_type => PersonCreateWithoutSongsInput, {
    nullable: false
  })
  create!: PersonCreateWithoutSongsInput;
}
