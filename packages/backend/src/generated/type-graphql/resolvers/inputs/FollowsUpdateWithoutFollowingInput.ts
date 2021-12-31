import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateOneRequiredWithoutFollowersInput } from "../inputs/UserUpdateOneRequiredWithoutFollowersInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FollowsUpdateWithoutFollowingInput {
  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutFollowersInput, {
    nullable: true
  })
  follower?: UserUpdateOneRequiredWithoutFollowersInput | undefined;
}
