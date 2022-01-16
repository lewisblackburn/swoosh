import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VoteUpdateManyMutationInput } from "../../../inputs/VoteUpdateManyMutationInput";
import { VoteWhereInput } from "../../../inputs/VoteWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyVoteArgs {
  @TypeGraphQL.Field(_type => VoteUpdateManyMutationInput, {
    nullable: false
  })
  data!: VoteUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => VoteWhereInput, {
    nullable: true
  })
  where?: VoteWhereInput | undefined;
}
