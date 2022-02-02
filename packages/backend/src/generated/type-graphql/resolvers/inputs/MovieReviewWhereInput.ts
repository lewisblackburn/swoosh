import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { MovieRelationFilter } from "../inputs/MovieRelationFilter";
import { MovieReviewLikeListRelationFilter } from "../inputs/MovieReviewLikeListRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("MovieReviewWhereInput", {
  isAbstract: true
})
export class MovieReviewWhereInput {
  @TypeGraphQL.Field(_type => [MovieReviewWhereInput], {
    nullable: true
  })
  AND?: MovieReviewWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewWhereInput], {
    nullable: true
  })
  OR?: MovieReviewWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewWhereInput], {
    nullable: true
  })
  NOT?: MovieReviewWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  review?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  rating?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => MovieReviewLikeListRelationFilter, {
    nullable: true
  })
  likes?: MovieReviewLikeListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => MovieRelationFilter, {
    nullable: true
  })
  movie?: MovieRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  movieId?: IntFilter | undefined;
}
