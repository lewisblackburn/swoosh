import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePlatformOnMovieArgs } from "./args/AggregatePlatformOnMovieArgs";
import { CreateManyPlatformOnMovieArgs } from "./args/CreateManyPlatformOnMovieArgs";
import { CreatePlatformOnMovieArgs } from "./args/CreatePlatformOnMovieArgs";
import { DeleteManyPlatformOnMovieArgs } from "./args/DeleteManyPlatformOnMovieArgs";
import { DeletePlatformOnMovieArgs } from "./args/DeletePlatformOnMovieArgs";
import { FindFirstPlatformOnMovieArgs } from "./args/FindFirstPlatformOnMovieArgs";
import { FindManyPlatformOnMovieArgs } from "./args/FindManyPlatformOnMovieArgs";
import { FindUniquePlatformOnMovieArgs } from "./args/FindUniquePlatformOnMovieArgs";
import { GroupByPlatformOnMovieArgs } from "./args/GroupByPlatformOnMovieArgs";
import { UpdateManyPlatformOnMovieArgs } from "./args/UpdateManyPlatformOnMovieArgs";
import { UpdatePlatformOnMovieArgs } from "./args/UpdatePlatformOnMovieArgs";
import { UpsertPlatformOnMovieArgs } from "./args/UpsertPlatformOnMovieArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { PlatformOnMovie } from "../../../models/PlatformOnMovie";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregatePlatformOnMovie } from "../../outputs/AggregatePlatformOnMovie";
import { PlatformOnMovieGroupBy } from "../../outputs/PlatformOnMovieGroupBy";

@TypeGraphQL.Resolver(_of => PlatformOnMovie)
export class PlatformOnMovieCrudResolver {
  @TypeGraphQL.Query(_returns => PlatformOnMovie, {
    nullable: true
  })
  async platformOnMovie(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePlatformOnMovieArgs): Promise<PlatformOnMovie | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).platformOnMovie.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PlatformOnMovie, {
    nullable: true
  })
  async findFirstPlatformOnMovie(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPlatformOnMovieArgs): Promise<PlatformOnMovie | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).platformOnMovie.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PlatformOnMovie], {
    nullable: false
  })
  async platformOnMovies(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPlatformOnMovieArgs): Promise<PlatformOnMovie[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).platformOnMovie.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PlatformOnMovie, {
    nullable: false
  })
  async createPlatformOnMovie(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreatePlatformOnMovieArgs): Promise<PlatformOnMovie> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).platformOnMovie.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyPlatformOnMovie(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyPlatformOnMovieArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).platformOnMovie.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PlatformOnMovie, {
    nullable: true
  })
  async deletePlatformOnMovie(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeletePlatformOnMovieArgs): Promise<PlatformOnMovie | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).platformOnMovie.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PlatformOnMovie, {
    nullable: true
  })
  async updatePlatformOnMovie(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdatePlatformOnMovieArgs): Promise<PlatformOnMovie | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).platformOnMovie.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyPlatformOnMovie(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyPlatformOnMovieArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).platformOnMovie.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyPlatformOnMovie(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyPlatformOnMovieArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).platformOnMovie.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PlatformOnMovie, {
    nullable: false
  })
  async upsertPlatformOnMovie(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertPlatformOnMovieArgs): Promise<PlatformOnMovie> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).platformOnMovie.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregatePlatformOnMovie, {
    nullable: false
  })
  async aggregatePlatformOnMovie(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePlatformOnMovieArgs): Promise<AggregatePlatformOnMovie> {
    return getPrismaFromContext(ctx).platformOnMovie.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [PlatformOnMovieGroupBy], {
    nullable: false
  })
  async groupByPlatformOnMovie(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPlatformOnMovieArgs): Promise<PlatformOnMovieGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).platformOnMovie.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
