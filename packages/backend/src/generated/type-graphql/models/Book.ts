import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { BookLike } from "../models/BookLike";
import { BookReview } from "../models/BookReview";
import { Genre } from "../models/Genre";
import { Person } from "../models/Person";
import { BookCount } from "../resolvers/outputs/BookCount";

@TypeGraphQL.ObjectType("Book", {
  isAbstract: true
})
export class Book {
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
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  poster!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  locked!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  released?: Date | null;

  authors?: Person[];

  genres?: Genre[];

  reviews?: BookReview[];

  likes?: BookLike[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => BookCount, {
    nullable: true
  })
  _count?: BookCount | null;
}
