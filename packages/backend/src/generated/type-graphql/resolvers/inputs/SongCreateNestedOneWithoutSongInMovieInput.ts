import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateOrConnectWithoutSongInMovieInput } from "../inputs/SongCreateOrConnectWithoutSongInMovieInput";
import { SongCreateWithoutSongInMovieInput } from "../inputs/SongCreateWithoutSongInMovieInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SongCreateNestedOneWithoutSongInMovieInput {
  @TypeGraphQL.Field(_type => SongCreateWithoutSongInMovieInput, {
    nullable: true
  })
  create?: SongCreateWithoutSongInMovieInput | undefined;

  @TypeGraphQL.Field(_type => SongCreateOrConnectWithoutSongInMovieInput, {
    nullable: true
  })
  connectOrCreate?: SongCreateOrConnectWithoutSongInMovieInput | undefined;

  @TypeGraphQL.Field(_type => SongWhereUniqueInput, {
    nullable: true
  })
  connect?: SongWhereUniqueInput | undefined;
}
