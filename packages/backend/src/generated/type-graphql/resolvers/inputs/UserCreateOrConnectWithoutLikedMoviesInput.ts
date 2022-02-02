import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutLikedMoviesInput } from "../inputs/UserCreateWithoutLikedMoviesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutLikedMoviesInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutLikedMoviesInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutLikedMoviesInput, {
    nullable: false
  })
  create!: UserCreateWithoutLikedMoviesInput;
}
