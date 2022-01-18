import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongInMovieCreateManySongInputEnvelope } from "../inputs/SongInMovieCreateManySongInputEnvelope";
import { SongInMovieCreateOrConnectWithoutSongInput } from "../inputs/SongInMovieCreateOrConnectWithoutSongInput";
import { SongInMovieCreateWithoutSongInput } from "../inputs/SongInMovieCreateWithoutSongInput";
import { SongInMovieWhereUniqueInput } from "../inputs/SongInMovieWhereUniqueInput";

@TypeGraphQL.InputType("SongInMovieCreateNestedManyWithoutSongInput", {
  isAbstract: true
})
export class SongInMovieCreateNestedManyWithoutSongInput {
  @TypeGraphQL.Field(_type => [SongInMovieCreateWithoutSongInput], {
    nullable: true
  })
  create?: SongInMovieCreateWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongInMovieCreateOrConnectWithoutSongInput], {
    nullable: true
  })
  connectOrCreate?: SongInMovieCreateOrConnectWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => SongInMovieCreateManySongInputEnvelope, {
    nullable: true
  })
  createMany?: SongInMovieCreateManySongInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SongInMovieWhereUniqueInput], {
    nullable: true
  })
  connect?: SongInMovieWhereUniqueInput[] | undefined;
}
