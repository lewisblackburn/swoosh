import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookReviewLikeUpdateWithoutUserInput } from "../inputs/BookReviewLikeUpdateWithoutUserInput";
import { BookReviewLikeWhereUniqueInput } from "../inputs/BookReviewLikeWhereUniqueInput";

@TypeGraphQL.InputType("BookReviewLikeUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class BookReviewLikeUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => BookReviewLikeWhereUniqueInput, {
    nullable: false
  })
  where!: BookReviewLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookReviewLikeUpdateWithoutUserInput, {
    nullable: false
  })
  data!: BookReviewLikeUpdateWithoutUserInput;
}
