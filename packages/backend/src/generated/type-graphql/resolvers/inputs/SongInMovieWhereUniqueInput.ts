import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongInMovieSongIdMovieIdCompoundUniqueInput } from "../inputs/SongInMovieSongIdMovieIdCompoundUniqueInput";

@TypeGraphQL.InputType("SongInMovieWhereUniqueInput", {
  isAbstract: true
})
export class SongInMovieWhereUniqueInput {
  @TypeGraphQL.Field(_type => SongInMovieSongIdMovieIdCompoundUniqueInput, {
    nullable: true
  })
  songId_movieId?: SongInMovieSongIdMovieIdCompoundUniqueInput | undefined;
}
