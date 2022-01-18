import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateOrConnectWithoutReviewInput } from "../inputs/MovieCreateOrConnectWithoutReviewInput";
import { MovieCreateWithoutReviewInput } from "../inputs/MovieCreateWithoutReviewInput";
import { MovieUpdateWithoutReviewInput } from "../inputs/MovieUpdateWithoutReviewInput";
import { MovieUpsertWithoutReviewInput } from "../inputs/MovieUpsertWithoutReviewInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieUpdateOneWithoutReviewInput", {
  isAbstract: true
})
export class MovieUpdateOneWithoutReviewInput {
  @TypeGraphQL.Field(_type => MovieCreateWithoutReviewInput, {
    nullable: true
  })
  create?: MovieCreateWithoutReviewInput | undefined;

  @TypeGraphQL.Field(_type => MovieCreateOrConnectWithoutReviewInput, {
    nullable: true
  })
  connectOrCreate?: MovieCreateOrConnectWithoutReviewInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpsertWithoutReviewInput, {
    nullable: true
  })
  upsert?: MovieUpsertWithoutReviewInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => MovieWhereUniqueInput, {
    nullable: true
  })
  connect?: MovieWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpdateWithoutReviewInput, {
    nullable: true
  })
  update?: MovieUpdateWithoutReviewInput | undefined;
}
