import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongUpdateWithoutArtistsInput } from "../inputs/SongUpdateWithoutArtistsInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType("SongUpdateWithWhereUniqueWithoutArtistsInput", {
  isAbstract: true
})
export class SongUpdateWithWhereUniqueWithoutArtistsInput {
  @TypeGraphQL.Field(_type => SongWhereUniqueInput, {
    nullable: false
  })
  where!: SongWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongUpdateWithoutArtistsInput, {
    nullable: false
  })
  data!: SongUpdateWithoutArtistsInput;
}
