import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowWhereInput } from "../inputs/ShowWhereInput";

@TypeGraphQL.InputType("ShowRelationFilter", {
  isAbstract: true
})
export class ShowRelationFilter {
  @TypeGraphQL.Field(_type => ShowWhereInput, {
    nullable: true
  })
  is?: ShowWhereInput | undefined;

  @TypeGraphQL.Field(_type => ShowWhereInput, {
    nullable: true
  })
  isNot?: ShowWhereInput | undefined;
}
