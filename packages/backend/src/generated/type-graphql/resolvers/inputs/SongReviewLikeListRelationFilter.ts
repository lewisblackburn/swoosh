import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongReviewLikeWhereInput } from "../inputs/SongReviewLikeWhereInput";

@TypeGraphQL.InputType("SongReviewLikeListRelationFilter", {
  isAbstract: true
})
export class SongReviewLikeListRelationFilter {
  @TypeGraphQL.Field(_type => SongReviewLikeWhereInput, {
    nullable: true
  })
  every?: SongReviewLikeWhereInput | undefined;

  @TypeGraphQL.Field(_type => SongReviewLikeWhereInput, {
    nullable: true
  })
  some?: SongReviewLikeWhereInput | undefined;

  @TypeGraphQL.Field(_type => SongReviewLikeWhereInput, {
    nullable: true
  })
  none?: SongReviewLikeWhereInput | undefined;
}
