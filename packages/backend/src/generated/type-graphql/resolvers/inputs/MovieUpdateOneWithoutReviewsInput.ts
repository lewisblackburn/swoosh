import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateOrConnectWithoutReviewsInput } from "../inputs/MovieCreateOrConnectWithoutReviewsInput";
import { MovieCreateWithoutReviewsInput } from "../inputs/MovieCreateWithoutReviewsInput";
import { MovieUpdateWithoutReviewsInput } from "../inputs/MovieUpdateWithoutReviewsInput";
import { MovieUpsertWithoutReviewsInput } from "../inputs/MovieUpsertWithoutReviewsInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MovieUpdateOneWithoutReviewsInput {
  @TypeGraphQL.Field(_type => MovieCreateWithoutReviewsInput, {
    nullable: true
  })
  create?: MovieCreateWithoutReviewsInput | undefined;

  @TypeGraphQL.Field(_type => MovieCreateOrConnectWithoutReviewsInput, {
    nullable: true
  })
  connectOrCreate?: MovieCreateOrConnectWithoutReviewsInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpsertWithoutReviewsInput, {
    nullable: true
  })
  upsert?: MovieUpsertWithoutReviewsInput | undefined;

  @TypeGraphQL.Field(_type => MovieWhereUniqueInput, {
    nullable: true
  })
  connect?: MovieWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => MovieUpdateWithoutReviewsInput, {
    nullable: true
  })
  update?: MovieUpdateWithoutReviewsInput | undefined;
}
