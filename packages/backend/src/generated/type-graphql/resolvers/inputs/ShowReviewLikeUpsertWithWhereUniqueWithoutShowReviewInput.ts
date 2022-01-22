import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowReviewLikeCreateWithoutShowReviewInput } from "../inputs/ShowReviewLikeCreateWithoutShowReviewInput";
import { ShowReviewLikeUpdateWithoutShowReviewInput } from "../inputs/ShowReviewLikeUpdateWithoutShowReviewInput";
import { ShowReviewLikeWhereUniqueInput } from "../inputs/ShowReviewLikeWhereUniqueInput";

@TypeGraphQL.InputType("ShowReviewLikeUpsertWithWhereUniqueWithoutShowReviewInput", {
  isAbstract: true
})
export class ShowReviewLikeUpsertWithWhereUniqueWithoutShowReviewInput {
  @TypeGraphQL.Field(_type => ShowReviewLikeWhereUniqueInput, {
    nullable: false
  })
  where!: ShowReviewLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShowReviewLikeUpdateWithoutShowReviewInput, {
    nullable: false
  })
  update!: ShowReviewLikeUpdateWithoutShowReviewInput;

  @TypeGraphQL.Field(_type => ShowReviewLikeCreateWithoutShowReviewInput, {
    nullable: false
  })
  create!: ShowReviewLikeCreateWithoutShowReviewInput;
}
