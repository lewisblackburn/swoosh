import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateManyArtistInputEnvelope } from "../inputs/SongCreateManyArtistInputEnvelope";
import { SongCreateOrConnectWithoutArtistInput } from "../inputs/SongCreateOrConnectWithoutArtistInput";
import { SongCreateWithoutArtistInput } from "../inputs/SongCreateWithoutArtistInput";
import { SongScalarWhereInput } from "../inputs/SongScalarWhereInput";
import { SongUpdateManyWithWhereWithoutArtistInput } from "../inputs/SongUpdateManyWithWhereWithoutArtistInput";
import { SongUpdateWithWhereUniqueWithoutArtistInput } from "../inputs/SongUpdateWithWhereUniqueWithoutArtistInput";
import { SongUpsertWithWhereUniqueWithoutArtistInput } from "../inputs/SongUpsertWithWhereUniqueWithoutArtistInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SongUpdateManyWithoutArtistInput {
  @TypeGraphQL.Field(_type => [SongCreateWithoutArtistInput], {
    nullable: true
  })
  create?: SongCreateWithoutArtistInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongCreateOrConnectWithoutArtistInput], {
    nullable: true
  })
  connectOrCreate?: SongCreateOrConnectWithoutArtistInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongUpsertWithWhereUniqueWithoutArtistInput], {
    nullable: true
  })
  upsert?: SongUpsertWithWhereUniqueWithoutArtistInput[] | undefined;

  @TypeGraphQL.Field(_type => SongCreateManyArtistInputEnvelope, {
    nullable: true
  })
  createMany?: SongCreateManyArtistInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SongWhereUniqueInput], {
    nullable: true
  })
  connect?: SongWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongWhereUniqueInput], {
    nullable: true
  })
  set?: SongWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SongWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongWhereUniqueInput], {
    nullable: true
  })
  delete?: SongWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongUpdateWithWhereUniqueWithoutArtistInput], {
    nullable: true
  })
  update?: SongUpdateWithWhereUniqueWithoutArtistInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongUpdateManyWithWhereWithoutArtistInput], {
    nullable: true
  })
  updateMany?: SongUpdateManyWithWhereWithoutArtistInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SongScalarWhereInput[] | undefined;
}
