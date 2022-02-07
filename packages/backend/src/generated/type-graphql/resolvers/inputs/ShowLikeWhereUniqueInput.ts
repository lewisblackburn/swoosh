import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowLikeUserIdShowIdCompoundUniqueInput } from "../inputs/ShowLikeUserIdShowIdCompoundUniqueInput";

@TypeGraphQL.InputType("ShowLikeWhereUniqueInput", {
  isAbstract: true
})
export class ShowLikeWhereUniqueInput {
  @TypeGraphQL.Field(_type => ShowLikeUserIdShowIdCompoundUniqueInput, {
    nullable: true
  })
  userId_showId?: ShowLikeUserIdShowIdCompoundUniqueInput | undefined;
}
