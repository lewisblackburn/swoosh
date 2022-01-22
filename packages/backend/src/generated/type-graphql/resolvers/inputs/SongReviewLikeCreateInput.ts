import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongReviewCreateNestedOneWithoutLikesInput } from "../inputs/SongReviewCreateNestedOneWithoutLikesInput";
import { UserCreateNestedOneWithoutSongReviewLikesInput } from "../inputs/UserCreateNestedOneWithoutSongReviewLikesInput";

@TypeGraphQL.InputType("SongReviewLikeCreateInput", {
  isAbstract: true
})
export class SongReviewLikeCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => SongReviewCreateNestedOneWithoutLikesInput, {
    nullable: false
  })
  songReview!: SongReviewCreateNestedOneWithoutLikesInput;
}
