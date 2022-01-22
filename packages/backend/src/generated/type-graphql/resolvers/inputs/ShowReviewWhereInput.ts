import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { ShowRelationFilter } from "../inputs/ShowRelationFilter";
import { ShowReviewLikeListRelationFilter } from "../inputs/ShowReviewLikeListRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("ShowReviewWhereInput", {
  isAbstract: true
})
export class ShowReviewWhereInput {
  @TypeGraphQL.Field(_type => [ShowReviewWhereInput], {
    nullable: true
  })
  AND?: ShowReviewWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowReviewWhereInput], {
    nullable: true
  })
  OR?: ShowReviewWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowReviewWhereInput], {
    nullable: true
  })
  NOT?: ShowReviewWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  review?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  rating?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => ShowReviewLikeListRelationFilter, {
    nullable: true
  })
  likes?: ShowReviewLikeListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => ShowRelationFilter, {
    nullable: true
  })
  show?: ShowRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  showId?: IntFilter | undefined;
}
