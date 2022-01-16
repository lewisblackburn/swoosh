import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FavouriteAvgAggregate } from "../outputs/FavouriteAvgAggregate";
import { FavouriteCountAggregate } from "../outputs/FavouriteCountAggregate";
import { FavouriteMaxAggregate } from "../outputs/FavouriteMaxAggregate";
import { FavouriteMinAggregate } from "../outputs/FavouriteMinAggregate";
import { FavouriteSumAggregate } from "../outputs/FavouriteSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class FavouriteGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  @TypeGraphQL.Field(_type => FavouriteCountAggregate, {
    nullable: true
  })
  _count!: FavouriteCountAggregate | null;

  @TypeGraphQL.Field(_type => FavouriteAvgAggregate, {
    nullable: true
  })
  _avg!: FavouriteAvgAggregate | null;

  @TypeGraphQL.Field(_type => FavouriteSumAggregate, {
    nullable: true
  })
  _sum!: FavouriteSumAggregate | null;

  @TypeGraphQL.Field(_type => FavouriteMinAggregate, {
    nullable: true
  })
  _min!: FavouriteMinAggregate | null;

  @TypeGraphQL.Field(_type => FavouriteMaxAggregate, {
    nullable: true
  })
  _max!: FavouriteMaxAggregate | null;
}
