import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateOrConnectWithoutReviewsInput } from "../inputs/MovieCreateOrConnectWithoutReviewsInput";
import { MovieCreateWithoutReviewsInput } from "../inputs/MovieCreateWithoutReviewsInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieCreateNestedOneWithoutReviewsInput", {
  isAbstract: true
})
export class MovieCreateNestedOneWithoutReviewsInput {
  @TypeGraphQL.Field(_type => MovieCreateWithoutReviewsInput, {
    nullable: true
  })
  create?: MovieCreateWithoutReviewsInput | undefined;

  @TypeGraphQL.Field(_type => MovieCreateOrConnectWithoutReviewsInput, {
    nullable: true
  })
  connectOrCreate?: MovieCreateOrConnectWithoutReviewsInput | undefined;

  @TypeGraphQL.Field(_type => MovieWhereUniqueInput, {
    nullable: true
  })
  connect?: MovieWhereUniqueInput | undefined;
}
