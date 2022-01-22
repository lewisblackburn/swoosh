import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowReviewCreateOrConnectWithoutLikesInput } from "../inputs/ShowReviewCreateOrConnectWithoutLikesInput";
import { ShowReviewCreateWithoutLikesInput } from "../inputs/ShowReviewCreateWithoutLikesInput";
import { ShowReviewWhereUniqueInput } from "../inputs/ShowReviewWhereUniqueInput";

@TypeGraphQL.InputType("ShowReviewCreateNestedOneWithoutLikesInput", {
  isAbstract: true
})
export class ShowReviewCreateNestedOneWithoutLikesInput {
  @TypeGraphQL.Field(_type => ShowReviewCreateWithoutLikesInput, {
    nullable: true
  })
  create?: ShowReviewCreateWithoutLikesInput | undefined;

  @TypeGraphQL.Field(_type => ShowReviewCreateOrConnectWithoutLikesInput, {
    nullable: true
  })
  connectOrCreate?: ShowReviewCreateOrConnectWithoutLikesInput | undefined;

  @TypeGraphQL.Field(_type => ShowReviewWhereUniqueInput, {
    nullable: true
  })
  connect?: ShowReviewWhereUniqueInput | undefined;
}
