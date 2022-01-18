import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewLikeCreateManyMovieReviewInputEnvelope } from "../inputs/MovieReviewLikeCreateManyMovieReviewInputEnvelope";
import { MovieReviewLikeCreateOrConnectWithoutMovieReviewInput } from "../inputs/MovieReviewLikeCreateOrConnectWithoutMovieReviewInput";
import { MovieReviewLikeCreateWithoutMovieReviewInput } from "../inputs/MovieReviewLikeCreateWithoutMovieReviewInput";
import { MovieReviewLikeWhereUniqueInput } from "../inputs/MovieReviewLikeWhereUniqueInput";

@TypeGraphQL.InputType("MovieReviewLikeCreateNestedManyWithoutMovieReviewInput", {
  isAbstract: true
})
export class MovieReviewLikeCreateNestedManyWithoutMovieReviewInput {
  @TypeGraphQL.Field(_type => [MovieReviewLikeCreateWithoutMovieReviewInput], {
    nullable: true
  })
  create?: MovieReviewLikeCreateWithoutMovieReviewInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikeCreateOrConnectWithoutMovieReviewInput], {
    nullable: true
  })
  connectOrCreate?: MovieReviewLikeCreateOrConnectWithoutMovieReviewInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieReviewLikeCreateManyMovieReviewInputEnvelope, {
    nullable: true
  })
  createMany?: MovieReviewLikeCreateManyMovieReviewInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikeWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieReviewLikeWhereUniqueInput[] | undefined;
}
