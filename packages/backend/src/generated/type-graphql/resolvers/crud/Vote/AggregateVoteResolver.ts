import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateVoteArgs } from "./args/AggregateVoteArgs";
import { Vote } from "../../../models/Vote";
import { AggregateVote } from "../../outputs/AggregateVote";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Vote)
export class AggregateVoteResolver {
  @TypeGraphQL.Query(_returns => AggregateVote, {
    nullable: false
  })
  async aggregateVote(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateVoteArgs): Promise<AggregateVote> {
    return getPrismaFromContext(ctx).vote.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
