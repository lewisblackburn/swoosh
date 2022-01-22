import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Show } from "../models/Show";
import { ShowReviewLike } from "../models/ShowReviewLike";
import { User } from "../models/User";
import { ShowReviewCount } from "../resolvers/outputs/ShowReviewCount";

@TypeGraphQL.ObjectType("ShowReview", {
  isAbstract: true
})
export class ShowReview {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  review?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  rating!: number;

  likes?: ShowReviewLike[];

  user?: User;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  show?: Show;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  showId!: number;

  @TypeGraphQL.Field(_type => ShowReviewCount, {
    nullable: true
  })
  _count?: ShowReviewCount | null;
}
