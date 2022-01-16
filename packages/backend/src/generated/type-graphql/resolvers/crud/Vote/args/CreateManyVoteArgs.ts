import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VoteCreateManyInput } from "../../../inputs/VoteCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyVoteArgs {
  @TypeGraphQL.Field(_type => [VoteCreateManyInput], {
    nullable: false
  })
  data!: VoteCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
