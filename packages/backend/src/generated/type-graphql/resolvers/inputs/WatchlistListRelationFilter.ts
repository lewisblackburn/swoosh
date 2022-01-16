import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { WatchlistWhereInput } from "../inputs/WatchlistWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class WatchlistListRelationFilter {
  @TypeGraphQL.Field(_type => WatchlistWhereInput, {
    nullable: true
  })
  every?: WatchlistWhereInput | undefined;

  @TypeGraphQL.Field(_type => WatchlistWhereInput, {
    nullable: true
  })
  some?: WatchlistWhereInput | undefined;

  @TypeGraphQL.Field(_type => WatchlistWhereInput, {
    nullable: true
  })
  none?: WatchlistWhereInput | undefined;
}
