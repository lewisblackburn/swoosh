import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongReviewCreateManySongInputEnvelope } from "../inputs/SongReviewCreateManySongInputEnvelope";
import { SongReviewCreateOrConnectWithoutSongInput } from "../inputs/SongReviewCreateOrConnectWithoutSongInput";
import { SongReviewCreateWithoutSongInput } from "../inputs/SongReviewCreateWithoutSongInput";
import { SongReviewWhereUniqueInput } from "../inputs/SongReviewWhereUniqueInput";

@TypeGraphQL.InputType("SongReviewCreateNestedManyWithoutSongInput", {
  isAbstract: true
})
export class SongReviewCreateNestedManyWithoutSongInput {
  @TypeGraphQL.Field(_type => [SongReviewCreateWithoutSongInput], {
    nullable: true
  })
  create?: SongReviewCreateWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongReviewCreateOrConnectWithoutSongInput], {
    nullable: true
  })
  connectOrCreate?: SongReviewCreateOrConnectWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => SongReviewCreateManySongInputEnvelope, {
    nullable: true
  })
  createMany?: SongReviewCreateManySongInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SongReviewWhereUniqueInput], {
    nullable: true
  })
  connect?: SongReviewWhereUniqueInput[] | undefined;
}
