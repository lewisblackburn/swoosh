import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorInShowCreateNestedManyWithoutShowInput } from "../inputs/ActorInShowCreateNestedManyWithoutShowInput";
import { GenreCreateNestedManyWithoutShowsInput } from "../inputs/GenreCreateNestedManyWithoutShowsInput";
import { PlatformCreateNestedManyWithoutShowsInput } from "../inputs/PlatformCreateNestedManyWithoutShowsInput";
import { SongInShowCreateNestedManyWithoutShowInput } from "../inputs/SongInShowCreateNestedManyWithoutShowInput";
import { WatchlistCreateNestedManyWithoutShowsInput } from "../inputs/WatchlistCreateNestedManyWithoutShowsInput";

@TypeGraphQL.InputType("ShowCreateWithoutReviewsInput", {
  isAbstract: true
})
export class ShowCreateWithoutReviewsInput {
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

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => ActorInShowCreateNestedManyWithoutShowInput, {
    nullable: true
  })
  actors?: ActorInShowCreateNestedManyWithoutShowInput | undefined;

  @TypeGraphQL.Field(_type => GenreCreateNestedManyWithoutShowsInput, {
    nullable: true
  })
  genres?: GenreCreateNestedManyWithoutShowsInput | undefined;

  @TypeGraphQL.Field(_type => PlatformCreateNestedManyWithoutShowsInput, {
    nullable: true
  })
  platforms?: PlatformCreateNestedManyWithoutShowsInput | undefined;

  @TypeGraphQL.Field(_type => SongInShowCreateNestedManyWithoutShowInput, {
    nullable: true
  })
  soundtrack?: SongInShowCreateNestedManyWithoutShowInput | undefined;

  @TypeGraphQL.Field(_type => WatchlistCreateNestedManyWithoutShowsInput, {
    nullable: true
  })
  watchlist?: WatchlistCreateNestedManyWithoutShowsInput | undefined;
}
