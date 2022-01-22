import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutShowReviewLikesInput } from "../inputs/UserCreateNestedOneWithoutShowReviewLikesInput";

@TypeGraphQL.InputType("ShowReviewLikeCreateWithoutShowReviewInput", {
  isAbstract: true
})
export class ShowReviewLikeCreateWithoutShowReviewInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;
}
