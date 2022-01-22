import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowReviewCreateNestedOneWithoutLikesInput } from "../inputs/ShowReviewCreateNestedOneWithoutLikesInput";

@TypeGraphQL.InputType("ShowReviewLikeCreateWithoutUserInput", {
  isAbstract: true
})
export class ShowReviewLikeCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => ShowReviewCreateNestedOneWithoutLikesInput, {
    nullable: false
  })
  showReview!: ShowReviewCreateNestedOneWithoutLikesInput;
}
