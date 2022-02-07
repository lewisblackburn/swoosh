import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateAuthorInBookArgs } from "./args/AggregateAuthorInBookArgs";
import { AuthorInBook } from "../../../models/AuthorInBook";
import { AggregateAuthorInBook } from "../../outputs/AggregateAuthorInBook";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AuthorInBook)
export class AggregateAuthorInBookResolver {
  @TypeGraphQL.Query(_returns => AggregateAuthorInBook, {
    nullable: false
  })
  async aggregateAuthorInBook(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAuthorInBookArgs): Promise<AggregateAuthorInBook> {
    return getPrismaFromContext(ctx).authorInBook.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
