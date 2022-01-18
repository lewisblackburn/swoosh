import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateNestedOneWithoutSoundtrackInput } from "../inputs/MovieCreateNestedOneWithoutSoundtrackInput";
import { SongCreateNestedOneWithoutSongInMovieInput } from "../inputs/SongCreateNestedOneWithoutSongInMovieInput";

@TypeGraphQL.InputType("SongInMovieCreateInput", {
  isAbstract: true
})
export class SongInMovieCreateInput {
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

  @TypeGraphQL.Field(_type => MovieCreateNestedOneWithoutSoundtrackInput, {
    nullable: false
  })
  movie!: MovieCreateNestedOneWithoutSoundtrackInput;
}
