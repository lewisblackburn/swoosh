import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateOneRequiredWithoutVoteInput } from "../inputs/UserUpdateOneRequiredWithoutVoteInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class VoteUpdateWithoutReviewInput {
  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutVoteInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutVoteInput | undefined;
}
