import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewCreateManyMovieInputEnvelope } from "../inputs/MovieReviewCreateManyMovieInputEnvelope";
import { MovieReviewCreateOrConnectWithoutMovieInput } from "../inputs/MovieReviewCreateOrConnectWithoutMovieInput";
import { MovieReviewCreateWithoutMovieInput } from "../inputs/MovieReviewCreateWithoutMovieInput";
import { MovieReviewWhereUniqueInput } from "../inputs/MovieReviewWhereUniqueInput";

@TypeGraphQL.InputType("MovieReviewCreateNestedManyWithoutMovieInput", {
  isAbstract: true
})
export class MovieReviewCreateNestedManyWithoutMovieInput {
  @TypeGraphQL.Field(_type => [MovieReviewCreateWithoutMovieInput], {
    nullable: true
  })
  create?: MovieReviewCreateWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewCreateOrConnectWithoutMovieInput], {
    nullable: true
  })
  connectOrCreate?: MovieReviewCreateOrConnectWithoutMovieInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieReviewCreateManyMovieInputEnvelope, {
    nullable: true
  })
  createMany?: MovieReviewCreateManyMovieInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieReviewWhereUniqueInput[] | undefined;
}
