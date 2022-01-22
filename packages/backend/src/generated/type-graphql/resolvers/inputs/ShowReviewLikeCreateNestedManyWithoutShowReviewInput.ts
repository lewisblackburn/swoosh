import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowReviewLikeCreateManyShowReviewInputEnvelope } from "../inputs/ShowReviewLikeCreateManyShowReviewInputEnvelope";
import { ShowReviewLikeCreateOrConnectWithoutShowReviewInput } from "../inputs/ShowReviewLikeCreateOrConnectWithoutShowReviewInput";
import { ShowReviewLikeCreateWithoutShowReviewInput } from "../inputs/ShowReviewLikeCreateWithoutShowReviewInput";
import { ShowReviewLikeWhereUniqueInput } from "../inputs/ShowReviewLikeWhereUniqueInput";

@TypeGraphQL.InputType("ShowReviewLikeCreateNestedManyWithoutShowReviewInput", {
  isAbstract: true
})
export class ShowReviewLikeCreateNestedManyWithoutShowReviewInput {
  @TypeGraphQL.Field(_type => [ShowReviewLikeCreateWithoutShowReviewInput], {
    nullable: true
  })
  create?: ShowReviewLikeCreateWithoutShowReviewInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowReviewLikeCreateOrConnectWithoutShowReviewInput], {
    nullable: true
  })
  connectOrCreate?: ShowReviewLikeCreateOrConnectWithoutShowReviewInput[] | undefined;

  @TypeGraphQL.Field(_type => ShowReviewLikeCreateManyShowReviewInputEnvelope, {
    nullable: true
  })
  createMany?: ShowReviewLikeCreateManyShowReviewInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ShowReviewLikeWhereUniqueInput], {
    nullable: true
  })
  connect?: ShowReviewLikeWhereUniqueInput[] | undefined;
}
