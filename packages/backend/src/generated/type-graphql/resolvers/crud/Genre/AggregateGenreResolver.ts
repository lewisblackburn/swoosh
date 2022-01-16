import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateGenreArgs } from "./args/AggregateGenreArgs";
import { Genre } from "../../../models/Genre";
import { AggregateGenre } from "../../outputs/AggregateGenre";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Genre)
export class AggregateGenreResolver {
  @TypeGraphQL.Query(_returns => AggregateGenre, {
    nullable: false
  })
  async aggregateGenre(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateGenreArgs): Promise<AggregateGenre> {
    return getPrismaFromContext(ctx).genre.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
