import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewCreateManyUserInputEnvelope } from "../inputs/MovieReviewCreateManyUserInputEnvelope";
import { MovieReviewCreateOrConnectWithoutUserInput } from "../inputs/MovieReviewCreateOrConnectWithoutUserInput";
import { MovieReviewCreateWithoutUserInput } from "../inputs/MovieReviewCreateWithoutUserInput";
import { MovieReviewWhereUniqueInput } from "../inputs/MovieReviewWhereUniqueInput";

@TypeGraphQL.InputType("MovieReviewCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class MovieReviewCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [MovieReviewCreateWithoutUserInput], {
    nullable: true
  })
  create?: MovieReviewCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: MovieReviewCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieReviewCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: MovieReviewCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieReviewWhereUniqueInput[] | undefined;
}
