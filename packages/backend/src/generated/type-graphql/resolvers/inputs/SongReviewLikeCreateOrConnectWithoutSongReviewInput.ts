import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongReviewLikeCreateWithoutSongReviewInput } from "../inputs/SongReviewLikeCreateWithoutSongReviewInput";
import { SongReviewLikeWhereUniqueInput } from "../inputs/SongReviewLikeWhereUniqueInput";

@TypeGraphQL.InputType("SongReviewLikeCreateOrConnectWithoutSongReviewInput", {
  isAbstract: true
})
export class SongReviewLikeCreateOrConnectWithoutSongReviewInput {
  @TypeGraphQL.Field(_type => SongReviewLikeWhereUniqueInput, {
    nullable: false
  })
  where!: SongReviewLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongReviewLikeCreateWithoutSongReviewInput, {
    nullable: false
  })
  create!: SongReviewLikeCreateWithoutSongReviewInput;
}
