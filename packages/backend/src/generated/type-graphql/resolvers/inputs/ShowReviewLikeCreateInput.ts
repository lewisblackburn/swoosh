import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowReviewCreateNestedOneWithoutLikesInput } from "../inputs/ShowReviewCreateNestedOneWithoutLikesInput";
import { UserCreateNestedOneWithoutShowReviewLikesInput } from "../inputs/UserCreateNestedOneWithoutShowReviewLikesInput";

@TypeGraphQL.InputType("ShowReviewLikeCreateInput", {
  isAbstract: true
})
export class ShowReviewLikeCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => ShowReviewCreateNestedOneWithoutLikesInput, {
    nullable: false
  })
  showReview!: ShowReviewCreateNestedOneWithoutLikesInput;
}
