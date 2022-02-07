import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArtistInSongCreateManySongInputEnvelope } from "../inputs/ArtistInSongCreateManySongInputEnvelope";
import { ArtistInSongCreateOrConnectWithoutSongInput } from "../inputs/ArtistInSongCreateOrConnectWithoutSongInput";
import { ArtistInSongCreateWithoutSongInput } from "../inputs/ArtistInSongCreateWithoutSongInput";
import { ArtistInSongScalarWhereInput } from "../inputs/ArtistInSongScalarWhereInput";
import { ArtistInSongUpdateManyWithWhereWithoutSongInput } from "../inputs/ArtistInSongUpdateManyWithWhereWithoutSongInput";
import { ArtistInSongUpdateWithWhereUniqueWithoutSongInput } from "../inputs/ArtistInSongUpdateWithWhereUniqueWithoutSongInput";
import { ArtistInSongUpsertWithWhereUniqueWithoutSongInput } from "../inputs/ArtistInSongUpsertWithWhereUniqueWithoutSongInput";
import { ArtistInSongWhereUniqueInput } from "../inputs/ArtistInSongWhereUniqueInput";

@TypeGraphQL.InputType("ArtistInSongUpdateManyWithoutSongInput", {
  isAbstract: true
})
export class ArtistInSongUpdateManyWithoutSongInput {
  @TypeGraphQL.Field(_type => [ArtistInSongCreateWithoutSongInput], {
    nullable: true
  })
  create?: ArtistInSongCreateWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistInSongCreateOrConnectWithoutSongInput], {
    nullable: true
  })
  connectOrCreate?: ArtistInSongCreateOrConnectWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistInSongUpsertWithWhereUniqueWithoutSongInput], {
    nullable: true
  })
  upsert?: ArtistInSongUpsertWithWhereUniqueWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => ArtistInSongCreateManySongInputEnvelope, {
    nullable: true
  })
  createMany?: ArtistInSongCreateManySongInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ArtistInSongWhereUniqueInput], {
    nullable: true
  })
  set?: ArtistInSongWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistInSongWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ArtistInSongWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistInSongWhereUniqueInput], {
    nullable: true
  })
  delete?: ArtistInSongWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistInSongWhereUniqueInput], {
    nullable: true
  })
  connect?: ArtistInSongWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistInSongUpdateWithWhereUniqueWithoutSongInput], {
    nullable: true
  })
  update?: ArtistInSongUpdateWithWhereUniqueWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistInSongUpdateManyWithWhereWithoutSongInput], {
    nullable: true
  })
  updateMany?: ArtistInSongUpdateManyWithWhereWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistInSongScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ArtistInSongScalarWhereInput[] | undefined;
}
