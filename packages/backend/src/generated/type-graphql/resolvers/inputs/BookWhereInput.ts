import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookReviewListRelationFilter } from "../inputs/BookReviewListRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { GenreListRelationFilter } from "../inputs/GenreListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PersonListRelationFilter } from "../inputs/PersonListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("BookWhereInput", {
  isAbstract: true
})
export class BookWhereInput {
  @TypeGraphQL.Field(_type => [BookWhereInput], {
    nullable: true
  })
  AND?: BookWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookWhereInput], {
    nullable: true
  })
  OR?: BookWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookWhereInput], {
    nullable: true
  })
  NOT?: BookWhereInput[] | undefined;

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
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  poster?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  locked?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  released?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => PersonListRelationFilter, {
    nullable: true
  })
  authors?: PersonListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => GenreListRelationFilter, {
    nullable: true
  })
  genres?: GenreListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BookReviewListRelationFilter, {
    nullable: true
  })
  reviews?: BookReviewListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
