import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstAuthorInBookArgs } from "./args/FindFirstAuthorInBookArgs";
import { AuthorInBook } from "../../../models/AuthorInBook";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AuthorInBook)
export class FindFirstAuthorInBookResolver {
  @TypeGraphQL.Query(_returns => AuthorInBook, {
    nullable: true
  })
  async findFirstAuthorInBook(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstAuthorInBookArgs): Promise<AuthorInBook | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).authorInBook.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
