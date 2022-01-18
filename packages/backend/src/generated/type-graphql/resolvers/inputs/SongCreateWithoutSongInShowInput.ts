import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenreCreateNestedManyWithoutSongsInput } from "../inputs/GenreCreateNestedManyWithoutSongsInput";
import { PersonCreateNestedManyWithoutSongsInput } from "../inputs/PersonCreateNestedManyWithoutSongsInput";
import { SongInMovieCreateNestedManyWithoutSongInput } from "../inputs/SongInMovieCreateNestedManyWithoutSongInput";

@TypeGraphQL.InputType("SongCreateWithoutSongInShowInput", {
  isAbstract: true
})
export class SongCreateWithoutSongInShowInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  thumbnail?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  locked?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  released?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => PersonCreateNestedManyWithoutSongsInput, {
    nullable: true
  })
  artists?: PersonCreateNestedManyWithoutSongsInput | undefined;

  @TypeGraphQL.Field(_type => SongInMovieCreateNestedManyWithoutSongInput, {
    nullable: true
  })
  songInMovie?: SongInMovieCreateNestedManyWithoutSongInput | undefined;

  @TypeGraphQL.Field(_type => GenreCreateNestedManyWithoutSongsInput, {
    nullable: true
  })
  genres?: GenreCreateNestedManyWithoutSongsInput | undefined;
}
