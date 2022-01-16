import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutVoteInput } from "../inputs/UserCreateNestedOneWithoutVoteInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class VoteCreateWithoutReviewInput {
  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutVoteInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutVoteInput;
}
