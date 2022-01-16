import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorInShowCreateNestedManyWithoutPersonInput } from "../inputs/ActorInShowCreateNestedManyWithoutPersonInput";
import { BookCreateNestedManyWithoutAuthorsInput } from "../inputs/BookCreateNestedManyWithoutAuthorsInput";
import { FavouriteCreateNestedManyWithoutPeopleInput } from "../inputs/FavouriteCreateNestedManyWithoutPeopleInput";
import { PersonCreatecareerInput } from "../inputs/PersonCreatecareerInput";
import { SongCreateNestedManyWithoutArtistsInput } from "../inputs/SongCreateNestedManyWithoutArtistsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PersonCreateWithoutMoviesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  thumbnail?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bio?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  age?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => PersonCreatecareerInput, {
    nullable: true
  })
  career?: PersonCreatecareerInput | undefined;

  @TypeGraphQL.Field(_type => ActorInShowCreateNestedManyWithoutPersonInput, {
    nullable: true
  })
  shows?: ActorInShowCreateNestedManyWithoutPersonInput | undefined;

  @TypeGraphQL.Field(_type => BookCreateNestedManyWithoutAuthorsInput, {
    nullable: true
  })
  books?: BookCreateNestedManyWithoutAuthorsInput | undefined;

  @TypeGraphQL.Field(_type => SongCreateNestedManyWithoutArtistsInput, {
    nullable: true
  })
  songs?: SongCreateNestedManyWithoutArtistsInput | undefined;

  @TypeGraphQL.Field(_type => FavouriteCreateNestedManyWithoutPeopleInput, {
    nullable: true
  })
  favourites?: FavouriteCreateNestedManyWithoutPeopleInput | undefined;
}
