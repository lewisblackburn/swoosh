import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateNestedManyWithoutGenresInput } from "../inputs/MovieCreateNestedManyWithoutGenresInput";
import { ShowCreateNestedManyWithoutGenresInput } from "../inputs/ShowCreateNestedManyWithoutGenresInput";
import { SongCreateNestedManyWithoutGenresInput } from "../inputs/SongCreateNestedManyWithoutGenresInput";

@TypeGraphQL.InputType("GenreCreateWithoutBooksInput", {
  isAbstract: true
})
export class GenreCreateWithoutBooksInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => MovieCreateNestedManyWithoutGenresInput, {
    nullable: true
  })
  movies?: MovieCreateNestedManyWithoutGenresInput | undefined;

  @TypeGraphQL.Field(_type => ShowCreateNestedManyWithoutGenresInput, {
    nullable: true
  })
  shows?: ShowCreateNestedManyWithoutGenresInput | undefined;

  @TypeGraphQL.Field(_type => SongCreateNestedManyWithoutGenresInput, {
    nullable: true
  })
  songs?: SongCreateNestedManyWithoutGenresInput | undefined;
}
