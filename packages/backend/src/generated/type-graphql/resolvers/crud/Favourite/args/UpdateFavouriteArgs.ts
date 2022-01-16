import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FavouriteUpdateInput } from "../../../inputs/FavouriteUpdateInput";
import { FavouriteWhereUniqueInput } from "../../../inputs/FavouriteWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateFavouriteArgs {
  @TypeGraphQL.Field(_type => FavouriteUpdateInput, {
    nullable: false
  })
  data!: FavouriteUpdateInput;

  @TypeGraphQL.Field(_type => FavouriteWhereUniqueInput, {
    nullable: false
  })
  where!: FavouriteWhereUniqueInput;
}
