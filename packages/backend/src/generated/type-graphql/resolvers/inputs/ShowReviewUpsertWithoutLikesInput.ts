import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowReviewCreateWithoutLikesInput } from "../inputs/ShowReviewCreateWithoutLikesInput";
import { ShowReviewUpdateWithoutLikesInput } from "../inputs/ShowReviewUpdateWithoutLikesInput";

@TypeGraphQL.InputType("ShowReviewUpsertWithoutLikesInput", {
  isAbstract: true
})
export class ShowReviewUpsertWithoutLikesInput {
  @TypeGraphQL.Field(_type => ShowReviewUpdateWithoutLikesInput, {
    nullable: false
  })
  update!: ShowReviewUpdateWithoutLikesInput;

  @TypeGraphQL.Field(_type => ShowReviewCreateWithoutLikesInput, {
    nullable: false
  })
  create!: ShowReviewCreateWithoutLikesInput;
}
