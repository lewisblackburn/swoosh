import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateWithoutSongInShowInput } from "../inputs/SongCreateWithoutSongInShowInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType("SongCreateOrConnectWithoutSongInShowInput", {
  isAbstract: true
})
export class SongCreateOrConnectWithoutSongInShowInput {
  @TypeGraphQL.Field(_type => SongWhereUniqueInput, {
    nullable: false
  })
  where!: SongWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongCreateWithoutSongInShowInput, {
    nullable: false
  })
  create!: SongCreateWithoutSongInShowInput;
}
