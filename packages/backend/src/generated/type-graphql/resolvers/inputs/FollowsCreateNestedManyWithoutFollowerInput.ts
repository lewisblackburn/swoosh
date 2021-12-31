import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowsCreateManyFollowerInputEnvelope } from "../inputs/FollowsCreateManyFollowerInputEnvelope";
import { FollowsCreateOrConnectWithoutFollowerInput } from "../inputs/FollowsCreateOrConnectWithoutFollowerInput";
import { FollowsCreateWithoutFollowerInput } from "../inputs/FollowsCreateWithoutFollowerInput";
import { FollowsWhereUniqueInput } from "../inputs/FollowsWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FollowsCreateNestedManyWithoutFollowerInput {
  @TypeGraphQL.Field(_type => [FollowsCreateWithoutFollowerInput], {
    nullable: true
  })
  create?: FollowsCreateWithoutFollowerInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowsCreateOrConnectWithoutFollowerInput], {
    nullable: true
  })
  connectOrCreate?: FollowsCreateOrConnectWithoutFollowerInput[] | undefined;

  @TypeGraphQL.Field(_type => FollowsCreateManyFollowerInputEnvelope, {
    nullable: true
  })
  createMany?: FollowsCreateManyFollowerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FollowsWhereUniqueInput], {
    nullable: true
  })
  connect?: FollowsWhereUniqueInput[] | undefined;
}
