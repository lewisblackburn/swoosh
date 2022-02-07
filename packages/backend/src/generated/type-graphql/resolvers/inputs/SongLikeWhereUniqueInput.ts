import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongLikeUserIdSongIdCompoundUniqueInput } from "../inputs/SongLikeUserIdSongIdCompoundUniqueInput";

@TypeGraphQL.InputType("SongLikeWhereUniqueInput", {
  isAbstract: true
})
export class SongLikeWhereUniqueInput {
  @TypeGraphQL.Field(_type => SongLikeUserIdSongIdCompoundUniqueInput, {
    nullable: true
  })
  userId_songId?: SongLikeUserIdSongIdCompoundUniqueInput | undefined;
}
