import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateBookLikeArgs } from "./args/AggregateBookLikeArgs";
import { BookLike } from "../../../models/BookLike";
import { AggregateBookLike } from "../../outputs/AggregateBookLike";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => BookLike)
export class AggregateBookLikeResolver {
  @TypeGraphQL.Query(_returns => AggregateBookLike, {
    nullable: false
  })
  async aggregateBookLike(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateBookLikeArgs): Promise<AggregateBookLike> {
    return getPrismaFromContext(ctx).bookLike.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
