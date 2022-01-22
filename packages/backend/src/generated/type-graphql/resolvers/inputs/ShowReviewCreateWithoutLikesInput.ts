import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowCreateNestedOneWithoutReviewsInput } from "../inputs/ShowCreateNestedOneWithoutReviewsInput";
import { UserCreateNestedOneWithoutShowReviewsInput } from "../inputs/UserCreateNestedOneWithoutShowReviewsInput";

@TypeGraphQL.InputType("ShowReviewCreateWithoutLikesInput", {
  isAbstract: true
})
export class ShowReviewCreateWithoutLikesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  review?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  rating!: number;

  @TypeGraphQL.Field(_type => ShowCreateNestedOneWithoutReviewsInput, {
    nullable: false
  })
  show!: ShowCreateNestedOneWithoutReviewsInput;
}
