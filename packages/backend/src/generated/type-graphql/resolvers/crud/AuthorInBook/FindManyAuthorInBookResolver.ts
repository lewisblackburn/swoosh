import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyAuthorInBookArgs } from "./args/FindManyAuthorInBookArgs";
import { AuthorInBook } from "../../../models/AuthorInBook";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AuthorInBook)
export class FindManyAuthorInBookResolver {
  @TypeGraphQL.Query(_returns => [AuthorInBook], {
    nullable: false
  })
  async authorInBooks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyAuthorInBookArgs): Promise<AuthorInBook[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).authorInBook.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
