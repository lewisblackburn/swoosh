import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutMovieReviewsInput } from "../inputs/UserCreateOrConnectWithoutMovieReviewsInput";
import { UserCreateWithoutMovieReviewsInput } from "../inputs/UserCreateWithoutMovieReviewsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutMovieReviewsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutMovieReviewsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutMovieReviewsInput, {
    nullable: true
  })
  create?: UserCreateWithoutMovieReviewsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutMovieReviewsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutMovieReviewsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
