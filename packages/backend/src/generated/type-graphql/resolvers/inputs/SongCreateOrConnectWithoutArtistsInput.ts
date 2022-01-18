import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateWithoutArtistsInput } from "../inputs/SongCreateWithoutArtistsInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType("SongCreateOrConnectWithoutArtistsInput", {
  isAbstract: true
})
export class SongCreateOrConnectWithoutArtistsInput {
  @TypeGraphQL.Field(_type => SongWhereUniqueInput, {
    nullable: false
  })
  where!: SongWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongCreateWithoutArtistsInput, {
    nullable: false
  })
  create!: SongCreateWithoutArtistsInput;
}
