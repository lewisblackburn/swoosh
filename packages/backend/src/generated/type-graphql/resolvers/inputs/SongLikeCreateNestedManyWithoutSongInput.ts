import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongLikeCreateManySongInputEnvelope } from "../inputs/SongLikeCreateManySongInputEnvelope";
import { SongLikeCreateOrConnectWithoutSongInput } from "../inputs/SongLikeCreateOrConnectWithoutSongInput";
import { SongLikeCreateWithoutSongInput } from "../inputs/SongLikeCreateWithoutSongInput";
import { SongLikeWhereUniqueInput } from "../inputs/SongLikeWhereUniqueInput";

@TypeGraphQL.InputType("SongLikeCreateNestedManyWithoutSongInput", {
  isAbstract: true
})
export class SongLikeCreateNestedManyWithoutSongInput {
  @TypeGraphQL.Field(_type => [SongLikeCreateWithoutSongInput], {
    nullable: true
  })
  create?: SongLikeCreateWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongLikeCreateOrConnectWithoutSongInput], {
    nullable: true
  })
  connectOrCreate?: SongLikeCreateOrConnectWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => SongLikeCreateManySongInputEnvelope, {
    nullable: true
  })
  createMany?: SongLikeCreateManySongInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SongLikeWhereUniqueInput], {
    nullable: true
  })
  connect?: SongLikeWhereUniqueInput[] | undefined;
}
