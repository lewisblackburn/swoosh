import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FavouriteWhereUniqueInput } from "../../../inputs/FavouriteWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueFavouriteArgs {
  @TypeGraphQL.Field(_type => FavouriteWhereUniqueInput, {
    nullable: false
  })
  where!: FavouriteWhereUniqueInput;
}
