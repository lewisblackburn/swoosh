import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FavouriteCreateInput } from "../../../inputs/FavouriteCreateInput";

@TypeGraphQL.ArgsType()
export class CreateFavouriteArgs {
  @TypeGraphQL.Field(_type => FavouriteCreateInput, {
    nullable: false
  })
  data!: FavouriteCreateInput;
}
