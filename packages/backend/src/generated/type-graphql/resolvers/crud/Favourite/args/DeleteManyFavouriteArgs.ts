import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FavouriteWhereInput } from "../../../inputs/FavouriteWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyFavouriteArgs {
  @TypeGraphQL.Field(_type => FavouriteWhereInput, {
    nullable: true
  })
  where?: FavouriteWhereInput | undefined;
}
