import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("BookReviewLikeScalarWhereInput", {
  isAbstract: true
})
export class BookReviewLikeScalarWhereInput {
  @TypeGraphQL.Field(_type => [BookReviewLikeScalarWhereInput], {
    nullable: true
  })
  AND?: BookReviewLikeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookReviewLikeScalarWhereInput], {
    nullable: true
  })
  OR?: BookReviewLikeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookReviewLikeScalarWhereInput], {
    nullable: true
  })
  NOT?: BookReviewLikeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  reviewUserId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  reviewBookId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
