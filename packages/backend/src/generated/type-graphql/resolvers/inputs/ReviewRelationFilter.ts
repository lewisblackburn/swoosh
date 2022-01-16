import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReviewWhereInput } from "../inputs/ReviewWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReviewRelationFilter {
  @TypeGraphQL.Field(_type => ReviewWhereInput, {
    nullable: true
  })
  is?: ReviewWhereInput | undefined;

  @TypeGraphQL.Field(_type => ReviewWhereInput, {
    nullable: true
  })
  isNot?: ReviewWhereInput | undefined;
}
