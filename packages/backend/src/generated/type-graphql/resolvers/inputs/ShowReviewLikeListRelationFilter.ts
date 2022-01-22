import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowReviewLikeWhereInput } from "../inputs/ShowReviewLikeWhereInput";

@TypeGraphQL.InputType("ShowReviewLikeListRelationFilter", {
  isAbstract: true
})
export class ShowReviewLikeListRelationFilter {
  @TypeGraphQL.Field(_type => ShowReviewLikeWhereInput, {
    nullable: true
  })
  every?: ShowReviewLikeWhereInput | undefined;

  @TypeGraphQL.Field(_type => ShowReviewLikeWhereInput, {
    nullable: true
  })
  some?: ShowReviewLikeWhereInput | undefined;

  @TypeGraphQL.Field(_type => ShowReviewLikeWhereInput, {
    nullable: true
  })
  none?: ShowReviewLikeWhereInput | undefined;
}
