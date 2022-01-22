import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongReviewWhereInput } from "../inputs/SongReviewWhereInput";

@TypeGraphQL.InputType("SongReviewRelationFilter", {
  isAbstract: true
})
export class SongReviewRelationFilter {
  @TypeGraphQL.Field(_type => SongReviewWhereInput, {
    nullable: true
  })
  is?: SongReviewWhereInput | undefined;

  @TypeGraphQL.Field(_type => SongReviewWhereInput, {
    nullable: true
  })
  isNot?: SongReviewWhereInput | undefined;
}
