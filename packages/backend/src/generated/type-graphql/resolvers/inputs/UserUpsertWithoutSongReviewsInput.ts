import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutSongReviewsInput } from "../inputs/UserCreateWithoutSongReviewsInput";
import { UserUpdateWithoutSongReviewsInput } from "../inputs/UserUpdateWithoutSongReviewsInput";

@TypeGraphQL.InputType("UserUpsertWithoutSongReviewsInput", {
  isAbstract: true
})
export class UserUpsertWithoutSongReviewsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutSongReviewsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutSongReviewsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutSongReviewsInput, {
    nullable: false
  })
  create!: UserCreateWithoutSongReviewsInput;
}
