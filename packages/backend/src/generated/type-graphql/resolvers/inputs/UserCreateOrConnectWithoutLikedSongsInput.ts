import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutLikedSongsInput } from "../inputs/UserCreateWithoutLikedSongsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutLikedSongsInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutLikedSongsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutLikedSongsInput, {
    nullable: false
  })
  create!: UserCreateWithoutLikedSongsInput;
}
