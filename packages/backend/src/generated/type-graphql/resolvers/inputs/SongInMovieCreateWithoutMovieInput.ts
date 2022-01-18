import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateNestedOneWithoutSongInMovieInput } from "../inputs/SongCreateNestedOneWithoutSongInMovieInput";

@TypeGraphQL.InputType("SongInMovieCreateWithoutMovieInput", {
  isAbstract: true
})
export class SongInMovieCreateWithoutMovieInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  timestamp!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => SongCreateNestedOneWithoutSongInMovieInput, {
    nullable: false
  })
  song!: SongCreateNestedOneWithoutSongInMovieInput;
}
