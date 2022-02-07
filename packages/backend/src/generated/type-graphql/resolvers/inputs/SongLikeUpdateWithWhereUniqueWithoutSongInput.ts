import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongLikeUpdateWithoutSongInput } from "../inputs/SongLikeUpdateWithoutSongInput";
import { SongLikeWhereUniqueInput } from "../inputs/SongLikeWhereUniqueInput";

@TypeGraphQL.InputType("SongLikeUpdateWithWhereUniqueWithoutSongInput", {
  isAbstract: true
})
export class SongLikeUpdateWithWhereUniqueWithoutSongInput {
  @TypeGraphQL.Field(_type => SongLikeWhereUniqueInput, {
    nullable: false
  })
  where!: SongLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongLikeUpdateWithoutSongInput, {
    nullable: false
  })
  data!: SongLikeUpdateWithoutSongInput;
}
