import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VoteCreateInput } from "../../../inputs/VoteCreateInput";
import { VoteUpdateInput } from "../../../inputs/VoteUpdateInput";
import { VoteWhereUniqueInput } from "../../../inputs/VoteWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertVoteArgs {
  @TypeGraphQL.Field(_type => VoteWhereUniqueInput, {
    nullable: false
  })
  where!: VoteWhereUniqueInput;

  @TypeGraphQL.Field(_type => VoteCreateInput, {
    nullable: false
  })
  create!: VoteCreateInput;

  @TypeGraphQL.Field(_type => VoteUpdateInput, {
    nullable: false
  })
  update!: VoteUpdateInput;
}
