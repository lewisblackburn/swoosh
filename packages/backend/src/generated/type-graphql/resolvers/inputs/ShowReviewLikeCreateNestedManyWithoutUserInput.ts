import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowReviewLikeCreateManyUserInputEnvelope } from "../inputs/ShowReviewLikeCreateManyUserInputEnvelope";
import { ShowReviewLikeCreateOrConnectWithoutUserInput } from "../inputs/ShowReviewLikeCreateOrConnectWithoutUserInput";
import { ShowReviewLikeCreateWithoutUserInput } from "../inputs/ShowReviewLikeCreateWithoutUserInput";
import { ShowReviewLikeWhereUniqueInput } from "../inputs/ShowReviewLikeWhereUniqueInput";

@TypeGraphQL.InputType("ShowReviewLikeCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class ShowReviewLikeCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ShowReviewLikeCreateWithoutUserInput], {
    nullable: true
  })
  create?: ShowReviewLikeCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowReviewLikeCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ShowReviewLikeCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ShowReviewLikeCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ShowReviewLikeCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ShowReviewLikeWhereUniqueInput], {
    nullable: true
  })
  connect?: ShowReviewLikeWhereUniqueInput[] | undefined;
}
