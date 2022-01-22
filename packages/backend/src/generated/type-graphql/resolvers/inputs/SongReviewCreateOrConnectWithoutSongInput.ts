import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongReviewCreateWithoutSongInput } from "../inputs/SongReviewCreateWithoutSongInput";
import { SongReviewWhereUniqueInput } from "../inputs/SongReviewWhereUniqueInput";

@TypeGraphQL.InputType("SongReviewCreateOrConnectWithoutSongInput", {
  isAbstract: true
})
export class SongReviewCreateOrConnectWithoutSongInput {
  @TypeGraphQL.Field(_type => SongReviewWhereUniqueInput, {
    nullable: false
  })
  where!: SongReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongReviewCreateWithoutSongInput, {
    nullable: false
  })
  create!: SongReviewCreateWithoutSongInput;
}
