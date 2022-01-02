import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongInMovieCreateWithoutSongInput } from "../inputs/SongInMovieCreateWithoutSongInput";
import { SongInMovieWhereUniqueInput } from "../inputs/SongInMovieWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SongInMovieCreateOrConnectWithoutSongInput {
  @TypeGraphQL.Field(_type => SongInMovieWhereUniqueInput, {
    nullable: false
  })
  where!: SongInMovieWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongInMovieCreateWithoutSongInput, {
    nullable: false
  })
  create!: SongInMovieCreateWithoutSongInput;
}
