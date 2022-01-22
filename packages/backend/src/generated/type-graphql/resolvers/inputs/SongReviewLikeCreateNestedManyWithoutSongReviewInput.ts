import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongReviewLikeCreateManySongReviewInputEnvelope } from "../inputs/SongReviewLikeCreateManySongReviewInputEnvelope";
import { SongReviewLikeCreateOrConnectWithoutSongReviewInput } from "../inputs/SongReviewLikeCreateOrConnectWithoutSongReviewInput";
import { SongReviewLikeCreateWithoutSongReviewInput } from "../inputs/SongReviewLikeCreateWithoutSongReviewInput";
import { SongReviewLikeWhereUniqueInput } from "../inputs/SongReviewLikeWhereUniqueInput";

@TypeGraphQL.InputType("SongReviewLikeCreateNestedManyWithoutSongReviewInput", {
  isAbstract: true
})
export class SongReviewLikeCreateNestedManyWithoutSongReviewInput {
  @TypeGraphQL.Field(_type => [SongReviewLikeCreateWithoutSongReviewInput], {
    nullable: true
  })
  create?: SongReviewLikeCreateWithoutSongReviewInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongReviewLikeCreateOrConnectWithoutSongReviewInput], {
    nullable: true
  })
  connectOrCreate?: SongReviewLikeCreateOrConnectWithoutSongReviewInput[] | undefined;

  @TypeGraphQL.Field(_type => SongReviewLikeCreateManySongReviewInputEnvelope, {
    nullable: true
  })
  createMany?: SongReviewLikeCreateManySongReviewInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SongReviewLikeWhereUniqueInput], {
    nullable: true
  })
  connect?: SongReviewLikeWhereUniqueInput[] | undefined;
}
