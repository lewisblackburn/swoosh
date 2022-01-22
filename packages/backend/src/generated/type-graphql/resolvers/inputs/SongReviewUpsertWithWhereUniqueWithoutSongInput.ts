import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongReviewCreateWithoutSongInput } from "../inputs/SongReviewCreateWithoutSongInput";
import { SongReviewUpdateWithoutSongInput } from "../inputs/SongReviewUpdateWithoutSongInput";
import { SongReviewWhereUniqueInput } from "../inputs/SongReviewWhereUniqueInput";

@TypeGraphQL.InputType("SongReviewUpsertWithWhereUniqueWithoutSongInput", {
  isAbstract: true
})
export class SongReviewUpsertWithWhereUniqueWithoutSongInput {
  @TypeGraphQL.Field(_type => SongReviewWhereUniqueInput, {
    nullable: false
  })
  where!: SongReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongReviewUpdateWithoutSongInput, {
    nullable: false
  })
  update!: SongReviewUpdateWithoutSongInput;

  @TypeGraphQL.Field(_type => SongReviewCreateWithoutSongInput, {
    nullable: false
  })
  create!: SongReviewCreateWithoutSongInput;
}
