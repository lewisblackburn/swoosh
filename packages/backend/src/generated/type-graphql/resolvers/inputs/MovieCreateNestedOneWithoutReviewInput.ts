import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateOrConnectWithoutReviewInput } from "../inputs/MovieCreateOrConnectWithoutReviewInput";
import { MovieCreateWithoutReviewInput } from "../inputs/MovieCreateWithoutReviewInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieCreateNestedOneWithoutReviewInput", {
  isAbstract: true
})
export class MovieCreateNestedOneWithoutReviewInput {
  @TypeGraphQL.Field(_type => MovieCreateWithoutReviewInput, {
    nullable: true
  })
  create?: MovieCreateWithoutReviewInput | undefined;

  @TypeGraphQL.Field(_type => MovieCreateOrConnectWithoutReviewInput, {
    nullable: true
  })
  connectOrCreate?: MovieCreateOrConnectWithoutReviewInput | undefined;

  @TypeGraphQL.Field(_type => MovieWhereUniqueInput, {
    nullable: true
  })
  connect?: MovieWhereUniqueInput | undefined;
}
