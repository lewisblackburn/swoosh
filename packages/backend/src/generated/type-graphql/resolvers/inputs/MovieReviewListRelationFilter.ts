import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewWhereInput } from "../inputs/MovieReviewWhereInput";

@TypeGraphQL.InputType("MovieReviewListRelationFilter", {
  isAbstract: true
})
export class MovieReviewListRelationFilter {
  @TypeGraphQL.Field(_type => MovieReviewWhereInput, {
    nullable: true
  })
  every?: MovieReviewWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovieReviewWhereInput, {
    nullable: true
  })
  some?: MovieReviewWhereInput | undefined;

  @TypeGraphQL.Field(_type => MovieReviewWhereInput, {
    nullable: true
  })
  none?: MovieReviewWhereInput | undefined;
}
