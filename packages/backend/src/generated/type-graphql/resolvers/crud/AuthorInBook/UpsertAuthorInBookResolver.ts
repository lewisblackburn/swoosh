import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertAuthorInBookArgs } from "./args/UpsertAuthorInBookArgs";
import { AuthorInBook } from "../../../models/AuthorInBook";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AuthorInBook)
export class UpsertAuthorInBookResolver {
  @TypeGraphQL.Mutation(_returns => AuthorInBook, {
    nullable: false
  })
  async upsertAuthorInBook(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertAuthorInBookArgs): Promise<AuthorInBook> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).authorInBook.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
