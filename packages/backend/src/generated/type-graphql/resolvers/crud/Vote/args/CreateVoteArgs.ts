import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VoteCreateInput } from "../../../inputs/VoteCreateInput";

@TypeGraphQL.ArgsType()
export class CreateVoteArgs {
  @TypeGraphQL.Field(_type => VoteCreateInput, {
    nullable: false
  })
  data!: VoteCreateInput;
}
