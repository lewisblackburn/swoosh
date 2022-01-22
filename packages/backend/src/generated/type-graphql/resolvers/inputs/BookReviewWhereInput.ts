import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookRelationFilter } from "../inputs/BookRelationFilter";
import { BookReviewLikeListRelationFilter } from "../inputs/BookReviewLikeListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("BookReviewWhereInput", {
  isAbstract: true
})
export class BookReviewWhereInput {
  @TypeGraphQL.Field(_type => [BookReviewWhereInput], {
    nullable: true
  })
  AND?: BookReviewWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookReviewWhereInput], {
    nullable: true
  })
  OR?: BookReviewWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookReviewWhereInput], {
    nullable: true
  })
  NOT?: BookReviewWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  review?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  rating?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => BookReviewLikeListRelationFilter, {
    nullable: true
  })
  likes?: BookReviewLikeListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => BookRelationFilter, {
    nullable: true
  })
  book?: BookRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  bookId?: IntFilter | undefined;
}
