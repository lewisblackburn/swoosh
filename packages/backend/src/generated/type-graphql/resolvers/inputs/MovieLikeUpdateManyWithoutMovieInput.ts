import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieLikeCreateManyMovieInputEnvelope } from "../inputs/MovieLikeCreateManyMovieInputEnvelope";
import { MovieLikeCreateOrConnectWithoutMovieInput } from "../inputs/MovieLikeCreateOrConnectWithoutMovieInput";
import { MovieLikeCreateWithoutMovieInput } from "../inputs/MovieLikeCreateWithoutMovieInput";
import { MovieLikeScalarWhereInput } from "../inputs/MovieLikeScalarWhereInput";
import { MovieLikeUpdateManyWithWhereWithoutMovieInput } from "../inputs/MovieLikeUpdateManyWithWhereWithoutMovieInput";
import { MovieLikeUpdateWithWhereUniqueWithoutMovieInput } from "../inputs/MovieLikeUpdateWithWhereUniqueWithoutMovieInput";
import { MovieLikeUpsertWithWhereUniqueWithoutMovieInput } from "../inputs/MovieLikeUpsertWithWhereUniqueWithoutMovieInput";
import { MovieLikeWhereUniqueInput } from "../inputs/MovieLikeWhereUniqueInput";

@TypeGraphQL.InputType("MovieLikeUpdateManyWithoutMovieInput", {
  isAbstract: true
})
export class MovieLikeUpdateManyWithoutMovieInput {
  @TypeGraphQL.Field(_type => [MovieLikeCreateWithoutMovieInput], {
    nullable: true
  })
  create?: MovieLikeCreateWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieLikeCreateOrConnectWithoutMovieInput], {
    nullable: true
  })
  connectOrCreate?: MovieLikeCreateOrConnectWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieLikeUpsertWithWhereUniqueWithoutMovieInput], {
    nullable: true
  })
  upsert?: MovieLikeUpsertWithWhereUniqueWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieLikeCreateManyMovieInputEnvelope, {
    nullable: true
  })
  createMany?: MovieLikeCreateManyMovieInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [MovieLikeUpdateWithWhereUniqueWithoutMovieInput], {
    nullable: true
  })
  update?: MovieLikeUpdateWithWhereUniqueWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieLikeUpdateManyWithWhereWithoutMovieInput], {
    nullable: true
  })
  updateMany?: MovieLikeUpdateManyWithWhereWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieLikeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MovieLikeScalarWhereInput[] | undefined;
}
