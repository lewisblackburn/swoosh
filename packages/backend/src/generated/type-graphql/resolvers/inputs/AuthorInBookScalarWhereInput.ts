import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("AuthorInBookScalarWhereInput", {
  isAbstract: true
})
export class AuthorInBookScalarWhereInput {
  @TypeGraphQL.Field(_type => [AuthorInBookScalarWhereInput], {
    nullable: true
  })
  AND?: AuthorInBookScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorInBookScalarWhereInput], {
    nullable: true
  })
  OR?: AuthorInBookScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorInBookScalarWhereInput], {
    nullable: true
  })
  NOT?: AuthorInBookScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  bookId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  personId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
