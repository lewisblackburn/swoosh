import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongLikeCreateWithoutSongInput } from "../inputs/SongLikeCreateWithoutSongInput";
import { SongLikeWhereUniqueInput } from "../inputs/SongLikeWhereUniqueInput";

@TypeGraphQL.InputType("SongLikeCreateOrConnectWithoutSongInput", {
  isAbstract: true
})
export class SongLikeCreateOrConnectWithoutSongInput {
  @TypeGraphQL.Field(_type => SongLikeWhereUniqueInput, {
    nullable: false
  })
  where!: SongLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongLikeCreateWithoutSongInput, {
    nullable: false
  })
  create!: SongLikeCreateWithoutSongInput;
}
