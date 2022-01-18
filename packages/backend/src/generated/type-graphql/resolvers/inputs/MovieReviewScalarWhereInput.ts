import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("MovieReviewScalarWhereInput", {
  isAbstract: true
})
export class MovieReviewScalarWhereInput {
  @TypeGraphQL.Field(_type => [MovieReviewScalarWhereInput], {
    nullable: true
  })
  AND?: MovieReviewScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewScalarWhereInput], {
    nullable: true
  })
  OR?: MovieReviewScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewScalarWhereInput], {
    nullable: true
  })
  NOT?: MovieReviewScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  title?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  review?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  rating?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  userId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  movieId?: IntNullableFilter | undefined;
}
