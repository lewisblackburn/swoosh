import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookRelationFilter } from "../inputs/BookRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("BookLikeWhereInput", {
  isAbstract: true
})
export class BookLikeWhereInput {
  @TypeGraphQL.Field(_type => [BookLikeWhereInput], {
    nullable: true
  })
  AND?: BookLikeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookLikeWhereInput], {
    nullable: true
  })
  OR?: BookLikeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookLikeWhereInput], {
    nullable: true
  })
  NOT?: BookLikeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

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

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
