import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateAuthorInBookArgs } from "./args/AggregateAuthorInBookArgs";
import { CreateAuthorInBookArgs } from "./args/CreateAuthorInBookArgs";
import { CreateManyAuthorInBookArgs } from "./args/CreateManyAuthorInBookArgs";
import { DeleteAuthorInBookArgs } from "./args/DeleteAuthorInBookArgs";
import { DeleteManyAuthorInBookArgs } from "./args/DeleteManyAuthorInBookArgs";
import { FindFirstAuthorInBookArgs } from "./args/FindFirstAuthorInBookArgs";
import { FindManyAuthorInBookArgs } from "./args/FindManyAuthorInBookArgs";
import { FindUniqueAuthorInBookArgs } from "./args/FindUniqueAuthorInBookArgs";
import { GroupByAuthorInBookArgs } from "./args/GroupByAuthorInBookArgs";
import { UpdateAuthorInBookArgs } from "./args/UpdateAuthorInBookArgs";
import { UpdateManyAuthorInBookArgs } from "./args/UpdateManyAuthorInBookArgs";
import { UpsertAuthorInBookArgs } from "./args/UpsertAuthorInBookArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { AuthorInBook } from "../../../models/AuthorInBook";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateAuthorInBook } from "../../outputs/AggregateAuthorInBook";
import { AuthorInBookGroupBy } from "../../outputs/AuthorInBookGroupBy";

@TypeGraphQL.Resolver(_of => AuthorInBook)
export class AuthorInBookCrudResolver {
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

  @TypeGraphQL.Mutation(_returns => AuthorInBook, {
    nullable: false
  })
  async createAuthorInBook(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateAuthorInBookArgs): Promise<AuthorInBook> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).authorInBook.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyAuthorInBook(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAuthorInBookArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).authorInBook.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AuthorInBook, {
    nullable: true
  })
  async deleteAuthorInBook(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteAuthorInBookArgs): Promise<AuthorInBook | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).authorInBook.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyAuthorInBook(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyAuthorInBookArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).authorInBook.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyAuthorInBook(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyAuthorInBookArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).authorInBook.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Query(_returns => AggregateAuthorInBook, {
    nullable: false
  })
  async aggregateAuthorInBook(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAuthorInBookArgs): Promise<AggregateAuthorInBook> {
    return getPrismaFromContext(ctx).authorInBook.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

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
