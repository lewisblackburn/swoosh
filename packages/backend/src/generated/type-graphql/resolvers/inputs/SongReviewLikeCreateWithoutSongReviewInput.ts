import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutSongReviewLikesInput } from "../inputs/UserCreateNestedOneWithoutSongReviewLikesInput";

@TypeGraphQL.InputType("SongReviewLikeCreateWithoutSongReviewInput", {
  isAbstract: true
})
export class SongReviewLikeCreateWithoutSongReviewInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;
}
