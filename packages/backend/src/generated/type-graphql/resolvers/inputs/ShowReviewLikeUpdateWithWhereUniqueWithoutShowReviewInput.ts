import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowReviewLikeUpdateWithoutShowReviewInput } from "../inputs/ShowReviewLikeUpdateWithoutShowReviewInput";
import { ShowReviewLikeWhereUniqueInput } from "../inputs/ShowReviewLikeWhereUniqueInput";

@TypeGraphQL.InputType("ShowReviewLikeUpdateWithWhereUniqueWithoutShowReviewInput", {
  isAbstract: true
})
export class ShowReviewLikeUpdateWithWhereUniqueWithoutShowReviewInput {
  @TypeGraphQL.Field(_type => ShowReviewLikeWhereUniqueInput, {
    nullable: false
  })
  where!: ShowReviewLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShowReviewLikeUpdateWithoutShowReviewInput, {
    nullable: false
  })
  data!: ShowReviewLikeUpdateWithoutShowReviewInput;
}
