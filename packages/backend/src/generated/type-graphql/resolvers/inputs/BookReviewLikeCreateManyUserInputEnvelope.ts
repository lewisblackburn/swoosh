import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookReviewLikeCreateManyUserInput } from "../inputs/BookReviewLikeCreateManyUserInput";

@TypeGraphQL.InputType("BookReviewLikeCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class BookReviewLikeCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [BookReviewLikeCreateManyUserInput], {
    nullable: false
  })
  data!: BookReviewLikeCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
