import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReviewUpdateOneRequiredWithoutVoteInput } from "../inputs/ReviewUpdateOneRequiredWithoutVoteInput";
import { UserUpdateOneRequiredWithoutVoteInput } from "../inputs/UserUpdateOneRequiredWithoutVoteInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class VoteUpdateInput {
  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutVoteInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutVoteInput | undefined;

  @TypeGraphQL.Field(_type => ReviewUpdateOneRequiredWithoutVoteInput, {
    nullable: true
  })
  review?: ReviewUpdateOneRequiredWithoutVoteInput | undefined;
}
