import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutBookReviewLikesInput } from "../inputs/UserCreateNestedOneWithoutBookReviewLikesInput";

@TypeGraphQL.InputType("BookReviewLikeCreateWithoutBookReviewInput", {
  isAbstract: true
})
export class BookReviewLikeCreateWithoutBookReviewInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutBookReviewLikesInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutBookReviewLikesInput;
}
