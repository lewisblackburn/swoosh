import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongInShowCreateWithoutSongInput } from "../inputs/SongInShowCreateWithoutSongInput";
import { SongInShowWhereUniqueInput } from "../inputs/SongInShowWhereUniqueInput";

@TypeGraphQL.InputType("SongInShowCreateOrConnectWithoutSongInput", {
  isAbstract: true
})
export class SongInShowCreateOrConnectWithoutSongInput {
  @TypeGraphQL.Field(_type => SongInShowWhereUniqueInput, {
    nullable: false
  })
  where!: SongInShowWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongInShowCreateWithoutSongInput, {
    nullable: false
  })
  create!: SongInShowCreateWithoutSongInput;
}
