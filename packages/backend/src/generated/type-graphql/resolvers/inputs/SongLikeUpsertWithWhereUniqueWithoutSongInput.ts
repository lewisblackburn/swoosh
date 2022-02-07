import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongLikeCreateWithoutSongInput } from "../inputs/SongLikeCreateWithoutSongInput";
import { SongLikeUpdateWithoutSongInput } from "../inputs/SongLikeUpdateWithoutSongInput";
import { SongLikeWhereUniqueInput } from "../inputs/SongLikeWhereUniqueInput";

@TypeGraphQL.InputType("SongLikeUpsertWithWhereUniqueWithoutSongInput", {
  isAbstract: true
})
export class SongLikeUpsertWithWhereUniqueWithoutSongInput {
  @TypeGraphQL.Field(_type => SongLikeWhereUniqueInput, {
    nullable: false
  })
  where!: SongLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongLikeUpdateWithoutSongInput, {
    nullable: false
  })
  update!: SongLikeUpdateWithoutSongInput;

  @TypeGraphQL.Field(_type => SongLikeCreateWithoutSongInput, {
    nullable: false
  })
  create!: SongLikeCreateWithoutSongInput;
}
