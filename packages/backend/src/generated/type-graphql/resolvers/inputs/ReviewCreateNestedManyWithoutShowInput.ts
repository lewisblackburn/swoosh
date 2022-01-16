import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReviewCreateManyShowInputEnvelope } from "../inputs/ReviewCreateManyShowInputEnvelope";
import { ReviewCreateOrConnectWithoutShowInput } from "../inputs/ReviewCreateOrConnectWithoutShowInput";
import { ReviewCreateWithoutShowInput } from "../inputs/ReviewCreateWithoutShowInput";
import { ReviewWhereUniqueInput } from "../inputs/ReviewWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ReviewCreateNestedManyWithoutShowInput {
  @TypeGraphQL.Field(_type => [ReviewCreateWithoutShowInput], {
    nullable: true
  })
  create?: ReviewCreateWithoutShowInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewCreateOrConnectWithoutShowInput], {
    nullable: true
  })
  connectOrCreate?: ReviewCreateOrConnectWithoutShowInput[] | undefined;

  @TypeGraphQL.Field(_type => ReviewCreateManyShowInputEnvelope, {
    nullable: true
  })
  createMany?: ReviewCreateManyShowInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ReviewWhereUniqueInput], {
    nullable: true
  })
  connect?: ReviewWhereUniqueInput[] | undefined;
}
