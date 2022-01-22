import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutSongReviewLikesInput } from "../inputs/UserCreateWithoutSongReviewLikesInput";
import { UserUpdateWithoutSongReviewLikesInput } from "../inputs/UserUpdateWithoutSongReviewLikesInput";

@TypeGraphQL.InputType("UserUpsertWithoutSongReviewLikesInput", {
  isAbstract: true
})
export class UserUpsertWithoutSongReviewLikesInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutSongReviewLikesInput, {
    nullable: false
  })
  update!: UserUpdateWithoutSongReviewLikesInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutSongReviewLikesInput, {
    nullable: false
  })
  create!: UserCreateWithoutSongReviewLikesInput;
}
