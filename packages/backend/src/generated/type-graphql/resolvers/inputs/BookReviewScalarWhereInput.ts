import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("BookReviewScalarWhereInput", {
  isAbstract: true
})
export class BookReviewScalarWhereInput {
  @TypeGraphQL.Field(_type => [BookReviewScalarWhereInput], {
    nullable: true
  })
  AND?: BookReviewScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookReviewScalarWhereInput], {
    nullable: true
  })
  OR?: BookReviewScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookReviewScalarWhereInput], {
    nullable: true
  })
  NOT?: BookReviewScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  review?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  rating?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  bookId?: IntFilter | undefined;
}
