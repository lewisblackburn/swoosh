import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateFavouriteArgs } from "./args/AggregateFavouriteArgs";
import { Favourite } from "../../../models/Favourite";
import { AggregateFavourite } from "../../outputs/AggregateFavourite";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Favourite)
export class AggregateFavouriteResolver {
  @TypeGraphQL.Query(_returns => AggregateFavourite, {
    nullable: false
  })
  async aggregateFavourite(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateFavouriteArgs): Promise<AggregateFavourite> {
    return getPrismaFromContext(ctx).favourite.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
