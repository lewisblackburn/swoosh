import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Book } from "../models/Book";
import { Movie } from "../models/Movie";
import { Show } from "../models/Show";
import { Song } from "../models/Song";
import { User } from "../models/User";
import { Vote } from "../models/Vote";
import { ReviewCount } from "../resolvers/outputs/ReviewCount";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Review {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  review!: string;

  user?: User | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  userId?: number | null;

  movie?: Movie | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  movieId?: number | null;

  show?: Show | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  showId?: number | null;

  book?: Book | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  bookId?: number | null;

  song?: Song | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  songId?: number | null;

  vote?: Vote[];

  @TypeGraphQL.Field(_type => ReviewCount, {
    nullable: true
  })
  _count?: ReviewCount | null;
}
