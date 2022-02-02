import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowOrderByWithRelationInput } from "../inputs/ShowOrderByWithRelationInput";
import { ShowReviewLikeOrderByRelationAggregateInput } from "../inputs/ShowReviewLikeOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ShowReviewOrderByWithRelationInput", {
  isAbstract: true
})
export class ShowReviewOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  review?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  rating?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ShowReviewLikeOrderByRelationAggregateInput, {
    nullable: true
  })
  likes?: ShowReviewLikeOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserOrderByWithRelationInput, {
    nullable: true
  })
  user?: UserOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ShowOrderByWithRelationInput, {
    nullable: true
  })
  show?: ShowOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  showId?: "asc" | "desc" | undefined;
}
