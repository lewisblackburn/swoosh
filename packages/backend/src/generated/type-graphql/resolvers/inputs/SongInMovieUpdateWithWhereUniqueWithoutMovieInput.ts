import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongInMovieUpdateWithoutMovieInput } from "../inputs/SongInMovieUpdateWithoutMovieInput";
import { SongInMovieWhereUniqueInput } from "../inputs/SongInMovieWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SongInMovieUpdateWithWhereUniqueWithoutMovieInput {
  @TypeGraphQL.Field(_type => SongInMovieWhereUniqueInput, {
    nullable: false
  })
  where!: SongInMovieWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongInMovieUpdateWithoutMovieInput, {
    nullable: false
  })
  data!: SongInMovieUpdateWithoutMovieInput;
}
