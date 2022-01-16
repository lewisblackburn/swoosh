import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FavouriteCreateWithoutBooksInput } from "../inputs/FavouriteCreateWithoutBooksInput";
import { FavouriteUpdateWithoutBooksInput } from "../inputs/FavouriteUpdateWithoutBooksInput";
import { FavouriteWhereUniqueInput } from "../inputs/FavouriteWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FavouriteUpsertWithWhereUniqueWithoutBooksInput {
  @TypeGraphQL.Field(_type => FavouriteWhereUniqueInput, {
    nullable: false
  })
  where!: FavouriteWhereUniqueInput;

  @TypeGraphQL.Field(_type => FavouriteUpdateWithoutBooksInput, {
    nullable: false
  })
  update!: FavouriteUpdateWithoutBooksInput;

  @TypeGraphQL.Field(_type => FavouriteCreateWithoutBooksInput, {
    nullable: false
  })
  create!: FavouriteCreateWithoutBooksInput;
}
