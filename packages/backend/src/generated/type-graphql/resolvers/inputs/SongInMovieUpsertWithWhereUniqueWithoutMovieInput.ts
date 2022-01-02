import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongInMovieCreateWithoutMovieInput } from "../inputs/SongInMovieCreateWithoutMovieInput";
import { SongInMovieUpdateWithoutMovieInput } from "../inputs/SongInMovieUpdateWithoutMovieInput";
import { SongInMovieWhereUniqueInput } from "../inputs/SongInMovieWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SongInMovieUpsertWithWhereUniqueWithoutMovieInput {
  @TypeGraphQL.Field(_type => SongInMovieWhereUniqueInput, {
    nullable: false
  })
  where!: SongInMovieWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongInMovieUpdateWithoutMovieInput, {
    nullable: false
  })
  update!: SongInMovieUpdateWithoutMovieInput;

  @TypeGraphQL.Field(_type => SongInMovieCreateWithoutMovieInput, {
    nullable: false
  })
  create!: SongInMovieCreateWithoutMovieInput;
}
