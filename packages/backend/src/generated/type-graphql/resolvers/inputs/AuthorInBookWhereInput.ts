import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookRelationFilter } from "../inputs/BookRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PersonRelationFilter } from "../inputs/PersonRelationFilter";

@TypeGraphQL.InputType("AuthorInBookWhereInput", {
  isAbstract: true
})
export class AuthorInBookWhereInput {
  @TypeGraphQL.Field(_type => [AuthorInBookWhereInput], {
    nullable: true
  })
  AND?: AuthorInBookWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorInBookWhereInput], {
    nullable: true
  })
  OR?: AuthorInBookWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorInBookWhereInput], {
    nullable: true
  })
  NOT?: AuthorInBookWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BookRelationFilter, {
    nullable: true
  })
  book?: BookRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  bookId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => PersonRelationFilter, {
    nullable: true
  })
  person?: PersonRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  personId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
