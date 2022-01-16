import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByFavouriteArgs } from "./args/GroupByFavouriteArgs";
import { Favourite } from "../../../models/Favourite";
import { FavouriteGroupBy } from "../../outputs/FavouriteGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Favourite)
export class GroupByFavouriteResolver {
  @TypeGraphQL.Query(_returns => [FavouriteGroupBy], {
    nullable: false
  })
  async groupByFavourite(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByFavouriteArgs): Promise<FavouriteGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).favourite.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
