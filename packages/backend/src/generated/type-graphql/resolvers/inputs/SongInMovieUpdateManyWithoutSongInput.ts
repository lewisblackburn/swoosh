import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongInMovieCreateManySongInputEnvelope } from "../inputs/SongInMovieCreateManySongInputEnvelope";
import { SongInMovieCreateOrConnectWithoutSongInput } from "../inputs/SongInMovieCreateOrConnectWithoutSongInput";
import { SongInMovieCreateWithoutSongInput } from "../inputs/SongInMovieCreateWithoutSongInput";
import { SongInMovieScalarWhereInput } from "../inputs/SongInMovieScalarWhereInput";
import { SongInMovieUpdateManyWithWhereWithoutSongInput } from "../inputs/SongInMovieUpdateManyWithWhereWithoutSongInput";
import { SongInMovieUpdateWithWhereUniqueWithoutSongInput } from "../inputs/SongInMovieUpdateWithWhereUniqueWithoutSongInput";
import { SongInMovieUpsertWithWhereUniqueWithoutSongInput } from "../inputs/SongInMovieUpsertWithWhereUniqueWithoutSongInput";
import { SongInMovieWhereUniqueInput } from "../inputs/SongInMovieWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SongInMovieUpdateManyWithoutSongInput {
  @TypeGraphQL.Field(_type => [SongInMovieCreateWithoutSongInput], {
    nullable: true
  })
  create?: SongInMovieCreateWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongInMovieCreateOrConnectWithoutSongInput], {
    nullable: true
  })
  connectOrCreate?: SongInMovieCreateOrConnectWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongInMovieUpsertWithWhereUniqueWithoutSongInput], {
    nullable: true
  })
  upsert?: SongInMovieUpsertWithWhereUniqueWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => SongInMovieCreateManySongInputEnvelope, {
    nullable: true
  })
  createMany?: SongInMovieCreateManySongInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SongInMovieWhereUniqueInput], {
    nullable: true
  })
  connect?: SongInMovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongInMovieWhereUniqueInput], {
    nullable: true
  })
  set?: SongInMovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongInMovieWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SongInMovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongInMovieWhereUniqueInput], {
    nullable: true
  })
  delete?: SongInMovieWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongInMovieUpdateWithWhereUniqueWithoutSongInput], {
    nullable: true
  })
  update?: SongInMovieUpdateWithWhereUniqueWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongInMovieUpdateManyWithWhereWithoutSongInput], {
    nullable: true
  })
  updateMany?: SongInMovieUpdateManyWithWhereWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongInMovieScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SongInMovieScalarWhereInput[] | undefined;
}
