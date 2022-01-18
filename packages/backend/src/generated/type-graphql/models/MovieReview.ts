import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Movie } from "../models/Movie";
import { MovieReviewLike } from "../models/MovieReviewLike";
import { User } from "../models/User";
import { MovieReviewCount } from "../resolvers/outputs/MovieReviewCount";

@TypeGraphQL.ObjectType("MovieReview", {
  isAbstract: true
})
export class MovieReview {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  review?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  rating!: number;

  likes?: MovieReviewLike[];

  User?: User | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  userId?: number | null;

  Movie?: Movie | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  movieId?: number | null;

  @TypeGraphQL.Field(_type => MovieReviewCount, {
    nullable: true
  })
  _count?: MovieReviewCount | null;
}
