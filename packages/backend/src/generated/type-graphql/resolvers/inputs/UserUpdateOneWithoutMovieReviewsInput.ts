import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutMovieReviewsInput } from "../inputs/UserCreateOrConnectWithoutMovieReviewsInput";
import { UserCreateWithoutMovieReviewsInput } from "../inputs/UserCreateWithoutMovieReviewsInput";
import { UserUpdateWithoutMovieReviewsInput } from "../inputs/UserUpdateWithoutMovieReviewsInput";
import { UserUpsertWithoutMovieReviewsInput } from "../inputs/UserUpsertWithoutMovieReviewsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutMovieReviewsInput", {
  isAbstract: true
})
export class UserUpdateOneWithoutMovieReviewsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutMovieReviewsInput, {
    nullable: true
  })
  create?: UserCreateWithoutMovieReviewsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutMovieReviewsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutMovieReviewsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutMovieReviewsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutMovieReviewsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutMovieReviewsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutMovieReviewsInput | undefined;
}
