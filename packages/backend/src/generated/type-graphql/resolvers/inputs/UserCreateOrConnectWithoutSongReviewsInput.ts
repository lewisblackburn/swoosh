import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutSongReviewsInput } from "../inputs/UserCreateWithoutSongReviewsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutSongReviewsInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutSongReviewsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutSongReviewsInput, {
    nullable: false
  })
  create!: UserCreateWithoutSongReviewsInput;
}
