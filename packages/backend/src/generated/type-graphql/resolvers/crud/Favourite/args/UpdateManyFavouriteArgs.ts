import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FavouriteUpdateManyMutationInput } from "../../../inputs/FavouriteUpdateManyMutationInput";
import { FavouriteWhereInput } from "../../../inputs/FavouriteWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyFavouriteArgs {
  @TypeGraphQL.Field(_type => FavouriteUpdateManyMutationInput, {
    nullable: false
  })
  data!: FavouriteUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => FavouriteWhereInput, {
    nullable: true
  })
  where?: FavouriteWhereInput | undefined;
}
