import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { SongReviewRelationFilter } from "../inputs/SongReviewRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("SongReviewLikeWhereInput", {
  isAbstract: true
})
export class SongReviewLikeWhereInput {
  @TypeGraphQL.Field(_type => [SongReviewLikeWhereInput], {
    nullable: true
  })
  AND?: SongReviewLikeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongReviewLikeWhereInput], {
    nullable: true
  })
  OR?: SongReviewLikeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongReviewLikeWhereInput], {
    nullable: true
  })
  NOT?: SongReviewLikeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  reviewUserId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  reviewSongId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => SongReviewRelationFilter, {
    nullable: true
  })
  songReview?: SongReviewRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
