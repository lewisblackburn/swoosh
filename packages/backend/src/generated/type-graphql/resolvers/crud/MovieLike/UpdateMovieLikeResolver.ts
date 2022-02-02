import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateMovieLikeArgs } from "./args/UpdateMovieLikeArgs";
import { MovieLike } from "../../../models/MovieLike";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieLike)
export class UpdateMovieLikeResolver {
  @TypeGraphQL.Mutation(_returns => MovieLike, {
    nullable: true
  })
  async updateMovieLike(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateMovieLikeArgs): Promise<MovieLike | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).movieLike.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
