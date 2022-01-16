import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VoteWhereInput } from "../../../inputs/VoteWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyVoteArgs {
  @TypeGraphQL.Field(_type => VoteWhereInput, {
    nullable: true
  })
  where?: VoteWhereInput | undefined;
}
