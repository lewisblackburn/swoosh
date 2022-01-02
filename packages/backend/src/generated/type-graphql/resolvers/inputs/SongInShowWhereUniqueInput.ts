import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongInShowSongIdShowIdCompoundUniqueInput } from "../inputs/SongInShowSongIdShowIdCompoundUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SongInShowWhereUniqueInput {
  @TypeGraphQL.Field(_type => SongInShowSongIdShowIdCompoundUniqueInput, {
    nullable: true
  })
  songId_showId?: SongInShowSongIdShowIdCompoundUniqueInput | undefined;
}
