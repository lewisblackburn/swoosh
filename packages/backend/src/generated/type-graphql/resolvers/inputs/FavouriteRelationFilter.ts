import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FavouriteWhereInput } from "../inputs/FavouriteWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FavouriteRelationFilter {
  @TypeGraphQL.Field(_type => FavouriteWhereInput, {
    nullable: true
  })
  is?: FavouriteWhereInput | undefined;

  @TypeGraphQL.Field(_type => FavouriteWhereInput, {
    nullable: true
  })
  isNot?: FavouriteWhereInput | undefined;
}
