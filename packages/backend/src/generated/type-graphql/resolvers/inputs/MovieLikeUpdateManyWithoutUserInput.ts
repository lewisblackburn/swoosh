import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieLikeCreateManyUserInputEnvelope } from "../inputs/MovieLikeCreateManyUserInputEnvelope";
import { MovieLikeCreateOrConnectWithoutUserInput } from "../inputs/MovieLikeCreateOrConnectWithoutUserInput";
import { MovieLikeCreateWithoutUserInput } from "../inputs/MovieLikeCreateWithoutUserInput";
import { MovieLikeScalarWhereInput } from "../inputs/MovieLikeScalarWhereInput";
import { MovieLikeUpdateManyWithWhereWithoutUserInput } from "../inputs/MovieLikeUpdateManyWithWhereWithoutUserInput";
import { MovieLikeUpdateWithWhereUniqueWithoutUserInput } from "../inputs/MovieLikeUpdateWithWhereUniqueWithoutUserInput";
import { MovieLikeUpsertWithWhereUniqueWithoutUserInput } from "../inputs/MovieLikeUpsertWithWhereUniqueWithoutUserInput";
import { MovieLikeWhereUniqueInput } from "../inputs/MovieLikeWhereUniqueInput";

@TypeGraphQL.InputType("MovieLikeUpdateManyWithoutUserInput", {
  isAbstract: true
})
export class MovieLikeUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [MovieLikeCreateWithoutUserInput], {
    nullable: true
  })
  create?: MovieLikeCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieLikeCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: MovieLikeCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieLikeUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: MovieLikeUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieLikeCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: MovieLikeCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovieLikeWhereUniqueInput], {
    nullable: true
  })
  set?: MovieLikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieLikeWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MovieLikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieLikeWhereUniqueInput], {
    nullable: true
  })
  delete?: MovieLikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieLikeWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieLikeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieLikeUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: MovieLikeUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieLikeUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: MovieLikeUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieLikeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MovieLikeScalarWhereInput[] | undefined;
}
