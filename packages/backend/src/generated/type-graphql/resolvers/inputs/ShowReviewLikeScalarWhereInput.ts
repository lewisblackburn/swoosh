import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("ShowReviewLikeScalarWhereInput", {
  isAbstract: true
})
export class ShowReviewLikeScalarWhereInput {
  @TypeGraphQL.Field(_type => [ShowReviewLikeScalarWhereInput], {
    nullable: true
  })
  AND?: ShowReviewLikeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowReviewLikeScalarWhereInput], {
    nullable: true
  })
  OR?: ShowReviewLikeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowReviewLikeScalarWhereInput], {
    nullable: true
  })
  NOT?: ShowReviewLikeScalarWhereInput[] | undefined;

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
  reviewShowId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
