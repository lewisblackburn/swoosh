import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FavouriteCreateWithoutUserInput } from "../inputs/FavouriteCreateWithoutUserInput";
import { FavouriteUpdateWithoutUserInput } from "../inputs/FavouriteUpdateWithoutUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FavouriteUpsertWithoutUserInput {
  @TypeGraphQL.Field(_type => FavouriteUpdateWithoutUserInput, {
    nullable: false
  })
  update!: FavouriteUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => FavouriteCreateWithoutUserInput, {
    nullable: false
  })
  create!: FavouriteCreateWithoutUserInput;
}
