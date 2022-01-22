import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongReviewCreateWithoutLikesInput } from "../inputs/SongReviewCreateWithoutLikesInput";
import { SongReviewUpdateWithoutLikesInput } from "../inputs/SongReviewUpdateWithoutLikesInput";

@TypeGraphQL.InputType("SongReviewUpsertWithoutLikesInput", {
  isAbstract: true
})
export class SongReviewUpsertWithoutLikesInput {
  @TypeGraphQL.Field(_type => SongReviewUpdateWithoutLikesInput, {
    nullable: false
  })
  update!: SongReviewUpdateWithoutLikesInput;

  @TypeGraphQL.Field(_type => SongReviewCreateWithoutLikesInput, {
    nullable: false
  })
  create!: SongReviewCreateWithoutLikesInput;
}
