import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateActorInShowArgs } from "./args/AggregateActorInShowArgs";
import { ActorInShow } from "../../../models/ActorInShow";
import { AggregateActorInShow } from "../../outputs/AggregateActorInShow";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ActorInShow)
export class AggregateActorInShowResolver {
  @TypeGraphQL.Query(_returns => AggregateActorInShow, {
    nullable: false
  })
  async aggregateActorInShow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateActorInShowArgs): Promise<AggregateActorInShow> {
    return getPrismaFromContext(ctx).actorInShow.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
