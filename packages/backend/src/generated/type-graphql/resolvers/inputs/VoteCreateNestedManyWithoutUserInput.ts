import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VoteCreateManyUserInputEnvelope } from "../inputs/VoteCreateManyUserInputEnvelope";
import { VoteCreateOrConnectWithoutUserInput } from "../inputs/VoteCreateOrConnectWithoutUserInput";
import { VoteCreateWithoutUserInput } from "../inputs/VoteCreateWithoutUserInput";
import { VoteWhereUniqueInput } from "../inputs/VoteWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class VoteCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [VoteCreateWithoutUserInput], {
    nullable: true
  })
  create?: VoteCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [VoteCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: VoteCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => VoteCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: VoteCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [VoteWhereUniqueInput], {
    nullable: true
  })
  connect?: VoteWhereUniqueInput[] | undefined;
}
