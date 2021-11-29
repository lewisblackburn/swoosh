import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateNestedManyWithoutAuthorsInput } from "../inputs/BookCreateNestedManyWithoutAuthorsInput";
import { MovieCreateNestedManyWithoutActorsInput } from "../inputs/MovieCreateNestedManyWithoutActorsInput";
import { PersonCreatecareerInput } from "../inputs/PersonCreatecareerInput";
import { SongCreateNestedManyWithoutArtistsInput } from "../inputs/SongCreateNestedManyWithoutArtistsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PersonCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => PersonCreatecareerInput, {
    nullable: true
  })
  career?: PersonCreatecareerInput | undefined;

  @TypeGraphQL.Field(_type => MovieCreateNestedManyWithoutActorsInput, {
    nullable: true
  })
  movies?: MovieCreateNestedManyWithoutActorsInput | undefined;

  @TypeGraphQL.Field(_type => BookCreateNestedManyWithoutAuthorsInput, {
    nullable: true
  })
  books?: BookCreateNestedManyWithoutAuthorsInput | undefined;

  @TypeGraphQL.Field(_type => SongCreateNestedManyWithoutArtistsInput, {
    nullable: true
  })
  songs?: SongCreateNestedManyWithoutArtistsInput | undefined;
}
