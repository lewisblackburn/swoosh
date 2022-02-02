import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateMovieLikeArgs } from "./args/AggregateMovieLikeArgs";
import { MovieLike } from "../../../models/MovieLike";
import { AggregateMovieLike } from "../../outputs/AggregateMovieLike";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieLike)
export class AggregateMovieLikeResolver {
  @TypeGraphQL.Query(_returns => AggregateMovieLike, {
    nullable: false
  })
  async aggregateMovieLike(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMovieLikeArgs): Promise<AggregateMovieLike> {
    return getPrismaFromContext(ctx).movieLike.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
