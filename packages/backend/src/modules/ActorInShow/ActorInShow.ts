import {GraphQLResolveInfo} from 'graphql';
import graphqlFields from 'graphql-fields';
import {Args, Ctx, Info, Mutation, Resolver} from 'type-graphql';
import {ActorInShow, CreateActorInShowArgs, DeleteActorInShowArgs} from '../../generated/type-graphql';
import {transformCountFieldIntoSelectRelationsCount, transformFields} from '../../generated/type-graphql/helpers';
import {Context} from '../../interfaces/context';

@Resolver(ActorInShow)
export class ActorInShowResolver {
	@Mutation(() => Boolean, {
		nullable: false,
	})
	async createActorInShow(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: CreateActorInShowArgs
	): Promise<boolean> {
		const {_count} = transformFields(graphqlFields(info as any));
		const actorInShow = await ctx.prisma.actorInShow.create({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});

		return Boolean(actorInShow);
	}

	@Mutation(() => Boolean, {
		nullable: true,
	})
	async deleteActorInShow(@Ctx() ctx: Context, @Args() args: DeleteActorInShowArgs): Promise<boolean> {
		const actorInShow = await ctx.prisma.actorInShow.delete({
			...args,
		});

		return Boolean(actorInShow);
	}
}
