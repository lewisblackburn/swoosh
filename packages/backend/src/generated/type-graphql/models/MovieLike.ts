import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Movie } from "../models/Movie";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("MovieLike", {
  isAbstract: true
})
export class MovieLike {
  user?: User;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  movie?: Movie;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  movieId!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;
}
