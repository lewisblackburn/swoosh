import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Book } from "../models/Book";
import { Movie } from "../models/Movie";
import { Song } from "../models/Song";
import { Career } from "../enums/Career";
import { PersonCount } from "../resolvers/outputs/PersonCount";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Person {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Career, {
    nullable: false
  })
  type!: "AUTHOR" | "ARTIST" | "ACTOR";

  books?: Book[];

  movies?: Movie[];

  songs?: Song[];

  @TypeGraphQL.Field(_type => PersonCount, {
    nullable: true
  })
  _count?: PersonCount | null;
}
