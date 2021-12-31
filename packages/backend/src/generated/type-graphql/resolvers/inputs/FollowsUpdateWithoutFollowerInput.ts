import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateOneRequiredWithoutFollowingInput } from "../inputs/UserUpdateOneRequiredWithoutFollowingInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class FollowsUpdateWithoutFollowerInput {
  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutFollowingInput, {
    nullable: true
  })
  following?: UserUpdateOneRequiredWithoutFollowingInput | undefined;
}
