import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VoteWhereUniqueInput } from "../../../inputs/VoteWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteVoteArgs {
  @TypeGraphQL.Field(_type => VoteWhereUniqueInput, {
    nullable: false
  })
  where!: VoteWhereUniqueInput;
}
