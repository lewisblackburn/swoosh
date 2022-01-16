import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Book } from "../models/Book";
import { Movie } from "../models/Movie";
import { Person } from "../models/Person";
import { Show } from "../models/Show";
import { Song } from "../models/Song";
import { User } from "../models/User";
import { FavouriteCount } from "../resolvers/outputs/FavouriteCount";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Favourite {
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

  songs?: Song[];

  books?: Book[];

  people?: Person[];

  @TypeGraphQL.Field(_type => FavouriteCount, {
    nullable: true
  })
  _count?: FavouriteCount | null;
}
