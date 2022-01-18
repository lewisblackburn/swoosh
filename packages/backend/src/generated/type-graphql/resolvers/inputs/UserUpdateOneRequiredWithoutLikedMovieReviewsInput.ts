import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutLikedMovieReviewsInput } from "../inputs/UserCreateOrConnectWithoutLikedMovieReviewsInput";
import { UserCreateWithoutLikedMovieReviewsInput } from "../inputs/UserCreateWithoutLikedMovieReviewsInput";
import { UserUpdateWithoutLikedMovieReviewsInput } from "../inputs/UserUpdateWithoutLikedMovieReviewsInput";
import { UserUpsertWithoutLikedMovieReviewsInput } from "../inputs/UserUpsertWithoutLikedMovieReviewsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutLikedMovieReviewsInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutLikedMovieReviewsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutLikedMovieReviewsInput, {
    nullable: true
  })
  create?: UserCreateWithoutLikedMovieReviewsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutLikedMovieReviewsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutLikedMovieReviewsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutLikedMovieReviewsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutLikedMovieReviewsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutLikedMovieReviewsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutLikedMovieReviewsInput | undefined;
}
