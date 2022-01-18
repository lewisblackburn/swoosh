import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateOrConnectWithoutSongInMovieInput } from "../inputs/SongCreateOrConnectWithoutSongInMovieInput";
import { SongCreateWithoutSongInMovieInput } from "../inputs/SongCreateWithoutSongInMovieInput";
import { SongUpdateWithoutSongInMovieInput } from "../inputs/SongUpdateWithoutSongInMovieInput";
import { SongUpsertWithoutSongInMovieInput } from "../inputs/SongUpsertWithoutSongInMovieInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType("SongUpdateOneRequiredWithoutSongInMovieInput", {
  isAbstract: true
})
export class SongUpdateOneRequiredWithoutSongInMovieInput {
  @TypeGraphQL.Field(_type => SongCreateWithoutSongInMovieInput, {
    nullable: true
  })
  create?: SongCreateWithoutSongInMovieInput | undefined;

  @TypeGraphQL.Field(_type => SongCreateOrConnectWithoutSongInMovieInput, {
    nullable: true
  })
  connectOrCreate?: SongCreateOrConnectWithoutSongInMovieInput | undefined;

  @TypeGraphQL.Field(_type => SongUpsertWithoutSongInMovieInput, {
    nullable: true
  })
  upsert?: SongUpsertWithoutSongInMovieInput | undefined;

  @TypeGraphQL.Field(_type => SongWhereUniqueInput, {
    nullable: true
  })
  connect?: SongWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => SongUpdateWithoutSongInMovieInput, {
    nullable: true
  })
  update?: SongUpdateWithoutSongInMovieInput | undefined;
}
