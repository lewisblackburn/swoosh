import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongReviewUserIdSongIdCompoundUniqueInput } from "../inputs/SongReviewUserIdSongIdCompoundUniqueInput";

@TypeGraphQL.InputType("SongReviewWhereUniqueInput", {
  isAbstract: true
})
export class SongReviewWhereUniqueInput {
  @TypeGraphQL.Field(_type => SongReviewUserIdSongIdCompoundUniqueInput, {
    nullable: true
  })
  userId_songId?: SongReviewUserIdSongIdCompoundUniqueInput | undefined;
}
