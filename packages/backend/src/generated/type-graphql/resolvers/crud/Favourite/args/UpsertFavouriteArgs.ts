import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FavouriteCreateInput } from "../../../inputs/FavouriteCreateInput";
import { FavouriteUpdateInput } from "../../../inputs/FavouriteUpdateInput";
import { FavouriteWhereUniqueInput } from "../../../inputs/FavouriteWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertFavouriteArgs {
  @TypeGraphQL.Field(_type => FavouriteWhereUniqueInput, {
    nullable: false
  })
  where!: FavouriteWhereUniqueInput;

  @TypeGraphQL.Field(_type => FavouriteCreateInput, {
    nullable: false
  })
  create!: FavouriteCreateInput;

  @TypeGraphQL.Field(_type => FavouriteUpdateInput, {
    nullable: false
  })
  update!: FavouriteUpdateInput;
}
