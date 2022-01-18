import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateOrConnectWithoutSongInShowInput } from "../inputs/SongCreateOrConnectWithoutSongInShowInput";
import { SongCreateWithoutSongInShowInput } from "../inputs/SongCreateWithoutSongInShowInput";
import { SongUpdateWithoutSongInShowInput } from "../inputs/SongUpdateWithoutSongInShowInput";
import { SongUpsertWithoutSongInShowInput } from "../inputs/SongUpsertWithoutSongInShowInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType("SongUpdateOneRequiredWithoutSongInShowInput", {
  isAbstract: true
})
export class SongUpdateOneRequiredWithoutSongInShowInput {
  @TypeGraphQL.Field(_type => SongCreateWithoutSongInShowInput, {
    nullable: true
  })
  create?: SongCreateWithoutSongInShowInput | undefined;

  @TypeGraphQL.Field(_type => SongCreateOrConnectWithoutSongInShowInput, {
    nullable: true
  })
  connectOrCreate?: SongCreateOrConnectWithoutSongInShowInput | undefined;

  @TypeGraphQL.Field(_type => SongUpsertWithoutSongInShowInput, {
    nullable: true
  })
  upsert?: SongUpsertWithoutSongInShowInput | undefined;

  @TypeGraphQL.Field(_type => SongWhereUniqueInput, {
    nullable: true
  })
  connect?: SongWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => SongUpdateWithoutSongInShowInput, {
    nullable: true
  })
  update?: SongUpdateWithoutSongInShowInput | undefined;
}
