import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonCreateWithoutFavouritesInput } from "../inputs/PersonCreateWithoutFavouritesInput";
import { PersonUpdateWithoutFavouritesInput } from "../inputs/PersonUpdateWithoutFavouritesInput";
import { PersonWhereUniqueInput } from "../inputs/PersonWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PersonUpsertWithWhereUniqueWithoutFavouritesInput {
  @TypeGraphQL.Field(_type => PersonWhereUniqueInput, {
    nullable: false
  })
  where!: PersonWhereUniqueInput;

  @TypeGraphQL.Field(_type => PersonUpdateWithoutFavouritesInput, {
    nullable: false
  })
  update!: PersonUpdateWithoutFavouritesInput;

  @TypeGraphQL.Field(_type => PersonCreateWithoutFavouritesInput, {
    nullable: false
  })
  create!: PersonCreateWithoutFavouritesInput;
}
