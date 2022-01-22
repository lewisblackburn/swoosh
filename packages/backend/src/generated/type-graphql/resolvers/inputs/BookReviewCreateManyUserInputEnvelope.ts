import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookReviewCreateManyUserInput } from "../inputs/BookReviewCreateManyUserInput";

@TypeGraphQL.InputType("BookReviewCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class BookReviewCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [BookReviewCreateManyUserInput], {
    nullable: false
  })
  data!: BookReviewCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
