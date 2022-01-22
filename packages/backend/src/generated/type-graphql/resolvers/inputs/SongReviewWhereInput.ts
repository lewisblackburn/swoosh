import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { SongRelationFilter } from "../inputs/SongRelationFilter";
import { SongReviewLikeListRelationFilter } from "../inputs/SongReviewLikeListRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("SongReviewWhereInput", {
  isAbstract: true
})
export class SongReviewWhereInput {
  @TypeGraphQL.Field(_type => [SongReviewWhereInput], {
    nullable: true
  })
  AND?: SongReviewWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongReviewWhereInput], {
    nullable: true
  })
  OR?: SongReviewWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongReviewWhereInput], {
    nullable: true
  })
  NOT?: SongReviewWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  review?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  rating?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => SongReviewLikeListRelationFilter, {
    nullable: true
  })
  likes?: SongReviewLikeListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => SongRelationFilter, {
    nullable: true
  })
  song?: SongRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  songId?: IntFilter | undefined;
}
