import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateAuthorInBookArgs } from "./args/UpdateAuthorInBookArgs";
import { AuthorInBook } from "../../../models/AuthorInBook";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AuthorInBook)
export class UpdateAuthorInBookResolver {
  @TypeGraphQL.Mutation(_returns => AuthorInBook, {
    nullable: true
  })
  async updateAuthorInBook(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateAuthorInBookArgs): Promise<AuthorInBook | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).authorInBook.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
