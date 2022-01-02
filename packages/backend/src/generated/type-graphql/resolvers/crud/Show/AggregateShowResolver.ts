import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateShowArgs } from "./args/AggregateShowArgs";
import { Show } from "../../../models/Show";
import { AggregateShow } from "../../outputs/AggregateShow";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Show)
export class AggregateShowResolver {
  @TypeGraphQL.Query(_returns => AggregateShow, {
    nullable: false
  })
  async aggregateShow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateShowArgs): Promise<AggregateShow> {
    return getPrismaFromContext(ctx).show.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
