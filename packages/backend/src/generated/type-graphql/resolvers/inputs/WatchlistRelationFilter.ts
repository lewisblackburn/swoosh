import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WatchlistWhereInput } from "../inputs/WatchlistWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class WatchlistRelationFilter {
  @TypeGraphQL.Field(_type => WatchlistWhereInput, {
    nullable: true
  })
  is?: WatchlistWhereInput | undefined;

  @TypeGraphQL.Field(_type => WatchlistWhereInput, {
    nullable: true
  })
  isNot?: WatchlistWhereInput | undefined;
}
