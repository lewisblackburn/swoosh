import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewLikeCreateManyUserInputEnvelope } from "../inputs/MovieReviewLikeCreateManyUserInputEnvelope";
import { MovieReviewLikeCreateOrConnectWithoutUserInput } from "../inputs/MovieReviewLikeCreateOrConnectWithoutUserInput";
import { MovieReviewLikeCreateWithoutUserInput } from "../inputs/MovieReviewLikeCreateWithoutUserInput";
import { MovieReviewLikeScalarWhereInput } from "../inputs/MovieReviewLikeScalarWhereInput";
import { MovieReviewLikeUpdateManyWithWhereWithoutUserInput } from "../inputs/MovieReviewLikeUpdateManyWithWhereWithoutUserInput";
import { MovieReviewLikeUpdateWithWhereUniqueWithoutUserInput } from "../inputs/MovieReviewLikeUpdateWithWhereUniqueWithoutUserInput";
import { MovieReviewLikeUpsertWithWhereUniqueWithoutUserInput } from "../inputs/MovieReviewLikeUpsertWithWhereUniqueWithoutUserInput";
import { MovieReviewLikeWhereUniqueInput } from "../inputs/MovieReviewLikeWhereUniqueInput";

@TypeGraphQL.InputType("MovieReviewLikeUpdateManyWithoutUserInput", {
  isAbstract: true
})
export class MovieReviewLikeUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [MovieReviewLikeCreateWithoutUserInput], {
    nullable: true
  })
  create?: MovieReviewLikeCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikeCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: MovieReviewLikeCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikeUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: MovieReviewLikeUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieReviewLikeCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: MovieReviewLikeCreateManyUserInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [MovieReviewLikeUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: MovieReviewLikeUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikeUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: MovieReviewLikeUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MovieReviewLikeScalarWhereInput[] | undefined;
}
