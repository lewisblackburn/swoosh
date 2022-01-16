import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateNestedManyWithoutGenresInput } from "../inputs/BookCreateNestedManyWithoutGenresInput";
import { MovieCreateNestedManyWithoutGenresInput } from "../inputs/MovieCreateNestedManyWithoutGenresInput";
import { SongCreateNestedManyWithoutGenresInput } from "../inputs/SongCreateNestedManyWithoutGenresInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class GenreCreateWithoutShowsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => MovieCreateNestedManyWithoutGenresInput, {
    nullable: true
  })
  movies?: MovieCreateNestedManyWithoutGenresInput | undefined;

  @TypeGraphQL.Field(_type => SongCreateNestedManyWithoutGenresInput, {
    nullable: true
  })
  songs?: SongCreateNestedManyWithoutGenresInput | undefined;

  @TypeGraphQL.Field(_type => BookCreateNestedManyWithoutGenresInput, {
    nullable: true
  })
  books?: BookCreateNestedManyWithoutGenresInput | undefined;
}
