import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VoteUpdateInput } from "../../../inputs/VoteUpdateInput";
import { VoteWhereUniqueInput } from "../../../inputs/VoteWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateVoteArgs {
  @TypeGraphQL.Field(_type => VoteUpdateInput, {
    nullable: false
  })
  data!: VoteUpdateInput;

  @TypeGraphQL.Field(_type => VoteWhereUniqueInput, {
    nullable: false
  })
  where!: VoteWhereUniqueInput;
}
