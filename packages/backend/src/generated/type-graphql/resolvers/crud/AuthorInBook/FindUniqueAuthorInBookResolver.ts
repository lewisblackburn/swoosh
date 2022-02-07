import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueAuthorInBookArgs } from "./args/FindUniqueAuthorInBookArgs";
import { AuthorInBook } from "../../../models/AuthorInBook";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AuthorInBook)
export class FindUniqueAuthorInBookResolver {
  @TypeGraphQL.Query(_returns => AuthorInBook, {
    nullable: true
  })
  async authorInBook(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueAuthorInBookArgs): Promise<AuthorInBook | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).authorInBook.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
