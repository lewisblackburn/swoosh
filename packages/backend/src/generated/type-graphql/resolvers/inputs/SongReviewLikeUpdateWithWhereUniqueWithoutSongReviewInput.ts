import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongReviewLikeUpdateWithoutSongReviewInput } from "../inputs/SongReviewLikeUpdateWithoutSongReviewInput";
import { SongReviewLikeWhereUniqueInput } from "../inputs/SongReviewLikeWhereUniqueInput";

@TypeGraphQL.InputType("SongReviewLikeUpdateWithWhereUniqueWithoutSongReviewInput", {
  isAbstract: true
})
export class SongReviewLikeUpdateWithWhereUniqueWithoutSongReviewInput {
  @TypeGraphQL.Field(_type => SongReviewLikeWhereUniqueInput, {
    nullable: false
  })
  where!: SongReviewLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongReviewLikeUpdateWithoutSongReviewInput, {
    nullable: false
  })
  data!: SongReviewLikeUpdateWithoutSongReviewInput;
}
