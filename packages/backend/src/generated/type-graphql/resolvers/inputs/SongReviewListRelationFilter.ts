import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongReviewWhereInput } from "../inputs/SongReviewWhereInput";

@TypeGraphQL.InputType("SongReviewListRelationFilter", {
  isAbstract: true
})
export class SongReviewListRelationFilter {
  @TypeGraphQL.Field(_type => SongReviewWhereInput, {
    nullable: true
  })
  every?: SongReviewWhereInput | undefined;

  @TypeGraphQL.Field(_type => SongReviewWhereInput, {
    nullable: true
  })
  some?: SongReviewWhereInput | undefined;

  @TypeGraphQL.Field(_type => SongReviewWhereInput, {
    nullable: true
  })
  none?: SongReviewWhereInput | undefined;
}
