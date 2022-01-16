import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReviewCreateNestedOneWithoutVoteInput } from "../inputs/ReviewCreateNestedOneWithoutVoteInput";
import { UserCreateNestedOneWithoutVoteInput } from "../inputs/UserCreateNestedOneWithoutVoteInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class VoteCreateInput {
  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutVoteInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutVoteInput;

  @TypeGraphQL.Field(_type => ReviewCreateNestedOneWithoutVoteInput, {
    nullable: false
  })
  review!: ReviewCreateNestedOneWithoutVoteInput;
}
