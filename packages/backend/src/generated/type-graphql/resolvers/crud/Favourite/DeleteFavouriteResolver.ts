import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteFavouriteArgs } from "./args/DeleteFavouriteArgs";
import { Favourite } from "../../../models/Favourite";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Favourite)
export class DeleteFavouriteResolver {
  @TypeGraphQL.Mutation(_returns => Favourite, {
    nullable: true
  })
  async deleteFavourite(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteFavouriteArgs): Promise<Favourite | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).favourite.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
