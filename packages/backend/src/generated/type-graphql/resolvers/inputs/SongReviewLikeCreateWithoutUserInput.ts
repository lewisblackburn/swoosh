import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongReviewCreateNestedOneWithoutLikesInput } from "../inputs/SongReviewCreateNestedOneWithoutLikesInput";

@TypeGraphQL.InputType("SongReviewLikeCreateWithoutUserInput", {
  isAbstract: true
})
export class SongReviewLikeCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => SongReviewCreateNestedOneWithoutLikesInput, {
    nullable: false
  })
  songReview!: SongReviewCreateNestedOneWithoutLikesInput;
}
