import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateOrConnectWithoutGenresInput } from "../inputs/SongCreateOrConnectWithoutGenresInput";
import { SongCreateWithoutGenresInput } from "../inputs/SongCreateWithoutGenresInput";
import { SongScalarWhereInput } from "../inputs/SongScalarWhereInput";
import { SongUpdateManyWithWhereWithoutGenresInput } from "../inputs/SongUpdateManyWithWhereWithoutGenresInput";
import { SongUpdateWithWhereUniqueWithoutGenresInput } from "../inputs/SongUpdateWithWhereUniqueWithoutGenresInput";
import { SongUpsertWithWhereUniqueWithoutGenresInput } from "../inputs/SongUpsertWithWhereUniqueWithoutGenresInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SongUpdateManyWithoutGenresInput {
  @TypeGraphQL.Field(_type => [SongCreateWithoutGenresInput], {
    nullable: true
  })
  create?: SongCreateWithoutGenresInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongCreateOrConnectWithoutGenresInput], {
    nullable: true
  })
  connectOrCreate?: SongCreateOrConnectWithoutGenresInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongUpsertWithWhereUniqueWithoutGenresInput], {
    nullable: true
  })
  upsert?: SongUpsertWithWhereUniqueWithoutGenresInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [SongUpdateWithWhereUniqueWithoutGenresInput], {
    nullable: true
  })
  update?: SongUpdateWithWhereUniqueWithoutGenresInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongUpdateManyWithWhereWithoutGenresInput], {
    nullable: true
  })
  updateMany?: SongUpdateManyWithWhereWithoutGenresInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SongScalarWhereInput[] | undefined;
}
