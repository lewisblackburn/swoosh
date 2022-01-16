import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FavouriteOrderByWithRelationInput } from "../../../inputs/FavouriteOrderByWithRelationInput";
import { FavouriteWhereInput } from "../../../inputs/FavouriteWhereInput";
import { FavouriteWhereUniqueInput } from "../../../inputs/FavouriteWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateFavouriteArgs {
  @TypeGraphQL.Field(_type => FavouriteWhereInput, {
    nullable: true
  })
  where?: FavouriteWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FavouriteOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: FavouriteOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => FavouriteWhereUniqueInput, {
    nullable: true
  })
  cursor?: FavouriteWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
