import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateFollowsArgs } from "./args/AggregateFollowsArgs";
import { Follows } from "../../../models/Follows";
import { AggregateFollows } from "../../outputs/AggregateFollows";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Follows)
export class AggregateFollowsResolver {
  @TypeGraphQL.Query(_returns => AggregateFollows, {
    nullable: false
  })
  async aggregateFollows(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateFollowsArgs): Promise<AggregateFollows> {
    return getPrismaFromContext(ctx).follows.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
