import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FavouriteCreateWithoutSongsInput } from "../inputs/FavouriteCreateWithoutSongsInput";
import { FavouriteUpdateWithoutSongsInput } from "../inputs/FavouriteUpdateWithoutSongsInput";
import { FavouriteWhereUniqueInput } from "../inputs/FavouriteWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FavouriteUpsertWithWhereUniqueWithoutSongsInput {
  @TypeGraphQL.Field(_type => FavouriteWhereUniqueInput, {
    nullable: false
  })
  where!: FavouriteWhereUniqueInput;

  @TypeGraphQL.Field(_type => FavouriteUpdateWithoutSongsInput, {
    nullable: false
  })
  update!: FavouriteUpdateWithoutSongsInput;

  @TypeGraphQL.Field(_type => FavouriteCreateWithoutSongsInput, {
    nullable: false
  })
  create!: FavouriteCreateWithoutSongsInput;
}
