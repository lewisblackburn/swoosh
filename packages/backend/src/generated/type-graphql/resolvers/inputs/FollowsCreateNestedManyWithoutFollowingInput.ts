import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowsCreateManyFollowingInputEnvelope } from "../inputs/FollowsCreateManyFollowingInputEnvelope";
import { FollowsCreateOrConnectWithoutFollowingInput } from "../inputs/FollowsCreateOrConnectWithoutFollowingInput";
import { FollowsCreateWithoutFollowingInput } from "../inputs/FollowsCreateWithoutFollowingInput";
import { FollowsWhereUniqueInput } from "../inputs/FollowsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FollowsCreateNestedManyWithoutFollowingInput {
  @TypeGraphQL.Field(_type => [FollowsCreateWithoutFollowingInput], {
    nullable: true
  })
  create?: FollowsCreateWithoutFollowingInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowsCreateOrConnectWithoutFollowingInput], {
    nullable: true
  })
  connectOrCreate?: FollowsCreateOrConnectWithoutFollowingInput[] | undefined;

  @TypeGraphQL.Field(_type => FollowsCreateManyFollowingInputEnvelope, {
    nullable: true
  })
  createMany?: FollowsCreateManyFollowingInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FollowsWhereUniqueInput], {
    nullable: true
  })
  connect?: FollowsWhereUniqueInput[] | undefined;
}
