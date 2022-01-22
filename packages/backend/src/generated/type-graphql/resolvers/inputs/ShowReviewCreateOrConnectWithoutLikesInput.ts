import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowReviewCreateWithoutLikesInput } from "../inputs/ShowReviewCreateWithoutLikesInput";
import { ShowReviewWhereUniqueInput } from "../inputs/ShowReviewWhereUniqueInput";

@TypeGraphQL.InputType("ShowReviewCreateOrConnectWithoutLikesInput", {
  isAbstract: true
})
export class ShowReviewCreateOrConnectWithoutLikesInput {
  @TypeGraphQL.Field(_type => ShowReviewWhereUniqueInput, {
    nullable: false
  })
  where!: ShowReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShowReviewCreateWithoutLikesInput, {
    nullable: false
  })
  create!: ShowReviewCreateWithoutLikesInput;
}
