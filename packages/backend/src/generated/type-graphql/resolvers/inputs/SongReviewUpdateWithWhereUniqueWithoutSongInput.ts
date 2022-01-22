import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongReviewUpdateWithoutSongInput } from "../inputs/SongReviewUpdateWithoutSongInput";
import { SongReviewWhereUniqueInput } from "../inputs/SongReviewWhereUniqueInput";

@TypeGraphQL.InputType("SongReviewUpdateWithWhereUniqueWithoutSongInput", {
  isAbstract: true
})
export class SongReviewUpdateWithWhereUniqueWithoutSongInput {
  @TypeGraphQL.Field(_type => SongReviewWhereUniqueInput, {
    nullable: false
  })
  where!: SongReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongReviewUpdateWithoutSongInput, {
    nullable: false
  })
  data!: SongReviewUpdateWithoutSongInput;
}
