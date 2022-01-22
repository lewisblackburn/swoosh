import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowReviewLikeCreateWithoutUserInput } from "../inputs/ShowReviewLikeCreateWithoutUserInput";
import { ShowReviewLikeWhereUniqueInput } from "../inputs/ShowReviewLikeWhereUniqueInput";

@TypeGraphQL.InputType("ShowReviewLikeCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class ShowReviewLikeCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => ShowReviewLikeWhereUniqueInput, {
    nullable: false
  })
  where!: ShowReviewLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShowReviewLikeCreateWithoutUserInput, {
    nullable: false
  })
  create!: ShowReviewLikeCreateWithoutUserInput;
}
