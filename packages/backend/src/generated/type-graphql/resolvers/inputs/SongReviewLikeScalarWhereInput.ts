import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("SongReviewLikeScalarWhereInput", {
  isAbstract: true
})
export class SongReviewLikeScalarWhereInput {
  @TypeGraphQL.Field(_type => [SongReviewLikeScalarWhereInput], {
    nullable: true
  })
  AND?: SongReviewLikeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongReviewLikeScalarWhereInput], {
    nullable: true
  })
  OR?: SongReviewLikeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongReviewLikeScalarWhereInput], {
    nullable: true
  })
  NOT?: SongReviewLikeScalarWhereInput[] | undefined;

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
  reviewSongId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
