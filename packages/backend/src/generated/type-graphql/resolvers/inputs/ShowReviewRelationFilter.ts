import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowReviewWhereInput } from "../inputs/ShowReviewWhereInput";

@TypeGraphQL.InputType("ShowReviewRelationFilter", {
  isAbstract: true
})
export class ShowReviewRelationFilter {
  @TypeGraphQL.Field(_type => ShowReviewWhereInput, {
    nullable: true
  })
  is?: ShowReviewWhereInput | undefined;

  @TypeGraphQL.Field(_type => ShowReviewWhereInput, {
    nullable: true
  })
  isNot?: ShowReviewWhereInput | undefined;
}
