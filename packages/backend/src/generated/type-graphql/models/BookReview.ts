import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Book } from "../models/Book";
import { BookReviewLike } from "../models/BookReviewLike";
import { User } from "../models/User";
import { BookReviewCount } from "../resolvers/outputs/BookReviewCount";

@TypeGraphQL.ObjectType("BookReview", {
  isAbstract: true
})
export class BookReview {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  review?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  rating!: number;

  likes?: BookReviewLike[];

  user?: User;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  book?: Book;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  bookId!: number;

  @TypeGraphQL.Field(_type => BookReviewCount, {
    nullable: true
  })
  _count?: BookReviewCount | null;
}
