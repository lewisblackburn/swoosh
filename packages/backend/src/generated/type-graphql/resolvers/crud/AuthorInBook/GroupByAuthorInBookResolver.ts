import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByAuthorInBookArgs } from "./args/GroupByAuthorInBookArgs";
import { AuthorInBook } from "../../../models/AuthorInBook";
import { AuthorInBookGroupBy } from "../../outputs/AuthorInBookGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AuthorInBook)
export class GroupByAuthorInBookResolver {
  @TypeGraphQL.Query(_returns => [AuthorInBookGroupBy], {
    nullable: false
  })
  async groupByAuthorInBook(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByAuthorInBookArgs): Promise<AuthorInBookGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).authorInBook.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
