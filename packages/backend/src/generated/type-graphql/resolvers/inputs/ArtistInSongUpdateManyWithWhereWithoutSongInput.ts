import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ArtistInSongScalarWhereInput } from "../inputs/ArtistInSongScalarWhereInput";
import { ArtistInSongUpdateManyMutationInput } from "../inputs/ArtistInSongUpdateManyMutationInput";

@TypeGraphQL.InputType("ArtistInSongUpdateManyWithWhereWithoutSongInput", {
  isAbstract: true
})
export class ArtistInSongUpdateManyWithWhereWithoutSongInput {
  @TypeGraphQL.Field(_type => ArtistInSongScalarWhereInput, {
    nullable: false
  })
  where!: ArtistInSongScalarWhereInput;

  @TypeGraphQL.Field(_type => ArtistInSongUpdateManyMutationInput, {
    nullable: false
  })
  data!: ArtistInSongUpdateManyMutationInput;
}
