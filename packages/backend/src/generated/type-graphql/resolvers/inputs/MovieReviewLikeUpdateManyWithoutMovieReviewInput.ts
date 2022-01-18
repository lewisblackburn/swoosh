import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewLikeCreateManyMovieReviewInputEnvelope } from "../inputs/MovieReviewLikeCreateManyMovieReviewInputEnvelope";
import { MovieReviewLikeCreateOrConnectWithoutMovieReviewInput } from "../inputs/MovieReviewLikeCreateOrConnectWithoutMovieReviewInput";
import { MovieReviewLikeCreateWithoutMovieReviewInput } from "../inputs/MovieReviewLikeCreateWithoutMovieReviewInput";
import { MovieReviewLikeScalarWhereInput } from "../inputs/MovieReviewLikeScalarWhereInput";
import { MovieReviewLikeUpdateManyWithWhereWithoutMovieReviewInput } from "../inputs/MovieReviewLikeUpdateManyWithWhereWithoutMovieReviewInput";
import { MovieReviewLikeUpdateWithWhereUniqueWithoutMovieReviewInput } from "../inputs/MovieReviewLikeUpdateWithWhereUniqueWithoutMovieReviewInput";
import { MovieReviewLikeUpsertWithWhereUniqueWithoutMovieReviewInput } from "../inputs/MovieReviewLikeUpsertWithWhereUniqueWithoutMovieReviewInput";
import { MovieReviewLikeWhereUniqueInput } from "../inputs/MovieReviewLikeWhereUniqueInput";

@TypeGraphQL.InputType("MovieReviewLikeUpdateManyWithoutMovieReviewInput", {
  isAbstract: true
})
export class MovieReviewLikeUpdateManyWithoutMovieReviewInput {
  @TypeGraphQL.Field(_type => [MovieReviewLikeCreateWithoutMovieReviewInput], {
    nullable: true
  })
  create?: MovieReviewLikeCreateWithoutMovieReviewInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikeCreateOrConnectWithoutMovieReviewInput], {
    nullable: true
  })
  connectOrCreate?: MovieReviewLikeCreateOrConnectWithoutMovieReviewInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikeUpsertWithWhereUniqueWithoutMovieReviewInput], {
    nullable: true
  })
  upsert?: MovieReviewLikeUpsertWithWhereUniqueWithoutMovieReviewInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieReviewLikeCreateManyMovieReviewInputEnvelope, {
    nullable: true
  })
  createMany?: MovieReviewLikeCreateManyMovieReviewInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikeWhereUniqueInput], {
    nullable: true
  })
  set?: MovieReviewLikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikeWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MovieReviewLikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikeWhereUniqueInput], {
    nullable: true
  })
  delete?: MovieReviewLikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikeWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieReviewLikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikeUpdateWithWhereUniqueWithoutMovieReviewInput], {
    nullable: true
  })
  update?: MovieReviewLikeUpdateWithWhereUniqueWithoutMovieReviewInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikeUpdateManyWithWhereWithoutMovieReviewInput], {
    nullable: true
  })
  updateMany?: MovieReviewLikeUpdateManyWithWhereWithoutMovieReviewInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MovieReviewLikeScalarWhereInput[] | undefined;
}
