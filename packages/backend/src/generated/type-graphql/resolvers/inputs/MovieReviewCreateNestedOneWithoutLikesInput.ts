import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewCreateOrConnectWithoutLikesInput } from "../inputs/MovieReviewCreateOrConnectWithoutLikesInput";
import { MovieReviewCreateWithoutLikesInput } from "../inputs/MovieReviewCreateWithoutLikesInput";
import { MovieReviewWhereUniqueInput } from "../inputs/MovieReviewWhereUniqueInput";

@TypeGraphQL.InputType("MovieReviewCreateNestedOneWithoutLikesInput", {
  isAbstract: true
})
export class MovieReviewCreateNestedOneWithoutLikesInput {
  @TypeGraphQL.Field(_type => MovieReviewCreateWithoutLikesInput, {
    nullable: true
  })
  create?: MovieReviewCreateWithoutLikesInput | undefined;

  @TypeGraphQL.Field(_type => MovieReviewCreateOrConnectWithoutLikesInput, {
    nullable: true
  })
  connectOrCreate?: MovieReviewCreateOrConnectWithoutLikesInput | undefined;

  @TypeGraphQL.Field(_type => MovieReviewWhereUniqueInput, {
    nullable: true
  })
  connect?: MovieReviewWhereUniqueInput | undefined;
}
