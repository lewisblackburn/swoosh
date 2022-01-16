import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReviewUpdateOneRequiredWithoutVoteInput } from "../inputs/ReviewUpdateOneRequiredWithoutVoteInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class VoteUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => ReviewUpdateOneRequiredWithoutVoteInput, {
    nullable: true
  })
  review?: ReviewUpdateOneRequiredWithoutVoteInput | undefined;
}
