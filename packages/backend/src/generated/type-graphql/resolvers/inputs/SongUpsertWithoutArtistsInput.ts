import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateWithoutArtistsInput } from "../inputs/SongCreateWithoutArtistsInput";
import { SongUpdateWithoutArtistsInput } from "../inputs/SongUpdateWithoutArtistsInput";

@TypeGraphQL.InputType("SongUpsertWithoutArtistsInput", {
  isAbstract: true
})
export class SongUpsertWithoutArtistsInput {
  @TypeGraphQL.Field(_type => SongUpdateWithoutArtistsInput, {
    nullable: false
  })
  update!: SongUpdateWithoutArtistsInput;

  @TypeGraphQL.Field(_type => SongCreateWithoutArtistsInput, {
    nullable: false
  })
  create!: SongCreateWithoutArtistsInput;
}
