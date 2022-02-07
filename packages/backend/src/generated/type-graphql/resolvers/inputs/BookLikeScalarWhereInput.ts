import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("BookLikeScalarWhereInput", {
  isAbstract: true
})
export class BookLikeScalarWhereInput {
  @TypeGraphQL.Field(_type => [BookLikeScalarWhereInput], {
    nullable: true
  })
  AND?: BookLikeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookLikeScalarWhereInput], {
    nullable: true
  })
  OR?: BookLikeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookLikeScalarWhereInput], {
    nullable: true
  })
  NOT?: BookLikeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  bookId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
