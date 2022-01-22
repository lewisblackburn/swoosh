import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookReviewLikeCreateManyBookReviewInput } from "../inputs/BookReviewLikeCreateManyBookReviewInput";

@TypeGraphQL.InputType("BookReviewLikeCreateManyBookReviewInputEnvelope", {
  isAbstract: true
})
export class BookReviewLikeCreateManyBookReviewInputEnvelope {
  @TypeGraphQL.Field(_type => [BookReviewLikeCreateManyBookReviewInput], {
    nullable: false
  })
  data!: BookReviewLikeCreateManyBookReviewInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
