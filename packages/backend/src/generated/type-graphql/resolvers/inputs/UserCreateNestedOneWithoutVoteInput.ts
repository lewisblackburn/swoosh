import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutVoteInput } from "../inputs/UserCreateOrConnectWithoutVoteInput";
import { UserCreateWithoutVoteInput } from "../inputs/UserCreateWithoutVoteInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedOneWithoutVoteInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutVoteInput, {
    nullable: true
  })
  create?: UserCreateWithoutVoteInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutVoteInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutVoteInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
