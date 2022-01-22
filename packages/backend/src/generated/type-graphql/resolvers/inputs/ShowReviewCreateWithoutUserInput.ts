import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowCreateNestedOneWithoutReviewsInput } from "../inputs/ShowCreateNestedOneWithoutReviewsInput";
import { ShowReviewLikeCreateNestedManyWithoutShowReviewInput } from "../inputs/ShowReviewLikeCreateNestedManyWithoutShowReviewInput";

@TypeGraphQL.InputType("ShowReviewCreateWithoutUserInput", {
  isAbstract: true
})
export class ShowReviewCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  review?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  rating!: number;

  @TypeGraphQL.Field(_type => ShowReviewLikeCreateNestedManyWithoutShowReviewInput, {
    nullable: true
  })
  likes?: ShowReviewLikeCreateNestedManyWithoutShowReviewInput | undefined;

  @TypeGraphQL.Field(_type => ShowCreateNestedOneWithoutReviewsInput, {
    nullable: false
  })
  show!: ShowCreateNestedOneWithoutReviewsInput;
}
