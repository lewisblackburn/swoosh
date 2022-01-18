import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewLikeCreateManyUserInputEnvelope } from "../inputs/MovieReviewLikeCreateManyUserInputEnvelope";
import { MovieReviewLikeCreateOrConnectWithoutUserInput } from "../inputs/MovieReviewLikeCreateOrConnectWithoutUserInput";
import { MovieReviewLikeCreateWithoutUserInput } from "../inputs/MovieReviewLikeCreateWithoutUserInput";
import { MovieReviewLikeWhereUniqueInput } from "../inputs/MovieReviewLikeWhereUniqueInput";

@TypeGraphQL.InputType("MovieReviewLikeCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class MovieReviewLikeCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [MovieReviewLikeCreateWithoutUserInput], {
    nullable: true
  })
  create?: MovieReviewLikeCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikeCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: MovieReviewLikeCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieReviewLikeCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: MovieReviewLikeCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikeWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieReviewLikeWhereUniqueInput[] | undefined;
}
