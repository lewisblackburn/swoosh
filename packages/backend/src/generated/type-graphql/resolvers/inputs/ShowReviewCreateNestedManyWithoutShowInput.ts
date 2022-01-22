import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShowReviewCreateManyShowInputEnvelope } from "../inputs/ShowReviewCreateManyShowInputEnvelope";
import { ShowReviewCreateOrConnectWithoutShowInput } from "../inputs/ShowReviewCreateOrConnectWithoutShowInput";
import { ShowReviewCreateWithoutShowInput } from "../inputs/ShowReviewCreateWithoutShowInput";
import { ShowReviewWhereUniqueInput } from "../inputs/ShowReviewWhereUniqueInput";

@TypeGraphQL.InputType("ShowReviewCreateNestedManyWithoutShowInput", {
  isAbstract: true
})
export class ShowReviewCreateNestedManyWithoutShowInput {
  @TypeGraphQL.Field(_type => [ShowReviewCreateWithoutShowInput], {
    nullable: true
  })
  create?: ShowReviewCreateWithoutShowInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShowReviewCreateOrConnectWithoutShowInput], {
    nullable: true
  })
  connectOrCreate?: ShowReviewCreateOrConnectWithoutShowInput[] | undefined;

  @TypeGraphQL.Field(_type => ShowReviewCreateManyShowInputEnvelope, {
    nullable: true
  })
  createMany?: ShowReviewCreateManyShowInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ShowReviewWhereUniqueInput], {
    nullable: true
  })
  connect?: ShowReviewWhereUniqueInput[] | undefined;
}
