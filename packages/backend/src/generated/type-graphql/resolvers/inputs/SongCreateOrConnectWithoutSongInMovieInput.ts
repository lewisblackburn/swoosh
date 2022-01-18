import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateWithoutSongInMovieInput } from "../inputs/SongCreateWithoutSongInMovieInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType("SongCreateOrConnectWithoutSongInMovieInput", {
  isAbstract: true
})
export class SongCreateOrConnectWithoutSongInMovieInput {
  @TypeGraphQL.Field(_type => SongWhereUniqueInput, {
    nullable: false
  })
  where!: SongWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongCreateWithoutSongInMovieInput, {
    nullable: false
  })
  create!: SongCreateWithoutSongInMovieInput;
}
