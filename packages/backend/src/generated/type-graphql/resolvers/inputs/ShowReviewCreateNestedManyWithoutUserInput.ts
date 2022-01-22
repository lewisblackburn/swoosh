import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowReviewCreateManyUserInputEnvelope } from "../inputs/ShowReviewCreateManyUserInputEnvelope";
import { ShowReviewCreateOrConnectWithoutUserInput } from "../inputs/ShowReviewCreateOrConnectWithoutUserInput";
import { ShowReviewCreateWithoutUserInput } from "../inputs/ShowReviewCreateWithoutUserInput";
import { ShowReviewWhereUniqueInput } from "../inputs/ShowReviewWhereUniqueInput";

@TypeGraphQL.InputType("ShowReviewCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class ShowReviewCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ShowReviewCreateWithoutUserInput], {
    nullable: true
  })
  create?: ShowReviewCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowReviewCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ShowReviewCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ShowReviewCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ShowReviewCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ShowReviewWhereUniqueInput], {
    nullable: true
  })
  connect?: ShowReviewWhereUniqueInput[] | undefined;
}
