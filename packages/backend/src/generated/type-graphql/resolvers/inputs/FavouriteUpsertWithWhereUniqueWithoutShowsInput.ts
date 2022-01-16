import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FavouriteCreateWithoutShowsInput } from "../inputs/FavouriteCreateWithoutShowsInput";
import { FavouriteUpdateWithoutShowsInput } from "../inputs/FavouriteUpdateWithoutShowsInput";
import { FavouriteWhereUniqueInput } from "../inputs/FavouriteWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FavouriteUpsertWithWhereUniqueWithoutShowsInput {
  @TypeGraphQL.Field(_type => FavouriteWhereUniqueInput, {
    nullable: false
  })
  where!: FavouriteWhereUniqueInput;

  @TypeGraphQL.Field(_type => FavouriteUpdateWithoutShowsInput, {
    nullable: false
  })
  update!: FavouriteUpdateWithoutShowsInput;

  @TypeGraphQL.Field(_type => FavouriteCreateWithoutShowsInput, {
    nullable: false
  })
  create!: FavouriteCreateWithoutShowsInput;
}
