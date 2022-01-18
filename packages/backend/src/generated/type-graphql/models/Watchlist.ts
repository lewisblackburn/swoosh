import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Movie } from "../models/Movie";
import { Show } from "../models/Show";
import { User } from "../models/User";
import { WatchlistCount } from "../resolvers/outputs/WatchlistCount";

@TypeGraphQL.ObjectType("Watchlist", {
  isAbstract: true
})
export class Watchlist {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  user?: User;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  movies?: Movie[];

  shows?: Show[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => WatchlistCount, {
    nullable: true
  })
  _count?: WatchlistCount | null;
}
