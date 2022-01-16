import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VoteUserIdReviewIdCompoundUniqueInput } from "../inputs/VoteUserIdReviewIdCompoundUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class VoteWhereUniqueInput {
  @TypeGraphQL.Field(_type => VoteUserIdReviewIdCompoundUniqueInput, {
    nullable: true
  })
  userId_reviewId?: VoteUserIdReviewIdCompoundUniqueInput | undefined;
}
