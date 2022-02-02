import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieLikeCreateManyMovieInputEnvelope } from "../inputs/MovieLikeCreateManyMovieInputEnvelope";
import { MovieLikeCreateOrConnectWithoutMovieInput } from "../inputs/MovieLikeCreateOrConnectWithoutMovieInput";
import { MovieLikeCreateWithoutMovieInput } from "../inputs/MovieLikeCreateWithoutMovieInput";
import { MovieLikeWhereUniqueInput } from "../inputs/MovieLikeWhereUniqueInput";

@TypeGraphQL.InputType("MovieLikeCreateNestedManyWithoutMovieInput", {
  isAbstract: true
})
export class MovieLikeCreateNestedManyWithoutMovieInput {
  @TypeGraphQL.Field(_type => [MovieLikeCreateWithoutMovieInput], {
    nullable: true
  })
  create?: MovieLikeCreateWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieLikeCreateOrConnectWithoutMovieInput], {
    nullable: true
  })
  connectOrCreate?: MovieLikeCreateOrConnectWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieLikeCreateManyMovieInputEnvelope, {
    nullable: true
  })
  createMany?: MovieLikeCreateManyMovieInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovieLikeWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieLikeWhereUniqueInput[] | undefined;
}
