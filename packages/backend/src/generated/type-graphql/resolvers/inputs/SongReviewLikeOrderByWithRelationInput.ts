import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongReviewOrderByWithRelationInput } from "../inputs/SongReviewOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SongReviewLikeOrderByWithRelationInput", {
  isAbstract: true
})
export class SongReviewLikeOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => UserOrderByWithRelationInput, {
    nullable: true
  })
  user?: UserOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  reviewUserId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  reviewSongId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SongReviewOrderByWithRelationInput, {
    nullable: true
  })
  songReview?: SongReviewOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;
}
