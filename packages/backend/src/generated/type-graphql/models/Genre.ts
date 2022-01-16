import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Book } from "../models/Book";
import { Movie } from "../models/Movie";
import { Show } from "../models/Show";
import { Song } from "../models/Song";
import { GenreCount } from "../resolvers/outputs/GenreCount";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Genre {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  movies?: Movie[];

  shows?: Show[];

  songs?: Song[];

  books?: Book[];

  @TypeGraphQL.Field(_type => GenreCount, {
    nullable: true
  })
  _count?: GenreCount | null;
}
