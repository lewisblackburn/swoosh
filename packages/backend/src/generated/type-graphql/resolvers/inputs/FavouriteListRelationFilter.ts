import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FavouriteWhereInput } from "../inputs/FavouriteWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FavouriteListRelationFilter {
  @TypeGraphQL.Field(_type => FavouriteWhereInput, {
    nullable: true
  })
  every?: FavouriteWhereInput | undefined;

  @TypeGraphQL.Field(_type => FavouriteWhereInput, {
    nullable: true
  })
  some?: FavouriteWhereInput | undefined;

  @TypeGraphQL.Field(_type => FavouriteWhereInput, {
    nullable: true
  })
  none?: FavouriteWhereInput | undefined;
}
