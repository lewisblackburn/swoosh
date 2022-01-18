import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateOrConnectWithoutArtistsInput } from "../inputs/SongCreateOrConnectWithoutArtistsInput";
import { SongCreateWithoutArtistsInput } from "../inputs/SongCreateWithoutArtistsInput";
import { SongScalarWhereInput } from "../inputs/SongScalarWhereInput";
import { SongUpdateManyWithWhereWithoutArtistsInput } from "../inputs/SongUpdateManyWithWhereWithoutArtistsInput";
import { SongUpdateWithWhereUniqueWithoutArtistsInput } from "../inputs/SongUpdateWithWhereUniqueWithoutArtistsInput";
import { SongUpsertWithWhereUniqueWithoutArtistsInput } from "../inputs/SongUpsertWithWhereUniqueWithoutArtistsInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType("SongUpdateManyWithoutArtistsInput", {
  isAbstract: true
})
export class SongUpdateManyWithoutArtistsInput {
  @TypeGraphQL.Field(_type => [SongCreateWithoutArtistsInput], {
    nullable: true
  })
  create?: SongCreateWithoutArtistsInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongCreateOrConnectWithoutArtistsInput], {
    nullable: true
  })
  connectOrCreate?: SongCreateOrConnectWithoutArtistsInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongUpsertWithWhereUniqueWithoutArtistsInput], {
    nullable: true
  })
  upsert?: SongUpsertWithWhereUniqueWithoutArtistsInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [SongWhereUniqueInput], {
    nullable: true
  })
  connect?: SongWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongUpdateWithWhereUniqueWithoutArtistsInput], {
    nullable: true
  })
  update?: SongUpdateWithWhereUniqueWithoutArtistsInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongUpdateManyWithWhereWithoutArtistsInput], {
    nullable: true
  })
  updateMany?: SongUpdateManyWithWhereWithoutArtistsInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SongScalarWhereInput[] | undefined;
}
