import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateOneRequiredWithoutFollowersInput } from "../inputs/UserUpdateOneRequiredWithoutFollowersInput";
import { UserUpdateOneRequiredWithoutFollowingInput } from "../inputs/UserUpdateOneRequiredWithoutFollowingInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FollowsUpdateInput {
  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutFollowingInput, {
    nullable: true
  })
  following?: UserUpdateOneRequiredWithoutFollowingInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutFollowersInput, {
    nullable: true
  })
  follower?: UserUpdateOneRequiredWithoutFollowersInput | undefined;
}
