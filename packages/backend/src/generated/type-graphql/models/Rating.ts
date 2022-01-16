import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Movie } from "../models/Movie";
import { Show } from "../models/Show";
import { RatingCount } from "../resolvers/outputs/RatingCount";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Rating {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  age!: string;

  movies?: Movie[];

  shows?: Show[];

  @TypeGraphQL.Field(_type => RatingCount, {
    nullable: true
  })
  _count?: RatingCount | null;
}
