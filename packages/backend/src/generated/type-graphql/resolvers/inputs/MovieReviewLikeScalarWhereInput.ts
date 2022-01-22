import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("MovieReviewLikeScalarWhereInput", {
  isAbstract: true
})
export class MovieReviewLikeScalarWhereInput {
  @TypeGraphQL.Field(_type => [MovieReviewLikeScalarWhereInput], {
    nullable: true
  })
  AND?: MovieReviewLikeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikeScalarWhereInput], {
    nullable: true
  })
  OR?: MovieReviewLikeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikeScalarWhereInput], {
    nullable: true
  })
  NOT?: MovieReviewLikeScalarWhereInput[] | undefined;

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
  reviewMovieId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
