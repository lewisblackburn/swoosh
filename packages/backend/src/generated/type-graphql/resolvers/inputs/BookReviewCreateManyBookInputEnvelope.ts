import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookReviewCreateManyBookInput } from "../inputs/BookReviewCreateManyBookInput";

@TypeGraphQL.InputType("BookReviewCreateManyBookInputEnvelope", {
  isAbstract: true
})
export class BookReviewCreateManyBookInputEnvelope {
  @TypeGraphQL.Field(_type => [BookReviewCreateManyBookInput], {
    nullable: false
  })
  data!: BookReviewCreateManyBookInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
