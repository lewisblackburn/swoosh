import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongInMovieCreateWithoutMovieInput } from "../inputs/SongInMovieCreateWithoutMovieInput";
import { SongInMovieWhereUniqueInput } from "../inputs/SongInMovieWhereUniqueInput";

@TypeGraphQL.InputType("SongInMovieCreateOrConnectWithoutMovieInput", {
  isAbstract: true
})
export class SongInMovieCreateOrConnectWithoutMovieInput {
  @TypeGraphQL.Field(_type => SongInMovieWhereUniqueInput, {
    nullable: false
  })
  where!: SongInMovieWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongInMovieCreateWithoutMovieInput, {
    nullable: false
  })
  create!: SongInMovieCreateWithoutMovieInput;
}
