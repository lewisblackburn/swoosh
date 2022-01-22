import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowReviewUserIdShowIdCompoundUniqueInput } from "../inputs/ShowReviewUserIdShowIdCompoundUniqueInput";

@TypeGraphQL.InputType("ShowReviewWhereUniqueInput", {
  isAbstract: true
})
export class ShowReviewWhereUniqueInput {
  @TypeGraphQL.Field(_type => ShowReviewUserIdShowIdCompoundUniqueInput, {
    nullable: true
  })
  userId_showId?: ShowReviewUserIdShowIdCompoundUniqueInput | undefined;
}
