import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookUpdateManyWithoutAuthorInput } from "../inputs/BookUpdateManyWithoutAuthorInput";
import { EnumCareerFieldUpdateOperationsInput } from "../inputs/EnumCareerFieldUpdateOperationsInput";
import { MovieUpdateManyWithoutActorInput } from "../inputs/MovieUpdateManyWithoutActorInput";
import { SongUpdateManyWithoutArtistInput } from "../inputs/SongUpdateManyWithoutArtistInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PersonUpdateInput {
  @TypeGraphQL.Field(_type => EnumCareerFieldUpdateOperationsInput, {
    nullable: true
  })
  type?: EnumCareerFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BookUpdateManyWithoutAuthorInput, {
    nullable: true
  })
  books?: BookUpdateManyWithoutAuthorInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpdateManyWithoutActorInput, {
    nullable: true
  })
  movies?: MovieUpdateManyWithoutActorInput | undefined;

  @TypeGraphQL.Field(_type => SongUpdateManyWithoutArtistInput, {
    nullable: true
  })
  songs?: SongUpdateManyWithoutArtistInput | undefined;
}
