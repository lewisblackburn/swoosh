import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewCreateManyMovieInputEnvelope } from "../inputs/MovieReviewCreateManyMovieInputEnvelope";
import { MovieReviewCreateOrConnectWithoutMovieInput } from "../inputs/MovieReviewCreateOrConnectWithoutMovieInput";
import { MovieReviewCreateWithoutMovieInput } from "../inputs/MovieReviewCreateWithoutMovieInput";
import { MovieReviewScalarWhereInput } from "../inputs/MovieReviewScalarWhereInput";
import { MovieReviewUpdateManyWithWhereWithoutMovieInput } from "../inputs/MovieReviewUpdateManyWithWhereWithoutMovieInput";
import { MovieReviewUpdateWithWhereUniqueWithoutMovieInput } from "../inputs/MovieReviewUpdateWithWhereUniqueWithoutMovieInput";
import { MovieReviewUpsertWithWhereUniqueWithoutMovieInput } from "../inputs/MovieReviewUpsertWithWhereUniqueWithoutMovieInput";
import { MovieReviewWhereUniqueInput } from "../inputs/MovieReviewWhereUniqueInput";

@TypeGraphQL.InputType("MovieReviewUpdateManyWithoutMovieInput", {
  isAbstract: true
})
export class MovieReviewUpdateManyWithoutMovieInput {
  @TypeGraphQL.Field(_type => [MovieReviewCreateWithoutMovieInput], {
    nullable: true
  })
  create?: MovieReviewCreateWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewCreateOrConnectWithoutMovieInput], {
    nullable: true
  })
  connectOrCreate?: MovieReviewCreateOrConnectWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewUpsertWithWhereUniqueWithoutMovieInput], {
    nullable: true
  })
  upsert?: MovieReviewUpsertWithWhereUniqueWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieReviewCreateManyMovieInputEnvelope, {
    nullable: true
  })
  createMany?: MovieReviewCreateManyMovieInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewWhereUniqueInput], {
    nullable: true
  })
  set?: MovieReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MovieReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewWhereUniqueInput], {
    nullable: true
  })
  delete?: MovieReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewUpdateWithWhereUniqueWithoutMovieInput], {
    nullable: true
  })
  update?: MovieReviewUpdateWithWhereUniqueWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewUpdateManyWithWhereWithoutMovieInput], {
    nullable: true
  })
  updateMany?: MovieReviewUpdateManyWithWhereWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MovieReviewScalarWhereInput[] | undefined;
}
