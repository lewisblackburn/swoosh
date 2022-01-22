import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongReviewLikeCreateWithoutSongReviewInput } from "../inputs/SongReviewLikeCreateWithoutSongReviewInput";
import { SongReviewLikeUpdateWithoutSongReviewInput } from "../inputs/SongReviewLikeUpdateWithoutSongReviewInput";
import { SongReviewLikeWhereUniqueInput } from "../inputs/SongReviewLikeWhereUniqueInput";

@TypeGraphQL.InputType("SongReviewLikeUpsertWithWhereUniqueWithoutSongReviewInput", {
  isAbstract: true
})
export class SongReviewLikeUpsertWithWhereUniqueWithoutSongReviewInput {
  @TypeGraphQL.Field(_type => SongReviewLikeWhereUniqueInput, {
    nullable: false
  })
  where!: SongReviewLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongReviewLikeUpdateWithoutSongReviewInput, {
    nullable: false
  })
  update!: SongReviewLikeUpdateWithoutSongReviewInput;

  @TypeGraphQL.Field(_type => SongReviewLikeCreateWithoutSongReviewInput, {
    nullable: false
  })
  create!: SongReviewLikeCreateWithoutSongReviewInput;
}
