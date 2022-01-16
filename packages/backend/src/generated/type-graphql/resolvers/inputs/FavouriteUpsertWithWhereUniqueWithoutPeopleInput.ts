import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FavouriteCreateWithoutPeopleInput } from "../inputs/FavouriteCreateWithoutPeopleInput";
import { FavouriteUpdateWithoutPeopleInput } from "../inputs/FavouriteUpdateWithoutPeopleInput";
import { FavouriteWhereUniqueInput } from "../inputs/FavouriteWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FavouriteUpsertWithWhereUniqueWithoutPeopleInput {
  @TypeGraphQL.Field(_type => FavouriteWhereUniqueInput, {
    nullable: false
  })
  where!: FavouriteWhereUniqueInput;

  @TypeGraphQL.Field(_type => FavouriteUpdateWithoutPeopleInput, {
    nullable: false
  })
  update!: FavouriteUpdateWithoutPeopleInput;

  @TypeGraphQL.Field(_type => FavouriteCreateWithoutPeopleInput, {
    nullable: false
  })
  create!: FavouriteCreateWithoutPeopleInput;
}
