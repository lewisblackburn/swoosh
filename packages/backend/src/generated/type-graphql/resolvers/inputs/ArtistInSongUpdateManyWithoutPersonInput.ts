import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArtistInSongCreateManyPersonInputEnvelope } from "../inputs/ArtistInSongCreateManyPersonInputEnvelope";
import { ArtistInSongCreateOrConnectWithoutPersonInput } from "../inputs/ArtistInSongCreateOrConnectWithoutPersonInput";
import { ArtistInSongCreateWithoutPersonInput } from "../inputs/ArtistInSongCreateWithoutPersonInput";
import { ArtistInSongScalarWhereInput } from "../inputs/ArtistInSongScalarWhereInput";
import { ArtistInSongUpdateManyWithWhereWithoutPersonInput } from "../inputs/ArtistInSongUpdateManyWithWhereWithoutPersonInput";
import { ArtistInSongUpdateWithWhereUniqueWithoutPersonInput } from "../inputs/ArtistInSongUpdateWithWhereUniqueWithoutPersonInput";
import { ArtistInSongUpsertWithWhereUniqueWithoutPersonInput } from "../inputs/ArtistInSongUpsertWithWhereUniqueWithoutPersonInput";
import { ArtistInSongWhereUniqueInput } from "../inputs/ArtistInSongWhereUniqueInput";

@TypeGraphQL.InputType("ArtistInSongUpdateManyWithoutPersonInput", {
  isAbstract: true
})
export class ArtistInSongUpdateManyWithoutPersonInput {
  @TypeGraphQL.Field(_type => [ArtistInSongCreateWithoutPersonInput], {
    nullable: true
  })
  create?: ArtistInSongCreateWithoutPersonInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistInSongCreateOrConnectWithoutPersonInput], {
    nullable: true
  })
  connectOrCreate?: ArtistInSongCreateOrConnectWithoutPersonInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistInSongUpsertWithWhereUniqueWithoutPersonInput], {
    nullable: true
  })
  upsert?: ArtistInSongUpsertWithWhereUniqueWithoutPersonInput[] | undefined;

  @TypeGraphQL.Field(_type => ArtistInSongCreateManyPersonInputEnvelope, {
    nullable: true
  })
  createMany?: ArtistInSongCreateManyPersonInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ArtistInSongUpdateWithWhereUniqueWithoutPersonInput], {
    nullable: true
  })
  update?: ArtistInSongUpdateWithWhereUniqueWithoutPersonInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistInSongUpdateManyWithWhereWithoutPersonInput], {
    nullable: true
  })
  updateMany?: ArtistInSongUpdateManyWithWhereWithoutPersonInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistInSongScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ArtistInSongScalarWhereInput[] | undefined;
}
