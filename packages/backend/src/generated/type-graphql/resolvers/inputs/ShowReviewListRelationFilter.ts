import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowReviewWhereInput } from "../inputs/ShowReviewWhereInput";

@TypeGraphQL.InputType("ShowReviewListRelationFilter", {
  isAbstract: true
})
export class ShowReviewListRelationFilter {
  @TypeGraphQL.Field(_type => ShowReviewWhereInput, {
    nullable: true
  })
  every?: ShowReviewWhereInput | undefined;

  @TypeGraphQL.Field(_type => ShowReviewWhereInput, {
    nullable: true
  })
  some?: ShowReviewWhereInput | undefined;

  @TypeGraphQL.Field(_type => ShowReviewWhereInput, {
    nullable: true
  })
  none?: ShowReviewWhereInput | undefined;
}
