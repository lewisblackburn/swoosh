import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { MovieReview } from "../models/MovieReview";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("MovieReviewLike", {
  isAbstract: true
})
export class MovieReviewLike {
  user?: User;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  movieReview?: MovieReview;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  movieReviewId!: number;
}
