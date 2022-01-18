import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowWhereInput } from "../inputs/ShowWhereInput";

@TypeGraphQL.InputType("ShowListRelationFilter", {
  isAbstract: true
})
export class ShowListRelationFilter {
  @TypeGraphQL.Field(_type => ShowWhereInput, {
    nullable: true
  })
  every?: ShowWhereInput | undefined;

  @TypeGraphQL.Field(_type => ShowWhereInput, {
    nullable: true
  })
  some?: ShowWhereInput | undefined;

  @TypeGraphQL.Field(_type => ShowWhereInput, {
    nullable: true
  })
  none?: ShowWhereInput | undefined;
}
