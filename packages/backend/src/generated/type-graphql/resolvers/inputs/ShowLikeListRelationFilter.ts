import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowLikeWhereInput } from "../inputs/ShowLikeWhereInput";

@TypeGraphQL.InputType("ShowLikeListRelationFilter", {
  isAbstract: true
})
export class ShowLikeListRelationFilter {
  @TypeGraphQL.Field(_type => ShowLikeWhereInput, {
    nullable: true
  })
  every?: ShowLikeWhereInput | undefined;

  @TypeGraphQL.Field(_type => ShowLikeWhereInput, {
    nullable: true
  })
  some?: ShowLikeWhereInput | undefined;

  @TypeGraphQL.Field(_type => ShowLikeWhereInput, {
    nullable: true
  })
  none?: ShowLikeWhereInput | undefined;
}
