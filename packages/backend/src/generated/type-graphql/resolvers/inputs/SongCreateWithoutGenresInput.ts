import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FavouriteCreateNestedManyWithoutSongsInput } from "../inputs/FavouriteCreateNestedManyWithoutSongsInput";
import { PersonCreateNestedManyWithoutSongsInput } from "../inputs/PersonCreateNestedManyWithoutSongsInput";
import { ReviewCreateNestedManyWithoutSongInput } from "../inputs/ReviewCreateNestedManyWithoutSongInput";
import { SongInMovieCreateNestedManyWithoutSongInput } from "../inputs/SongInMovieCreateNestedManyWithoutSongInput";
import { SongInShowCreateNestedManyWithoutSongInput } from "../inputs/SongInShowCreateNestedManyWithoutSongInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SongCreateWithoutGenresInput {
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

  @TypeGraphQL.Field(_type => SongInShowCreateNestedManyWithoutSongInput, {
    nullable: true
  })
  songInShow?: SongInShowCreateNestedManyWithoutSongInput | undefined;

  @TypeGraphQL.Field(_type => SongInMovieCreateNestedManyWithoutSongInput, {
    nullable: true
  })
  songInMovie?: SongInMovieCreateNestedManyWithoutSongInput | undefined;

  @TypeGraphQL.Field(_type => FavouriteCreateNestedManyWithoutSongsInput, {
    nullable: true
  })
  favourites?: FavouriteCreateNestedManyWithoutSongsInput | undefined;

  @TypeGraphQL.Field(_type => ReviewCreateNestedManyWithoutSongInput, {
    nullable: true
  })
  reviews?: ReviewCreateNestedManyWithoutSongInput | undefined;
}