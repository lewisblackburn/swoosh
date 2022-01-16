import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutVoteInput } from "../inputs/UserCreateOrConnectWithoutVoteInput";
import { UserCreateWithoutVoteInput } from "../inputs/UserCreateWithoutVoteInput";
import { UserUpdateWithoutVoteInput } from "../inputs/UserUpdateWithoutVoteInput";
import { UserUpsertWithoutVoteInput } from "../inputs/UserUpsertWithoutVoteInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutVoteInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutVoteInput, {
    nullable: true
  })
  create?: UserCreateWithoutVoteInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutVoteInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutVoteInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutVoteInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutVoteInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutVoteInput, {
    nullable: true
  })
  update?: UserUpdateWithoutVoteInput | undefined;
}
