import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutLikedMovieReviewsInput } from "../inputs/UserCreateOrConnectWithoutLikedMovieReviewsInput";
import { UserCreateWithoutLikedMovieReviewsInput } from "../inputs/UserCreateWithoutLikedMovieReviewsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutLikedMovieReviewsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutLikedMovieReviewsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutLikedMovieReviewsInput, {
    nullable: true
  })
  create?: UserCreateWithoutLikedMovieReviewsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutLikedMovieReviewsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutLikedMovieReviewsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
