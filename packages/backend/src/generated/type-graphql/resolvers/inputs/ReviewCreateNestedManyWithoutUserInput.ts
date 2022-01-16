import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReviewCreateManyUserInputEnvelope } from "../inputs/ReviewCreateManyUserInputEnvelope";
import { ReviewCreateOrConnectWithoutUserInput } from "../inputs/ReviewCreateOrConnectWithoutUserInput";
import { ReviewCreateWithoutUserInput } from "../inputs/ReviewCreateWithoutUserInput";
import { ReviewWhereUniqueInput } from "../inputs/ReviewWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReviewCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ReviewCreateWithoutUserInput], {
    nullable: true
  })
  create?: ReviewCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ReviewCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ReviewCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ReviewCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ReviewWhereUniqueInput], {
    nullable: true
  })
  connect?: ReviewWhereUniqueInput[] | undefined;
}
