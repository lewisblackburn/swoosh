import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyMovieLikeArgs } from "./args/FindManyMovieLikeArgs";
import { MovieLike } from "../../../models/MovieLike";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieLike)
export class FindManyMovieLikeResolver {
  @TypeGraphQL.Query(_returns => [MovieLike], {
    nullable: false
  })
  async movieLikes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyMovieLikeArgs): Promise<MovieLike[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).movieLike.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
