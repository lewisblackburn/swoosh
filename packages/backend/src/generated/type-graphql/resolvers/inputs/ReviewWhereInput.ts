import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookRelationFilter } from "../inputs/BookRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { MovieRelationFilter } from "../inputs/MovieRelationFilter";
import { ShowRelationFilter } from "../inputs/ShowRelationFilter";
import { SongRelationFilter } from "../inputs/SongRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
import { VoteListRelationFilter } from "../inputs/VoteListRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReviewWhereInput {
  @TypeGraphQL.Field(_type => [ReviewWhereInput], {
    nullable: true
  })
  AND?: ReviewWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewWhereInput], {
    nullable: true
  })
  OR?: ReviewWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewWhereInput], {
    nullable: true
  })
  NOT?: ReviewWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  review?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  userId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => MovieRelationFilter, {
    nullable: true
  })
  movie?: MovieRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  movieId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => ShowRelationFilter, {
    nullable: true
  })
  show?: ShowRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  showId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BookRelationFilter, {
    nullable: true
  })
  book?: BookRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  bookId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => SongRelationFilter, {
    nullable: true
  })
  song?: SongRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  songId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => VoteListRelationFilter, {
    nullable: true
  })
  vote?: VoteListRelationFilter | undefined;
}
