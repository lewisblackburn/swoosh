import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutLikedMoviesInput } from "../inputs/UserCreateOrConnectWithoutLikedMoviesInput";
import { UserCreateWithoutLikedMoviesInput } from "../inputs/UserCreateWithoutLikedMoviesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutLikedMoviesInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutLikedMoviesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutLikedMoviesInput, {
    nullable: true
  })
  create?: UserCreateWithoutLikedMoviesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutLikedMoviesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutLikedMoviesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
