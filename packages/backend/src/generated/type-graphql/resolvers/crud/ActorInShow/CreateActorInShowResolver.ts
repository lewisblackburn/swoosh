import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateActorInShowArgs } from "./args/CreateActorInShowArgs";
import { ActorInShow } from "../../../models/ActorInShow";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ActorInShow)
export class CreateActorInShowResolver {
  @TypeGraphQL.Mutation(_returns => ActorInShow, {
    nullable: false
  })
  async createActorInShow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateActorInShowArgs): Promise<ActorInShow> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).actorInShow.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
