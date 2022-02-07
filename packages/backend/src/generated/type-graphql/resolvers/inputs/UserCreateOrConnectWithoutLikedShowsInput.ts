import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutLikedShowsInput } from "../inputs/UserCreateWithoutLikedShowsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutLikedShowsInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutLikedShowsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutLikedShowsInput, {
    nullable: false
  })
  create!: UserCreateWithoutLikedShowsInput;
}
