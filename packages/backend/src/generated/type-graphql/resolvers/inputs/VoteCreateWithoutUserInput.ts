import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReviewCreateNestedOneWithoutVoteInput } from "../inputs/ReviewCreateNestedOneWithoutVoteInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class VoteCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => ReviewCreateNestedOneWithoutVoteInput, {
    nullable: false
  })
  review!: ReviewCreateNestedOneWithoutVoteInput;
}
