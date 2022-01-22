import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutSongReviewLikesInput } from "../inputs/UserCreateWithoutSongReviewLikesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutSongReviewLikesInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutSongReviewLikesInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutSongReviewLikesInput, {
    nullable: false
  })
  create!: UserCreateWithoutSongReviewLikesInput;
}
