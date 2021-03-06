import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArtistInSongCreateNestedManyWithoutSongInput } from "../inputs/ArtistInSongCreateNestedManyWithoutSongInput";
import { GenreCreateNestedManyWithoutSongsInput } from "../inputs/GenreCreateNestedManyWithoutSongsInput";
import { SongInMovieCreateNestedManyWithoutSongInput } from "../inputs/SongInMovieCreateNestedManyWithoutSongInput";
import { SongInShowCreateNestedManyWithoutSongInput } from "../inputs/SongInShowCreateNestedManyWithoutSongInput";
import { SongReviewCreateNestedManyWithoutSongInput } from "../inputs/SongReviewCreateNestedManyWithoutSongInput";

@TypeGraphQL.InputType("SongCreateWithoutLikesInput", {
  isAbstract: true
})
export class SongCreateWithoutLikesInput {
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
  poster?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  locked?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  released?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  runtime?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => ArtistInSongCreateNestedManyWithoutSongInput, {
    nullable: true
  })
  artists?: ArtistInSongCreateNestedManyWithoutSongInput | undefined;

  @TypeGraphQL.Field(_type => SongInShowCreateNestedManyWithoutSongInput, {
    nullable: true
  })
  songInShow?: SongInShowCreateNestedManyWithoutSongInput | undefined;

  @TypeGraphQL.Field(_type => SongInMovieCreateNestedManyWithoutSongInput, {
    nullable: true
  })
  songInMovie?: SongInMovieCreateNestedManyWithoutSongInput | undefined;

  @TypeGraphQL.Field(_type => GenreCreateNestedManyWithoutSongsInput, {
    nullable: true
  })
  genres?: GenreCreateNestedManyWithoutSongsInput | undefined;

  @TypeGraphQL.Field(_type => SongReviewCreateNestedManyWithoutSongInput, {
    nullable: true
  })
  reviews?: SongReviewCreateNestedManyWithoutSongInput | undefined;
}
