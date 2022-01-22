import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongReviewLikeUserIdReviewUserIdReviewSongIdCompoundUniqueInput } from "../inputs/SongReviewLikeUserIdReviewUserIdReviewSongIdCompoundUniqueInput";

@TypeGraphQL.InputType("SongReviewLikeWhereUniqueInput", {
  isAbstract: true
})
export class SongReviewLikeWhereUniqueInput {
  @TypeGraphQL.Field(_type => SongReviewLikeUserIdReviewUserIdReviewSongIdCompoundUniqueInput, {
    nullable: true
  })
  userId_reviewUserId_reviewSongId?: SongReviewLikeUserIdReviewUserIdReviewSongIdCompoundUniqueInput | undefined;
}
