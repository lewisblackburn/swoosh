import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieLikeCreateManyUserInputEnvelope } from "../inputs/MovieLikeCreateManyUserInputEnvelope";
import { MovieLikeCreateOrConnectWithoutUserInput } from "../inputs/MovieLikeCreateOrConnectWithoutUserInput";
import { MovieLikeCreateWithoutUserInput } from "../inputs/MovieLikeCreateWithoutUserInput";
import { MovieLikeWhereUniqueInput } from "../inputs/MovieLikeWhereUniqueInput";

@TypeGraphQL.InputType("MovieLikeCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class MovieLikeCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [MovieLikeCreateWithoutUserInput], {
    nullable: true
  })
  create?: MovieLikeCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieLikeCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: MovieLikeCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieLikeCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: MovieLikeCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovieLikeWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieLikeWhereUniqueInput[] | undefined;
}
