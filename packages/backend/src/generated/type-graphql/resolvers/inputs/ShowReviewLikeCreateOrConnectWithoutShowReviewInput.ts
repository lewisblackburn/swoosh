import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowReviewLikeCreateWithoutShowReviewInput } from "../inputs/ShowReviewLikeCreateWithoutShowReviewInput";
import { ShowReviewLikeWhereUniqueInput } from "../inputs/ShowReviewLikeWhereUniqueInput";

@TypeGraphQL.InputType("ShowReviewLikeCreateOrConnectWithoutShowReviewInput", {
  isAbstract: true
})
export class ShowReviewLikeCreateOrConnectWithoutShowReviewInput {
  @TypeGraphQL.Field(_type => ShowReviewLikeWhereUniqueInput, {
    nullable: false
  })
  where!: ShowReviewLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShowReviewLikeCreateWithoutShowReviewInput, {
    nullable: false
  })
  create!: ShowReviewLikeCreateWithoutShowReviewInput;
}
