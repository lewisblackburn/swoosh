import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookReviewUpdateWithoutUserInput } from "../inputs/BookReviewUpdateWithoutUserInput";
import { BookReviewWhereUniqueInput } from "../inputs/BookReviewWhereUniqueInput";

@TypeGraphQL.InputType("BookReviewUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class BookReviewUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => BookReviewWhereUniqueInput, {
    nullable: false
  })
  where!: BookReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookReviewUpdateWithoutUserInput, {
    nullable: false
  })
  data!: BookReviewUpdateWithoutUserInput;
}
