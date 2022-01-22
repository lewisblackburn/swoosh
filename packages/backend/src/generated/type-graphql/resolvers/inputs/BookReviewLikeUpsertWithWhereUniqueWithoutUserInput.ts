import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookReviewLikeCreateWithoutUserInput } from "../inputs/BookReviewLikeCreateWithoutUserInput";
import { BookReviewLikeUpdateWithoutUserInput } from "../inputs/BookReviewLikeUpdateWithoutUserInput";
import { BookReviewLikeWhereUniqueInput } from "../inputs/BookReviewLikeWhereUniqueInput";

@TypeGraphQL.InputType("BookReviewLikeUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class BookReviewLikeUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => BookReviewLikeWhereUniqueInput, {
    nullable: false
  })
  where!: BookReviewLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookReviewLikeUpdateWithoutUserInput, {
    nullable: false
  })
  update!: BookReviewLikeUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => BookReviewLikeCreateWithoutUserInput, {
    nullable: false
  })
  create!: BookReviewLikeCreateWithoutUserInput;
}
