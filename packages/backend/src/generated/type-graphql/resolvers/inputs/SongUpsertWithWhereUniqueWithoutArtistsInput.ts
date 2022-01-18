import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateWithoutArtistsInput } from "../inputs/SongCreateWithoutArtistsInput";
import { SongUpdateWithoutArtistsInput } from "../inputs/SongUpdateWithoutArtistsInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType("SongUpsertWithWhereUniqueWithoutArtistsInput", {
  isAbstract: true
})
export class SongUpsertWithWhereUniqueWithoutArtistsInput {
  @TypeGraphQL.Field(_type => SongWhereUniqueInput, {
    nullable: false
  })
  where!: SongWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongUpdateWithoutArtistsInput, {
    nullable: false
  })
  update!: SongUpdateWithoutArtistsInput;

  @TypeGraphQL.Field(_type => SongCreateWithoutArtistsInput, {
    nullable: false
  })
  create!: SongCreateWithoutArtistsInput;
}
